## Overview
[`libxl`](https://www.npmjs.com/package/libxl) contains node bindings for the libxl library for reading and writing excel (XLS and XLSX) spreadsheets.
Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol.

## Remediation
There is no fix version for `libxl`. Versions before `0.2.20` are not affected.
