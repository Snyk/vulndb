## Overview
[`org.kie:kie-drools-wb-distribution-wars`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22kie-drools-wb-distribution-wars%22)
Affected versions of the package are vulnerable to Authentication Bypass.
The default authorization constrains in KIE Workbench 6.0.x allows remote authenticated users to read or write to arbitrary files, bypass intended access restrictions, and possibly have other unspecified impact via unknown vectors.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-8115)
- [GitHub Commit](https://github.com/kiegroup/kie-wb-distributions/commit/90eed433d3)
