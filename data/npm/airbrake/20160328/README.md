## Overview
`airbrake` versions prior to 0.4.0 defaults to sending environment variables over an unencrypted HTTP channel. These can be intercepted by an attacker, potentially exposing sensitive information. 

## Remediation
Upgrade to version 0.4.0 or greater.

## References
- https://github.com/airbrake/node-airbrake/issues/70

