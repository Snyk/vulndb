## Overview
[`hammer_cli`](https://rubygems.org/api/v1/gems/hammer_cli.json) is Hammer cli provides universal extendable CLI interface for ruby apps.

Affected versions of the package are vulnerable to Insufficient Verification of Data Authenticity which happend because there is no verification of API server's SSL certificate.

## Remediation
Upgrade `hammer_cli` to version 0.10.0 or higher.

## References
- [Redhat CVE](https://access.redhat.com/security/cve/cve-2017-2667)
- [Github PR](https://github.com/theforeman/hammer-cli/pull/235)
- [Github Commit](https://github.com/theforeman/hammer-cli/commit/74b926ae24f47f1d93b778e06b64935e57b60e33)
