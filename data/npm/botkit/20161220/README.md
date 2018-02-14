## Overview
[`botkit`](https://www.npmjs.com/package/botkit) is Building blocks for Building Bots.

Affected versions of the package are vulnerable to Denial of Service (DoS) attacks. An attacker may send huge arrays of requests or impersonate FB/users, causing the server to take extremely long time to process these requests.

## Remediation
Upgrade `botkit` to version 0.4.4 or higher.

## References
- [GitHub PR](https://github.com/howdyai/botkit/pull/555)
- [GitHub Commit](https://github.com/howdyai/botkit/commit/ceaf8eb2e419f159e5180e6b21614c15b2c26653)
