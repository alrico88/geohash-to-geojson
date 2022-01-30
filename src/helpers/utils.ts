import {GeoJsonProperties, Position, Feature, Polygon} from 'geojson';
import {getGeohashAsLatLon} from './geohash';
import CheapRuler, {Point} from 'cheap-ruler';
import {polygon} from './geojson';

const defaultCircleSteps = 32;
const startBearing = -360;

export function createCheapRuler(latitude: number): CheapRuler {
    return new CheapRuler(latitude, 'meters');
}

/**
 * Gets distance between points in meters
 *
 * @export
 * @param  {Position} pointA First point
 * @param  {Position} pointB Second point
 * @return {number} Distance in meters
 */
export function getDistance(pointA: Position, pointB: Position, ruler: CheapRuler): number {
    return ruler.distance(pointA as Point, pointB as Point);
}

/**
 * Creates a circle polygon Feature from a Geohash
 *
 * @export
 * @param  {string} geohash Geohash to turn into circle
 * @param  {number} radius Radius of the circle
 * @param  {GeoJsonProperties} [properties={}] GeoJSON properties to embed in the resulting Feature
 * @param  {number} steps Number of coordinates for the circle
 * @return {Feature<Polygon>} The geohash as a circle
 */
export function createCircleFromGeohash(geohash: string, radius: number, properties: GeoJsonProperties = {}, steps = defaultCircleSteps): Feature<Polygon> {
    const {latitude, longitude} = getGeohashAsLatLon(geohash);

    const ruler = createCheapRuler(latitude);

    const coords: Position[] = [];

    for (let i = 0; i < steps; i++) {
        const bearing = i * startBearing / steps;
        coords.push(ruler.destination([longitude, latitude], radius, bearing));
    }

    coords.push(coords[0]);

    return polygon([coords], properties);
}
