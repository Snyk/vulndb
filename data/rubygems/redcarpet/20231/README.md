## Overview
[`redcarpet`]('https://rubygems.org/gems/redcarpet') is a fast, safe and extensible Markdown to (X)HTML parser.

Vulnerable versions of `redcarpet` Ruby contain a flaw that allows Arbitrary code execution via stack overflow.

## Details
This flaw exists because the `header_anchor()` function in html.c uses variable length arrays (VLA) without any range checking. This may allow a remote attacker to execute arbitrary code.

## References
- http://rubysec.com/advisories/CVE-2015-5147
- http://seclists.org/oss-sec/2015/q2/818
- http://www.openwall.com/lists/oss-security/2015/06/29/3
