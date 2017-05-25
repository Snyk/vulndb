## Overview

[`bundler`](https://rubygems.org/gems/bundler) is a dependencies manager.
Affected versions of this Gem contain a flaw that is triggered when handling a Gemfile that contains multiple top-level source lines. This may allow a gem to be installed from an unintended source server, allowing an attacker to install specially crafted gems, leading to arbitrary code execution.

This bug was thought to be fixed in Bundler 1.7 [here](https://snyk.io/vuln/SNYK-RUBY-BUNDLER-20189),


## Details
Bundler allows the user to specify sources from which Ruby gems are installed. If a secondary source is specified, even if scoped to a specific gem, that source is silently applied to all declared gems. This allows an attacker to introduce arbitrary code into an application via gem name collision on the secondary source, which will unexpectedly (and without warning) take priority over the primary source.


## References
- [Steve Richert's Blog](http://collectiveidea.com/blog/archives/2016/10/06/bundlers-multiple-source-security-vulnerability/)
- [OSS Sec CVE Request](http://seclists.org/oss-sec/2016/q4/18)
- [GitHub Issue](https://github.com/bundler/bundler/issues/3671)
- [GitHub PR for Bundler 2.x](https://github.com/bundler/bundler/pull/3696)
- [GitHub PR for Bundler 2.x](https://github.com/bundler/bundler/pull/4714)
- [Chain of events](https://github.com/bundler/bundler/issues/5051#issuecomment-252011863)
