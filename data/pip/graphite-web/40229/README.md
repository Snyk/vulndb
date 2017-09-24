## Overview
[`graphite-web`](https://pypi.python.org/pypi/graphite-web) is a Enterprise scalable realtime graphing
The renderLocalView function in render/views.py in graphite-web in Graphite 0.9.5 through 0.9.10 uses the pickle Python module unsafely, which allows remote attackers to execute arbitrary code via a crafted serialized object.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-5093)
- [GitHub Commit](https://github.com/graphite-project/graphite-web/commit/4a9f98647be279a39a982bd94922fdec710b0b3f)
