<template>
  <div>
    <b-modal
      id="modal-center"
      :hide-footer="true"
      :hide-header-close="true"
      ref="modalZone"
      centered
      class="modal-customize-abs"
    >
      <b-container class="bv-example-row">
        <b-row>
          <b-col sm="12">
            <div class="modal-customize-abs__modal-header">
              <div class="modal-customize-abs__modal-header--title">
                Choose Zone
              </div>
              <div
                class="modal-customize-abs__modal-header--icon"
                @click="$refs.modalZone.hide()"
              >
                <i class="icon-close"></i>
              </div>
            </div>
            <div class="modal-customize-abs__modal-body">
              <treeselect
                :multiple="false"
                :options="zoneList"
                :clearable="false"
                placeholder="Choose Zone"
                v-model="zoneChoosed"
              />
              <ABSButton
                text="Save"
                icon="save"
                classButton="button button--save"
                classIcon="icon-style-1"
                @click="updateCoordinateZone"
                :disabled="zoneChoosed == null"
              />
              <br />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
    <!-- <div>
      <ABSButton
        :text="captionButton"
        :icon="captionButton == 'Add Marker' ? 'plus': 'save'"
        :classButton="captionButton == 'Add Marker' ? 'button button--new': 'button button--save'"
        :disabled="captionButton == 'Add Marker' ? false: !isAddMarker"
        classIcon="icon-style-1"
        @click="changeStatus"
      />
      <ABSButton
        v-if="captionButton == 'Save'"
        text="Cancel"
        icon="ban"
        classButton="button button--cancel"
        classIcon="icon-style-2"
        @click="doCancel"
      />
    </div> -->
    <div v-show="isDraw">
      <b-form-select v-if="drawnFeatures.length < 1" v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
    </div>
    
    <vl-map ref="map"
            @created="mapCreated"
            :load-tiles-while-animating="true"
            :load-tiles-while-interacting="true"
            style="height: 450px;border: solid 1px gray;"
            data-projection="EPSG:3857">

      <vl-view ref="mapView"
            :projection="projection"
            :zoom.sync="zoom"
            :center.sync="center"
            :rotation.sync="rotation"
            :extent="images.imageExtent" />

      <!-- untuk image -->
          <!-- :size="images.imageSize" -->
      <vl-layer-image id="xkcd">
        <vl-source-image-static
          :url="images.imgUrl"
          :extent="images.imageExtent"
          :projection="projection">
        </vl-source-image-static>
      </vl-layer-image>
      
      <vl-layer-vector ref="vectorLayer" id="my-features">
        <vl-source-vector ref="vectorSource">
          <vl-feature v-for="feature in zoneList"
                      :key="feature.id"
                      :id="feature.id"
                      :properties="feature.properties">
            <template v-if="feature.Coordinate != null">
              <vl-geom-polygon v-if="JSON.parse(feature.Coordinate).geometry.type == 'Polygon'" :coordinates="JSON.parse(feature.Coordinate).geometry.coordinates">
                <!-- <vl-style-fill color="#666666">
                </vl-style-fill> -->
                <!-- <vl-style-box>
                  <vl-style-stroke color="red"></vl-style-stroke>
                </vl-style-box> -->
              </vl-geom-polygon>
              <vl-geom-line-string  v-else-if="JSON.parse(feature.Coordinate).geometry.type == 'LineString'" :coordinates="JSON.parse(feature.Coordinate).geometry.coordinates">
              </vl-geom-line-string>
              <!-- <vl-geom-circle v-else-if="JSON.parse(feature.Coordinate).geometry.type == 'Point'" :radius="JSON.parse(feature.Coordinate).geometry.coordinates">
              </vl-geom-circle> -->
              
              <vl-style-box>
                <!-- <vl-style-fill color="blue"></vl-style-fill> -->
                <vl-style-fill color="rgba(230, 255, 230, .5)"></vl-style-fill>
                <vl-style-stroke color="red"></vl-style-stroke>
              </vl-style-box>
            </template>
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
    watch: {
      drawnFeatures: function(newData, oldData) {
        if (this.drawnFeatures.length > 0) {
          this.isAddMarker = true
          this.selected = null
        } else {
          this.isAddMarker = false
        }
      },
      selectedFeatures: function(newData, oldData) {
        if (this.selectedFeatures.length > 0 && this.captionButton == 'Save') {
          this.selectedFeatures = []
          this.alertError('Please Finish Marker Or Cancel')
          return
        }
        
        if (this.selectedFeatures.length > 0) {
          
          var desc = ''
          var x
          for (x = 0 ; x < this.zoneList.length ; x ++) {
            if (newData[0].id == this.zoneList[x].id) {
              desc = this.zoneList[x].Descs
              break
            }
          }
          this.$parent.$parent.masterPlanChoosed = 'Zone'+ this.zoneList[x].id
          this.$parent.$parent.masterPlanChoosedLabel = desc
          this.$parent.$parent.afterChoose()
          this.selectedFeatures = []
          // this.alertConfirmation("Are You Sure Want To Delete " + desc + " ?")
          // .then(ress => {
          //   if (ress.value) {
          //     // set null
          //     var param = {
          //       SubPortfolioCd: this.subPortfolioCode,
          //       PropertyId: this.propertyId,
          //       ZoneId: newData[0].id,
          //       Coordinate: 'NULL',
          //       Remarks: '',
          //       UserId: this.getDataUser().UserId
          //     }
          //     this.postEncode(this.getUrlUpdateCoordinateZone(), param)
          //     .then((response) => {
          //       if (response == null) return
                
          //       this.alertSuccess("Data Has Been Delete Successfully.")
          //       this.getZone()
          //       this.doCancel()
          //     })
          //   }
          //   this.selectedFeatures = []
          // })
        } else {
        }
      },
    },
    data () {
      return { 
        selectedFeatures: [],
        drawnFeatures: [],

        selected: null,
        //  Drawing type ('Point', 'LineString', 'Polygon', 'MultiPoint', 'MultiLineString', 'MultiPolygon' or 'Circle').
        options: [
          { value: null, text: 'Please select an option' },
          // { value: 'Point', text: 'Point' },
          { value: 'LineString', text: 'Line String' },
          { value: 'Polygon', text: 'Polygon' },
          // { value: 'Circle', text: 'Circle' }
        ],

        // image
        zoom: 2,
        center: [1200 / 2, 530 / 2],
        rotation: 0,
        projection: 'xkcd-image',
        images: {
          imgUrl: 'http://192.168.6.9/PAMSAPI/SaveLocation/SubPortfolio/Blank.png',
          imageSize: [1200, 530],
          imageExtent: [0, 0, 1200, 530]
        },
        customProj: null,
        captionButton: 'Add Marker',
        isAddMarker: false,
        isDraw: false,
        zoneList: [],
        zoneChoosed: null,

        subPortfolioCode: null,
        propertyId: null
      }
    },
    created () {
      this.customProj = olExt.createProj({
        code: this.projection,
        units: 'pixels',
        extent: this.images.imageExtent
      })
      olExt.addProj(this.customProj)
    },
    mounted () {
    },
    methods: {
      doCancel () {
        this.isAddMarker = false
        this.captionButton = 'Add Marker'
        this.drawnFeatures = []
        this.selected = null
        this.isDraw = false
      },
      changeStatus () {
        if (this.captionButton == 'Add Marker') {
          this.captionButton = 'Save'
          this.isDraw = true
        } else {
          this.zoneChoosed = null
          this.$refs.modalZone.show()
        }
      },
      refreshMap () {
        this.$refs.map.updateSize()
      },
      /**
       * @param {Vue} map - vl-map instance
       */
      mapCreated (map) {
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
      getZone () {
        var param = {
          SubPortfolioCd: this.subPortfolioCode,
          PropertyId: this.propertyId
        }
        this.postEncode(this.getUrlGetCoordinateZone(), param)
        .then((response) => {
          if (response == null) return
          
          this.zoneList = response.Data
          
        })
      },
      updateCoordinateZone () {
        var coordinate = {
          // id: this.drawnFeatures[0].id,
          geometry: this.drawnFeatures[0].geometry
        }
        var param = {
          SubPortfolioCd: this.subPortfolioCode,
          PropertyId: this.propertyId,
          ZoneId: this.zoneChoosed,
          Coordinate: JSON.stringify(coordinate),
          Remarks: '',
          UserId: this.getDataUser().UserId
        }
        this.postEncode(this.getUrlUpdateCoordinateZone(), param)
        .then((response) => {
          if (response == null) return
          
          this.alertSuccess("Data Has Been Saved Successfully.")
          this.$refs.modalZone.hide()
          this.getZone()
          this.doCancel()
        })
      }
    },
  }
</script>