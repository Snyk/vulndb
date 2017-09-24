## Overview
[`jekyll`](https://rubygems.org/gems/jekyll) is a simple, blog aware, static site generator.

Affected versions of the package are vulnerable to Arbitrary File Read by placing a symlink to a directory in `_includes`.

## Remediation
Upgrade `jekyll` to version 1.4.3 or higher.

## References
- [Github PR](https://github.com/jekyll/jekyll/pull/1944)
- [Github Commit](https://github.com/jekyll/jekyll/commit/98b366e5d55c9634c41cb2ea06bff5e54fbc672f)
