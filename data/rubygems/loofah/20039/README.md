## Overview
[`loofah`](https://rubygems.org/gems/loofah) is a library for manipulating and transforming HTML/XML documents and fragments. It's built on top of Nokogiri and libxml2.

Affected versions of this gem allow a remote cross-site scripting (XSS) attack. This is due to the `Loofah::HTML::Document\#text` function passing properly sanitized user-supplied input to the `Loofah::XssFoliate` and `Loofah::Helpers\#strip_tags` functions which convert input back to text.

## References
- http://rubysec.com/advisories/OSVDB-90945
