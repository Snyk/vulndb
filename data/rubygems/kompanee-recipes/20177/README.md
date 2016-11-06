## Overview
[`kompanee-recipes`](https://rubygems.org/gems/kompanee-recipes) is a gem containing "recipies" for [`The Kompanee`](https://github.com/thekompanee).
Affected versions of this gem contain a flaw in `/lib/kompanee-recipes/heroku.rb` that is triggered when handling shell metacharacters passed via the `password`, `user`, `deploy_name`, and `application` variables. This may allow a remote attacker to execute arbitrary commands.

## References
- http://rubysec.com/advisories/OSVDB-108593
