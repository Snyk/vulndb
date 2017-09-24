## Overview
[`celery`](https://pypi.python.org/pypi/celery) is a Distributed Task Queue.
Celery 2.1 and 2.2 before 2.2.8, 2.3 before 2.3.4, and 2.4 before 2.4.4 changes the effective id but not the real id during processing of the --uid and --gid arguments to celerybeat, celeryd_detach, celeryd-multi, and celeryev, which allows local users to gain privileges via vectors involving crafted code that is executed by the worker process.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-4356)
- [Celery Security Advisory](https://github.com/ask/celery/blob/master/docs/sec/CELERYSA-0001.txt)
- [GitHub PR](https://github.com/ask/celery/pull/544)
