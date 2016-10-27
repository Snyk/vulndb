## Overview

The [`json`](https://rubygems.org/gems/json) gem is a JSON implementation as a Ruby extension in C.

Affected versions of this gem contain a vulnerability in the `JSON::GenericObject` function which does not restrict users from creating additions, regardless of the state of `create_additions`. This may allow a remote attacker to create arbitrary additions.

## References

- http://spreecommerce.com/blog/multiple-security-vulnerabilities-fixed
- https://groups.google.com/forum/#!original/rubyonrails-security/4_YvCpLzL58/KBTICG7b4NgJ
