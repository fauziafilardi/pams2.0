<template>
  <div class="height--full">
    <!-- <HeaderFormListVuex2 :isProcess = "true" /> -->
    <div class="header--content">
    </div>
    <div class="content-app-form__body form-process" style="padding-top: 0px !important;">
      <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">               
        <b-collapse id="collapse1" :visible="true">
          <b-row  style="margin-left: 15px; padding-bottom: 10px; !important;">
            <b-col md="12" id="col-left" class="bColMasterForm">	
              <!-- <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex"> -->
                <b-row>
                  <b-col md="12" style="margin-left: 20px !important;">
                    <b-row style="margin-bottom: 20px;">
                      <b-col md="12">
                        <label class="text-field-form" style="font-size: 1rem !important; color: #215B7D !important;"><strong> Floor Plan Admin </strong></label>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col md="1">
                        <label class="text-field-form"> Choose Master Plan </label>
                      </b-col>
                      <b-col md="10">
                        <treeselect
                          :multiple="false"
                          :options="masterPlanList"
                          :clearable="false"
                          placeholder="Choose Master Plan"
                          v-model="masterPlanChoosed"
                          @input="afterChoose"
                        />
                      </b-col>
                    </b-row>
                  </b-col>
                  
                </b-row>
                <b-row>
                  <b-col md="12" id="col-left">
                    <google-map v-show="isGoogleMap" />
                    <subPortfolio v-show="isSubportfolio" ref="SubPortfolio" />
                    <property v-show="isProperty" ref="Property" />
                    <zone v-show="isZone" ref="Zone" />
                    <floor-plan v-show="isFloorPlan" ref="FloorPlan" />
                  </b-col>
                </b-row>
              <!-- </b-form> -->
            </b-col>
          </b-row>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMap from '@/views/TN/TN_Floor/TN_FloorGoogleMap'
import SubPortfolio from '@/views/TN/TN_Floor/TN_FloorSubPortfolio'
import Property from '@/views/TN/TN_Floor/TN_FloorProperty'
import Zone from '@/views/TN/TN_Floor/TN_FloorZone'
import FloorPlan from '@/views/TN/TN_Floor/TN_FloorPlan'

export default {
  components: {
    GoogleMap,
    SubPortfolio,
    Property,
    Zone,
    FloorPlan
  },
  data() {
    return {
      masterPlanList: [],
      masterPlanChoosed: -1,
      dataMasterPlan: null,

      isGoogleMap: true,
      isSubportfolio: true,
      isProperty: true,
      isZone: true,
      isFloorPlan: true
    }
  },

  methods: {
    changeStatusForm (status) {
      this.isGoogleMap = status
      this.isSubportfolio = status
      this.isProperty = status
      this.isZone = status
      this.isFloorPlan = status
    },
    afterChoose () {
      // alert(this.masterPlanChoosed)
      // this.$router.replace({
      //   path: '/TN/TN_FloorSubPortfolio'
      // })
      // this.$router.push('/TN/TN_FloorSubPortfolio?Subportfolio=' + this.masterPlanChoosed)

      if (this.masterPlanChoosed == -1) {
        this.changeStatusForm(false)
        this.isGoogleMap = true
        return
      }
      this.checkId(this.masterPlanList, this.masterPlanChoosed)
    },
    checkId (list, id) {
      for (var x = 0 ; x < list.length ; x ++) {
        if (list[x].id == this.masterPlanChoosed) {
          this.dataMasterPlan = list[x]
    console.log(JSON.stringify(list[x],null,2))
          var domainUrl = this.url.split("/")
          domainUrl.splice(4, 1)
          domainUrl = domainUrl.join("/")

          var img = domainUrl + list[x].UrlPictureMap // + '/' + list[x].RefMapFileName

          if (list[x].hasOwnProperty('FloorPlanId')) {
            this.changeStatusForm(false)
            this.isFloorPlan = true

            this.$refs.FloorPlan.subPortfolioCode = list[x].SubPortfoliocd
            this.$refs.FloorPlan.propertyId = list[x].PropertyId
            this.$refs.FloorPlan.zoneId = list[x].ZoneId
            this.$refs.FloorPlan.floorPlanId = list[x].FloorPlanId
            this.$refs.FloorPlan.getUnit()

            this.$refs.FloorPlan.images.imgUrl = img
          } else if (list[x].hasOwnProperty('ZoneId')) {
            this.changeStatusForm(false)
            this.isZone = true

            this.$refs.Zone.subPortfolioCode = list[x].SubPortfoliocd
            this.$refs.Zone.propertyId = list[x].PropertyId
            this.$refs.Zone.zoneId = list[x].ZoneId
            this.$refs.Zone.getFloorPlan()

            this.$refs.Zone.images.imgUrl = img
          } else if (list[x].hasOwnProperty('PropertyId')) {
            this.changeStatusForm(false)
            this.isProperty = true

            this.$refs.Property.subPortfolioCode = list[x].SubPortfoliocd
            this.$refs.Property.propertyId = list[x].PropertyId
            this.$refs.Property.getZone()

            this.$refs.Property.images.imgUrl = img
          } else if (list[x].hasOwnProperty('SubPortfoliocd')) {
            this.changeStatusForm(false)
            this.isSubportfolio = true

            this.$refs.SubPortfolio.subPortfolioCode = list[x].SubPortfoliocd
            this.$refs.SubPortfolio.getProperty()

            this.$refs.SubPortfolio.images.imgUrl = img
          }

          this.$forceUpdate()
          break
        }

        if (list[x].hasOwnProperty('children')) {
          var child = list[x].children
          this.checkId(child, id)
          // console.log(child)
        }
      }
    },
    getUrlLookUpSubportfolioData () {
      var param = {
      }

      this.postEncode( this.getUrlLookUpSubportfolio(), param )
      .then(response => {
          // response from API
          if (response == null) return
          
          this.masterPlanList = JSON.parse(response.Data[0].JSONTEXT)
      })
    }
  },
  created () {
    this.hideSideBarMenu()
  },
  mounted () {
    this.getUrlLookUpSubportfolioData()
    
    setTimeout(() => {
      this.isSubportfolio = false
      this.isProperty = false
      this.isZone = false
      this.isFloorPlan = false
    }, 1000)
  },
    
}
</script>

<style>
  /* .vue-treeselect div, .vue-treeselect span {
    font-size: 11px !important;
  }

  .vue-treeselect__single-value{
    margin-top: 0px !important;
  }
  .vue-treeselect__placeholder, .vue-treeselect__single-value{
    font-size: 11px !important;
  }

  .vue-treeselect__control{
    height: 22px !important;
  } */
  .vue-treeselect__control{
    height: 22px !important;
    font-size: 11px !important;
    font-family: 'Segoe UI';
    font-weight: normal;
    font-style: normal;
  }
  
  .vue-treeselect__single-value{
    margin-top: -6px !important;
  }

</style>

