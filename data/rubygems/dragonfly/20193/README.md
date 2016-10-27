## Overview

[`dragonfly`](https://rubygems.org/gems/dragonfly) is a framework that enables on-the-fly processing for any content type. Its uses range from image thumbnails to standard attachments to on-demand text generation. This gem was renamed from `fog-dragonfly` to `dragonfly`.

Affected versions of this gem are vulnerable to a remote attacker gaining read/write access to the filesystem, and executing arbitrary commands via a flaw in uploading & processing. This is that is due to the gem failing to restrict arbitrary commands to imagemagicks convert.

## References

- http://rubysec.com/advisories/OSVDB-110439/
