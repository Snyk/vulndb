## Overview
[`org.springframework.flex:spring-flex-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-flex-core%22)
Affected versions of this package are vulnerable to Arbitrary Code Execution.  It uses AMF3 deserializers that derive class instances from `java.io.Externalizable` (Although AMF3 specification's recommends using `flash.utils.IExternalizable`). A remote attacker with the ability to spoof or control an RMI server connection may be able to send serialized Java objects that execute arbitrary code when deserialized.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-3203)
- [Homeland Security](https://www.kb.cert.org/vuls/id/307983)
