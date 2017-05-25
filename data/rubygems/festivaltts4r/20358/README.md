## Overview
[`festivaltts4r`](https://rubygems.org/gems/festivaltts4r) is a Text-to-speech for Ruby using festivaltts.

Affected versions of the package are vulnerable to Arbitrary Command Injection. User input is passed as an argument in the `to_speech` and `to_mp3` methods, allowing a malicious user to run arbitrary code or see environment variables.

## Remediation
There is no fix version for `festivaltts4r`.

## References
- [GitHub Issue](https://github.com/spejman/festivaltts4r/issues/1)
- [OSS Security #1](http://www.openwall.com/lists/oss-security/2017/01/31/14)
- [OSS Security #2](http://www.openwall.com/lists/oss-security/2017/02/02/5)
