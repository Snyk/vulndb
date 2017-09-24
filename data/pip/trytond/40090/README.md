## Overview
[`trytond`](https://pypi.python.org/pypi/trytond) is a Tryton server
model/modelstorage.py in the Tryton application framework (trytond) before 2.4.0 for Python does not properly restrict access to the Many2Many field in the relation model, which allows remote authenticated users to modify the privileges of arbitrary users via a (1) create, (2) write, (3) delete, or (4) copy rpc call.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-0215)
- [Trytond Issues](https://bugs.tryton.org/issue2476)
