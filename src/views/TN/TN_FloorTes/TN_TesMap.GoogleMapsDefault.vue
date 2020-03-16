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
                      <!-- <b-col>
                        <b-button @click="addMarker">Add Marker</b-button>
                      </b-col> -->
                    </b-row>
                    <b-row>
                      <b-col>
                        <GmapMap
                          :center="{lat:0, lng:0}"
                          :zoom="7"
                          map-type-id="terrain"
                          style="width: 500px; height: 300px"
                        >
                          <GmapMarker
                            :key="index"
                            v-for="(m, index) in markers"
                            :position="m.position"
                            :clickable="true"
                            :draggable="true"
                            @click="center=m.position"
                          />
                        </GmapMap>
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
        markers: [
        {
          position: {
            lat: 48.160910,
            lng: 16.383330,
          },
        },
        {
          position: {
            lat: 48.174270,
            lng: 16.329620,
          },
        }
        ]
      }
    },
    methods: {
      addMarker () {
        alert('add marker')
      }
    }
  }
</script>