## Overview
[`adamvr-geoip-lite`](https://www.npmjs.com/package/adamvr-geoip-lite) is a light weight native JavaScript implementation of GeoIP API from MaxMind

Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol. Without a secure connection, it is possible for an attacker to intercept this connection and alter the packages received. In serious cases, this may even lead to Remote Code Execution (RCE) on your host server.

## Remediation
There is no fix version for `adamvr-geoip-lite`.
