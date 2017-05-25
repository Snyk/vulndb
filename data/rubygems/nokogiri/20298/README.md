## Overview
[nokogiri](https://rubygems.org/gems/nokogiri) is a an HTML, XML, SAX, and Reader parser, with the ability to search documents via XPath or CSS3 selectors.
Affected versions of this Gem are vulnerable to XML External Entity (XXE) attacks.

## Details
`Nokogiri` is affected by series of vulnerabilities in libxml2 and libxslt, which are libraries it depends on. When handling the expansion of XML external entities (XXE) in libxml2, you can specify documents to be read. This can be used by attackers to load specially crafted XML documents on an internal XML parsing service and may lead to unauthorized disclosure of potentially sensitive information.

**Note:** This vulnerability exists also in versions `>= 1.5.4` only when opting into the `DTDLOAD` option and opting out of the `NONET` option. See information [here](https://snyk.io/vuln/SNYK-RUBY-NOKOGIRI-20299)

## Remediation
There currently is no fix in libxml2 as of January 11th, 2017.
`Nokogiri` will be waiting for a fix upstream to update.

## Disclosure Timeline
- January 11th, 2017 - Reported the issue to [Mike Dalessio](https://github.com/flavorjones) of Nokogiri Core.
- January 11th, 2017 - Issue triaged and acknowledged by [Mike Dalessio](https://github.com/flavorjones) of Nokogiri Core.

## References
- [Github Issue](https://github.com/sparklemotion/nokogiri/issues/1582)
- [CVE-2016-9318](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-9318)
