## Overview
[`react`](https://www.npmjs.com/package/react) is React is a JavaScript library for building user interfaces..
Affected versions of the package contain Cross-site Scripting (XSS) vulnerability due to unescaped text before inserted into the DOM.

## Details
A Cross-site Scripting (XSS) vulnerability can arise when using user data as a `key`. Typically "safe" data is used for a `key`, for example, an id from your database, or a unique hash. However there are cases where it may be reasonable to use user generated content. A carefully crafted piece of content could result in arbitrary code execution.

## Remediation
This vulnerability only affects v0.5.x and v0.4.x. Versions in the 0.3.x family are unaffected.
Upgrade `react` to version 0.5.2\0.4.2 or higher.

## References
- [React Blog](https://facebook.github.io/react/blog/2013/12/18/react-v0.5.2-v0.4.2.html)
- [React Forum](https://groups.google.com/forum/#!topic/reactjs/OIqxlB2aGfU)
- [Fix Commit #1](https://github.com/facebook/react/commit/94a9a3e752fe089ab23f3a90c26d20d46d62ab10)
- [Fix Commit #2](https://github.com/facebook/react/commit/393a889aaceb761f058b09a701f889fa8f8b4e64)
