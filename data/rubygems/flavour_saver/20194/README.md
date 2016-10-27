## Oerview
FlavourSaver contains a flaw in helper method dispatch where it uses
Kernel::send to call helpers without checking that they are defined
within the template context first.  This allows expressions such as
{{system "ls"}} or {{eval "puts 1 + 1"}} to be executed.


## Remediation
Upgrade to version `>= 0.3.3` or greater.

## References
- http://rubysec.com/advisories/OSVDB-110796
- http://osvdb.org/show/osvdb/110796
