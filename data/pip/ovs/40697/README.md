## Overview
[`ovs`](http://pypi.python.org/pypi/ovs) is Open vSwitch library.

Affected versions of the package are vulnerable to Denial of Service (DoS).
In Open vSwitch (OvS) 2.7.0, while parsing an OFPT_QUEUE_GET_CONFIG_REPLY type OFP 1.0 message, there is a buffer over-read that is caused by an unsigned integer underflow in the function `ofputil_pull_queue_get_config_reply10` in `lib/ofp-util.c`.

## Remediation
Upgrade `ovs` to version 2.7.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-9214)
- [Github Commit](https://github.com/openvswitch/ovs/commit/7b7b186a8d40fc6f287cef2582702181da74bdc3)
