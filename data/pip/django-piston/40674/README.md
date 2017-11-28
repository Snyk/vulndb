## Overview
[`django-piston`](https://pypi.python.org/pypi/django-piston) s a Django mini-framework creating APIs.

Affected versions of this package are vulnerable to Arbitrary Code Execution attacks.

emitters.py in Django Piston before 0.2.3 and 0.2.x before 0.2.2.1 does not properly deserialize YAML data, which allows remote attackers to execute arbitrary Python code via vectors related to the yaml.load method.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2011-4103)
- [Bitbucket Commit](https://bitbucket.org/jespern/django-piston/commits/91bdaec89543/)
