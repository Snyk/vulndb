## Overview
The `codem-transcode` package supports a feature (off by default) to interact with a local `ffprobe`. When enabled, POST requests to `/probe` trigger the execution of the local `ffprobe` binary, with the provided parameters.

This execution is done using `exec`, allowing piped requests, and therefore enabling remote command execution. Newer versions use `execFile` instead, preventing such injection (though still giving attackers to whatever functionality `ffprobe` supports, and any weaknesses in it).

Note that, by default, the package only listens for such requests from the local network interface, greatly reducing the likelihood of exploitation.

## Remediation
Either turn off the `ffprobe` functionality or upgrade to (at least) version `0.5.0`, which address this issue by using `execFile` instead of `exec`.

## References
- https://github.com/madebyhiro/codem-transcode/commit/477aac9da7aab5d3f661ef4c0bf4accae5dff292
- https://dzone.com/articles/understanding-execfile-spawn-exec-and-fork-in-node
