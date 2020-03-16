<template>
    <div>        
    <ABSListVuex
      :prop = "propList"
      :title = "data.QueryName"
      @rowClicked = "$parent.rowClicked"
      @rowDblClicked = "$parent.doDoubleClick"
      @rowLinkClick = "$parent.rowLink"
      @pageSize = "$parent.M_PageSize"
      @pagination = "$parent.M_Pagination"
      @filter = "$parent.M_Advance_Filter"
      @headTable = "$parent.M_Head_Table"
      @refreshColumn = "$parent.refreshColumn"
    />


        <div v-show="$parent.showForm"  :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
            <div class="div-collapse" v-b-toggle.collapse1>
                <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
                    Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                </span>
            </div>
            <b-collapse id="collapse1" :visible="true">
                <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">     
					<b-col md="12" id="col-left" class="bColMasterForm">	
						<b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <b-row style="padding-left:10px;">					
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_floorcd" v-model="M_TN_Floor.floorcd"  ref="ref_floorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_Floor.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_grossarea" v-model="M_TN_Floor.grossarea"  ref="ref_grossarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_semigrossarea" v-model="M_TN_Floor.semigrossarea"  ref="ref_semigrossarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_netarea" v-model="M_TN_Floor.netarea"  ref="ref_netarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnparkingfloorChange" :prop="PI_parkingfloor" v-model="M_TN_Floor.parkingfloor"  ref="ref_parkingfloor" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalinbuildingparkingarea" v-model="M_TN_Floor.totalinbuildingparkingarea"  ref="ref_totalinbuildingparkingarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalpublicarea" v-model="M_TN_Floor.totalpublicarea"  ref="ref_totalpublicarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_defaultrentalrate" v-model="M_TN_Floor.defaultrentalrate"  ref="ref_defaultrentalrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSFileUpload :prop="PI_referencefilename" @fileName="getFileName" 
                                                                        v-model="M_TN_Floor.referencefilename" 
                                                                        :file="M_TN_Floor.picturefilename" 
                                                                        :image="M_TN_Floor.referencefilename"
                                                                         ref="ref_referencefilename" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                  
							</b-row>
							<ABSTAnalysis :prop="PTAnalysis" />
						</b-form>
					</b-col>
                </b-row>
            </b-collapse>
        </div>
    </div>
</template>

<script>

export default {
    props: {PageLevel:'', TabIndex: '', data: ''},
    data() {
        return {
			ValKey:null,
            FormType: "List",
			Module:"TN",
            propList: {
                initialWhere:"BlockCd = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_Floor :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                blockcd: '',
                floorcd: '',
                descs: '',
                parkingfloor: 'N',
                totalinbuildingparkingarea: '',
                totalpublicarea: '',
                picturefilename: '',
                referencefilename: '',
                defaultrentalrate: '',
                grossarea: '',
                semigrossarea: '',
                netarea: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_floorcd: { 
                cValidate :'required|max:5', 
                cName: 'floorcd', 
                cLabel: 'Floor Code ', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs: { 
                cValidate :'required|max:60', 
                cName: 'descs', 
                cLabel: 'Description ', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_grossarea: { 
                cValidate :'max:13', 
                cName: 'grossarea', 
                cLabel: 'Gross Area', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_semigrossarea: { 
                cValidate :'max:13', 
                cName: 'semigrossarea', 
                cLabel: 'Semi Gross Area', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_netarea: { 
                cValidate :'max:13', 
                cName: 'netarea', 
                cLabel: 'Net Area', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: true, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_parkingfloor: { 
                cValidate :'', 
                cName: 'parkingfloor', 
                cId: 'rdbparkingfloor', 
                cRadioOptions: [{ text: 'No', value: 'N' }, { text: 'Yes', value: 'Y' }], 
                cRadioDefaultOption: 'N', 
                cLabel:'Parking Floor', 
                cLabelSize: 4, 
                cOrder: 6, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalinbuildingparkingarea: { 
                cValidate :'max:13', 
                cName: 'totalinbuildingparkingarea', 
                cLabel: 'Total In Building Parking', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalpublicarea: { 
                cValidate :'max:13', 
                cName: 'totalpublicarea', 
                cLabel: 'Total Public Area', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_defaultrentalrate: { 
                cValidate :'max:13', 
                cName: 'defaultrentalrate', 
                cLabel: 'Default Rental Rate', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_referencefilename: { 
                cValidate :'', 
                cName:'referencefilename', 
                cLabel: 'Picture File', 
                cSubPortfolio:this.getDataUser().SubPortfolioCd,
                cPath:"SaveLocation/SubPortfolio",
                cLabelSize: 4, 
                cOrder:10, 
                cVisible: true, 
                cModule: 'TN', 
                cPlaceholder: 'Choose a file...', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 

			PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cPageMasterSeq: this.data.PageMasterSeq,
                cFormPageNo: this.data.PageOrder,
				cProtect: false
            }         
        }
    },
	computed : {
    inputStatus() {
      if(this.$store.getters.getLevel == this.PageLevel && this.$store.getters.getTab == this.TabIndex){
        return this.$store.getters.getStatus    
      }
      else {
        return 'VIEW'
      }
    },
	DataRow(){
		return this.$store.getters.GetPage2Data
	},
    DataRowPage1(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
        OnparkingfloorChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{parkingfloor}
            }
        })
        this.$forceUpdate()
        },
		
		setToolbarButton () {
           //this.getToolbar().statusFunction[4].disabled = false
		},
        M_Head_Table () {
        },
        M_PageSize(){
        },
        M_TabClick(){
        },
        M_Pagination(){
        },
        M_Advance_Filter(){
        },
		M_Search(data){
        },
        M_Refresh(){
        },
		M_Cancel() {			
		},		
		doDoubleClick(){
        },
		rowClicked (record, index) {
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },
		paramFromParent(){
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            this.M_TN_Floor.blockcd = data.BlockCd 
            this.propList.initialWhere =" BlockCd = '" + data.BlockCd + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            console.log(this.M_TN_Floor.grossarea)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                FloorCD: this.M_TN_Floor.floorcd.toUpperCase(),
                BlockCD: this.M_TN_Floor.blockcd,
                Descs: this.M_TN_Floor.descs,
                GrossArea: this.M_TN_Floor.grossarea ? this.replaceAllString(this.M_TN_Floor.grossarea,',','','number') : 0 ,
                SemiGrossArea: this.M_TN_Floor.semigrossarea,
                NetArea: this.M_TN_Floor.netarea,
                ParkingFloor: this.M_TN_Floor.parkingfloor,
                TotalInBuildingParkingArea: this.M_TN_Floor.totalinbuildingparkingarea ? this.replaceAllString(this.M_TN_Floor.totalinbuildingparkingarea,',','','number') : 0 ,
                TotalPublicArea: this.M_TN_Floor.totalpublicarea ? this.replaceAllString(this.M_TN_Floor.totalpublicarea,',','','number') : 0 ,
                DefaultRentalRate: this.M_TN_Floor.defaultrentalrate ? this.replaceAllString(this.M_TN_Floor.defaultrentalrate,',','','number') : 0 ,
                PictureFileName: this.M_TN_Floor.picturefilename,
                ReferenceFileName: this.M_TN_Floor.referencefilename,
                UserInput: this.getDataUser().UserId                 
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
        },
        M_Update() {
            console.log(this.M_TN_Floor.grossarea)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                FloorCD: this.M_TN_Floor.floorcd.toUpperCase(),
                BlockCD: this.M_TN_Floor.blockcd,
                Descs: this.M_TN_Floor.descs,
                ParkingFloor: this.M_TN_Floor.parkingfloor,
                TotalInBuildingParkingArea: this.M_TN_Floor.totalinbuildingparkingarea ? this.replaceAllString(this.M_TN_Floor.totalinbuildingparkingarea,',','','number') : 0 ,
                TotalPublicArea: this.M_TN_Floor.totalpublicarea ? this.replaceAllString(this.M_TN_Floor.totalpublicarea,',','','number') : 0 ,
                DefaultRentalRate: this.M_TN_Floor.defaultrentalrate ? this.replaceAllString(this.M_TN_Floor.defaultrentalrate,',','','number') : 0 ,
                PictureFileName: this.M_TN_Floor.picturefilename,
                ReferenceFileName: this.M_TN_Floor.referencefilename,
                GrossArea: this.M_TN_Floor.grossarea ? this.replaceAllString(this.M_TN_Floor.grossarea,',','','number') : 0 ,
                SemiGrossArea: this.M_TN_Floor.semigrossarea ? this.replaceAllString(this.M_TN_Floor.semigrossarea,',','','number') : 0 ,
                NetArea: this.M_TN_Floor.netarea ? this.replaceAllString(this.M_TN_Floor.netarea,',','','number') : 0 ,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_Floor.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_Floor = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                blockcd: '',
                floorcd: '',
                descs: '',
                parkingfloor: 'N',
                totalinbuildingparkingarea: '',
                totalpublicarea: '',
                picturefilename: '',
                referencefilename: '',
                defaultrentalrate: '',
                grossarea: '',
                semigrossarea: '',
                netarea: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_Floor.blockcd = data.BlockCd 



        },
        M_Edit(){
        },
        M_Delete(dt){           
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    FloorCD: value.FloorCd,
                    BlockCD: value.BlockCd,
                    LastUpdateStamp: value.LastUpdateStamp,
                    _Message_:''


                })
			})
			
			var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataDelete
            }
            
            this.postJSONMulti( this.getUrlNewDeleteMulti(), param )
            .then(response => {
                if (response == null) return

                this.$parent.resultDelete()
            })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                blockcd: record.BlockCd,
                floorcd: record.FloorCd				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_Floor = {
                subportfoliocd: data.subportfoliocd,
                blockcd: data.blockcd,
                floorcd: data.floorcd,
                descs: data.descs,
                parkingfloor: data.parkingfloor,
                totalinbuildingparkingarea: this.isCurrency(data.totalinbuildingparkingarea, this.decimal),
                totalpublicarea: this.isCurrency(data.totalpublicarea, this.decimal),
                picturefilename: data.picturefilename,
                referencefilename: data.referencefilename,
                defaultrentalrate: this.isCurrency(data.defaultrentalrate, this.decimal),
                grossarea: this.isCurrency(data.grossarea, this.decimal),
                semigrossarea: this.isCurrency(data.semigrossarea, this.decimal),
                netarea: this.isCurrency(data.netarea, this.decimal),
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: this.isCurrency(data.rowid, this.decimal)
                    }
                 

  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,
        getFileName(fileName) {
         this.M_TN_Floor.picturefilename = fileName 
        }
		
    },
    created: function() {
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
		
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

