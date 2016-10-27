## Oerview
Builder Gem for Ruby contains a flaw in the handling of tag names. The issue
is triggered when the program reads tag names from XML data and then calls a
method with that name. With a specially crafted file, a context-dependent
attacker can call private methods and manipulate data.


## Remediation
Upgrade to version `>= 2.1.2` or greater.

## References
- http://rubysec.com/advisories/OSVDB-95668
- http://osvdb.org/show/osvdb/95668
