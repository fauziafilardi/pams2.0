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
      @checkboxChecked = "$parent.checkboxChecked"
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
                                        <ABSinputTextVuex :prop="PI_grnno" v-model="M_AP_InvoiceChargeToGRN_OtherCharges.grnno"  ref="ref_grnno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnotherchargescdChange" :prop="PI_otherchargescd" :value="M_AP_InvoiceChargeToGRN_OtherCharges.otherchargescd" :label="M_AP_InvoiceChargeToGRN_OtherCharges.otherchargescdLabel" ref="ref_otherchargescd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AP_InvoiceChargeToGRN_OtherCharges.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_AP_InvoiceChargeToGRN_OtherCharges.trxamt"  ref="ref_trxamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_allocationamt" v-model="M_AP_InvoiceChargeToGRN_OtherCharges.allocationamt"  ref="ref_allocationamt"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AP_InvoiceChargeToGRN_OtherCharges.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->

							</b-row>
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
			Module:"AP",
            propList: {
                initialWhere:"",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AP_InvoiceChargeToGRN_OtherCharges :{
                grnno: '',
                otherchargescd: '',
                descs: '',
                trxamt: '',
                allocationamt: '0',
                remarks: '',
                creditgrnothersequenceno: '',
                grnallocationothersequenceno: '',
                lastupdatestamp: '',
                creditorcd:'',
                currencycd: '',
                grncontrol: '',
                credittype: '',
                creditno: ''
                    }
            ,
            PI_grnno: { 
                cValidate :'', 
                cName: 'grnno', 
                cLabel: 'GRN No', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_otherchargescd: { 
                dataLookUp: { 
                    LookUpCd: ''    , 
                    ColumnDB: ''   , 
                    InitialWhere: ""   , 
                    ParamWhere: '' ,
                    SourceField: ''  ,
                    DisplayLookup: '' 
                        }, 
                cValidate :'', 
                cName: 'otherchargescd', 
                cLabel: 'Other Charges Code', 
                cKey: true, 
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
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_descs: { 
                cValidate :'', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_trxamt: { 
                cValidate :'', 
                cName: 'trxamt', 
                cLabel: 'Other ChargesAmount', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_allocationamt: { 
                cValidate :'required', 
                cName: 'allocationamt', 
                cLabel: 'Allocation Amount ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:0, 
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
	,GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
	}
  },
    methods: {
        OnotherchargescdChange (data) {
        this.$nextTick(() => {
            this.M_AP_InvoiceChargeToGRN_OtherCharges.otherchargescd = data.id
            this.M_AP_InvoiceChargeToGRN_OtherCharges.otherchargescdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{otherchargescd}
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
        },
		paramFromParent(){
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            this.M_AP_InvoiceChargeToGRN_OtherCharges.grncontrol = data.GRNControl
            this.M_AP_InvoiceChargeToGRN_OtherCharges.creditorcd = data.CreditorCd
            this.M_AP_InvoiceChargeToGRN_OtherCharges.currencycd = data.CurrencyCd
            this.M_AP_InvoiceChargeToGRN_OtherCharges.credittype = data.CreditType
            

            this.propList.ParamView ="'"+ this.getDataUser().SubPortfolioCd +"', '"+ this.M_AP_InvoiceChargeToGRN_OtherCharges.creditorcd +"', '"+ this.M_AP_InvoiceChargeToGRN_OtherCharges.grncontrol +"', '"+ this.M_AP_InvoiceChargeToGRN_OtherCharges.currencycd +"', '"+ this.M_AP_InvoiceChargeToGRN_OtherCharges.credittype +"', '"+ data.InvoiceNo +"'"


            this.FormToABSList().doGetList('','eb_getList')
        },		
		M_CheckboxChecked(data, status, index){

        },		
        M_Insert() {
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                CreditGRNOtherSequenceNo: this.M_AP_InvoiceChargeToGRN_OtherCharges.creditgrnothersequenceno,
                GRNAllocationOtherSequenceNo: this.M_AP_InvoiceChargeToGRN_OtherCharges.grnallocationothersequenceno,
                AllocationAmt: this.M_AP_InvoiceChargeToGRN_OtherCharges.allocationamt,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AP_InvoiceChargeToGRN_OtherCharges.lastupdatestamp,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                Remarks: this.M_AP_InvoiceChargeToGRN_OtherCharges.remarks,
                CreditorCd: this.M_AP_InvoiceChargeToGRN_OtherCharges.creditorcd,
                GRNControl: this.M_AP_InvoiceChargeToGRN_OtherCharges.grncontrol,                
                CurrencyCd: this.M_AP_InvoiceChargeToGRN_OtherCharges.currencycd,
                CreditType: this.M_AP_InvoiceChargeToGRN_OtherCharges.credittype,
                CreditNo: this.M_AP_InvoiceChargeToGRN_OtherCharges.creditno
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return				
                this.$parent.resultUpdate(response.Message)
                this.refreshListParent()
            })
        },
		M_ClearForm(){
            this.M_AP_InvoiceChargeToGRN_OtherCharges = {
                grnno: '',
                otherchargescd: '',
                descs: '',
                trxamt: '',
                allocationamt: '0',
                remarks: ''
                    }
            
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_AP_InvoiceChargeToGRN_OtherCharges.grncontrol = data.GRNControl 



        },
        M_Edit(){
            let data = this.$store.getters.GetPage1Data
            this.M_AP_InvoiceChargeToGRN_OtherCharges.grncontrol = data.GRNControl
            this.M_AP_InvoiceChargeToGRN_OtherCharges.creditorcd = data.CreditorCd
            this.M_AP_InvoiceChargeToGRN_OtherCharges.currencycd = data.CurrencyCd
            this.M_AP_InvoiceChargeToGRN_OtherCharges.credittype = data.CreditType
            this.M_AP_InvoiceChargeToGRN_OtherCharges.creditno = data.InvoiceNo
        },
        M_Delete(dt){           
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({

					_Message_:''

                })
			})
			
			var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataDelete
            }
            
            this.postJSONMulti( this.getUrlDeleteMulti(), param )
            .then(response => {
                if (response == null) return

                this.$parent.resultDelete()
            })
        },        
        getDataBy (record) {
            let data = this.$store.getters.GetPage1Data
            this.M_AP_InvoiceChargeToGRN_OtherCharges.grncontrol = data.GRNControl
            this.M_AP_InvoiceChargeToGRN_OtherCharges.creditorcd = data.CreditorCd
            this.M_AP_InvoiceChargeToGRN_OtherCharges.currencycd = data.CurrencyCd
            this.M_AP_InvoiceChargeToGRN_OtherCharges.credittype = data.CreditType

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                creditgrnothersequenceno: record.CreditGRNOtherSequenceNo,
                grnallocationothersequenceno: record.GRNAllocationOtherSequenceNo,
                CreditorCd: this.M_AP_InvoiceChargeToGRN_OtherCharges.creditorcd,
                CurrencyCd: this.M_AP_InvoiceChargeToGRN_OtherCharges.currencycd,
                GRNControl: this.M_AP_InvoiceChargeToGRN_OtherCharges.grncontrol,
                CreditType: this.M_AP_InvoiceChargeToGRN_OtherCharges.credittype,
                CreditNo: data.InvoiceNo
            }

            this.postJSON( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_AP_InvoiceChargeToGRN_OtherCharges = {
                grnno: data.grnno,
                otherchargescd: data.otherchargescd,
                descs: data.descs,
                trxamt: this.isCurrency(data.otherchargesamt, this.decimal),
                allocationamt: this.isCurrency(data.allocationamt, this.decimal),
                remarks: data.remarks,
                creditgrnothersequenceno: record.CreditGRNOtherSequenceNo,
                grnallocationothersequenceno: record.GRNAllocationOtherSequenceNo,
                lastupdatestamp: record.LastUpdateStamp
                    }
            

                this.M_AP_InvoiceChargeToGRN_OtherCharges.otherchargescdLabel = this.M_AP_InvoiceChargeToGRN_OtherCharges.otherchargescd != null && this.M_AP_InvoiceChargeToGRN_OtherCharges.otherchargescd != '' ? data.otherchargescd  :'' 


                this.IEBy.Input = data.user_input
                this.IEBy.Edit = data.user_edit

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

