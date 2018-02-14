## Overview
[`kibana`](https://www.npmjs.com/package/kibana) is an open source, browser-based analytics and search dashboard for Elasticsearch.

Affected versions of this package are vulnerable to Denial of Service (DoS).

Kibana versions prior to 5.2.1 configured for SSL client access, file descriptors will fail to be cleaned up after certain requests and will accumulate over time until the process crashes.

## Remediation
Upgrade `kibana` to version 5.2.1 or higher.

## References
- [Kibana Release Notes](https://www.elastic.co/blog/kibana-5-2-1-released)
