## Overview

[`dragonfly`](https://rubygems.org/gems/dragonfly) is a framework that enables on-the-fly processing for any content type. Its uses range from image thumbnails to standard attachments to on-demand text generation. This gem was renamed from `fog-dragonfly` to `dragonfly`.

Affected versions of this gem are vulnerable to a remote attacker executing arbitrary commands, due to a failure to properly sanitize input passed via the `imagemagickutils.rb` script.

## References

- http://seclists.org/fulldisclosure/2013/Sep/18
- http://www.vapid.dhs.org/advisories/fog-dragonfly-0.8.2-cmd-inj.html
