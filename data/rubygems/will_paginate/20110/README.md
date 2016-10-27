## Overview

[`will_paginate`](https://rubygems.org/gems/will_paginate) provides a simple API for performing paginated queries.

Affected versions are vulnerable to Cross-site Scripting (XSS) attackד. This flaw exists because the application does not validate certain unspecified input related to generated pagination links before returning it to the user. This may allow an attacker to create a specially crafted request that would execute arbitrary script code in a users browser within the trust relationship between their browser and the server.

## References
- http://rubysec.com/advisories/CVE-2013-6459
- https://github.com/mislav/will_paginate/commit/4cb4986d5ce05aa84572b05cfd1c1d0aa9bc07df
