## Overview
[`shout`](https://www.npmjs.com/package/shout) is a self-hosted Web IRC client.
The `topic` message in `src/plugins/irc-events/topic.js` is not escaped and may allow attackers to inject arbitrary HTML scripts.

## Remediation
Upgrade `shout` to version 0.50.0 or higher.

## References
- [Github PR](https://github.com/erming/shout/pull/344)
- [Github Commit](https://github.com/erming/shout/compare/890c751bb624cde53dc392b2c851cdcd056033c6...e94341f8b022a980512c464cdc088063fa245dea)
