## Overview
[`celery`](https://pypi.python.org/pypi/celery) is a Distributed Task Queue.
Affected versions of this package are vulnerable due to an Insecure Default. The `accept_content` setting was set to: `app.conf.accept_content = ['json', 'pickle', 'msgpack', 'yaml']` by default, allowed deserialization of pickled messages, even if the software is configured to send
messages in the JSON format.

**Note** An attacker requires access to the message broker used to send messages to Celery workers in order to exploit this vulnerability.

## References
- [Celery Security Advisory](https://github.com/celery/celery/blob/master/docs/sec/CELERYSA-0003.txt)
