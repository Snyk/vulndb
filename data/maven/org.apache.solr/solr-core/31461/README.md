## Overview
[`org.apache.solr:solr-core`](https://lucene.apache.org/solr/) is an open source enterprise search platform built on Apache Lucene.

Affected versions of the package are vulnerable to Information Exposure.

Apache Solr uses a PKI based mechanism to secure inter-node communication when security is enabled. It is possible to create a specially crafted node name that does not exist as part of the cluster and point it to a malicious node. This can trick the nodes in cluster to believe that the malicious node is a member of the cluster. So, if Solr users have enabled BasicAuth authentication mechanism using the BasicAuthPlugin or if the user has implemented a custom Authentication plugin, which does not implement either "HttpClientInterceptorPlugin" or "HttpClientBuilderPlugin", his/her servers are vulnerable to this attack. Users who only use SSL without basic authentication or those who use Kerberos are not affected.

## Remediation
Upgrade `org.apache.solr:solr-core` to version 6.6.0 or higher.

## References
- [Openwall](http://www.openwall.com/lists/oss-security/2017/07/07/4)
- [Jira Issue](https://issues.apache.org/jira/browse/SOLR-10624)
- [Github Commit](https://github.com/apache/lucene-solr/commit/e3b0cfff396a7f92a4f621d598780116da916f3f)
