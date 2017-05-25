## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to File injection. The `indirector/file.rb` file base class in the indirector trusted the request key directly and used it as part of the pathname. This made it vulnerable to the same potential for injection attacks as other terminus base classes.

**Note:** The only consumer of the code was in the tests

## Remediation
Upgrade `puppet` to version 2.6.11, 2.7.5 or higher.

## References
- [Puppet Google Group](https://groups.google.com/forum/#!topic/puppet-announce/keO0bSMoocs)
- [GitHub Commit 2.7.5](https://github.com/puppetlabs/puppet/commit/d76c30935460ded953792dfe49f72b8c5158e899)
- [GitHub Commit 2.6.11](https://github.com/puppetlabs/puppet/commit/343c7bd381b63e042d437111718918f951d9b30d)
