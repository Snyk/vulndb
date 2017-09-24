## Overview
[`qpid_python`](https://pypi.python.org/pypi/qpid_python) is a Python client implementation and AMQP conformance tests for Apache Qpid.

Affected versions of this package are vulnerable to Man-in-the-Middle attacks due to hostname verification not turned on by default. When SSL or TLS connections are being established using default configuration, it would not verify the hostname of the connecting server and an attacker could easily establish a connection.

## References
- [Apache Jira Issue](https://issues.apache.org/jira/browse/QPID-7258)
- [GitHub Commit](https://github.com/apache/qpid/commit/ec42d9558d8714b22b356358437556cae8130815)
