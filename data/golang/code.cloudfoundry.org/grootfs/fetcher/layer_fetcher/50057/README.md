## Overview
[`grootfs`](https://github.com/cloudfoundry/grootfs) is the Cloud Foundry component that provides filesystem isolation for containers and deals with container (Docker and OCI) images.

Affected versions of this package are vulnerable to Cache Poisoning.

Cloud Foundry Foundation GrootFS release 0.3.x versions prior to 0.30.0 do not validate DiffIDs, allowing specially crafted images to poison the grootfs volume cache. For example, this could allow an attacker to provide an image layer that GrootFS would consider to be the Ubuntu base layer.

## References
- [Cloudfoundry Security Advisory](https://www.cloudfoundry.org/cve-2017-14388/)
