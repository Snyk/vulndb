## Overview
[`com.exadel.flamingo.flex:amf-serializer`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22amf-serializer%22)
Affected versions of this package are vulnerable to XML External Entity (XXE) injections. The AMF3 deserializers in this library allow external entity (XXE) referenced from XML documents embedded in AMF3 messages.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-3206)
- [Homeland Security](https://www.kb.cert.org/vuls/id/307983)
