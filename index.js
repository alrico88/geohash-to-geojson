const ghash = require('ngeohash');
const bboxPolygon = require('@turf/bbox-polygon').default;
const {featureCollection, point} = require('@turf/helpers');

/**
 * @typedef PolygonFeature
 * @property {'Feature'} type
 * @property {{type: 'Polygon', geometry: object}} geometry
 * @property {object} properties
 */

/**
 * @typedef PointFeature
 * @property {'Feature'} type
 * @property {{type: 'Point', geometry: object}} geometry
 * @property {object} properties
 */

/**
 * @typedef PolygonGeometry
 * @property {number[]} coordinates
 */

/**
 * @typedef FeatureCollection
 * @property {'FeatureCollection'} type
 * @property {PolygonFeature[]} features
 */

/**
 * Converts geohash to polygon Feature
 * @param {string} geohash
 * @param {object} [properties={}] properties to embed to each feature
 * @returns {PolygonFeature}
 */
function geohashToPolygonFeature(geohash, properties = {}) {
  const [minlat, minlon, maxlat, maxlon] = ghash.decode_bbox(geohash);
  return bboxPolygon([minlon, minlat, maxlon, maxlat], {
    properties,
  });
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
 * @returns {PointFeature}
 */
function geohashToPointFeature(geohash) {
  const {latitude, longitude} = ghash.decode(geohash);
  return point([longitude, latitude], {geohash});
}

/**
 * Converts array of geohashes to GeoJSON FeatureCollection
 * @param {string[]} hashes
 * @returns {FeatureCollection}
 */
function geohashesToFeatureCollection(hashes) {
  return featureCollection(hashes.map((hash) => geohashToPolygonFeature(hash)));
}

/**
 * Helper function to wrap geohash features converted using geohashToPolygonFeature in a FeatureCollection
 *
 * @param {PolygonFeature} featuresArray
 * @returns {FeatureCollection}
 */
function wrapAsFeatureCollection(featuresArray) {
  return featureCollection(featuresArray);
}

module.exports.geohashToPolygonFeature = geohashToPolygonFeature;
module.exports.geohashToPointFeature = geohashToPointFeature;
module.exports.geohashToPolygonGeometry = geohashToPolygonGeometry;
module.exports.geohashesToFeatureCollection = geohashesToFeatureCollection;
module.exports.wrapAsFeatureCollection = wrapAsFeatureCollection;
