## Overview
[`devise`](https://rubygems.org/gems/devise) is an authentication framework for Rails with Warden.

Affected versions allow an attacker to craft a malformed request in order to bypass security restrictions, potentially gaining control of other accounts. The vulnerability lies in a problematic type conversion of database queries against certain databases.

## References
- http://rubysec.com/advisories/CVE-2013-0233
- http://blog.plataformatec.com.br/2013/01/security-announcement-devise-v2-2-3-v2-1-3-v2-0-5-and-v1-5-3-released/
