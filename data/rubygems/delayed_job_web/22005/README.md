## Overview
[`delayed_job_web`](https://rubygems.org/gems/delayed_job_web) is a Web interface for delayed_job.

Affected versions of this project are vulnerable to Cross-site Scripting (XSS) attacks via the filter functionality.
It allows users to filter output based on the query string of the GET request:

```
localhost:3000/delayed_job/overview?queues=">+<script>alert(1)<%2Fscript>
```

 An attacker can phish an authenticated user to trigger this vulnerability.
## References
- [Talos Vulnerability Report](https://www.talosintelligence.com/vulnerability_reports/TALOS-2017-0449)
- [Security Focus](http://www.securityfocus.com/bid/102484)
