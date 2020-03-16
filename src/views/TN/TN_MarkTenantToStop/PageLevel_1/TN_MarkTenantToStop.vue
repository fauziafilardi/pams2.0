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
                                        <ABSInputSelectList @change="OnapplicationnoChange" :prop="PI_applicationno" :value="M_TN_MarkTenantToStop.applicationno" :label="M_TN_MarkTenantToStop.applicationnoLabel" ref="ref_applicationno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_agreement" v-model="M_TN_MarkTenantToStop.agreement"  ref="ref_agreement"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_loono" v-model="M_TN_MarkTenantToStop.loono"  ref="ref_loono"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnloodateChange" :prop="PI_loodate" v-model="M_TN_MarkTenantToStop.loodate"  ref="ref_loodate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_loino" v-model="M_TN_MarkTenantToStop.loino"  ref="ref_loino"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnloidateChange" :prop="PI_loidate" v-model="M_TN_MarkTenantToStop.loidate"  ref="ref_loidate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_lano" v-model="M_TN_MarkTenantToStop.lano"  ref="ref_lano"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnladateChange" :prop="PI_ladate" v-model="M_TN_MarkTenantToStop.ladate"  ref="ref_ladate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_customer" v-model="M_TN_MarkTenantToStop.customer"  ref="ref_customer"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_customercategory" v-model="M_TN_MarkTenantToStop.customercategory"  ref="ref_customercategory"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_brand" v-model="M_TN_MarkTenantToStop.brand"  ref="ref_brand"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_theme" v-model="M_TN_MarkTenantToStop.theme"  ref="ref_theme"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_class" v-model="M_TN_MarkTenantToStop.class"  ref="ref_class"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_category" v-model="M_TN_MarkTenantToStop.category"  ref="ref_category"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateRangeVuex :prop="PI_startdate" :valueFrom="M_TN_MarkTenantToStop.startdate" :valueTo="M_TN_MarkTenantToStop.enddate" ref="ref_startdate" @from="MdtRange_startdate" @to="MdtRange_enddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_leaseperiod" v-model="M_TN_MarkTenantToStop.leaseperiod"  ref="ref_leaseperiod"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateRangeVuex :prop="PI_rcd" :valueFrom="M_TN_MarkTenantToStop.rcd" :valueTo="M_TN_MarkTenantToStop.red" ref="ref_rcd" @from="MdtRange_rcd" @to="MdtRange_red" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_TN_MarkTenantToStop.currencycd"  ref="ref_currencycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalrental" v-model="M_TN_MarkTenantToStop.totalrental"  ref="ref_totalrental"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_grossseminetarea" v-model="M_TN_MarkTenantToStop.grossseminetarea"  ref="ref_grossseminetarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_marketing" v-model="M_TN_MarkTenantToStop.marketing"  ref="ref_marketing"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreasoncdChange" :prop="PI_reasoncd" :value="M_TN_MarkTenantToStop.reasoncd" :label="M_TN_MarkTenantToStop.reasoncdLabel" ref="ref_reasoncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_reasondescs" v-model="M_TN_MarkTenantToStop.reasondescs"  ref="ref_reasondescs"/>
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

            M_TN_MarkTenantToStop :{
                applicationno: '',
                agreement: '',
                loono: '',
                loodate: '',
                loino: '',
                loidate: '',
                lano: '',
                ladate: '',
                customer: '',
                customercategory: '',
                brand: '',
                theme: '',
                class: '',
                category: '',
                startdate: '',
                enddate: '',
                leaseperiod: '',
                rcd: '',
                red: '',
                stopdate: this.getToday(),
                currencycd: '',
                totalrental: '0',
                grossseminetarea: '0',
                marketing: '',
                reasoncd: '',
                reasondescs: ''
                    }
            ,					
            PI_applicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupApplicationNo'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "([Status] IN ('N','A')) AND (ContractStatus IN ('2','3','4'))"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'applicationno', 
                cLabel: 'Application No', 
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
                cDisplayColumn: 'ApplicationNo,BusinessName' ,
            }, 
            PI_agreement: { 
                cValidate :'', 
                cName: 'agreement', 
                cLabel: 'Agreement status', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_loono: { 
                cValidate :'', 
                cName: 'loono', 
                cLabel: 'LOO No', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_loodate: { 
                cValidate :'', 
                cName: 'loodate', 
                cLabel: 'LOO Date', 
                cLabelSize: 4, 
                cOrder: 14, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_loino: { 
                cValidate :'', 
                cName: 'loino', 
                cLabel: 'LOI No', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_loidate: { 
                cValidate :'', 
                cName: 'loidate', 
                cLabel: 'LOI Date', 
                cLabelSize: 4, 
                cOrder: 14, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_lano: { 
                cValidate :'', 
                cName: 'lano', 
                cLabel: 'LA No', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_ladate: { 
                cValidate :'', 
                cName: 'ladate', 
                cLabel: 'LA Date', 
                cLabelSize: 4, 
                cOrder: 14, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_customer: { 
                cValidate :'', 
                cName: 'customer', 
                cLabel: 'Customer', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_customercategory: { 
                cValidate :'', 
                cName: 'customercategory', 
                cLabel: 'Customer Category', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_brand: { 
                cValidate :'', 
                cName: 'brand', 
                cLabel: 'Brand Name', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_theme: { 
                cValidate :'', 
                cName: 'theme', 
                cLabel: 'Theme', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_class: { 
                cValidate :'', 
                cName: 'class', 
                cLabel: 'Class', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_category: { 
                cValidate :'', 
                cName: 'category', 
                cLabel: 'Category', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_startdate: { 
                cValidate :'', 
                cName: 'startdate', 
                cLabel: 'Lease Start Date', 
                cLabelSize: 4, 
                cOrder: 14, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_leaseperiod: { 
                cValidate :'', 
                cName: 'leaseperiod', 
                cLabel: 'Lease Period', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_rcd: { 
                cValidate :'', 
                cName: 'rcd', 
                cLabel: 'RCD', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_currencycd: { 
                cValidate :'', 
                cName: 'currencycd', 
                cLabel: 'Lease Currency', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalrental: { 
                cValidate :'', 
                cName: 'totalrental', 
                cLabel: 'Total Rental', 
                cLabelSize: 4, 
                cOrder: 14, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_grossseminetarea: { 
                cValidate :'', 
                cName: 'grossseminetarea', 
                cLabel: 'Gross - Semi - Net Area', 
                cLabelSize: 4, 
                cOrder: 14, 
                cKey: false, 
                cType: 'decimal',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_marketing: { 
                cValidate :'', 
                cName: 'marketing', 
                cLabel: 'Marketing', 
                cLabelSize: 4, 
                cOrder: 14, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
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
                cLabel: 'Reason Code', 
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
                cValidate :'', 
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
    }
  },
    methods: {		
        OnapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_MarkTenantToStop.applicationno = data.id
            this.M_TN_MarkTenantToStop.applicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.GetTNMarkTenantToSTop(data.id)
            }
        })
        this.$forceUpdate()
        },
        OnloodateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{loodate}
            }
        })
        this.$forceUpdate()
        },
        OnloidateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{loidate}
            }
        })
        this.$forceUpdate()
        },
        OnladateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{ladate}
            }
        })
        this.$forceUpdate()
        },
        OnreasoncdChange (data) {
        this.$nextTick(() => {
            this.M_TN_MarkTenantToStop.reasoncd = data.id
            this.M_TN_MarkTenantToStop.reasoncdLabel = data.label
            this.M_TN_MarkTenantToStop.reasondescs = data.Descs
            if (this.inputStatus != "VIEW") {
//{reasoncd}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           this.getToolbar().doEdit(true)
    },
        GetTNMarkTenantToSTop (ApplicationNo) {
            var param = {
                OptionFunctionCd: "GetTNMarkTenantToSTop",
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: ApplicationNo,
                
            }

            this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) return
 
                this.M_TN_MarkTenantToStop.agreement = ress[0].ContractStatus
                this.M_TN_MarkTenantToStop.loono = ress[0].LOONo
                this.M_TN_MarkTenantToStop.loodate = ress[0].LOODate
                this.M_TN_MarkTenantToStop.loino = ress[0].LOINo
                this.M_TN_MarkTenantToStop.loidate = ress[0].LOIDate
                this.M_TN_MarkTenantToStop.lano = ress[0].LANo
                this.M_TN_MarkTenantToStop.ladate = ress[0].LADate
                this.M_TN_MarkTenantToStop.customer = ress[0].Name
                this.M_TN_MarkTenantToStop.customercategory = ress[0].Customercategory
                this.M_TN_MarkTenantToStop.brand = ress[0].BrandName
                this.M_TN_MarkTenantToStop.theme = ress[0].LotClass
                this.M_TN_MarkTenantToStop.class = ress[0].LotCategory
                this.M_TN_MarkTenantToStop.category = ress[0].LotTheme
                this.M_TN_MarkTenantToStop.startdate = ress[0].StartDate
                this.M_TN_MarkTenantToStop.enddate = ress[0].EndDate
                this.M_TN_MarkTenantToStop.leaseperiod = ress[0].LeasePeriod
                this.M_TN_MarkTenantToStop.rcd = ress[0].RCD
                this.M_TN_MarkTenantToStop.red = ress[0].RED
                this.M_TN_MarkTenantToStop.currencycd = ress[0].CurrencyCd
                this.M_TN_MarkTenantToStop.totalrental = this.isCurrency(ress[0].ContractAmt)
                this.M_TN_MarkTenantToStop.grossseminetarea = ress[0].SemiNetGross
                this.M_TN_MarkTenantToStop.marketing = ress[0].Name
            })
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
          //           this.getToolbar().FormStatus = 'EDIT'
          //           this.getToolbar().ProcessPS()
          //           this.$store.commit('setStatus', 'view')
					// this.$store.commit('setEventStatus', 'Save')

          //           this.FormToMasterPage().ValidasiPage()
                    this.M_ClearForm()
                    this.$store.commit('setStatus', 'view')
                    this.$store.commit('setStatus', 'new')
                    this.getToolbar().doNew()
										
					
                })
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_MarkTenantToStop.applicationno == '' || this.M_TN_MarkTenantToStop.applicationno == null ? 'NULL' : this.M_TN_MarkTenantToStop.applicationno ,
                StopReasonCd: this.M_TN_MarkTenantToStop.reasoncd == '' || this.M_TN_MarkTenantToStop.reasoncd == null ? 'NULL' : this.M_TN_MarkTenantToStop.reasoncd ,
                StopReasonDescs: this.M_TN_MarkTenantToStop.reasondescs,
                StopBy: this.getDataUser().SubPortfolioCd,
                StopDate: this.M_TN_MarkTenantToStop.stopdate,
                UserEdit: this.getDataUser().UserId                 
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.alertSuccess(response.Message)
                .then(() => {
                    this.M_ClearForm()
                    this.$store.commit('setStatus', 'view')
                    this.$store.commit('setStatus', 'new')
                    this.getToolbar().doEdit()
					
                })
            })
        },
		M_ClearForm(){
      this.$nextTick(() => {
            this.M_TN_MarkTenantToStop = {
                applicationno: '',
                agreement: '',
                loono: '',
                loodate: '',
                loino: '',
                loidate: '',
                lano: '',
                ladate: '',
                customer: '',
                customercategory: '',
                brand: '',
                theme: '',
                class: '',
                category: '',
                startdate: '',
                enddate: '',
                leaseperiod: '',
                rcd: '',
                red: '',
                stopdate: this.getToday(),
                currencycd: '',
                totalrental: '',
                grossseminetarea: '',
                marketing: '',
                reasoncd: '',
                reasondescs: ''
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
this.M_TN_MarkTenantToStop = {
                applicationno: data.applicationno,
                agreement: data.agreement,
                loono: data.loono,
                loodate: data.loodate,
                loino: data.loino,
                loidate: data.loidate,
                lano: data.lano,
                ladate: data.ladate,
                customer: data.customer,
                customercategory: data.customercategory,
                brand: data.brand,
                theme: data.theme,
                class: data.class,
                category: data.category,
                startdate: data.startdate,
                leaseperiod: data.leaseperiod,
                rcd: data.rcd,
                currencycd: data.currencycd,
                totalrental: data.totalrental,
                grossseminetarea: data.grossseminetarea,
                marketing: data.marketing,
                reasoncd: data.reasoncd,
                reasondescs: data.reasondescs
                    }
                 

                this.M_TN_MarkTenantToStop.applicationnoLabel = this.M_TN_MarkTenantToStop.applicationno != null && this.M_TN_MarkTenantToStop.applicationno != '' ? data.applicationno + this.separator  :'' 
                this.M_TN_MarkTenantToStop.reasoncdLabel = this.M_TN_MarkTenantToStop.reasoncd != null && this.M_TN_MarkTenantToStop.reasoncd != '' ? data.reasoncd + this.separator  :'' 
         

                this.IEBy.Input = data.UserInput
                this.IEBy.Edit = data.UserEdit

            })
        }
        ,MdtRange_startdate (data) {
            this.M_TN_MarkTenantToStop.startdate = data
        }
        ,MdtRange_enddate (data) {
            this.M_TN_MarkTenantToStop.enddate = data
        }
        ,MdtRange_rcd (data) {
            this.M_TN_MarkTenantToStop.rcd = data
        }
        ,MdtRange_red (data) {
            this.M_TN_MarkTenantToStop.red = data
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','Form')
        this.getToolbar().ProcessPS()
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
