## Overview
[`org.igniterealtime.smack:smack-tcp`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22smack-tcp%22)
Affected versions of the package are vulnerable to Man-in-the-Middle (MitM) attacks because the security of the TLS connection is not always enforced. When the `SecurityMode.required` TLS setting has been set, allows man-in-the-middle attackers to bypass TLS protections and trigger use of cleartext for client authentication by stripping the `starttls` feature from a server response.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-10027)
- [OSS Security](http://seclists.org/oss-sec/2016/q4/716)
