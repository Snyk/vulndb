## Overview
[nokogiri](https://rubygems.org/gems/nokogiri) is a an HTML, XML, SAX, and Reader parser, with the ability to search documents via XPath or CSS3 selectors.
Affected versions of this Gem are vulnerable to XML External Entity (XXE) attacks when opting into the `DTDLOAD` option and opting out of the `NONET` option.

## Details
`Nokogiri` is affected by series of vulnerabilities in libxml2 and libxslt, which are libraries it depends on. When handling the expansion of XML external entities (XXE) in libxml2, you can specify documents to be read. Opting into the `DTDLOAD` option and opting out of the `NONET` option in `Nokogiri` allows unknown documents to be loaded from the network. This can be used by attackers to load specially crafted XML documents on an internal XML parsing service and may lead to unauthorized disclosure of potentially sensitive information.

**Note:** This vulnerability exists also in versions `< 1.5.4` regardless of the options opted into or out of. See information [here](https://snyk.io/vuln/SNYK-RUBY-NOKOGIRI-20298)

## Remediation
Nokogiri suggests not to opt-out of `NONET` unless only trusted documents are being parsed.
There currently is no fix in libxml2 as of September 17th, 2017.
`Nokogiri` will be waiting for a fix upstream to update.

## Disclosure Timeline
- January 11th, 2017 - Reported the issue to [Mike Dalessio](https://github.com/flavorjones) of Nokogiri Core.
- January 11th, 2017 - Issue triaged and acknowledged by [Mike Dalessio](https://github.com/flavorjones) of Nokogiri Core.

## References
- [GitHub Issue](https://github.com/sparklemotion/nokogiri/issues/1582)
- [CVE-2016-9318](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-9318)
