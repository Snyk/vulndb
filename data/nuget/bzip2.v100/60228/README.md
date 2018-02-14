## Overview
Affected versions of [`bzip2.v100`](https://www.nuget.org/packages/bzip2.v100) are vulnerable to Denial of Service (DoS) attacks.

Integer overflow in the BZ2_decompress function in decompress.c in bzip2 and libbzip2 before 1.0.6 allows context-dependent attackers to cause a denial of service (application crash) or possibly execute arbitrary code via a crafted compressed file.

## Remediation
Upgrade `bzip2.v100` to version 1.0.6 or higher.

## References
- [bzip2 Release Notes](https://www.nuget.org/packages/bzip2.v100/)
