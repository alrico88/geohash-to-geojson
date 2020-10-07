## Functions

<dl>
<dt><a href="#geohashToPolygonFeature">geohashToPolygonFeature(geohash, [properties])</a> ⇒ <code>PolygonFeatureFromBBox</code></dt>
<dd><p>Converts geohash to polygon Feature</p>
</dd>
<dt><a href="#geohashToPolygonGeometry">geohashToPolygonGeometry(geohash)</a> ⇒ <code><a href="#PolygonGeometry">PolygonGeometry</a></code></dt>
<dd><p>Converts geohash to polygon Geometry</p>
</dd>
<dt><a href="#geohashToPointFeature">geohashToPointFeature(geohash)</a> ⇒ <code>Point</code></dt>
<dd><p>Converts geohash to point feature, for centroid coordinates</p>
</dd>
<dt><a href="#geohashesToFeatureCollection">geohashesToFeatureCollection(hashes)</a> ⇒ <code>FeatureCollection</code></dt>
<dd><p>Converts array of geohashes to GeoJSON FeatureCollection</p>
</dd>
<dt><a href="#wrapAsFeatureCollection">wrapAsFeatureCollection(featuresArray)</a> ⇒ <code>FeatureCollection</code></dt>
<dd><p>Helper function to wrap geohash features converted using geohashToPolygonFeature in a FeatureCollection</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#PolygonGeometry">PolygonGeometry</a></dt>
<dd></dd>
</dl>

<a name="geohashToPolygonFeature"></a>

## geohashToPolygonFeature(geohash, [properties]) ⇒ <code>PolygonFeatureFromBBox</code>

Converts geohash to polygon Feature

**Kind**: global function

| Param        | Type                | Default         | Description                         |
| ------------ | ------------------- | --------------- | ----------------------------------- |
| geohash      | <code>string</code> |                 |                                     |
| [properties] | <code>object</code> | <code>{}</code> | properties to embed to each feature |

<a name="geohashToPolygonGeometry"></a>

## geohashToPolygonGeometry(geohash) ⇒ [<code>PolygonGeometry</code>](#PolygonGeometry)

Converts geohash to polygon Geometry

**Kind**: global function

| Param   | Type                |
| ------- | ------------------- |
| geohash | <code>string</code> |

<a name="geohashToPointFeature"></a>

## geohashToPointFeature(geohash) ⇒ <code>Point</code>

Converts geohash to point feature, for centroid coordinates

**Kind**: global function

| Param   | Type                |
| ------- | ------------------- |
| geohash | <code>string</code> |

<a name="geohashesToFeatureCollection"></a>

## geohashesToFeatureCollection(hashes) ⇒ <code>FeatureCollection</code>

Converts array of geohashes to GeoJSON FeatureCollection

**Kind**: global function

| Param  | Type                              |
| ------ | --------------------------------- |
| hashes | <code>Array.&lt;string&gt;</code> |

<a name="wrapAsFeatureCollection"></a>

## wrapAsFeatureCollection(featuresArray) ⇒ <code>FeatureCollection</code>

Helper function to wrap geohash features converted using geohashToPolygonFeature in a FeatureCollection

**Kind**: global function

| Param         | Type                        |
| ------------- | --------------------------- |
| featuresArray | <code>PolygonFeature</code> |

<a name="PolygonGeometry"></a>

## PolygonGeometry

**Kind**: global typedef  
**Properties**

| Name        | Type                                                          |
| ----------- | ------------------------------------------------------------- |
| type        | <code>&#x27;Polygon&#x27;</code>                              |
| coordinates | <code>Array.&lt;Array.&lt;Array.&lt;number&gt;&gt;&gt;</code> |
