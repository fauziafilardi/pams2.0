(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d208143"],{a2ea:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content-app-form__body form-process"},[r("div",[e._v("\n    Current selection: "+e._s(e.selectedFeatures)+"\n  ")]),r("div",[r("b-form-select",{staticClass:"mt-3",attrs:{options:e.options,size:"sm"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),0===e.drawnFeatures.length?r("div",[e._v("\n      Draw point, line, polygon, circle to select features first\n  ")]):r("div",[r("button",{on:{click:e.clear}},[e._v("Clear All")])]),r("vl-map",{ref:"map",on:{created:e.mapCreated}},[r("vl-view",{ref:"mapView",attrs:{zoom:e.zoom,center:e.center},on:{"update:zoom":function(t){e.zoom=t},"update:center":function(t){e.center=t}}}),r("vl-layer-image",{attrs:{id:"static"}},[r("vl-source-image-static",{attrs:{url:e.images.one,size:e.images.imageSize,extent:e.images.imageExtent}})],1),r("vl-layer-vector",{ref:"vectorLayer",attrs:{id:"my-features"}},[r("vl-source-vector",{ref:"vectorSource"},e._l(e.geojsonObject.features,function(t){return r("vl-feature",{key:t.id,attrs:{id:t.id,properties:t.properties}},[e._v("\n                    "+e._s(t.geometry.type)+"\n          "),r("vl-geom-polygon",{attrs:{coordinates:t.geometry.coordinates}}),r("vl-style-box",[r("vl-style-fill",{attrs:{color:"blue"}}),r("vl-style-stroke",{attrs:{color:"red"}})],1)],1)}))],1),r("vl-interaction-select",{ref:"selectInteraction",attrs:{features:e.selectedFeatures,filter:e.selectFilter},on:{"update:features":function(t){e.selectedFeatures=t}}}),r("vl-layer-vector",{attrs:{id:"draw-pane"}},[r("vl-source-vector",{ref:"drawSource",attrs:{ident:"draw-target",features:e.drawnFeatures},on:{"update:features":function(t){e.drawnFeatures=t}}})],1),null!=e.selected?r("vl-interaction-draw",{attrs:{source:"draw-target",type:e.selected}}):e._e(),r("vl-interaction-modify",{attrs:{source:"draw-target"}})],1)],1)},o=[],n=(r("6762"),r("2986"),{data:function(){return{selectedFeatures:[],drawnFeatures:[],selected:null,options:[{value:null,text:"Please select an option"},{value:"Point",text:"Point"},{value:"LineString",text:"Line String"},{value:"Polygon",text:"Polygon"},{value:"Circle",text:"Circle"}],geojsonObject:{type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:3857"}},features:[{id:4,type:"Feature",geometry:{type:"Polygon",coordinates:[[[-2e6,-1e6],[-1e6,1e6],[0,-1e6],[-2e6,-1e6]]]}}]},zoom:2,center:[0,0],imageProj:"xkcd-image",images:{one:"http://192.168.6.9/PAMSAPI/SaveLocation/SubPortfolio/001/FloorPlan/peta-kabupaten-lebak.jpg",imageSize:[1024,968],imageExtent:[0,0,1024,968]}}},mounted:function(){},methods:{mapCreated:function(e){var t=1024e4,r=968e4;this.images.imageExtent=[-t/2,-r/2,t/2,r/2]},selectFilter:function(e,t){var r=["my-features"];return null!=t&&r.includes(t.get("id"))},selectInDrawnPolygon:function(){var e=this,t=this.$refs.vectorSource.$source,r=this.$refs.drawSource.$source,a=r.getExtent();console.log(a),t.forEachFeatureIntersectingExtent(a,function(t){t=VueLayers.ol.writeGeoJsonFeature(t),e.selectedFeatures.push(t)}),this.drawnFeatures=[]},clear:function(){this.drawnFeatures=[]}}}),s=n,l=r("2877"),i=Object(l["a"])(s,a,o,!1,null,null,null);i.options.__file="TN_TesMap.vue";t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d208143.131f34b1.js.map