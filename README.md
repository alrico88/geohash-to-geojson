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

## Table of contents

### Functions

- [geohashToCircleFeature](#geohashtocirclefeature)
- [geohashToCircleGeometry](#geohashtocirclegeometry)
- [geohashToPointFeature](#geohashtopointfeature)
- [geohashToPolygonFeature](#geohashtopolygonfeature)
- [geohashToPolygonGeometry](#geohashtopolygongeometry)
- [geohashesToFeatureCollection](#geohashestofeaturecollection)
- [wrapAsFeatureCollection](#wrapasfeaturecollection)

## Functions

### geohashToCircleFeature

▸ **geohashToCircleFeature**(`geohash`: _string_, `percentage`: _number_, `properties?`: GeoJsonProperties): _Feature_<Polygon\>

Converts geohash to a circle Feature, based on % of the size desired

**`export`**

#### Parameters:

| Name         | Type              | Description                                             |
| :----------- | :---------------- | :------------------------------------------------------ |
| `geohash`    | _string_          | Geohash to convert to circle                            |
| `percentage` | _number_          | Percentage of the geohash area to cover with the circle |
| `properties` | GeoJsonProperties | -                                                       |

**Returns:** _Feature_<Polygon\>

The geohash as a circle Polygon Feature

Defined in: [index.ts:57](https://github.com/alrico88/geohash-to-geojson/blob/966a2a0/src/index.ts#L57)

---

### geohashToCircleGeometry

▸ **geohashToCircleGeometry**(`geohash`: _string_, `percentage`: _number_): Polygon

Converts geohash to a circle Polygon Geometry, based on % of the size desired

**`export`**

#### Parameters:

| Name         | Type     | Description                                             |
| :----------- | :------- | :------------------------------------------------------ |
| `geohash`    | _string_ | Geohash to convert to circle                            |
| `percentage` | _number_ | Percentage of the geohash area to cover with the circle |

**Returns:** Polygon

The geohash as a circle Polygon Geometry

Defined in: [index.ts:80](https://github.com/alrico88/geohash-to-geojson/blob/966a2a0/src/index.ts#L80)

---

### geohashToPointFeature

▸ **geohashToPointFeature**(`geohash`: _string_): _Feature_<Point\>

Converts geohash to point feature, for centroid coordinates

**`export`**

#### Parameters:

| Name      | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `geohash` | _string_ | Geohash to convert to Point Feature |

**Returns:** _Feature_<Point\>

The geohash centroid as a Point Feature

Defined in: [index.ts:42](https://github.com/alrico88/geohash-to-geojson/blob/966a2a0/src/index.ts#L42)

---

### geohashToPolygonFeature

▸ **geohashToPolygonFeature**(`geohash`: _string_, `properties?`: GeoJsonProperties): _Feature_<Polygon\>

Converts geohash to polygon Feature

**`export`**

#### Parameters:

| Name         | Type              | Description                           |
| :----------- | :---------------- | :------------------------------------ |
| `geohash`    | _string_          | Geohash to convert to Polygon Feature |
| `properties` | GeoJsonProperties | -                                     |

**Returns:** _Feature_<Polygon\>

Defined in: [index.ts:14](https://github.com/alrico88/geohash-to-geojson/blob/966a2a0/src/index.ts#L14)

---

### geohashToPolygonGeometry

▸ **geohashToPolygonGeometry**(`geohash`: _string_): Polygon

Converts geohash to polygon Geometry

**`export`**

#### Parameters:

| Name      | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `geohash` | _string_ | Geohash to get as Polygon Geometry |

**Returns:** Polygon

The Polygon Geometry representing the geohash

Defined in: [index.ts:31](https://github.com/alrico88/geohash-to-geojson/blob/966a2a0/src/index.ts#L31)

---

### geohashesToFeatureCollection

▸ **geohashesToFeatureCollection**(`hashes`: _string_[]): FeatureCollection

Converts array of geohashes to GeoJSON FeatureCollection

**`export`**

#### Parameters:

| Name     | Type       | Description                              |
| :------- | :--------- | :--------------------------------------- |
| `hashes` | _string_[] | Geohashes to wrap into FeatureCollection |

**Returns:** FeatureCollection

FeatureCollection with each geohash as a Polygon Feature inside

Defined in: [index.ts:102](https://github.com/alrico88/geohash-to-geojson/blob/966a2a0/src/index.ts#L102)

---

### wrapAsFeatureCollection

▸ **wrapAsFeatureCollection**(`featuresArray`: Feature[]): FeatureCollection

Helper function to wrap geohash features converted using geohashToPolygonFeature in a FeatureCollection

**`export`**

#### Parameters:

| Name            | Type      | Description                                         |
| :-------------- | :-------- | :-------------------------------------------------- |
| `featuresArray` | Feature[] | Features array to wrap inside the FeatureCollection |

**Returns:** FeatureCollection

FeatureCollection wrapping the Features

Defined in: [index.ts:91](https://github.com/alrico88/geohash-to-geojson/blob/966a2a0/src/index.ts#L91)
