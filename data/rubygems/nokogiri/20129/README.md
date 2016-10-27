## Overview
[nokogiri](https://rubygems.org/gems/nokogiri) is a an HTML, XML, SAX, and Reader parser, with the ability to search documents via XPath or CSS3 selectors.
Affected versions of this Gem are vulnerable to Denial of Service attacks.

## Details
Nokogiri Gem for JRuby contains a flaw that may allow a remote denial of
service. The issue is triggered when handling a specially crafted XML
document, which can result in an infinite loop. This may allow a
context-dependent attacker to crash the server.

## References
- http://rubysec.com/advisories/CVE-2013-6460
