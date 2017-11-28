## Overview
[`apache-airflow`](http://pypi.python.org/pypi/apache-airflow) is Programmatically author, schedule and monitor data pipelines.

Affected versions of this package are vulnerable to Cross-Site Scripting (XSS) attacks.

When using user input to perform tasks on the server, characters like \< \> \" \' must escaped properly. Otherwise, an attacker can manipulate the input to introduce additional attributes, potentially executing code. This may lead to a Cross-Site Scripting (XSS) vulnerability, assuming an attacker can influence the value entered into the template.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
There is no fix version for `apache-airflow`.

## References
- [Apache jira Issue](https://issues.apache.org/jira/browse/AIRFLOW-1260)
