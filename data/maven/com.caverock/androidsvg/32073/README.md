## Overview
[com.caverock.androidsvg](https://github.com/BigBadaboom/androidsvg) is a SVG parser and renderer for Android.

Affected versions of this package are vulnerable to XML External Entity (XXE) Injection via the SVG parsing component.

## Remediation
Upgrade `com.caverock.androidsvg` to version 1.3.0 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-1000498)
- [GitHub Issue](https://github.com/BigBadaboom/androidsvg/issues/122)
