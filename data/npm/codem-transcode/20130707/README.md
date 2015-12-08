## Overview

When the ffprobe functionality is enabled on the server, HTTP POST requests can be made to /probe. These requests are passed to the ffprobe binary on the server. Through this HTTP endpoint it is possible to send a malformed source file name to ffprobe that results in arbitrary command execution.

_Source: [Node Security Project](https://nodesecurity.io/advisories/2)_

## Details

**Mitigating Factors:**
The ffprobe functionality is not enabled by default. In addition, exploitation opportunities are limited in a standard configuration because the server binds to the local interface by default.

## Remediation
An updated and patched version of the module (version 0.5.0) is [available via npm] (https://www.npmjs.com/package/codem-transcode). Users who have enabled the ffprobe functionality are especially encouraged to upgrade.

## References
- https://nodesecurity.io/advisories/2
