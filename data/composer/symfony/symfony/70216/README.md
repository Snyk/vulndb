# Overview
Affected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to Man-in-the-Middle (MitM).

The `Symfony\Component\HttpFoundation\Request` class provides a mechanism that ensures it does not trust HTTP header values coming from a "non-trusted" client. Unfortunately, it assumes that the remote address is always a trusted client if at least one trusted proxy is involved in the request; this allows a man-in-the-middle attack between the latest trusted proxy and the web server.

## Remediation
Upgrade `symfony/symfony` to version 2.3.27, 2.5.11, 2.6.6 or higher.

## References
- [Symfony Release Notes](http://symfony.com/blog/cve-2015-2309-unsafe-methods-in-the-request-class)
