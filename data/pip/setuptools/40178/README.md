## Overview
[`setuptools`](https://pypi.python.org/pypi/setuptools) is a Easily download, build, install, upgrade, and uninstall Python packages
easy_install in setuptools before 0.7 uses HTTP to retrieve packages from the PyPI repository, and does not perform integrity checks on package contents, which allows man-in-the-middle attackers to execute arbitrary code via a crafted response to the default use of the product.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-1633)
- [Reddit](http://www.reddit.com/r/Python/comments/17rfh7/warning_dont_use_pip_in_an_untrusted_network_a)
- [PyPI setuptools Changelog](https://pypi.python.org/pypi/setuptools/0.9.8#changes)
