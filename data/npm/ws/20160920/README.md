## Overview
[`ws`](https://www.npmjs.com/package/ws) is a simple to use websocket client, server and console for node.js.

Affected versions of the package use the cryptographically insecure `Math.random()` which can produce predictable values and should not be used in security-sensitive context.

### Details
Computers are deterministic machines, and as such are unable to produce true randomness. Pseudo-Random Number Generators (PRNGs) approximate randomness algorithmically, starting with a seed from which subsequent values are calculated.

There are two types of PRNGs: statistical and cryptographic. Statistical PRNGs provide useful statistical properties, but their output is highly predictable and forms an easy to reproduce numeric stream that is unsuitable for use in cases where security depends on generated values being unpredictable. Cryptographic PRNGs address this problem by generating output that is more difficult to predict. For a value to be cryptographically secure, it must be impossible or highly improbable for an attacker to distinguish between it and a truly random value. In general, if a PRNG algorithm is not advertised as being cryptographically secure, then it is probably a statistical PRNG and should not be used in security-sensitive contexts.

You can read more about node's insecure `Math.random()` in [Mike Malone's post](https://medium.com/@betable/tifu-by-using-math-random-f1c308c4fd9d).

## Remediation
Upgrade `ws` to version 1.1.2 or higher.

## References
- [GitHub PR](https://github.com/websockets/ws/pull/832)
- [GitHub Commit](https://github.com/websockets/ws/commit/7253f06f5432c76f3e82e2c055fcea08b612d8b2)
- [Mike Malone's Blog](https://medium.com/@betable/tifu-by-using-math-random-f1c308c4fd9d#.6wcldperq)
