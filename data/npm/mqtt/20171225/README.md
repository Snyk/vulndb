## Overview
[`mqtt`](https://www.npmjs.com/package/mqtt) is a client library for the MQTT protocol, written in JavaScript for node.js and the browser.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks.
MQTT.js 2.x.x prior to 2.15.0 issue in handling PUBLISH tickets may lead to an attacker causing a denial-of-service condition.

## References
- [GitHub Release Notes](https://github.com/mqttjs/MQTT.js/releases/tag/v2.15.0)
- [GitHub PR](https://github.com/mqttjs/MQTT.js/pull/738)
- [GitHub Commit](https://github.com/mqttjs/MQTT.js/commit/403ba53b838f2d319a0c0505a045fe00239e9923)
- [JVN](https://jvn.jp/en/jp/JVN45494523/index.html)
