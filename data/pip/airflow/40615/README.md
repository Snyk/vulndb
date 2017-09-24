## Overview
[`airflow`](https://pypi.python.org/pypi/airflow) is a Programmatically author, schedule and monitor data pipelines.

Affected versions of this package are vulnerable to Cross-site Request Forgery (CSRF) attacks because the `paused` and `query` endpoints are state-changing.

## References
- [Jira Issue](https://issues.apache.org/jira/browse/AIRFLOW-836)
- [GitHub PR](https://github.com/apache/incubator-airflow/pull/2054)
- [GitHub Commit](https://github.com/apache/incubator-airflow/commit/673026c740411cc6447aede8c6a816460fe03a59)
