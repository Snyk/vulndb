## Overview
[`org.apache.flex.blazeds:blazeds`](https://flex.apache.org/download-blazeds.html) is an application development framework for easily building Flash-based applications for mobile devices, web browsers, and desktops.

The AMF deserialization implementation of Flex BlazeDS is vulnerable to Deserialization of Untrusted Data. By sending a specially crafted AMF message, it is possible to make the server establish a connection to an endpoint specified in the message and request an RMI remote object from that endpoint. This can result in the execution of arbitrary code on the server via Java deserialization.

Starting with BlazeDS version `4.7.3`, Deserialization of XML is disabled completely per default, while the `ClassDeserializationValidator` allows deserialization of whitelisted classes only. BlazeDS internally comes with the following whitelist:
```
flex.messaging.io.amf.ASObject
flex.messaging.io.amf.SerializedObject
flex.messaging.io.ArrayCollection
flex.messaging.io.ArrayList
flex.messaging.messages.AcknowledgeMessage
flex.messaging.messages.AcknowledgeMessageExt
flex.messaging.messages.AsyncMessage
flex.messaging.messages.AsyncMessageExt
flex.messaging.messages.CommandMessage
flex.messaging.messages.CommandMessageExt
flex.messaging.messages.ErrorMessage
flex.messaging.messages.HTTPMessage
flex.messaging.messages.RemotingMessage
flex.messaging.messages.SOAPMessage
java.lang.Boolean
java.lang.Byte
java.lang.Character
java.lang.Double
java.lang.Float
java.lang.Integer
java.lang.Long
java.lang.Object
java.lang.Short
java.lang.String
java.util.ArrayList
java.util.Date
java.util.HashMap
org.w3c.dom.Document
```

## Remediation
Upgrade `org.apache.flex.blazed:blazeds` to version 4.7.3 or higher.

## References
- [Github Release Notes](https://github.com/apache/flex-blazeds/blob/master/RELEASE_NOTES)
- [Securitytracker Issue](http://www.securitytracker.com/id/1038364)
- [CVE-2017-3066](https://nvd.nist.gov/vuln/detail/CVE-2017-3066)
