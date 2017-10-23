## Overview
[`static-eval`](https://www.npmjs.com/package/static-eval) is a module to evaluate statically-analyzable expressions.

Affected versions of the package are vulnerable to Arbitrary Code Execution. If un-sanitized user input is passed to `static-eval`, it is possible to break out of the sandboxed instance, and execute arbitrary code from the standard library.

## Remediation
Upgrade `static-eval` to version 2.0.0 or higher.

## References
- [Matt Austin's Blog](https://maustin.net/articles/2017-10/static_eval)
- [GitHub PR](https://github.com/substack/static-eval/pull/18)
- [GitHub Commit](https://github.com/substack/static-eval/pull/18/commits/c06f1b8c0a0cd1cc989c025fbb4c5776fc661c2c)
