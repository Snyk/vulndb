# Overview
Affected versions of [`friendsofsymfony/user-bundle`](https://packagist.org/packages/friendsofsymfony/user-bundle) are vulnerable to DOS attack in FOSUserBundle login form.

The login form in the FriendsOfSymfony FOSUserBundle bundle before 1.3.3 for Symfony allows remote attackers to cause a denial of service (CPU consumption) via a long password that triggers an expensive hash computation, as demonstrated by a PBKDF2 computation.

## Remediation
Upgrade `friendsofsymfony/user-bundle` to version 1.3.3, 1.2.5 or higher.

## References
- [Symfony Release Notes](http://symfony.com/blog/cve-2013-5750-security-issue-in-fosuserbundle-login-form)
