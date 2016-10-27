## Overview

[bundler](https://rubygems.org/gems/bundler) is a dependencies manager. 
Affected versions of this Gem contain a flaw that is triggered when handling a Gemfile that contains multiple top-level source lines. This may allow a gem to be installed from an unintended source server, allowing an attacker to install specially crafted gems, leading to arbitrary code execution.

## Details

Any Gemfile with multiple top-level `source` lines cannot reliably control the gem server that a particular gem is fetched from. As a result, Bundler might install the wrong gem if more than one source provides a gem with the same name. An attacker might create a malicious gem on Rubygems.org with the same name as a commonly-used Github gem. From that point forward, running `bundle install` might result in the malicious gem being used instead of the expected one.

It is possible to work around the issue by removing all but one `source` line from the Gemfile. Gems from other sources must be installed via the `:git` option, which is not susceptible to this issue, or unpacked into the application repository and used via the `:path` option.

Unfortunately, backporting a fix for this issue proved impractical, as previous versions of Bundler lacked the ability to distinguish between gem servers.

## References

- http://rubysec.com/advisories/CVE-2013-0334/
- https://groups.google.com/forum/#!topic/ruby-security-ann/Rms5sZhLxdo
- http://bundler.io/v1.7/whats_new.html
