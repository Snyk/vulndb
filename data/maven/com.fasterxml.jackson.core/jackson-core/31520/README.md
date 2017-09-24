## Overview
Affected versions of [`com.fasterxml.jackson.core:jackson-core`](https://core.jackson.fasterxml.com) are vulnerable to Denial of Service attacks. 

When `WRITE_BIGDECIMAL_AS_PLAIN` setting is enabled, Jackson will attempt to write out the whole number, no matter how large the exponent.
The following sample code will trigger an out of memory exception:
```java
ObjectMapper mapper = new ObjectMapper().enable(JsonGenerator.Feature.WRITE_BIGDECIMAL_AS_PLAIN);
mapper.writeValueAsString(new java.math.BigDecimal("9.223372E+1010671858"));
```

## Remediation
Upgrade `com.fasterxml.jackson.core:jackson-core` to version `2.7.8` or higher.

## References
- [Github Issue](https://github.com/FasterXML/jackson-core/issues/315)
- [Github Commit](https://github.com/FasterXML/jackson-core/commit/96642978dcf1b69cba68ec72cb2f652d59a8b5be)

