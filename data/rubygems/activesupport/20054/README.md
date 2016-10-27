## Overview

[`activesupport`](https://rubygems.org/gems/activesupport) is toolkit of support libraries and Ruby core extensions extracted from the Rails framework

Ruby on Rails contains a flaw in the JSON parser which may allow a remote attacker to bypass restrictions, allowing them to bypass authentication systems, inject arbitrary SQL, inject and execute arbitrary code, or perform a DoS attack on a Rails application.

## Details

Rails supports multiple parsing backends, one of which involves transforming JSON into YAML via the YAML parser. With a specially crafted payload, an attacker can subvert the backend into decoding a subset of YAML. This may allow a remote attacker to bypass restrictions, allowing them to bypass authentication systems, inject arbitrary SQL, inject and execute arbitrary code, or perform a DoS attack on a Rails application.

## References
- http://rubysec.com/advisories/OSVDB-89594
- https://groups.google.com/d/msg/rubyonrails-security/1h2DR63ViGo/GOUVafeaF1IJ
