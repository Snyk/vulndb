## Overview
[`hiera`](https://rubygems.org/gems/hiera) is a pluggable data store for hierarcical data.

Affected versions of the package are vulnerable to Arbitrary Code Execution. The current directory ('.') is on the load path for Ruby 1.8.7. If users create ruby source files with names that correspond to those that hiera trys to load, it may result in loading and the execution of these files.

## Remediation
Upgrade `hiera` to version 1.3.4 or higher.

## References
- [Github Commit](https://github.com/puppetlabs/hiera/commit/5b71548ca9ea9ced460b2970c3e8fb483b495806)
