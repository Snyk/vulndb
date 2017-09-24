## Overview
[`org.apache.flex.blazeds:flex-messaging-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22flex-messaging-core%22)
Apache Flex BlazeDS, as used in flex-messaging-core.jar in Adobe LiveCycle Data Services (LCDS) 3.0.x before 3.0.0.354170, 4.5 before 4.5.1.354169, 4.6.2 before 4.6.2.354169, and 4.7 before 4.7.0.354169 and other products, allows remote attackers to read arbitrary files via an AMF message containing an XML external entity declaration in conjunction with an entity reference, related to an XML External Entity (XXE) issue.

## Details
An AMF message (Action Message Format) is a binary format used to serialize object graphs such as ActionScript objects and XML. The `readBody()` method is used to parse the body of the AMF message, which in turn deserializes the message. Under certain conditions, the body is sent to be parsed in the `readXml()` method as a UTF string.

The `xml` string is then used to build a Document, via the `DocumentBuilder`, by using the `stringToDocument` method. The `DocumentBuilder` allows external entities by default, resulting in the possible XML External Entity (XXE) injection. The developer needs to configure the parser to prevent XXE.

## References
- [CodeWhiteSec Blog](http://codewhitesec.blogspot.co.il/2015/08/cve-2015-3269-apache-flex-blazeds-xxe.html)
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-3269)
