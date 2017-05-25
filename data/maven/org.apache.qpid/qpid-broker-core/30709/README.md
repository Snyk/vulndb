## Overview
[`org.apache.qpid:qpid-broker-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22qpid-broker-core%22)
Affected versions of the package are vulnerable to Information Exposure.
The Qpid Broker for Java can be configured to use different so called AuthenticationProviders to handle user authentication. Among the choices are the SCRAM-SHA-1 and SCRAM-SHA-256 AuthenticationProvider types.
It was discovered that these AuthenticationProviders prematurely terminate the SCRAM SASL negotiation if the provided user name does not exist thus allowing remote attacker to determine the existence of user accounts.

**Note:** The Vulnerability does not apply to AuthenticationProviders other
than SCRAM-SHA-1 and SCRAM-SHA-256.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-8741)
- [OSS Security](http://seclists.org/bugtraq/2016/Dec/55)
