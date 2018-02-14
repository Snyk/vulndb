## Overview
[`Kibana`](https://www.npmjs.com/package/kibana) is an open source (Apache Licensed), browser-based analytics and search dashboard for Elasticsearch. 

Affected versions of this package are vulnerable to Cross-site Scripting (XSS).

Kibana versions prior to 6.0.1 and 5.6.5 had a cross-site scripting (XSS) vulnerability via URL fields that could allow an attacker to obtain sensitive information from or perform destructive actions on behalf of other Kibana users.

## References
- [Kibana Release Notes](https://discuss.elastic.co/t/kibana-6-0-1-and-5-6-5-security-update/110571)
