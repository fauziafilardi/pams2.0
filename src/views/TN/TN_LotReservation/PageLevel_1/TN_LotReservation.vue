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
                                        <ABSinputTextVuex :prop="PI_loono" v-model="M_TN_LotReservation.loono"  ref="ref_loono"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnreservationreasoncdChange" :prop="PI_reservationreasoncd" :value="M_TN_LotReservation.reservationreasoncd" :label="M_TN_LotReservation.reservationreasoncdLabel" ref="ref_reservationreasoncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnloodateChange" :prop="PI_loodate" v-model="M_TN_LotReservation.loodate"  ref="ref_loodate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_reasondescs" v-model="M_TN_LotReservation.reasondescs"  ref="ref_reasondescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncontactidChange" :prop="PI_contactid" :value="M_TN_LotReservation.contactid" :label="M_TN_LotReservation.contactidLabel" ref="ref_contactid"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnmarketingidChange" :prop="PI_marketingid" :value="M_TN_LotReservation.marketingid" :label="M_TN_LotReservation.marketingidLabel" ref="ref_marketingid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncustomercategorycdChange" :prop="PI_customercategorycd" :value="M_TN_LotReservation.customercategorycd" :label="M_TN_LotReservation.customercategorycdLabel" ref="ref_customercategorycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSCompute :prop="PI_status" v-model="M_TN_LotReservation.status"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @onBlur="OnleaseperiodBlur" :prop="PI_leaseperiod" v-model="M_TN_LotReservation.leaseperiod"  ref="ref_leaseperiod"/>
                                      </b-col>
                                      <!-- <b-col  md="6">
                                        <ABSCompute :prop="PI_chargeperiod" v-model="M_TN_LotReservation.chargeperiod"  ref="ref_chargeperiod" />
                                      </b-col> -->
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateRangeVuex :prop="PI_rcd" :valueFrom="M_TN_LotReservation.rcd" :valueTo="M_TN_LotReservation.red" ref="ref_rcd" @from="MdtRange_rcd" @to="MdtRange_red" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_grossseminetarea" v-model="M_TN_LotReservation.grossseminetarea"  ref="ref_grossseminetarea" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_LotReservation.remarks"  ref="ref_remarks" />
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
                initialWhere: "StatusCd IN ('A','N','C') AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND EndDate >= '' AND CustomerType = 'L' AND ContractStatus= '5'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''}, 
            BillingMonthTolerance: '',
            ToleranceDate: 0,  			
            TNSpec: '',

            M_TN_LotReservation :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                copyfromapplicationno: '',
                loono: '',
                loodate: new Date(),
                loino: '',
                loidate: '',
                lano: '',
                ladate: '',
                contactid: '',
                customername: '',
                marketingname: '',
                customercategorycd: '',
                customercategorydescs: '',
                chargeperiod: '',
                chargeperioddescs: '',
                status: '',
                tenantstatus: '',
                contractstatus: '',
                referenceno: '',
                brandcd: '',
                brandname: '',
                lotthemecd: '',
                lotclasssequenceno: 0,
                lotcategorysequenceno: 0,
                startdate: '',
                enddate: '',
                leaseperiod: '',
                rcd: '',
                red: '',
                utilitiesstartdate: '',
                utilitiesenddate: '',
                currencycd: '',
                contractamt: 0,
                peggingrate: '',
                revenuesharetype: '',
                reservationreasoncd: '',
                reasondescs: '',
                reservationreasondescs: '',
                reservationdescs: '',
                chargearea: '',
                telephoneline: 0,
                securitydepositrental: 0,
                securitydepositsc: 0,
                rentalbase: '',
                renewalperiod: 0,
                rentalratetype: '',
                antennastatus: '',
                marketingid: '',
                fitoutcommencedon: '',
                fitouttime: 0,
                operatingfromhour: '',
                operatingtohour: '',
                solicitorid: '',
                solicitorname: '',
                mediacd: '',
                servicecharge: 0,
                promotionlevy: 0,
                telephonedeposit: 0,
                fitoutdeposit: 0,
                sinkingfund: 0,
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                totalnetarea: 0,
                totalgrossarea: 0,
                totalsemigrossarea: 0,
                theme: '',
                class: '',
                category: '',
                lastupdatestamp: 0,
                rowid: 0,
                grossseminetarea: ''
                    }
            ,
            PI_loono: { 
                cValidate :'max:20', 
                cName: 'loono', 
                cLabel: 'Reservation No', 
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
            PI_reservationreasoncd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMReason'    , 
                    ColumnDB: 'ReasonCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'reservationreasoncd', 
                cLabel: 'Reason Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 7, 
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
                cDisplayColumn: 'ReasonCd,Descs' ,
            }, 
            PI_loodate: { 
                cValidate :'', 
                cName: 'loodate', 
                cLabel: 'Reservation Date', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_reasondescs: { 
                cValidate :'', 
                cName: 'reasondescs', 
                cLabel: 'Reason Description', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_contactid: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMContact'    , 
                    ColumnDB: 'ContactId'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'contactid', 
                cLabel: 'Customer', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 3, 
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
                cDisplayColumn: 'ContactId,Name' ,
            }, 
            PI_marketingid: { 
                dataLookUp: { 
                    LookUpCd: 'GetMarketingBrandPIC'    , 
                    ColumnDB: 'contactid'   , 
                    InitialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'marketingid', 
                cLabel: 'Marketing', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 9, 
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
                cDisplayColumn: 'MarketingID,MarketingName' ,
            }, 
            PI_customercategorycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUp_TNCustomerCategory'    , 
                    ColumnDB: 'CustomerCategoryCd'   , 
                    InitialWhere: "LeasingStatus = 'Y' and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'customercategorycd', 
                cLabel: 'Customer Catagory', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 4, 
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
                cDisplayColumn: 'CustomerCategoryCd,Descs' ,
            }, 
            PI_status: { 
                cLabel: 'Status', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_leaseperiod: { 
                cValidate :'max:20', 
                cName: 'leaseperiod', 
                cLabel: 'Reserve Period', 
                cLabelSize: 4, 
                cLastLabel: "Charge Period: months",
                cOrder: 5, 
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
                cOrder:10, 
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
            PI_rcd: { 
                cValidate :'', 
                cName: 'rcd', 
                cLabel: 'Reservation Start - End Date', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_grossseminetarea: { 
                cLabel: 'Gross / Semi / Net Area', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_chargeperiod: { 
                cLabel: '', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: false
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
	},
	GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
	}
  },
    methods: {		
        GetSpecificationData(){ 
          var param = {
            OptionFunctionCd: "GetSpecification",
            ModuleCd: this.Module,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd
          }

          this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) return
                var data = ress[0]

                if (data.ReservationRunningCd != null && data.ReservationRunningCd != "") { 
                  this.M_TN_LotReservation.loono = "(auto)"
                  this.PI_loono.cProtect = true
                } else {
                  this.M_TN_LotReservation.loono = ""
                  this.PI_loono.cProtect = false
                }

            })
        },			
        OnreservationreasoncdChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotReservation.reservationreasoncd = data.id
            this.M_TN_LotReservation.reservationreasoncdLabel = data.label
            this.M_TN_LotReservation.reasondescs = data.Descs
            if (this.inputStatus != "VIEW") {
//{reservationreasoncd}
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
        OncontactidChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotReservation.contactid = data.id
            this.M_TN_LotReservation.contactidLabel = data.label
            if (this.inputStatus != "VIEW") {
//{contactid}
            }
        })
        this.$forceUpdate()
        },
        OnmarketingidChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotReservation.marketingid = data.id
            this.M_TN_LotReservation.marketingidLabel = data.label
            if (this.inputStatus != "VIEW") {
//{marketingid}
            }
        })
        this.$forceUpdate()
        },
        OncustomercategorycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotReservation.customercategorycd = data.id
            this.M_TN_LotReservation.customercategorycdLabel = data.label
            this.M_TN_LotReservation.chargeperioddescs = data.ChargePeriodDescs
            if (this.inputStatus != "VIEW") {
                this.PI_leaseperiod.cLastLabel = "Charge Period: " + data.ChargePeriodDescs
            }
        })
        this.$forceUpdate()
        },
        OnleaseperiodBlur (data) {
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {
                    if (this.M_TN_LotReservation.rcd && this.M_TN_LotReservation.rcd != '') {
                        var dueday = data && data != '' ? data : 0
                        if(this.M_TN_LotReservation.chargeperioddescs == 'days'){
                            this.M_TN_LotReservation.red = this.dateAdd2('d', this.M_TN_LotReservation.rcd, dueday)
                        }
                        else{
                            this.M_TN_LotReservation.red = this.dateAdd2('M', this.M_TN_LotReservation.rcd, dueday)
                        }
                    }
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
           //this.getToolbar().statusFunction[4].disabled = false
        },
        getSpec () {
             var param = {
                OptionFunctionCd: "GetSpecification",
                ModuleCd: "TN",
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            }

            this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) return
                if (ress.length < 1) {
                    this.alertError("Please Check TN Specification")
                    return
                }

                this.BillingMonthTolerance = ress[0].BillingMonthTolerance
                var firstDay = this.momentDateFormatting(new Date(), "YYYY-MM-01")
                // var d1 = this.dateAdd2('M', firstDay, (parseInt(this.BillingMonthTolerance) + parseInt(-3)))

                this.ToleranceDate = this.dateAdd2('D', firstDay, -1)
                this.propList.initialWhere = "StatusCd IN ('A','N','C') AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND EndDate >= '" + this.ToleranceDate + "' AND CustomerType = 'L' AND ContractStatus= '5'"
                this.FormToABSList().doGetList('','eb_getList')
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
        if (this.M_TN_LotReservation.loono == "(auto)")
             { this.M_TN_LotReservation.loono = "null" }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                LOONo: this.M_TN_LotReservation.loono,
                LOODate: this.M_TN_LotReservation.loodate == '' || this.M_TN_LotReservation.loodate == null ? 'NULL' : this.M_TN_LotReservation.loodate ,
                ContactId: this.M_TN_LotReservation.contactid == '' || this.M_TN_LotReservation.contactid == null ? 'NULL' : this.M_TN_LotReservation.contactid ,
                CustomerCategory: this.M_TN_LotReservation.customercategorycd == '' || this.M_TN_LotReservation.customercategorycd == null ? 'NULL' : this.M_TN_LotReservation.customercategorycd ,
                LeasePeriod: this.M_TN_LotReservation.leaseperiod,
                RCD: this.M_TN_LotReservation.rcd == '' || this.M_TN_LotReservation.rcd == null ? 'NULL' : this.M_TN_LotReservation.rcd ,
                RED: this.M_TN_LotReservation.red == '' || this.M_TN_LotReservation.red == null ? 'NULL' : this.M_TN_LotReservation.red ,
                ReservationReasonCd: this.M_TN_LotReservation.reservationreasoncd == '' || this.M_TN_LotReservation.reservationreasoncd == null ? 'NULL' : this.M_TN_LotReservation.reservationreasoncd ,
                StopReasonDescs: this.M_TN_LotReservation.reservationreasondescs,
                MarketingId: this.M_TN_LotReservation.marketingid == '' || this.M_TN_LotReservation.marketingid == null ? 'NULL' : this.M_TN_LotReservation.marketingid ,
                Remarks: this.M_TN_LotReservation.remarks,
                UserInput: this.getDataUser().UserId                 
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
                ContactId: this.M_TN_LotReservation.contactid == '' || this.M_TN_LotReservation.contactid == null ? 'NULL' : this.M_TN_LotReservation.contactid ,
                LOONo: this.M_TN_LotReservation.loono,
                CustomerCategory: this.M_TN_LotReservation.customercategorycd == '' || this.M_TN_LotReservation.customercategorycd == null ? 'NULL' : this.M_TN_LotReservation.customercategorycd ,
                LOODate: this.M_TN_LotReservation.loodate == '' || this.M_TN_LotReservation.loodate == null ? 'NULL' : this.M_TN_LotReservation.loodate ,
                LeasePeriod: this.M_TN_LotReservation.leaseperiod,
                RCD: this.M_TN_LotReservation.rcd == '' || this.M_TN_LotReservation.rcd == null ? 'NULL' : this.M_TN_LotReservation.rcd ,
                RED: this.M_TN_LotReservation.red == '' || this.M_TN_LotReservation.red == null ? 'NULL' : this.M_TN_LotReservation.red ,
                ReservationReasonCd: this.M_TN_LotReservation.reservationreasoncd == '' || this.M_TN_LotReservation.reservationreasoncd == null ? 'NULL' : this.M_TN_LotReservation.reservationreasoncd ,
                Remarks: this.M_TN_LotReservation.remarks,
                StopReasonDescs: this.M_TN_LotReservation.reservationreasondescs,
                MarketingId: this.M_TN_LotReservation.marketingid == '' || this.M_TN_LotReservation.marketingid == null ? 'NULL' : this.M_TN_LotReservation.marketingid ,
                CustomerCategory: this.M_TN_LotReservation.customercategorycd == '' || this.M_TN_LotReservation.customercategorycd == null ? 'NULL' : this.M_TN_LotReservation.customercategorycd ,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_LotReservation.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_LotReservation = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                copyfromapplicationno: '',
                loono: '',
                loodate: new Date(),
                loino: '',
                loidate: '',
                lano: '',
                ladate: '',
                contactid: '',
                customername: '',
                marketingname: '',
                customercategorycd: '',
                customercategorydescs: '',
                chargeperiod: '',
                chargeperioddescs: '',
                status: '',
                tenantstatus: '',
                contractstatus: '',
                referenceno: '',
                brandcd: '',
                brandname: '',
                lotthemecd: '',
                lotclasssequenceno: 0,
                lotcategorysequenceno: 0,
                startdate: '',
                enddate: '',
                leaseperiod: '',
                rcd: '',
                red: '',
                utilitiesstartdate: '',
                utilitiesenddate: '',
                currencycd: '',
                contractamt: 0,
                peggingrate: '',
                revenuesharetype: '',
                reservationreasoncd: '',
                reasondescs: '',
                reservationreasondescs: '',
                reservationdescs: '',
                chargearea: '',
                telephoneline: 0,
                securitydepositrental: 0,
                securitydepositsc: 0,
                rentalbase: '',
                renewalperiod: 0,
                rentalratetype: '',
                antennastatus: '',
                marketingid: '',
                fitoutcommencedon: '',
                fitouttime: 0,
                operatingfromhour: '',
                operatingtohour: '',
                solicitorid: '',
                solicitorname: '',
                mediacd: '',
                servicecharge: 0,
                promotionlevy: 0,
                telephonedeposit: 0,
                fitoutdeposit: 0,
                sinkingfund: 0,
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                totalnetarea: 0,
                totalgrossarea: 0,
                totalsemigrossarea: 0,
                theme: '',
                class: '',
                category: '',
                lastupdatestamp: 0,
                rowid: 0,
                grossseminetarea: ''
                    }
            		
		},
        M_New(){
            this.GetSpecificationData()
			this.$refs.ref_loono.focus()
        },
        M_Edit(){
            let data = this.$store.getters.GetPage1Data

            if(data.Status == 'New'){
                this.$refs.ref_loono.focus()
            }
            else{
                this.$refs.ref_remarks.focus()
            }
        },
        M_Delete(dt){       
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			data.forEach((value) => {
				dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    ApplicationNo: value.ApplicationNo,
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
            if (record.StatusCd == 'A') {
                this.PI_loono.cKey = true
                this.PI_loodate.cKey = true
                this.PI_contactid.cKey = true
                this.PI_customercategorycd.cKey = true
                this.PI_leaseperiod.cKey = true
                this.PI_rcd.cKey = true
                this.PI_reservationreasoncd.cKey = true
                this.PI_reasondescs.cKey = true
                this.PI_marketingid.cKey = true
            }
            else {
                this.PI_loono.cKey = false
                this.PI_loodate.cKey = false
                this.PI_contactid.cKey = false
                this.PI_customercategorycd.cKey = false
                this.PI_leaseperiod.cKey = false
                this.PI_rcd.cKey = false
                this.PI_reservationreasoncd.cKey = false
                this.PI_reasondescs.cKey = false
                this.PI_marketingid.cKey = false
            }

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                applicationno: record.ApplicationNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                if (data.chargeperiod == 'M') {
                    this.PI_leaseperiod.cLastLabel = "Charge Period: months"
                }
                else if (data.chargeperiod == 'Y') {
                    this.PI_leaseperiod.cLastLabel = "Charge Period: years"
                }
                else {
                    this.PI_leaseperiod.cLastLabel = "Charge Period: days"
                }

this.M_TN_LotReservation = {
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
                copyfromapplicationno: data.copyfromapplicationno,
                loono: data.loono,
                loodate: data.loodate,
                loino: data.loino,
                loidate: data.loidate,
                lano: data.lano,
                ladate: data.ladate,
                contactid: data.contactid,
                customername: data.customername,
                marketingname: data.marketingname,
                customercategorycd: data.customercategorycd,
                customercategorydescs: data.customercategorydescs,
                chargeperiod: data.chargeperiod,
                status: data.status,
                tenantstatus: data.tenantstatus,
                contractstatus: data.contractstatus,
                referenceno: data.referenceno,
                brandcd: data.brandcd,
                brandname: data.brandname,
                lotthemecd: data.lotthemecd,
                lotclasssequenceno: data.lotclasssequenceno,
                lotcategorysequenceno: data.lotcategorysequenceno,
                startdate: data.startdate,
                enddate: data.enddate,
                leaseperiod: data.leaseperiod,
                rcd: data.rcd,
                red: data.red,
                utilitiesstartdate: data.utilitiesstartdate,
                utilitiesenddate: data.utilitiesenddate,
                currencycd: data.currencycd,
                contractamt: this.isCurrency(data.contractamt, this.decimal),
                peggingrate: data.peggingrate,
                revenuesharetype: data.revenuesharetype,
                reservationreasoncd: data.reservationreasoncd,
                reasondescs: data.reasondescs,
                reservationreasondescs: data.reservationreasondescs,
                reservationdescs: data.reservationdescs,
                chargearea: data.chargearea,
                telephoneline: data.telephoneline,
                securitydepositrental: this.isCurrency(data.securitydepositrental, this.decimal),
                securitydepositsc: this.isCurrency(data.securitydepositsc, this.decimal),
                rentalbase: data.rentalbase,
                renewalperiod: this.isCurrency(data.renewalperiod, this.decimal),
                rentalratetype: data.rentalratetype,
                antennastatus: data.antennastatus,
                marketingid: data.marketingid,
                fitoutcommencedon: data.fitoutcommencedon,
                fitouttime: this.isCurrency(data.fitouttime, this.decimal),
                operatingfromhour: data.operatingfromhour,
                operatingtohour: data.operatingtohour,
                solicitorid: data.solicitorid,
                solicitorname: data.solicitorname,
                mediacd: data.mediacd,
                servicecharge: this.isCurrency(data.servicecharge, this.decimal),
                promotionlevy: this.isCurrency(data.promotionlevy, this.decimal),
                telephonedeposit: this.isCurrency(data.telephonedeposit, this.decimal),
                fitoutdeposit: this.isCurrency(data.fitoutdeposit, this.decimal),
                sinkingfund: this.isCurrency(data.sinkingfund, this.decimal),
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                totalnetarea: this.isCurrency(data.totalnetarea, this.decimal),
                totalgrossarea: this.isCurrency(data.totalgrossarea, this.decimal),
                totalsemigrossarea: this.isCurrency(data.totalsemigrossarea, this.decimal),
                theme: data.theme,
                class: data.class,
                category: data.category,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                grossseminetarea: this.isCurrency(data.totalgrossarea, this.decimal) + ' / ' + this.isCurrency(data.totalsemigrossarea, this.decimal) + ' / ' + this.isCurrency(data.totalnetarea, this.decimal)
                    }
                 

                this.M_TN_LotReservation.reservationreasoncdLabel = this.M_TN_LotReservation.reservationreasoncd != null && this.M_TN_LotReservation.reservationreasoncd != '' ? data.reservationreasoncd + this.separator + data.reservationreasondescs :'' 
                this.M_TN_LotReservation.contactidLabel = this.M_TN_LotReservation.contactid != null && this.M_TN_LotReservation.contactid != '' ? data.contactid + this.separator + data.customername :'' 
                this.M_TN_LotReservation.marketingidLabel = this.M_TN_LotReservation.marketingid != null && this.M_TN_LotReservation.marketingid != '' ? data.marketingid + this.separator + data.marketingname :'' 
                this.M_TN_LotReservation.customercategorycdLabel = this.M_TN_LotReservation.customercategorycd != null && this.M_TN_LotReservation.customercategorycd != '' ? data.customercategorycd + this.separator + data.customername :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,MdtRange_rcd (data) {
            this.M_TN_LotReservation.rcd = data
            if (data && data != '') {
                var dueday = this.M_TN_LotReservation.leaseperiod && this.M_TN_LotReservation.leaseperiod != '' ? this.M_TN_LotReservation.leaseperiod : 0
                if(this.M_TN_LotReservation.chargeperioddescs == 'days'){
                    this.M_TN_LotReservation.red = this.dateAdd2('d', this.M_TN_LotReservation.rcd, dueday)
                }
                else{
                    this.M_TN_LotReservation.red = this.dateAdd2('M', this.M_TN_LotReservation.rcd, dueday)
                }
            }
            else {
                this.M_TN_LotReservation.red = data
            }
            
        }
        ,MdtRange_red (data) {
            this.M_TN_LotReservation.red = data
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
        this.getSpec()

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

