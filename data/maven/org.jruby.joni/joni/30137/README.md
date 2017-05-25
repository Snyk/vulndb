## Overview
[`org.jruby.joni:joni`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22joni%22)
The regular expression engine in JRuby before 1.4.1, when $KCODE is set to 'u', does not properly handle characters immediately after a UTF-8 character, which allows remote attackers to conduct cross-site scripting (XSS) attacks via a crafted string.

## References

- [Jruby Blog](http://www.jruby.org/2010/04/26/jruby-1-4-1-xss-vulnerability.html)
- [Gentoo Bugzilla](https://bugs.gentoo.org/show_bug.cgi?id=317435)
