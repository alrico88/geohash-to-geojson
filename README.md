## Functions

<dl>
<dt><a href="#geohashToPolygon">geohashToPolygon(geohash)</a> ⇒ <code><a href="#PolygonFeature">PolygonFeature</a></code></dt>
<dd><p>Converts geohash to polygon Feature</p>
</dd>
<dt><a href="#geohashesToFeatureCollection">geohashesToFeatureCollection(hashes)</a> ⇒ <code><a href="#FeatureCollection">FeatureCollection</a></code></dt>
<dd><p>Converts array of geohashes to GeoJSON FeatureCollection</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#PolygonFeature">PolygonFeature</a></dt>
<dd></dd>
<dt><a href="#FeatureCollection">FeatureCollection</a></dt>
<dd></dd>
</dl>

<a name="geohashToPolygon"></a>

## geohashToPolygon(geohash) ⇒ [<code>PolygonFeature</code>](#PolygonFeature)
Converts geohash to polygon Feature

**Kind**: global function  

| Param | Type |
| --- | --- |
| geohash | <code>string</code> |

<a name="geohashesToFeatureCollection"></a>

## geohashesToFeatureCollection(hashes) ⇒ [<code>FeatureCollection</code>](#FeatureCollection)
Converts array of geohashes to GeoJSON FeatureCollection

**Kind**: global function  

| Param | Type |
| --- | --- |
| hashes | <code>Array.&lt;string&gt;</code> |

<a name="PolygonFeature"></a>

## PolygonFeature
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| type | <code>&#x27;Feature&#x27;</code> |
| geometry | <code>Object</code> |
| properties | <code>object</code> |

<a name="FeatureCollection"></a>

## FeatureCollection
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| type | <code>&#x27;FeatureCollection&#x27;</code> |
| features | [<code>Array.&lt;PolygonFeature&gt;</code>](#PolygonFeature) |

