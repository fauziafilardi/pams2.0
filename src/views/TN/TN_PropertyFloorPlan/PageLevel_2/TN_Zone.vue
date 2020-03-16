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
                                        <ABSinputTextVuex :prop="PI_zonecd" v-model="M_TN_Zone.zonecd"  ref="ref_zonecd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_Zone.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_latitude" v-model="M_TN_Zone.latitude"  ref="ref_latitude"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_longitude" v-model="M_TN_Zone.longitude"  ref="ref_longitude"/>
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSFileUpload :prop="PI_referencefilename" @fileName="getFileName" 
                                                                        v-model="M_TN_Zone.referencefilename" 
                                                                        :file="M_TN_Zone.picturefilename" 
                                                                        :image="M_TN_Zone.referencefilename"
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
    props: {PageLevel: '', TabIndex: '', data: ''},
    data() {
        return {
		cInsertKey:'',
		FormType: "List",
		Module:"TN",
            propList: {
                initialWhere: "SubPortFolioCd = '"+this.getDataUser().SubPortfolioCd+"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_Zone :{
                subportfoliocd:'',
                propertyid:0,
                zoneid:0,
                zonecd:'',
                descs:'',
                latitude:'',
                longitude:'',
                referencefilename:'',
                picturefilename:''
                    }
            ,
            PI_zonecd: { 
                cValidate :'required|max:10', 
                cName: 'zonecd', 
                cLabel: 'Zone Code', 
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
                cLabel: 'Description', 
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
            // PI_latitude: { 
            //     cValidate :'', 
            //     cName: 'latitude', 
            //     cLabel: 'Latitude', 
            //     cLabelSize: 4, 
            //     cOrder: 1, 
            //     cKey: false, 
            //     cType: 'text',
            //     cVisible: true, 
            //     cProtect: false, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            // }, 
            // PI_longitude: { 
            //     cValidate :'', 
            //     cName: 'longitude', 
            //     cLabel: 'Longitude', 
            //     cLabelSize: 4, 
            //     cOrder: 2, 
            //     cKey: false, 
            //     cType: 'text',
            //     cVisible: true, 
            //     cProtect: false, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            // }, 
            PI_referencefilename: { 
                cValidate :'', 
                cName:'referencefilename', 
                cLabel: 'Picture File Name', 
                cSubPortfolio:this.getDataUser().SubPortfolioCd,
                cPath:"SaveLocation/SubPortfolio/"+this.getDataUser().SubPortfolioCd+"/FloorPlan",
                cLabelSize: 4, 
                cOrder:3, 
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
                cFormPageNo: this.data.PageOrder
            }
        }
    },
	computed : {
    inputStatus() {
      if(this.$store.getters.getLevel == this.PageLevel && this.$store.getters.getTab == this.TabIndex){
        return this.$store.getters.getStatus.toUpperCase()
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
        getFileName(fileName) {
            //   console.log('fileName',fileName)
            this.M_TN_Zone.picturefilename = fileName 
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
            this.M_TN_Zone.PropertyId = data.PropertyId
            this.propList.initialWhere =" SubPortfolioCd = '" + data.SubPortfolioCd + "' and PropertyId = " + data.PropertyId + " "

            this.FormToABSList().doGetList('','eb_getList')
        },		
        M_Post(dt){
        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortFolioCd: this.DataRowPage1.SubPortfolioCd,
                ZoneCd: this.M_TN_Zone.zonecd,
                PropertyId: this.DataRowPage1.PropertyId,
                // Latitude: this.M_TN_Zone.latitude,
                // Longitude: this.M_TN_Zone.longitude,
                Descs: this.M_TN_Zone.descs,
                ReferenceFileName: this.M_TN_Zone.referencefilename,
                PictureFileName: this.M_TN_Zone.picturefilename,
                PathFile: this.PI_referencefilename.cPath,
                UserInput: this.getDataUser().UserId ,
                UserEdit: this.getDataUser().UserId                 
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
        },
        M_Update() {
            var param = {			
               OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortFolioCd: this.DataRowPage1.SubPortfolioCd,
                PropertyId: this.DataRowPage1.PropertyId,
                ZoneId: this.M_TN_Zone.zoneid,
                ZoneCd: this.M_TN_Zone.zonecd,
                // Latitude: this.M_TN_Zone.latitude,
                // Longitude: this.M_TN_Zone.longitude,
                Descs: this.M_TN_Zone.descs,
                ReferenceFileName: this.M_TN_Zone.referencefilename,
                PictureFileName: this.M_TN_Zone.picturefilename,
                PathFile: this.PI_referencefilename.cPath,
                UserEdit: this.getDataUser().UserId                  
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_Zone = {
                  subportfoliocd:'',
                propertyid:0,
                zonecd:'',
                descs:'',
                latitude:'',
                longitude:'',
                referencefilename:'',
                picturefilename:''
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){       

            var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []
			
			data.forEach((value) => {				
				dataDelete.push({
                    SubPortfolioCd: this.DataRowPage1.SubPortfolioCd,
                    PropertyId: value.PropertyId,
                    ZoneId: value.ZoneId
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
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd : this.DataRowPage1.SubPortfolioCd,
                PropertyId: this.DataRowPage1.PropertyId,
                ZoneId: record.ZoneId
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_TN_Zone = {
                        subportfoliocd: data.subportfoliocd,
                        propertyid: data.propertyid,
                        zoneid: data.zoneid,
                        zonecd: data.zonecd,
                        descs: data.descs,
                        // latitude: data.latitude,
                        // longitude: data.longitude,
                        referencefilename: data.referencefilename,
                        picturefilename: data.picturefilename
                    }
                 

                
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
	this.$store.commit('setFormType','List')
    this.getToolbar().ProcessPS()
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
        this.FormToABSList().doGetList('','eb_getList')

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

