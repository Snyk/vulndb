## Overview
[`graphite-web`](https://pypi.python.org/pypi/graphite-web) is a Enterprise scalable realtime graphing
Graphite 0.9.5 through 0.9.10 uses the pickle Python module unsafely, which allows remote attackers to execute arbitrary code via a crafted serialized object, related to (1) remote_storage.py, (2) storage.py, (3) render/datalib.py, and (4) whitelist/views.py, a different vulnerability than CVE-2013-5093.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-5942)
- [GitHub Release Notes](https://github.com/graphite-project/graphite-web/blob/master/docs/releases/0_9_11.rst)
