## Overview
[`nodux-core`](https://www.npmjs.com/package/nodux-core) is A Tiny Core Linux build that includes node.js.
Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

Many thanks to [Liang Gong](https://github.com/JacksonGL) for disclosing this vulnerability.

## Disclosure Timeline
- April 24th, 2017 - Disclosed to package owner
- April 24th, 2017 - Issue acknowledged by package owner.
- April 24th, 2017 - Issue fixed and version `0.0.18` released.

## Remediation
Upgrade `nodux-core` to version 0.0.18 or higher.

## References
- [GitHub Commit](https://github.com/davidmarkclements/nodux-core/commit/06787343a2a9bd1b37820d69a46022f5a7af3b86)
- [PoC by Liang Gong](https://github.com/JacksonGL/NPM-Vuln-PoC/tree/master/directory-traversal/nodux-core)
