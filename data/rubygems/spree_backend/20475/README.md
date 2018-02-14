## Overview
[`spree_backend`](https://rubygems.org/gems/spree_backend) is Required dependency for Spree.

Affected versions of the package are vulnerable to Json Hijacking, due to returning a top level array, making the JSON interpreted as valid javascript.

## Remediation
Upgrade `spree_backend` to version 3.0.7 or higher.

## References
- [Github PR](https://github.com/spree/spree/pull/7107)
- [Github Commit](https://github.com/spree/spree/commit/62f67c5e810c2d1cbdec6462718216661c08db43)
