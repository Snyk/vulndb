## Overview
[`org.jasig.portal:uportal-war`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22uportal-war%22)
uPortal before 4.0.13.1 does not properly check the MANAGE permissions, which allows remote authenticated users to manage arbitrary portlets by leveraging the SUBSCRIBE permission for the portlet-admin portlet.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-3416)