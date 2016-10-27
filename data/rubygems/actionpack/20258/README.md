## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
Affected versions of this Gem are vulnerable to a Timing Attack, via the basic authentication support in Action Controller. This can allow an attacker to determine basic authentication usernames and passwords.

## Details

Due to the way that Action Controller compares user names and passwords in basic authentication authorization code, it is possible for an attacker to analyze the time taken by a response and guess the password.

For example, the string comparison `"foo" == "far"` is possibly faster than the comparison `"foo" == "for"`, as `"far"` has fewer characters in common with `"foo"`.

Attackers can use this information to attempt to guess the username and password used in the basic authentication system, one character at a time.

You can tell your application is vulnerable to this attack by looking for `http_basic_authenticate_with` method calls in your application.

You can read more about timing attacks (using Node.js as an example) on the Snyk blog: [https://snyk.io/blog/node-js-timing-attack-ccc-ctf/](https://snyk.io/blog/node-js-timing-attack-ccc-ctf/)

## References

- http://rubysec.com/advisories/CVE-2015-7576
- https://groups.google.com/forum/#!topic/rubyonrails-security/ANv0HDHEC3k
