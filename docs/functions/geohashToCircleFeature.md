[**geohash-to-geojson**](../README.md)

***

[geohash-to-geojson](../globals.md) / geohashToCircleFeature

# Function: geohashToCircleFeature()

> **geohashToCircleFeature**(`geohash`, `percentage`, `properties?`, `options?`): `Feature`\<`Polygon`\>

Defined in: [index.ts:83](https://github.com/alrico88/geohash-to-geojson/blob/master/src/index.ts#L83)

Converts geohash to a circle Feature, based on % of the size desired

## Parameters

### geohash

`string`

Geohash to convert to circle

### percentage

`number`

Percentage of the geohash area to cover with the circle

### properties?

`GeoJsonProperties` = `{}`

Properties to embed to the resulting feature

### options?

[`CircleOptions`](../type-aliases/CircleOptions.md)

Options for circle rendering

## Returns

`Feature`\<`Polygon`\>

The geohash as a circle Polygon Feature
