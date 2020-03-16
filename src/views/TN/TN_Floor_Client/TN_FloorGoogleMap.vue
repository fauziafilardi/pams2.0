<template>
  <!-- <div class="height--full"> -->
  <div>
    <b-modal
      id="modal-center"
      :hide-footer="true"
      :hide-header-close="true"
      ref="modalSubPortfolio"
      centered
      class="modal-customize-abs"
    >
       <b-container class="bv-example-row">
        <b-row>
          <b-col sm="12">
            <div class="modal-customize-abs__modal-header">
              <div class="modal-customize-abs__modal-header--title">
                Choose Subportfolio
              </div>
              <div
                class="modal-customize-abs__modal-header--icon"
                @click="$refs.modalSubPortfolio.hide()"
              >
                <i class="icon-close"></i>
              </div>
            </div>
            <div class="modal-customize-abs__modal-body">
              <treeselect
                :multiple="false"
                :options="subportfolioList"
                :clearable="false"
                placeholder="Choose SubPortFolio"
                v-model="subportfolioChoosed"
              />
              <ABSButton
                text="Save"
                icon="save"
                classButton="button button--save"
                classIcon="icon-style-1"
                @click="saveMap"
                :disabled="subportfolioChoosed == null"
              />
              <br />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
    <!-- <div class="content-app-form__body form-process"> -->
    <div>
      <!-- <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">               
        <b-collapse id="collapse1" :visible="true"> -->

          <b-row  style="margin-left: 25px; padding-bottom: 10px; !important;">
          <!-- <b-row> -->
            <b-col md="12" id="col-left" class="bColMasterForm">	
              <!-- <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex"> -->
                <b-row>
                  <b-col md="12" id="col-left">
                    <b-row>
                    </b-row>
                    <b-row>
                      <b-col>
                        <label>
                          <!-- <gmap-autocomplete
                            @place_changed="setPlace"
                            style="width: 900px"
                            ref="searchMap">
                          </gmap-autocomplete> -->
                        </label>
                        <br/>
                      </b-col>
                    </b-row>
                    <!-- <b-row>
                      <b-col>
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
                      </b-col>
                    </b-row> -->
                    <b-row>
                      <b-col>
                        <gmap-map
                          :center="center"
                          :zoom="zoomMap"
                          style="width:100%;  height: 400px;"
                          @click="addMarkerOnMapClick"
                          @zoom_changed="zoomChanged">
                          <gmap-marker
                            :icon="m.icon == null ? 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' : m.icon"
                            :key="index"
                            v-for="(m, index) in markers"
                            :position="m.position"
                            :clickable="true"
                            :draggable="m.draggable"
                            @dragend="dragMarker"
                            @click="deleteMap(m)"
                          ></gmap-marker>
                            <!-- untuk tooltip -->
                            <!-- @mouseover="openInfoWindow(m)" -->

                            <!-- label="testing" -->
                            <!-- @click="center=m.position" -->
                            <gmap-info-window
                              :options="{maxWidth: 300}"
                              :position="infoWindow.position"
                              :opened="infoWindow.open"
                              @closeclick="infoWindow.open=false">
                              <!-- <div v-html="infoWindow.template"> -->
                              <div @mouseout="infoWindow.open=false">
                                <!-- woi ini isinya lu mau apa hahaha -->
                                {{infoWindow.content}}
                              </div>
                            </gmap-info-window>
                        </gmap-map>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col>
                        *To Enter Subportfolio, Please Choose Marker Red
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              <!-- </b-form> -->
            </b-col>
          </b-row>
        <!-- </b-collapse>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      zoomMap: 4,
      isDraggable: true,
      center: { lat: -2.548926, lng: 118.0148634 },
      // center: { lat: 0.0, lng: 0.0 },
      markers: [],
      // places: [],
      currentPlace: null,

      markerTemporary: null,
      subportfolioList: [],
      subportfolioChoosed: null,
      captionButton: 'Add Marker',
      isAddMarker: false,

      // info window
      infoWindow: {
        position: {lat: 0, lng: 0},
        open: false,
        content: ''
        // template: ''
      },
    }
  },

  methods: {
    openInfoWindow (marker) {
      this.infoWindow.position = marker.position
      var x
      var subportfolioCode
      var label
      for (x = 0 ; x < this.subportfolioList.length ; x ++) {
        if (this.subportfolioList[x].Latitude == marker.position.lat && this.subportfolioList[x].Longitude == marker.position.lng) {
          subportfolioCode = this.subportfolioList[x].id
          label = this.subportfolioList[x].label
          break
        }
      }
      if (label == undefined) {
        this.infoWindow.open = false
      } else {
        this.infoWindow.content = label
        this.infoWindow.open = true
      }
    },
    dragMarker (place) {
      this.markers.splice(-1,1)
      this.markerTemporary = {
        lat: place.latLng.lat(),
        lng: place.latLng.lng()
      }
      this.addMarker()
    },
    doCancel () {
      this.isAddMarker = false
      this.$refs.searchMap.$refs.input.disabled = false
      this.captionButton = 'Add Marker'
      this.getSubportfolio()
    },
    changeStatus () {
      if (this.captionButton == 'Add Marker') {
        this.captionButton = 'Save'
        this.$refs.searchMap.$refs.input.disabled = true
        this.$refs.searchMap.$refs.input.value = ''
      } else {
        this.subportfolioChoosed = null
        this.$refs.modalSubPortfolio.show()
      }
    },
    saveMap () {
      var param = {
        SubPortfolioCd: this.subportfolioChoosed,
        Latitude: this.markerTemporary.lat,
        Longitude: this.markerTemporary.lng,
        UserId: this.getDataUser().UserId
      }
      this.postEncode(this.getUrlInsertSubportfolio(), param)
      .then((response) => {
        if (response == null) return

        this.currentPlace = null
        this.markerTemporary = null

        this.alertSuccess("Data Has Been Saved Successfully.")
        this.getSubportfolio()
        this.$refs.modalSubPortfolio.hide()
        this.captionButton = 'Add Marker'
        this.isAddMarker = false
        this.$refs.searchMap.$refs.input.disabled = false
        
      })
    },
    deleteMap (marker) {
      if (this.isAddMarker) {
        this.alertError('Please Finish Marker Or Cancel')
        return
      }
      var x
      var subportfolioCode
      var label
      for (x = 0 ; x < this.subportfolioList.length ; x ++) {
        if (this.subportfolioList[x].Latitude == marker.position.lat && this.subportfolioList[x].Longitude == marker.position.lng) {
          subportfolioCode = this.subportfolioList[x].id
          label = this.subportfolioList[x].label
          break
        }
      }
      this.$parent.$parent.masterPlanChoosed = this.subportfolioList[x].id
      this.$parent.$parent.masterPlanChoosedLabel = label
      this.$parent.$parent.afterChoose()
      // this.alertConfirmation("Are You Sure Want To Delete " + label + " ?")
      //   .then(ress => {
      //     if (ress.value) {
      //       var param = {
      //         SubPortfolioCd: subportfolioCode,
      //         UserId: this.getDataUser().UserId
      //       }
      //       this.postEncode(this.getUrlDeleteSubportfolio(), param)
      //       .then((response) => {
      //         if (response == null) return

      //         this.currentPlace = null
      //         this.markerTemporary = null

      //         this.alertSuccess("Data Has Been Deleted Successfully")
      //         this.getSubportfolio()
      //         this.$refs.modalSubPortfolio.hide()
              
      //       })
      //     }
      // })
    },
    getSubportfolio () {
      var param = {
        UserId: this.getDataUser().UserId
      }
      this.postEncode(this.getUrlSubportfolio(), param)
      .then((response) => {
        if (response == null) return
        
        this.subportfolioList = response.Data
        this.markers = []
        for (let x = 0 ; x < this.subportfolioList.length ; x ++) {

          if (this.subportfolioList[x].Latitude != null && this.subportfolioList[x].Longitude != null) {
            const marker = {
              lat: parseFloat(this.subportfolioList[x].Latitude),
              lng: parseFloat(this.subportfolioList[x].Longitude)
            }
            this.markers.push({ position: marker })
          }
        }
        
      })
    },
    zoomChanged (zoom) {
      this.zoomMap = zoom
    },
    addMarkerOnMapClick (place) {
      if (this.captionButton == 'Add Marker') {
        return
      }

      if (this.isAddMarker) {
        return
      }

      this.markerTemporary = {
        lat: place.latLng.lat(),
        lng: place.latLng.lng()
      }
      // this.center = this.markerTemporary
      // this.zoomMap = 15
      this.addMarker()
    },
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place
      
      const marker = {
        lat: this.currentPlace.geometry.location.lat(),
        lng: this.currentPlace.geometry.location.lng()
      }
      this.center = marker
      this.zoomMap = 12

      this.changeStatus()
      this.addMarker()
      this.$refs.searchMap.$refs.input.disabled = true
      this.$refs.searchMap.$refs.input.value = ''
    },
    addMarker () {
      // auto complete
      if (this.currentPlace) {
        this.markerTemporary = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        }
        this.center = this.markerTemporary
        this.currentPlace = null
      } else {
        // onclick add marker
      }
      this.isAddMarker = true
      this.markers.push(
        {
          position: this.markerTemporary,
          icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          draggable: true
        }
      )
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  },
  
  mounted () {
    this.getSubportfolio()
    this.geolocate()
  },
    
}
</script>
