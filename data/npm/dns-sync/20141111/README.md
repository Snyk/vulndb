## Overview

The dns-sync library for node.js allows resolving hostnames in a synchronous fashion. All versions of dns-sync prior to the release 0.1.1 were vulnerable to arbitrary command execution via maliciously formed hostnames.

_Source: [Node Security Project](https://nodesecurity.io/advisories/6)_

## Details

For example:

    var dnsSync = require('dns-sync');
    console.log(dnsSync.resolve('$(id > /tmp/foo)'));

This is caused by the hostname being passed through a shell as part of a command execution.

## Remediation

Upgrade dns-sync to version 0.1.1 or greater.

## References
- [Github Issue](https://github.com/skoranga/node-dns-sync/issues/1)
- [Commit addressing issue](https://github.com/skoranga/node-dns-sync/commit/d9abaae384b198db1095735ad9c1c73d7b890a0d)
