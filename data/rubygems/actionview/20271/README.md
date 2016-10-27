## Overview
[`actionview`](https://rubygems.org/gems/actionview) is a conventions and helpers gem for building web pages.
Affected versions of this Gem are vulnerable to Cross-site Scripting (XSS) attacks via unescaped quotes when used as attribute values in tag helpers.

## Details

Text declared as "HTML safe" when passed as an attribute value to a tag helper will not have quotes escaped which can lead to a Cross-site Scripting (XSS) attack.  Impacted code looks something like this:

```ruby
content_tag(:div, "hi", title: user_input.html_safe)
```

Some helpers like the `sanitize` helper will automatically mark strings as "HTML safe", so impacted code could also look something like this:

```ruby
content_tag(:div, "hi", title: sanitize(user_input))
```


All users running an affected release should either upgrade or use one of the workarounds immediately.

You can work around this issue by either *not* marking arbitrary user input as safe, or by manually escaping quotes like this:

```ruby
def escape_quotes(value)
  value.gsub(/"/, '&quot;'.freeze)
end

content_tag(:div, "hi", title: escape_quotes(sanitize(user_input)))
```

## References
- http://rubysec.com/advisories/CVE-2016-6316
- https://groups.google.com/forum/#!topic/rubyonrails-security/I-VWr034ouk
