## Overview
[`org.grails:grails-resources`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22grails-resources%22)
The default configuration of the Resources plugin 1.0.0 before 1.2.6 for Pivotal Grails 2.0.0 before 2.3.6 does not properly restrict access to files in the WEB-INF directory, which allows remote attackers to obtain sensitive information via a direct request.  NOTE: this identifier has been SPLIT due to different researchers and different vulnerability types. See CVE-2014-2857 for the META-INF variant and CVE-2014-2858 for the directory traversal.

## References

- [Pivotal Security](http://www.pivotal.io/security/cve-2014-0053)
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0053)
- [Grails Release Notes](https://grails.org/version/2.3.7%20Release%20Notes/9)
