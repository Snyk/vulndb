## Overview
[`org.apache.httpcomponents:httpclient`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22httpclient%22)

Affected versions of the package might be vulnerable to _Directory Traversal_, which may allow access to sensitive files and data on the server. 

## References
- [Researcher blog post](http://blog.portswigger.net/2017/07/cracking-lens-targeting-https-hidden.html)
- [Jira Issue](https://issues.apache.org/jira/browse/HTTPCLIENT-1803)
- [Github Commit](https://github.com/apache/httpcomponents-client/commit/0554271750599756d4946c0d7ba43d04b1a7b220)
