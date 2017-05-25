## Overview
[`espeak-ruby`](https://rubygems.org/gems/espeak-ruby) is a small Ruby API for utilizing ‘espeak’ and ‘lame’ to create Text-To-Speech mp3 files.
Affected versions of the package are vulnerable to Arbitrary Command Injection and Environment variable disclosure. User input is passed as an argument in the `speak`, `save`, `bytes` or `bytes_wav` methods in `lib/espeak/speech.rb`, allowing a malicious user to run arbitrary code or see environment variables.

## Remediation
Upgrade `espeak-ruby` to version 1.0.3 or higher.

## References
- [GitHub Issue](https://github.com/dejan/espeak-ruby/issues/7)
- [GitHub Commit](https://github.com/dejan/espeak-ruby/commit/5251744b13bdd9fb0c72c612226e72d330bac143)
- [OSS Security #1](http://www.openwall.com/lists/oss-security/2017/01/31/14)
- [OSS Security #2](http://www.openwall.com/lists/oss-security/2017/02/02/5)
