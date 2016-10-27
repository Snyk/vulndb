## Overview
[nokogiri](https://rubygems.org/gems/nokogiri) is a an HTML, XML, SAX, and Reader parser, with the ability to search documents via XPath or CSS3 selectors.
Affected versions of this Gem are vulnerable to Denial of Service (DoS) attacks.

## Details
Nokogiri gem for Ruby contains an flaw that is triggered during the parsing of XML data. The issue is due to an incorrectly configured XML parser accepting XML external entities from an untrusted source. By sending specially crafted XML data, a remote attacker can cause an infinite loop and crash the program.


## References
- http://rubysec.com/advisories/CVE-2013-6461/
- https://groups.google.com/forum/#!topic/ruby-security-ann/DeJpjTAg1FA
