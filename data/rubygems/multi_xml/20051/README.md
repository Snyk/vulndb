## Overview
[`multi_xml`](https://rubygems.org/gems/multi_xml) provides swappable XML backends utilizing LibXML, Nokogiri, Ox, or REXML.
Affected versions of this gem are vulnerable to arbitrart command executions by a remote attacker via a specially crafted requests containing arbitrary symbol and yaml types. This is due to mishandling the parsing of the `XML` parameter.

## Remediation
Upgrade to version `>= 0.5.2` or greater.

## References
- http://rubysec.com/advisories/CVE-2013-0175
