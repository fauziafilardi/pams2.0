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
                                        <ABSinputDateRangeVuex :prop="PI_startdate" :valueFrom="M_TN_LOOLotAddendum.startdate" :valueTo="M_TN_LOOLotAddendum.enddate" ref="ref_startdate" @from="MdtRange_startdate" @to="MdtRange_enddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateRangeVuex :prop="PI_rcd" :valueFrom="M_TN_LOOLotAddendum.rcd" :valueTo="M_TN_LOOLotAddendum.red" ref="ref_rcd" @from="MdtRange_rcd" @to="MdtRange_red" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Lease Period</label>
                                          </b-col>
                                          <b-col md="1" style="margin-left: 10px;">
                                            <ABSTextBoxOnly :prop="PI_leaseperiod" v-model="M_TN_LOOLotAddendum.leaseperiod"  ref="ref_leaseperiod"/>    
                                          </b-col>
                                          <b-col md="4">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for=""> and {{M_TN_LOOLotAddendum.perioddays}} days</label>
                                          </b-col>
                                        </b-row>
                                      </b-col>
                                      
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnlotnoChange" :prop="PI_lotno" :value="M_TN_LOOLotAddendum.lotno" :label="M_TN_LOOLotAddendum.lotnoLabel" ref="ref_lotno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_rentalqty" v-model="M_TN_LOOLotAddendum.rentalqty"  ref="ref_rentalqty"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_startperiod" v-model="M_TN_LOOLotAddendum.startperiod"  ref="ref_startperiod"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OngrossareaChange" :prop="PI_grossarea" v-model="M_TN_LOOLotAddendum.grossarea"  ref="ref_grossarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_semigrossarea" v-model="M_TN_LOOLotAddendum.semigrossarea"  ref="ref_semigrossarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_netarea" v-model="M_TN_LOOLotAddendum.netarea"  ref="ref_netarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_blockcd" v-model="M_TN_LOOLotAddendum.blockcd"  ref="ref_blockcd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_floorcd" v-model="M_TN_LOOLotAddendum.floorcd"  ref="ref_floorcd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnfixchargesChange" :prop="PI_fixcharges" v-model="M_TN_LOOLotAddendum.fixcharges"  ref="ref_fixcharges" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OntenantstatusChange" :prop="PI_tenantstatus" v-model="M_TN_LOOLotAddendum.tenantstatus"  ref="ref_tenantstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_lotthemecd" v-model="M_TN_LOOLotAddendum.lotthemecd"  ref="ref_lotthemecd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_lotclasscd" v-model="M_TN_LOOLotAddendum.lotclasscd"  ref="ref_lotclasscd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_lotcategorycd" v-model="M_TN_LOOLotAddendum.lotcategorycd"  ref="ref_lotcategorycd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_LOOLotAddendum.remarks"  ref="ref_remarks" />
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
          DataRow:null,
			ValKey:null,
            FormType: "List",
			Module:"TN",
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

            M_TN_LOOLotAddendum :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lotno: '',
                grossarea: '0',
                semigrossarea: '0',
                leaseperiod: '0',
                startperiod: '0',
                netarea: '0',
                rentalqty: '0',
                rentalrate: 0,
                rentalamt: 0,
                chargearea: '',
                fixcharges: 'N',
                blockcd: '',
                blockdescs: '',
                floorcd: '',
                floordescs: '',
                startdate: '',
                enddate: '',
                rcd: '',
                red: '',
                tenantstatus: 'N',
                lotthemecd: '',
                themedescs: '',
                lotclasscd: '',
                classdescs: '',
                lotcategorycd: '',
                categorydescs: '',
                lottypedescs: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                antenna: '',
                lotdescs: '',
                budgetrate: 0,
                totalrate: 0,
                perioddays: 0,
                applicationno: '',
                addendumsequenceno: 0,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_startdate: { 
                cValidate :'', 
                cName: 'startdate', 
                cLabel: 'Lease Start - End Date', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_rcd: { 
                cValidate :'required', 
                cName: 'rcd', 
                cLabel: 'RCD - RED', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_leaseperiod: { 
                cValidate :'required', 
                cName: 'leaseperiod', 
                cLabel: 'Lease Period', 
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
            PI_lotno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupLot2'    , 
                    ColumnDB: 'LotNo'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '',
                    ParamView:''  
                        }, 
                cValidate :'', 
                cName: 'lotno', 
                cLabel: 'Lot No', 
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
                cDisplayColumn: 'LotNo,Descs' ,
            }, 
            PI_rentalqty: { 
                cValidate :'', 
                cName: 'rentalqty', 
                cLabel: 'Antenna Quantity', 
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
            PI_startperiod: { 
                cValidate :'', 
                cName: 'startperiod', 
                cLabel: 'Start Period', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'numeric',
                cVisible: false, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_grossarea: { 
                cValidate :'required', 
                cName: 'grossarea', 
                cLabel: 'Gross Area', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_semigrossarea: { 
                cValidate :'', 
                cName: 'semigrossarea', 
                cLabel: 'Semi Gross Area', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_netarea: { 
                cValidate :'', 
                cName: 'netarea', 
                cLabel: 'Net Area', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_blockcd: { 
                cLabel: 'Block', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_floorcd: { 
                cLabel: 'Floor', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_fixcharges: { 
                cValidate :'', 
                cName: 'fixcharges', 
                cId: 'rdbfixcharges', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Fix Charges', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: true, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_tenantstatus: { 
                cValidate :'', 
                cName: 'tenantstatus', 
                cId: 'rdbtenantstatus', 
                cRadioOptions: [{ text: 'New', value: 'N' },{ text: 'Replacement', value: 'P' },{ text: 'Renew', value: 'R' },], 
                cRadioDefaultOption: '', 
                cLabel:'Tenant Status', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: true, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_lotthemecd: { 
                cLabel: 'Theme', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_lotclasscd: { 
                cLabel: 'Class', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_lotcategorycd: { 
                cLabel: 'Category', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
		return this.$store.getters.GetPage2Data
	},
    DataRowPage1(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
      OngrossareaChange(data){
        this.M_TN_LOOLotAddendum.semigrossarea = data
        this.M_TN_LOOLotAddendum.netarea = data
      },
        OnlotnoChange (data) {
          console.log(data)
        this.$nextTick(() => {
            this.M_TN_LOOLotAddendum.lotno = data.id
            this.M_TN_LOOLotAddendum.lotnoLabel = data.label

            this.M_TN_LOOLotAddendum.blockcd = data.BlockCd
            this.M_TN_LOOLotAddendum.floorcd = data.FloorCd
            if (this.inputStatus != "VIEW") {
//{lotno}
            }
        })
        this.$forceUpdate()
        },
        OnfixchargesChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{fixcharges}
            }
        })
        this.$forceUpdate()
        },
        OntenantstatusChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{tenantstatus}
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
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },
        GetRCd(){
          // var RCD = ''
          var param = {
              OptionFunctionCd: "GetRCdAddendum",
              ModuleCd: this.Module,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              ApplicationNo: this.DataRow.ApplicationNo,
              AddendumSequenceNo: this.DataRow.AddendumSequenceNo
            }

            this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) return
                var data = ress[0] 

                this.PI_lotno.dataLookUp.ParamView = "'"+data.RCD+"'"
            })
        },
		paramFromParent(){
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            this.DataRow = data
            console.log(this.DataRow)
            

            this.M_TN_LOOLotAddendum.applicationno = data.ApplicationNo 
            // this.propList.initialWhere =" ApplicationNo = '" + data.ApplicationNo + "' "
            // this.M_TN_LOOLotAddendum.rcd = this.DataRow.RCD
            // this.M_TN_LOOLotAddendum.red = this.DataRow.RED


            this.propList.initialWhere = "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ApplicationNo = '" + this.DataRow.ApplicationNo + "' AND AddendumSequenceNo = '" + this.DataRow.AddendumSequenceNo + "'"
            
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_LOOLotAddendum.applicationno,
                AddendumSequenceNo: this.M_TN_LOOLotAddendum.addendumsequenceno,
                LotNo: this.M_TN_LOOLotAddendum.lotno == '' || this.M_TN_LOOLotAddendum.lotno == null ? 'NULL' : this.M_TN_LOOLotAddendum.lotno ,
                StartDate: this.M_TN_LOOLotAddendum.startdate == '' || this.M_TN_LOOLotAddendum.startdate == null ? 'NULL' : this.M_TN_LOOLotAddendum.startdate ,
                EndDate: this.M_TN_LOOLotAddendum.enddate,
                StartPeriod: this.M_TN_LOOLotAddendum.startperiod,
                LeasePeriod: this.M_TN_LOOLotAddendum.leaseperiod,
                RCD: this.M_TN_LOOLotAddendum.rcd == '' || this.M_TN_LOOLotAddendum.rcd == null ? 'NULL' : this.M_TN_LOOLotAddendum.rcd ,
                RED: this.M_TN_LOOLotAddendum.red,
                RentalQty: this.M_TN_LOOLotAddendum.rentalqty,
                RentalRate: this.M_TN_LOOLotAddendum.rentalrate,
                GrossArea: this.M_TN_LOOLotAddendum.grossarea ? this.replaceAllString(this.M_TN_LOOLotAddendum.grossarea,',','','number') : 0 ,
                SemiGrossArea: this.M_TN_LOOLotAddendum.semigrossarea ? this.replaceAllString(this.M_TN_LOOLotAddendum.semigrossarea,',','','number') : 0 ,
                NetArea: this.M_TN_LOOLotAddendum.netarea ? this.replaceAllString(this.M_TN_LOOLotAddendum.netarea,',','','number') : 0 ,
                Remarks: this.M_TN_LOOLotAddendum.remarks,
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
                ApplicationNo: this.DataRow.ApplicationNo,
                AddendumSequenceNo: this.DataRow.AddendumSequenceNo,
                LotNo: this.M_TN_LOOLotAddendum.lotno == '' || this.M_TN_LOOLotAddendum.lotno == null ? 'NULL' : this.M_TN_LOOLotAddendum.lotno ,
                StartDate: this.M_TN_LOOLotAddendum.startdate == '' || this.M_TN_LOOLotAddendum.startdate == null ? 'NULL' : this.M_TN_LOOLotAddendum.startdate ,
                EndDate: this.M_TN_LOOLotAddendum.enddate  == '' || this.M_TN_LOOLotAddendum.enddate == null ? 'NULL' : this.M_TN_LOOLotAddendum.enddate,
                StartPeriod: this.M_TN_LOOLotAddendum.startperiod  == '' || this.M_TN_LOOLotAddendum.startperiod == null ? 'NULL' : this.M_TN_LOOLotAddendum.startperiod,
                LeasePeriod: this.M_TN_LOOLotAddendum.leaseperiod,
                RED: this.M_TN_LOOLotAddendum.red  == '' || this.M_TN_LOOLotAddendum.red == null ? 'NULL' : this.M_TN_LOOLotAddendum.red,
                RCD: this.M_TN_LOOLotAddendum.rcd == '' || this.M_TN_LOOLotAddendum.rcd == null ? 'NULL' : this.M_TN_LOOLotAddendum.rcd ,
                RentalQty: this.M_TN_LOOLotAddendum.rentalqty,
                RentalRate: this.M_TN_LOOLotAddendum.rentalrate,
                GrossArea: this.M_TN_LOOLotAddendum.grossarea ? this.replaceAllString(this.M_TN_LOOLotAddendum.grossarea,',','','number') : 0 ,
                SemiGrossArea: this.M_TN_LOOLotAddendum.semigrossarea ? this.replaceAllString(this.M_TN_LOOLotAddendum.semigrossarea,',','','number') : 0 ,
                NetArea: this.M_TN_LOOLotAddendum.netarea ? this.replaceAllString(this.M_TN_LOOLotAddendum.netarea,',','','number') : 0 ,
                Remarks: this.M_TN_LOOLotAddendum.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_LOOLotAddendum.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_LOOLotAddendum = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lotno: '',
                grossarea: '0',
                semigrossarea: '0',
                leaseperiod: '0',
                startperiod: '0',
                netarea: '0',
                rentalqty: '0',
                rentalrate: 0,
                rentalamt: 0,
                chargearea: '',
                fixcharges: 'N',
                blockcd: '',
                blockdescs: '',
                floorcd: '',
                floordescs: '',
                startdate: '',
                enddate: '',
                rcd: '',
                red: '',
                tenantstatus: 'N',
                lotthemecd: '',
                themedescs: '', 
                lotclasscd: '',
                classdescs: '',
                lotcategorycd: '',
                categorydescs: '',
                lottypedescs: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                antenna: '',
                lotdescs: '',
                budgetrate: 0,
                totalrate: 0,
                perioddays: 0,
                applicationno: '',
                addendumsequenceno: 0,
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_LOOLotAddendum.applicationno = data.ApplicationNo 

            this.M_TN_LOOLotAddendum.rcd = this.momentDateFormat(this.DataRow.RCD, 'DD/MM/YYYY')
            this.M_TN_LOOLotAddendum.red = this.momentDateFormat(this.DataRow.RED, 'DD/MM/YYYY')
            this.M_TN_LOOLotAddendum.leaseperiod = this.DataRow.LeasePeriod
            this.M_TN_LOOLotAddendum.perioddays = this.DataRow.PeriodDays

            this.GetRCd()

            this.PI_lotno.dataLookUp.InitialWhere = "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd +  "' AND isnull(ContractStatus,'x') NOT IN ('2', '3', '4') AND (isnull(ContractStatus,'x') NOT IN ('5') AND isnull(Status,'x') NOT IN ('A', 'R'))" +
                                                    "AND LotNo Not In (Select LotNo From Tn_ContractLotAddendum Where SubPortfolioCd = '"  + this.getDataUser().SubPortfolioCd + "' and ApplicationNo = '" + this.DataRow.ApplicationNo + "' AND AddendumSequenceNo = " + this.DataRow.AddendumSequenceNo + ")" +
                                                    "AND LotCluster = (Select top 1 CustomerCategoryCd from TN_ContractAddendum where applicationno = '" + this.DataRow.ApplicationNo + "' and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND AddendumSequenceNo = " + this.DataRow.AddendumSequenceNo + " )" +
                                                    "AND ((StartDate IS NULL)  or "  +
                                                    "( (StartDate <= (Select top 1 StartDate from TN_ContractAddendum where applicationno = '" + this.DataRow.ApplicationNo + "' and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND AddendumSequenceNo = " + this.DataRow.AddendumSequenceNo + " )) and "+
                                                    "  (EndDate >= (Select top 1 StartDate from TN_ContractAddendum where applicationno = '" + this.DataRow.ApplicationNo + "' and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND AddendumSequenceNo = " + this.DataRow.AddendumSequenceNo + "))       ) or  " +
                                                    "( (StartDate >= (Select top 1 StartDate from TN_ContractAddendum where applicationno = '" + this.DataRow.ApplicationNo + "' and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND AddendumSequenceNo = " + this.DataRow.AddendumSequenceNo + ")) and     "+
                                                    "  (StartDate <= (Select top 1 EndDate from TN_ContractAddendum where applicationno = '" + this.DataRow.ApplicationNo + "' and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND AddendumSequenceNo = " + this.DataRow.AddendumSequenceNo + "))       ) ) "+
                                                    "And Antenna = (SELECT top 1 tc.AntennaStatus FROM TN_ContractAddendum tc Where tc.applicationno = '" + this.DataRow.ApplicationNo + "' and tc.SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND AddendumSequenceNo = " + this.DataRow.AddendumSequenceNo + ") "



        },
        M_Edit(){
        },
        M_Delete(dt){           
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    LotNo: value.LotNo == '' || value.LotNo == null ? 'NULL' : value.LotNo ,
                    ApplicationNo: value.ApplicationNo,
                    AddendumSequenceNo: value.AddendumSequenceNo,
                    LastUpdateStamp: value.LastUpdateStamp,
                    _Message_: "Lot No " + value.SequenceNo


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
                applicationno: record.ApplicationNo,
                addendumsequenceno: record.AddendumSequenceNo,
                lotno: record.LotNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
                console.log(data)
this.M_TN_LOOLotAddendum = {
                subportfoliocd: data.subportfoliocd,
                lotno: data.lotno,
                grossarea: this.isCurrency(data.grossarea, this.decimal),
                semigrossarea: this.isCurrency(data.semigrossarea, this.decimal),
                leaseperiod: data.leaseperiod,
                startperiod: data.startperiod,
                netarea: this.isCurrency(data.netarea, this.decimal),
                rentalqty: data.rentalqty,
                rentalrate: this.isCurrency(data.rentalrate, this.decimal),
                rentalamt: this.isCurrency(data.rentalamt, this.decimal),
                chargearea: data.chargearea,
                fixcharges: data.fixcharges,
                blockcd: data.blockcd,
                blockdescs: data.blockdescs,
                floorcd: data.floorcd,
                floordescs: data.floordescs,
                startdate: data.startdate,
                enddate: data.enddate,
                rcd: data.rcd,
                red: data.red,
                tenantstatus: data.tenantstatus,
                lotthemecd: data.lotthemecd,
                themedescs: data.themedescs,
                lotclasscd: data.lotclasscd,
                classdescs: data.classdescs,
                lotcategorycd: data.lotcategorycd,
                categorydescs: data.categorydescs,
                lottypedescs: data.lottypedescs,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                antenna: data.antenna,
                lotdescs: data.lotdescs,
                budgetrate: this.isCurrency(data.budgetrate, this.decimal),
                totalrate: this.isCurrency(data.totalrate, this.decimal),
                perioddays: data.perioddays,
                applicationno: data.applicationno,
                addendumsequenceno: data.addendumsequenceno,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_TN_LOOLotAddendum.lotnoLabel = this.M_TN_LOOLotAddendum.lotno != null && this.M_TN_LOOLotAddendum.lotno != '' ? data.lotno + this.separator + data.lotdescs :'' 
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,MdtRange_startdate (data) {
            this.M_TN_LOOLotAddendum.startdate = data
        }
        ,MdtRange_enddate (data) {
            this.M_TN_LOOLotAddendum.enddate = data
        }
        ,MdtRange_rcd (data) {
            this.M_TN_LOOLotAddendum.rcd = data
        }
        ,MdtRange_red (data) {
            this.M_TN_LOOLotAddendum.red = data
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

