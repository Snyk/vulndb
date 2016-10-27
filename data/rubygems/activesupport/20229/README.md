## Overview

[`activesupport`](https://rubygems.org/gems/activesupport) is toolkit of support libraries and Ruby core extensions extracted from the Rails framework

Specially crafted XML documents can cause applications to raise a `SystemStackError` and potentially cause a denial of service attack. This only impacts applications using REXML or JDOM as their XML processor. Other XML processors that Rails supports are not impacted.

## Details

All users running an affected release should either upgrade or use one of the work arounds immediately.

## References
- http://rubysec.com/advisories/CVE-2015-3227
- https://groups.google.com/forum/#!topic/rubyonrails-security/bahr2JLnxvk
