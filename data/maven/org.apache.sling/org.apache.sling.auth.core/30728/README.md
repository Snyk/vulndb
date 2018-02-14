## Overview
[`org.apache.sling:org.apache.sling.auth.core`](https://sling.apache.org/) is a framework for RESTful web-applications based on an extensible content tree.

Open redirect vulnerability in the AbstractAuthenticationFormServlet in the Auth Core (org.apache.sling.auth.core) bundle before 1.1.4 in Apache Sling allows remote attackers to redirect users to arbitrary web sites and conduct phishing attacks via a URL in the resource parameter, related to "a custom login form and XSS."

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-4390)
