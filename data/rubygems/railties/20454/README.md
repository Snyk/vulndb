## Overview
[`railties`](https://rubygems.org/gems/railties) is Rails internals: application bootup, plugins, generators, and rake tasks.

Affected versions of the package are vulnerable to Timing Attack via the runtime header, which returns the amount of time spent on the server. 

## Remediation
Upgrade `railties` to version 5.0.0.beta1 or higher.

## References
- [Github Commit](https://github.com/rails/rails/commit/37423e4ff883ad5584bab983aceb4b2b759a1fd8)
