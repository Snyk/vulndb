## Overview
[`psych`](https://rubygems.org/gems/psych) is a YAML parser and emitter. Psych leverages [libyaml](http://pyyaml.org/wiki/LibYAML) for its YAML parsing and emitting capabilities.

Affected versions of the package are vulnerable to Arbitrary Command Execution.

## Remediation
Upgrade `psych` to version 2.0.0 or higher.

## References
- [GitHub PR](http://tenderlovemaking.com/2013/02/06/yaml-f7u12.html)
- [GitHub Issue](https://github.com/ruby/psych/issues/119)
- [GitHub Commit](https://github.com/ruby/psych/commit/2c644e184192975b261a81f486a04defa3172b3f)
