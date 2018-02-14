# Overview
Affected versions of [`symfony/form`](https://packagist.org/packages/symfony/form) are vulnerable to Information Exposure.

When a form is submitted by the user, the request handler classes of the Form component merge POST data (known as the `$_POST` array in plain PHP) and uploaded files data (known as the `$_FILES` array in plain PHP) into one array. This big array forms the data that are then bound to the form. At this stage there is no difference anymore between submitted POST data and uploaded files.

A user can send a crafted HTTP request where the value of a FileType is sent as normal POST data that could be interpreted as a locale file path on the server-side (for example, file:///etc/passwd). If the application did not perform any additional checks about the value submitted to the FileType, the contents of the given file on the server could have been exposed to the attacker.

## Remediation
Upgrade `symfony/form` to versions 2.7.38, 2.8.31, 3.1.0, 3.2.0, 3.2.14, <3.3.13 higher.

## References
- [Symfony Release Notes](http://symfony.com/blog/cve-2017-16790-ensure-that-submitted-data-are-uploaded-files)
- [GitHub PR](https://github.com/symfony/symfony/pull/24993)
