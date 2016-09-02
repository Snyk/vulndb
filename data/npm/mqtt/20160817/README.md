## Overview
['mqtt'](https://www.npmjs.com/package/mqtt) is a library implementing the MQTT protocol. Versions earlier than `1.0.0` allow a remote attacker to cause Denial of Service (DoS) by sending a specifically crafted packet, crashing the application.

## Remediation
Upgrade `mqtt` to version 1.0.0 or later

## References
- https://github.com/mqttjs/MQTT.js/blob/388a084d7803934b18b43c1146c817deaa1396b1/lib/parse.js#L230

