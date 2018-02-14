## Overview
[nokogiri](https://github.com/sparklemotion/nokogiri) is an HTML, XML, SAX, and Reader parser. Among Nokogiri's features is the ability to search documents via XPath or CSS3 selectors.

Affected versions of this package are vulnerable to Denial of Service (DoS) due to using vulnerable version of libxml2 which incorrectly handled certain fields. An attacker could use this issue with specially constructed XML data to cause libxml2 to consume resources, leading to a denial of service.

## Remediation
Upgrade `nokogiri` to version 1.8.2 or higher.

## References
- [Git Hub Issue](https://github.com/sparklemotion/nokogiri/issues/1714)
- [Bugzilla Bug](https://bugzilla.redhat.com/show_bug.cgi?id=1523128)
