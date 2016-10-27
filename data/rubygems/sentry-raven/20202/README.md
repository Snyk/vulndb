## Overview
[`sentry-raven`](https://rubygems.org/gems/sentry-raven/versions/1.2.2) is a. gem that provides a client interface for the Sentry error logger.
Affected versions of this gem are vulnerable to Denial of Service (DoS) attacks.

## Details
`sentry-raven` contains a flaw in the `lib/raven/okjson.rb` script that is triggered when large numeric values are stored as an exponent or in scientific notation. With a specially crafted request, an attacker can cause the software to consume excessive resources resulting in a denial of service.

## References
- http://rubysec.com/advisories/CVE-2014-9490/
- https://groups.google.com/d/msg/getsentry/Cz5bih0ZY1U/DXh9ow-jsFAJ
