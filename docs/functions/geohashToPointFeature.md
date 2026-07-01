[**geohash-to-geojson**](../README.md)

***

[geohash-to-geojson](../globals.md) / geohashToPointFeature

# Function: geohashToPointFeature()

> **geohashToPointFeature**(`geohash`, `properties?`): `Feature`\<`Point`\>

Defined in: [index.ts:55](https://github.com/alrico88/geohash-to-geojson/blob/master/src/index.ts#L55)

Converts geohash to point feature, for centroid coordinates

## Parameters

### geohash

`string`

Geohash to convert to Point Feature

### properties?

`GeoJsonProperties` = `{}`

Properties to embed to the resulting feature

## Returns

`Feature`\<`Point`\>

The geohash centroid as a Point Feature
