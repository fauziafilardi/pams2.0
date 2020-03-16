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
                                        <ABSinputTextVuex :prop="PI_debtorcd" v-model="M_AR_CancelIndirectInvoice.debtorcd"  ref="ref_debtorcd" />
                                      </b-col>
                                      <!-- <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_debtorname" v-model="M_AR_CancelIndirectInvoice.debtorname"  ref="ref_debtorname" />
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debitno" v-model="M_AR_CancelIndirectInvoice.debitno"  ref="ref_debitno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_debitdate" v-model="M_AR_CancelIndirectInvoice.debitdate"  ref="ref_debitdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_AR_CancelIndirectInvoice.currencycd"  ref="ref_currencycd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_billingamt" v-model="M_AR_CancelIndirectInvoice.billingamt"  ref="ref_billingamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_allocatedamt" v-model="M_AR_CancelIndirectInvoice.allocatedamt"  ref="ref_allocatedamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OncancelyesnoChange" :prop="PI_cancelyesno" v-model="M_AR_CancelIndirectInvoice.cancelyesno"  ref="ref_cancelyesno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OncanceldateChange" :prop="PI_canceldate" v-model="M_AR_CancelIndirectInvoice.canceldate"  ref="ref_canceldate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreasoncdChange" :prop="PI_reasoncd" :value="M_AR_CancelIndirectInvoice.reasoncd" :label="M_AR_CancelIndirectInvoice.reasoncdLabel" ref="ref_reasoncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reasondescs" v-model="M_AR_CancelIndirectInvoice.reasondescs"  ref="ref_reasondescs"/>
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
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_CancelIndirectInvoice :{
                debtorcd: '',
                debitno: '',
                debitdate: '',
                currencycd: '',
                billingamt: '',
                allocatedamt: '',
                useredit: this.getDataUser().UserId,
                userinput: '',
                debtorname: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0,
                cancelyesno: '',
                canceldate: '',
                reasoncd: '',
                reasondescs: ''
                    }
            ,
            PI_debtorcd: { 
                cValidate :'', 
                cName: 'debtorcd', 
                cLabel: 'Debtor Code', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            // PI_debtorname: { 
            //     cLabel: 'Debtor Name', 
            //     cLabelSize: 4, 
            //     cValue: '', 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cVisible: true 
            // }, 
            PI_debitno: { 
                cValidate :'', 
                cName: 'debitno', 
                cLabel: 'Invoice No', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_debitdate: { 
                cLabel: 'Invoice Date', 
                cLabelSize: 4, 
                cValue: '', 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_currencycd: { 
                cLabel: 'Currency', 
                cLabelSize: 4, 
                cValue: '', 
                cProtect: true,
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_billingamt: { 
                cValidate :'', 
                cName: 'billingamt', 
                cLabel: 'Billing Amount', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2,
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_allocatedamt: { 
                cLabel: 'Received Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_cancelyesno: { 
                cValidate :'', 
                cName: 'cancelyesno', 
                cId: 'rdbcancelyesno', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' }, { text: 'No', value: 'N' }], 
                cRadioDefaultOption: 'N', 
                cLabel:'Cancel', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_canceldate: { 
                cValidate :'required', 
                cName: 'canceldate', 
                cLabel: 'Cancel Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
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
                cOrder: 0, 
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
                cMasterUrl: 'CM/CM_Reason' ,
                cDisplayColumn: 'ReasonCd,Descs' ,
            }, 
            PI_reasondescs: { 
                cValidate :'required|max:60', 
                cName: 'reasondescs', 
                cLabel: 'Reason Description', 
                cLabelSize: 4, 
                cOrder: 0, 
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
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {		
        OncancelyesnoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if(data=='Y'){
                    this.PI_reasoncd.cProtect = false
                    this.PI_reasoncd.cValidate = ''
                    
                    this.PI_reasondescs.cProtect = false
                    this.PI_reasondescs.cValidate = ''

                    this.PI_canceldate.cProtect = false
                    this.PI_canceldate.cValidate = ''

                }else{
                    this.PI_reasoncd.cProtect = true
                    this.PI_reasoncd.cValidate = ''
                    
                    this.PI_reasondescs.cProtect = true
                    this.PI_reasondescs.cValidate = ''

                    this.PI_canceldate.cProtect = true
                    this.PI_canceldate.cValidate = ''


                }
            }
        })
        this.$forceUpdate()
        },
        OncanceldateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{canceldate}
            }
        })
        this.$forceUpdate()
        },
        OnreasoncdChange (data) {
        this.$nextTick(() => {
            this.M_AR_CancelIndirectInvoice.reasoncd = data.id
            this.M_AR_CancelIndirectInvoice.reasoncdLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.M_AR_CancelIndirectInvoice.reasondescs = data.Descs
//{reasoncd}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
        //    this.getToolbar().isNew = true
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
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },		
		paramFromParent(){
        },		
        M_Post(dt){
        },
        M_Insert() {
            //nothing
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: this.M_AR_CancelIndirectInvoice.debitno,
                Cancel: this.M_AR_CancelIndirectInvoice.cancelyesno,
                UserEdit: this.getDataUser().UserId ,
                CancelDate: this.M_AR_CancelIndirectInvoice.canceldate == '' || this.M_AR_CancelIndirectInvoice.canceldate == null ? 'NULL' : this.M_AR_CancelIndirectInvoice.canceldate ,
                ReasonCd: this.M_AR_CancelIndirectInvoice.reasoncd == '' || this.M_AR_CancelIndirectInvoice.reasoncd == null ? 'NULL' : this.M_AR_CancelIndirectInvoice.reasoncd ,
                ReasonDescs: this.M_AR_CancelIndirectInvoice.reasondescs,
                LastUpdateStamp: this.M_AR_CancelIndirectInvoice.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_CancelIndirectInvoice = {
                debtorcd: '',
                debitno: '',
                debitdate: '',
                currencycd: '',
                billingamt: '',
                allocatedamt: '',
                useredit: this.getDataUser().UserId,
                userinput: '',
                debtorname: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0,
                cancelyesno: 'N',
                canceldate: '',
                reasoncd: '',
                reasondescs: ''
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                debitno: record.DebitNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_AR_CancelIndirectInvoice = {
                debtorcd: data.debtorcd + this.separator + data.debtorname,
                debitno: data.debitno,
                debitdate: data.debitdate,
                currencycd: data.currencycd,
                billingamt: this.isCurrency(data.billingamt, this.decimal),
                allocatedamt: this.isCurrency(data.allocatedamt, this.decimal),
                useredit: data.useredit,
                userinput: data.userinput,
                debtorname: data.debtorname,
                subportfoliocd: data.subportfoliocd,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                cancelyesno: data.cancelyesno,
                canceldate: data.canceldate,
                reasoncd: data.reasoncd,
                reasondescs: data.reasondescs
                    }
                 
                this.M_AR_CancelIndirectInvoice.cancelyesno = 'N'
                this.PI_reasoncd.cProtect = true
                    this.PI_reasoncd.cValidate = ''
                    
                    this.PI_reasondescs.cProtect = true
                    this.PI_reasondescs.cValidate = ''

                    this.PI_canceldate.cProtect = true
                    this.PI_canceldate.cValidate = ''

                this.M_AR_CancelIndirectInvoice.reasoncdLabel = this.M_AR_CancelIndirectInvoice.reasoncd != null ? data.reasoncd + this.separator + data.reasondescs :'' 
         

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

