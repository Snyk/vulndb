## Overview
Affected versions of [`com.fasterxml.jackson.core:jackson-core`](https://core.jackson.fasterxml.com) are vulnerable to Denial of Service attacks. 

If the REST endpoint consumes POST requests with JSON or XML data and data are invalid, the first unrecognized token is printed to server.log
> If the first token is word of length 10MB, the whole word is printed. This is potentially dangerous and can be used to attack the server by filling the disk with logs.

## Remediation
Upgrade `com.fasterxml.jackson.core:jackson-core` to version `2.8.6` or higher.

## References
- [Github PR](https://github.com/FasterXML/jackson-core/pull/322)
- [Jira Issue](https://issues.jboss.org/browse/JBEAP-6316)
