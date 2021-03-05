import {point, polygon, featureCollection, Feature, Polygon, Point, FeatureCollection} from '@turf/helpers';
import {GeoJsonProperties} from 'geojson';
import {getGeohashAsBBox, getGeohashAsLatLon} from './helpers/geohash';
import {createCircleFromGeohash, getDistance} from './helpers/utils';

/**
 * Converts geohash to polygon Feature
 *
 * @export
 * @param {string} geohash Geohash to convert to Polygon Feature
 * @param {GeoJsonProperties} [properties={}] Properties to embed to the resulting feature
 * @returns {Feature<Polygon>}
 */
export function geohashToPolygonFeature(geohash: string, properties: GeoJsonProperties = {}): Feature<Polygon> {
    const [minLon, minLat, maxLon, maxLat] = getGeohashAsBBox(geohash);
    const sw = [minLon, minLat];
    const se = [maxLon, minLat];
    const nw = [minLon, maxLat];
    const ne = [maxLon, maxLat];
    const coordinates = [[sw, se, ne, nw, sw]];
    return polygon(coordinates, properties);
}

/**
 * Converts geohash to polygon Geometry
 *
 * @export
 * @param {string} geohash Geohash to get as Polygon Geometry
 * @returns {Polygon} The Polygon Geometry representing the geohash
 */
export function geohashToPolygonGeometry(geohash: string): Polygon {
    return geohashToPolygonFeature(geohash).geometry;
}

/**
 * Converts geohash to point feature, for centroid coordinates
 *
 * @export
 * @param {string} geohash Geohash to convert to Point Feature
 * @returns {Point} The geohash centroid as a Point Feature
 */
export function geohashToPointFeature(geohash: string): Feature<Point> {
    const {latitude, longitude} = getGeohashAsLatLon(geohash);

    return point([longitude, latitude], {geohash});
}

/**
 * Converts geohash to a circle Feature, based on % of the size desired
 *
 * @export
 * @param  {string} geohash Geohash to convert to circle
 * @param  {number} percentage Percentage of the geohash area to cover with the circle
 * @param  {GeoJsonProperties} [properties={}] Properties to embed to the resulting feature
 * @return {Feature<Polygon>} The geohash as a circle Polygon Feature
 */
export function geohashToCircleFeature(geohash: string, percentage: number, properties: GeoJsonProperties = {}): Feature<Polygon> {
    const [minLon, minLat, maxLon, maxLat] = getGeohashAsBBox(geohash);
    const sw = [minLon, minLat];
    const se = [maxLon, minLat];
    const nw = [minLon, maxLat];

    const minDistance = Math.min(getDistance(sw, se), getDistance(sw, nw));
    const half = 2;
    const radiusDistance = minDistance / half;
    const total = 100;
    const radiusCalc = radiusDistance * (percentage / total);

    return createCircleFromGeohash(geohash, radiusCalc, properties);
}

/**
 * Converts geohash to a circle Polygon Geometry, based on % of the size desired
 *
 * @export
 * @param  {string} geohash Geohash to convert to circle
 * @param  {number} percentage Percentage of the geohash area to cover with the circle
 * @return {Feature<Polygon>} The geohash as a circle Polygon Geometry
 */
export function geohashToCircleGeometry(geohash: string, percentage: number): Polygon {
    return geohashToCircleFeature(geohash, percentage).geometry;
}

/**
 * Helper function to wrap geohash features converted using geohashToPolygonFeature in a FeatureCollection
 *
 * @export
 * @param {Feature[]} featuresArray Features array to wrap inside the FeatureCollection
 * @returns {FeatureCollection} FeatureCollection wrapping the Features
 */
export function wrapAsFeatureCollection(featuresArray: Feature[]): FeatureCollection {
    return featureCollection(featuresArray);
}

/**
 * Converts array of geohashes to GeoJSON FeatureCollection
 *
 * @export
 * @param {string[]} hashes Geohashes to wrap into FeatureCollection
 * @returns {FeatureCollection} FeatureCollection with each geohash as a Polygon Feature inside
 */
export function geohashesToFeatureCollection(hashes: string[]): FeatureCollection {
    return wrapAsFeatureCollection(hashes.map((hash) => geohashToPolygonFeature(hash)));
}
