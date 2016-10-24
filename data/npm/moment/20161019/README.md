## Overview
[`moment`](https://www.npmjs.com/package/moment) is a lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.

Affected versions of the package are vulnerable to Regular Expression Denial of Service (ReDoS) attacks for any locale that has separate format and standalone options and `format` input can be controlled by the user.

An attacker can provide a specially crafted input to the `format` function, which nearly matches the pattern being matched. This will cause the regular expression matching to take a long time, all the while occupying the event loop and preventing it from processing other requests and making the server unavailable (a Denial of Service attack).

## Disclosure Timeline
- October 19th, 2016 - Reported the issue to package owner.
- October 19th, 2016 - Issue acknowledged by package owner.
- October 24th, 2016 - Issue fixed and version `2.15.2` released.

## References
- [Proof of concept](https://gist.github.com/grnd/50192ce22681848a7de812d95241b7fc)
- [Fix commit](https://github.com/moment/moment/commit/663f33e333212b3800b63592cd8e237ac8fabdb9)
