## Overview
[`vumi`](http://pypi.python.org/pypi/vumi) is a scalable messaging engine for the delivery of SMS, Star Menu and chat messages to diverse audiences in emerging markets and beyond.

Affected versions of the package are vulnerable to Arbitrary Code Execution via the insecure `YAML.load()` function.

## Remediation
Upgrade `vumi` to version 0.3.1 or higher.

## References
- [GitHub Issue](https://github.com/praekelt/vumi/issues/111)
