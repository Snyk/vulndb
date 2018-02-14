## Overview
[`github.com/btcsuite/go-socks/socks`](https://github.com/btcsuite/go-socks) is a SOCKS5 proxy library for Go.

Affected versions of this package are vulnerable to Denial of Service (DoS). An attacker can exploit this vulnerability to trigger an infinite loop, causing the system to stop responding

## Remediation
Upgrade `github.com/btcsuite/go-socks/socks` to commit `233bccb` from Aug 8, 2013 or newer.

## References
- [GitHub Commit](https://github.com/btcsuite/go-socks/commit/233bccbb1abe02f05750f7ace66f5bffdb13defc)
