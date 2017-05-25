## Overview
[`org.bouncycastle:bcprov-jdk15`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22bcprov-jdk15%22)
The TLS implementation in the Bouncy Castle Java library does not properly consider timing side-channel attacks on a noncompliant `MAC` check operation during the processing of malformed `CBC` padding, which allows remote attackers to conduct distinguishing attacks and plaintext-recovery attacks via statistical analysis of timing data for crafted packets, a related issue to [CVE-2013-0169](https://nvd.nist.gov/vuln/detail/CVE-2013-0169).

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-1624)
