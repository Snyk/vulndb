## Overview
[`rails_admin`](https://rubygems.org/gems/rails_admin) is a Rails engine that provides an easy-to-use interface for managing your data.

Affected versions of this project are vulnerable to Cross-site Scripting (XSS) attacks via the add filter functionality. This functionality allows a user to create custom filters to find values within the admin interface. When a new filter is created using the UI, it redirects to a new url containing that filtering information:

```
localhost:3000/admin/model?model_name=model&utf8=%E2%9C%93&f%5B password%5D%5B91178%5D%5Bv%5D=+%22%3E%3Cimg+src%3D%22%22+onerror%3D%22 alert(1)%22%3E&query=
```

An attacker can then phish an authenticated user to trigger this vulnerability.
## References
- [Talos Vulnerability Report](https://www.talosintelligence.com/vulnerability_reports/TALOS-2017-0450)
- [Security Focus](http://www.securityfocus.com/bid/102486)
