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
                                        <ABSinputTextVuex :prop="PI_terminationno" v-model="M_TN_CLEarlyTerminationEntry.terminationno"  ref="ref_terminationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateRangeVuex :prop="PI_rcd" :valueFrom="M_TN_CLEarlyTerminationEntry.rcd" :valueTo="M_TN_CLEarlyTerminationEntry.red" ref="ref_rcd" @from="MdtRange_rcd" @to="MdtRange_red" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnterminationdateChange" :prop="PI_terminationdate" v-model="M_TN_CLEarlyTerminationEntry.terminationdate"  ref="ref_terminationdate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_leaseperiod" v-model="M_TN_CLEarlyTerminationEntry.leaseperiod"  ref="ref_leaseperiod" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnapplicationnoChange" :prop="PI_applicationno" :value="M_TN_CLEarlyTerminationEntry.applicationno" :label="M_TN_CLEarlyTerminationEntry.applicationnoLabel" ref="ref_applicationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_TN_CLEarlyTerminationEntry.currencycd"  ref="ref_currencycd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totaloutstanding" v-model="M_TN_CLEarlyTerminationEntry.totaloutstanding"  ref="ref_totaloutstanding" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_contractamt" v-model="M_TN_CLEarlyTerminationEntry.contractamt"  ref="ref_contractamt" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_lano" v-model="M_TN_CLEarlyTerminationEntry.lano"  ref="ref_lano" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_grossarea" v-model="M_TN_CLEarlyTerminationEntry.grossDescs"  ref="ref_grossarea" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex :prop="PI_ladate" v-model="M_TN_CLEarlyTerminationEntry.ladate"  ref="ref_ladate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_marketingid" v-model="M_TN_CLEarlyTerminationEntry.marketingid"  ref="ref_marketingid" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_contactid" v-model="M_TN_CLEarlyTerminationEntry.contactid"  ref="ref_contactid" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_operatingfromhour" v-model="M_TN_CLEarlyTerminationEntry.operatingfromhour"  ref="ref_operatingfromhour" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_customercategorycd" v-model="M_TN_CLEarlyTerminationEntry.customercategorycd"  ref="ref_customercategorycd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_status" v-model="M_TN_CLEarlyTerminationEntry.statusdescs"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_brandname" v-model="M_TN_CLEarlyTerminationEntry.brandname"  ref="ref_brandname" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_CLEarlyTerminationEntry.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnterminationtypeChange" :prop="PI_terminationtype" v-model="M_TN_CLEarlyTerminationEntry.terminationtype"  ref="ref_terminationtype" />
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OneffectivedateChange" :prop="PI_effectivedate" v-model="M_TN_CLEarlyTerminationEntry.effectivedate"  ref="ref_effectivedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnhandoverdateChange" :prop="PI_handoverdate" v-model="M_TN_CLEarlyTerminationEntry.handoverdate"  ref="ref_handoverdate" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                  
							</b-row>
							<ABSTAnalysis :prop="PTAnalysis" />
              <b-row>
                <b-col offset="1">
                  Note : <br>
                  * Jika ingin melakukan early termination, maka Effective Date diisi dengan tanggal berakhirnya kontrak. <br>
                  * Jika kasusnya dikarenakan salah kontrak, maka Effective Date diisi dengan tanggal Awal kontral <br>
                  (Lease Start Date/RCD Contract) tujuannya agar lot dapat dipakai lagi di kontrak baru. Dan setelah itu harus lakukan <br>
                  Contract Termination Deletion.
                </b-col>
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
    props: {PageLevel: '', TabIndex: '', data: ''},
    data() {
        return {
		cInsertKey:'',
		FormType: "List",
		Module:"TN",
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
            TNSpec: '',

            M_TN_CLEarlyTerminationEntry :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                terminationno: '',
                terminationdate: this.momentDate(new Date()),
                terminationtype: 'D',
                effectivedate: this.momentDate(new Date()),
                handoverdate: this.momentDate(new Date()),
                replacementapplicationo: '',
                status: '',
                statusdescs: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                grossDescs: '',
                grossarea: '',
                semigrossarea: '',
                netarea: '',
                lotlist: '',
                loono: '',
                loodate: '',
                loino: '',
                loidate: '',
                lano: '',
                ladate: '',
                brandname: '',
                customercategorycd: '',
                contactid: '',
                contactname: '',
                rcd: '',
                red: '',
                con_rcd: '',
                con_red: '',
                leaseperiod: '',
                currencycd: '',
                contractamt: '',
                marketingid: '',
                operatingfromhour: '-',
                operatingtohour: '',
                name: '',
                namereplace: '',
                rowid: 0,
                totaloutstanding: ''
                    }
            ,
            PI_terminationno: { 
                cValidate :'', 
                cName: 'terminationno', 
                cLabel: 'Termination No', 
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
            PI_rcd: { 
                cValidate :'', 
                cName: 'rcd', 
                cLabel: 'RCD - RED', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_terminationdate: { 
                cValidate :'', 
                cName: 'terminationdate', 
                cLabel: 'Termination Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_con_red: { 
                cValidate :'', 
                cName: 'con_red', 
                cLabel: '', 
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
            PI_applicationno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUp_ApplicationNo_V3'    , 
                    ColumnDB: 'ApplicationNo'   , 
                    InitialWhere: "ISNULL(TerminateStatus,'N') <> 'Y' AND leasestatus = 'L' AND Status = 'A' AND CustomerType = 'C' AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND applicationNo NOT IN (SELECT ApplicationNo FROM TN_CLContractTermination tct WHERE tct.[Status] = 'N') AND applicationNo NOT IN (SELECT ApplicationNo FROM TN_ContractAddendum tca WHERE tca.[Status] = 'N') AND CAST(RED AS DATE) >= CAST(GetDate() AS DATE)",
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'applicationno', 
                cLabel: 'Application No', 
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
                cDisplayColumn: 'ApplicationNo,Name' ,
            }, 
            PI_leaseperiod: { 
                cLabel: 'Lease Period', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_totaloutstanding: { 
                cLabel: 'Total Outstanding', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_currencycd: { 
                cLabel: 'Lease Currency', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_lano: { 
                cLabel: 'LA No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_contractamt: { 
                cLabel: 'Total Rental', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_ladate: { 
              cValidate :'', 
                cName: 'ladate', 
                cLabel: 'LA Date',
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cVisible:  true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_grossarea: { 
                cLabel: 'Gross / Semi / Net Area', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_contactid: { 
                cLabel: 'Customer', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_semigrossarea: { 
                cLabel: 'Semi Gross Area', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_customercategorycd: { 
                cLabel: 'Customer Catagory', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_netarea: { 
                cLabel: 'Net Area', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_brandname: { 
                cLabel: 'Brand Name', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_marketingid: { 
                cLabel: 'Marketing', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_terminationtype: { 
                cValidate :'', 
                cName: 'terminationtype', 
                cId: 'rdbterminationtype', 
                cRadioOptions: [{ text: 'Direct', value: 'D' },{ text: 'Replacement', value: 'R' },], 
                cRadioDefaultOption: 'D', 
                cLabel:'Termination Type', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_operatingfromhour: { 
                cLabel: 'Operating Hour', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true ,
                cProtect: true
            }, 
            PI_effectivedate: { 
                cValidate :'', 
                cName: 'effectivedate', 
                cLabel: 'Effective Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_operatingtohour: { 
                cLabel: 'Operating ToHour', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_handoverdate: { 
                cValidate :'', 
                cName: 'handoverdate', 
                cLabel: 'Hand Over Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
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
                cVisible: true ,
                cProtect: true
            }, 
            PI_replacementapplicationo: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookUp_ApplicationNo'    , 
                    ColumnDB: 'ReplacementApplicatioNo'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'replacementapplicationo', 
                cLabel: '', 
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
                cDisplayColumn: '' ,
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
        getContractData (appNo) {
          var param = {
            OptionFunctionCd: "GetContractData",
            ModuleCd: "TN",
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            ApplicationNo: appNo
          }

          this.FnDynamicFunction(param)
          .then(ress => {
            if (ress == null) return
            if (ress.length < 1) {
              return
            }
            var data = ress[0]
            this.M_TN_CLEarlyTerminationEntry.rcd = data.RCD
            this.M_TN_CLEarlyTerminationEntry.red = data.RED
            this.M_TN_CLEarlyTerminationEntry.contactid = data.CustomerName
            this.M_TN_CLEarlyTerminationEntry.customercategorycd = data.Category
            this.M_TN_CLEarlyTerminationEntry.brandname = data.BrandName
            this.M_TN_CLEarlyTerminationEntry.leaseperiod = data.LeasePeriod
            this.M_TN_CLEarlyTerminationEntry.currencycd = data.CurrencyCd
            this.M_TN_CLEarlyTerminationEntry.contractamt = data.ContractAmt
            this.M_TN_CLEarlyTerminationEntry.grossDescs = this.isCurrency(data.TotalGrossArea) + " / " + this.isCurrency(data.TotalSemiGrossArea) + " / " + this.isCurrency(data.TotalNetArea)
            this.M_TN_CLEarlyTerminationEntry.grossarea = data.TotalGrossArea
            this.M_TN_CLEarlyTerminationEntry.semigrossarea = data.TotalSemiGrossArea
            this.M_TN_CLEarlyTerminationEntry.netarea = data.TotalNetArea
            this.M_TN_CLEarlyTerminationEntry.marketingid = data.MarketingID
            this.M_TN_CLEarlyTerminationEntry.operatingfromhour = data.OperatingFromHour
            this.M_TN_CLEarlyTerminationEntry.operatingtohour = data.OperatingToHour
            this.M_TN_CLEarlyTerminationEntry.remarks = data.Remarks

            var param2 = {
              OptionFunctionCd: "GetContractDataGetTNOutStandingAmt",
              ModuleCd: "TN",
              ApplicationNo: appNo
            }

            this.FnDynamicFunction(param2)
            .then(ress2 => {
              if (ress2 == null || ress2.length < 1) {
                this.M_TN_CLEarlyTerminationEntry.totaloutstanding = this.isCurrency(0, this.decimal)
                return
              }
              this.M_TN_CLEarlyTerminationEntry.totaloutstanding = this.isCurrency(ress2[0].amt, this.decimal)
            })
          })
        },
        OnterminationdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{terminationdate}
            }
        })
        this.$forceUpdate()
        },
        OnapplicationnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_CLEarlyTerminationEntry.applicationno = data.id
            this.M_TN_CLEarlyTerminationEntry.applicationnoLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.getContractData(data.id)
            }
        })
        this.$forceUpdate()
        },
        OnterminationtypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{terminationtype}
            }
        })
        this.$forceUpdate()
        },
        OneffectivedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{effectivedate}
            }
        })
        this.$forceUpdate()
        },
        OnhandoverdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{handoverdate}
            }
        })
        this.$forceUpdate()
        },
        OnreplacementapplicationoChange (data) {
        this.$nextTick(() => {
            this.M_TN_CLEarlyTerminationEntry.replacementapplicationo = data.id
            this.M_TN_CLEarlyTerminationEntry.replacementapplicationoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{replacementapplicationo}
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
          // mematikan button edit selain status N
                    
          // console.log(record)
          if(record.StatusCode=='N'){
            this.$store.commit('setEditStatus', true)
            // this.getToolbar().ProcessPS()
            
          }else{
            this.$store.commit('setEditStatus', false)
            // this.getToolbar().ProcessPS()
          }
          
        },
        rowLink: function(url){
          this.$refs.modalTest.show()
        },		
        paramFromParent(){
        },		
        M_Post(dt){
        },
        M_Insert() {
          if (this.M_TN_CLEarlyTerminationEntry.terminationno == "(auto)") {
            this.M_TN_CLEarlyTerminationEntry.terminationno = "null"
          }

          var param = {			
              OptionSeq: this.getOptionSeq().OptionSeq,
              LineNo: this.$parent.data.PageOrder,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              ApplicationNo: this.M_TN_CLEarlyTerminationEntry.applicationno == '' || this.M_TN_CLEarlyTerminationEntry.applicationno == null ? 'NULL' : this.M_TN_CLEarlyTerminationEntry.applicationno ,
              TerminationNo: this.M_TN_CLEarlyTerminationEntry.terminationno,
              TerminationDate: this.M_TN_CLEarlyTerminationEntry.terminationdate == '' || this.M_TN_CLEarlyTerminationEntry.terminationdate == null ? 'NULL' : this.M_TN_CLEarlyTerminationEntry.terminationdate ,
              // TerminationType: this.M_TN_CLEarlyTerminationEntry.terminationtype,
              EffectiveDate: this.M_TN_CLEarlyTerminationEntry.effectivedate == '' || this.M_TN_CLEarlyTerminationEntry.effectivedate == null ? 'NULL' : this.M_TN_CLEarlyTerminationEntry.effectivedate ,
              HandOverDate: this.M_TN_CLEarlyTerminationEntry.handoverdate == '' || this.M_TN_CLEarlyTerminationEntry.handoverdate == null ? 'NULL' : this.M_TN_CLEarlyTerminationEntry.handoverdate ,
              // ReplacementApplicatioNo: this.M_TN_CLEarlyTerminationEntry.replacementapplicationo == '' || this.M_TN_CLEarlyTerminationEntry.replacementapplicationo == null ? 'NULL' : this.M_TN_CLEarlyTerminationEntry.replacementapplicationo ,
              Status: "N",
              Remarks: this.M_TN_CLEarlyTerminationEntry.remarks,
              UserInput: this.getDataUser().UserId
          }

          this.postJSON(this.getUrlInsert(), param)
          .then((response) => {
            if(response == null) return
            this.$parent.resultInsert(response.Message)
          })
        },
        M_Update() {
          var param = {
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            ApplicationNo: this.M_TN_CLEarlyTerminationEntry.applicationno == '' || this.M_TN_CLEarlyTerminationEntry.applicationno == null ? 'NULL' : this.M_TN_CLEarlyTerminationEntry.applicationno ,
            TerminationNo: this.M_TN_CLEarlyTerminationEntry.terminationno,
            TerminationDate: this.M_TN_CLEarlyTerminationEntry.terminationdate == '' || this.M_TN_CLEarlyTerminationEntry.terminationdate == null ? 'NULL' : this.M_TN_CLEarlyTerminationEntry.terminationdate ,
            // TerminationType: this.M_TN_CLEarlyTerminationEntry.terminationtype,
            EffectiveDate: this.M_TN_CLEarlyTerminationEntry.effectivedate == '' || this.M_TN_CLEarlyTerminationEntry.effectivedate == null ? 'NULL' : this.M_TN_CLEarlyTerminationEntry.effectivedate ,
            HandOverDate: this.M_TN_CLEarlyTerminationEntry.handoverdate == '' || this.M_TN_CLEarlyTerminationEntry.handoverdate == null ? 'NULL' : this.M_TN_CLEarlyTerminationEntry.handoverdate ,
            // ReplacementApplicatioNo: this.M_TN_CLEarlyTerminationEntry.replacementapplicationo == '' || this.M_TN_CLEarlyTerminationEntry.replacementapplicationo == null ? 'NULL' : this.M_TN_CLEarlyTerminationEntry.replacementapplicationo ,
            Remarks: this.M_TN_CLEarlyTerminationEntry.remarks,
            UserEdit: this.getDataUser().UserId ,
            LastUpdateStamp: this.M_TN_CLEarlyTerminationEntry.lastupdatestamp
          }

          this.postJSON(this.getUrlUpdate(), param)
          .then((response) => {
            if(response == null) return
            this.$parent.resultUpdate(response.Message)
          })
        },
		M_ClearForm(){
            this.M_TN_CLEarlyTerminationEntry = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                terminationno: '',
                terminationdate: this.momentDate(new Date()),
                terminationtype: 'D',
                effectivedate: this.momentDate(new Date()),
                handoverdate: this.momentDate(new Date()),
                replacementapplicationo: '',
                status: '',
                statusdescs: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                grossDescs: '',
                grossarea: '',
                semigrossarea: '',
                netarea: '',
                lotlist: '',
                loono: '',
                loodate: '',
                loino: '',
                loidate: '',
                lano: '',
                ladate: '',
                brandname: '',
                customercategorycd: '',
                contactid: '',
                contactname: '',
                rcd: '',
                red: '',
                con_rcd: '',
                con_red: '',
                leaseperiod: '',
                currencycd: '',
                contractamt: '',
                marketingid: '',
                operatingfromhour: '-',
                operatingtohour: '',
                name: '',
                namereplace: '',
                rowid: 0,
                totaloutstanding: ''
                    }
            		
		},
        M_New(){
          if (this.TNSpec.TerminationRunningCd != null && this.TNSpec.TerminationRunningCd != "") {
            this.M_TN_CLEarlyTerminationEntry.terminationno = "(auto)"
            this.PI_terminationno.cProtect = true
          } else {
            this.M_TN_CLEarlyTerminationEntry.terminationno = ""
            this.PI_terminationno.cProtect = false
          }

          // this.M_TN_CLEarlyTerminationEntry.statusdescs = 'New'
        },
        M_Edit(){
        },
        M_Delete(dt){
          var data = this.FormToABSList().getRowSelected()  
          var dataDelete = []
          
          data.forEach((value) => {
            dataDelete.push({
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              TerminationNo: value.TerminationNo,
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
                terminationno: record.TerminationNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_TN_CLEarlyTerminationEntry = {
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
                terminationno: data.terminationno,
                terminationdate: data.terminationdate,
                terminationtype: data.terminationtype,
                effectivedate: data.effectivedate,
                handoverdate: data.handoverdate,
                replacementapplicationo: data.replacementapplicationo,
                status: data.status,
                statusdescs: data.statusdescs,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                grossDescs: this.isCurrency(data.grossarea, this.decimal) + " / " + this.isCurrency(data.semigrossarea, this.decimal) + " / " + this.isCurrency(data.netarea, this.decimal),
                grossarea: this.isCurrency(data.grossarea, this.decimal),
                semigrossarea: this.isCurrency(data.semigrossarea, this.decimal),
                netarea: this.isCurrency(data.netarea, this.decimal),
                lotlist: data.lotlist,
                loono: data.loono,
                loodate: data.loodate,
                loino: data.loino,
                loidate: data.loidate,
                lano: data.lano,
                ladate: data.ladate,
                brandname: data.brandname,
                customercategorycd: data.customercategorycd,
                contactid: data.contactid + this.separator + data.contactname,
                contactname: data.contactname,
                rcd: data.rcd,
                red: data.red,
                con_rcd: data.con_rcd,
                con_red: data.con_red,
                leaseperiod: data.leaseperiod,
                currencycd: data.currencycd,
                contractamt: this.isCurrency(data.contractamt, this.decimal),
                marketingid: data.marketingid,
                operatingfromhour: data.operatingfromhour + " - " + data.operatingtohour,
                operatingtohour: data.operatingtohour,
                name: data.name,
                namereplace: data.namereplace,
                rowid: data.rowid,
                totaloutstanding: data.totaloutstanding ? this.isCurrency(data.totaloutstanding, this.decimal) : 0
                    }
                 

                this.M_TN_CLEarlyTerminationEntry.applicationnoLabel = this.M_TN_CLEarlyTerminationEntry.applicationno != null && this.M_TN_CLEarlyTerminationEntry.applicationno != '' ? data.applicationno + this.separator + data.name :'' 
                this.M_TN_CLEarlyTerminationEntry.replacementapplicationoLabel = this.M_TN_CLEarlyTerminationEntry.replacementapplicationo != null && this.M_TN_CLEarlyTerminationEntry.replacementapplicationo != '' ? data.replacementapplicationo + this.separator  :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,MdtRange_rcd (data) {
            this.M_TN_CLEarlyTerminationEntry.rcd = data
        }
        ,MdtRange_red (data) {
            this.M_TN_CLEarlyTerminationEntry.red = data
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

            this.TNSpec = ress[0]
            this.FormToABSList().doGetList('','eb_getList')
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

