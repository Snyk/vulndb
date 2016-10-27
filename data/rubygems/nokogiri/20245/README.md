## Overview
[nokogiri](https://rubygems.org/gems/nokogiri) is a an HTML, XML, SAX, and Reader parser, with the ability to search documents via XPath or CSS3 selectors.
Affected versions of this Gem are vulnerable to Denial of Service (DoS) attacks.

## Details
The `xmlStringLenDecodeEntities` function in parser.c in libxml2
before 2.9.3 does not properly prevent entity expansion, which
allows context-dependent attackers to cause a denial of
service (CPU consumption) via crafted XML data.

## References
- http://rubysec.com/advisories/CVE-2015-5312
- https://groups.google.com/forum/#!topic/ruby-security-ann/aSbgDiwb24s
