## Overview
[`jekyll`](https://rubygems.org/gems/jekyll) is a simple, blog aware, static site generator.

Affected versions of the package are vulnerable to Arbitrary Code Injection. An attacker may be able to craft a malicious `yaml` file that would cause the parsing server to run arbitrary ruby code.

## Remediation
Upgrade `jekyll` to version 1.0.0 or higher.

## References
- [Github PR](https://github.com/jekyll/jekyll/pull/777)
- [Github Commit](https://github.com/jekyll/jekyll/commit/4041579b7023e369df63d6c8cedfe8e7ffee9eb4)
