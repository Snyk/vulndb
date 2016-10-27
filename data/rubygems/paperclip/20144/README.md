## Overview
[`paperclip`](https://rubygems.org/gems/paperclip) is an upload management for ActiveRecord.
Affected versions of this gem are vulnerable to Restriction Bypass By Spoofing Content-Type Header.

## Details
Paperclip Gem for Ruby contains a flaw that is due to the application failing to properly validate the file extension, instead only validating the Content-Type header during file uploads. This may allow a remote attacker to bypass restrictions on file types for uploaded files by spoofing the content-type.

## References
- http://rubysec.com/advisories/OSVDB-103151
