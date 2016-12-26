## Overview
[`chargify2`](https://rubygems.org/gems/bundler) is am API V2 wrapper for chargify.
Affected versions of this gem do not sanitize user input, allowing the attacker to inject `javascript:` code snippets into the output. For example, the following input `javascript&#x58document;alert&#40;1&#41;`  will result in `alert(1)` being executed when the user clicks on the link.

## Remediation
There is no fixed version for this vulnerability, but a fix was merged to the [`api_v2`](https://github.com/chargify/chargify2/tree/api_v2) branch.

## References

- [Github PR](https://github.com/chargify/chargify2/pull/31)
- [Github Commit](https://github.com/chargify/chargify2/commit/9163a9f82fe4b8dea2378210ffc7f06bf9c697a2)
