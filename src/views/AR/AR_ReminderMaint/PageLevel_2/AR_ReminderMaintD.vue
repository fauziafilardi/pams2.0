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
                                        <ABSCompute :prop="PI_previousreferenceno" v-model="M_AR_ReminderMaintD.previousreferenceno"  ref="ref_previousreferenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_debitno" v-model="M_AR_ReminderMaintD.debitno"  ref="ref_debitno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_debitdate" v-model="M_AR_ReminderMaintD.debitdate"  ref="ref_debitdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_trxtype" v-model="M_AR_ReminderMaintD.trxtype"  ref="ref_trxtype" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_trxtypedescs" v-model="M_AR_ReminderMaintD.trxtypedescs"  ref="ref_trxtypedescs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_descs" v-model="M_AR_ReminderMaintD.descs"  ref="ref_descs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_debitduedate" v-model="M_AR_ReminderMaintD.debitduedate"  ref="ref_debitduedate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_source" v-model="M_AR_ReminderMaintD.source"  ref="ref_source" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_currencycd" v-model="M_AR_ReminderMaintD.currencycd"  ref="ref_currencycd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_taxcd" v-model="M_AR_ReminderMaintD.taxcd"  ref="ref_taxcd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_netamt" v-model="M_AR_ReminderMaintD.netamt"  ref="ref_netamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_vatamt" v-model="M_AR_ReminderMaintD.vatamt"  ref="ref_vatamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_outstandingamt" v-model="M_AR_ReminderMaintD.outstandingamt"  ref="ref_outstandingamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnincludereminderChange" :prop="PI_includereminder" v-model="M_AR_ReminderMaintD.includereminder"  ref="ref_includereminder" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreasoncdChange" :prop="PI_reasoncd" :value="M_AR_ReminderMaintD.reasoncd" :label="M_AR_ReminderMaintD.reasoncdLabel" ref="ref_reasoncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reasondescs" v-model="M_AR_ReminderMaintD.reasondescs"  ref="ref_reasondescs"/>
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
			Module:"AR",
            propList: {
                initialWhere:"ReferenceNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			
            Status: 'N',

            M_AR_ReminderMaintD :{
                debitno: '',
                previousreferenceno: '',
                debitdate: '',
                debitduedate: '',
                trxtype: '',
                descs: '',
                source: '',
                currencycd: '',
                taxcd: '',
                netamt: '',
                vatamt: '',
                outstandingamt: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                trxtypedescs: '',
                sequenceno: 0,
                referenceno: '',
                lastupdatestamp: 0,
                rowid: 0,
                includereminder: '',
                reasoncd: '',
                reasondescs: ''
                    }
            ,
            // PI_previousreferenceno: { 
            //     cValidate :'', 
            //     cName: 'previousreferenceno', 
            //     cLabel: 'Previous Reminder Ref. No', 
            //     cLabelSize: 4, 
            //     cOrder: 0, 
            //     cKey: false, 
            //     cType: 'text',
            //     cVisible: true, 
            //     cProtect: false, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            // },
            PI_previousreferenceno: { 
                cLabel: 'Previous Reminder Ref. No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_debitno: { 
                cLabel: 'Doc. No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_debitdate: { 
                cLabel: 'Doc. Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_trxtype: { 
                cLabel: 'Trans. Type', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_trxtypedescs: { 
                cLabel: 'Trans. Type Desc', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_descs: { 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_debitduedate: { 
                cLabel: 'Due Date', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_source: { 
                cLabel: 'Source', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_currencycd: { 
                cLabel: 'Currency', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_taxcd: { 
                cLabel: 'Tax Code', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_netamt: { 
                cLabel: 'Net Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_vatamt: { 
                cLabel: 'VAT Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_outstandingamt: { 
                cLabel: 'Outstanding Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_includereminder: { 
                cValidate :'', 
                cName: 'includereminder', 
                cId: 'rdbincludereminder', 
                cRadioOptions: [{ text: 'Yes', value: 'N' }, { text: 'No', value: 'X' }], 
                cRadioDefaultOption: '', 
                cLabel:'Include Reminder', 
                cLabelSize: 4, 
                cOrder: 1, 
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
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'reasoncd', 
                cLabel: 'Reason', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 2, 
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
                cOption: [], 
                cMasterUrl: 'CM/CM_Reason' ,
                cDisplayColumn: 'ReasonCd,Descs' ,
            }, 
            PI_reasondescs: { 
                cValidate :'required', 
                cName: 'reasondescs', 
                cLabel: 'Reason Description', 
                cLabelSize: 4, 
                cOrder: 3, 
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
		return this.$store.getters.GetPage2Data
	},
    DataRowPage1(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
        OnincludereminderChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              if(data == 'N'){
                    this.PI_reasoncd.cProtect = true
                    this.PI_reasondescs.cProtect = true

                    
                } else {
                    this.PI_reasoncd.cProtect = false
                    this.PI_reasondescs.cProtect = false

                    this.PI_reasoncd.cValidate = 'required'
                    this.$refs.ref_reasoncd.isRequired = true

                    this.PI_reasondescs.cValidate = 'required'
                    this.$refs.ref_reasondescs.isRequired = true
                }
        // if (data == "Y")
        //      { this.Status = "N"
        //      this.M_AR_ReminderMaintD.reasoncd = "null"
        //      this.M_AR_ReminderMaintD.reasondescs = "" }
        // else {
        //      this.Status = "X" }

            }
        })
        this.$forceUpdate()
        },
        OnreasoncdChange (data) {
        this.$nextTick(() => {
            this.M_AR_ReminderMaintD.reasoncd = data.id
            this.M_AR_ReminderMaintD.reasoncdLabel = data.label

            this.M_AR_ReminderMaintD.reasondescs = data.Descs
            if (this.inputStatus != "VIEW") {
//{reasoncd}
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
      console.log(record)
          // this.M_AR_ReminderMaintD.includereminder = record.Status
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },
		paramFromParent(){
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            this.M_AR_ReminderMaintD.referenceno = data.ReferenceNo 
            this.propList.initialWhere =" ReferenceNo = '" + data.ReferenceNo + "' AND SubportfolioCd = '"+ this.getDataUser().SubPortfolioCd +"'"
        

            this.FormToABSList().doGetList('','eb_getList')
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
            if(this.M_AR_ReminderMaintD.status == 'N'){
                var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                SequenceNo: this.M_AR_ReminderMaintD.sequenceno,
                Status: 'N',
                ReasonCd: '' ,
                ReasonDescs: '',
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_ReminderMaintD.lastupdatestamp                
                }
            }
            else{
                var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                SequenceNo: this.M_AR_ReminderMaintD.sequenceno,
                Status: 'X',
                ReasonCd: this.M_AR_ReminderMaintD.reasoncd == '' || this.M_AR_ReminderMaintD.reasoncd == null ? 'NULL' : this.M_AR_ReminderMaintD.reasoncd ,
                ReasonDescs: this.M_AR_ReminderMaintD.reasondescs,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_ReminderMaintD.lastupdatestamp                
                }
            }
            
            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_ReminderMaintD = {
                debitno: '',
                previousreferenceno: '',
                debitdate: '',
                debitduedate: '',
                trxtype: '',
                descs: '',
                source: '',
                currencycd: '',
                taxcd: '',
                netamt: '',
                vatamt: '',
                outstandingamt: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                trxtypedescs: '',
                sequenceno: 0,
                referenceno: '',
                lastupdatestamp: 0,
                rowid: 0,
                includereminder: '',
                reasoncd: '',
                reasondescs: ''
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_AR_ReminderMaintD.referenceno = data.ReferenceNo 



        },
        M_Edit(){
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                referenceno: record.ReferenceNo,
                sequenceno: record.SequenceNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
                // console.log(data)
                var src = ""
                  if(data.source == 'D') {
                    src = "Debit Note"
                  }
                  else if(data.source == 'G'){
                    src = "Invoice Generated"
                  }
                  else if(data.source == 'S'){
                    src = "Invoice Deposit"
                  }
                  else if(data.source == 'I'){
                    src = "Invoice Manual"
                }


                this.M_AR_ReminderMaintD = {
                  debitno: data.debitno,
                  previousreferenceno: data.previousreferenceno,
                  debitdate: data.debitdate,
                  debitduedate: data.debitduedate,
                  trxtype: data.trxtype,
                  descs: data.descs,
                  source: src,
                  currencycd: data.currencycd,
                  taxcd: data.taxcd,
                  netamt: this.isCurrency(data.netamt, data.decimal),
                  vatamt: this.isCurrency(data.vatamt, data.decimal),
                  outstandingamt: this.isCurrency(data.outstandingamt, data.decimal),
                  userinput: data.userinput,
                  useredit: data.useredit,
                  trxtypedescs: data.trxtypedescs,
                  sequenceno: data.sequenceno,
                  referenceno: data.referenceno,
                  lastupdatestamp: record.LastUpdateStamp,
                  rowid: data.rowid,
                  includereminder: 'N',
                  reasoncd: data.reasoncd,
                  reasondescs: data.reasondescs
                }                 

                this.M_AR_ReminderMaintD.reasoncdLabel = this.M_AR_ReminderMaintD.reasoncd != null ? data.reasoncd + this.separator + data.reasondescs :'' 
  

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

