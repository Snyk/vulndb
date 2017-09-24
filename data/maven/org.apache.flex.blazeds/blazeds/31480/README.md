## Overview
[`org.apache.flex.blazeds:blazeds`](https://blazeds.flex.apache.org) is an application development framework for easily building Flash-based applications for mobile devices, web browsers, and desktops.

Affected versions of the package are vulnerable to Denial of Service (DoS) attacks.
Adobe LiveCycle Data Services 3.1 and earlier, LiveCycle 9.0.0.2 and earlier, and BlazeDS 4.0.1 and earlier do not properly handle object graphs, which allows attackers to cause a denial of service via unspecified vectors, related to a "complex object graph vulnerability."

## Remediation
Upgrade `org.apache.flex.blazeds:blazeds` to version 4.0.1 or higher.

## References
- [Github PR](http://www.adobe.com/support/security/bulletins/apsb11-15.html)
- [Github Issue](https://nvd.nist.gov/vuln/detail/CVE-2011-2092)
- [DoS attacks based on Object-Graph Engineering - A study by Jens Dietrich, Kamil Jezek, Shawn Rasheed, Amjed Tahir and Alex Potanin](http://drops.dagstuhl.de/opus/volltexte/2017/7260/pdf/LIPIcs-ECOOP-2017-10.pdf)
