## Overview
[`liquid`](https://rubygems.org/gems/liquid) is a secure, non-evaling end user template engine with aesthetic markup.
Affected versions of the package are vulnerable to Arbitrary Method Invocation on a Condition object via the `if` tag.

## Remediation
Upgrade `liquid` to version 2.5.5, 2.6.1 or higher.

## References
- [GitHub PR](https://github.com/Shopify/liquid/pull/274)
- [GitHub Commit](https://github.com/Shopify/liquid/commit/eb409ff23764d2ef6214e6036879898b47b96a8f)
