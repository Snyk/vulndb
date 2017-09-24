## Overview
[`org.apache.struts:struts2-struts1-plugin`](http://struts.apache.org/docs/s2-048.html) is a Struts1 plugin for Struts2.

Affected versions of the package are vulnerable to Arbitrary Code Execution. When using untrusted input as a part of the error message in the ActionMessage class, a malicious user can pass in a raw message to the ActionMessage, which will then run on the server.


## Remediation
There is no fix version for `org.apache.struts:struts2-struts1-plugin`.

The vendor recommends the following:

> Always use resource keys instead of passing a raw message to the ActionMessage as shown below, never pass a raw value directly

```java
messages.add("msg", new ActionMessage("struts1.gangsterAdded", gform.getName()));
```

> and never like this

```java
messages.add("msg", new ActionMessage("Gangster " + gform.getName() + " was added"));
```

## References
- [NVD](https://nvd.nist.gov/vuln/detail/cve-2017-9791)
- [Struts Security Bulletin](http://struts.apache.org/docs/s2-048.html)
