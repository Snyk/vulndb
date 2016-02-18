## Overview
[libxmljs npm package](https://www.npmjs.com/package/libxmljs) prior to version 0.17.0 embeds and uses an outdated and vulnerable binary version of libxml2 library. The embedded libxml2 version 2.9.0 potentially contains the following vulnerabilities:
```
2.9.2
CVE-2015-8242 Buffer overead with HTML parser in push mode (Hugh Davenport)
CVE-2015-7500 Fix memory access error due to incorrect entities boundaries (Daniel Veillard)
CVE-2015-7499-2 Detect incoherency on GROW (Daniel Veillard)
CVE-2015-7499-1 Add xmlHaltParser() to stop the parser (Daniel Veillard)
CVE-2015-5312 Another entity expansion issue (David Drysdale)
CVE-2015-7497 Avoid an heap buffer overflow in xmlDictComputeFastQKey (David Drysdale),
CVE-2015-7498 Avoid processing entities after encoding conversion failures (Daniel Veillard)
CVE-2015-7942-2 Fix an error in previous Conditional section patch (Daniel Veillard)
CVE-2015-7942 Another variation of overflow in Conditional sections (Daniel Veillard)
CVE-2015-1819 Enforce the reader to run in constant memory (Daniel Veillard)
CVE-2015-7941_2 Cleanup conditional section error handling (Daniel Veillard)
CVE-2015-7941_1 Stop parsing on entities boundaries errors (Daniel Veillard)

2.9.1
CVE-2014-3660 Does not properly prevent entity expansion (Daniel Veillard),
CVE-2014-0191 Do not fetch external parameter entities (Daniel Veillard)
CVE-2013-0339 Does not properly handle external entities expansion 

2.9.0
CVE-2013-1969 Multiple use-after-free vulnerabilities in libxml2 2.9.0
CVE-2013-0338 Allows context-dependent attackers to cause a denial of service
CVE-2012-5134 Heap-based buffer underflow in the xmlParseAttValueComplex (Daniel Veillard)
```

## Remediation
Upgrade `libxmljs` to version 0.17.0 or greater. 

## References
- https://github.com/polotek/libxmljs/pull/375
- https://github.com/polotek/libxmljs/commit/9acfcaf7d736ec64656bce04259e3b526ecc4b5d
