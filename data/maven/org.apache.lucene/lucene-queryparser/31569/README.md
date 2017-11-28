## Overview
Affected versions of [`org.apache.lucene:lucene-queryparser`](https://lucene.apache.org) are vulnerable to XML External Entity (XXE) Injection.

Remote code execution occurs in Apache Solr before 7.1 with Apache Lucene before 7.1 by exploiting XXE in conjunction with use of a Config API add-listener command to reach the `RunExecutableListener` class. Note that the XML external entity expansion vulnerability occurs in the XML Query Parser which is available, by default, for any query request with parameters `deftype=xmlparser` and can be exploited to upload malicious data to the `/upload` request handler or as Blind XXE using ftp wrapper in order to read arbitrary local files from the Solr server. Note also that the second vulnerability relates to remote code execution using the `RunExecutableListener` available on all affected versions of Solr.

**Note:** Elasticsearch, although it uses Lucene, is NOT vulnerable to this.

## Remediation
Upgrade `org.apache.lucene:lucene-queryparser` to versions 5.5.5, 6.6.2, 7.1.0 or higher.

## References
- [Apache Mailing List](https://s.apache.org/FJDl)
- [Seclists](http://seclists.org/oss-sec/2017/q4/79)
- [GitHub Commit](https://github.com/apache/lucene-solr/commit/926cc4d65b6d2cc40ff07f76d50ddeda947e3cc4#diff-5ec4e4f72cf2a1f5d475f0283ec684db)
