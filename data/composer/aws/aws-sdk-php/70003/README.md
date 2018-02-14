# Overview
  Affected versions of [`aws/aws-sdk-php`](https://packagist.org/packages/aws/aws-sdk-php) are vulnerable to Arbitrary Code Execution.

Doctrine Annotations before 1.2.7, Cache before 1.3.2 and 1.4.x before 1.4.2, Common before 2.4.3 and 2.5.x before 2.5.1, ORM before 2.4.8 or 2.5.x before 2.5.1, MongoDB ODM before 1.0.2, and MongoDB ODM Bundle before 3.0.1 use world-writable permissions for cache directories, which allows local users to execute arbitrary PHP code with additional privileges by leveraging an application with the umask set to 0 and that executes cache entries as code.

## Remediation
Upgrade `aws/aws-sdk-php` to version 3.2.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2015-5723)
- [Github ChangeLog](https://github.com/aws/aws-sdk-php/blob/master/CHANGELOG.md#321---2015-07-23)
