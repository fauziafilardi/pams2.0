<template>
  <!-- <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true" style="height: 400px">
    <vl-view :projection="projection" :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

    <vl-layer-image id="xkcd">
      <vl-source-image-static :url="imgUrl" :size="imgSize" :extent="imgExtent" :projection="projection"
                              :attributions="imgCopyright">
      </vl-source-image-static>
    </vl-layer-image>
  </vl-map> -->
  <div class="content-app-form__body form-process">
    <div>
      Current selection: {{ selectedFeatures }}
    </div>
    <div>
      <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
      <!-- {{drawnFeatures
      }} -->
    </div>
    <div v-if="drawnFeatures.length === 0">
        Draw point, line, polygon, circle to select features first
    </div>
    <div v-else>
        <!-- <button @click="selectInDrawnPolygon">Select intersected features</button> -->
        <button @click="clear">Clear All</button>
    </div>
    <!-- {{images.one}}
    {{images.imageSize}}
    {{images.imageExtent}} -->
    <!-- {{zoom}} -->
    <vl-map ref="map" @created="mapCreated">
      <vl-view ref="mapView" :zoom.sync="zoom" :center.sync="center"></vl-view>


      <!-- untuk image -->
      <vl-layer-image id="static">
        <vl-source-image-static
          :url="images.one"
          :size="images.imageSize"
          :extent="images.imageExtent">
        </vl-source-image-static>
      </vl-layer-image>
      
      <!-- untuk map -->
      <!-- <vl-layer-tile>
        <vl-source-osm />
      </vl-layer-tile> -->
      
      <vl-layer-vector ref="vectorLayer" id="my-features">
        <vl-source-vector ref="vectorSource">
          <vl-feature v-for="feature in geojsonObject.features" :key="feature.id"
                      :id="feature.id" :properties="feature.properties">
                      {{feature.geometry.type}}
            <vl-geom-polygon :coordinates="feature.geometry.coordinates">
              <!-- <vl-style-fill color="#666666">
              </vl-style-fill> -->
              <!-- <vl-style-box>
                <vl-style-stroke color="red"></vl-style-stroke>
              </vl-style-box> -->
            </vl-geom-polygon>
            <vl-style-box>
              <vl-style-fill color="blue"></vl-style-fill>
              <vl-style-stroke color="red"></vl-style-stroke>
            </vl-style-box>
          </vl-feature>
        </vl-source-vector>
      </vl-layer-vector>
      
      <vl-interaction-select ref="selectInteraction" :features.sync="selectedFeatures" :filter="selectFilter">
      </vl-interaction-select>

      <!-- draw components -->
      <vl-layer-vector id="draw-pane">
        <vl-source-vector ref="drawSource" ident="draw-target" :features.sync="drawnFeatures"></vl-source-vector>
      </vl-layer-vector>
      
      <vl-interaction-draw v-if="selected != null" source="draw-target" :type="selected"></vl-interaction-draw>
      
      <vl-interaction-modify source="draw-target"></vl-interaction-modify>
    </vl-map>  
  </div>
</template>

<script>
  import * as olExt from 'vuelayers/lib/ol-ext'
  export default {
    data () {
      return { 
        // zoom: 5,
        // center: [0, 3000000],
        selectedFeatures: [],
        drawnFeatures: [],

        selected: null,
        //  Drawing type ('Point', 'LineString', 'Polygon', 'MultiPoint', 'MultiLineString', 'MultiPolygon' or 'Circle').
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'Point', text: 'Point' },
          { value: 'LineString', text: 'Line String' },
          { value: 'Polygon', text: 'Polygon' },
          { value: 'Circle', text: 'Circle' }
        ],

        // data for draw coordinate
        geojsonObject : {
          'type': 'FeatureCollection',
          'crs': {
            'type': 'name',
            'properties': {
              'name': 'EPSG:3857'
            }
          },
          'features': [
          // {
          //   'id': 1,
          //   'type': 'Feature',
          //   'geometry': {
          //     'type': 'Polygon',
          //     'coordinates': [[[-5e6, 6e6], [-5e6, 8e6], [-3e6, 8e6],
          //                     [-3e6, 6e6], [-5e6, 6e6]]]
          //   }
          // },
          // {
          //   'id': 2,
          //   'type': 'Feature',
          //   'geometry': {
          //     'type': 'Polygon',
          //     'coordinates': [[[-2e6, 6e6], [-2e6, 8e6], [0, 8e6],
          //                     [0, 6e6], [-2e6, 6e6]]]
          //   }
          // },
          // {
          //   'id': 3,
          //   'type': 'Feature',
          //   'geometry': {
          //     'type': 'Polygon',
          //     'coordinates': [[[1e6, 6e6], [1e6, 8e6], [3e6, 8e6],
          //                     [3e6, 6e6], [1e6, 6e6]]]
          //   }
          // },
          {
            'id': 4,
            'type': 'Feature',
            'geometry': {
              'type': 'Polygon',
              'coordinates': [[[-2e6, -1e6], [-1e6, 1e6],
                              [0, -1e6], [-2e6, -1e6]]]
            }
          }]
        },

        // image
        zoom: 2,
        center: [0, 0],
        // imageProj: customProj.getCode(),
        imageProj: 'xkcd-image',
        images: {
          // one: 'https://imgs.xkcd.com/comics/online_communities.png',
          one: 'http://192.168.6.9/PAMSAPI/SaveLocation/SubPortfolio/001/FloorPlan/peta-kabupaten-lebak.jpg',
          imageSize: [1024, 968],
          imageExtent: [0, 0, 1024, 968],
        },
      }
    },
    mounted () {
      // setTimeout(() => {    
      //   this.$refs.mapView.$view.fit(this.$refs.vectorSource.$source.getExtent(), {
      //     size: this.$refs.map.$map.getSize(),
      //     duration: 1000,
      //   })
      // }, 1000)
    },
    methods: {
      /**
       * @param {Vue} map - vl-map instance
       */
      mapCreated (map) {
        // // a DragBox interaction used to select features by drawing boxes
        // const dragBox = new ol.interaction.DragBox({
        //   condition: ol.events.condition.platformModifierKeyOnly
        // })

        // map.$map.addInteraction(dragBox)
        
        // dragBox.on('boxend', () => {
        //   // features that intersect the box are added to the collection of
        //   // selected features
        //   const extent = dragBox.getGeometry().getExtent()
        //   /** @var {ol.source.Vector} source */
        //   const source = this.$refs.vectorSource.$source
          
        //   source.forEachFeatureIntersectingExtent(extent, feature => {
        //     feature = VueLayers.ol.writeGeoJsonFeature(feature)
        //     this.selectedFeatures.push(feature)
        //   })
        // })
        
        // // clear selection when drawing a new box and when clicking on the map
        // dragBox.on('boxstart', () => {
        //   this.selectedFeatures = []
        // })

        // untuk image
        // Custom projection for static Image layer
        let x = 1024 * 10000
        let y = 968 * 10000
        this.images.imageExtent = [-x / 2, -y / 2, x / 2, y / 2]
        // let customProj = new ol.proj.Projection({
        //   code: 'xkcd-image',
        //   units: 'pixels',
        //   extent: this.images.imageExtent,
        // })
        // add to the list of known projections
        // after that it can be used by code
        // ol.proj.addProjection(customProj)
      },
      selectFilter (feature, layer) {
        const selectableLayers = ['my-features']
      
        return layer != null && selectableLayers.includes(layer.get('id'))
      },
      selectInDrawnPolygon () {
        const vectorSource = this.$refs.vectorSource.$source
        const drawSource = this.$refs.drawSource.$source
        const extent = drawSource.getExtent()
        console.log(extent)
        vectorSource.forEachFeatureIntersectingExtent(extent, feature => {
          feature = VueLayers.ol.writeGeoJsonFeature(feature)
          this.selectedFeatures.push(feature)
        })
        
        this.drawnFeatures = []
      },
      clear () {
        this.drawnFeatures = []
      },
    },
  }
</script>