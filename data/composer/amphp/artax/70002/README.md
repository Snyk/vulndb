# Overview
Affected versions of [`amphp/artax`](https://packagist.org/packages/amphp/artax) are vulnerable to HTTP Request Redirection.

PHP through 7.0.8 does not attempt to address RFC 3875 section 4.1.18 namespace conflicts and therefore does not protect applications from the presence of untrusted client data in the HTTP_PROXY environment variable, which might allow remote attackers to redirect an application's outbound HTTP traffic to an arbitrary proxy server via a crafted Proxy header in an HTTP request, as demonstrated by (1) an application that makes a getenv('HTTP_PROXY') call or (2) a CGI configuration of PHP, aka an "httpoxy" issue.

## Remediation
Upgrade `amphp/artax` to version 2.0.4, 1.0.4 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2016-5385)
- [Httpoxy](https://httpoxy.org/)
- [Github Commit #1](https://github.com/amphp/artax/commit/81254742812a5a9adf4b085f543f3f21daedcd97)
- [Github Commit #2](https://github.com/amphp/artax/commit/b60cf493c9e577a3678865f620b1eb61ab3d7ca9)
