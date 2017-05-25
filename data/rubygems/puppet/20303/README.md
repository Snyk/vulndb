## Overview
[`puppet`](https://rubygems.org/gems/puppet) is an automated configuration management tool.
Affected versions of the package are vulnerable to Symlink Attack via a user's `.k5login` file. The k5login type is typically used to manage a file in the home directory of a user. The purpose of this file is to allow access to other users.

The `.k5login` file previously wrote to the target file directly, as root, without doing anything to secure the file. If the `.k5login `file was replaced with a symlink, this would allow the owner of the home directory to replace any file on the system, including the `.k5login` file of a more privileged user, with the “correct” content of their own file.

## Remediation
Upgrade `puppet` to version 2.6.11, 2.7.5 or higher.

## References
- [Puppet Google Group](https://groups.google.com/forum/#!topic/puppet-announce/keO0bSMoocs)
- [GitHub Commit 2.7.5](https://github.com/puppetlabs/puppet/commit/7d4c169df84fc7bbeb2941bf995a63470f71bdbd)
- [GitHub Commit 2.6.11](https://github.com/puppetlabs/puppet/commit/2775c21ae48e189950dbea5e7b4d1d9fa2aca41c)
