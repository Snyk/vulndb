## Overview
[`Kibana`](https://www.npmjs.com/package/kibana) is an open source, browser-based analytics and search dashboard for Elasticsearch.

Affected versions of this package are vulnerable to Information Exposure.

In Kibana X-Pack security versions prior to 5.4.3 if a Kibana user opens a crafted Kibana URL the result could be a redirect to an improperly initialized Kibana login screen. If the user enters credentials on this screen, the credentials will appear in the URL bar. The credentials could then be viewed by untrusted parties or logged into the Kibana access logs.

## Remediation
Upgrade `kibana` to version 5.4.3 or higher.

## References
- [Kibana Security Update](https://discuss.elastic.co/t/elastic-stack-5-4-3-security-update/91006)
