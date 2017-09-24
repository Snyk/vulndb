## Overview
[`birdhousebuilder_recipe_nginx`](https://pypi.python.org/pypi/birdhousebuilder_recipe_nginx) is a Buildout recipe to install and configure Nginx with conda.

Affected versions of this package are vulnerable to Man-in-the-Middle (MitM) attacks. The SSLv3 protocol uses nondeterministic CBC padding, which makes it easier for Man-in-the-Middle (MitM) attackers to obtain cleartext data via a padding-oracle attack. This is also known as the POODLE vulnerability.

## References
- [GitHub Commit](https://github.com/bird-house/birdhousebuilder.recipe.nginx/commit/f7932c5e725a2de03e65c9cdadfc9d0c1e58367e)
