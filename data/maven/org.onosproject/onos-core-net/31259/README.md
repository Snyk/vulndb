## Overview
[`org.onosproject:onos-core-net`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22onos-core-net%22)
Affected versions of the package are vulnerable to Denial of Service (DoS).
It was found that the packet deserializers in ONOS would throw exceptions when handling malformed, truncated or maliciously-crafted packets. The exceptions were not caught and handled, which would result in the relevant switch being disconnected because an exception occurred in an I/O thread. A remote unauthenticated attacker could use this flaw to perform a Denial of Service (DoS) attack by causing ONOS to disconnect switches.

## References
- [Jira Issue](https://jira.onosproject.org/browse/ONOS-605)
