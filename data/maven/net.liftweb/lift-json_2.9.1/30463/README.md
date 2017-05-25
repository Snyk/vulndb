## Overview
[`net.liftweb:lift-json_2.9.1`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22lift-json_2.9.1%22)
Lift 2.5.1 was found to be vulnerable to XML External Entity attacks, which can leak private files through your application when parsing certain types of XML. In the process of communicating the vulnerability to Typesafe, they referred us to a more-restricted version of XML parsing used to prevent additional vulnerabilities like the billion laughs vulnerability and its sibling quadratic blowup vulnerability.

## References
- [Release Notes](https://github.com/lift/framework/releases/tag/2.5.3-release)
- [GitHub Commit](https://github.com/lift/framework/commit/099d9c86cf6d81f4953957add478ab699946e601)
