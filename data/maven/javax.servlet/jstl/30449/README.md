## Overview
[`javax.servlet:jstl`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jstl%22)

Affected versions of this packages allowed the processing of untrusted XML documents to utilize external entity references, which could access resources on the host system and, potentially, allowing arbitrary code execution.

# Details
An _XML External Entity_ attack is a type of attack against an application that parses XML input. This attack occurs when XML input containing a reference to an external entity is processed by a weakly configured XML parser. This attack may lead to the disclosure of confidential data, denial of service, server side request forgery, port scanning from the perspective of the machine where the parser is located, and other system impacts. 

You can read more about XML External Entity attacks [on our blog](https://snyk.io/blog/nokogiri-xxe-vulnerabilities/).

## Remediation
Upgrade to a version `1.3` or above. 

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-0254)
- [Redhat Security](https://access.redhat.com/security/cve/CVE-2015-0254)
