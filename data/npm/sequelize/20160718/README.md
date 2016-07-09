## Overview
`sequelize` versions prior to `3.23.6` are vulnerable to SQL injection via [GeoJSON](http://geojson.org/) documents that contain a value with a single quote. GeoJSON is a format used for encoding a variety of geographic data structures in a standard JSON document. The vulnerability exists within GeoJSON documents using the function 
`ST_GeomFromGeoJSON` (for postgresql/postgis) and the function `GeomFromText` (for mysql). 

Note that `sequelize` users who do not use these specific functions are not affected. For users who do use these functions, this vulnerability has a high impact and is easily expoited, hence its high severity classification.

## Remediation
Upgrade to version 3.23.6 or greater.

## References
- https://github.com/sequelize/sequelize/issues/6194
- http://geojson.org/
- http://docs.sequelizejs.com/en/latest/api/datatypes/#geometry

