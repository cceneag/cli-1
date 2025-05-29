const nock = require('nock')
const ciInfo = require('ci-info')

class MockOidc {
  constructor ({ github = false, gitlab = false }) {
    this.github = github
    this.gitlab = gitlab
    this.setupEnvironment()
  }

  ACTIONS_ID_TOKEN_REQUEST_URL = 'https://github.com/actions/id-token'
  ACTIONS_ID_TOKEN_REQUEST_TOKEN = 'ACTIONS_ID_TOKEN_REQUEST_TOKEN'
  NPM_ID_TOKEN = 'NPM_ID_TOKEN'
  GITHUB_ID_TOKEN = 'mock-github-id-token'

  get idToken () {
    if (this.github) {
      return this.GITHUB_ID_TOKEN
    }
    if (this.gitlab) {
      return this.NPM_ID_TOKEN
    }
    return undefined
  }

  setupEnvironment () {
    if (this.github) {
      process.env.CI = 'true'
      process.env.GITHUB_ACTIONS = 'true'
      process.env.ACTIONS_ID_TOKEN_REQUEST_URL = this.ACTIONS_ID_TOKEN_REQUEST_URL
      process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN = this.ACTIONS_ID_TOKEN_REQUEST_TOKEN
      ciInfo.GITHUB_ACTIONS = true
    }

    if (this.gitlab) {
      process.env.CI = 'true'
      process.env.GITLAB_CI = 'true'
      process.env.NPM_ID_TOKEN = this.NPM_ID_TOKEN
      ciInfo.GITLAB = true
    }
  }

  mockGithubOidc ({ idToken = this.GITHUB_ID_TOKEN, audience, statusCode = 200 } = {}) {
    if (!this.github) {
      return
    }

    const url = new URL(this.ACTIONS_ID_TOKEN_REQUEST_URL)
    nock(url.origin)
      .post(url.pathname)
      .query({ audience })
      .matchHeader('authorization', `Bearer ${this.ACTIONS_ID_TOKEN_REQUEST_TOKEN}`)
      .matchHeader('accept', 'application/json')
      .reply(statusCode, statusCode !== 500 ? { value: idToken } : { message: 'Internal Server Error' })

    return { idToken }
  }

  reset () {
    delete process.env.CI
    delete process.env.GITHUB_ACTIONS
    delete process.env.ACTIONS_ID_TOKEN_REQUEST_URL
    delete process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN
    delete process.env.GITLAB_CI
    delete process.env.NPM_ID_TOKEN
    ciInfo.GITHUB_ACTIONS = false
    ciInfo.GITLAB = false
    nock.cleanAll()
  }

  static tnock (t, opts = {}, { debug = false, strict = false } = {}) {
    const instance = new MockOidc(opts)

    const noMatch = (req) => {
      if (debug) {
        /* eslint-disable-next-line no-console */
        console.error('NO MATCH', t.name, req.options ? req.options : req.path)
      }
      if (strict) {
        t.comment(`Unmatched request: ${req.method} ${req.path}`)
        t.fail(`Unmatched request: ${req.method} ${req.path}`)
      }
    }

    nock.emitter.on('no match', noMatch)
    nock.disableNetConnect()

    if (strict) {
      t.afterEach(() => {
        t.strictSame(nock.pendingMocks(), [], 'no pending mocks after each')
      })
    }

    t.teardown(() => {
      nock.enableNetConnect()
      nock.emitter.off('no match', noMatch)
      nock.cleanAll()
      instance.reset()
    })

    return instance
  }
}

module.exports = {
  MockOidc,
}
