## Overview
[`airflow`](https://pypi.python.org/pypi/airflow) is a Programmatically author, schedule and monitor data pipelines.

Affected versions of this package are vulnerable to Arbitrary Code Execution attacks due to a flaw in the code that evaluates a variable improperly, allowing an attacker to hijack the interpreter.

## References
- [Jira Issue](https://issues.apache.org/jira/browse/AIRFLOW-231)
- [GitHub PR](https://github.com/apache/incubator-airflow/pull/1584)
- [GitHub Commit](https://github.com/apache/incubator-airflow/commit/7d29698b639d9e2060465aa778efb842986df706)
