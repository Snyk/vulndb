## Overview
[`sinatra`](https://rubygems.org/gems/sinatra) is a DSL for quickly creating web applications in Ruby with minimal effort.

Affected versions of the package are vulnerable to Session Fixation due to missing session secret signing by default.

## Remediation
Upgrade `sinatra` to version 1.2.1 or higher.

## References
- [Google Groups post](https://groups.google.com/forum/#!searchin/sinatrarb/security/sinatrarb/qWg8HKgJbYQ/glGgS72MpEgJ)
- [Github Commit](https://github.com/sinatra/sinatra/commit/93d6e1f35a9b96242224bd227f5728800934b2a1)
