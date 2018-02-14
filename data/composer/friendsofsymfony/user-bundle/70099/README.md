# Overview
Affected versions of [`friendsofsymfony/user-bundle`](https://packagist.org/packages/friendsofsymfony/user-bundle) are vulnerable to Access Restriction Bypass. It would check the identity by username, and not by primary key while refreshing the user.

## Remediation
Upgrade `friendsofsymfony/user-bundle` to version 1.2.1 or higher.

## References
- [GitHub Changelog](https://github.com/FriendsOfSymfony/FOSUserBundle/blob/master/Changelog.md#121-2012-07-10)
