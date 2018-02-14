## Overview
[`Kibana`](https://www.npmjs.com/package/kibana) is an open source (Apache Licensed), browser-based analytics and search dashboard for Elasticsearch. 

Affected versions of this package are vulnerable to Open Redirect.

With X-Pack installed, Kibana versions before 5.3.1 have an open redirect vulnerability on the login page that would enable an attacker to craft a link that redirects to an arbitrary website. Shield versions for Kibana prior to 2.4.5 are also affected.

## References
- [Kibana Security Ids](https://www.elastic.co/community/security)
- [CVE](http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-8451)