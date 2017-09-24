## Overview
[`boto`](https://pypi.python.org/pypi/boto) is amazon Web Services Library.

Affected versions of this package are vulnerable to Arbitrary Code Execution attacks via the insecure `YAML.load()` function.

## References
- [GitHub PR](https://github.com/boto/boto/pull/3097)
- [GitHub Commit](https://github.com/boto/boto/commit/8b65a6c250d0548d9ffe6393842931f59f793c77)
- [YAML.load() Security Practices by OpenStack](https://github.com/hyakuhei/OSSG-Security-Practices/blob/master/bandit/yaml.md)
