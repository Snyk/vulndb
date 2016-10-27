## Oerview

[`redis-namespace`](https://rubygems.org/gems/redis-namespace) adds a `Redis::Namespace` class which can be used to namespace calls to Redis.

Affected versions  contains a flaw in the method_missing implementation. The issue is triggered when handling `exec` commands called via `send()`. This may allow a remote attacker to execute arbitrary commands.

## References
- http://rubysec.com/advisories/OSVDB-96425
- http://blog.steveklabnik.com/posts/2013-08-03-redis-namespace-1-3-1--security-release
