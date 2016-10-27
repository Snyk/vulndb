## Overview
[nokogiri](https://rubygems.org/gems/nokogiri) is a an HTML, XML, SAX, and Reader parser, with the ability to search documents via XPath or CSS3 selectors.
Affected versions of this Gem are vulnerable to Sensitive Information Exposure.

## Details
libxml2 contains a flaw that may lead to unauthorized disclosure of potentially sensitive information. The issue is triggered when handling the expansion of XML external entities (XXE), you can specify URLs (e.g. HTTP) to be contacted when attacker-supplied XML is parsed. This can be used to trigger URL's on an internal network of a XML parsing service and allow a remote attacker to gain access to their responses.

## References
- http://rubysec.com/advisories/CVE-2012-6685
- https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2012-6685
- https://github.com/sparklemotion/nokogiri/issues/693
