## Oerview
The gollum-grit_adapter gem contains a flaw that can allow arbitrary
command execution. 

Grit implements its search functionality by shelling out to `git grep`. In 
turn, `git grep` takes a `-O` or `--open-files-in-pages` option that will 
pipe the results of `grep` to an arbitrary process. By failing to properly
sanitize user input search parameters, an attacker can thus perform command 
execution.

Note that the grep result must find the string 'master' (or 
whatever is the default branch that gollum uses) in any of the wiki's
documents for this to succeed.


## Remediation
Upgrade to version `>= 0.1.1` or greater.

## References
- http://rubysec.com/advisories/CVE-2014-9489
- https://github.com/gollum/gollum/issues/913
