## Overview
[`open-uri-cached`](https://rubygems.org/gems/open-uri-cached) is a rubygem that will cache downloaded data when using open-uri.
Affected versions of this gem are vulnerable a local authentication bypass attack due to usage of YAML in a insecure way, and using a predictable directory name in `/tmp` for getting that data without verification. 

## References
- http://rubysec.com/advisories/OSVDB-121701
- http://seclists.org/oss-sec/2015/q2/373
