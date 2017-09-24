## Overview
[`rack-contrib`](https://rubygems.org/gems/rack-contrib) includes a variety of add-on components for Rack, a Ruby web server interface.

Affected versions of the package are vulnerable to Cross-site Request Forgery (CSRF) attacks due to not properly restricting the SWF file format. An attacker can use JSONP callbacks to cause a trusted domain to return a specially crafted malicious SWF file, which can make requests to the trusted domain with the victims credentials.
**Note:**  Related to CVE-2014-4671.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `rack-contrib` to version 1.2.0 or higher.

## References
- [Github PR](https://github.com/rack/rack-contrib/pull/93)
- [Github Commit](https://github.com/rack/rack-contrib/commit/2dd3b224efc3f41806d5a1e9340311d504701fff)
