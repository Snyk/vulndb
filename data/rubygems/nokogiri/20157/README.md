## Overview
[nokogiri](https://rubygems.org/gems/nokogiri) is a an HTML, XML, SAX, and Reader parser, with the ability to search documents via XPath or CSS3 selectors.
Affected versions of this Gem are vulnerable to Denial of Service (DoS) attacks.

## Details
Nokogiri Gem for JRuby contains a flaw that is triggered when handling a root
element in an XML document. This may allow a remote attacker to cause a
consumption of memory resources.

## References
- http://rubysec.com/advisories/OSVDB-118481
- https://github.com/sparklemotion/nokogiri/pull/1087
