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
                                        <ABSinputTextVuex :prop="PI_vehicleno" v-model="M_TN_ContractVehicleRegistration.vehicleno"  ref="ref_vehicleno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncarparknoChange" :prop="PI_carparkno" :value="M_TN_ContractVehicleRegistration.carparkno" :label="M_TN_ContractVehicleRegistration.carparknoLabel" ref="ref_carparkno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_ContractVehicleRegistration.descs"  ref="ref_descs"/>
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
                initialWhere:"ApplicationNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
            IsContractAddendumEditable:0,
            IEBy: {Input: '', Edit: ''},   			

            M_TN_ContractVehicleRegistration :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                addendumsequenceno: '',
                vehicleno: '',
                carparkno: '',
                descs: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_vehicleno: { 
                cValidate :'required|max:10', 
                cName: 'vehicleno', 
                cLabel: 'Vehicle No', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_carparkno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNCarpark'    , 
                    ColumnDB: 'CarparkNo'   , 
                    InitialWhere: "STATUS='AVAILABLE' AND SUBPORTFOLIOCD = '"+this.getDataUser().SubPortfolioCd+"' and CarParkNo Not In (Select CarParkNo from VW_TN_CarPark_Used)"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'carparkno', 
                cLabel: 'Carpark No', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 2, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cOption: [], 
                cMasterUrl: 'TN/TN_SubPortfolio' ,
                cDisplayColumn: 'CarparkNo,CarparkType' ,
            }, 
            PI_descs: { 
                cValidate :'max:150', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
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
        GetContractAddendumData(event=null){
          var param = {
            OptionFunctionCd: "GetContractAddendumData",
            ModuleCd: this.Module,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            ApplicationNo: this.M_TN_LOOAddendum.applicationno,
            AddendumSequenceNo: this.M_TN_LOOAddendum.addendumsequenceno
          }

          this.FnDynamicFunction(param)
            .then(ress => {
              if(ress == null) return
              var data = ress[0]

              if(event=='M_Edit'){
                if(data.Status !='C' || data.Status !='X' || data.Status !='P' && data.DeviationApprovalNo !='' || data.DeviationApprovalNo !=null){
                  this.IsContractAddendumEditable = 1
                }
                return
              }
            })
        },
        OncarparknoChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractVehicleRegistration.carparkno = data.id
            this.M_TN_ContractVehicleRegistration.carparknoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{carparkno}
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
            this.M_TN_ContractVehicleRegistration.applicationno = data.ApplicationNo 
            this.M_TN_ContractVehicleRegistration.addendumsequenceno = data.AddendumSequenceNo
            this.propList.initialWhere =" SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' and ApplicationNo = '" + data.ApplicationNo + "' AND AddendumSequenceNo = '" + data.AddendumSequenceNo + "'"

            if (data.StatusCd != 'X' || data.StatusCd != 'C' || data.StatusCd != 'P') {
                this.FormType = "View"
                this.$store.commit('setFormType','View')
                this.getToolbar().ProcessPS()
            } else {
                this.FormType = "List"
                this.$store.commit('setFormType','List')
                this.getToolbar().ProcessPS()
            }
            
            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCD: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_ContractVehicleRegistration.applicationno,
                AddendumSequenceNo: this.M_TN_ContractVehicleRegistration.addendumsequenceno,
                VehicleNo: this.M_TN_ContractVehicleRegistration.vehicleno,
                CarparkNo: this.M_TN_ContractVehicleRegistration.carparkno == '' || this.M_TN_ContractVehicleRegistration.carparkno == null ? 'NULL' : this.M_TN_ContractVehicleRegistration.carparkno ,
                Descs: this.M_TN_ContractVehicleRegistration.descs,
                UserInput: this.getDataUser().UserId ,
                UserEdit: this.getDataUser().UserId
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultInsert(response.Message)
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCD: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_ContractVehicleRegistration.applicationno,
                AddendumSequenceNo: this.M_TN_ContractVehicleRegistration.addendumsequenceno,
                VehicleNo: this.M_TN_ContractVehicleRegistration.vehicleno,
                CarparkNo: this.M_TN_ContractVehicleRegistration.carparkno == '' || this.M_TN_ContractVehicleRegistration.carparkno == null ? 'NULL' : this.M_TN_ContractVehicleRegistration.carparkno ,
                Descs: this.M_TN_ContractVehicleRegistration.descs,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_ContractVehicleRegistration.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultUpdate(response.Message)
            })
        },
		M_ClearForm(){
            this.M_TN_ContractVehicleRegistration = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                addendumsequenceno: '',
                vehicleno: '',
                carparkno: '',
                descs: '',
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
            this.M_TN_ContractVehicleRegistration.applicationno = data.ApplicationNo
            this.M_TN_ContractVehicleRegistration.addendumsequenceno = data.AddendumSequenceNo
        },
        M_Edit(){
        },
        M_Delete(dt){
            var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                    ApplicationNo: this.DataRowPage1.ApplicationNo,
                    AddendumSequenceNo: this.DataRowPage1.AddendumSequenceNo,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    VehicleNo: value.VehicleNo,
                    LastUpdateStamp: value.LastUpdateStamp,
                    _Message_: "Vehicle No " + value.VehicleNo
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
                // var message = "Data Has Been Deleted Successfully"
                // this.$parent.resultDelete(message)
                this.$parent.resultDelete()
            })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCD: this.getDataUser().SubPortfolioCd,
                applicationno: record.ApplicationNo,
                AddendumSequenceNo: this.DataRowPage1.AddendumSequenceNo,
                vehicleno: record.VehicleNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_ContractVehicleRegistration = {
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
                addendumsequenceno: this.DataRowPage1.AddendumSequenceNo,
                vehicleno: data.vehicleno,
                carparkno: data.carparkno,
                descs: data.descs,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_TN_ContractVehicleRegistration.carparknoLabel = this.M_TN_ContractVehicleRegistration.carparkno != null && this.M_TN_ContractVehicleRegistration.carparkno != '' ? data.carparkno + this.separator  :'' 
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
		
    },
    created: function() {
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
        // this.GetContractAddendumData('M_Edit')

        //   if(this.IsContractAddendumEditable == 1){
        //       this.FormType = "List"
        //             this.$store.commit('setFormType','List')
        //             this.getToolbar().ProcessPS()
        //   }else{              
        //             this.FormType = "View"
        //             this.$store.commit('setFormType','View')
        //             this.getToolbar().ProcessPS()
        //   }
		
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

