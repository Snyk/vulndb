## Overview
[`mechanize`](https://rubygems.org/gems/mechanize) is used for automating interaction with websites.

Affected versions of the package are vulnerable to Information Exposure. The redirected url was not validated to not redirect to a file URI.

## Remediation
Upgrade `mechanize` to version 2.7.4 or higher.

## References
- [Vendor Release Notes](https://github.com/sparklemotion/mechanize/blob/master/CHANGELOG.rdoc#274)
- [GitHub PR](https://github.com/sparklemotion/mechanize/pull/455)
- [GitHub Commit](https://github.com/sparklemotion/mechanize/commit/4a585e4d150516043a75b272600a163817ace884)
