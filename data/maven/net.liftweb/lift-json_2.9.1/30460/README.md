## Overview
[`net.liftweb:lift-json_2.9.1`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22lift-json_2.9.1%22)
The JsonParser class in json/JsonParser.scala in Lift before 2.5 interprets a certain end-index value as a length value, which allows remote authenticated users to obtain sensitive information from other users' sessions via invalid input data containing a &lt; (less than) character.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-3300)
- [Github Commit](https://github.com/lift/framework/commit/099d9c86cf6d81f4953957add478ab699946e601)
