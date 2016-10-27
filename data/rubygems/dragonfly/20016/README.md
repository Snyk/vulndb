## Overview

[`dragonfly`](https://rubygems.org/gems/dragonfly) is a framework that enables on-the-fly processing for any content type. Its uses range from image thumbnails to standard attachments to on-demand text generation. This gem was renamed from `fog-dragonfly` to `dragonfly`.

Affected versions of this gem are vulnerable to remote attacker executing arbitrary commands, due to a failure to properly escape a shell that contains injected characters.

## References

- http://rubysec.com/advisories/OSVDB-97854
