## Overview
[`sidekiq-pro`](http://sidekiq.org/products/pro) is the commercial version of [`sidekiq`](https://rubygems.org/gems/sidekiq), a background processing package for Ruby.

Affected versions contain a vulnerability that allows forgery of POST requests on job filtering in `Sidekiq::Web`.

## References
- http://rubysec.com/advisories/OSVDB-126331
- https://github.com/mperham/sidekiq/commit/651400ed8f237118346895c99dc28ca94f3169d3
