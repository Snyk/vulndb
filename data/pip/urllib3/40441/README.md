## Overview
[`urllib3`](https://pypi.python.org/pypi/urllib3) is a HTTP library with thread-safe connection pooling, file post, and more.

Affected versions of this package fail to validate TSL certificates in certain configurations. This places users of the library with those configurations at risk of man-in-the-middle and information leakage attacks. This vulnerability affects users using versions 1.17 and 1.18 of the urllib3 library, who are using the optional PyOpenSSL support for TLS instead of the regular standard library TLS backend, and who are using OpenSSL 1.1.0 via PyOpenSSL. This is an extremely uncommon configuration, so the security impact of this vulnerability is low.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-9015)
- [GitHub PR](https://github.com/shazow/urllib3/pull/1010)
- [GitHub Commit](https://github.com/shazow/urllib3/commit/5e36a7096455ea94fb28b623d64e1f1bad97f822)
