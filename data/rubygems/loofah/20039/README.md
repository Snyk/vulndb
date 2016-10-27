## Oerview
Loofah Gem for Ruby contains a flaw that allows a remote cross-site
scripting (XSS) attack. This flaw exists because the
Loofah::HTML::Document\#text function passes properly sanitized
user-supplied input to the Loofah::XssFoliate and
Loofah::Helpers\#strip_tags functions which convert input back to
text. This may allow an attacker to create a specially crafted
request that would execute arbitrary script code in a user's browser
within the trust relationship between their browser and the server.


## Remediation
Upgrade to version `>=  0.4.6` or greater.

## References
- http://rubysec.com/advisories/OSVDB-90945
- http://www.osvdb.org/show/osvdb/90945
