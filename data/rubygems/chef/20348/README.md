## Overview
[`chef`](https://rubygems.org/gems/chef) is a systems integration framework, built to bring the benefits of configuration management to your entire infrastructure.
Affected versions of the package do not require administrative privileges for the create, destroy, and update methods, which allows remote authenticated users to manage user accounts via requests to the /users URI.

## Remediation
Upgrade `chef` to version 0.9.18, 0.10.2 or higher.

## References
- [Chef bug tracker](http://tickets.opscode.com/browse/CHEF-2436)
- [GitHub Commit](https://github.com/chef/chef/commit/a4ea6edab2fecb922f999cffb0daa04eeeec7a26)
