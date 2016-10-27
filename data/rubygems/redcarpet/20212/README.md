## Overview
[`redcarpet`]('https://rubygems.org/gems/redcarpet') is a fast, safe and extensible Markdown to (X)HTML parser.

Vulnerable versions of `redcarpet` contain a flaw that allows a cross-site scripting (XSS) attack. This flaw exists because the `parse_inline()` function in markdown.c does not validate input before returning it to users. This may allow a remote attacker to create a specially crafted request that would execute arbitrary script code in a user's browser session within the trust relationship between their browser and the server.

## References
- http://rubysec.com/advisories/OSVDB-120415
- http://danlec.com/blog/bug-in-sundown-and-redcarpet
