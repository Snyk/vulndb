## Overview
[`ovs`](http://pypi.python.org/pypi/ovs) is Open vSwitch library.

Affected versions of the package are vulnerable to Denial of Service (DoS).
In lib/conntrack.c in the firewall implementation in Open vSwitch (OvS) 2.6.1, there is a buffer over-read while parsing malformed TCP, UDP, and IPv6 packets in the functions `extract_l3_ipv6`, `extract_l4_tcp`, and `extract_l4_udp` that can be triggered remotely.

## Remediation
Upgrade `ovs` to version 2.7.2 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-9264)
- [Github Commit](https://github.com/openvswitch/ovs/commit/c562b61ed91605dc0c5790aaf2df09b566df77b6)
