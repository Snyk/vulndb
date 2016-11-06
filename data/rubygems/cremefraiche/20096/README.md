## Overview
[`Creme Fraiche`] Converts email to PDF.
Affected versions of this gem fail to properly sanitize input in file names.

A malicious email attachment with a file name consisting of shell meta﻿characters could inject commands into the shell.

If the attacker is allowed to specify a filename (via a web gui) commands could be injected that way as well.

```shell
cmd = "pdftk %s updateinfo %s output %s" %[pdf, infofile, tfile]
@log.debug('pdftk-command is ' << cmd)
pdftkresult = system( cmd)
```

## References
- http://rubysec.com/advisories/CVE-2013-2090
