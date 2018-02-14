## Overview
[`sinatra`](https://rubygems.org/gems/sinatra) is a DSL for quickly creating web applications in Ruby with minimal effort.

Affected versions of the package are vulnerable to reflected Cross-site Scripting (XSS). This occurs on the development 404 page, which does not validate the request path. This may allow attackers to create a specially crafted request that would execute arbitrary script code.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/xss-attacks-the-next-wave/).

## Remediation
Upgrade `sinatra` to version 1.4.6 or higher.

## References
- [Github PR](https://github.com/sinatra/sinatra/pull/883)
- [Github Commit](https://github.com/sinatra/sinatra/commit/26cb21542b4986492467d324fbbb4de3a744e9e2)
