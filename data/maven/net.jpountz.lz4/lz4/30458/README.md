## Overview
[`net.jpountz.lz4:lz4`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22lz4%22) Java ports and bindings of the LZ4 compression algorithm and the xxHash hashing algorithm.

Integer overflow in the LZ4 algorithm implementation, as used in Yann Collet LZ4 before r118 and in the lz4_uncompress function in lib/lz4/lz4_decompress.c in the Linux kernel before 3.15.2, on 32-bit platforms might allow context-dependent attackers to cause a denial of service (memory corruption) or possibly have unspecified other impact via a crafted Literal Run that would be improperly handled by programs not complying with an API limitation, a different vulnerability than CVE-2014-4715.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-4611)
- [Github Commit](https://github.com/jpountz/lz4-java/commit/8090284100232189632d06881cab14e585d4c08e)
