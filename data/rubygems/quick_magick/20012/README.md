## Overview
[`quick_magick`](https://rubygems.org/gems/quick_magick) allows you to access ImageMagick command line functions using Ruby interface.
Affected versions of this gem contain a flaw in the `QuickMagick::Image.read` function. The issue is triggered when handling a specially crafted string. This may allow a remote attacker to inject arbitrary commands.

## References
- http://rubysec.com/advisories/OSVDB-106954
