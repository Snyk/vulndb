## Overview
[`org.apache.solr:solr-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22solr-core%22)
Affected versions of this package are vulnerable to Directory Traversal attacks. The Index Replication feature supports an HTTP API, but does not validate the `file_name` parameter, which is supplied by the user. An attacker can craft a special request and read any file on the server.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-3163)
- [Jira Issue](https://issues.apache.org/jira/browse/SOLR-10031)
-  [Nabble Forum](http://lucene.472066.n3.nabble.com/SECURITY-CVE-2017-3163-Apache-Solr-ReplicationHandler-path-traversal-attack-td4320619.html)
