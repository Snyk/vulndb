# Overview
Affected versions of [`phpunit/phpunit`](https://packagist.org/packages/phpunit/phpunit) are vulnerable to Arbitrary Code Execution.

Usually, `phpunit` is deployed using composer, a very popular dependency manager for PHP. In most cases `phpunit` isn't required for the production environment, but nonetheless it is installed. Placing composer modules into web accessible directory is another common mistake that allows direct exploitation of this vulnerability.

Vulnerability is located in `/phpunit/src/Util/PHP/eval-stdin.php` file. Before patch this file contained:

```php
eval('?>'.file_get_contents('php://input'));
```

that could be used to run arbitrary PHP code.

## Remediation
Upgrade `phpunit/phpunit` to version 5.6.3, 4.8.28 or higher.

## References
- [phpunit Vulnerability Advisory](http://phpunit.vulnbusters.com/)
