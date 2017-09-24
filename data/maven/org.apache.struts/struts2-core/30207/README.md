## Overview
[`org.apache.struts:struts2-core`](https://cwiki.apache.org/confluence/display/WW/Home) is an elegant, extensible framework for building enterprise-ready Java web applications.

Affected versions of the package are vulnerable to Arbitrary Command Execution while uploading files with the Jakarta Multipart parser. This particular vulnerability can be exploited by an attacker by sending a crafted request to upload a file to the vulnerable server that uses a Jakarta-based plugin to process the upload request.

The attacker can then send malicious code in the `Content-Type`, `Content-Disposition` or `Content-Length` HTTP headers, which will then be executed by the vulnerable server. [A proof of concept](https://github.com/tengzhangchao/Struts2_045-Poc) that demonstrates the attack scenario is publicly available and the vulnerability is being [actively exploited in the wild](https://www.theregister.co.uk/2017/03/09/apache_under_attack_patch_for_zero_day_available/).

Although maintainers of the open source project immediately patched the vulnerability, Struts servers that have yet to install the update remain under attack by hackers who exploit it to inject commands of their choice.

This attack can be achieved without authentication. To make matters worse, web applications don't necessarily need to successfully upload a malicious file to exploit this vulnerability, as just the presence of the vulnerable Struts library within an application is enough to exploit the vulnerability.

## Remediation
Upgrade `org.apache.struts:struts2-core` to version 2.3.32, 2.5.10.1 or higher.

## References
- [Metasploit GitHub PR](https://github.com/rapid7/metasploit-framework/pull/8072)
- [Metasploit GitHub Issue](https://github.com/rapid7/metasploit-framework/issues/8064)
- [Metasploit GitHub Commit](https://github.com/rapid7/metasploit-framework/pull/8072/commits/fc0f63e77471baa40057effaaa8be0f205adc6b7)
- [PoC](https://github.com/tengzhangchao/Struts2_045-Poc)
- [CVE](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5638)
- [Exploit DB](https://www.exploit-db.com/exploits/41570/)
- [Struts Wiki](https://cwiki.apache.org/confluence/display/WW/S2-045)
- [Talos Intelligence Blog](http://blog.talosintelligence.com/2017/03/apache-0-day-exploited.html)
