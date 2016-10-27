## Oerview
The multi_xml Gem for Ruby contains a flaw that is triggered when an error
occurs during the parsing of the 'XML' parameter. With a crafted request
containing arbitrary symbol and yaml types, a remote attacker can execute
arbitrary commands.


## Remediation
Upgrade to version `>= 0.5.2` or greater.

## References
- http://rubysec.com/advisories/OSVDB-89148
- http://osvdb.org/show/osvdb/89148
