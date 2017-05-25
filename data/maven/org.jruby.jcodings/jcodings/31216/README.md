## Overview
[`org.jruby.jcodings:jcodings`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jcodings%22)
The regular expression engine in JRuby before 1.4.1, when $KCODE is set to 'u', does not properly handle characters immediately after a UTF-8 character, which allows remote attackers to conduct cross-site scripting (XSS) attacks via a crafted string.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2010-1330)