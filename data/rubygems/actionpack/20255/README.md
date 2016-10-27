## Overview
[`actionpack`](https://rubygems.org/gems/actionpack) is a web app builder and tester on Rails.
Affected versions of this Gem are vulnerable to Denial of Service (DoS) attacks.

Ruby on Rails applications that have a route containing the string `":controller"` are susceptible to denial of service caused by unbounded memory growth.

## Details

Action Pack keeps a map of `url controller name` to `controller class name`. This map is cached globally, and is populated even if the controller class doesn't actually exist. An attacker could flood a vulnerable application route with requests for non-existent controllers, leading to unbounded memory growth in this cache.

To identify if your application is vulnerable, look for routes that contain `":controller"`.

## References

- http://rubysec.com/advisories/CVE-2015-7581
- https://groups.google.com/forum/#!topic/rubyonrails-security/dthJ5wL69JE
