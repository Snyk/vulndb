## Overview
[`net.jpountz.lz4:lz4`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22lz4%22)
Yann Collet LZ4 before r119, when used on certain 32-bit platforms that allocate memory beyond 0x80000000, does not properly detect integer overflows, which allows context-dependent attackers to cause a denial of service (memory corruption) or possibly have unspecified other impact via a crafted Literal Run, a different vulnerability than [CVE-2014-4611].

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-4715)
- [GitHub Commit](https://github.com/jpountz/lz4-java/commit/8090284100232189632d06881cab14e585d4c08e)
