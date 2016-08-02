## Overview
[`ezseed-transmission`](https://www.npmjs.com/package/ezseed-transmission) is a module that provides shell bindings for Ezseed transmission.

Between versions 0.0.10 and 0.0.14 (inclusive), ezseed-transmission would download a script from `http://stedolan.github.io/jq/download/linux64/jq` without checking the certificate.  An attacker on the same network or on an ISP level could intercept the traffic and push their own version of the file, causing the attackers code to be executed.

Source: _Node Security Project_

## Remediation
Upgrade to at least version 0.0.15

## References
- https://github.com/ezseed/transmission/commit/4816b1b08288774c607a7df2a4209612c4d46caa