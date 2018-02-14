# Overview
Affected versions of [`symfony/http-kernel`](https://packagist.org/packages/symfony/http-kernel) are vulnerable to Information Exposure.

When you enable the ESI feature and when you are using a proxy like Varnish that you configured as a trusted proxy, the FragmentHandler considered requests to render fragments as coming from a trusted source, even if the client was requesting them directly. Symfony can not distinguish between ESI requests done on behalf of the client by Varnish and faked fragment requests coming directly from the client.

## Remediation
Upgrade `symfony/http-kernel` to version 2.3.19, 2.2.0, 2.4.9, 2.5.4, 2.3.0, 2.1.0 or higher.

## References
- [Symfony Release Notes](http://symfony.com/blog/cve-2014-5245-direct-access-of-esi-urls-behind-a-trusted-proxy)
- [GitHub PR](https://github.com/symfony/symfony/pull/11831)
