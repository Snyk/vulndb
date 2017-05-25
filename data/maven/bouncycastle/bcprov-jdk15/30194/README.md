## Overview
[`bouncycastle:bcprov-jdk15`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22bcprov-jdk15%22)is a Java implementation of cryptographic algorithms. The package is organised so that it contains a light-weight API suitable for use in any environment (including the newly released J2ME) with the additional infrastructure to conform the algorithms to the JCE framework.

The TLS implementation in the Bouncy Castle Java library before 1.48 and C# library before 1.8 does not properly consider timing side-channel attacks on a noncompliant MAC check operation during the processing of malformed CBC padding, which allows remote attackers to conduct distinguishing attacks and plaintext-recovery attacks via statistical analysis of timing data for crafted packets, a related issue to [CVE-2013-0169](https://nvd.nist.gov/vuln/detail/CVE-2013-0169).

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-1624)
- [OSS Security](http://openwall.com/lists/oss-security/2013/02/05/24)
- [University of London](http://www.isg.rhul.ac.uk/tls/TLStiming.pdf)
