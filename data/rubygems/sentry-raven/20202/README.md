## Overview
[`sentry-raven`](https://rubygems.org/gems/sentry-raven/versions/1.2.2) provides a client interface for the Sentry error logger.

Affected versions of this gem are vulnerable to Denial of Service (DoS) attacks. The `lib/raven/okjson.rb` script contains the the `numtok` function. When supplying a large exponent value in a scientific number to that function, it causes a Denial of Service (DoS). With a specially crafted request, an attacker can cause the software to excessively consume resources, and deny service to any other client.

This is related to [SNYK-RUBY-RACK-20400](https://snyk.io/vuln/SNYK-RUBY-RACK-20400)

## References
- [Rubysec Advisory](https://rubysec.com/advisories/sentry-raven-OSVDB-115654)
- [Google Group](https://groups.google.com/d/msg/getsentry/Cz5bih0ZY1U/DXh9ow-jsFAJ)
