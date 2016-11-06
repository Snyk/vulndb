## Overview

[`cocaine`]('https://rubygems.org/gems/cocaine') is a library for doing command lines.

Affected versions of this gem are vulnerable to an attacker injecting hostile commands into a command line via a crafted hash object which is not properly escaped. This is due to the method of variable interpolation used by the gem, allowing an attacker to execute arbitrary commands via a crafted `has` object, related to recursive variable interpolation.

## Details

The impact is lessened on Ruby version 1.8.* because hashes are not ordered by default, so an attacker must rely on luck for the attack to work.

An attack of this sort cannot take place if there is only one value being interpolated into the command line.

## References

- http://rubysec.com/advisories/CVE-2013-4457/
- http://www.openwall.com/lists/oss-security/2013/10/22/10
- https://github.com/thoughtbot/cocaine/blob/master/NEWS.md
