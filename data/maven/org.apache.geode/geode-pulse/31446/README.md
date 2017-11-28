## Overview
[Apache Geode]([`org.apache.geode:geode-core`](https://geode.apache.org)) before 1.1.1, when a cluster has enabled security by setting the `security-manager` property, allows remote authenticated users with `CLUSTER:READ` but not `DATA:READ` permission to access the data browser page in Pulse and consequently execute an OQL query that exposes data stored in the cluster.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-5649)
- [Geode Mail Archives](http://mail-archives.apache.org/mod_mbox/geode-user/201704.mbox/%3cCAEwge-E4y=EVfhwpfRwsbnBH_hBS3Q-BJS+1BX5omYGW4dnR1w@mail.gmail.com%3e)
