## Overview
A REST API `/i18n/:locale/:phrase` endpoint point was accessible in production environment allowing to add previously unknown translation literals to the translation files. This feature can be abused by filling up storage on the server creating a possible denial of service condition and enable XSS attacks via content injection.
 
## Remediation
Upgrade `i18n-node-angular` to version 1.4.0 or greater

If a direct dependency update is not possible, use [`snyk wizard`](https://snyk.io/documentation/#wizard) to patch this vulnerability.

## References
- https://github.com/oliversalzburg/i18n-node-angular/commit/877720d2d9bb90dc8233706e81ffa03f99fc9dc8
- https://nodesecurity.io/advisories/80