## Overview
A REST API `/i18n/:locale/:phrase` endpoint was accessible in production environment, allowing to add previously unknown translation literals to the translation files. This feature can be abused to mount a XSS attack via content injection, or a Denial of Service attack by exhausting storage resources on the server.

## Remediation
Upgrade `i18n-node-angular` to version 1.4.0 or greater.

If a direct dependency update is not possible, use [`snyk wizard`](https://snyk.io/documentation/#wizard) to patch this vulnerability.

## References
- https://github.com/oliversalzburg/i18n-node-angular/commit/877720d2d9bb90dc8233706e81ffa03f99fc9dc8
- https://nodesecurity.io/advisories/80
