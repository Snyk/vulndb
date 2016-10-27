## Overview

[gitlab-grit](https://rubygems.org/gems/gitlab-grit) is a Ruby library for extracting information from a git repository in an object oriented manner. It is a GitLab fork.

Affected versions of this gem contain a flaw in the `app/contexts/search_context.rb` script. The code search input box is not properly sanitized, which allows strings to be evaluated by the Bourne shell. This may allow a remote attacker to execute arbitrary commands.

## References

- http://rubysec.com/advisories/CVE-2013-4489
- https://about.gitlab.com/2013/11/04/gitlab-ce-6-2-and-5-4-security-release/
