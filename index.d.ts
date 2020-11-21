export type PolygonGeometry = {
    type: 'Polygon';
    coordinates: number[][][];
};
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
export function geohashToPolygonFeature(geohash: string, properties?: object): PolygonFeatureFromBBox;
/**
 * Converts geohash to point feature, for centroid coordinates
 *
 * @param {string} geohash
 * @returns {Point}
 */
export function geohashToPointFeature(geohash: string): Point;
/**
 * Converts geohash to polygon Geometry
 *
 * @param {string} geohash
 * @returns {PolygonGeometry}
 */
export function geohashToPolygonGeometry(geohash: string): PolygonGeometry;
/**
 * Converts array of geohashes to GeoJSON FeatureCollection
 * @param {string[]} hashes
 * @returns {FeatureCollection}
 */
export function geohashesToFeatureCollection(hashes: string[]): FeatureCollection;
/**
 * Helper function to wrap geohash features converted using geohashToPolygonFeature in a FeatureCollection
 *
 * @param {PolygonFeature} featuresArray
 * @returns {FeatureCollection}
 */
export function wrapAsFeatureCollection(featuresArray: any): FeatureCollection;
import { PolygonFeatureFromBBox } from "./geojson";
import { Point } from "./geojson";
import { FeatureCollection } from "./geojson";
export { PolygonFeatureFromBBox, Point, FeatureCollection };
