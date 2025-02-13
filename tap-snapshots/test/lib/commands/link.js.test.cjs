/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/lib/commands/link.js > TAP > hash character in working directory path > should create a global link to current pkg, even within path with hash 1`] = `
{CWD}/.tap/fixtures/test-lib-commands-link.js-hash-character-in-working-directory-path/global/node_modules/test-pkg-link -> {CWD}/.tap/fixtures/test-lib-commands-link.js-hash-character-in-working-directory-path/other/i_like_#_in_my_paths/test-pkg-link

`

exports[`test/lib/commands/link.js > TAP > link global linked pkg to local nm when using args > should create a local symlink to global pkg 1`] = `
{CWD}/.tap/fixtures/test-lib-commands-link.js-link-global-linked-pkg-to-local-nm-when-using-args/prefix/node_modules/@myscope/bar -> {CWD}/.tap/fixtures/test-lib-commands-link.js-link-global-linked-pkg-to-local-nm-when-using-args/global/node_modules/@myscope/bar
{CWD}/.tap/fixtures/test-lib-commands-link.js-link-global-linked-pkg-to-local-nm-when-using-args/prefix/node_modules/@myscope/linked -> {CWD}/.tap/fixtures/test-lib-commands-link.js-link-global-linked-pkg-to-local-nm-when-using-args/other/scoped-linked
{CWD}/.tap/fixtures/test-lib-commands-link.js-link-global-linked-pkg-to-local-nm-when-using-args/prefix/node_modules/a -> {CWD}/.tap/fixtures/test-lib-commands-link.js-link-global-linked-pkg-to-local-nm-when-using-args/global/node_modules/a
{CWD}/.tap/fixtures/test-lib-commands-link.js-link-global-linked-pkg-to-local-nm-when-using-args/prefix/node_modules/link-me-too -> {CWD}/.tap/fixtures/test-lib-commands-link.js-link-global-linked-pkg-to-local-nm-when-using-args/other/link-me-too
{CWD}/.tap/fixtures/test-lib-commands-link.js-link-global-linked-pkg-to-local-nm-when-using-args/prefix/node_modules/test-pkg-link -> {CWD}/.tap/fixtures/test-lib-commands-link.js-link-global-linked-pkg-to-local-nm-when-using-args/other/test-pkg-link

`

exports[`test/lib/commands/link.js > TAP > link global linked pkg to local workspace using args > should create a local symlink to global pkg 1`] = `
{CWD}/.tap/fixtures/test-lib-commands-link.js-link-global-linked-pkg-to-local-workspace-using-args/prefix/node_modules/@myscope/bar -> {CWD}/.tap/fixtures/test-lib-commands-link.js-link-global-linked-pkg-to-local-workspace-using-args/global/node_modules/@myscope/bar
{CWD}/.tap/fixtures/test-lib-commands-link.js-link-global-linked-pkg-to-local-workspace-using-args/prefix/node_modules/@myscope/linked -> {CWD}/.tap/fixtures/test-lib-commands-link.js-link-global-linked-pkg-to-local-workspace-using-args/other/scoped-linked
{CWD}/.tap/fixtures/test-lib-commands-link.js-link-global-linked-pkg-to-local-workspace-using-args/prefix/node_modules/a -> {CWD}/.tap/fixtures/test-lib-commands-link.js-link-global-linked-pkg-to-local-workspace-using-args/global/node_modules/a
{CWD}/.tap/fixtures/test-lib-commands-link.js-link-global-linked-pkg-to-local-workspace-using-args/prefix/node_modules/link-me-too -> {CWD}/.tap/fixtures/test-lib-commands-link.js-link-global-linked-pkg-to-local-workspace-using-args/other/link-me-too
{CWD}/.tap/fixtures/test-lib-commands-link.js-link-global-linked-pkg-to-local-workspace-using-args/prefix/node_modules/test-pkg-link -> {CWD}/.tap/fixtures/test-lib-commands-link.js-link-global-linked-pkg-to-local-workspace-using-args/other/test-pkg-link
{CWD}/.tap/fixtures/test-lib-commands-link.js-link-global-linked-pkg-to-local-workspace-using-args/prefix/node_modules/x -> {CWD}/.tap/fixtures/test-lib-commands-link.js-link-global-linked-pkg-to-local-workspace-using-args/prefix/packages/x

`

exports[`test/lib/commands/link.js > TAP > link pkg already in global space > should create a local symlink to global pkg 1`] = `
{CWD}/.tap/fixtures/test-lib-commands-link.js-link-pkg-already-in-global-space/prefix/node_modules/@myscope/linked -> {CWD}/.tap/fixtures/test-lib-commands-link.js-link-pkg-already-in-global-space/other/scoped-linked

`

exports[`test/lib/commands/link.js > TAP > link pkg already in global space when prefix is a symlink > should create a local symlink to global pkg 1`] = `
{CWD}/.tap/fixtures/test-lib-commands-link.js-link-pkg-already-in-global-space-when-prefix-is-a-symlink/prefix/node_modules/@myscope/linked -> {CWD}/.tap/fixtures/test-lib-commands-link.js-link-pkg-already-in-global-space-when-prefix-is-a-symlink/other/scoped-linked

`

exports[`test/lib/commands/link.js > TAP > link to globalDir when in current working dir of pkg and no args > should create a global link to current pkg 1`] = `
{CWD}/.tap/fixtures/test-lib-commands-link.js-link-to-globalDir-when-in-current-working-dir-of-pkg-and-no-args/global/node_modules/test-pkg-link -> {CWD}/.tap/fixtures/test-lib-commands-link.js-link-to-globalDir-when-in-current-working-dir-of-pkg-and-no-args/prefix

`

exports[`test/lib/commands/link.js > TAP > link ws to globalDir when workspace specified and no args > should create a global link to current pkg 1`] = `
{CWD}/.tap/fixtures/test-lib-commands-link.js-link-ws-to-globalDir-when-workspace-specified-and-no-args/global/node_modules/a -> {CWD}/.tap/fixtures/test-lib-commands-link.js-link-ws-to-globalDir-when-workspace-specified-and-no-args/prefix/packages/a

`

exports[`test/lib/commands/link.js > TAP > test linked installed as symlinks > linked package should not be installed 1`] = `
{CWD}/.tap/fixtures/test-lib-commands-link.js-test-linked-installed-as-symlinks/prefix/node_modules/mylink -> {CWD}/.tap/fixtures/test-lib-commands-link.js-test-linked-installed-as-symlinks/other/mylink

`
