## Overview
[`Kibana`](https://www.npmjs.com/package/kibana) is an open source, browser-based analytics and search dashboard for Elasticsearch.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS).

Kibana versions prior to 5.6.1 had a cross-site scripting (XSS) vulnerability in Timelion that could allow an attacker to obtain sensitive information from or perform destructive actions on behalf of other Kibana users.

## Remediation
Upgrade `kibana` to version 5.6.1 or higher.

## References
- [Kibana Security Update](https://discuss.elastic.co/t/x-pack-alerting-and-kibana-5-6-1-security-update/101884)
