/* eslint-disable @typescript-eslint/no-magic-numbers */

import {
  geohashToPolygonFeature,
  geohashToPolygonGeometry,
  geohashesToFeatureCollection,
  geohashToPointFeature, geohashToCircleFeature,
} from '../src';
import {getGeohashAsBBox} from '../src/helpers/geohash';
import bbox from '@turf/bbox';
import {describe, it, expect} from 'vitest';

describe('Geohash to polygon shapes methods', () => {
  it('Same geohash should always return same GeoJSON Feature', () => {
    expect(geohashToPolygonFeature('ezjmgwm')).toEqual({
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-3.706512451171875, 40.420074462890625],
            [-3.70513916015625, 40.420074462890625],
            [-3.70513916015625, 40.42144775390625],
            [-3.706512451171875, 40.42144775390625],
            [-3.706512451171875, 40.420074462890625],
          ],
        ],
      },
    });
  });

  it('Same geohash should always return same GeoJSON Point Feature', () => {
    expect(geohashToPointFeature('ezjmgwm')).toEqual({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-3.7058258056640625, 40.42076110839844],
      },
      properties: {
        geohash: 'ezjmgwm',
      },
    });
  });

  it('Same geohash should always return same GeoJSON Geometry', () => {
    expect(geohashToPolygonGeometry('ezjmgwm')).toEqual({
      type: 'Polygon',
      coordinates: [
        [
          [-3.706512451171875, 40.420074462890625],
          [-3.70513916015625, 40.420074462890625],
          [-3.70513916015625, 40.42144775390625],
          [-3.706512451171875, 40.42144775390625],
          [-3.706512451171875, 40.420074462890625],
        ],
      ],
    });
  });

  it('Same array of geohashes should always return same GeoJSON FeatureCollection', () => {
    expect(geohashesToFeatureCollection(['ezjmgwm', 'ezjmgwn'])).toEqual({
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [-3.706512451171875, 40.420074462890625],
                [-3.70513916015625, 40.420074462890625],
                [-3.70513916015625, 40.42144775390625],
                [-3.706512451171875, 40.42144775390625],
                [-3.706512451171875, 40.420074462890625],
              ],
            ],
          },
        },
        {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [-3.70513916015625, 40.418701171875],
                [-3.703765869140625, 40.418701171875],
                [-3.703765869140625, 40.420074462890625],
                [-3.70513916015625, 40.420074462890625],
                [-3.70513916015625, 40.418701171875],
              ],
            ],
          },
        },
      ],
    });
  });
});

describe('Geohash to circle shape methods', () => {
  const testHash = 'ezjmgwm';
  const geohashAsBBox = getGeohashAsBBox(testHash);
  const [minHashLon, minHashLat, maxHashLon, maxHashLat] = geohashAsBBox;

  it('Asking for a circle inside of a geohash, with a percentage less than 100, should not exceed the BBox of the geohash', () => {
    const geohashAsCircle = geohashToCircleFeature(testHash, 80);
    const [minCircleLon, minCircleLat, maxCircleLon, maxCircleLat] = bbox(geohashAsCircle);
    const conditions = [
        minCircleLon > minHashLon,
        minCircleLat > minHashLat,
        maxCircleLon < maxHashLon,
        maxCircleLat < maxHashLat,
    ];
    expect(conditions.includes(false)).toBe(false);
  });
});
