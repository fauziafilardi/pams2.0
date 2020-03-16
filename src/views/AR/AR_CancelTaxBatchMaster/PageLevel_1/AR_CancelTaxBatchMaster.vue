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
                                        <ABSinputTextVuex :prop="PI_taxstatus" v-model="M_AR_CancelTaxBatchMaster.taxstatus"  ref="ref_taxstatus"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debtorcd" v-model="M_AR_CancelTaxBatchMaster.debtorcd"  ref="ref_debtorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debitno" v-model="M_AR_CancelTaxBatchMaster.debitno"  ref="ref_debitno"/>
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSinputDateVuex :prop="PI_debitdate" v-model="M_AR_CancelTaxBatchMaster.debitdate"  ref="ref_debitdate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AR_CancelTaxBatchMaster.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_AR_CancelTaxBatchMaster.currencycd"  ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_withholdingamt" v-model="M_AR_CancelTaxBatchMaster.withholdingamt"  ref="ref_withholdingamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_vatamt" v-model="M_AR_CancelTaxBatchMaster.vatamt"  ref="ref_vatamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnstatusChange" :prop="PI_status" v-model="M_AR_CancelTaxBatchMaster.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreasoncdChange" :prop="PI_reasoncd" :value="M_AR_CancelTaxBatchMaster.reasoncd" :label="M_AR_CancelTaxBatchMaster.reasoncdLabel" ref="ref_reasoncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reasondescs" v-model="M_AR_CancelTaxBatchMaster.reasondescs"  ref="ref_reasondescs"/>
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
		Module:"AR",
            propList: {
                initialWhere: "SubportfolioCd='" + this.getDataUser().SubPortfolioCd + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_CancelTaxBatchMaster :{
               subportfoliocd: this.getDataUser().SubPortfolioCd,
               debtorcd: '',
               debitno: '',
               debitdate: '',
               withholdingamt: '',
               vatamt: '',
               taxstatus: '',
               useredit: this.getDataUser().UserId,
               userinput: '',
               currencycd: 0,
               reasoncd: '',
               reasondescs: '',
               debtorname: '',
               status: 'N',
               descs: '',
               contactid: '',
               timeedit: '',
               lastupdatestamp: 0,
               rowid: 0
            }
            ,
            PI_taxstatus: { 
                cValidate :'', 
                cName: 'taxstatus', 
                cLabel: 'Tax Type', 
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
            PI_debtorcd: { 
                cValidate :'', 
                cName: 'debtorcd', 
                cLabel: 'Debtor ', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_debitno: { 
                cValidate :'', 
                cName: 'debitno', 
                cLabel: 'Doc. No', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_debitdate: { 
                cValidate :'', 
                cName: 'debitdate', 
                cLabel: 'Doc. Date', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_descs: { 
                cValidate :'', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_currencycd: { 
                cValidate :'', 
                cName: 'currencycd', 
                cLabel: 'Currency', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_withholdingamt: { 
                cValidate :'', 
                cName: 'withholdingamt', 
                cLabel: 'Withholding Amount', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: true, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_vatamt: { 
                cValidate :'', 
                cName: 'vatamt', 
                cLabel: 'VAT Amount', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: true, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_status: { 
                cValidate :'', 
                cName: 'status', 
                cId: 'rdbstatus', 
                cRadioOptions: [{ text: 'Yes', value: 'X' },{ text: 'No', value: 'N' }], 
                cRadioDefaultOption: '',
                cLabel:'Cancel', 
                cLabelSize: 4, 
                cOrder: 9, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_reasoncd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMReason'    , 
                    ColumnDB: 'ReasonCd'   , 
                    InitialWhere: "ModuleCd='AR' OR ModuleCd is null"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'reasoncd', 
                cLabel: 'Reason', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 10, 
                cTriggered: false, 
                cDefault: '', 
                cProtect: true, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: false, 
                cMasterUrl: '' ,
                cDisplayColumn: 'ReasonCd,Descs' ,
            },
            PI_reasondescs: { 
                cValidate :'max:60', 
                cName: 'reasondescs', 
                cLabel: 'Reason Description', 
                cLabelSize: 4, 
                cOrder: 11, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
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
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {		
        OnstatusChange (data) {
            // console.log(data)
        this.M_AR_CancelTaxBatchMaster.status = data
            this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if ( data == 'X') {
                    this.PI_reasoncd.cProtect = false
                    this.PI_reasondescs.cProtect = false
                } 
                else {
                    this.PI_reasoncd.cProtect = true
                    this.PI_reasondescs.cProtect = true
                    this.M_AR_CancelTaxBatchMaster.reasoncd = ""
                    this.M_AR_CancelTaxBatchMaster.reasoncdLabel = ""
                    this.M_AR_CancelTaxBatchMaster.reasondescs = ""
                }
            }
        })
        this.$forceUpdate()
        },
        OnreasoncdChange (data) {
            // console.log(data)
        this.$nextTick(() => {
            this.M_AR_CancelTaxBatchMaster.reasoncd = data.id
            this.M_AR_CancelTaxBatchMaster.reasoncdLabel = data.label
            this.M_AR_CancelTaxBatchMaster.reasondescs = data.Descs
            if (this.inputStatus != "VIEW") {
                // this.setColumnreasondescsWhere()
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           this.getToolbar().statusFunction[0].disabled = true
           this.getToolbar().statusFunction[2].disabled = true
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
            this.M_AR_CancelTaxBatchMaster.lastupdatestamp = record.LastUpdateStamp
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },		
		paramFromParent(){
        },		
        M_Post(dt){
        },
        M_Insert() {
        },
        M_Update() {
            
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: this.M_AR_CancelTaxBatchMaster.debitno,
                Status: this.M_AR_CancelTaxBatchMaster.status,
                ReasonCd: this.M_AR_CancelTaxBatchMaster.reasoncd == '' || this.M_AR_CancelTaxBatchMaster.reasoncd == null ? 'NULL' : this.M_AR_CancelTaxBatchMaster.reasoncd ,
                ReasonDescs: this.M_AR_CancelTaxBatchMaster.reasondescs,
                UserEdit: this.getDataUser().UserId,
                LastUpdateStamp: this.M_AR_CancelTaxBatchMaster.lastupdatestamp,
                }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_CancelTaxBatchMaster = {
               subportfoliocd: '',
               debtorcd: '',
               debitno: '',
               debitdate: '',
               withholdingamt: '',
               vatamt: '',
               taxstatus: '',
               useredit: this.getDataUser().UserId,
               userinput: '',
               currencycd: 0,
               reasoncd: '',
               reasondescs: '',
               debtorname: '',
               status: 'N',
               descs: '',
               contactid: '',
               timeedit: '',
               lastupdatestamp: 0,
               rowid: 0    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
            console.log(record)
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,               
                SubPortfolioCd:this.getDataUser().SubPortfolioCd,
                DebitNo: record.DebitNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                

                var taxstatus = ""
                if (data.taxstatus) {
                    if (data.taxstatus.toString() == "0") {
                        taxstatus = "No Tax"
                    }
                    else if (data.taxstatus.toString() == "1") {
                        taxstatus = "VAT"
                    }
                    else if (data.taxstatus.toString() == "2") {
                        taxstatus = "VAT & Withholding"
                    }
                    else if (data.taxstatus.toString() == "3") {
                        taxstatus = "Withholding"
                    }
                }

            this.M_AR_CancelTaxBatchMaster = {
                subportfoliocd: data.subportfoliocd,
                debtorcd: data.debtorcd,
                debitno: data.debitno,
                debitdate: data.debitdate,
                withholdingamt: this.isCurrency(data.withholdingamt),
                vatamt: this.isCurrency(data.vatamt),
                taxstatus: taxstatus,
                useredit: data.useredit,
                userinput: data.userinput,
                currencycd: data.currencycd,
                reasoncd: data.reasoncd,
                reasoncdLabel: data.reasoncd,
                reasondescs: data.reasondescs,
                debtorname: data.debtorname,
                status: data.status,
                descs: data.descs,
                contactid: data.contactid,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                }
                this.M_AR_CancelTaxBatchMaster.status = 'N'
                // this.M_AR_CancelTaxBatchMaster.taxstatus = this.M_AR_CancelTaxBatchMaster.taxstatus == 0 ? 'No Tax' : this.M_AR_CancelTaxBatchMaster.taxstatus || this.M_AR_CancelTaxBatchMaster.taxstatus == 1 ? 'VAT' : this.M_AR_CancelTaxBatchMaster.taxstatus || this.M_AR_CancelTaxBatchMaster.taxstatus == 2 ? 'VAT & Withholding' : this.M_AR_CancelTaxBatchMaster.taxstatus || this.M_AR_CancelTaxBatchMaster.taxstatus == 3 ? 'Withholding' : this.M_AR_CancelTaxBatchMaster.taxstatus
                

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        },
        

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

