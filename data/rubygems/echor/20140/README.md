## Oerview
Echor Gem for Ruby contains a flaw in backplane.rb in the perform_request
function that is triggered when a semi-colon (;) is injected into a username
or password. This may allow a context-dependent attacker to inject arbitrary
commands if the gem is used in a rails application.


## References
- http://rubysec.com/advisories/OSVDB-102129
- http://osvdb.org/show/osvdb/102129
