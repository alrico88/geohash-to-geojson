const ghash = require('ngeohash');
const bboxPolygon = require('@turf/bbox-polygon').default;
const {featureCollection} = require('@turf/helpers');

/**
 * @typedef PolygonFeature
 * @property {'Feature'} type
 * @property {{type: 'Polygon', geometry: object, properties: object}} geometry
 * @property {object} properties
 */

/**
 * @typedef FeatureCollection
 * @property {'FeatureCollection'} type
 * @property {PolygonFeature[]} features
 */

/**
 * Converts geohash to polygon Feature
 * @param {string} geohash
 * @returns {PolygonFeature}
 */
function geohashToPolygon(geohash) {
  const [minlat, minlon, maxlat, maxlon] = ghash.decode_bbox(geohash);
  return bboxPolygon([minlon, minlat, maxlon, maxlat]);
}

/**
 * Converts array of geohashes to GeoJSON FeatureCollection
 * @param {string[]} hashes
 * @returns {FeatureCollection}
 */
function geohashesToFeatureCollection(hashes) {
  return featureCollection(hashes.map((hash) => geohashToPolygon(hash)));
}

module.exports.geohashToPolygon = geohashToPolygon;
module.exports.geohashesToFeatureCollection = geohashesToFeatureCollection;
