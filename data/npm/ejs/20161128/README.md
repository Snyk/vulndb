## Overview
[`ejs`](https://www.npmjs.com/package/ejs) is a popular JavaScript templates engine.
Affected versions of the package are vulnerable to _Remote Code Execution_ by letting the attacker under certain conditions  control the source folder from which the engine renders include files.

## Details
`ejs.render()` function can be invoked in two ways. The first way is by calling `ejs.render(template, data, options)`, and the second is calling `ejs.render(template, data)` where `ejs` lets the `options` be passed as part of the `data`.
If used with a variable list supplied by the user (e.g. by reading it from the URI with `qs` or equivalent), an attacker can control ejs options, including the `root` option, which allows changing the project root for includes with an absolute path.  As a result, the attacker can take control of the root directory for included scripts and divert it to a library under his control, thus leading to remote code execution. 

The [fix](https://github.com/mde/ejs/commit/3d447c5a335844b25faec04b1132dbc721f9c8f6) introduced in version `2.5.3` blacklisted `root` options from options passed via the `data` object.

## Disclosure Timeline
- November 27th, 2016 - Reported the issue to package owner.
- November 27th, 2016 - Issue acknowledged by package owner.
- November 28th, 2016 - Issue fixed and version `2.5.3` released.

## Remediation
Upgrade `ejs` to version `2.5.3` or higher.

## References
- [Fix commit](https://github.com/mde/ejs/commit/3d447c5a335844b25faec04b1132dbc721f9c8f6)

