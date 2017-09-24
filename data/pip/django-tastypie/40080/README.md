## Overview
[`django-tastypie`](https://pypi.python.org/pypi/django-tastypie) is a A flexible & capable API layer for Django.
The from_yaml method in serializers.py in Django Tastypie before 0.9.10 does not properly deserialize YAML data, which allows remote attackers to execute arbitrary Python code via vectors related to the yaml.load method.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-4104)
- [Openwall](http://www.openwall.com/lists/oss-security/2011/11/02/1)
- [GitHub Commit](https://github.com/toastdriven/django-tastypie/commit/e8af315211b07c8f48f32a063233cc3f76dd5bc2)
