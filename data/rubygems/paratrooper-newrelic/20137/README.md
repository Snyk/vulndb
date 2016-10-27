## Oerview
Paratrooper-newrelic Gem for Ruby contains a flaw in
/lib/paratrooper-newrelic.rb. The issue is triggered when the script exposes
the API key, allowing a local attacker to gain access to it by monitoring the
process tree.


## References
- http://rubysec.com/advisories/OSVDB-101839
- http://www.osvdb.org/show/osvdb/101839
