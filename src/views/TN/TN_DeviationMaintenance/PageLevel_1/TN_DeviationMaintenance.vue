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
                                        <ABSinputTextVuex :prop="PI_deviationapprovalno" v-model="M_TN_DeviationMaintenance.deviationapprovalno"  ref="ref_deviationapprovalno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_status" v-model="M_TN_DeviationMaintenance.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OndeviationdateChange" :prop="PI_deviationdate" v-model="M_TN_DeviationMaintenance.deviationdate"  ref="ref_deviationdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_deviationcategory" v-model="M_TN_DeviationMaintenance.deviationcategory"  ref="ref_deviationcategory" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_applicationno" v-model="M_TN_DeviationMaintenance.applicationno"  ref="ref_applicationno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_DeviationMaintenance.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_occupancycost" v-model="M_TN_DeviationMaintenance.occupancycost"  ref="ref_occupancycost"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalaging" v-model="M_TN_DeviationMaintenance.totalaging"  ref="ref_totalaging"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_arrsubsectorinfloor" v-model="M_TN_DeviationMaintenance.arrsubsectorinfloor"  ref="ref_arrsubsectorinfloor"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_arrfloor" v-model="M_TN_DeviationMaintenance.arrfloor"  ref="ref_arrfloor"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_arrsubsectorinmall" v-model="M_TN_DeviationMaintenance.arrsubsectorinmall"  ref="ref_arrsubsectorinmall"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_deviationreason" v-model="M_TN_DeviationMaintenance.deviationreason"  ref="ref_deviationreason"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnnotefromapprovalChange" :prop="PI_notefromapproval" v-model="M_TN_DeviationMaintenance.notefromapproval"  ref="ref_notefromapproval" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_DeviationMaintenance.remarks"  ref="ref_remarks" />
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
                initialWhere: "ProcessControlSequenceNo IS NULL AND CustomerType = 'L' AND SubPortfolioCd = '" +this.getDataUser().SubPortfolioCd+ "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_DeviationMaintenance :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                addendumno: '',
                deviationapprovalno: '',
                deviationcategory: '',
                deviationdate: '',
                descs: '',
                occupancycost: '0',
                totalaging: '0',
                arrsubsectorinfloor: '0',
                arrfloor: '0',
                arrsubsectorinmall: '0',
                deviationreason: '',
                notefromapproval: '',
                status: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                t0: '',
                t1: '',
                t2: '',
                t3: '',
                t4: '',
                t5: '',
                t6: '',
                t7: '',
                t8: '',
                t9: '',
                t10: '',
                t11: '',
                t12: '',
                t13: '',
                t14: '',
                t15: '',
                t16: '',
                t17: '',
                t18: '',
                t19: '',
                t20: '',
                t21: '',
                t22: '',
                t23: '',
                t24: '',
                t25: '',
                t26: '',
                t27: '',
                t28: '',
                t29: '',
                t30: '',
                controlsequenceno: 0,
                processcontrolsequenceno: 0,
                previousprocesscontrolsequenceno: 0,
                rowid: 0,
                deviationcategorydesc: '',
                statusdesc: '',
                deviationcategorydesc: ''
                    }
            ,
            PI_deviationapprovalno: { 
                cValidate :'max:20', 
                cName: 'deviationapprovalno', 
                cLabel: 'Deviation No', 
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
            PI_status: { 
                cLabel: 'Status', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_deviationdate: { 
                cValidate :'', 
                cName: 'deviationdate', 
                cLabel: 'Trans. Date', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_deviationcategory: { 
                cLabel: 'Category', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_applicationno: { 
                cValidate :'max:20', 
                cName: 'applicationno', 
                cLabel: 'Application No', 
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
            PI_descs: { 
                cValidate :'max:150', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_occupancycost: { 
                cValidate :'', 
                cName: 'occupancycost', 
                cLabel: 'Occupancy Cost', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalaging: { 
                cValidate :'', 
                cName: 'totalaging', 
                cLabel: 'Total Aging', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_arrsubsectorinfloor: { 
                cValidate :'max:4', 
                cName: 'arrsubsectorinfloor', 
                cLabel: 'ARR Sub Sector In Floor', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_arrfloor: { 
                cValidate :'max:4', 
                cName: 'arrfloor', 
                cLabel: 'ARR Same Floor', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_arrsubsectorinmall: { 
                cValidate :'max:22', 
                cName: 'arrsubsectorinmall', 
                cLabel: 'ARR Sub Sector in Mall', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_deviationreason: { 
                cValidate :'', 
                cName: 'deviationreason', 
                cLabel: 'Deviation Reason', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_notefromapproval: { 
                cValidate :'', 
                cName:'notefromapproval', 
                cLabel:'Notes', 
                cLabelSize: 4, 
                cOrder:11, 
                cKey: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible: true, 
                cResize: false, 
                cReadOnly: false, 
                cRows: 3, 
                cMaxRows: 3, 
                cSize: 'md', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:12, 
                cKey: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible: true, 
                cResize: false, 
                cReadOnly: false, 
                cRows: 3, 
                cMaxRows: 3, 
                cSize: 'md', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
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
        return this.$store.getters.getStatus.toUpperCase()
      }
      else {
        return 'VIEW'
      }
    },
	DataRow(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {		
        OndeviationdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{deviationdate}
            }
        })
        this.$forceUpdate()
        },
        OnnotefromapprovalChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{notefromapproval}
            }
        })
        this.$forceUpdate()
        },
        OnremarksChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{remarks}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           this.getToolbar().statusFunction[0].disabled = true
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
        },		
        M_Post(dt){
        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                
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
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DeviationApprovalNo: this.M_TN_DeviationMaintenance.deviationapprovalno,
                DeviationDate: this.M_TN_DeviationMaintenance.deviationdate == '' || this.M_TN_DeviationMaintenance.deviationdate == null ? 'NULL' : this.M_TN_DeviationMaintenance.deviationdate ,
                Descs: this.M_TN_DeviationMaintenance.descs,
                OccupancyCost: this.M_TN_DeviationMaintenance.occupancycost ? this.replaceAllString(this.M_TN_DeviationMaintenance.occupancycost,',','','number') : 0 ,
                TotalAging: this.M_TN_DeviationMaintenance.totalaging ? this.replaceAllString(this.M_TN_DeviationMaintenance.totalaging,',','','number') : 0 ,
                ARRSubinFloor: this.M_TN_DeviationMaintenance.arrsubsectorinfloor,
                ARRSameFloor: this.M_TN_DeviationMaintenance.arrfloor,
                ARRSubinMall: this.M_TN_DeviationMaintenance.arrsubsectorinmall,
                DeviationReason: this.M_TN_DeviationMaintenance.deviationreason,
                NotesFromApproval: this.M_TN_DeviationMaintenance.notefromapproval,
                Remarks: this.M_TN_DeviationMaintenance.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_DeviationMaintenance.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_DeviationMaintenance = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                addendumno: '',
                deviationapprovalno: '',
                deviationcategory: '',
                deviationdate: '',
                descs: '',
                occupancycost: '0',
                totalaging: '0',
                arrsubsectorinfloor: '0',
                arrfloor: '0',
                arrsubsectorinmall: '0',
                deviationreason: '',
                notefromapproval: '',
                status: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                t0: '',
                t1: '',
                t2: '',
                t3: '',
                t4: '',
                t5: '',
                t6: '',
                t7: '',
                t8: '',
                t9: '',
                t10: '',
                t11: '',
                t12: '',
                t13: '',
                t14: '',
                t15: '',
                t16: '',
                t17: '',
                t18: '',
                t19: '',
                t20: '',
                t21: '',
                t22: '',
                t23: '',
                t24: '',
                t25: '',
                t26: '',
                t27: '',
                t28: '',
                t29: '',
                t30: '',
                controlsequenceno: 0,
                processcontrolsequenceno: 0,
                previousprocesscontrolsequenceno: 0,
                rowid: 0,
                deviationcategorydesc: '',
                statusdesc: '',
                deviationcategorydesc: ''
                    }
            		
		},
        M_New(){
          this.$refs.ref_deviationdate.focus()
        },
        M_Edit(){
          this.$refs.ref_deviationdate.focus()
        },
        M_Delete(dt){       
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    DeviationApprovalNo: value.DeviationApprovalNo,
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
                deviationapprovalno: record.DeviationApprovalNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                var status = ""
                if(data.status){
                  if(data.status == 'N'){
                    status = "Pending"
                  }
                  else{
                    status = "Approved'"
                  }
                }

                var deviationcategory = ""
                if(data.deviationcategory){
                  if(data.deviationcategory == 'N'){
                    deviationcategory = "New Tenant"
                  }
                }
this.M_TN_DeviationMaintenance = {
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
                addendumno: data.addendumno,
                deviationapprovalno: data.deviationapprovalno,
                deviationcategory: deviationcategory,
                deviationdate: data.deviationdate,
                descs: data.descs,
                occupancycost: this.isCurrency(data.occupancycost, this.decimal),
                totalaging: this.isCurrency(data.totalaging, this.decimal),
                arrsubsectorinfloor: this.isCurrency(data.arrsubsectorinfloor, this.decimal),
                arrfloor: this.isCurrency(data.arrfloor, this.decimal),
                arrsubsectorinmall: this.isCurrency(data.arrsubsectorinmall, this.decimal),
                deviationreason: data.deviationreason,
                notefromapproval: data.notefromapproval,
                status: status,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                t0: data.t0,
                t1: data.t1,
                t2: data.t2,
                t3: data.t3,
                t4: data.t4,
                t5: data.t5,
                t6: data.t6,
                t7: data.t7,
                t8: data.t8,
                t9: data.t9,
                t10: data.t10,
                t11: data.t11,
                t12: data.t12,
                t13: data.t13,
                t14: data.t14,
                t15: data.t15,
                t16: data.t16,
                t17: data.t17,
                t18: data.t18,
                t19: data.t19,
                t20: data.t20,
                t21: data.t21,
                t22: data.t22,
                t23: data.t23,
                t24: data.t24,
                t25: data.t25,
                t26: data.t26,
                t27: data.t27,
                t28: data.t28,
                t29: data.t29,
                t30: data.t30,
                controlsequenceno: data.controlsequenceno,
                processcontrolsequenceno: data.processcontrolsequenceno,
                previousprocesscontrolsequenceno: data.previousprocesscontrolsequenceno,
                rowid: data.rowid,
                deviationcategorydesc: data.deviationcategorydesc,
                statusdesc: data.statusdesc,
                deviationcategorydesc: data.deviationcategorydesc
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

