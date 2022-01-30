import ngeohash from 'ngeohash';

/**
 * Decodes geohash as a BBox
 *
 * @export
 * @param  {string} geohash Geohash to get BBox of
 * @return {GeographicBoundingBox} The resulting BBox as [minLon, minLat, maxLon, maxLat]
 */
export function getGeohashAsBBox(geohash: string): ngeohash.GeographicBoundingBox {
  const [minLat, minLon, maxLat, maxLon] = ngeohash.decode_bbox(geohash);

  return [minLon, minLat, maxLon, maxLat];
}

/**
 * Decodes geohash into latitude, longitude
 *
 * @export
 * @param  {string} geohash Geohash to obtain centroid of
 * @return {{latitude: number, longitude: number}} The lat lon object
 */
export function getGeohashAsLatLon(geohash: string): {latitude: number; longitude: number} {
  return ngeohash.decode(geohash);
}
