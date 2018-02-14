# Overview
Affected versions of [`typo3/flow`](https://packagist.org/packages/typo3/flow) are vulnerable to Cross-site Scripting (XSS).

Cross-site Scripting (XSS) vulnerability in the errorAction method in the ActionController base class in TYPO3 Flow (formerly FLOW3) 1.1.x before 1.1.1 and 2.0.x before 2.0.1 allows remote attackers to inject arbitrary web script or HTML via unspecified input, which is returned in an error message.

## Remediation
Upgrade `typo3/flow` to version 1.1.1, 2.0.1 or higher.

## References
- [Ref](https://www.neos.io/news/flow-sa-2013-001.html)
