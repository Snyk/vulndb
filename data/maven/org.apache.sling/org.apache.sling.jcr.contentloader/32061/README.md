## Overview
[org.apache.sling:org.apache.sling.jcr.contentloader](https://sling.apache.org/) is a framework for RESTful web-applications based on an extensible content tree.

Affected versions of this package are vulnerable to Arbitrary File Import. 
The attacker may import arbitrary files in the content repository,
including local files, causing potential information leaks.

## Remediation
Upgrade `org.apache.sling:org.apache.sling.jcr.contentloader` to version 2.1.6 or higher.
## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2012-3353)
- [Apache Mail Archives](https://lists.apache.org/thread.html/50994d80dd5cf93f1365dacfcaecf5c12f1efe522c4ff6040b3c521a@%3Cdev.sling.apache.org%3E)
- [Jira](https://issues.apache.org/jira/browse/SLING-2512)
