## Overview
Affected versions of [`setuptools`](https://pypi.python.org/pypi/setuptools) are vulnerable to Denial of Service (DoS) attacks.

Algorithmic complexity vulnerability in the ssl.match_hostname function, allows remote attackers to cause a denial of service (CPU consumption) via multiple wildcard characters in the common name in a certificate.(same issue as CVE-2013-2099).

## Details
Denial of Service (DoS) describes a family of attacks, all aimed at making a system inaccessible to its original and legitimate users. There are many types of DoS attacks, ranging from trying to clog the network pipes to the system by generating a large volume of traffic from many machines (a Distributed Denial of Service - DDoS - attack) to sending crafted requests that cause a system to crash or take a disproportional amount of time to process. The latter, is caused by flawed code written by you or open source package owners, without any intention of harm.

When it comes to open source security, DoS vulnerabilities allow attackers to trigger such a crash or CPU starvation, crippling the service by using a flaw in the open source code originating from open source libraries.

## Remediation
Upgrade `setuptools` to version 0.9.5 or higher.

## References
- [Python Bugs](https://bugs.python.org/issue17980)
- [GitHub Changelog](https://github.com/pypa/setuptools/blob/master/CHANGES.rst#095)
- [Github Commit](https://github.com/pypa/setuptools/commit/7ddd872c63a9465340eadae59868d85ac1d43e67)
