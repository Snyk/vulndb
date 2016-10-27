## Overview

[`mini_magick`](https://rubygems.org/gems/mini_magick) is a Ruby wrapper for ImageMagick or GraphicsMagick command line.

Affected versions contain a flaw in `lib/mini_magick.rb` that allows remote attackers to execute commands via a URL that contains a `;` character.

## References

- http://seclists.org/fulldisclosure/2013/Mar/123
- http://rubysec.com/advisories/CVE-2013-2616/
