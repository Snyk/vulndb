## Overview
[`podium`](https://www.npmjs.com/package/podium) is Node compatible event emitter with extra features.
Affected versions of the package are vulnerable to Denial of Service (DoS). 
When calling the `setImmediate()` multiple times, the callbacks are queued for execution and is processed every event loop iteration. This makes it possible for attacker to manipulate calls to the server and cause it consume a high amount of CPU, before crashing.

## Remediation
Upgrade `podium` to version 1.2.5 or higher.

## References
- [Github Issue](https://github.com/hapijs/hapi/issues/3347)
- [Github PR](https://github.com/hapijs/podium/pull/17)
- [Github Commit](https://github.com/hapijs/podium/pull/17/commits/47f9ea3f9ab5a5664528722f570eeed11a446c90)
