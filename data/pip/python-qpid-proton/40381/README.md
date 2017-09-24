## Overview
[`python-qpid-proton`](https://pypi.python.org/pypi/python-qpid-proton) is an AMQP based messaging library.

The (1) proton.reactor.Connector, (2) proton.reactor.Container, and (3) proton.utils.BlockingConnection classes in Apache Qpid Proton before 0.12.1 improperly use an unencrypted connection for an amqps URI scheme when SSL support is unavailable, which might allow man-in-the-middle attackers to obtain sensitive information or modify data via unspecified vectors.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-2166)
- [Qpid Release Notes](http://qpid.apache.org/releases/qpid-proton-0.12.1/release-notes.html)
- [Jira Issue](https://issues.apache.org/jira/browse/PROTON-1157)
- [GitHub Commit](https://github.com/apache/qpid-proton/commit/a0585851e1e8ed9678496e38278f4a7554d03636)
