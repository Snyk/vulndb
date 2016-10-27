## Overview
[nokogiri](https://rubygems.org/gems/nokogiri) is a an HTML, XML, SAX, and Reader parser, with the ability to search documents via XPath or CSS3 selectors.
Affected versions of this Gem are vulnerable to Denial of Service (DoS) attacks.

## Details
A denial of service flaw was found in the way libxml2 parsed XML
documents. This flaw could cause an application that uses libxml2 to use an
excessive amount of memory.

## References
- http://rubysec.com/advisories/CVE-2015-1819
- https://github.com/sparklemotion/nokogiri/issues/1374
- https://www.ubuntu.com/usn/usn-2812-1/
