## Overview
[`sails`](https://www.npmjs.com/package/sails) is API-driven framework for building realtime apps, using MVC conventions (based on Express and Socket.io).

Sails version `0.12.6` and lower allowed the default CORS settings to be very permissive, letting the attacker to bypass the Same Origin Policy.

## Remediation
Upgrade `sails` to version 0.12.7 or higher.

## References
- https://github.com/balderdashy/sails/commit/0057123a0321be6758845abbeb4290bf418ce542


