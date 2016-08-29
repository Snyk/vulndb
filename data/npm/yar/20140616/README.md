## Overview
Yar uses an encrypted cookie for session support, during the hapi request/reply flow if this cookie value is invalid (changed by the end-user), a request object variable is not set. In versions prior 2.2.0, the presence of this variable was not validated prior to use, resulting in an unhandled ReferenceError, which in most cases will crash the process.

_Source: [Node Security Project](https://nodesecurity.io/advisories/44)_

## Remediation
Update to a version 2.2.0 or greater.

## References

- https://github.com/spumko/yar/issues/34
