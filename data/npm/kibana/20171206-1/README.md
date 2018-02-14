## Overview
[`Kibana`](https://www.npmjs.com/package/kibana) is an open source (Apache Licensed), browser-based analytics and search dashboard for Elasticsearch. 

Affected versions of this package are vulnerable to Open Redirect.

The Kibana fix for CVE-2017-8451 was found to be incomplete. With X-Pack installed, Kibana versions before 6.0.1 and 5.6.5 have an open redirect vulnerability on the login page that would enable an attacker to craft a link that redirects to an arbitrary website.

## References
- [Kibana Release Notes](https://discuss.elastic.co/t/kibana-6-0-1-and-5-6-5-security-update/110571)
