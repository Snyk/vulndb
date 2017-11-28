## Overview
Affected versions of [`ansible-vault`](http://pypi.python.org/pypi/ansible-vault) are vulnerable to Arbitrary Code Execution.

Ansible Vault uses an encrypted format to enable users to store potential secrets (passwords, etc) that are needed for automating tasks.

Prior to version 1.0.5, Ansible Vault used the unsafe `yaml.load()` method to load the yaml file that it ultimately encrypts. If that yaml file contains a carefully coded python directive, the `yaml.load()` method will enable arbitrary commands to be executed.

## Remediation
Upgrade `ansible-vault` to version 1.0.5 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-2809)
- [Github Issue](https://github.com/tomoh1r/ansible-vault/issues/4)
- [Github Commit](https://github.com/tomoh1r/ansible-vault/commit/3f8f659ef443ab870bb19f95d43543470168ae04)
