## Overview

[`rack-attack`](https://rubygems.org/gems/rack-attack) is Rack middleware for throttling and blocking abusive requests.

Affected versions of `rack-attack` do not normalize the request path. This can cause throttles and blacklists to not work as expected.

## Details

When using `rack-attack` with a rails app, developers expect the request path to be normalized. In particular, trailing slashes are stripped so a request path `/login/` becomes `/login` by the time you're in `ActionController`.

Since `Rack::Attack` runs before `ActionDispatch`, the request path is not yet normalized. This can cause throttles and blacklists to not work as expected.

E.g., a throttle:

```
throttle('logins', ...) {|req| req.path == "/login" }
```

would not match a request to `/login/`, though Rails would route `/login/` to the same `/login` action.

## References

- http://rubysec.com/advisories/OSVDB-132234/
- https://github.com/kickstarter/rack-attack/releases/tag/v4.3.1
