[**geohash-to-geojson**](../README.md)

***

[geohash-to-geojson](../globals.md) / geohashToCircleGeometry

# Function: geohashToCircleGeometry()

> **geohashToCircleGeometry**(`geohash`, `percentage`, `options?`): `Polygon`

Defined in: [index.ts:127](https://github.com/alrico88/geohash-to-geojson/blob/master/src/index.ts#L127)

Converts geohash to a circle Polygon Geometry, based on % of the size desired

## Parameters

### geohash

`string`

Geohash to convert to circle

### percentage

`number`

Percentage of the geohash area to cover with the circle

### options?

[`CircleOptions`](../type-aliases/CircleOptions.md)

Options for circle rendering

## Returns

`Polygon`

The geohash as a circle Polygon Geometry
