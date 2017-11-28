## Overview
[`commons-jelly:commons-jelly`](https://commons.apache.org) is a Java and XML based scripting engine. Jelly combines the best ideas from JSTL, Velocity, DVSL, Ant and Cocoon all together in a simple yet powerful scripting engine.

Affected versions of the package are vulnerable to XML External Entity (XXE) Injection.
During Jelly (xml) file parsing with Apache Xerces, if a custom doctype entity is declared with a "SYSTEM" entity with a URL and that entity is used in the body of the Jelly file, during parser instantiation the parser will attempt to connect to said URL. This could lead to XML External Entity (XXE) attacks in Apache Commons Jelly before 1.0.1.

## Remediation
Upgrade `commons-jelly:commons-jelly` to version 1.0.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-12621)
- [Apache Jira Issue](https://issues.apache.org/jira/browse/JELLY-293)
- [Commons Jelly Security Report](http://commons.apache.org/proper/commons-jelly/security-reports.html)
