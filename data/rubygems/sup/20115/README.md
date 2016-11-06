## Overview
[sup](https://rubygems.org/gems/sup) is a console-based email client for people with a lot of email.
Affected versions of this gem do not sanitize email attachment content when using quotes (',") around filename or content_type which is already escaped using Ruby `Shellwords.escape` - this means that the string (content_type, filename) is intended to be used _without_ any further quotes. This may allow a context-dependent attacker to execute arbitrary commands.

## References
- http://rubysec.com/advisories/CVE-2013-4478
- http://www.phenoelit.org/stuff/whatsup.txt
- https://github.com/sup-heliotrope/sup/blob/916a354db8eb851bff6ff2e3f2e08727d132a8dc/lib/sup/message_chunks.rb#L175
