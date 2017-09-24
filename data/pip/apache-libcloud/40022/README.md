## Overview
[`apache-libcloud`](https://pypi.python.org/pypi/apache-libcloud) is a A standard Python library that abstracts away differences among multiple cloud provider APIs.

Affected versions of this package are vulnerable to Information Exposure.
Libcloud 0.12.3 through 0.13.2 does not set the scrub_data parameter for the destroy DigitalOcean API, which allows local users to obtain sensitive information by leveraging a new VM.

## Remediation
Upgrade to version `0.13.3` or greater.

## References
- [Libcloud Security Advisory](http://libcloud.apache.org/security.html)
- [Seclists](http://seclists.org/bugtraq/2014/Jan/5)
- [GitHub Issues](https://github.com/fog/fog/issues/2525)
