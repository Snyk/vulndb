## Overview
[`uuid`](https://www.npmjs.com/package/uuid) is RFC4122 (v1 and v4) generator.
Affected versions of the package use the `Math.random()` function which may generate already-used numbers after 24,000 cycles, making the values predictable for objects requiring unpredictability. It is possible for an attacker to guess the next value to be generated and may use this to access sensitive information.

## Remediation
Upgrade `uuid` to version 1.3.1 or higher.

## References
- [GitHub Commit](https://github.com/defunctzombie/node-uuid/commit/283bd40be4c1836e510ec7a1685288f2d52943f8)
