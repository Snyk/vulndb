## Overview
Mapbox.js is vulnerable to script content injection when `L.mapbox.map` or `L.mapbox.tileLayer` is used to load untrusted TileJSON content from a non-Mapbox URL.

## Details
Such usage is uncommon. The following usage scenarios are **not vulnerable**: [1]
- only trusted TileJSON content is loaded
- TileJSON content comes only from mapbox.com URLs
- a Mapbox map ID is supplied, rather than a TileJSON URL

## References
- [1] https://nodesecurity.io/advisories/49
- https://github.com/mapbox/mapbox.js/commit/538d229ab6767bb4c3f3969c417f9884189c1512
