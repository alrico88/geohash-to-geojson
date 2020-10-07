/**
 * Point class
 *
 * @class Point
 */
class Point {

  /**
   * Creates an instance of Point.
   * @param {number} latitude
   * @param {number} longitude
   * @param {object} [properties={}]
   * @memberof Point
   */
  constructor(latitude, longitude, properties = {}) {
    this.type = 'Feature';
    this.geometry = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };
    this.properties = properties;
  }

  /**
   * Gets content as plain object
   *
   * @returns {{type: 'Feature', geometry: {type: 'Point', coordinates: number[]}, properties: object}}
   * @memberof Point
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
 * PolygonFromBBox class
 *
 * @class PolygonFromBBox
 */
class PolygonFeatureFromBBox {

  /**
   * Creates an instance of PolygonFeatureFromBBox.
   * @param {number[]} bbox
   * @param {object} [properties={}]
   * @memberof PolygonFeatureFromBBox
   */
  constructor(bbox, properties = {}) {
    this.type = 'Feature';
    this.properties = properties;
    this.geometry = {
      type: 'Polygon',
      coordinates: (() => {
        const [minLon, minLat, maxLon, maxLat] = bbox;
        const sw = new Point(minLat, minLon).geometry.coordinates;
        const nw = new Point(maxLat, minLon).geometry.coordinates;
        const ne = new Point(maxLat, maxLon).geometry.coordinates;
        const se = new Point(minLat, maxLon).geometry.coordinates;
        return [[sw, se, ne, nw, sw]];
      })(),
    };
  }

  /**
   * Gets content as plain object
   *
   * @returns {{type: 'Feature', geometry: {type: 'Polygon', coordinates: number[][][]}, properties: object}}
   * @memberof PolygonFeatureFromBBox
   */
  toPlain() {
    return {
      type: this.type,
      geometry: this.geometry,
      properties: this.properties,
    };
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
   * @returns {{type: 'FeatureCollection', features: object[]}
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
