import CheapRuler from 'cheap-ruler';
import {Feature, FeatureCollection, GeoJsonProperties, Point, Polygon} from 'geojson';
import {getGeohashAsBBox, getGeohashAsLatLon} from './helpers/geohash';
import {polygon, featureCollection, point} from './helpers/geojson';
import {createCheapRuler, createCircleFromGeohash, getDistance} from './helpers/utils';

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

export type CircleOptions = {
    ruler?: CheapRuler;
    steps?: number;
};

/**
 * Converts geohash to a circle Feature, based on % of the size desired
 *
 * @export
 * @param  {string} geohash Geohash to convert to circle
 * @param  {number} percentage Percentage of the geohash area to cover with the circle
 * @param  {GeoJsonProperties} [properties={}] Properties to embed to the resulting feature
 * @param  {CircleOptions} [options] Options for circle rendering
 * @param  {CheapRuler} [options.ruler] A CheapRuler instance to make computing distances faster
 * @param  {number} [options.steps=32] Number of steps for converting circle to polygon
 * @return {Feature<Polygon>} The geohash as a circle Polygon Feature
 */
export function geohashToCircleFeature(geohash: string, percentage: number, properties: GeoJsonProperties = {}, options?: CircleOptions): Feature<Polygon> {
    const [minLon, minLat, maxLon, maxLat] = getGeohashAsBBox(geohash);
    const sw = [minLon, minLat];
    const se = [maxLon, minLat];
    const nw = [minLon, maxLat];

    let rulerToUse = options?.ruler;

    if (!rulerToUse) {
        rulerToUse = createCheapRuler(minLat);
    }

    const minDistance = Math.min(getDistance(sw, se, rulerToUse), getDistance(sw, nw, rulerToUse));
    const half = 2;
    const radiusDistance = minDistance / half;
    const total = 100;
    const radiusCalc = radiusDistance * (percentage / total);

    return createCircleFromGeohash(geohash, radiusCalc, properties, options?.steps);
}

/**
 * Converts geohash to a circle Polygon Geometry, based on % of the size desired
 *
 * @export
 * @param  {string} geohash Geohash to convert to circle
 * @param  {number} percentage Percentage of the geohash area to cover with the circle
 * @param  {CircleOptions} [options] Options for circle rendering
 * @param  {CheapRuler} [options.ruler] A CheapRuler instance to make computing distances faster
 * @param  {number} [options.steps=32] Number of steps for converting circle to polygon
 * @return {Feature<Polygon>} The geohash as a circle Polygon Geometry
 */
export function geohashToCircleGeometry(geohash: string, percentage: number, options?: CircleOptions): Polygon {
    return geohashToCircleFeature(geohash, percentage, options).geometry;
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
