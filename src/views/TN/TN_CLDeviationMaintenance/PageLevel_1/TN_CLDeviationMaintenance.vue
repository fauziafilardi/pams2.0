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
                                        <ABSinputTextVuex :prop="PI_deviationapprovalno" v-model="M_TN_CLDeviationMaintenance.deviationapprovalno"  ref="ref_deviationapprovalno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OndeviationdateChange" :prop="PI_deviationdate" v-model="M_TN_CLDeviationMaintenance.deviationdate"  ref="ref_deviationdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OndeviationcategoryChange" :prop="PI_deviationcategory" v-model="M_TN_CLDeviationMaintenance.deviationcategory"  ref="ref_deviationcategory" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_deviationof" v-model="M_TN_CLDeviationMaintenance.deviationof"  ref="ref_deviationof"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_CLDeviationMaintenance.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_deviationreason" v-model="M_TN_CLDeviationMaintenance.deviationreason"  ref="ref_deviationreason"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnnotefromapprovalChange" :prop="PI_notefromapproval" v-model="M_TN_CLDeviationMaintenance.notefromapproval"  ref="ref_notefromapproval" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_CLDeviationMaintenance.remarks"  ref="ref_remarks" />
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
                initialWhere: "ProcessControlSequenceNo IS NULL AND CustomerType = 'C' AND SubPortfolioCd ='" +this.getDataUser().SubPortfolioCd+ "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_CLDeviationMaintenance :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                deviationapprovalno: '',
                deviationcategory: '',
                deviationdate: '',
                descs: '',
                occupancycost: 0,
                totalaging: 0,
                arrsubsectorinfloor: 0,
                arrfloor: 0,
                arrsubsectorinmall: 0,
                deviationreason: '',
                notefromapproval: '',
                status: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0,
                deviationof: ''
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
                cValidate :'', 
                cName: 'deviationcategory', 
                cId: 'rdbdeviationcategory', 
                cRadioOptions: [{ text: 'New Lease', value: 'N' },{ text: 'Replacement', value: 'P' },{ text: 'Renew', value: 'R' },{ text: 'Other', value: 'O' }], 
                cRadioDefaultOption: '', 
                cLabel:'Category', 
                cLabelSize: 4, 
                cOrder: 3, 
                cProtect: true, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex  
            }, 
            PI_deviationof: { 
                cValidate :'max:150', 
                cName: 'deviationof', 
                cLabel: 'Deviation of', 
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
            PI_descs: { 
                cValidate :'max:150', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_deviationreason: { 
                cValidate :'', 
                cName: 'deviationreason', 
                cLabel: 'Deviation Reason', 
                cLabelSize: 4, 
                cOrder: 6, 
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
                cOrder:7, 
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
                cOrder:8, 
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
        OndeviationcategoryChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{deviationcategory}
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
                DeviationApprovalNo: this.M_TN_CLDeviationMaintenance.deviationapprovalno,
                DeviationDate: this.M_TN_CLDeviationMaintenance.deviationdate == '' || this.M_TN_CLDeviationMaintenance.deviationdate == null ? 'NULL' : this.M_TN_CLDeviationMaintenance.deviationdate ,
                DeviationCategory: this.M_TN_CLDeviationMaintenance.deviationcategory,
                Descs: this.M_TN_CLDeviationMaintenance.descs,
                DeviationReason: this.M_TN_CLDeviationMaintenance.deviationreason,
                NotesFromApproval: this.M_TN_CLDeviationMaintenance.notefromapproval,
                Remarks: this.M_TN_CLDeviationMaintenance.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_CLDeviationMaintenance.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_CLDeviationMaintenance = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                deviationapprovalno: '',
                deviationcategory: '',
                deviationdate: '',
                descs: '',
                occupancycost: 0,
                totalaging: 0,
                arrsubsectorinfloor: 0,
                arrfloor: 0,
                arrsubsectorinmall: 0,
                deviationreason: '',
                notefromapproval: '',
                status: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0,
                deviationof: ''
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
,                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                deviationapprovalno: record.DeviationApprovalNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_TN_CLDeviationMaintenance = {
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
                deviationapprovalno: data.deviationapprovalno,
                deviationcategory: data.deviationcategory,
                deviationdate: data.deviationdate,
                descs: data.descs,
                occupancycost: this.isCurrency(data.occupancycost, this.decimal),
                totalaging: this.isCurrency(data.totalaging, this.decimal),
                arrsubsectorinfloor: this.isCurrency(data.arrsubsectorinfloor, this.decimal),
                arrfloor: this.isCurrency(data.arrfloor, this.decimal),
                arrsubsectorinmall: this.isCurrency(data.arrsubsectorinmall, this.decimal),
                deviationreason: data.deviationreason,
                notefromapproval: data.notefromapproval,
                status: data.status,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                deviationof: data.deviationof
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

