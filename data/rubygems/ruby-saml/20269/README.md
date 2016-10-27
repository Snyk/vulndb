## Overview

[`ruby-saml`](https://rubygems.org/gems/ruby-saml) is a SAML toolkit for Ruby on Rails.

Affected versions of this gem are vulnerable to an XML signature wrapping attack. This occurs in the specific scenario where there was a signature that referenced at the same time 2 elements (but past the scheme validator process since 1 of the element was inside the encrypted assertion).

## References

- http://rubysec.com/advisories/CVE-2016-5697
- https://github.com/onelogin/ruby-saml/commit/a571f52171e6bfd87db59822d1d9e8c38fb3b995
