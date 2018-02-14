## Overview
[nokogiri](https://github.com/sparklemotion/nokogiri) is an HTML, XML, SAX, and Reader parser. Among Nokogiri's features is the ability to search documents via XPath or CSS3 selectors. 

Affected versions of this package are vulnerable to Denial of Service (DoS), due to using vulnerable version of libxml2. When expanding a parameter entity in a DTD, an infinite recursion could occur and halt expected execution or lead to memory exhaustion.

## Remediation
Upgrade `nokogiri` to version 1.8.2 or higher.

## References
- [Git Hub Issue](https://github.com/sparklemotion/nokogiri/issues/1714)
- [Bugzilla bug](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2017-16932)
