## Overview
[`zipruby`](https://rubygems.org/gems/zipruby) is Ruby bindings for libzip.

Affected versions of the package are vulnerable to Arbitrary Code Execution.
Integer overflow in the `_zip_readcdir` function in zip_open.c in libzip 0.10 allows remote attackers to execute arbitrary code via the size and offset values for the central directory in a zip archive, which triggers "improper restrictions of operations within the bounds of a memory buffer" and an information leak.

## Remediation
There is no fix version for `zipruby`.

## References
- [Github PR](https://github.com/rubysec/ruby-advisory-db/pull/207)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2012-1163)
