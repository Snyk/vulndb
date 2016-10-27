## Overview
[nokogiri](https://rubygems.org/gems/nokogiri) is a an HTML, XML, SAX, and Reader parser, with the ability to search documents via XPath or CSS3 selectors.
Affected versions of this Gem are vulnerable to Denial of Services (DoS) attacks.

## Details

Nokogiri is affected by series of vulnerabilities in libxml2 and libxslt,
which are libraries Nokogiri depends on. It was discovered that libxml2 and
libxslt incorrectly handled certain malformed documents, which can allow
attackers to perform a Denial of Service or [Arbitrary Code Execution](https://snyk.io/vuln/SNYK-RUBY-NOKOGIRI-20268-1) attacks.

## References
- http://rubysec.com/advisories/CVE-2015-8806
- https://github.com/sparklemotion/nokogiri/issues/1473
- https://www.ubuntu.com/usn/usn-2994-1/
