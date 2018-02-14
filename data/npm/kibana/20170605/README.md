## Overview
[`Kibana`](https://www.npmjs.com/package/kibana) is an open source, browser-based analytics and search dashboard for Elasticsearch.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS).

Starting in version 5.3.0, Kibana had a cross-site scripting (XSS) vulnerability in the Discover page that could allow an attacker to obtain sensitive information from or perform destructive actions on behalf of other Kibana users.

## Remediation
Upgrade `kibana` to versions 5.3.3, 5.4.1 or higher.

## References
https://discuss.elastic.co/t/elastic-stack-5-4-1-and-5-3-3-security-updates/87952)
