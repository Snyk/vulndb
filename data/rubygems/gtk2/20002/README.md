## Oerview
Format string vulnerability in the mdiag_initialize function in
gtk/src/rbgtkmessagedialog.c in Ruby-GNOME 2 (aka Ruby/Gnome2) 0.16.0, and
SVN versions before 20071127, allows context-dependent attackers to execute
arbitrary code via format string specifiers in the message parameter.


## Remediation
Upgrade to version `> 0.16.0` or greater.

## References
- http://rubysec.com/advisories/OSVDB-40774
- http://osvdb.org/show/osvdb/40774
