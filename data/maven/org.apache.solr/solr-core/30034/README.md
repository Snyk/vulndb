## Overview
[`org.apache.solr:solr-core`](https://lucene.apache.org/solr/) is an open source enterprise search platform built on Apache Lucene.

The UpdateRequestHandler for XML in Apache Solr before 4.1 allows remote attackers to have an unspecified impact via XML data containing an external entity declaration in conjunction with an entity reference, related to an XML External Entity (XXE) issue.

## References

- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2013-6407)
- [Jira Issue](https://issues.apache.org/jira/browse/SOLR-5520)
