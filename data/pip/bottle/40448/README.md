## Overview
[`bottle`](https://pypi.python.org/pypi/bottle) is a Fast and simple WSGI-framework for small web-applications.
It was found that redirect() in bottle.py doesn't filter a "\r\n" sequence, which leads to a CRLF attack, as demonstrated by a redirect("233\r\nSet-Cookie: name=salt") call.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-9964)
- [GitHub Issue](https://github.com/bottlepy/bottle/issues/913)
- [GitHub Commit](https://github.com/bottlepy/bottle/commit/6d7e13da0f998820800ecb3fe9ccee4189aefb54)
