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
                                        <ABSInputSelectList @change="OnlotnoChange" :prop="PI_lotno" :value="M_TN_CLReservationLot.lotno" :label="M_TN_CLReservationLot.lotnoLabel" ref="ref_lotno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_block" v-model="M_TN_CLReservationLot.blockcd"  ref="ref_block" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_floor" v-model="M_TN_CLReservationLot.floorcd"  ref="ref_floor" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnfixchargesChange" :prop="PI_fixcharges" v-model="M_TN_CLReservationLot.fixcharges"  ref="ref_fixcharges" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="Ontenantstatus1Change" :prop="PI_tenantstatus1" v-model="M_TN_CLReservationLot.chargearea"  ref="ref_tenantstatus1" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_grossseminetarea" v-model="grossseminetarea"  ref="ref_grossseminetarea" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_rentalrate" v-model="M_TN_CLReservationLot.rentalrate"  ref="ref_rentalrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totalrate" v-model="M_TN_CLReservationLot.totalrate"  ref="ref_totalrate"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_CLReservationLot.remarks"  ref="ref_remarks" />
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

            M_TN_CLReservationLot :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                rentalqty: 0,
                lotno: '',
                grossarea: '',
                semigrossarea: '',
                rentalamt: '',
                fixcharges: '',
                chargearea: '',
                netarea: '',
                blockcd: '',
                floorcd: '',
                tenantstatus: '',
                lotthemecd: '',
                lotclasscd: '',
                lotcategorycd: '',
                lottypedescs: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                antenna: '',
                applicationno: '',
                lastupdatestamp: 0,
                rowid: 0,
                grossseminetarea: '',
                rentalrate: '',
                totalrate: ''
                    }
            ,
            PI_lotno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLOOCLLotNo'    , 
                    ColumnDB: 'LotNo'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  ,
                    SourceField: "LotNo,Descs,FixCharges,Antenna,GrossArea,SemiGrossArea,NetArea",
                    DisplayLookUp:'LotNo,Descs'
                        }, 
                cValidate :'required', 
                cName: 'lotno', 
                cLabel: 'Lot No ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 1, 
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
            PI_block: { 
                cLabel: 'Block', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_floor: { 
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
                cOrder: 2, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_tenantstatus1: { 
                cValidate :'', 
                cName: 'tenantstatus1', 
                cId: 'rdbtenantstatus1', 
                cRadioOptions: [{ text: 'Gross', value: 'G' },{ text: 'Semi', value: 'S' },{ text: 'Net', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Base Calculation Area', 
                cLabelSize: 4, 
                cOrder: 3, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_grossseminetarea: { 
                cLabel: 'Gross / Semi Gross / Net Area', 
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
                cOrder: 4, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_totalrate: { 
                cValidate :'', 
                cName: 'totalrate', 
                cLabel: 'Total Rate', 
                cLabelSize: 4, 
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
                cOrder:6, 
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
	,GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
    },
    grossseminetarea(){
        return this.isCurrency(this.M_TN_CLReservationLot.grossarea, this.decimal) + ' / ' + this.isCurrency(this.M_TN_CLReservationLot.semigrossarea, this.decimal) + ' / ' + this.isCurrency(this.M_TN_CLReservationLot.netarea, this.decimal)
    }
  },
    methods: {
        OnlotnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_CLReservationLot.lotno = data.id
            this.M_TN_CLReservationLot.lotnoLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.M_TN_CLReservationLot.grossarea = data.GrossArea
                this.M_TN_CLReservationLot.semigrossarea = data.SemiGrossArea
                this.M_TN_CLReservationLot.netarea = data.NetArea
                // var param = {
                //     OptionFunctionCd: "GetLotInfo",
                //     ModuleCd: this.Module,
                //     SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                //     LotNo: data.id,
                //     RCD: this.M_TN_CLReservationLot.rcd
                // }

                // this.FnDynamicFunction(param)
                // .then(ress => {
                //     if (ress == null) return
                //     if (ress.length < 1) return
                //     var data = ress[0]
                    
                //     this.M_TN_CLReservationLot.grossarea = (data.GrossArea ? data.GrossArea : '')
                //     this.M_TN_CLReservationLot.semigrossarea = (data.SemiGrossArea ? data.SemiGrossArea : '')
                //     this.M_TN_CLReservationLot.netarea = (data.NetArea ? data.NetArea : '')
                //     this.M_TN_CLReservationLot.blockcd = (data.BlockCd ? data.BlockCd : '')
                //     this.M_TN_CLReservationLot.blockdescs = (data.BlockCd ? data.BlockCd : '') + ' - ' + (data.BlockName ? data.BlockName : '')
                //     this.M_TN_CLReservationLot.floorcd = (data.FloorCd ? data.FloorCd : '')
                //     this.M_TN_CLReservationLot.floordescs = (data.FloorCd ? data.FloorCd : '') + ' - ' + (data.FloorName ? data.FloorName : '')
                //     this.M_TN_CLReservationLot.lotthemecd = (data.LotThemeCd ? data.LotThemeCd : '')
                //     this.M_TN_CLReservationLot.themedescs = (data.LotThemeCd ? data.LotThemeCd : '') + ' - ' + (data.ThemeDescs ? data.ThemeDescs : '')
                //     this.M_TN_CLReservationLot.lotclasscd = (data.LotClassCd ? data.LotClassCd : '')
                //     this.M_TN_CLReservationLot.classdescs = (data.LotClassCd ? data.LotClassCd : '') + ' - ' + (data.ClassDescs ? data.ClassDescs : '')
                //     this.M_TN_CLReservationLot.lotcategorycd = (data.CategoryDescs ? data.CategoryDescs : '')
                //     this.M_TN_CLReservationLot.categorydescs = (data.LotCategoryCd ? data.LotCategoryCd : '') + ' - ' + (data.CategoryDescs ? data.CategoryDescs : '')
                // })
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
        Ontenantstatus1Change (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{tenantstatus1}
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
        GetOtherLotInfoInContract() {
            var param = {
              OptionFunctionCd: "GetOtherLotInfoInContract",
              ModuleCd: this.Module,
              ApplicationNo: this.DataRowPage1.ApplicationNo,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd
            }

            this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) {
                    this.GetRCd(true,'','')
                }
                else if (ress.length > 0) {
                    this.GetRCd(false, ress[0].FixCharges, ress[0].Antenna)
                }
                else {
                    this.GetRCd(true,'','')
                }
            })
        },
        GetRCd(bAll = true, FixCharges = '', Antenna = ''){
          // var RCD = ''
          var param = {
              OptionFunctionCd: "GetRCd",
              ModuleCd: this.Module,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              ApplicationNo: this.DataRowPage1.ApplicationNo
            }

            this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) return
                var data = ress[0]
                this.M_TN_CLReservationLot.rcd = this.momentDate(data.RCD)

                this.PI_lotno.dataLookUp.ParamView = "'"+this.momentDate(data.RCD)+"'"

                if (bAll == false) {
                    this.PI_lotno.dataLookUp.InitialWhere = "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND isnull(ContractStatus,'x') NOT IN ('2', '3', '4', '5') AND isnull(Status,'x') NOT IN ('A', 'R', 'N') AND LotCluster = (Select top 1 CustomerCategoryCd from TN_Contract where applicationno = '" + this.DataRowPage1.ApplicationNo + "' and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' ) AND ((StartDate IS NULL)  or ( (StartDate <= (Select top 1 StartDate from TN_Contract where applicationno = '" + this.DataRowPage1.ApplicationNo + "' and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' )) and (EndDate >= (Select top 1 StartDate from TN_Contract where applicationno = '" + this.DataRowPage1.ApplicationNo + "' and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'))       ) or ( (StartDate >= (Select top 1 StartDate from TN_Contract where applicationno = '" + this.DataRowPage1.ApplicationNo + "' and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "')) and (StartDate <= (Select top 1 EndDate from TN_Contract where applicationno = '" + this.DataRowPage1.ApplicationNo + "' and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'))       ) ) And FixCharges = (SELECT top 1 tl.FixCharges FROM TN_ContractLot tcl INNER JOIN TN_Lot tl ON tl.LotNo = tcl.LotNo AND tl.SubPortfolioCd = tcl.SubPortfolioCd Where applicationno = '" + this.DataRowPage1.ApplicationNo + "' and tcl.SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "')"
                }
                else {
                    this.PI_lotno.dataLookUp.InitialWhere = "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND isnull(ContractStatus,'x') NOT IN ('2', '3', '4', '5') AND isnull(Status,'x') NOT IN ('A', 'R', 'N') AND LotCluster = (Select top 1 CustomerCategoryCd from TN_Contract where applicationno = '" + this.DataRowPage1.ApplicationNo + "' and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' ) AND ((StartDate IS NULL)  or ( (StartDate <= (Select top 1 StartDate from TN_Contract where applicationno = '" + this.DataRowPage1.ApplicationNo + "' and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' )) and (EndDate >= (Select top 1 StartDate from TN_Contract where applicationno = '" + this.DataRowPage1.ApplicationNo + "' and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'))       ) or  ( (StartDate >= (Select top 1 StartDate from TN_Contract where applicationno = '" + this.DataRowPage1.ApplicationNo + "' and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "')) and (StartDate <= (Select top 1 EndDate from TN_Contract where applicationno = '" + this.DataRowPage1.ApplicationNo + "' and SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'))       ) )  "
                }
            })
        },
		paramFromParent(){
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            this.M_TN_CLReservationLot.applicationno = data.ApplicationNo 
            this.propList.initialWhere =" ApplicationNo = '" + data.ApplicationNo + "' "
            
            this.GetOtherLotInfoInContract()
            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_CLReservationLot.applicationno,
                LotNo: this.M_TN_CLReservationLot.lotno == '' || this.M_TN_CLReservationLot.lotno == null ? 'NULL' : this.M_TN_CLReservationLot.lotno ,
                Remarks: this.M_TN_CLReservationLot.remarks,
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
                ApplicationNo: this.M_TN_CLReservationLot.applicationno,
                LotNo: this.M_TN_CLReservationLot.lotno == '' || this.M_TN_CLReservationLot.lotno == null ? 'NULL' : this.M_TN_CLReservationLot.lotno ,
                Remarks: this.M_TN_CLReservationLot.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_CLReservationLot.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_CLReservationLot = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                rentalqty: 0,
                lotno: '',
                grossarea: 0,
                semigrossarea: 0,
                rentalamt: 0,
                fixcharges: '',
                chargearea: '',
                netarea: 0,
                blockcd: '',
                floorcd: '',
                tenantstatus: '',
                lotthemecd: '',
                lotclasscd: '',
                lotcategorycd: '',
                lottypedescs: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                antenna: '',
                applicationno: '',
                lastupdatestamp: 0,
                rowid: 0,
                grossseminetarea: '',
                rentalrate: '0',
                totalrate: '0'
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_CLReservationLot.applicationno = data.ApplicationNo 
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
                lotno: record.LotNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_CLReservationLot = {
                subportfoliocd: data.subportfoliocd,
                rentalqty: data.rentalqty,
                lotno: data.lotno,
                grossarea: this.isCurrency(data.grossarea, this.decimal),
                semigrossarea: this.isCurrency(data.semigrossarea, this.decimal),
                rentalamt: this.isCurrency(data.rentalamt, this.decimal),
                fixcharges: data.fixcharges,
                chargearea: data.chargearea,
                netarea: this.isCurrency(data.netarea, this.decimal),
                blockcd: data.blockcd,
                floorcd: data.floorcd,
                tenantstatus: data.tenantstatus,
                lotthemecd: data.lotthemecd,
                lotclasscd: data.lotclasscd,
                lotcategorycd: data.lotcategorycd,
                lottypedescs: data.lottypedescs,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                antenna: data.antenna,
                applicationno: data.applicationno,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                rentalrate: this.isCurrency(data.rentalrate, this.decimal),
                totalrate: this.isCurrency(data.totalrate, this.decimal)
                    }
                 

                this.M_TN_CLReservationLot.lotnoLabel = this.M_TN_CLReservationLot.lotno != null && this.M_TN_CLReservationLot.lotno != '' ? data.lotno + this.separator  :'' 
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

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

