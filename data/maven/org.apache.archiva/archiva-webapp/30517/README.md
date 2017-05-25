## Overview
[`org.apache.archiva:archiva-webapp`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22archiva-webapp%22)
Multiple cross-site request forgery (CSRF) vulnerabilities in Apache Archiva 1.3.9 and earlier allow remote attackers to hijack the authentication of administrators for requests that (1) add new repository proxy connectors via the token parameter to admin/addProxyConnector_commit.action, (2) new repositories via the token parameter to admin/addRepository_commit.action, (3) edit existing repositories via the token parameter to admin/editRepository_commit.action, (4) add legacy artifact paths via the token parameter to admin/addLegacyArtifactPath_commit.action, (5) change the organizational appearance via the token parameter to admin/saveAppearance.action, or (6) upload new artifacts via the token parameter to upload_submit.action.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-4469)