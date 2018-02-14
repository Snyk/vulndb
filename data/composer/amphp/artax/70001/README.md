# Overview
Affected versions of [`amphp/artax`](https://packagist.org/packages/amphp/artax) are vulnerable to Information Exposure.

e.g Cookies of `foo.bar.example.com` were leaked to `foo.bar`. Additionally, any site could set cookies for any other site.

## Remediation
Upgrade `amphp/artax` to version 2.0.6 or higher.

## References
- [Github Release Note](https://github.com/amphp/artax/releases/tag/v2.0.6)
- [Github Commit](https://github.com/amphp/artax/commit/accdadaf78f7a43305c3a97d6a964bbc550a555d)
