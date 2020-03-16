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
                                        <ABSinputTextVuex @input="OnvatreferencenoChange" :prop="PI_vatreferenceno" v-model="M_AR_CustVATInvMonitoring.vatreferenceno"  ref="ref_vatreferenceno" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_vatdate" v-model="M_AR_CustVATInvMonitoring.vatdate"  ref="ref_vatdate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_debitno" v-model="M_AR_CustVATInvMonitoring.debitno"  ref="ref_debitno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex :prop="PI_debitdate" v-model="M_AR_CustVATInvMonitoring.debitdate"  ref="ref_debitdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_AR_CustVATInvMonitoring.descs"  ref="ref_descs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_AR_CustVATInvMonitoring.currencycd"  ref="ref_currencycd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_taxcurrencyrate" v-model="M_AR_CustVATInvMonitoring.taxcurrencyrate"  ref="ref_taxcurrencyrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_netamt" v-model="M_AR_CustVATInvMonitoring.netamt"  ref="ref_netamt"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_vatamt" v-model="M_AR_CustVATInvMonitoring.vatamt"  ref="ref_vatamt"/>
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
                initialWhere: "SubportfolioCd = '"+ this.getDataUser().SubPortfolioCd +"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_CustVATInvMonitoring :{
                vatno: '',
                vatreferenceno: '',
                vatdate: '',
                debitno: '',
                debitdate: '',
                descs: '',
                currencycd: '',
                taxcurrencyrate: '',
                trxamt: '',
                netamt: '',
                vatamt: '',
                useredit: this.getDataUser().UserId,
                userinput: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_vatdate: { 
                cValidate :'', 
                cName: 'vatdate', 
                cLabel: 'Tax Invoice Date ',
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            
            PI_vatreferenceno: { 
                cValidate :'required|max:10',                 
                cName: 'vatreferenceno', 
                cLabel: 'Tax Invoice No ', 
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
            PI_debitno: { 
                cValidate :'', 
                cName: 'debitno', 
                cLabel: 'Doc. No', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cProtect: true 
            },
            PI_debitdate: { 
                cValidate :'', 
                cName: 'debitdate', 
                cLabel: 'Doc. Date',
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cProtect: true 
            }, 
            PI_descs: { 
                cValidate :'', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cProtect: true
            }, 
            PI_currencycd: {                
                cValidate :'', 
                cName: 'currencycd', 
                cLabel: 'Currency', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cProtect: true
            }, 
            PI_taxcurrencyrate: { 
                cLabel: 'Tax Currency Rate', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            }, 
            PI_netamt: { 
                cLabel: 'Doc. Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
            }, 
            PI_vatamt: { 
                cLabel: 'VAT Amount', 
                cLabelSize: 4, 
                cValue: '', 
                cType: 'decimal',
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cProtect: true 
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
        OnvatreferencenoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{vatreferenceno}
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
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: this.M_AR_CustVATInvMonitoring.debitno,
                VatReferenceNo: this.M_AR_CustVATInvMonitoring.vatreferenceno == '' || this.M_AR_CustVATInvMonitoring.vatreferenceno == null ? 'NULL' : this.M_AR_CustVATInvMonitoring.vatreferenceno ,
                VatDate: this.M_AR_CustVATInvMonitoring.vatdate,
                Status: this.M_AR_CustVATInvMonitoring.vatreferenceno == '' || this.M_AR_CustVATInvMonitoring.vatreferenceno == null ? this.ARFieldHelper.VAT_STATUS_NEW : this.ARFieldHelper.VAT_STATUS_CONFIRMED,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_AR_CustVATInvMonitoring.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_AR_CustVATInvMonitoring = {
                vatno: '',
                vatreferenceno: '',
                vatdate: '',
                debitno: '',
                debitdate: '',
                descs: '',
                currencycd: '',
                taxcurrencyrate: '',
                trxamt: '',
                netamt: '',
                vatamt: '',
                useredit: this.getDataUser().UserId,
                userinput: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0
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
this.M_AR_CustVATInvMonitoring = {
                vatno: data.vatno,
                vatreferenceno: data.vatreferenceno,
                vatdate: data.vatdate,
                debitno: data.debitno,
                debitdate: data.debitdate,
                descs: data.descs,
                currencycd: data.currencycd,
                taxcurrencyrate: this.isCurrency(data.taxcurrencyrate, this.decimal),
                trxamt: this.isCurrency(data.trxamt, this.decimal),
                netamt: this.isCurrency(data.netamt, this.decimal),
                vatamt: this.isCurrency(data.vatamt, this.decimal),
                useredit: data.useredit,
                userinput: data.userinput,
                subportfoliocd: data.subportfoliocd,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
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

