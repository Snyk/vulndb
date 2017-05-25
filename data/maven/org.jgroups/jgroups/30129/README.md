## Overview
[`org.jgroups:jgroups`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jgroups%22)
JGroups before 4.0 does not require the proper headers for the ENCRYPT and AUTH protocols from nodes joining the cluster, which allows remote attackers to bypass security restrictions and send and receive messages within the cluster via unspecified vectors.

## References

- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1313589)
- [JBoss Issues](https://issues.jboss.org/browse/JGRP-2021)
