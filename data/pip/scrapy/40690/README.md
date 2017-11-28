## Overview
[`scrapy`](http://pypi.python.org/pypi/Scrapy) is a high-level Web Crawling and Web Scraping framework.

Affected versions of the package are vulnerable to Denial of Service (DoS).
Scrapy 1.4 allows remote attackers to cause a denial of service (memory consumption) via large files because arbitrarily many files are read into memory, which is especially problematic if the files are then individually written in a separate thread to a slow storage resource, as demonstrated by interaction between dataReceived (in core/downloader/handlers/http11.py) and S3FilesStore.

## Remediation
There is no fix version for `scrapy`.

## References
- [Github PR](https://github.com/scrapy/scrapy/pull/2917)
- [Github Issue](https://github.com/scrapy/scrapy/issues/482)
