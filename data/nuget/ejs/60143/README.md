## Overview
[`ejs`](https://www.npmjs.com/package/ejs) is a popular JavaScript templating engine.
Affected versions of the package are vulnerable to _Cross-site Scripting_ by letting the attacker under certain conditions control and override the `filename` option causing it to render the value as is, without escaping it.
You can read more about this vulnerability on the [Snyk blog](https://snyk.io/blog/fixing-ejs-rce-vuln).

There's also a [Remote Code Execution](https://snyk.io/vuln/npm:ejs:20161128) & [Denial of Service](https://snyk.io/vuln/npm:ejs:20161130-1) vulnerabilities caused by the same behaviour.

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

If used with a variable list supplied by the user (e.g. by reading it from the URI with `qs` or equivalent), an attacker can control `ejs` options. This includes the `filename` option, which will be rendered as is when an error occurs during rendering. 

```js
ejs.renderFile('my-template', {filename:'<script>alert(1)</script>'}, callback);
```

The [fix](https://github.com/mde/ejs/commit/49264e0037e313a0a3e033450b5c184112516d8f) introduced in version `2.5.3` blacklisted `root` options from options passed via the `data` object.

## Disclosure Timeline
- November 28th, 2016 - Reported the issue to package owner.
- November 28th, 2016 - Issue acknowledged by package owner.
- December 06th, 2016 - Issue fixed and version `2.5.5` released.

## Remediation
The vulnerability can be resolved by either using the GitHub integration to [generate a pull-request](https://snyk.io/org/projects) from your dashboard or by running `snyk wizard` from the command-line interface.
Otherwise, Upgrade `ejs` to version `2.5.5` or higher.

## References
- [Snyk Blog](https://snyk.io/blog/fixing-ejs-rce-vuln)
- [Fix commit](https://github.com/mde/ejs/commit/49264e0037e313a0a3e033450b5c184112516d8f)
