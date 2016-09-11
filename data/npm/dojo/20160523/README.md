## Overview
The editor widget of `dojo`, a popular JavaScript toolkit, is vulnerable to XSS attacks.

When saving (potentially) encoded HTML scripts in the editor and loading them again, the scripts are executed anyway.

## Remediation
Upgrade to version `1.1` or higher, which xml-encodes the output.

## References
- https://bugs.dojotoolkit.org/ticket/2140
- https://bugs.dojotoolkit.org/changeset/8069/legacy
