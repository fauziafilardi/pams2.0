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
                                        <ABSInputSelectList @change="OnlotnoChange" :prop="PI_lotno" :value="M_TN_LOOLot.lotno" :label="M_TN_LOOLot.lotnoLabel" ref="ref_lotno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_rentalqty" v-model="M_TN_LOOLot.rentalqty"  ref="ref_rentalqty"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateRangeVuex :prop="PI_rcd" :valueFrom="M_TN_LOOLot.rcd" :valueTo="M_TN_LOOLot.red" ref="ref_rcd" @from="MdtRange_rcd" @to="MdtRange_red" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_grossarea" v-model="M_TN_LOOLot.grossarea"  ref="ref_grossarea" />
                                      </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_semigrossarea" v-model="M_TN_LOOLot.semigrossarea"  ref="ref_semigrossarea" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_netarea" v-model="M_TN_LOOLot.netarea"  ref="ref_netarea" />
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_blockcd" v-model="M_TN_LOOLot.blockdescs"  ref="ref_blockcd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_floorcd" v-model="M_TN_LOOLot.floordescs"  ref="ref_floorcd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnfixchargesChange" :prop="PI_fixcharges" v-model="M_TN_LOOLot.fixcharges"  ref="ref_fixcharges" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OntenantstatusChange" :prop="PI_tenantstatus" v-model="M_TN_LOOLot.tenantstatus"  ref="ref_tenantstatus" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_lotthemecd" v-model="M_TN_LOOLot.themedescs"  ref="ref_lotthemecd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_lotclasscd" v-model="M_TN_LOOLot.classdescs"  ref="ref_lotclasscd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_lotcategorycd" v-model="M_TN_LOOLot.categorydescs"  ref="ref_lotcategorycd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_LOOLot.remarks"  ref="ref_remarks" />
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
          DataRow: null,
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
            rcdNow: null,

            M_TN_LOOLot :{
                applicationno: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lotno: '',
                grossarea: 0,
                semigrossarea: 0,
                netarea: 0,
                rentalqty: '0',
                rentalrate: 0,
                rentalamt: 0,
                chargearea: '',
                fixcharges: 'N',
                blockcd: '',
                blockdescs: '',
                floorcd: '',
                floordescs: '',
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
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_lotno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLOOLotNo',
                    ColumnDB: 'LotNo',
                    InitialWhere: "",
                    ParamWhere: "",
                    ParamView: "",
                    SourceField:'LotNo,Descs,FixCharges,Antenna,GrossArea,SemiGrossArea,NetArea,TimeEdit',
                    DisplayLookUp:'LotNo,Descs'
                        }, 
                cValidate :'required', 
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
                cKey: false, 
                cType: 'numeric',
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
            PI_grossarea: { 
                cLabel: 'Gross / Semi Gross / Net Area', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            // PI_semigrossarea: { 
            //     cLabel: 'Semi Gross Area', 
            //     cLabelSize: 4, 
            //     cValue: '', 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cVisible: true 
            // }, 
            // PI_netarea: { 
            //     cLabel: 'Net Area', 
            //     cLabelSize: 4, 
            //     cValue: '', 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cVisible: true 
            // }, 
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
                cRadioDefaultOption: 'N', 
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
                cRadioDefaultOption: 'N', 
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
		return this.$store.getters.GetPage2Data
	},
    DataRowPage1(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
      getLotNoInfo(){
        var param = {
          OptionFunctionCd: "GetLotInfo",
          ModuleCd: this.Module,
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          LotNo: this.M_TN_LOOLot.lotno,
          RCD: this.rcdNow
        }

        this.FnDynamicFunction(param)
        .then(ress => {
          if (ress == null) return
          var data = ress[0]
          // console.log(data);

          this.M_TN_LOOLot.floordescs = data.FloorCd != null && data.FloorCd != '' ? data.FloorCd + this.separator + data.FloorName :''
          this.M_TN_LOOLot.blockdescs = data.BlockCd != null && data.BlockCd != '' ? data.BlockCd + this.separator + data.BlockName :''

          this.M_TN_LOOLot.themedescs = data.LotThemeCd != null && data.LotThemeCd != '' ? data.LotThemeCd + this.separator + data.ThemeDescs :''
          this.M_TN_LOOLot.classdescs = data.LotClassCd != null && data.LotClassCd != '' ? data.LotClassCd + this.separator + data.ClassDescs :''
          this.M_TN_LOOLot.categorydescs = data.LotCategoryCd != null && data.LotCategoryCd != '' ? data.LotCategoryCd + this.separator + data.CategoryDescs :''

          this.M_TN_LOOLot.grossarea = this.isCurrency(data.GrossArea, this.decimal) +' / '+ this.isCurrency(data.SemiGrossArea, this.decimal) + ' / ' + this.isCurrency(data.NetArea, this.decimal)
        })
      },
        OnlotnoChange (data) {
          // console.log(JSON.stringify(data,null,2))
        this.$nextTick(() => {
            this.M_TN_LOOLot.lotno = data.id
            this.M_TN_LOOLot.lotnoLabel = data.label
  
            if (this.inputStatus != "VIEW") {
              this.getLotNoInfo()
                // this.M_TN_LOOLot.grossarea = this.isCurrency(data.GrossArea, this.decimal) +' / '+ this.isCurrency(data.SemiGrossArea, this.decimal) + ' / ' + this.isCurrency(data.NetArea, this.decimal)
                  if(this.DataRow.AntennaStatus == 'N'){
                    this.PI_rentalqty.cProtect = true
                  }else{
                    this.PI_rentalqty.cProtect = false
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
           
          //  if(this.DataRow.ContractStatusDescs == 'LOO pending'){
          //    this.getToolbar().statusFunction[0].disabled = false
          //    this.getToolbar().statusFunction[1].disabled = false
          //    this.getToolbar().statusFunction[2].disabled = false
          //  }else{
          //    this.getToolbar().statusFunction[0].disabled = true
          //    this.getToolbar().statusFunction[1].disabled = true
          //    this.getToolbar().statusFunction[2].disabled = true
          //  }
           
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
              OptionFunctionCd: "GetRCd",
              ModuleCd: this.Module,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              ApplicationNo: this.DataRow.ApplicationNo
            }

            this.FnDynamicFunction(param)
            .then(ress => {
                if (ress == null) return
                var data = ress[0] 
                this.rcdNow = data.RCD

                this.PI_lotno.dataLookUp.ParamView = "'"+data.RCD+"','"+this.getDataUser().SubPortfolioCd+"','"+this.DataRow.ApplicationNo+"'"
            })
        },
		paramFromParent(){
      
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            this.DataRow = data
            this.GetRCd()
            // console.log(JSON.stringify(data,null,2))
            // console.log(data)
            // if(this.$store.getters.getLevel == this.PageLevel && this.$store.getters.getTab == this.TabIndex){              
                if (
                    (data.StatusCd != 'A' && data.ContractStatus != 1) ||
                    (data.StatusCd != 'N' && data.ContractStatus != 1) ||
                    (data.StatusCd == 'C') ||
                    (data.StatusCd == 'X')
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
            this.M_TN_LOOLot.applicationno = this.DataRow.ApplicationNo 
            this.propList.initialWhere =" ApplicationNo = '" + data.ApplicationNo + "' "
            
            this.FormToABSList().doGetList('','eb_getList')

        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_LOOLot.applicationno,
                LotNo: this.M_TN_LOOLot.lotno == '' || this.M_TN_LOOLot.lotno == null ? 'NULL' : this.M_TN_LOOLot.lotno ,
                RentalQty: this.M_TN_LOOLot.rentalqty,
                RentalRate: this.M_TN_LOOLot.rentalrate,
                Remarks: this.M_TN_LOOLot.remarks,
                UserInput: this.getDataUser().UserId
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
                this.refreshListParent(true)
            })
        },
        M_Update() {
          // console.log(this.M_TN_LOOLot)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_LOOLot.applicationno,
                LotNo: this.M_TN_LOOLot.lotno == '' || this.M_TN_LOOLot.lotno == null ? 'NULL' : this.M_TN_LOOLot.lotno ,
                RentalQty: this.M_TN_LOOLot.rentalqty,
                RentalRate: this.M_TN_LOOLot.rentalrate,
                Remarks: this.M_TN_LOOLot.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_LOOLot.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
                this.refreshListParent(true)
				
            })
        },
		M_ClearForm(){
            this.M_TN_LOOLot = {
                applicationno: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lotno: '',
                grossarea: 0,
                semigrossarea: 0,
                netarea: 0,
                rentalqty: '0',
                rentalrate: 0,
                rentalamt: 0,
                chargearea: '',
                fixcharges: 'N',
                blockcd: '',
                blockdescs: '',
                floorcd: '',
                floordescs: '',
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
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_LOOLot.applicationno = data.ApplicationNo

            // console.log(this.DataRow.RCD)
            // console.log(data.RCD)

            this.M_TN_LOOLot.rcd = this.momentDateFormat(this.DataRow.RCD, 'DD/MM/YYYY')
            this.M_TN_LOOLot.red = this.momentDateFormat(this.DataRow.RED, 'DD/MM/YYYY')
             



        },
        M_Edit(){
        },
        M_Delete(dt){           

          var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                  SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                  ApplicationNo: value.ApplicationNo,
                  LotNo: value.LotNo,
                  LastUpdateStamp: value.LastUpdateStamp,
                  _Message_: "Lot No " + value.LotNo
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
                this.refreshListParent(true)
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
                // console.log(data)
this.M_TN_LOOLot = {
                applicationno: record.ApplicationNo,
                subportfoliocd: data.subportfoliocd,
                lotno: data.lotno,
                grossarea: this.isCurrency(data.grossarea, this.decimal),
                semigrossarea: this.isCurrency(data.semigrossarea, this.decimal),
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
                lastupdatestamp: record.LastUpdateStamp,
                rowid: this.isCurrency(data.rowid, this.decimal)
                    }
                 

                this.M_TN_LOOLot.lotnoLabel = this.M_TN_LOOLot.lotno != null && this.M_TN_LOOLot.lotno != '' ? data.lotno + this.separator + data.lotdescs :'' 
                // this.M_TN_LOOLot.grossarea = this.M_TN_LOOLot.grossarea != null && this.M_TN_LOOLot.grossarea != '' ? data.grossarea + '/' + this.M_TN_LOOLot.semigrossarea != null && this.M_TN_LOOLot.semigrossarea != '' ? data.semigrossarea + '/' + this.M_TN_LOOLot.netarea != null && this.M_TN_LOOLot.netarea != '' ? data.netarea :''
                this.M_TN_LOOLot.grossarea = this.isCurrency(data.grossarea, this.decimal) +' / '+ this.isCurrency(data.semigrossarea, this.decimal) + ' / ' + this.isCurrency(data.netarea, this.decimal)

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,MdtRange_rcd (data) {
            this.M_TN_LOOLot.rcd = data
        }
        ,MdtRange_red (data) {
            this.M_TN_LOOLot.red = data
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

