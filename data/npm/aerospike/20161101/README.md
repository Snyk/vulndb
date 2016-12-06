## Overview
[`aerospike`](https://www.npmjs.com/package/aerospike) is an Aerospike Client Library.
Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol.


## Remediation
Upgrade `aerospike` to version 2.4.2 or higher.


## References
- [Gthub Issue]( https://github.com/aerospike/aerospike-client-nodejs/issues/153)
- [Github Commit]( https://github.com/aerospike/aerospike-client-nodejs/commit/d5e916a3a65c169e60200f18f02524c67bb58237)
