## Overview
[`paperclip`](https://rubygems.org/gems/paperclip) is an upload management for ActiveRecord.
Affected versions of this gem are vulnerable to Cross-site Scripting attacks.

## Details
There is an issue where if an HTML file is uploaded with a .html extension, but the content type is listed as being `image/jpeg`, this will bypass a validation checking for images. But it will also pass the spoof check, because a file named .html and containing actual HTML passes the spoof check.

## References
- http://rubysec.com/advisories/CVE-2015-2963
- https://robots.thoughtbot.com/paperclip-security-release
