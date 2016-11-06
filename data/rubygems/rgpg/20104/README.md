## Overview
[`rgpg`](https://rubygems.org/gems/rgpg) is a wrapper around "gpg" command for file encryption.
Affected versions of this gem are vulnerable to Arbitrary command execution via `GpgHelper` module (lib/rgpg/gpg_helper.rb). The program fails to properly sanitize user-supplied input before being used in the `system()` function for execution. This may allow a remote attacker to execute arbitrary commands.

## References
- http://rubysec.com/advisories/CVE-2013-4203
