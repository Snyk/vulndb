## Overview
[`devise`](https://rubygems.org/gems/devise) is an authentication framework for Rails with Warden.

Affected versions implement the 'remember me' functionality by using the same cookie for the user across all their devices. This increases the chance of the user identity being stolen. Furthermore, it does not allow to selectively revoke a specific cookie value, forcing 'all or none' if the user wishes to sign out. The fix introduces a timestamp to the cookie value, making it unique per device.

## References
- http://rubysec.com/advisories/CVE-2015-8314
- http://blog.plataformatec.com.br/2016/01/improve-remember-me-cookie-expiration-in-devise/
