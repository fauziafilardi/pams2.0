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
                                        <ABSinputTextVuex :prop="PI_terminationno" v-model="M_TN_EarlyTerminationEntry.terminationno"  ref="ref_terminationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateRangeVuex :prop="PI_rcd" :valueFrom="M_TN_EarlyTerminationEntry.rcd" :valueTo="M_TN_EarlyTerminationEntry.red" ref="ref_rcd" @from="MdtRange_rcd" @to="MdtRange_red" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnterminationdateChange" :prop="PI_terminationdate" v-model="M_TN_EarlyTerminationEntry.terminationdate"  ref="ref_terminationdate" />
                                      </b-col>
                                      <b-col md="6">
                                         <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Lease Period</label>
                                          </b-col>
                                          <b-col md="1" style="margin-left: 5px;">
                                            <ABSTextBoxOnly @input="OnleaseperiodChange" :prop="PI_leaseperiod" v-model="M_TN_EarlyTerminationEntry.leaseperiod"  ref="ref_leaseperiod"/>    
                                          </b-col>
                                          <b-col md="4">
                                            {{M_TN_EarlyTerminationEntry.chargeperiod}} and {{M_TN_EarlyTerminationEntry.perioddays}} days
                                          </b-col>  
                                          <!-- <b-col md="1">
                                            <ABSCompute :prop="PI_freerentalperiod" v-model="M_TN_EarlyTerminationEntry.freerentalperiod"  ref="ref_freerentalperiod"/>                                            
                                          </b-col> -->
                                        </b-row>
                                        <!-- <ABSinputTextVuex :prop="PI_leaseperiod" v-model="M_TN_EarlyTerminationEntry.leaseperiod"  ref="ref_leaseperiod" /> -->
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnapplicationnoChange" :prop="PI_applicationno" :value="M_TN_EarlyTerminationEntry.applicationno" :label="M_TN_EarlyTerminationEntry.applicationnoLabel" ref="ref_applicationno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_TN_EarlyTerminationEntry.currencycd"  ref="ref_currencycd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totaloutstanding" v-model="M_TN_EarlyTerminationEntry.totaloutstanding"  ref="ref_totaloutstanding" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_contractamt" v-model="M_TN_EarlyTerminationEntry.contractamt"  ref="ref_contractamt" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_lano" v-model="M_TN_EarlyTerminationEntry.lano"  ref="ref_lano" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_grossarea" v-model="M_TN_EarlyTerminationEntry.grossDescs"  ref="ref_grossarea" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex :prop="PI_ladate" v-model="M_TN_EarlyTerminationEntry.ladate"  ref="ref_ladate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_marketingid" v-model="M_TN_EarlyTerminationEntry.marketingid"  ref="ref_marketingid" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_contactid" v-model="M_TN_EarlyTerminationEntry.contactid"  ref="ref_contactid" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputTimeRange :prop="PI_operatingfromhour" :valueFrom="M_TN_EarlyTerminationEntry.operatingfromhour" :valueTo="M_TN_EarlyTerminationEntry.operatingtohour" ref="ref_operatingfromhour" @from="MdtRange_operatingfromhour" @to="MdtRange_operatingtohour" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_customercategorycd" v-model="M_TN_EarlyTerminationEntry.customercategorycd"  ref="ref_customercategorycd" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_status" v-model="M_TN_EarlyTerminationEntry.statusdescs"  ref="ref_status" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_brandname" v-model="M_TN_EarlyTerminationEntry.brandname"  ref="ref_brandname" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_EarlyTerminationEntry.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnterminationtypeChange" :prop="PI_terminationtype" v-model="M_TN_EarlyTerminationEntry.terminationtype"  ref="ref_terminationtype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OneffectivedateChange" :prop="PI_effectivedate" v-model="M_TN_EarlyTerminationEntry.effectivedate"  ref="ref_effectivedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnhandoverdateChange" :prop="PI_handoverdate" v-model="M_TN_EarlyTerminationEntry.handoverdate"  ref="ref_handoverdate" />
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
    StatusButton: null,
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

            M_TN_EarlyTerminationEntry :{
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
                grossarea: '0.00  / 0.00  / 0.00',
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
                operatingfromhour: '',
                operatingtohour: '',
                name: '',
                namereplace: '',
                rowid: 0,
                totaloutstanding: '',
                chargeperiod: 'months',
                perioddays: '',
                freerentalperiod: '',
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
                cOrder: 1, 
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
                    InitialWhere: "ISNULL(TerminateStatus,'N') <> 'Y' AND Status = 'A' AND CustomerType = 'L' AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ApplicationNo NOT IN (SELECT ApplicationNo FROM TN_ContractTermination tct WHERE tct.[Status] = 'N') AND ApplicationNo NOT IN (SELECT ApplicationNo FROM TN_ContractAddendum tca WHERE tca.[Status] = 'N') AND CAST(RED AS DATE) >= CAST(GetDate() AS DATE)",
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'applicationno', 
                cLabel: 'Application No', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 2, 
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
                // cLabel: 'Lease Period', 
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
                cValidate :'', 
                cName: 'operatingfromhour', 
                cLabel: 'Operating Hour', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false,                 
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_effectivedate: { 
                cValidate :'', 
                cName: 'effectivedate', 
                cLabel: 'Effective Date', 
                cLabelSize: 4, 
                cOrder: 3, 
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
                cOrder: 4, 
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
                cOrder:5, 
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
        getContractDataGetTNOutStandingAmt(appNo){
           var param2 = {
              OptionFunctionCd: "GetContractDataGetTNOutStandingAmt",
              ModuleCd: "TN",
              ApplicationNo: appNo
            }

            this.FnDynamicFunction(param2)
            .then(ress2 => {
              if (ress2 == null || ress2.length < 1) {
                this.M_TN_EarlyTerminationEntry.totaloutstanding = this.isCurrency(0, this.decimal)
                return
              }
              this.M_TN_EarlyTerminationEntry.totaloutstanding = this.isCurrency(ress2[0].amt, this.decimal)
            })
        },
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
            this.M_TN_EarlyTerminationEntry.rcd = data.RCD
            this.M_TN_EarlyTerminationEntry.red = data.RED
            this.M_TN_EarlyTerminationEntry.contactid = data.CustomerName
            this.M_TN_EarlyTerminationEntry.customercategorycd = data.Category
            this.M_TN_EarlyTerminationEntry.brandname = data.BrandName
            this.M_TN_EarlyTerminationEntry.leaseperiod = data.LeasePeriod
            this.M_TN_EarlyTerminationEntry.currencycd = data.CurrencyCd
            this.M_TN_EarlyTerminationEntry.contractamt = data.ContractAmt
            this.M_TN_EarlyTerminationEntry.grossDescs = this.isCurrency(data.TotalGrossArea) + " / " + this.isCurrency(data.TotalSemiGrossArea) + " / " + this.isCurrency(data.TotalNetArea)
            this.M_TN_EarlyTerminationEntry.grossarea = data.TotalGrossArea
            this.M_TN_EarlyTerminationEntry.semigrossarea = data.TotalSemiGrossArea
            this.M_TN_EarlyTerminationEntry.netarea = data.TotalNetArea
            this.M_TN_EarlyTerminationEntry.marketingid = data.MarketingID
            this.M_TN_EarlyTerminationEntry.operatingfromhour = data.OperatingFromHour
            this.M_TN_EarlyTerminationEntry.operatingtohour = data.OperatingToHour
            this.M_TN_EarlyTerminationEntry.remarks = data.Remarks

            this.getContractDataGetTNOutStandingAmt(appNo)
           
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
            this.M_TN_EarlyTerminationEntry.applicationno = data.id
            this.M_TN_EarlyTerminationEntry.applicationnoLabel = data.label
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
            this.M_TN_EarlyTerminationEntry.replacementapplicationo = data.id
            this.M_TN_EarlyTerminationEntry.replacementapplicationoLabel = data.label
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
          if (this.M_TN_EarlyTerminationEntry.terminationno == "(auto)") {
            this.M_TN_EarlyTerminationEntry.terminationno = "null"
          }

          var param = {			
              OptionSeq: this.getOptionSeq().OptionSeq,
              LineNo: this.$parent.data.PageOrder,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              ApplicationNo: this.M_TN_EarlyTerminationEntry.applicationno == '' || this.M_TN_EarlyTerminationEntry.applicationno == null ? 'NULL' : this.M_TN_EarlyTerminationEntry.applicationno ,
              TerminationNo: this.M_TN_EarlyTerminationEntry.terminationno,
              TerminationDate: this.M_TN_EarlyTerminationEntry.terminationdate == '' || this.M_TN_EarlyTerminationEntry.terminationdate == null ? 'NULL' : this.M_TN_EarlyTerminationEntry.terminationdate ,
              TerminationType: this.M_TN_EarlyTerminationEntry.terminationtype,
              EffectiveDate: this.M_TN_EarlyTerminationEntry.effectivedate == '' || this.M_TN_EarlyTerminationEntry.effectivedate == null ? 'NULL' : this.M_TN_EarlyTerminationEntry.effectivedate ,
              HandOverDate: this.M_TN_EarlyTerminationEntry.handoverdate == '' || this.M_TN_EarlyTerminationEntry.handoverdate == null ? 'NULL' : this.M_TN_EarlyTerminationEntry.handoverdate ,
              ReplacementApplicatioNo: this.M_TN_EarlyTerminationEntry.replacementapplicationo == '' || this.M_TN_EarlyTerminationEntry.replacementapplicationo == null ? 'NULL' : this.M_TN_EarlyTerminationEntry.replacementapplicationo ,
              Status: "N",
              Remarks: this.M_TN_EarlyTerminationEntry.remarks,
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
            ApplicationNo: this.M_TN_EarlyTerminationEntry.applicationno == '' || this.M_TN_EarlyTerminationEntry.applicationno == null ? 'NULL' : this.M_TN_EarlyTerminationEntry.applicationno ,
            TerminationNo: this.M_TN_EarlyTerminationEntry.terminationno,
            TerminationDate: this.M_TN_EarlyTerminationEntry.terminationdate == '' || this.M_TN_EarlyTerminationEntry.terminationdate == null ? 'NULL' : this.M_TN_EarlyTerminationEntry.terminationdate ,
            TerminationType: this.M_TN_EarlyTerminationEntry.terminationtype,
            EffectiveDate: this.M_TN_EarlyTerminationEntry.effectivedate == '' || this.M_TN_EarlyTerminationEntry.effectivedate == null ? 'NULL' : this.M_TN_EarlyTerminationEntry.effectivedate ,
            HandOverDate: this.M_TN_EarlyTerminationEntry.handoverdate == '' || this.M_TN_EarlyTerminationEntry.handoverdate == null ? 'NULL' : this.M_TN_EarlyTerminationEntry.handoverdate ,
            ReplacementApplicatioNo: this.M_TN_EarlyTerminationEntry.replacementapplicationo == '' || this.M_TN_EarlyTerminationEntry.replacementapplicationo == null ? 'NULL' : this.M_TN_EarlyTerminationEntry.replacementapplicationo ,
            Remarks: this.M_TN_EarlyTerminationEntry.remarks,
            UserEdit: this.getDataUser().UserId ,
            LastUpdateStamp: this.M_TN_EarlyTerminationEntry.lastupdatestamp
          }

          this.postJSON(this.getUrlUpdate(), param)
          .then((response) => {
            if(response == null) return
            this.$parent.resultUpdate(response.Message)
          })
        },
		M_ClearForm(){
            this.M_TN_EarlyTerminationEntry = {
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
                grossarea: '0.00  / 0.00  / 0.00',
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
                operatingfromhour: '',
                operatingtohour: '',
                name: '',
                namereplace: '',
                rowid: 0,
                totaloutstanding: '',
                chargeperiod: 'months',
                perioddays: '',
                freerentalperiod: '',
                    }
            		
		},
        M_New(){
          if (this.TNSpec.TerminationRunningCd != null && this.TNSpec.TerminationRunningCd != "") {
            this.M_TN_EarlyTerminationEntry.terminationno = "(auto)"
            this.PI_terminationno.cProtect = true
          } else {
            this.M_TN_EarlyTerminationEntry.terminationno = ""
            this.PI_terminationno.cProtect = false
          }

          // this.M_TN_EarlyTerminationEntry.statusdescs = 'New'
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
              var message = "Deleting Data Successfully"
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
                // console.log(data)
this.M_TN_EarlyTerminationEntry = {
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
                operatingfromhour: data.operatingfromhour,
                operatingtohour: data.operatingtohour,
                name: data.name,
                namereplace: data.namereplace,
                rowid: data.rowid,
                chargeperiod: data.chargeperiod,
                perioddays: data.perioddays,
                freerentalperiod: data.freerentalperiod,
                totaloutstanding: data.totaloutstanding ? this.isCurrency(data.totaloutstanding, this.decimal) : 0
                    }
                if(data.statusdescs == 'Rejected' || data.statusdescs == 'Canceled' || data.statusdescs == 'Approved'){
                  this.getToolbar().statusFunction[1].disabled = true
                  this.PI_effectivedate.cKey = true
                  this.PI_handoverdate.cKey = true
                  this.PI_remarks.cKey = true
                  this.PI_terminationtype.cKey = true
                  // this.getToolbar().statusFunction[2].disabled = true
                }else{
                  this.getToolbar().statusFunction[1].disabled = false
                  this.PI_effectivedate.cKey = false
                  this.PI_handoverdate.cKey = false
                  this.PI_remarks.cKey = false
                  this.PI_terminationtype.cKey = false
                  // this.getToolbar().statusFunction[2].disabled = false
                }

                 switch (data.chargeperiod) {
                  case "M":
                      this.M_TN_EarlyTerminationEntry.chargeperiod = 'months'
                      break;
                  case "D":
                      this.M_TN_EarlyTerminationEntry.chargeperiod = 'days'
                      break;
                  default:
                      this.M_TN_EarlyTerminationEntry.chargeperiod = 'years'
                      break;
                }  
                 

                this.M_TN_EarlyTerminationEntry.applicationnoLabel = this.M_TN_EarlyTerminationEntry.applicationno != null && this.M_TN_EarlyTerminationEntry.applicationno != '' ? data.applicationno + this.separator + data.name :'' 
                this.M_TN_EarlyTerminationEntry.replacementapplicationoLabel = this.M_TN_EarlyTerminationEntry.replacementapplicationo != null && this.M_TN_EarlyTerminationEntry.replacementapplicationo != '' ? data.replacementapplicationo + this.separator  :'' 
                
                this.getContractDataGetTNOutStandingAmt(data.applicationno)

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,MdtRange_rcd (data) {
            this.M_TN_EarlyTerminationEntry.rcd = data
        }
        ,MdtRange_red (data) {
            this.M_TN_EarlyTerminationEntry.red = data
        }
        ,MdtRange_operatingfromhour (data){
            this.M_TN_EarlyTerminationEntry.operatingfromhour = data
        }
        ,MdtRange_operatingtohour (data){
            this.M_TN_EarlyTerminationEntry.operatingtohour = data
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

