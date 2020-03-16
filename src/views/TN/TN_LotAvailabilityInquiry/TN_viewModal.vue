<template>
  <div>
    <b-row class="size-modal-content">
                <b-col sm="12" style="margin-left: 4px; margin-bottom: 10px; margin-top: 10px;">
                  <div class="modal-customize-abs__modal-header">
                  <div class="modal-customize-abs__modal-header--title">
                    Lot Availability Detail Inquiry
                  </div>
                  <div
                    class="modal-customize-abs__modal-header--icon"
                    @click="$emit('close')"
                  >
                    <i class="icon-close"></i>
                  </div>
                </div>
                  <div class="modal-customize-abs__modal-body" style="padding-right: 0px;">
                    <!-- <p>Select data</p> -->
                    <div class="box-category">
                      <div class="table--list" style="max-height: 500px; width:100%;">
                        <b-row style="padding-bottom:10px;">
                            <b-col md="12">
                                <b-container class="bv-example-row">
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_lotno" v-model="M_ViewModal.lotno" />
                                        </b-col>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_direction" v-model="M_ViewModal.direction" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_lottype" v-model="M_ViewModal.lottype" />
                                        </b-col>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_sector" v-model="M_ViewModal.sector" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_block" v-model="M_ViewModal.block" />
                                        </b-col>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_view" v-model="M_ViewModal.view" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_floor" v-model="M_ViewModal.floor" />
                                        </b-col>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_measurement" v-model="M_ViewModal.measurement" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_descs" v-model="M_ViewModal.descs" />
                                        </b-col>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_grossarea" v-model="M_ViewModal.grossarea" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_address1" v-model="M_ViewModal.address1" />
                                        </b-col>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_semigrossarea" v-model="M_ViewModal.semigrossarea" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_address2" v-model="M_ViewModal.lotno" />
                                        </b-col>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_netarea" v-model="M_ViewModal.netarea" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_address3" v-model="M_ViewModal.address3" />
                                        </b-col>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_chargearea" v-model="M_ViewModal.chargearea" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_address4" v-model="M_ViewModal.address4" />
                                        </b-col>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_status" v-model="M_ViewModal.status" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_zipcd" v-model="M_ViewModal.zipcd" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_city" v-model="M_ViewModal.city" />
                                        </b-col>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_furnished" v-model="M_ViewModal.furnished" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_theme" v-model="M_ViewModal.theme" />
                                        </b-col>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_totalroom" v-model="M_ViewModal.totalroom" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_class" v-model="M_ViewModal.class" />
                                        </b-col>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_year" v-model="M_ViewModal.year" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_category" v-model="M_ViewModal.category" />
                                        </b-col>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_insuranceno" v-model="M_ViewModal.insuranceno" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_ownerid" v-model="M_ViewModal.ownerid" />
                                        </b-col>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_parkinglot" v-model="M_ViewModal.parkinglot" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6" offset="6">
                                            <ABSCompute :prop="PI_electricity" v-model="M_ViewModal.electricity" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="12">
                                            <ABSCompute :prop="PI_remarks" v-model="M_ViewModal.remarks" />
                                        </b-col>
                                    </b-row>
                                </b-container>
                            </b-col>                            
                        </b-row>                        
                      </div>
                    </div>
                  </div>
                </b-col>
              </b-row>
  </div>
</template>

<script>


export default {
    props: {dataModal:[]},
  data() {
    return {
        
        dataModalHeader: [],
        M_ViewModal: {
            lotno: '',
            direction: '',
            lottype: '',
            sector: '',
            block: '',
            view: '',
            floor: '',
            measurement: '',
            descs: '',
            grossarea: '',
            address1: '',
            semigrossarea: '',
            address2: '',
            netarea: '',
            address3: '',
            chargearea: '',
            address4: '',
            zipcd: '',
            status: '',
            city: '',
            furnished: '',
            theme: '',
            totalroom: '',
            class: '',
            year: '',
            category: '',
            insuranceno: '',
            ownerid: '',
            parkinglot: '',
            electricity: '',
            remarks: ''
        },
        PI_lotno: { 
            cLabel:'Lot No', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_direction: { 
            cLabel:'Direction', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_lottype: { 
            cLabel:'Lot Type', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_sector: { 
            cLabel:'Sector', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_block: { 
            cLabel:'Block', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_view: { 
            cLabel:'View', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_floor: { 
            cLabel:'Floor', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_measurement: { 
            cLabel:'Measurement', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_descs: { 
            cLabel:'Description', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_grossarea: { 
            cLabel:'Gross Area', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_address1: { 
            cLabel:'Address', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_semigrossarea: { 
            cLabel:'Semi Gross Area', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_address2: { 
            cLabel:'', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_netarea: { 
            cLabel:'Net Area', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_address3: { 
            cLabel:'', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_chargearea: { 
            cLabel:'Charge Area', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_address4: { 
            cLabel:'', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_zipcd: { 
            cLabel:'Zip Code', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_status: { 
            cLabel:'Status', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_city: { 
            cLabel:'City', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_furnished: { 
            cLabel:'Furnished', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_theme: { 
            cLabel:'Theme', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_totalroom: { 
            cLabel:'Total Room', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_class: { 
            cLabel:'Class', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_year: { 
            cLabel:'Year Of Development', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_category: { 
            cLabel:'Category', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_insuranceno: { 
            cLabel:'Insurance No', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_ownerid: { 
            cLabel:'Owner ID', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_parkinglot: { 
            cLabel:'Parking Lot', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_electricity: { 
            cLabel:'Electricity', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_remarks: { 
            cLabel:'Remarks', 
            cLabelSize: 2,
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        }
    };
  },
  methods: {
    getDataBy(record) {
        var param = {
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: 0,
            LotNo: record.LotNo,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            FromDate: record.FromDate,
            ToDate: record.ToDate,
            Status: record.Status
        }

        this.postEncode( this.getUrlById(), param )
        .then(response => {
            // response from API
            if(response == null) return
            
            var data = response.Data[0]
            var chargearea = ''
            var furnished = ''
            
            if (data.chargearea == 'G') {
                chargearea = 'Gross Area'
            } else if (data.chargearea == 'S') {
                chargearea = 'Semi Gross Area'
            } else {
                chargearea = 'Net Area'
            }

            if (data.furnished == 'U') {
                furnished = 'Un-Furnished'
            } else if (data.furnished == 'S') {
                furnished = 'Semi-Furnished'
            } else {
                furnished = 'Fully-Furnished'
            }

            this.M_ViewModal = {
                lotno: data.lotno,
                direction: data.direction,
                lottype: data.lottype + this.separator + data.lottypedescs,
                sector: data.sectorcd + this.separator + data.sectordescs,
                block: data.blockcd + this.separator + data.blockdescs,
                view: data.viewcd,
                floor: data.floorcd + this.separator + data.floordescs,
                measurement: data.measurement,
                descs: data.descs,
                grossarea: this.isCurrency(data.grossarea, this.decimal),
                address1: data.address1,
                semigrossarea: this.isCurrency(data.semigrossarea, this.decimal),
                address2: data.address2,
                netarea: this.isCurrency(data.netarea, this.decimal),
                address3: data.address3,
                chargearea: chargearea,
                address4: data.address4,
                zipcd: data.zipcode,
                status: data.status,
                city: data.citycd + this.separator + data.citydescs,
                furnished: furnished,
                theme: data.lotthemecd + this.separator + data.lotthemedescs,
                totalroom: data.totalroom,
                class: data.lotclasscd + this.separator + data.lotclassdescs,
                year: data.year,
                category: data.lotcategorycd + this.separator + data.lotcategorydescs,
                insuranceno: data.insuranceno,
                ownerid: data.ownerid,
                parkinglot: data.parkinglot,
                electricity: data.electricity,
                remarks: data.status2,
            }
        })
    }
  },
  beforeCreate: function () {
      
  },
  created: function() {
      this.getDataBy(this.dataModal)
  },
  beforeMount: function() {
  },
  mounted: function() {
  },
  beforeUpdate: function() {
  },
  updated: function() {
  },
  beforeDestroy: function() {
  },
  destroyed: function() {
  }
}
</script>
<style scoped>
    table {
    border-collapse: collapse;
    }

    table, td, th {
        border: 1px solid black;
        padding: 0px 5px 0px 5px;
    }
      .size-modal-content {
            padding: 10px;
            font-style: 13px;
        }
        .v--modal-overlay[data-modal="size-modal"] {
            background: rgba(0, 0, 0, 0.5);
        }
        .demo-modal-class {
            border-radius: 5px;
            background: #F7F7F7;
            box-shadow: 5px 5px 30px 0px rgba(46,61,73, 0.6);
        }
        .container{
            margin-left: 0px !important;
        }
</style>