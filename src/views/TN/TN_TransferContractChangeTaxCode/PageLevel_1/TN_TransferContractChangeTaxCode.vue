<template>
    <div>
        <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
            <div class="div-collapse" v-b-toggle.collapse1>
                <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
                    Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                </span>
            </div>
            <b-collapse id="collapse1" :visible="true">
                <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                    <b-col md="12" id="col-left" class="bColMasterForm">
                        <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntaxcodefromChange" :prop="PI_taxcodefrom" :value="M_TN_TransferContractChangeTaxCode.taxcodefrom" :label="M_TN_TransferContractChangeTaxCode.taxcodefromLabel" ref="ref_taxcodefrom"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntaxcodetoChange" :prop="PI_taxcodeto" :value="M_TN_TransferContractChangeTaxCode.taxcodeto" :label="M_TN_TransferContractChangeTaxCode.taxcodetoLabel" ref="ref_taxcodeto"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OntypeChange" :prop="PI_type" v-model="M_TN_TransferContractChangeTaxCode.type"  ref="ref_type" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OndatefromChange" :prop="PI_datefrom" v-model="M_TN_TransferContractChangeTaxCode.datefrom"  ref="ref_datefrom" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OndatetoChange" :prop="PI_dateto" v-model="M_TN_TransferContractChangeTaxCode.dateto"  ref="ref_dateto" />
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
            FormType: "Form",
			Module:"TN",	
            IEBy: {Input: '', Edit: ''},

            M_TN_TransferContractChangeTaxCode :{
                taxcodefrom: '',
                taxcodeto: '',
                type: 'T',
                datefrom: '',
                dateto: ''
                    }
            ,					
            PI_taxcodefrom: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTaxCode'    , 
                    ColumnDB: 'TaxCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'taxcodefrom', 
                cLabel: 'Tax Code From', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'TaxCd, Descs' ,
            }, 
            PI_taxcodeto: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTaxCode'    , 
                    ColumnDB: 'TaxCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'taxcodeto', 
                cLabel: 'Tax Code To', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'TaxCd, Descs' ,
            }, 
            PI_type: { 
                cValidate :'', 
                cName: 'type', 
                cId: 'rdbtype', 
                cRadioOptions: [{ text: 'Transaction Type Subportfolio', value: 'T' }, { text: 'Contract Billing Schedule', value: 'C' }, { text: 'Amortization Schedule', value: 'A' }], 
                cRadioDefaultOption: '', 
                cLabel:'Transaction Type ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_datefrom: { 
                cValidate :'', 
                cName: 'datefrom', 
                cLabel: '- Date From', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_dateto: { 
                cValidate :'', 
                cName: 'dateto', 
                cLabel: '- Date To', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
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
    }
  },
    methods: {		
        OntaxcodefromChange (data) {
        this.$nextTick(() => {
            this.M_TN_TransferContractChangeTaxCode.taxcodefrom = data.id
            this.M_TN_TransferContractChangeTaxCode.taxcodefromLabel = data.label
            if (this.inputStatus != "VIEW") {
//{taxcodefrom}
            }
        })
        this.$forceUpdate()
        },
        OntaxcodetoChange (data) {
        this.$nextTick(() => {
            this.M_TN_TransferContractChangeTaxCode.taxcodeto = data.id
            this.M_TN_TransferContractChangeTaxCode.taxcodetoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{taxcodeto}
            }
        })
        this.$forceUpdate()
        },
        OntypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{type}
            }
        })
        this.$forceUpdate()
        },
        OndatefromChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{datefrom}
            }
        })
        this.$forceUpdate()
        },
        OndatetoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{dateto}
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
                
                this.alertSuccess(response.Message)
                .then(() => {
                    this.getToolbar().FormStatus = 'EDIT'
                    this.getToolbar().ProcessPS()
                    this.$store.commit('setStatus', 'view')
					this.$store.commit('setEventStatus', 'Save')

                    this.FormToMasterPage().ValidasiPage()
										
					
                })
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                TaxCodeFrom: this.M_TN_TransferContractChangeTaxCode.taxcodefrom == '' || this.M_TN_TransferContractChangeTaxCode.taxcodefrom == null ? 'NULL' : this.M_TN_TransferContractChangeTaxCode.taxcodefrom,
                TaxCodeTo: this.M_TN_TransferContractChangeTaxCode.taxcodeto == '' || this.M_TN_TransferContractChangeTaxCode.taxcodeto == null ? 'NULL' : this.M_TN_TransferContractChangeTaxCode.taxcodeto,
                Type: this.M_TN_TransferContractChangeTaxCode.type,
                DateFrom: this.M_TN_TransferContractChangeTaxCode.datefrom == '' || this.M_TN_TransferContractChangeTaxCode.datefrom == null ? 'NULL' : this.M_TN_TransferContractChangeTaxCode.datefrom,
                DateTo: this.M_TN_TransferContractChangeTaxCode.dateto == '' || this.M_TN_TransferContractChangeTaxCode.dateto == null ? 'NULL' : this.M_TN_TransferContractChangeTaxCode.dateto                    
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.alertSuccess(response.Message)
                .then(() => {
                    this.M_ClearForm()
                    this.$store.commit('setStatus', 'view')
                    this.getToolbar().doEdit()

                    this.FormToMasterPage().ValidasiPage()
					
                })
            })
        },
		M_ClearForm(){
            this.$nextTick(() => {
                 this.M_TN_TransferContractChangeTaxCode = {
                taxcodefrom: '',
                taxcodeto: '',
                type: 'T',
                datefrom: '',
                dateto: ''
                    }
            })
            this.$forceUpdate()  
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){       

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                SubPortfolioCd:this.getDataUser().SubPortfolioCd,
                PortfolioCd:this.getDataUser().PortfolioCd,
                LineNo: this.$parent.data.PageOrder,
                Data: dt
				//,SourceValue:''
            }
            
            this.postJSONMulti( this.getUrlDeleteMulti(), param )
            .then(response => {
                if (response == null) return
				var message = "Deleting Data Successfully"   				
				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
				this.$parent.resultDelete(message)
				


            })
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder

            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_TN_TransferContractChangeTaxCode = {
                taxcodefrom: data.taxcodefrom,
                taxcodeto: data.taxcodeto,
                type: data.type,
                datefrom: data.datefrom,
                dateto: data.dateto
                    }
                 

                this.M_TN_TransferContractChangeTaxCode.taxcodefromLabel = this.M_TN_TransferContractChangeTaxCode.taxcodefrom != null && this.M_TN_TransferContractChangeTaxCode.taxcodefrom != '' ? data.taxcodefrom + this.separator  :'' 
                this.M_TN_TransferContractChangeTaxCode.taxcodetoLabel = this.M_TN_TransferContractChangeTaxCode.taxcodeto != null && this.M_TN_TransferContractChangeTaxCode.taxcodeto != '' ? data.taxcodeto + this.separator  :'' 
         

                this.IEBy.Input = data.UserInput
                this.IEBy.Edit = data.UserEdit

            })
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','Form')
        // this.isDetail = true
    },
    beforeMount: function() {
    },
    mounted: function() {
        // this.getDataBy()
        this.getToolbar().doEdit(true)
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
