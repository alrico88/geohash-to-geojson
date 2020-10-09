const {decode, decode_bbox} = require('ngeohash');
const {
  Point,
  FeatureCollection,
  PolygonFeatureFromBBox,
} = require('./geojson');

/**
 * @typedef PolygonGeometry
 * @property {'Polygon'} type
 * @property {number[][][]} coordinates
 */

/**
 * Converts geohash to polygon Feature
 * @param {string} geohash
 * @param {object} [properties={}] properties to embed to each feature
 * @returns {PolygonFeatureFromBBox}
 */
function geohashToPolygonFeature(geohash, properties = {}) {
  const [minlat, minlon, maxlat, maxlon] = decode_bbox(geohash);
  return new PolygonFeatureFromBBox(
    [minlon, minlat, maxlon, maxlat],
    properties
  );
}

/**
 * Converts geohash to polygon Geometry
 *
 * @param {string} geohash
 * @returns {PolygonGeometry}
 */
function geohashToPolygonGeometry(geohash) {
  return geohashToPolygonFeature(geohash).geometry;
}

/**
 * Converts geohash to point feature, for centroid coordinates
 *
 * @param {string} geohash
 * @returns {Point}
 */
function geohashToPointFeature(geohash) {
  const {latitude, longitude} = decode(geohash);
  return new Point(latitude, longitude, {geohash});
}

/**
 * Converts array of geohashes to GeoJSON FeatureCollection
 * @param {string[]} hashes
 * @returns {FeatureCollection}
 */
function geohashesToFeatureCollection(hashes) {
  return new FeatureCollection(hashes.map((hash) => geohashToPolygonFeature(hash)));
}

/**
 * Helper function to wrap geohash features converted using geohashToPolygonFeature in a FeatureCollection
 *
 * @param {PolygonFeature} featuresArray
 * @returns {FeatureCollection}
 */
function wrapAsFeatureCollection(featuresArray) {
  return new FeatureCollection(featuresArray);
}

module.exports.geohashToPolygonFeature = geohashToPolygonFeature;
module.exports.geohashToPointFeature = geohashToPointFeature;
module.exports.geohashToPolygonGeometry = geohashToPolygonGeometry;
module.exports.geohashesToFeatureCollection = geohashesToFeatureCollection;
module.exports.wrapAsFeatureCollection = wrapAsFeatureCollection;
module.exports.PolygonFeatureFromBBox = PolygonFeatureFromBBox;
module.exports.Point = Point;
module.exports.FeatureCollection = FeatureCollection;
