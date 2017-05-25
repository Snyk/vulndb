## Overview
[`chef-server-api`](https://rubygems.org/gems/chef-server-api) is a systems integration framework, built to bring the benefits of configuration management to your entire infrastructure.
Affected versions of the package do not require administrative privileges for the create, destroy, and update methods with the `--admin` option. This allows remote authenticated users to manage user accounts via requests to the /users URI. 

## Remediation
Upgrade `chef-server-api` to version 0.10.6 or higher.

## References
- [Chef bug tracker](http://tickets.opscode.com/browse/CHEF-2649)
- [Github Commit](https://github.com/chef/chef/commit/33f0e9c58bbf047e1b401a834f3abfe72d9a8947)
