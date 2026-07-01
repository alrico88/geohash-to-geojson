[**geohash-to-geojson**](../README.md)

***

[geohash-to-geojson](../globals.md) / wrapAsFeatureCollection

# Function: wrapAsFeatureCollection()

> **wrapAsFeatureCollection**(`featuresArray`): `FeatureCollection`

Defined in: [index.ts:141](https://github.com/alrico88/geohash-to-geojson/blob/master/src/index.ts#L141)

Helper function to wrap geohash features converted using geohashToPolygonFeature in a FeatureCollection

## Parameters

### featuresArray

`Feature`\<`Geometry`, `GeoJsonProperties`\>[]

Features array to wrap inside the FeatureCollection

## Returns

`FeatureCollection`

FeatureCollection wrapping the Features
