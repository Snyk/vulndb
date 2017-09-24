## Overview
[`ua_parser`](https://pypi.python.org/pypi/ua_parser) is a Python port of Browserscope's user agent parser.

Affected versions of this package are  vulnerable to Arbitrary Code Executionattacks via the insecure `YAML.load()` function.

## References
- [GitHub PR](https://github.com/ua-parser/uap-python/pull/22)
- [GitHub Commit](https://github.com/ua-parser/uap-python/commit/c81b1cbc20f9b52e09621573d3b34b7a6b7dbd73)
- [YAML.load() Security Practices by OpenStack](https://github.com/hyakuhei/OSSG-Security-Practices/blob/master/bandit/yaml.md)
