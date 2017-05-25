## Overview
[`org.apache.flex.blazeds:flex-messaging-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22flex-messaging-core%22)
Affected versions of this package are vulnerable to Arbitrary Code Execution. It uses AMF3 deserializers which allow instantiation of arbitrary classes via public parameter-less constructors. An attacker may exploit this to send a malicious AMF3 object to the system to execute arbitrary code.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-5641)
- [Homeland Security](https://www.kb.cert.org/vuls/id/307983)
