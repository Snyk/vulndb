## Overview
[`mechanize`](https://rubygems.org/gems/mechanize) is used for automating interaction with websites.

Affected versions of the package exposed the http authentication credentials. Only one set of HTTP authentication credentials were allowed for a connections. If a mechanize instance connected to more than one server then a malicious server detecting mechanize could ask for HTTP Basic authentication. This would expose the username and password intended only for one server.

## Remediation
Upgrade `mechanize` to version 2.4 or higher.

## References
- [Vendor Release Notes](https://github.com/sparklemotion/mechanize/blob/master/CHANGELOG.rdoc#24)
- [GitHub Commit](https://github.com/sparklemotion/mechanize/commit/ead2a26c801d0aca98558b58b7ca8e8c212aae55)
