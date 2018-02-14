## Overview
[org.apache.poi:poi](https://poi.apache.org/) is a java library for reading and writing Microsoft Office binary and OOXML file formats.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks in two possible scenarios:
* Infinite Loops while parsing crafted WMF, EMF, MSG and macros.
* Out of Memory Exceptions while parsing crafted DOC, PPT and XLS.

## Details
Denial of Service (DoS) describes a family of attacks, all aimed at making a system inaccessible to its original and legitimate users. There are many types of DoS attacks, ranging from trying to clog the network pipes to the system by generating a large volume of traffic from many machines (a Distributed Denial of Service - DDoS - attack) to sending crafted requests that cause a system to crash or take a disproportional amount of time to process. The latter, is typically caused by flawed code written by package owners, without any intention of harm.

When it comes to open source security, DoS vulnerabilities allow attackers to trigger such a crash or CPU starvation, crippling the service by using a flaw in the open source code originating from open source libraries.

## Remediation
Upgrade org.apache.poi:poi to version 3.17 or higher.

## References
- [Apache Mail Archives](https://lists.apache.org/thread.html/453d9af5dbabaccd9afb58d27279a9dbfe8e35f4e5ea1645ddd6960b@%3Cdev.poi.apache.org%3E)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-12626)
- [GitHub Commit](https://github.com/apache/poi/blob/trunk/maven/poi.pom)
