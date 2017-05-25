## Overview
[`org.igniterealtime.smack:smack`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22smack%22)
The ParseRoster component in the Ignite Realtime Smack XMPP API before 4.0.0-rc1 does not verify the from attribute of a roster-query IQ stanza, which allows remote attackers to spoof IQ responses via a crafted attribute.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-0364)