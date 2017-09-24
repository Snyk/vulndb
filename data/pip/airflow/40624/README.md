## Overview
[`airflow`](https://pypi.python.org/pypi/airflow) is a Programmatically author, schedule and monitor data pipelines.

Affected versions of this package are vulnerable to Arbitrary Code Execution attacks due to not preventing the `chart_data` endpoints from using user-input and executing them.

## References
- [Jira Issue](https://issues.apache.org/jira/browse/AIRFLOW-1007)
- [GitHub PR](https://github.com/apache/incubator-airflow/pull/2184)
- [GitHub Commit](https://github.com/apache/incubator-airflow/commit/04cacdd0a7526927137b452f38c3e894a5d2ce4a)
