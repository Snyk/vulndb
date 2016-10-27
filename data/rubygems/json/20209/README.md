## Overview

The [`json`](https://rubygems.org/gems/json) gem is a JSON implementation as a Ruby extension in C.

Affected versions of this Gem contain an overflow condition. This is triggered when user-supplied input is not properly validated while handling specially crafted data. This can allow a remote attacker to cause a stack-based buffer overflow, resulting in a [denial of service](https://snyk.io/vuln/SNYK-RUBY-JSON-20000), or potentially allowing the execution of arbitrary code.

## References

- http://rubysec.com/advisories/OSVDB-101157
