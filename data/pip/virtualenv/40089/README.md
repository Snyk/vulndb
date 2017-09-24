## Overview
[`virtualenv`](https://pypi.python.org/pypi/virtualenv) is a Virtual Python Environment builder
virtualenv.py in virtualenv before 1.5 allows local users to overwrite arbitrary files via a symlink attack on a certain file in /tmp/.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-4617)
- [Openwall](http://openwall.com/lists/oss-security/2011/12/19/5)
- [Bitbucket Commit](https://bitbucket.org/ianb/virtualenv/changeset/8be37c509fe5)
