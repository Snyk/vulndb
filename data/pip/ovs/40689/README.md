## Overview
[`ovs`](http://pypi.python.org/pypi/ovs) is Open vSwitch library.

Affected versions of the package are vulnerable to Denial of Service (DoS).
In Open vSwitch (OvS) v2.7.0, there is a buffer over-read while parsing the group mod OpenFlow message sent from the controller in `lib/ofp-util.c` in the function `ofputil_pull_ofp15_group_mod`.

## Remediation
Upgrade `ovs` to version 2.7.2 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-9265)
- [Github Commit](https://github.com/openvswitch/ovs/commit/050f90662dde1da1ee3cdd209a9b65196a808811)
