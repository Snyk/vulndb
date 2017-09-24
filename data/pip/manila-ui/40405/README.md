## Overview
[`manila_ui`](https://pypi.python.org/pypi/manila_ui) is a Manila Management Dashboard.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. The "Shares" overview allows remote authenticated users to inject arbitrary web script or HTML via the Metadata field in the "Create Share" form.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-6519)
- [oss-sec](http://seclists.org/oss-sec/2016/q3/515)
- [Github Commit](https://github.com/openstack/manila-ui/commit/fca19a1b0d42536644212c5d673fbd6866e67c43)
