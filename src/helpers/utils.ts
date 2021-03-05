import distance from '@turf/distance';
import {Coord, Feature, Polygon} from '@turf/helpers';
import {GeoJsonProperties} from 'geojson';
import {getGeohashAsLatLon} from './geohash';
import circle from '@turf/circle';

/**
 * Gets distance between points in meters
 *
 * @export
 * @param  {Coord} pointA First point
 * @param  {Coord} pointB Second point
 * @return {number} Distance in meters
 */
export function getDistance(pointA: Coord, pointB: Coord): number {
    return distance(pointA, pointB, {
        units: 'meters',
    });
}

/**
 * Creates a circle polygon Feature from a Geohash
 *
 * @export
 * @param  {string} geohash Geohash to turn into circle
 * @param  {number} radius Radius of the circle
 * @param  {GeoJsonProperties} [properties={}] GeoJSON properties to embed in the resulting Feature
 * @return {Feature<Polygon>} The geohash as a circle
 */
export function createCircleFromGeohash(geohash: string, radius: number, properties: GeoJsonProperties = {}): Feature<Polygon> {
    const {latitude, longitude} = getGeohashAsLatLon(geohash);

    return circle([longitude, latitude], radius, {
        units: 'meters',
        properties,
    });
}
