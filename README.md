# geohash-to-geojson

## Installation

### Using npm

`npm i geohash-to-geojson`

### Using Yarn

`yarn add geohash-to-geojson`

Then import the desired functions in your code

```javascript
import {geohashToPolygonFeature} from 'geohash-to-geojson';

geohashToPolygonFeature('ezjmgz');

...
```

# geohash-to-geojson

## Table of contents

### Type aliases

- [CircleOptions](#circleoptions)

### Functions

- [geohashToCircleFeature](#geohashtocirclefeature)
- [geohashToCircleGeometry](#geohashtocirclegeometry)
- [geohashToPointFeature](#geohashtopointfeature)
- [geohashToPolygonFeature](#geohashtopolygonfeature)
- [geohashToPolygonGeometry](#geohashtopolygongeometry)
- [geohashesToFeatureCollection](#geohashestofeaturecollection)
- [wrapAsFeatureCollection](#wrapasfeaturecollection)

## Type aliases

### CircleOptions

Ƭ **CircleOptions**: `Object`

#### Type declaration

| Name     | Type         |
| :------- | :----------- |
| `ruler?` | `CheapRuler` |
| `steps?` | `number`     |

#### Defined in

[index.ts:54](https://github.com/alrico88/geohash-to-geojson/blob/master/src/index.ts#L54)

## Functions

### geohashToCircleFeature

▸ **geohashToCircleFeature**(`geohash`, `percentage`, `properties?`, `options?`): `Feature`<`Polygon`\>

Converts geohash to a circle Feature, based on % of the size desired

**`export`**

#### Parameters

| Name         | Type                              | Description                                             |
| :----------- | :-------------------------------- | :------------------------------------------------------ |
| `geohash`    | `string`                          | Geohash to convert to circle                            |
| `percentage` | `number`                          | Percentage of the geohash area to cover with the circle |
| `properties` | `GeoJsonProperties`               | -                                                       |
| `options?`   | [`CircleOptions`](#circleoptions) | -                                                       |

#### Returns

`Feature`<`Polygon`\>

The geohash as a circle Polygon Feature

#### Defined in

[index.ts:71](https://github.com/alrico88/geohash-to-geojson/blob/master/src/index.ts#L71)

---

### geohashToCircleGeometry

▸ **geohashToCircleGeometry**(`geohash`, `percentage`, `options?`): `Polygon`

Converts geohash to a circle Polygon Geometry, based on % of the size desired

**`export`**

#### Parameters

| Name         | Type                              | Description                                             |
| :----------- | :-------------------------------- | :------------------------------------------------------ |
| `geohash`    | `string`                          | Geohash to convert to circle                            |
| `percentage` | `number`                          | Percentage of the geohash area to cover with the circle |
| `options?`   | [`CircleOptions`](#circleoptions) | -                                                       |

#### Returns

`Polygon`

The geohash as a circle Polygon Geometry

#### Defined in

[index.ts:103](https://github.com/alrico88/geohash-to-geojson/blob/master/src/index.ts#L103)

---

### geohashToPointFeature

▸ **geohashToPointFeature**(`geohash`, `properties?`): `Feature`<`Point`\>

Converts geohash to point feature, for centroid coordinates

**`export`**

#### Parameters

| Name         | Type                | Description                         |
| :----------- | :------------------ | :---------------------------------- |
| `geohash`    | `string`            | Geohash to convert to Point Feature |
| `properties` | `GeoJsonProperties` | -                                   |

#### Returns

`Feature`<`Point`\>

The geohash centroid as a Point Feature

#### Defined in

[index.ts:45](https://github.com/alrico88/geohash-to-geojson/blob/master/src/index.ts#L45)

---

### geohashToPolygonFeature

▸ **geohashToPolygonFeature**(`geohash`, `properties?`): `Feature`<`Polygon`\>

Converts geohash to polygon Feature

**`export`**

#### Parameters

| Name         | Type                | Description                           |
| :----------- | :------------------ | :------------------------------------ |
| `geohash`    | `string`            | Geohash to convert to Polygon Feature |
| `properties` | `GeoJsonProperties` | -                                     |

#### Returns

`Feature`<`Polygon`\>

#### Defined in

[index.ts:15](https://github.com/alrico88/geohash-to-geojson/blob/master/src/index.ts#L15)

---

### geohashToPolygonGeometry

▸ **geohashToPolygonGeometry**(`geohash`): `Polygon`

Converts geohash to polygon Geometry

**`export`**

#### Parameters

| Name      | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `geohash` | `string` | Geohash to get as Polygon Geometry |

#### Returns

`Polygon`

The Polygon Geometry representing the geohash

#### Defined in

[index.ts:33](https://github.com/alrico88/geohash-to-geojson/blob/master/src/index.ts#L33)

---

### geohashesToFeatureCollection

▸ **geohashesToFeatureCollection**(`hashes`): `FeatureCollection`

Converts array of geohashes to GeoJSON FeatureCollection

**`export`**

#### Parameters

| Name     | Type       | Description                              |
| :------- | :--------- | :--------------------------------------- |
| `hashes` | `string`[] | Geohashes to wrap into FeatureCollection |

#### Returns

`FeatureCollection`

FeatureCollection with each geohash as a Polygon Feature inside

#### Defined in

[index.ts:125](https://github.com/alrico88/geohash-to-geojson/blob/master/src/index.ts#L125)

---

### wrapAsFeatureCollection

▸ **wrapAsFeatureCollection**(`featuresArray`): `FeatureCollection`

Helper function to wrap geohash features converted using geohashToPolygonFeature in a FeatureCollection

**`export`**

#### Parameters

| Name            | Type                                          | Description                                         |
| :-------------- | :-------------------------------------------- | :-------------------------------------------------- |
| `featuresArray` | `Feature`<`Geometry`, `GeoJsonProperties`\>[] | Features array to wrap inside the FeatureCollection |

#### Returns

`FeatureCollection`

FeatureCollection wrapping the Features

#### Defined in

[index.ts:114](https://github.com/alrico88/geohash-to-geojson/blob/master/src/index.ts#L114)
