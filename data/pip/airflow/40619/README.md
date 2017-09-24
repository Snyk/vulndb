## Overview
[`airflow`](https://pypi.python.org/pypi/airflow) is a Programmatically author, schedule and monitor data pipelines.

Affected versions of this package are vulnerable to Arbitrary Code Execution. Anyone able to modify the application's underlying database, or a computer where certain DAG tasks are executed, may execute arbitrary code on the Airflow host.

## References
- [Jira Issue](https://issues.apache.org/jira/browse/AIRFLOW-855)
- [GitHub PR](https://github.com/apache/incubator-airflow/pull/2132)
