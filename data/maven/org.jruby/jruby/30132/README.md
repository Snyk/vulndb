## Overview
[`org.jruby:jruby`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jruby%22)
The JSON gem before 1.5.5, 1.6.x before 1.6.8, and 1.7.x before 1.7.7 for Ruby allows remote attackers to cause a denial of service (resource consumption) or bypass the mass assignment protection mechanism via a crafted JSON document that triggers the creation of arbitrary Ruby symbols or certain internal objects, as demonstrated by conducting a SQL injection attack against Ruby on Rails, aka "Unsafe Object Creation Vulnerability."

## References

- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-0269)
