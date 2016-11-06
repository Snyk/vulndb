## Overview
[`FlavourSaver`](https://rubygems.org/gems/flavour_saver) is a pure-ruby implementation of the Handlebars templating language.
Affected versions of this gem are vulnerable to arbitrary command execution via the helper method dispatch where it uses `Kernel::send` to call helpers without checking that they are defined within the template context first.  This allows expressions such as `{{system "ls"}}` or `{{eval "puts 1 + 1"}}` to be executed.

## Remediation
Upgrade to version `>= 0.3.3` or greater.

## References
- http://rubysec.com/advisories/OSVDB-110796
