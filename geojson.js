class Feature {

  /**
   * Creates a new Feature
   * @param {object} geometry
   * @param {object} properties
   */
  constructor(geometry, properties) {
    this.type = 'Feature';
    this.geometry = geometry;
    this.properties = properties;
  }

  /**
   * Returns plain object representation
   * @return {{geometry: (*|{type: string, coordinates: number[]}|{type: "Point", coordinates: number[]}|{type: string, coordinates: number[][][]}|{type: "Polygon", coordinates: number[][][]}), type, properties: any}}
   * @memberof Feature
   */
  toPlain() {
    return {
      type: this.type,
      geometry: this.geometry,
      properties: this.properties,
    };
  }
}

/**
 * Point class
 *
 * @class Point
 */
class Point extends Feature {

  /**
   * Creates an instance of Point.
   * @param {number} latitude
   * @param {number} longitude
   * @param {object} [properties={}]
   * @memberof Point
   */
  constructor(latitude, longitude, properties = {}) {
    super(
      {
        type: 'Point',
        coordinates: [longitude, latitude],
      },
      properties
    );
  }
}

/**
 * PolygonFromBBox class
 *
 * @class PolygonFromBBox
 */
class PolygonFeatureFromBBox extends Feature {

  /**
   * Creates an instance of PolygonFeatureFromBBox.
   * @param {number[]} bbox
   * @param {object} [properties={}]
   * @memberof PolygonFeatureFromBBox
   */
  constructor(bbox, properties = {}) {
    super(
      {
        type: 'Polygon',
        coordinates: (() => {
          const [minLon, minLat, maxLon, maxLat] = bbox;
          const sw = new Point(minLat, minLon).geometry.coordinates;
          const nw = new Point(maxLat, minLon).geometry.coordinates;
          const ne = new Point(maxLat, maxLon).geometry.coordinates;
          const se = new Point(minLat, maxLon).geometry.coordinates;
          return [[sw, se, ne, nw, sw]];
        })(),
      },
      properties
    );
  }
}

class FeatureCollection {

  /**
   * Creates an instance of FeatureCollection.
   * @param {object[]} [features=[]]
   * @memberof FeatureCollection
   */
  constructor(features = []) {
    this.type = 'FeatureCollection';
    this.features = features;
  }

  /**
   * Gets content as plain object
   *
   * @returns {{type: 'FeatureCollection', features: object[]}}
   * @memberof FeatureCollection
   */
  toPlain() {
    return {
      type: this.type,
      features: this.features,
    };
  }
}

module.exports = {
  Point,
  PolygonFeatureFromBBox,
  FeatureCollection,
};
