## Overview
[`gollum-grit_adapter`](https://rubygems.org/gems/gollum-grit_adapter) is an adapter for Gollum to use Grit at the backend.
Affected versions of this gem are vulnerable to arbitrary command execution.

Grit implements its search functionality by shelling out to `git grep`. In
turn, `git grep` takes a `-O` or `--open-files-in-pages` option that will
pipe the results of `grep` to an arbitrary process. By failing to properly
sanitize user input search parameters, an attacker can thus perform command
execution.

Note that the grep result must find the string `master` (or
whatever is the default branch that gollum uses) in any of the wiki's
documents for this to succeed.

## References
- http://rubysec.com/advisories/CVE-2014-9489
- https://github.com/gollum/gollum/issues/913
