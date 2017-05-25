## Overview
[`org.apache.solr:solr`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22solr%22)
Multiple cross-site scripting (XSS) vulnerabilities in the Admin UI in Apache Solr before 5.1 allow remote attackers to inject arbitrary web script or HTML via crafted fields that are mishandled during the rendering of the (1) Analysis page, related to webapp/web/js/scripts/analysis.js or (2) Schema-Browser page, related to webapp/web/js/scripts/schema-browser.js.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-8795)