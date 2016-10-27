## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
Affected versions of this Gem are vulnerable to Denial of Service (DoS) attacks via the text rendering component.

## Details
Ruby on Rails contains a flaw in _actionpack/lib/action_view/template/text.rb_ in the text rendering component of Action View when using render :text. This is triggered when handling MIME types that are converted to symbols.

## Remediation
Upgrade to version `3.2.17` or greater.

## References
- http://rubysec.com/advisories/CVE-2014-0082/
- https://groups.google.com/forum/#!topic/rubyonrails-security/LMxO_3_eCuc
