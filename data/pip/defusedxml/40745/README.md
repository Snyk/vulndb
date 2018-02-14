## Overview
Affected versions of [`defusedxml`](https://pypi.python.org/pypi/defusedxml) are vulnerable to Denial of Service (DoS).

The XML libraries for Python 3.4, 3.3, 3.2, 3.1, 2.7, and 2.6, as used in OpenStack Keystone Essex, Folsom, and Grizzly; Compute (Nova) Essex and Folsom; Cinder Folsom; Django; and possibly other products allow remote attackers to cause a denial of service (resource consumption and crash) via an XML Entity Expansion (XEE) attack.

## Details
Denial of Service (DoS) describes a family of attacks, all aimed at making a system inaccessible to its original and legitimate users. There are many types of DoS attacks, ranging from trying to clog the network pipes to the system by generating a large volume of traffic from many machines (a Distributed Denial of Service - DDoS - attack) to sending crafted requests that cause a system to crash or take a disproportional amount of time to process. The latter, is typically caused by flawed code written by package owners, without any intention of harm.

When it comes to open source security, DoS vulnerabilities allow attackers to trigger such a crash or CPU starvation, crippling the service by using a flaw in the open source code originating from open source libraries.

## Remediation
Upgrade `defusedxml` to version 0.4 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2013-1664)
- [GitHub Changelog](https://github.com/tiran/defusedxml/blob/master/CHANGES.txt#L35)
