## Overview
[`sleekxmpp`](https://pypi.python.org/pypi/sleekxmpp) is a SleekXMPP is an elegant Python library for XMPP (aka Jabber, Google Talk, etc).
An incorrect implementation of "XEP-0280: Message Carbons" in multiple XMPP clients allows a remote attacker to impersonate any user, including contacts, in the vulnerable application's display. This allows for various kinds of social engineering attacks. This CVE is for SleekXMPP up to 1.3.1 and Slixmpp all versions up to 1.2.3, as bundled in poezio (0.8 - 0.10) and other products.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-5591)
- [Openwall](http://openwall.com/lists/oss-security/2017/02/09/29)
- [GitHub Commit](https://github.com/poezio/slixmpp/commit/22664ee7b86c8e010f312b66d12590fb47160ad8)
- [Dr. Georg Lukas Report](https://rt-solutions.de/wp-content/uploads/2017/02/CVE-2017-5589_xmpp_carbons.pdf)
