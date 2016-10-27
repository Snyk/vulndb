## Overview

[`i18n`](https://rubygems.org/gems/i18n) is a Ruby gem that provides internationalization support.

Affected versions of this gem contain a vulnerability in `exceptions.rb` which allows remote attackers to inject scripts via the `I18n::MissingTranslation` call, which can contain user input which fails to escape the keys.

## References

- https://groups.google.com/forum/#!topic/ruby-security-ann/pLrh6DUw998
- http://lists.opensuse.org/opensuse-updates/2013-12/msg00093.html
- http://www.debian.org/security/2013/dsa-2830
- http://weblog.rubyonrails.org/2013/12/3/Rails_3_2_16_and_4_0_2_have_been_released/
