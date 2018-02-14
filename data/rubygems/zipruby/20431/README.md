## Overview
[`zipruby`](https://rubygems.org/gems/zipruby) is Ruby bindings for libzip.

Affected versions of the package are vulnerable to Denial of Service (DoS).
Heap-based buffer overflow in the zip_readcdir function in zip_open.c in libzip 0.10 allows remote attackers to cause a denial of service (application crash) and possibly execute arbitrary code via a zip archive with the number of directories set to 0, related to an "incorrect loop construct."

## Remediation
There is no fix version for `zipruby`.

## References
- [Github PR](https://github.com/rubysec/ruby-advisory-db/pull/207)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=802564)
