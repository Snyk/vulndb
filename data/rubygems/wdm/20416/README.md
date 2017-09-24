## Overview
[`wdm`](https://rubygems.org/gems/wdm) is a library which can be used to monitor directories for changes. It's mostly implemented in C and uses the Win32 API for a better performance.
Affected versions of the package are vulnerable to Man-in-the-Middle (MitM).
You can read more about `Man-in-the-Middle (MitM)` on our [blog](https://snyk.io/blog/https-breaking-through/).

## Remediation
Upgrade `wdm` to version 0.1.1 or higher.

## References
- [Github Commit](https://github.com/Maher4Ever/wdm/commit/8c35643842ee5241d77850fa51c3cbc166f90963)
