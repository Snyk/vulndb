## Overview
[`sidekiq`](https://rubygems.org/gems/sidekiq) is a background processing package for Ruby.

Affected versions contain a vulnerability that allows Cross-site Scripting (XSS) using the queue name element in `Sidekiq::Web`.

## References
- http://rubysec.com/advisories/OSVDB-125676
- https://github.com/mperham/sidekiq/issues/2330
