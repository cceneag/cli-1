// take a path and a resolved value, and turn it into a resolution from
// the given new path.  This is used with converting a package.json's
// relative file: path into one suitable for a lockfile, or between
// lockfiles, and for converting hosted git repos to a consistent url type.
const npa = require('npm-package-arg')
const relpath = require('./relpath.js')

const consistentResolve = (resolved, fromPath, toPath, relPaths = false) => {
  if (!resolved) {
    return null
  }

  try {
    const hostedOpt = { noCommittish: false }
    const {
      fetchSpec,
      saveSpec,
      type,
      hosted,
      rawSpec,
      raw,
    } = npa(resolved, fromPath)

    // file or directory deps
    if (type === 'file' || type === 'directory') {
      if (relPaths && toPath) {
        return `file:${relpath(toPath, fetchSpec)}`
      }
      return `file:${fetchSpec}`
    }

    // hosted git deps
    if (hosted) {
      // 1) CDN shortcut (npm: or github:…)
      const shortcut = hosted.shortcut(hostedOpt)
      if (resolved === shortcut) {
        return shortcut
      }
      // 2) CDN registry tarball URL
      if (typeof hosted.tarball === 'function') {
        const tarball = hosted.tarball(hostedOpt)
        if (resolved === tarball) {
          return tarball
        }
      }
      // 3) Explicit git+https URL
      if (/^(?:git\+)?https:\/\//.test(resolved)) {
        return `git+${hosted.https(hostedOpt)}`
      }
      // 4) Explicit git+ssh URL
      if (/^(?:git\+)?ssh:\/\//.test(resolved)) {
        return `git+${hosted.sshurl(hostedOpt)}`
      }
      // 5) Fallback: choose based on auth (private => https, else ssh)
      return `git+${hosted.auth
        ? hosted.https(hostedOpt)
        : hosted.sshurl(hostedOpt)}`
    }

    // plain git URLs (non-hosted)
    if (type === 'git') {
      return saveSpec
    }
    // wildcard
    if (rawSpec === '*') {
      return raw
    }
    // everything else
    return rawSpec
  } catch (_) {
    // not valid for npm-package-arg ⇒ leave untouched
    return resolved
  }
}

module.exports = consistentResolve
