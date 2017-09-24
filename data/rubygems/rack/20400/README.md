## Overview
[`rack`](https://rubygems.org/gems/rack)  provides a minimal, modular and adaptable interface for developing web applications in Ruby.

Affected versions of the package are vulnerable to Denial of Service (DoS) attacks. It copied the `okjson.rb` file from the `sentry-ruby` gem, which contains the `numtok` function. When supplying a large exponent value in a scientific number to that function, it causes a Denial of Service (DoS). With a specially crafted request, an attacker can cause the software to excessively consume resources, and deny service to any other client.

This is related to [SNYK-RUBY-SENTRYRAVEN-20202](https://snyk.io/vuln/SNYK-RUBY-SENTRYRAVEN-20202)

## Remediation
Upgrade `rack` to version 1.6.1 or higher.

## References
- [Github Release Notes](https://github.com/rack/rack/blob/master/HISTORY.md#may-6th-2015-thirty-seventh-public-release-161)
- [CVE in Raven-ruby](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-9490)
- [Github Commit](https://github.com/rack/rack/commit/677de9dc132d5f6aaf991b462652a1fa944ffa20)
