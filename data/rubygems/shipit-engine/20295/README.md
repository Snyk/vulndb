## Overview
[`shipit-engine`](https://rubygems.org/gems/shipit-engine) is an application deployment software.
Affected versions of this gem are vulnerable to Cross-site Scripting (XSS) attacks via the `deploy_url`, which didn't sanitize the website view and validate the link in the module.

## Remediation
Upgrade `shipit-engine` to version `0.12.0` or later

## References
- [Github issue](https://github.com/Shopify/shipit-engine/pull/604)
- [Github Commit](https://github.com/Shopify/shipit-engine/commit/23c868ce2a177ff411b5506ae2a7be8c3e791f36)
