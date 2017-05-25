## Overview
[`org.jruby:jruby`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jruby%22)
lib/rexml/text.rb in the REXML parser in Ruby before 1.9.3-p392 allows remote attackers to cause a denial of service (memory consumption and crash) via crafted text nodes in an XML document, aka an XML Entity Expansion (XEE) attack.

## References
- [CVE](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2013-1821)
- [Ruby Blog](https://www.ruby-lang.org/en/news/2013/02/22/rexml-dos-2013-02-22/)
