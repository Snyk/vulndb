## Overview
[VladTheEnterprising](https://rubygems.org/gems/VladTheEnterprising) is a series of packages to help using the `Vlad` gem to manage "enterprise" environments.
Affected versions of this Gem contain a flaw causing the program to create temporary files insecurely. It is possible for a local attacker to use a symlink attack against the `/tmp/my.cnf.#{target_host}` file they can overwrite arbitrary files, gain access to the MySQL root password, or inject arbitrary commands.

## References
- http://rubysec.com/advisories/CVE-2014-4995
