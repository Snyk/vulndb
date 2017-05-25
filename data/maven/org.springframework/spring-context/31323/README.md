## Overview
[`org.springframework:spring-context`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-context%22)
Affected versions of the package are vulnerable to Denial of Service (DoS). The CronSequenceGenerator constructor goes into infinite loop if one of the fields is of the form n/0.

## References
- [Jira Issue](https://jira.spring.io/browse/SPR-12871)
