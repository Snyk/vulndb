## Overview
[`minitar`](https://rubygems.org/gems/minitar) is a pure-Ruby library that provides the ability to deal with POSIX tar(1) archive files.
Affected versions of the package are vulnerable to Directory Traversal. It is possible to extract .zip files with a `../` in the extracted filename, allowing attackers to overwrite arbitrary files in the system.

Related to [`rubyzip`](https://snyk.io/vuln/SNYK-RUBY-RUBYZIP-20336) and [`archive-tar-minitar`](https://snyk.io/vuln/SNYK-RUBY-ARCHIVETARMINITAR-20337).


## Remediation
Upgrade `minitar` to version 0.6 or higher.

## References
- [Github Issue](https://github.com/halostatue/minitar/issues/16)
- [Github Commit](https://github.com/halostatue/minitar/commit/c31ad52ab502859392cf218eb1f947ac78d2a3fd)
