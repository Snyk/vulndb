## Oerview
kompanee-recipes Gem for Ruby contains a flaw in
/lib/kompanee-recipes/heroku.rb that is triggered when handling shell
metacharacters passed via the 'password', 'user', 'deploy_name', and
'application' variables. This may allow a remote attacker to execute
arbitrary commands.


## References
- http://rubysec.com/advisories/OSVDB-108593
- http://osvdb.org/show/osvdb/108593
