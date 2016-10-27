## Oerview

[`ruby-saml`](https://rubygems.org/gems/ruby-saml) is a SAML toolkit for Ruby on Rails.

Affected versions are vulnerable to XPath injection on `xml_security.rb`. The lack of prepared statements allows for possible command injection, leading to arbitrary code execution.

## References

- http://rubysec.com/advisories/OSVDB-124991
- https://github.com/onelogin/ruby-saml/pull/225
