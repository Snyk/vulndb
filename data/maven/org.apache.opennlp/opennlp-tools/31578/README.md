## Overview
[`org.apache.opennlp:opennlp-tools`](https://opennlp.apache.org) is a machine learning based toolkit for the processing of natural language text.

Affected versions of the package are vulnerable to XML External Entity (XXE) Injection.
It is possible to perform an XXE attack when loading models or dictionaries from untrusted sources that contain XML.

When loading models or dictionaries that contain XML it is possible to perform an XXE attack, since Apache OpenNLP is a library, this only affects applications that load models or dictionaries from untrusted sources. The versions 1.5.0 to 1.5.3, 1.6.0, 1.7.0 to 1.7.2, 1.8.0 to 1.8.1 of Apache OpenNLP are affected.

## Remediation
Upgrade `org.apache.opennlp:opennlp-tools` to version 1.8.2 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-12620)
- [Apache OpenNLP Security Bulletin](http://opennlp.apache.org/news/cve-2017-12620.html)
- [Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id&#x3D;1497955)
- [Jira Issue](https://issues.apache.org/jira/browse/OPENNLP-1124)
- [GitHub PR](https://github.com/apache/opennlp/pull/258)
- [GitHub Commit](https://github.com/apache/opennlp/commit/c2c14e9af7a519aacfde5173f641c86e17ce50ed)
