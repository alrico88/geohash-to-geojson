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

- [geohashToPointFeature](#geohashtopointfeature)
- [geohashToPolygonFeature](#geohashtopolygonfeature)
- [geohashToPolygonGeometry](#geohashtopolygongeometry)
- [geohashesToFeatureCollection](#geohashestofeaturecollection)
- [wrapAsFeatureCollection](#wrapasfeaturecollection)

## Functions

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

Defined in: index.ts:41

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

Defined in: index.ts:13

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

Defined in: index.ts:30

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

Defined in: index.ts:65

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

Defined in: index.ts:54
