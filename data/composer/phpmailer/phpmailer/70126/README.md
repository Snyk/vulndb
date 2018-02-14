# Overview
Affected versions of [`phpmailer/phpmailer`](https://packagist.org/packages/phpmailer/phpmailer) are vulnerable to Local File Disclosure.

An issue was discovered in PHPMailer before 5.2.22. PHPMailer's msgHTML method applies transformations to an HTML document to make it usable as an email message body. One of the transformations is to convert relative image URLs into attachments using a script-provided base directory. If no base directory is provided, it resolves to /, meaning that relative image URLs get treated as absolute local file paths and added as attachments. To form a remote vulnerability, the msgHTML method must be called, passed an unfiltered, user-supplied HTML document, and must not set a base directory.

## Remediation
Upgrade `phpmailer/phpmailer` to version 5.2.22 or higher.

## References
- [GitHub Release Notes](https://github.com/PHPMailer/PHPMailer/releases/tag/v5.2.22)
