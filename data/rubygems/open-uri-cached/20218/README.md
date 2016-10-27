## Oerview
open-uri-cached Gem for Ruby contains a flaw that is due to the
program creating temporary files in a predictable, unsafe manner when using
YAML. This may allow a local attacker to gain elevated privileges.


## References
- http://rubysec.com/advisories/OSVDB-121701
- http://seclists.org/oss-sec/2015/q2/373
