## Overview
[Apache Struts2](http://struts.apache.org/) is a popular open-source framework for developing web applications in the Java programming language.

Affected versions of this package are vulnerable to Arbitrary Code Execution. An unauthenticated attack may be able to exploit this 
When using expression literals or forcing expression in Freemarker tags (see example below) and using request values can lead to RCE attack.

```xml
<@s.hidden name="redirectUri" value=redirectUri />
<@s.hidden name="redirectUri" value="${redirectUri}" />
<@s.hidden name="${redirectUri}"/>
```

In both cases a writable property is used in the value attribute and in both cases this is threatened as an expression by Freemarker. Please be aware that using Struts expression evaluation style is safe:

```
<@s.hidden name="redirectUri" value="%{redirectUri}" />
<@s.hidden name="%{redirectUri}"/>
```

## Remediation
Developers are strongly advised to upgrade their _Apache Struts_ components to version `2.3.34`, `2.5.12` or higher.

## References
- [Apache Security Bulletin](https://cwiki.apache.org/confluence/display/WW/S2-053)
