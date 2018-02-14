## Overview
Affected version of [`github.com/opencontainers/libcontainer`](https://github.com/opencontainers/runc) are vulnerable to Information Exposure.
RunC allowed additional container processes via 'runc exec' to be ptraced by the pid 1 of the container. This allows the main processes of the container, if running as root, to gain access to file-descriptors of these new processes during the initialization and can lead to container escapes or modification of runC state before the process is fully placed inside the container.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-9962)
- [GitHub Commit](https://github.com/opencontainers/runc/commit/5d93fed3d27f1e2bab58bad13b180a7a81d0b378)
- [Seclists](http://seclists.org/fulldisclosure/2017/Jan/29)
- [Redhat Security Advisory](https://access.redhat.com/security/vulnerabilities/cve-2016-9962)
