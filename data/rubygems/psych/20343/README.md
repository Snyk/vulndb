## Overview
[`psych`](https://rubygems.org/gems/psych) is a YAML parser and emitter. Psych leverages [libyaml](http://pyyaml.org/wiki/LibYAML) for its YAML parsing and emitting capabilities.

Affected versions of the package are vulnerable to Denial of Service (DoS). An attacker could cause the server to crash by making the `scanner.c` file parse a newline character (`\n`).

## Remediation
Upgrade `psych` to version 2.0.13 or higher.

## References
- [GitHub PR](https://github.com/ruby/psych/pull/225)
- [GitHub Commit](https://github.com/ruby/psych/commit/40f8e29514066faed3becb544b4e637955f0fbef)
- [Libyaml Fix](https://bitbucket.org/xi/libyaml/commits/2b9156756423e967cfd09a61d125d883fca6f4f2)
