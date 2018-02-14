## Overview
[`django_make_app`](http://pypi.python.org/pypi/django_make_app) is define models and fields using YAML and generate app for Django with views, forms, templates etc.

Affected versions of the package are vulnerable to Arbitrary Code Execution.
An exploitable vulnerability exists in the YAML parsing functionality in the read_yaml_file method in io_utils.py in django_make_app 0.1.3. A YAML parser can execute arbitrary Python commands resulting in command execution. An attacker can insert Python into loaded YAML to trigger this vulnerability.

## Remediation
There is no fix version for `django_make_app`.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-16764)
- [GitHub Issue](https://github.com/illagrenan/django-make-app/issues/5)
