## Overview
[`ejs`](https://www.npmjs.com/package/ejs) is a popular JavaScript templates engine.
Affected versions of the package are vulnerable to _Remote Code Execution_ by letting the attacker under certain conditions control the source folder from which the engine renders include files.
You can read more about this vulnerability on the [Snyk blog](https://snyk.io/blog/fixing-ejs-rce-vuln).

## Details
`ejs` provides a few different options for you to render a template, two being very similar: `ejs.render()` and `ejs.renderFile()`. The only difference being that `render` expects a string to be used for the template and `renderFile` expects a path to a template file.

Both functions can be invoked in two ways. The first is calling them with `template`, `data`, and `options`:
```js
ejs.render(str, data, options);

ejs.renderFile(filename, data, options, callback)
```
The second way would be by calling only the `template` and `data`, while `ejs` lets the `options` be passed as part of the `data`:
```js
ejs.render(str, dataAndOptions);

ejs.renderFile(filename, dataAndOptions, callback)
```

If used with a variable list supplied by the user (e.g. by reading it from the URI with `qs` or equivalent), an attacker can control `ejs` options. This includes the `root` option, which allows changing the project root for includes with an absolute path.  

```js
ejs.renderFile('my-template', {root:'/bad/root/'}, callback);
```

By passing along the root directive in the line above, any includes would now be pulled from `/bad/root` instead of the path intended. This allows the attacker to take control of the root directory for included scripts and divert it to a library under his control, thus leading to remote code execution.

The [fix](https://github.com/mde/ejs/commit/3d447c5a335844b25faec04b1132dbc721f9c8f6) introduced in version `2.5.3` blacklisted `root` options from options passed via the `data` object.

## Disclosure Timeline
- November 27th, 2016 - Reported the issue to package owner.
- November 27th, 2016 - Issue acknowledged by package owner.
- November 28th, 2016 - Issue fixed and version `2.5.3` released.

## Remediation
The vulnerability can be resolved by either using the GitHub integration to [generate a pull-request](https://snyk.io/org/projects) from your dashboard or by running `snyk wizard` from the command-line interface.
Otherwise, Upgrade `ejs` to version `2.5.3` or higher.

## References
- [Snyk Blog](https://snyk.io/blog/fixing-ejs-rce-vuln)
- [Fix commit](https://github.com/mde/ejs/commit/3d447c5a335844b25faec04b1132dbc721f9c8f6)
