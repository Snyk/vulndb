## Overview
[`glance`](https://pypi.python.org/pypi/python-glanceclient/) is an OpenStack Image API Client Library.

OpenStack Image Registry and Delivery Service (Glance) Folsom, Grizzly before 2013.1.4, and Havana before 2013.2, when the download_image policy is configured, does not properly restrict access to cached images, which allows remote authenticated users to read otherwise restricted images via an image UUID.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2013-4428)
- [Github Commit](https://github.com/openstack/glance/commit/a50bfb)
