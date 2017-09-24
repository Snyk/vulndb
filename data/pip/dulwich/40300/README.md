## Overview
[`dulwich`](https://pypi.python.org/pypi/dulwich) is a Python Git Library
The build_index_from_tree function in index.py in Dulwich before 0.9.9 allows remote attackers to execute arbitrary code via a commit with a directory path starting with .git/, which is not properly handled when checking out a working tree.

## References
- [NCD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-9706)
- [Bugzilla redhat](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2014-9706) 
