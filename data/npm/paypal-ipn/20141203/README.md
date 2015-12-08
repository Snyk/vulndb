## Overview

paypal-ipn uses the `test_ipn` parameter (which is set by the PayPal IPN simulator) to determine if it should use the production PayPal site or the sandbox.

"With a bit of time, an attacker could craft a request using the simulator that would fool any application which does not explicitly check for test_ipn in production." [1]

_Source: [Node Security Project](https://nodesecurity.io/advisories/26)_

## Remediation
Upgrade to version 3.0.0 or greater.

## References
- https://nodesecurity.io/advisories/26
- [1] https://github.com/andzdroid/paypal-ipn/issues/11
