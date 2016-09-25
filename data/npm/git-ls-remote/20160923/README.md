## Overview
[`git-ls-remote`](https://www.npmjs.com/package/git-ls-remote) is an npm package used for listing references in a remote git repository.
Vulnerable versions of the package pass the git `url` argument to the `exec` function without sanitisation. An attacker can use this to inject malicious shell commands to disrupt server operation or obtain sensitive information.

## Example

```js
var git = require('git-ls-remote');
git.head('https://gitrepo.com/; cat /etc/passwd', function(err, result) {
  // ...
});
```

## Remediation
Upgrade `git-ls-remote` to version 0.2.0 or higher.

## References
- https://github.com/benlemasurier/git-ls-remote/pull/1
