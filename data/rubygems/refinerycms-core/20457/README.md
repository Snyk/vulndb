## Overview
[`refinerycms-core`](https://rubygems.org/gems/refinerycms-core) handles the common functionality and is required by most extensions.

Affected versions of the package are vulnerable to Cross-Site Request Forgery (CSRF). The anti-CSRF token used in the form field is not verified properly to process the forms resulting in forms being processed even though the `authenticity_token` is left blank. 

## Remediation
Upgrade `refinerycms-core` to version 3.0.2 or higher.

## References
- [Advisory Report](https://securelayer7.net/penetration-testing-reports/Penetration-testing-report--open-source-Ruby-on-rails-Refinery-CMS.pdf)
- [Github PR](https://github.com/refinery/refinerycms/pull/3101)
- [Github Issue](https://github.com/refinery/refinerycms/issues/3098)
- [Github Commit](https://github.com/refinery/refinerycms/commit/9fd5a8b5e98827431add4a4c997286f10092cb9c)
