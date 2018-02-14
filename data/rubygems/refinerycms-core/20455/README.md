## Overview
[`refinerycms-core`](https://rubygems.org/gems/refinerycms-core) handles the common functionality and is required by most extensions.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS) via the `ALT` text when uploading an image.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/xss-attacks-the-next-wave/).

## Remediation
Upgrade `refinerycms-core` to version 3.0.2 or higher.

## References
- [Advisory Report](https://securelayer7.net/penetration-testing-reports/Penetration-testing-report--open-source-Ruby-on-rails-Refinery-CMS.pdf)
- [Github PR](https://github.com/refinery/refinerycms/pull/3117)
- [Github Issue](https://github.com/refinery/refinerycms/issues/3097)
- [Github Commit](https://github.com/refinery/refinerycms/commit/ed05cf9ccb4cb1603e62d99b40af097993fba4e4)
