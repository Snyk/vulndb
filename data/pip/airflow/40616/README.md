## Overview
[`airflow`](https://pypi.python.org/pypi/airflow) is a Programmatically author, schedule and monitor data pipelines.

Affected versions of this package are vulnerable to Arbitrary Code Execution. User input is sent unchecked to the the python `eval` function which directly executes the parameters. Any user who can create or edit charts may execute arbitrary code on the server.

## References
- [Jira Issue](https://issues.apache.org/jira/browse/AIRFLOW-933)
- [GitHub PR](https://github.com/apache/incubator-airflow/pull/2117)
- [GitHub Commit](https://github.com/apache/incubator-airflow/commit/88d9b0dc96e7528c87326c8070ee276e8565545f)
