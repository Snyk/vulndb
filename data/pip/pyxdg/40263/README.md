## Overview
[`pyxdg`](https://pypi.python.org/pypi/pyxdg) is a PyXDG contains implementations of freedesktop.org standards in python.
Race condition in the xdg.BaseDirectory.get_runtime_dir function in python-xdg 0.25 allows local users to overwrite arbitrary files by pre-creating /tmp/pyxdg-runtime-dir-fallback-victim to point to a victim-owned location, then replacing it with a symlink to an attacker-controlled location once the get_runtime_dir function is called.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-1624)
- [Debian Bug Report](http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=736247)
- [Openwall](http://www.openwall.com/lists/oss-security/2014/01/21/4)
