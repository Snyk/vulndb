## Overview
[`deis`](https://pypi.python.org/pypi/deis) is a command-line Client for Deis, the open PaaS.

Affected versions of this package are vulnerable to Man-in-the-Middle (MitM).
The SSL protocol 3.0, as used in OpenSSL through 1.0.1i and other products, uses nondeterministic CBC padding, which makes it easier for man-in-the-middle attackers to obtain cleartext data via a padding-oracle attack, aka the "POODLE" issue.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2014-3566)
- [Github Issue](https://github.com/deis/deis/issues/3097)
- [Github PR](https://github.com/deis/deis/pull/3136)
- [Github Commit](https://github.com/deis/deis/commit/93bb0fd9cb33e5b8bdcfdc277d15d61b938a88d4)
