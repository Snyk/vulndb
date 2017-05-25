## Overview
[`chef-server-api`](https://rubygems.org/gems/chef-server-api) is a systems integration framework, built to bring the benefits of configuration management to your entire infrastructure.
Affected versions of the package do not require administrative privileges for the create, destroy, and update methods, which allows remote authenticated users to manage user accounts via requests to the /users URI.

## Remediation
Upgrade `chef-server-api` to version 0.9.0 or higher.

## References
- [Chef bug tracker](https://tickets.opscode.com/browse/CHEF-1289)
- [GitHub Commit](https://github.com/chef/chef/commit/c3bb41f727fbe00e5de719d687757b24c8dcdfc8)
