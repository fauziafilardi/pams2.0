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
                                        <ABSInputSelectList @change="OnlotnoChange" :prop="PI_lotno" :value="M_TN_LOOCLLotAddendum.lotno" :label="M_TN_LOOCLLotAddendum.lotnoLabel" ref="ref_lotno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_blockcd" v-model="M_TN_LOOCLLotAddendum.blockcd"  ref="ref_blockcd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_floorcd" v-model="M_TN_LOOCLLotAddendum.floorcd"  ref="ref_floorcd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnfixchargesChange" :prop="PI_fixcharges" v-model="M_TN_LOOCLLotAddendum.fixcharges"  ref="ref_fixcharges" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnchargeareaChange" :prop="PI_chargearea" v-model="M_TN_LOOCLLotAddendum.chargearea"  ref="ref_chargearea" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_grossarea" v-model="M_TN_LOOCLLotAddendum.grossarea"  ref="ref_grossarea" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_semigrossarea" v-model="M_TN_LOOCLLotAddendum.semigrossarea"  ref="ref_semigrossarea" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_netarea" v-model="M_TN_LOOCLLotAddendum.netarea"  ref="ref_netarea" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_budgetrate" v-model="M_TN_LOOCLLotAddendum.budgetrate"  ref="ref_budgetrate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnrentalrateChange" :prop="PI_rentalrate" v-model="M_TN_LOOCLLotAddendum.rentalrate"  ref="ref_rentalrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_rentalamt" v-model="M_TN_LOOCLLotAddendum.rentalamt"  ref="ref_rentalamt" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OntenantstatusChange" :prop="PI_tenantstatus" v-model="M_TN_LOOCLLotAddendum.tenantstatus"  ref="ref_tenantstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_LOOCLLotAddendum.remarks"  ref="ref_remarks" />
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
			Module:"TN",
            propList: {
                initialWhere:"ApplicationNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_LOOCLLotAddendum :{
                applicationno: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lotno: '',
                grossarea: 0,
                semigrossarea: 0,
                netarea: 0,
                rentalqty: 0,
                rentalrate: '0',
                rentalamt: 0,
                chargearea: '',
                fixcharges: '',
                blockcd: '',
                blockdescs: '',
                floorcd: '',
                floordescs: '',
                rcd: '',
                red: '',
                tenantstatus: '',
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
                lastupdatestamp: 0,
                rowid: 0,
                addendumsequenceno:0
                    }
            ,
            PI_lotno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLOOCLLotNo'    , 
                    ColumnDB: 'LotNo'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'lotno', 
                cLabel: 'Lot No', 
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
                cDisplayColumn: 'LotNo,Descs,FixCharges,GrossArea,SemiGrossArea,NetArea,TimeEdit' ,
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
                cRadioOptions: [{ text: 'No', value: 'N' },{ text: 'Yes', value: 'Y' },], 
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
            PI_chargearea: { 
                cValidate :'', 
                cName: 'chargearea', 
                cId: 'rdbchargearea', 
                cRadioOptions: [{ text: 'Gross Area', value: 'G' },{ text: 'Semi Gross Area', value: 'S' },{ text: 'Net Area', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Base Calculation Area', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: true, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_grossarea: { 
                cLabel: 'Gross Area', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_semigrossarea: { 
                cLabel: 'Semi Gross Area', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_netarea: { 
                cLabel: 'Net Area', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_budgetrate: { 
                cLabel: 'Budget Rate', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_rentalrate: { 
                cValidate :'', 
                cName: 'rentalrate', 
                cLabel: 'Rental Rate', 
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
            PI_rentalamt: { 
                cLabel: 'Total Rate', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
        GetLotRentalRateDefault(){
          var param = {
            OptionFunctionCd:'GetLotRentalRateDefault',
            ModuleCd: this.ModuleCd,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            ApplicationNo: this.M_TN_LOOCLLotAddendum.applicationno,
            LotNo: this.M_TN_LOOCLLotAddendum.lotno
          }

          this.FnDynamicFunction(param)
            .then(ress => {
              if (ress == null) return
                var data = ress[0]
                this.M_TN_LOOCLLotAddendum.blockcd = data.BlockCd +'( '+ data.BlockDescs + ' )'
                this.M_TN_LOOCLLotAddendum.floorcd = data.FloorCd +'( '+ data.FloorDescs + ' )'
                this.M_TN_LOOCLLotAddendum.budgetrate = this.isCurrency(data.RentalRate, this.decimal)
                this.M_TN_LOOCLLotAddendum.rentalrate = this.isCurrency(data.RentalRate_default, this.decimal)
                this.M_TN_LOOCLLotAddendum.rentalamt = this.isCurrency(data.TotalRate, this.decimal)
                this.M_TN_LOOCLLotAddendum.fixcharges = data.FixCharges
                this.M_TN_LOOCLLotAddendum.chargearea = data.ChargeArea

            })
        },
        Update_RentalAmt(){
          var param = {
            OptionFunctionCd: 'Update_RentalAmt',
            ModuleCd: this.Module,
            ApplicationNo: this.M_TN_LOOCLLotAddendum.applicationno,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            LotNo: this.M_TN_LOOCLLotAddendum.lotno,
            RentalRate: this.M_TN_LOOCLLotAddendum.rentalrate,
            TotalRate: this.M_TN_LOOCLLotAddendum.totalrate
          }

          this.FnDynamicFunction(param)
            .then(ress => {
              if (ress == null) return
                var data = ress[0]
                this.M_TN_LOOCLLotAddendum.rentalamt = data.RentalAmt
            })
        },
        OnrentalrateChange(data){
          this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {

            }
          })
          this.$forceUpdate()
        },
        OnlotnoChange (data) {
          // alert('OnlotnoChange')
          // alert(JSON.stringify(data,null,2))
          // console.log(data)
        this.$nextTick(() => {
          
            this.M_TN_LOOCLLotAddendum.lotno = data.id
            this.M_TN_LOOCLLotAddendum.lotnoLabel = data.label
            this.M_TN_LOOCLLotAddendum.grossarea = data.GrossArea
            this.M_TN_LOOCLLotAddendum.semigrossarea = data.SemiGrossArea
            this.M_TN_LOOCLLotAddendum.netarea = data.NetArea
            this.M_TN_LOOCLLotAddendum.fixcharges = data.FixCharges
            if (this.inputStatus != "VIEW") {
              if(data.id != ''){
                this.GetLotRentalRateDefault()
              }
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
        OnchargeareaChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{chargearea}
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
		paramFromParent(){
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            // if(this.$store.getters.getLevel == this.PageLevel && this.$store.getters.getTab == this.TabIndex){
                if (
                    (data.Status != 'A' && data.ContractStatus != 1) ||
                    (data.Status != 'N' && data.ContractStatus != 1) ||
                    (data.Status == 'C') ||
                    (data.Status == 'X')
                ) {
                    this.FormType = "View"
                    this.$store.commit('setFormType','View')
                    this.getToolbar().ProcessPS()
                }
                else {
                    this.FormType = "List"
                    this.$store.commit('setFormType','List')
                    this.getToolbar().ProcessPS()
                }
            // }
            this.LookUpFilterLotNo(data)
            this.M_TN_LOOCLLotAddendum.applicationno = data.ApplicationNo
            // this.M_TN_LOOCLLotAddendum.addendumsequenceno = this.DataRowPage1.AddendumSequenceNo
            this.propList.initialWhere ="SubPortfolioCd ='"+ this.getDataUser().SubPortfolioCd +"' AND ApplicationNo = '" + data.ApplicationNo + "' AND AddendumSequenceNo = '"+ data.AddendumSequenceNo +"' "
            // console.log(this.DataRowPage1)
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                  OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_LOOCLLotAddendum.applicationno,
                AddendumSequenceNo: this.M_TN_LOOCLLotAddendum.addendumsequenceno,
                LotNo: this.M_TN_LOOCLLotAddendum.lotno == '' || this.M_TN_LOOCLLotAddendum.lotno == null ? 'NULL' : this.M_TN_LOOCLLotAddendum.lotno ,
                RentalQty: this.M_TN_LOOCLLotAddendum.rentalqty,
                RentalRate: this.M_TN_LOOCLLotAddendum.rentalrate ? this.replaceAllString(this.M_TN_LOOCLLotAddendum.rentalrate,',','','number') : 0 ,
                Remarks: this.M_TN_LOOCLLotAddendum.remarks,
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
                // OptionSeq: this.getOptionSeq().OptionSeq,
                // LineNo: this.$parent.data.PageOrder,
                // SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                // ApplicationNo: this.DataRowPage1.ApplicationNo,
                // LotNo: this.M_TN_LOOCLLotAddendum.lotno == '' || this.M_TN_LOOCLLotAddendum.lotno == null ? 'NULL' : this.M_TN_LOOCLLotAddendum.lotno ,
                // RentalQty: this.M_TN_LOOCLLotAddendum.rentalqty,
                // RentalRate: this.M_TN_LOOCLLotAddendum.rentalrate ? this.replaceAllString(this.M_TN_LOOCLLotAddendum.rentalrate,',','','number') : 0 ,
                // Remarks: this.M_TN_LOOCLLotAddendum.remarks,
                // UserEdit: this.getDataUser().UserId ,
                // LastUpdateStamp: this.M_TN_LOOCLLotAddendum.lastupdatestamp,
                //  AddendumSequenceNo: this.M_TN_LOOCLLotAddendum.addendumsequenceno 
                 
                 OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_LOOCLLotAddendum.applicationno,
                AddendumSequenceNo: this.M_TN_LOOCLLotAddendum.addendumsequenceno,
                LotNo: this.M_TN_LOOCLLotAddendum.lotno == '' || this.M_TN_LOOCLLotAddendum.lotno == null ? 'NULL' : this.M_TN_LOOCLLotAddendum.lotno ,
                StartDate: this.M_TN_LOOCLLotAddendum.startdate,
                EndDate: this.M_TN_LOOCLLotAddendum.enddate,
                StartPeriod: this.M_TN_LOOCLLotAddendum.startperiod,
                LeasePeriod: this.M_TN_LOOCLLotAddendum.leaseperiod,
                RED: this.M_TN_LOOCLLotAddendum.red,
                RCD: this.M_TN_LOOCLLotAddendum.rcd,
                RentalQty: this.M_TN_LOOCLLotAddendum.rentalqty,
                RentalRate: this.M_TN_LOOCLLotAddendum.rentalrate ? this.replaceAllString(this.M_TN_LOOCLLotAddendum.rentalrate,',','','number') : 0 ,
                GrossArea: this.M_TN_LOOCLLotAddendum.grossarea,
                SemiGrossArea: this.M_TN_LOOCLLotAddendum.grossarea,
                NetArea: this.M_TN_LOOCLLotAddendum.netarea,
                Remarks: this.M_TN_LOOCLLotAddendum.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_LOOCLLotAddendum.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_LOOCLLotAddendum = {
                applicationno: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lotno: '',
                grossarea: 0,
                semigrossarea: 0,
                netarea: 0,
                rentalqty: 0,
                rentalrate: '0',
                rentalamt: 0,
                chargearea: '',
                fixcharges: '',
                blockcd: '',
                blockdescs: '',
                floorcd: '',
                floordescs: '',
                rcd: '',
                red: '',
                tenantstatus: '',
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
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_LOOCLLotAddendum.applicationno = data.ApplicationNo
            this.M_TN_LOOCLLotAddendum.addendumsequenceno = data.AddendumSequenceNo             
            this.LookUpFilterLotNo(data)
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
                applicationno: record.ApplicationNo,
                addendumsequenceno: record.AddendumSequenceNo,
                lotno: record.LotNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_LOOCLLotAddendum = {
                // applicationno: data.applicationno,
                // subportfoliocd: data.subportfoliocd,
                // lotno: data.lotno,
                // grossarea: this.isCurrency(data.grossarea, this.decimal),
                // semigrossarea: this.isCurrency(data.semigrossarea, this.decimal),
                // netarea: this.isCurrency(data.netarea, this.decimal),
                // rentalqty: this.isCurrency(data.rentalqty, this.decimal),
                // rentalrate: this.isCurrency(data.rentalrate, this.decimal),
                // rentalamt: this.isCurrency(data.rentalamt, this.decimal),
                // chargearea: data.chargearea,
                // fixcharges: data.fixcharges,
                // blockcd: data.blockcd,
                // blockdescs: data.blockdescs,
                // floorcd: data.floorcd,
                // floordescs: data.floordescs,
                // rcd: data.rcd,
                // red: data.red,
                // tenantstatus: data.tenantstatus,
                // lotthemecd: data.lotthemecd,
                // themedescs: data.themedescs,
                // lotclasscd: data.lotclasscd,
                // classdescs: data.classdescs,
                // lotcategorycd: data.lotcategorycd,
                // categorydescs: data.categorydescs,
                // lottypedescs: data.lottypedescs,
                // remarks: data.remarks,
                // userinput: data.userinput,
                // useredit: data.useredit,
                // antenna: data.antenna,
                // lotdescs: data.lotdescs,
                // budgetrate: this.isCurrency(data.budgetrate, this.decimal),
                // totalrate: this.isCurrency(data.totalrate, this.decimal),
                // lastupdatestamp: record.LastUpdateStamp,
                // rowid: data.rowid,

                subportfoliocd: data.subportfoliocd,
                lotno: data.lotno,
                grossarea: this.isCurrency(data.grossarea, this.decimal),
                semigrossarea: this.isCurrency(data.semigrossarea, this.decimal),
                leaseperiod: this.isCurrency(data.leaseperiod, this.decimal),
                startperiod: this.isCurrency(data.startperiod, this.decimal),
                netarea: this.isCurrency(data.netarea, this.decimal),
                rentalqty: this.isCurrency(data.rentalqty, this.decimal),
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
                perioddays: this.isCurrency(data.perioddays, this.decimal),
                applicationno: record.ApplicationNo,
                addendumsequenceno: record.AddendumSequenceNo,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid

                    }
                    console.log(this.M_TN_LOOCLLotAddendum)
                 

                this.M_TN_LOOCLLotAddendum.lotnoLabel = this.M_TN_LOOCLLotAddendum.lotno != null && this.M_TN_LOOCLLotAddendum.lotno != '' ? data.lotno + this.separator  :'' 
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        },
        LookUpFilterLotNo(data){
          this.PI_lotno.dataLookUp.ParamView = "'"+data.RCD+"'"
          this.PI_lotno.dataLookUp.InitialWhere = " SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND isnull(ContractStatus,'x') NOT IN ('2', '3', '4') AND (isnull(ContractStatus,'x') NOT IN ('5') AND isnull(Status,'x') NOT IN ('A', 'R')) " +
                                                    "AND LotNo Not In (Select LotNo From Tn_ContractLot Where SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' and ApplicationNo = '" + data.ApplicationNo + "') " +
                                                    "AND LotCluster = (Select top 1 CustomerCategoryCd from TN_Contract where applicationno = '" + data.ApplicationNo + "' and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' ) " +
                                                    "AND ((StartDate IS NULL)  or "  +
                                                    "( (StartDate <= (Select top 1 StartDate from TN_Contract where applicationno = '" + data.ApplicationNo + "' and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' )) and     "+
                                                    "  (EndDate >= (Select top 1 StartDate from TN_Contract where applicationno = '" + data.ApplicationNo + "' and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd  + "'))       ) or  " +
                                                    "( (StartDate >= (Select top 1 StartDate from TN_Contract where applicationno = '" + data.ApplicationNo + "' and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd  + "')) and     "+
                                                    "  (StartDate <= (Select top 1 EndDate from TN_Contract where applicationno = '" + data.ApplicationNo + "' and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd  + "'))       ) )  "
                                                    
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

