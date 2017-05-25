## Overview
[`org.apache.camel:camel-core`](https://camel.apache.org/) is a versatile open-source integration framework based on known Enterprise Integration Patterns.
The Validation Component of Apache Camel evaluates DTD headers of XML stream sources, although a validation against XML schemas (XSD) is executed. Remote attackers can use this feature to make Server-Side Request Forgery (SSRF) attacks by sending XML documents with remote DTDs URLs or XML External Entities (XXE).  The vulnerability is not given for SAX or StAX sources.

## Remediation
Upgrade `org.apache.camel:camel-core` to version 2.17.6, 2.18.3 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-5643)
- [Apache Security Advisory](https://camel.apache.org/security-advisories.data/CVE-2017-5643.txt)
- [Jira Issue](https://issues.apache.org/jira/browse/CAMEL-10894)
- [GitHub Commit 2.17](https://github.com/apache/camel/commit/2c6964ae94d8f9a9c9a32e5ae5a0b794e8b8d3be)
- [GitHub Commit 2.18](https://github.com/apache/camel/commit/9f7376abbff7434794f2c7c2909e02bac232fb5b)
