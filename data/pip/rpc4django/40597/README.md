## Overview
[`rpc4django`](https://pypi.python.org/pypi/rpc4django) Handles JSONRPC and XMLRPC requests easily with Django.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks via the  `xml.dom.minidom.parseString()` function. An attacker can craft a malicious XML payload which cause high memory consumption. This is also known as the billion laughs attack.

## References
- [GitHub Issue](https://github.com/rpc4django/rpc4django/issues/20)
- [GitHub PR](https://github.com/rpc4django/rpc4django/pull/26)
- [GitHub Commit](https://github.com/rpc4django/rpc4django/commit/9962e02858383269533dcb1d49ec57310262259b)
