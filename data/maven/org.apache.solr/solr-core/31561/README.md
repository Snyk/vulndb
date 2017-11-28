## Overview
[`org.apache.solr:solr-core`](https://solr.apache.org) is an open source enterprise search platform built on Apache Lucene.

Affected versions of the package are vulnerable to Privilege Escalation.
Solr's Kerberos plugin can be configured to use delegation tokens, which allows an application to reuse the authentication of an end-user or another application. There are two issues with this functionality (when using SecurityAwareZkACLProvider type of ACL provider e.g. SaslZkACLProvider). Firstly, access to the security configuration can be leaked to users other than the solr super user. Secondly, malicious users can exploit this leaked configuration for privilege escalation to further expose/modify private data and/or disrupt operations in the Solr cluster. The vulnerability is fixed from Solr 6.6.1 onwards.

## Remediation
Upgrade `org.apache.solr:solr-core` to version 6.6.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-9803)
- [Apache Jira Issue](https://issues.apache.org/jira/browse/SOLR-11184)
- [Securityfocus](http://www.securityfocus.com/bid/100870/info)
