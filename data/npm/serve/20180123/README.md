## Overview
[`serve`](https://www.npmjs.com/package/serve) is a  package that lists and allows browsing static file serving and directories in the browser.

It does not properly sanitze dots (`%2e`) and slashes (`%2f`), allowing an attacker to leverage these characters to traverse the directory tree and list the content of any directory the user running the process has access to.

**Note:** An attacker will not be able to use this vulnerability to read arbitrary files.

## Remediation
Upgrade `serve` to version 6.4.9 or higher.

## References
- [HackerOne Report](https://hackerone.com/reports/307666)
- [GitHub PR](https://github.com/zeit/serve/pull/316)
- [GitHub Commit](https://github.com/zeit/serve/commit/6adad6881c61991da61ebc857857c53409544575)