## Overview
[`sidekiq`](https://rubygems.org/gems/sidekiq) is a background processing package for Ruby.

Affected versions contain a vulnerability that allows Cross-site Scripting (XSS) using the job arguments display class in `Sidekiq::Web`.

## References
- http://rubysec.com/advisories/OSVDB-125678
- https://github.com/mperham/sidekiq/pull/2309
