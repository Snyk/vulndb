## Overview
[mapbox-rails](https://rubygems.org/gems/mapbox-rails) integrates [mapbox.js](https://www.npmjs.com/package/mapbox.js) with the Rails asset pipeline.

[mapbox.js](https://snyk.io/vuln/npm:mapbox.js:20160112) is vulnerable to script content injection when `L.mapbox.map` and `L.mapbox.shareControl` is used to load untrusted TileJSON content from a non-Mapbox URL.

## Details
Such usage is uncommon. The following usage scenarios are **not vulnerable**: [1]
- the map does not use a share control (L.mapbox.sharecontrol)
- only trusted TileJSON content is loaded

Related vulnerability:

## References
- [Rubysec](http://rubysec.com/advisories/OSVDB-132871/)
- [Hackerone](https://hackerone.com/reports/99245)
- [Github Issue](https://github.com/mapbox/mapbox.js/pull/1102)
