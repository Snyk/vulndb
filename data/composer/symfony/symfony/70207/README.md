# Overview
Affected versions of [`symfony/symfony`](https://packagist.org/packages/symfony/symfony) are vulnerable to Loss of Information.

When using the Validator component, if Symfony\\Component\\Validator\\Mapping\\Cache\\ApcCache is enabled (or any other cache implementing Symfony\\Component\\Validator\\Mapping\\Cache\\CacheInterface), some information is lost during serialization (the collectionCascaded and the collectionCascadedDeeply fields).

## Remediation
Upgrade `symfony/symfony` to version 2.3.3, 2.1.12, 2.2.5, 2.0.24 or higher.

## References
- [Symfony Release Notes](http://symfony.com/blog/security-releases-symfony-2-0-24-2-1-12-2-2-5-and-2-3-3-released)
