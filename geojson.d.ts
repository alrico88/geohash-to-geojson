/**
 * Point class
 *
 * @class Point
 */
export class Point {
    /**
     * Creates an instance of Point.
     * @param {number} latitude
     * @param {number} longitude
     * @param {object} [properties={}]
     * @memberof Point
     */
    constructor(latitude: number, longitude: number, properties?: object);
    type: string;
    geometry: {
        type: string;
        coordinates: number[];
    };
    properties: any;
    /**
     * Gets content as plain object
     *
     * @returns {{type: 'Feature', geometry: {type: 'Point', coordinates: number[]}, properties: object}}
     * @memberof Point
     */
    toPlain(): {
        type: 'Feature';
        geometry: {
            type: 'Point';
            coordinates: number[];
        };
        properties: object;
    };
}
/**
 * PolygonFromBBox class
 *
 * @class PolygonFromBBox
 */
export class PolygonFeatureFromBBox {
    /**
     * Creates an instance of PolygonFeatureFromBBox.
     * @param {number[]} bbox
     * @param {object} [properties={}]
     * @memberof PolygonFeatureFromBBox
     */
    constructor(bbox: number[], properties?: object);
    type: string;
    properties: any;
    geometry: {
        type: string;
        coordinates: number[][][];
    };
    /**
     * Gets content as plain object
     *
     * @returns {{type: 'Feature', geometry: {type: 'Polygon', coordinates: number[][][]}, properties: object}}
     * @memberof PolygonFeatureFromBBox
     */
    toPlain(): {
        type: 'Feature';
        geometry: {
            type: 'Polygon';
            coordinates: number[][][];
        };
        properties: object;
    };
}
export class FeatureCollection {
    /**
     * Creates an instance of FeatureCollection.
     * @param {object[]} [features=[]]
     * @memberof FeatureCollection
     */
    constructor(features?: object[]);
    type: string;
    features: any[];
    /**
     * Gets content as plain object
     *
     * @returns {{type: 'FeatureCollection', features: object[]}
     * @memberof FeatureCollection
     */
    toPlain(): {
        type: 'FeatureCollection';
        features: object[];
    };
}
