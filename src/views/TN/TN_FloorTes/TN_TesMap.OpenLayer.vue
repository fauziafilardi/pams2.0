<template>
  <div class="height--full">
    <HeaderFormListVuex2 :isProcess = "true" />
    <div class="content-app-form__body form-process">
      <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">               
        <b-collapse id="collapse1" :visible="true">

          <b-row  style="margin-left: 25px; padding-bottom: 10px; !important;">
            <b-col md="12" id="col-left" class="bColMasterForm">	
              <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                <b-row>
                  <b-col md="12" id="col-left">
                    <b-row>
                      <b-col>
                        <b-button @click="addMarker">Add Marker</b-button>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col>
                        <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true" 
                              data-projection="EPSG:4326" style="height: 400px">
                        <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

                        <vl-geoloc @update:position="geolocPosition = $event">
                          <template slot-scope="geoloc">
                            <vl-feature v-if="geoloc.position" id="position-feature">
                              <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
                              <vl-style-box>
                                <vl-style-icon src="https://vuelayers.github.io/_media/marker.png" :scale="0.4" :anchor="[0.5, 1]"></vl-style-icon>
                              </vl-style-box>
                            </vl-feature>
                          </template>
                        </vl-geoloc>

                        <vl-layer-tile id="osm">
                          <vl-source-osm></vl-source-osm>
                        </vl-layer-tile>
                        </vl-map>
                        <div style="padding: 20px">
                          Zoom: {{ zoom }}<br>
                          Center: {{ center }}<br>
                          Rotation: {{ rotation }}<br>
                          My geolocation: {{ geolocPosition }}
                        </div>
                      </b-col>
                    </b-row>
                    <!-- <b-row>
                      <b-col md="6">
                          <ABSinputRadioButtonVuex @input="OnDetailChange" :prop="PI_Detail" v-model="Detail"  ref="ref_detail" />
                      </b-col>
                    </b-row>                                      -->
                  </b-col>
                </b-row>
              </b-form>
            </b-col>
          </b-row>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return { 
        zoom: 2,
        center: [0, 0],
        rotation: 0,
        geolocPosition: undefined,
      }
    },
    methods: {
      addMarker () {
        alert('add marker')
      }
    }
  }
</script>