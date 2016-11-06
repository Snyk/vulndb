## Overview
[`GTK2`](https://rubygems.org/gems/gtk2) is a Ruby binding of GTK+-2.x.
Affected versions of this gem are vulnerable to arbitrary command execution via format string specifiers in the message parameter (the `mdiag_initialize` function in `gtk/src/rbgtkmessagedialog.c`)

## References
- http://rubysec.com/advisories/CVE-2007-6183
