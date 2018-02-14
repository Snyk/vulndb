## Overview
Affected version of [`github.com/golang/go`](https://github.com/golang/go) are vulnerable to HTTP Request Redirection.
The net/http package in Go through 1.6 does not attempt to address RFC 3875 section 4.1.18 namespace conflicts and therefore does not protect CGI applications from the presence of untrusted client data in the HTTP_PROXY environment variable, which might allow remote attackers to redirect a CGI application's outbound HTTP traffic to an arbitrary proxy server via a crafted Proxy header in an HTTP request, aka an "httpoxy" issue.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-5386)
- [GitHub Commit](https://github.com/golang/go/commit/b97df54c31d6c4cc2a28a3c83725366d52329223)
- [Redhat Security Advisory](http://rhn.redhat.com/errata/RHSA-2016-1538.html)
- [HTTPoxy Documentation](https://httpoxy.org/)
