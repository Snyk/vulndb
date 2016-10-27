## Overview

[`activesupport`](https://rubygems.org/gems/activesupport) is toolkit of support libraries and Ruby core extensions extracted from the Rails framework

Under certain configurations, the ActiveSupport XML parsing can allow an attacker to construct XML which, when parsed, will contain the contents of arbitrary URLs including files from the application server.

## Details

The ActiveSupport XML parsing functionality supports multiple pluggable backends. One backend supported for JRuby users is ActiveSupport::XmlMini_JDOM which makes use of the javax.xml.parsers.DocumentBuilder class. In some JVM configurations the default settings of that class can allow an attacker to construct XML which, when parsed, will contain the contents of arbitrary URLs including files from the application server.

## References
- http://rubysec.com/advisories/OSVDB-91451
- https://groups.google.com/d/msg/rubyonrails-security/KZwsQbYsOiI/5kUV7dSCJGwJ
