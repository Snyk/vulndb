## Overview
[`sidekiq-pro`](http://sidekiq.org/products/pro) is the commercial version of [`sidekiq`](https://rubygems.org/gems/sidekiq), a background processing package for Ruby.

Affected versions contain a vulnerability that allows Cross-site Scripting (XSS) using the batch failure `error_class` and `error_message` in `Sidekiq::Web`.

## References
- http://rubysec.com/advisories/OSVDB-126329
- https://github.com/mperham/sidekiq/commit/a695ff347ae50f641dfc35189131b232ea0aa1db
