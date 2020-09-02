const {
  geohashToPolygonFeature,
  geohashToPolygonGeometry,
  geohashesToFeatureCollection,
  geohashToPointFeature,
} = require('./index');

test('Same geohash should always return same GeoJSON Feature', () => {
  expect(geohashToPolygonFeature('ezjmgwm')).toStrictEqual({
    type: 'Feature',
    bbox: [
      -3.706512451171875,
      40.420074462890625,
      -3.70513916015625,
      40.42144775390625,
    ],
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

test('Same geohash should always return same GeoJSON Point Feature', () => {
  expect(geohashToPointFeature('ezjmgwm')).toStrictEqual({
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

test('Same geohash should always return same GeoJSON Geometry', () => {
  expect(geohashToPolygonGeometry('ezjmgwm')).toStrictEqual({
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

test('Same array of geohashes should always return same GeoJSON FeatureCollection', () => {
  expect(geohashesToFeatureCollection(['ezjmgwm', 'ezjmgwn'])).toStrictEqual({
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        bbox: [
          -3.706512451171875,
          40.420074462890625,
          -3.70513916015625,
          40.42144775390625,
        ],
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
        bbox: [
          -3.70513916015625,
          40.418701171875,
          -3.703765869140625,
          40.420074462890625,
        ],
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
