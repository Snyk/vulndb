# Overview
Affected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to Path Disclosure.

On the Symfony 2.0.x version, there's a security issue that allows access to routes protected by a firewall even when the user is not logged in.

Both the Routing component and the Security component uses the path returned by getPathInfo() to match a Request. The getPathInfo() returns a decoded path, but the Routing component (Symfony\Component\Routing\Matcher\UrlMatcher) decodes the path a second time; whereas the Security component, Symfony\Component\HttpFoundation\RequestMatcher, does not.

## Remediation
Upgrade `symfony/symfony` to version 2.0.19 or higher.

## References
- [Symfony Release Notes](http://symfony.com/blog/security-release-symfony-2-0-20-and-2-1-5-released)
