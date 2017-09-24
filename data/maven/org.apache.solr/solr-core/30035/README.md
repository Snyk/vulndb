## Overview
[`org.apache.solr:solr-core`](https://lucene.apache.org/solr/) is an open source enterprise search platform built on Apache Lucene.

The DocumentAnalysisRequestHandler in Apache Solr before 4.3.1 does not properly use the EmptyEntityResolver, which allows remote attackers to have an unspecified impact via XML data containing an external entity declaration in conjunction with an entity reference, related to an XML External Entity (XXE) issue.  NOTE: this vulnerability exists because of an incomplete fix for CVE-2013-6407.

## References

- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2013-6408)
- [Jira Issue](https://issues.apache.org/jira/browse/SOLR-5520)
