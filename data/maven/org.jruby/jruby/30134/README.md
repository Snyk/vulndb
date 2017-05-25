## Overview
[`org.jruby:jruby`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jruby%22)
The ActiveSupport::XmlMini_JDOM backend in lib/active_support/xml_mini/jdom.rb in the Active Support component in Ruby on Rails 3.0.x and 3.1.x before 3.1.12 and 3.2.x before 3.2.13, when JRuby is used, does not properly restrict the capabilities of the XML parser, which allows remote attackers to read arbitrary files or cause a denial of service (resource consumption) via vectors involving (1) an external DTD or (2) an external entity declaration in conjunction with an entity reference.

## References

- [Openwall](http://www.openwall.com/lists/oss-security/2013/03/18/4)
- [NVD](http://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-1856)
