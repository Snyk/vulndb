## Overview
[`python-muranoclient`](https://pypi.python.org/pypi/python-muranoclient) is a client library for Murano built on the Murano API.

OpenStack Murano before 1.0.3 (liberty) and 2.x before 2.0.1 (mitaka), Murano-dashboard before 1.0.3 (liberty) and 2.x before 2.0.1 (mitaka), and python-muranoclient before 0.7.3 (liberty) and 0.8.x before 0.8.5 (mitaka) improperly use loaders inherited from yaml.Loader when parsing MuranoPL and UI files, which allows remote attackers to create arbitrary Python objects and execute arbitrary code via crafted extended YAML tags in UI definitions in packages.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-4972)
- [Github Commit](https://github.com/openstack/python-muranoclient/commit/e470430814ceddadea66d2e4bb3a9b10b55869e6)
