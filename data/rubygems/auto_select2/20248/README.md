## Oerview
auto_select2 Gem for Ruby contains a flaw that is triggered when handling the
'params[:default_class_name]' option. This allows users to search any object
of all given ActiveRecord classes.


## Remediation
Upgrade to version `>= 0.5.0` or greater.

## References
- http://rubysec.com/advisories/OSVDB-132800
- https://github.com/Loriowar/auto_select2/issues/4
