## Overview
[`sidekiq-pro`](http://sidekiq.org/products/pro) is the commercial version of [`sidekiq`](https://rubygems.org/gems/sidekiq), a background processing package for Ruby.

Affected versions contain a vulnerability that allows Cross-site Scripting (XSS) using the batch description in `Sidekiq::Web`.

## References
- http://rubysec.com/advisories/OSVDB-126330
- https://github.com/mperham/sidekiq/commit/99b12fb50fe244c5a317f03f1bed9b333ec56ebe
