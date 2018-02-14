# Overview
Affected versions of [`guzzlehttp/guzzle`](https://packagist.org/packages/guzzlehttp/guzzle) are vulnerable to HTTP Proxy header vulnerability.

PHP through 7.0.8 does not attempt to address RFC 3875 section 4.1.18 namespace conflicts and therefore does not protect applications from the presence of untrusted client data in the HTTP_PROXY environment variable, which might allow remote attackers to redirect an application's outbound HTTP traffic to an arbitrary proxy server via a crafted Proxy header in an HTTP request, as demonstrated by (1) an application that makes a getenv('HTTP_PROXY') call or (2) a CGI configuration of PHP, aka an "httpoxy" issue.

## Remediation
Upgrade `guzzlehttp/guzzle` to version 6.2.1, 5.3.1, 4.2.4 or higher.

## References
- [GitHub Release Notes](https://github.com/guzzle/guzzle/releases/tag/6.2.1)
