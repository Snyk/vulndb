## Overview
[`zeroclipboard`](https://www.npmjs.com/package/zeroclipboard) Affected versions of the package are vulnerable to Cross-site Scripting (XSS) due to not escaping the clipText returned from the flash object. This allows remote attackers to inject arbitrary web script or HTML into the browser.

## Remediation
Upgrade `zeroclipboard` to version 1.1.4 or higher.

## References
- [GitHub PR](https://github.com/zeroclipboard/zeroclipboard/pull/2)
- [GitHub Issue](https://github.com/zeroclipboard/zeroclipboard/issues/14)
- [GitHub Commit](https://github.com/zeroclipboard/zeroclipboard/commit/51b67b6d696f62aaf003210c08542588222c4913)
- [GitHub Changelog](https://github.com/zeroclipboard/zeroclipboard/releases/tag/v1.1.4)
- [OSS Security](http://seclists.org/fulldisclosure/2013/Feb/103)
