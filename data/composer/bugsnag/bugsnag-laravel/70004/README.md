# Overview
Affected versions of [`bugsnag/bugsnag-laravel`](https://packagist.org/packages/bugsnag/bugsnag-laravel) are vulnerable to HTTP Request Redirection.

PHP through 7.0.8 does not attempt to address RFC 3875 section 4.1.18 namespace conflicts and therefore does not protect applications from the presence of untrusted client data in the HTTP_PROXY environment variable, which might allow remote attackers to redirect an application's outbound HTTP traffic to an arbitrary proxy server via a crafted Proxy header in an HTTP request, as demonstrated by (1) an application that makes a getenv('HTTP_PROXY') call or (2) a CGI configuration of PHP, aka an "httpoxy" issue.

## Remediation
Upgrade `bugsnag/bugsnag-laravel` to version 2.0.2 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2016-5385)
- [Httpoxy](https://httpoxy.org/)
- [Github PR](https://github.com/bugsnag/bugsnag-laravel/pull/143)
- [Github Commit](https://github.com/bugsnag/bugsnag-laravel/commit/59cf2da2a7dab679a63e5897c2bdc4e01a2c2545)
