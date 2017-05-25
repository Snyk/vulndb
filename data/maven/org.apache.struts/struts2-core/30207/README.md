## Overview
[`org.apache.struts:struts2-core`](https://cwiki.apache.org/confluence/display/WW/Home) is an elegant, extensible framework for building enterprise-ready Java web applications.

Affected versions of the package are vulnerable to Arbitrary Command Execution via the Jakarta Multipart parser which mishandles file uploads. When an invalid `Content-Type`, `Content-Disposition` or `Content-Length` HTTP header is received an exception is thrown and an error message is displayed to the user. An attacker may craft an invalid header and execute arbitrary commands via a `#cmd= string`.

## Remediation
Upgrade `org.apache.struts:struts2-core` to version 2.3.32, 2.5.10.1 or higher.

## References
- [Github PR](https://github.com/rapid7/metasploit-framework/pull/8072)
- [Github Issue](https://github.com/rapid7/metasploit-framework/issues/8064)
- [Github Commit](https://github.com/rapid7/metasploit-framework/pull/8072/commits/fc0f63e77471baa40057effaaa8be0f205adc6b7)
- [PoC](https://github.com/tengzhangchao/Struts2_045-Poc)
- [CVE](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5638)
- [Exploit DB](https://www.exploit-db.com/exploits/41570/)
- [Struts Wiki](https://cwiki.apache.org/confluence/display/WW/S2-045)
- [Talos Intelligence Blog](http://blog.talosintelligence.com/2017/03/apache-0-day-exploited.html)
