## Overview
[`org.fusesource.jansi:jansi`](http://fusesource.github.io/jansi/) is a small java library that allows you to use ANSI escape codes to format your console output which works even on windows.

Affected versions of this package are vulnerable to Arbitrary Code Execution.
Race condition in hawtjni-runtime/src/main/java/org/fusesource/hawtjni/runtime/Library.java in HawtJNI before 1.8, when a custom library path is not specified, allows local users to execute arbitrary Java code by overwriting a temporary JAR file with a predictable name in /tmp

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2013-2035)
- [Github ChangeLog](https://github.com/fusesource/jansi/blob/master/changelog.md#jansi-111-released-2013-05-13)
- [Github Commit](https://github.com/fusesource/hawtjni/commit/92c266170ce98edc200c656bd034a237098b8aa5)
