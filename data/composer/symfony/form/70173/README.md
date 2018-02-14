# Overview
Affected versions of [`symfony/form`](https://packagist.org/packages/symfony/form) are vulnerable to Timing Attack.

Symfony 2.3.x before 2.3.35, 2.6.x before 2.6.12, and 2.7.x before 2.7.7 might allow remote attackers to have unspecified impact via a timing attack involving:
* Symfony/Component/Security/Http/RememberMe/PersistentTokenBasedRememberMeServices or
* Symfony/Component/Security/Http/Firewall/DigestAuthenticationListener class in the Symfony Security Component, or
* legacy CSRF implementation from the Symfony/Component/Form/Extension/Csrf/CsrfProvider/DefaultCsrfProvider class in the Symfony Form component.

## Remediation
Upgrade `symfony/form` to version 2.3.35, 2.6.12, 2.5.0, 2.7.7, 2.6.0 or higher.

## References
- [Symfony Release Notes](http://symfony.com/blog/cve-2015-8125-potential-remote-timing-attack-vulnerability-in-security-remember-me-service)
