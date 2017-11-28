## Overview
[`org.apache.karaf:org.apache.karaf.main`](https://karaf.apache.org/) is a modern and polymorphic container.

Affected versions of this package are vulnerable to Denial of Sevice (DoS) attacks.
Apache Karaf enables a shutdown port on the loopback interface, which allows local users to cause a denial of service (shutdown) by sending a shutdown command to all listening high ports.

## References
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1095974)
