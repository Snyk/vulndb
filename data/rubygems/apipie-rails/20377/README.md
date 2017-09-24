## Overview
[`apipie-rails`](https://rubygems.org/gems/apipie-rails) is Rails REST API documentation tool.

Affected versions of the package are vulnerable to Denial of Service (DoS) attacks. A malicious user can pass a specially crafted url which can lead to high memory consumption.

## Remediation
Upgrade `apipie-rails` to version 0.0.24 or higher.

## References
- [Github PR](https://github.com/Apipie/apipie-rails/pull/167)
- [Github Commit](https://github.com/Apipie/apipie-rails/commit/c6e5ea3e13e3860decaeb007a83a8de0163dc0f8)
