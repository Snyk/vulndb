## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
Affected versions of this Gem are vulnerable to Arbitrary Code Injection.

## Details
Applications that pass unverified user input to the `render` method in a
controller or a view may be vulnerable to a code injection.

Impacted code will look like this:

```ruby
class TestController < ApplicationController
  def show
    render params[:id]
  end
end
```

An attacker could use the request parameters to coerce the above example
to execute arbitrary ruby code.

All users running an affected release should either upgrade or use one of
the workarounds immediately.

## Remediation
Upgrade to version `3.2.22.2` or greater.

## References
- http://rubysec.com/advisories/CVE-2016-2098
- https://groups.google.com/forum/#!topic/rubyonrails-security/ly-IH-fxr_Q
