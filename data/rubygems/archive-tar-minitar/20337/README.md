## Overview
[`archive-tar-minitar`](https://rubygems.org/gems/archive-tar-minitar) is a pure-Ruby library that provides the ability to deal with POSIX tar(1) archive files.
Affected versions of the package are vulnerable to Directory Traversal. It is possible to extract .zip files with a `../` in the extracted filename, allowing attackers to overwrite arbitrary files in the system.

Related to [`rubyzip`](https://snyk.io/vuln/SNYK-RUBY-RUBYZIP-20336) and [`minitar`](https://snyk.io/vuln/SNYK-RUBY-MINITAR-20335).

## Remediation
Upgrade `archive-tar-minitar` to version 0.5.2 or higher.

## References
- [Github Issue](https://github.com/halostatue/minitar/issues/16)
- [Github Commit](https://github.com/halostatue/minitar/commit/30e62689b614938dc96b4f2cb8e033e72f650670)
