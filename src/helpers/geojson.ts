import {Feature, FeatureCollection, GeoJsonProperties, Geometry, Point, Polygon, Position} from 'geojson';

/**
 * Creates a GeoJSON FeatureCollection
 *
 * @export
 * @param {Feature[]} features
 * @return {FeatureCollection}
 */
export function featureCollection(features: Feature[]): FeatureCollection {
  return {
    type: 'FeatureCollection',
    features,
  };
}

/**
 * Creates a GeoJSON Feature
 *
 * @export
 * @param {Geometry} geometry
 * @param {GeoJsonProperties} properties
 * @return {Feature}
 */
export function feature(geometry: Geometry, properties: GeoJsonProperties): Feature {
  return {
    type: 'Feature',
    geometry,
    properties,
  };
}

/**
 * Creates a GeoJSON Polygon Feature
 *
 * @export
 * @param {Position[][]} coordinates
 * @param {GeoJsonProperties} properties
 * @return {Feature<Polygon>}
 */
export function polygon(coordinates: Position[][], properties: GeoJsonProperties): Feature<Polygon> {
  return feature({
    type: 'Polygon',
    coordinates,
  }, properties) as Feature<Polygon>;
}

/**
 * Creates a GeoJSON Point Feature
 *
 * @export
 * @param {Position} coordinates
 * @param {GeoJsonProperties} properties
 * @return {Feature<Point>}
 */
export function point(coordinates: Position, properties: GeoJsonProperties): Feature<Point> {
  return feature({
    type: 'Point',
    coordinates,
  }, properties) as Feature<Point>;
}
