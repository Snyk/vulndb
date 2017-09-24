## Overview
[`tripleo_heat_templates`](https://pypi.python.org/pypi/tripleo_heat_templates) is a Heat templates for deploying OpenStack with OpenStack.
The TripleO Heat templates (tripleo-heat-templates), as used in Red Hat Enterprise Linux OpenStack Platform 7.0, do not properly use the configured RabbitMQ credentials, which makes it easier for remote attackers to obtain access to services in deployed overclouds by leveraging knowledge of the default credentials.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-5329)
- [Redhat Security Advisory](https://access.redhat.com/errata/RHSA-2015:2650)
