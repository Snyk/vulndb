## Overview
[`twilio`](https://pypi.python.org/pypi/twilio) is a Twilio API client and TwiML generator.

Affected versions of this package are vulnerable to Timing Attacks. `twilio.util.RequestValidator` uses `==` to compare signatures, and this operation is designed to return a value as quickly as possible, meaning the signature check will take a variable amount of time based on how "correct" the submitted signature is. An attacker can use this timing information to determine the correct signature, one character at a time.

## References
- [GitHub PR](https://github.com/twilio/twilio-python/pull/118)
- [GitHub Commit](https://github.com/twilio/twilio-python/commit/022ea4cb852da3ec7cbd6da9cf09b46fc4742f99)
