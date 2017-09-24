## Overview
[`pymongo`](https://pypi.python.org/pypi/pymongo) is a Python driver for MongoDB.

`bson/_cbsonmodule.c` in the mongo-python-driver (aka. pymongo) before 2.5.2, as used in MongoDB, allows context-dependent attackers to cause a denial of service (NULL pointer dereference and crash) via vectors related to decoding of an "invalid DBRef."

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-2132)
- [Github Commit](https://github.com/mongodb/mongo-python-driver/commit/a060c15ef87e0f0e72974c7c0e57fe811bbd06a2)
