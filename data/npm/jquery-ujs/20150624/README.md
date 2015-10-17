## Overview:

This description pulled from the rubyonrails-security post.

Reported to NodeSecurity Project by Reed Loden.

CSRF Vulnerability in jquery-ujs and jquery-rails

There is an vulnerability in jquery-ujs and jquery-rails that can be used to
bypass CSP protections and allows attackers to send CSRF tokens to attacker domains.

In the scenario where an attacker might be able to control the href attribute of an anchor tag or
the action attribute of a form tag that will trigger a POST action, the attacker can set the
href or action to " https://attacker.com" (note the leading space) that will be passed to JQuery,
who will see this as a same origin request, and send the user's CSRF token to the attacker domain.

_Original description taken from the [Node Security Project](https://nodesecurity.io/)_

## Recommendations:

Upgrade to the latest version

## References:

- hackerone.com: https://hackerone.com/reports/49935
- npm: https://www.npmjs.com/package/jquery-ujs
- rubyonrails-security: https://groups.google.com/forum/#!msg/rubyonrails-security/XIZPbobuwaY/fqnzzpuOlA4J
- github: https://github.com/rails/jquery-ujs
