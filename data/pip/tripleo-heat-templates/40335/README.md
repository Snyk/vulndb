## Overview
[`tripleo_heat_templates`](https://pypi.python.org/pypi/tripleo_heat_templates) is a Heat templates for deploying OpenStack with OpenStack.
The TripleO Heat templates (tripleo-heat-templates) do not properly order the Identity Service (keystone) before the OpenStack Object Storage (Swift) staticweb middleware in the swiftproxy pipeline when the staticweb middleware is enabled, which might allow remote attackers to obtain sensitive information from private containers via unspecified vectors.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-5271)
- [Redhat Security Advisory](https://access.redhat.com/errata/RHSA-2015:1862)
- [Tripleo Bug Report](https://bugs.launchpad.net/tripleo/+bug/1494896)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1261697)
- [Patch](https://launchpadlibrarian.net/217268516/CVE-2015-5271_puppet-swift.patch)
