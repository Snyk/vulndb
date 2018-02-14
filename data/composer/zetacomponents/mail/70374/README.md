## Overview
Affected versions of [`zetacomponents/mail`](https://packagist.org/packages/zetacomponents/mail) are vulnerable to Arbitrary Code Execution.

A malicious user may pass arbitrary parameters to the `sendmail` binary when setting the returnPath property of `ezcMail` when using the `ezcMailMtaTransport`. In some situations, it is possible to use an e-mail address that contains `-X/path/to/wwwroot/file.php"` to write a file to the file system, that can then be accessed and run through `domainname/file.php`.

This is only possible if all of these conditions are true:

* you use the ezcMailMtaTransport
* your "sendmail" binary allows the -X flag to be set, which is not the case for exim4 and postfix, as they don't support that argument
* your wwwroot is writable by the user your webserver is running at
* the input to use for the ezcMailAddress that is assigned to the returnPath property is not properly escaped

## Remediation
Upgrade `zetacomponents/mail` to version 1.8.2 or higher.

## References
- [GitHub Issue](https://github.com/zetacomponents/Mail/issues/58)
