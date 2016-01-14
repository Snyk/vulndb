## Overview
Mapbox.js is vulnerable to script content injection when `L.mapbox.map` and `L.mapbox.shareControl` is used to load untrusted TileJSON content from a non-Mapbox URL.

## Details
Such usage is uncommon. The following usage scenarios are **not vulnerable**: [1]
- the map does not use a share control (L.mapbox.sharecontrol)
- only trusted TileJSON content is loaded

## References
- [1] https://nodesecurity.io/advisories/74
 

