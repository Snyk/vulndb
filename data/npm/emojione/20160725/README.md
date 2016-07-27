## Overview
Emojione is a module built to facilitate translating between emoji and shortcodes.

Version 1.3.0 and below have four primary functions:

* toShort()
* shortnameToImage()
* unicodeToImage()
* toImage()

All four do not properly sanitize input and are thus vulnerable to cross site scripting (XSS).  If you application passes user supplied input to these functions, it may be vulnerable to this attack.

Source: _Node Security Project_

## Remediation
Upgrade to version `1.3.1` or latest.

## References
* https://github.com/Ranks/emojione/issues/61

