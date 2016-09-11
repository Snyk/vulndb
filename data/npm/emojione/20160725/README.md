## Overview
`emojione` is a module supporting an open list of emojis, replacing shortcodes with the corresponding image.

While this package doesn't control this decision, emoji shortcodes are typically provided by users as part of some interaction or comment, and often persist on the page. Therefore, sanitizing them to prevent scripts is critical.

While `emojione` does sanitize passed in shortcodes before echoing back the resulting values, a clever sequence of encoded values will still allow attackers to inject scripts into the result. As a result, attacker can perform a Cross-Site Scripting (XSS) attack whenever the output of `emojione` is passed into the page output.

## Remediation
Upgrade `emojione` to at least version `1.3.1`.

## References
- https://github.com/Ranks/emojione/issues/61
- https://github.com/Ranks/emojione/commit/613079b16c00e47fb3c44744a67ed88a9295afb1
- https://gist.github.com/WebReflection/df05641bd04954f6d366
