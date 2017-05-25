## Overview
[`qs`](https://www.npmjs.com/package/qs) is a querystring parser that supports nesting and arrays, with a depth limit.

By default `qs` protects against attacks that attempt to overwrite an object's existing prototype properties, such as `toString()`, `hasOwnProperty()`,etc.

From [`qs` documentation](https://github.com/ljharb/qs):
> By default parameters that would overwrite properties on the object prototype are ignored, if you wish to keep the data from those fields either use plainObjects as mentioned above, or set allowPrototypes to true which will allow user input to overwrite those properties. WARNING It is generally a bad idea to enable this option as it can cause problems when attempting to use the properties that have been overwritten. Always be careful with this option.

Overwriting these properties can impact application logic, potentially allowing attackers to work around security controls, modify data, make the application unstable and more.

In versions of the package affected by this vulnerability, it is possible to circumvent this protection and overwrite prototype properties and functions by prefixing the name of the parameter with `[` or `]`. e.g. `qs.parse("]=toString")` will return `{toString = true}`, as a result, calling `toString()` on the object will throw an exception.

**Example:**
```js
qs.parse('toString=foo', { allowPrototypes: false })
// {}

qs.parse("]=toString", { allowPrototypes: false })
// {toString = true} <== prototype overwritten
```

For more information, you can check out our [blog](https://snyk.io/blog/high-severity-vulnerability-qs/).

## Disclosure Timeline
- February 13th, 2017 - Reported the issue to package owner.
- February 13th, 2017 - Issue acknowledged by package owner.
- February 16th, 2017 - Partial fix released in versions `6.0.3`, `6.1.1`, `6.2.2`, `6.3.1`.
- March 6th, 2017     - Final fix released in versions `6.4.0`,`6.3.2`, `6.2.3`, `6.1.2` and `6.0.4`

## Remediation
Upgrade `qs` to version `6.4.0` or higher.
**Note:** The fix was backported to the following versions `6.3.2`, `6.2.3`, `6.1.2`, `6.0.4`.

## References
- [Github Commit](https://github.com/ljharb/qs/commit/beade029171b8cef9cee0d03ebe577e2dd84976d)
- [Report of an insufficient fix](https://github.com/ljharb/qs/issues/200)
