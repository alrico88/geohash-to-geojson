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

[geohash-to-geojson](README.md) / Exports

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

Ƭ **CircleOptions**: _object_

#### Type declaration:

| Name     | Type       |
| :------- | :--------- |
| `ruler`? | CheapRuler |
| `steps`? | _number_   |

## Functions

### geohashToCircleFeature

▸ **geohashToCircleFeature**(`geohash`: _string_, `percentage`: _number_, `properties?`: GeoJsonProperties, `options?`: [_CircleOptions_](#circleoptions)): _Feature_<Polygon\>

Converts geohash to a circle Feature, based on % of the size desired

#### Parameters:

| Name         | Type                              | Description                                             |
| :----------- | :-------------------------------- | :------------------------------------------------------ |
| `geohash`    | _string_                          | Geohash to convert to circle                            |
| `percentage` | _number_                          | Percentage of the geohash area to cover with the circle |
| `properties` | GeoJsonProperties                 | -                                                       |
| `options?`   | [_CircleOptions_](#circleoptions) | -                                                       |

**Returns:** _Feature_<Polygon\>

The geohash as a circle Polygon Feature

---

### geohashToCircleGeometry

▸ **geohashToCircleGeometry**(`geohash`: _string_, `percentage`: _number_, `options?`: [_CircleOptions_](#circleoptions)): Polygon

Converts geohash to a circle Polygon Geometry, based on % of the size desired

#### Parameters:

| Name         | Type                              | Description                                             |
| :----------- | :-------------------------------- | :------------------------------------------------------ |
| `geohash`    | _string_                          | Geohash to convert to circle                            |
| `percentage` | _number_                          | Percentage of the geohash area to cover with the circle |
| `options?`   | [_CircleOptions_](#circleoptions) | -                                                       |

**Returns:** Polygon

The geohash as a circle Polygon Geometry

---

### geohashToPointFeature

▸ **geohashToPointFeature**(`geohash`: _string_): _Feature_<Point\>

Converts geohash to point feature, for centroid coordinates

#### Parameters:

| Name      | Type     | Description                         |
| :-------- | :------- | :---------------------------------- |
| `geohash` | _string_ | Geohash to convert to Point Feature |

**Returns:** _Feature_<Point\>

The geohash centroid as a Point Feature

---

### geohashToPolygonFeature

▸ **geohashToPolygonFeature**(`geohash`: _string_, `properties?`: GeoJsonProperties): _Feature_<Polygon\>

Converts geohash to polygon Feature

#### Parameters:

| Name         | Type              | Description                           |
| :----------- | :---------------- | :------------------------------------ |
| `geohash`    | _string_          | Geohash to convert to Polygon Feature |
| `properties` | GeoJsonProperties | -                                     |

**Returns:** _Feature_<Polygon\>

---

### geohashToPolygonGeometry

▸ **geohashToPolygonGeometry**(`geohash`: _string_): Polygon

Converts geohash to polygon Geometry

#### Parameters:

| Name      | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `geohash` | _string_ | Geohash to get as Polygon Geometry |

**Returns:** Polygon

The Polygon Geometry representing the geohash

---

### geohashesToFeatureCollection

▸ **geohashesToFeatureCollection**(`hashes`: _string_[]): FeatureCollection

Converts array of geohashes to GeoJSON FeatureCollection

#### Parameters:

| Name     | Type       | Description                              |
| :------- | :--------- | :--------------------------------------- |
| `hashes` | _string_[] | Geohashes to wrap into FeatureCollection |

**Returns:** FeatureCollection

FeatureCollection with each geohash as a Polygon Feature inside

---

### wrapAsFeatureCollection

▸ **wrapAsFeatureCollection**(`featuresArray`: Feature[]): FeatureCollection

Helper function to wrap geohash features converted using geohashToPolygonFeature in a FeatureCollection

#### Parameters:

| Name            | Type      | Description                                         |
| :-------------- | :-------- | :-------------------------------------------------- |
| `featuresArray` | Feature[] | Features array to wrap inside the FeatureCollection |

**Returns:** FeatureCollection

FeatureCollection wrapping the Features
