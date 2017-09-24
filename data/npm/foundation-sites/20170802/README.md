## Overview
[`foundation-sites`](https://www.npmjs.com/package/foundation-sites) is an advanced responsive front-end framework.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks due to an insufficient fix to [npm:foundation-sites:20150619](https://snyk.io/vuln/npm:foundation-sites:20150619)

Thanks to [Nathaniel Paulus](https://github.com/Nateowami) for disclosing this vulnerability!

## Details
Although `innerHTML` does not make script tags executable, [script tags are not the only way to run arbitrary code](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#Security_considerations).

This vulnerability was [introduced](https://github.com/zurb/foundation-sites/commit/82ece95365e2f7b1f8773bee2e402695788656b2) in a deliberate attempt to allow HTML in captions. The file was subsequently deleted when version 6 was merged into the develop branch in 1e08494bb2118c9786ffc33c28158311cd542bcb. Confirmation of its removal (as well as plans to re-add it) can be found in [issue 7759](https://github.com/zurb/foundation-sites/issues/7759)

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/xss-attacks-the-next-wave/).

## Disclosure Timeline
- March 14th, 2017 - Responsible Disclosure and  PoC sent by Nathaniel Paulus.
- April 13th, 2017 - Disclosure to first contact @foundation-sites
- May 14th, 2017 - Disclosure to first and secondary contacts @foundation-sites
- June 12th, 2017 - After no response from either contact, PoC sent to both contacts.
- August 2nd, 2017 - Vulnerability made public.

## Remediation
Upgrade `foundation-sites` to version 6.0.0 or higher.
