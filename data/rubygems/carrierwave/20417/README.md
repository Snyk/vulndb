## Overview
[`carrierwave`](https://rubygems.org/gems/carrierwave) provides a simple and extremely flexible way to upload files from Ruby applications.

Affected versions of the package are vulnerable to Information Exposure. When an exception message occurs, it contains the full path of the project directory.

## Remediation
Upgrade `carrierwave` to version 1.0.0.beta or higher.

## References
- [Github PR](https://github.com/carrierwaveuploader/carrierwave/pull/1361)
- [Github Commit](https://github.com/carrierwaveuploader/carrierwave/commit/96314bb42c32d6b24278474e1c877b53a88bfaf8)
