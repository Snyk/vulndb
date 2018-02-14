## Overview
[`rubocop`](https://rubygems.org/gems/rubocop) is an automatic Ruby code style checking tool.

Affected versions of the package are vulnerable to Arbitrary Code Execution due to using the unsafe `YAML.load` function.

## Remediation
Upgrade `rubocop` to version 0.30.0 or higher.

## References
- [Codeclimate blog](http://blog.codeclimate.com/blog/2013/01/10/rails-remote-code-execution-vulnerability-explained/)
- [Ruby Docs](https://docs.ruby-lang.org/en/2.1.0/Psych.html#method-c-safe_load)
- [Github PR](https://github.com/bbatsov/rubocop/pull/1680)
- [Github Commit](https://github.com/bbatsov/rubocop/commit/36b857f465906e76f9a8f76e98820ee3c6be2600)
