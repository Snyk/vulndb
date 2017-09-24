## Overview
[`airflow`](https://pypi.python.org/pypi/airflow) is a Programmatically author, schedule and monitor data pipelines.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks due to not sanitizing user-inputted HTML passed to Markup. This allows a malicious user to execute arbitrary code.

## References
- [Jira Issue](https://issues.apache.org/jira/browse/AIRFLOW-1047)
- [GitHub PR](https://github.com/apache/incubator-airflow/pull/2193)
- [GitHub Commit](https://github.com/apache/incubator-airflow/commit/fe9ebe3ccf5fec4c491343659aa0c52e4125f66b)
