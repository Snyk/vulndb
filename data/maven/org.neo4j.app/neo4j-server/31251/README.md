## Overview
[`org.neo4j.app:neo4j-server`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22neo4j-server%22)
Multiple cross-site request forgery (CSRF) vulnerabilities in Neo4J 1.9.2 allow remote attackers to hijack the authentication of administrators for requests that execute arbitrary code, as demonstrated by a request to (1) db/data/ext/GremlinPlugin/graphdb/execute_script or (2) db/manage/server/console/.

## References
- [Dinis Cruz Blog](http://blog.diniscruz.com/2013/08/neo4j-csrf-payload-to-start-processes.html)
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-7259)
- [OSS Security](http://www.openwall.com/lists/oss-security/2014/01/03/3)
- [Github Issue](https://github.com/neo4j/neo4j/issues/2826)
