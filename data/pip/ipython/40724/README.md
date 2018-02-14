## Overview
Affected versions of [`ipython`](https://pypi.python.org/pypi/ipython) are vulnerable to Arbitrary Code Executionhttps://nvd.nist.gov/vuln/detail/CVE-2015-7337.

The editor in IPython Notebook before 3.2.2 and Jupyter Notebook 4.0.x before 4.0.5 allows remote attackers to execute arbitrary JavaScript code via a crafted file, which triggers a redirect to files/, related to MIME types.

## Remediation
Upgrade `ipython` to version 3.2.2 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2015-7337)
- [GitHub Commit](https://github.com/ipython/ipython/commit/0a8096adf165e2465550bd5893d7e352544e5967)
