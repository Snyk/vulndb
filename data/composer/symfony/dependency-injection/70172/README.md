# Overview
Affected versions of [`symfony/dependency-injection`](https://packagist.org/packages/symfony/dependency-injection) are vulnerable to XML External Entity (XXE) Injection.

> Symfony 2.0.11 carried a [similar] XXE security fix, however, on review of ZF2 I also noted a vulnerability to XML Entity Expansion (XEE) attacks whereby all extensions making use of libxml2 have no defense against XEE Quadratic Blowup Attacks. The vulnerability is a function of there being no current method of disabling custom entities in PHP (i.e. defined internal to the XML document without using external entities). In a QBA, a long entity can be defined and then referred to multiple times in document elements, creating a memory sink with which Denial Of Service attacks against a host's RAM can be mounted. The use of the LIBXML_NOENT or equivalent option in a dependent extension amplified the impact (it doesn't actually mean "No Entities"). In addition, libxml2's innate defense against the related Exponential or Billion Laugh's XEE attacks is active only so long as the LIBXML_PARSEHUGE is NOT set (it disables libxml2's hardcoded entity recursion limit).

## Remediation
Upgrade `symfony/dependency-injection` to version 2.0.17 or higher.

## References
- [Symfony Release Notes](http://symfony.com/blog/security-release-symfony-2-0-17-released)
