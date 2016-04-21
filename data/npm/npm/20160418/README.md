## Overview
This vulnerability could cause the unintentional leakage of bearer tokens.
A design flaw in npm's registry allows an attacker to set up an HTTP server that could collect authentication information, and then use this authentication information to impersonate the users whose tokens they collected. The attacker could do anything the compromised users could do, including publishing new versions of packages.

## Details
The primary npm registry has, since late 2014, used HTTP bearer tokens to authenticate requests from the npm command-line interface. Due to a design flaw in the CLI, these bearer tokens were sent with every request made by logged-in users, regardless of the destination of the request. (The bearers only should have been included for requests made against a registry or registries used for the current install.)

This flaw allows an attacker to set up an HTTP server that could collect authentication information. They could then use this information to impersonate the users whose tokens they collected. This impersonation would allow them to do anything the compromised users could do, including publishing new versions of packages.

With the fixes npm have released, the CLI will only send bearer tokens with requests made against a registry.
npm’s CLI team believe that the fix won’t break any existing registry setups. However, it’s possible the change will be breaking in some cases, due to the large number of registry software suites used.

## Remediation
1. Upgrade npm to ">= 3.8.3 || >= 2.15.1"
2. Invalidate your [current npm bearer tokens](https://www.npmjs.com/settings/tokens)

## References
- https://nodejs.org/en/blog/vulnerability/npm-tokens-leak-march-2016/
- http://blog.npmjs.org/post/142036323955/fixing-a-bearer-token-vulnerability

