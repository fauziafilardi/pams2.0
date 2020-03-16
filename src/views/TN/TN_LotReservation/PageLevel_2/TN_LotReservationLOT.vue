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
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnlotnoChange" :prop="PI_lotno" :value="M_TN_LotReservationLOT.lotno" :label="M_TN_LotReservationLOT.lotnoLabel" ref="ref_lotno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_grossarea" v-model="grossDescs"  ref="ref_grossarea"/>
                                      </b-col>
                                    </b-row>
                                    <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_semigrossarea" v-model="M_TN_LotReservationLOT.semigrossarea"  ref="ref_semigrossarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_netarea" v-model="M_TN_LotReservationLOT.netarea"  ref="ref_netarea"/>
                                      </b-col>
                                    </b-row> -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_blockcd" v-model="M_TN_LotReservationLOT.blockdescs"  ref="ref_blockcd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_floorcd" v-model="M_TN_LotReservationLOT.floordescs"  ref="ref_floorcd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_lotthemecd" v-model="M_TN_LotReservationLOT.themedescs"  ref="ref_lotthemecd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_lotclasscd" v-model="M_TN_LotReservationLOT.classdescs"  ref="ref_lotclasscd" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_category" v-model="M_TN_LotReservationLOT.categorydescs"  ref="ref_category" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_LotReservationLOT.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
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
                initialWhere:"SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ApplicationNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},

            M_TN_LotReservationLOT :{
                applicationno: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lotno: '',
                grossarea: 0,
                semigrossarea: 0,
                netarea: 0,
                rentalqty: 0,
                rentalrate: 0,
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
                grossseminetarea: ''
                    }
            ,
            PI_lotno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLOOLotNo'    , 
                    ColumnDB: 'LotNo'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  ,
                    SourceField: "LotNo,Descs,FixCharges,Antenna,GrossArea,SemiGrossArea,NetArea",
                    DisplayLookUp:'LotNo,Descs'
                        }, 
                cValidate :'', 
                cName: 'lotno', 
                cLabel: 'Lot No', 
                cKey: true, 
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
            PI_grossarea: { 
                cValidate :'required|max:13', 
                cName: 'grossarea', 
                cLabel: 'Gross / Semi Gross / Net Area', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_semigrossarea: { 
                cValidate :'required|max:13', 
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
                cValidate :'required|max:13', 
                cName: 'netarea', 
                cLabel: 'Net Area', 
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
            PI_category: { 
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
                cOrder:2, 
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
    grossDescs(){
        return this.isCurrency(this.M_TN_LotReservationLOT.grossarea) + ' / ' + this.isCurrency(this.M_TN_LotReservationLOT.semigrossarea) + ' / ' + this.isCurrency(this.M_TN_LotReservationLOT.netarea)
    }
  },
    methods: {
        OnlotnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotReservationLOT.lotno = data.id
            this.M_TN_LotReservationLOT.lotnoLabel = data.label
            if (this.inputStatus != "VIEW") {
                var param = {
                    OptionFunctionCd: "GetLotInfo",
                    ModuleCd: this.Module,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    LotNo: data.id,
                    RCD: this.M_TN_LotReservationLOT.rcd
                }

                this.FnDynamicFunction(param)
                .then(ress => {
                    if (ress == null) return
                    if (ress.length < 1) return
                    var data = ress[0]
                    
                    this.M_TN_LotReservationLOT.grossarea = (data.GrossArea ? data.GrossArea : '')
                    this.M_TN_LotReservationLOT.semigrossarea = (data.SemiGrossArea ? data.SemiGrossArea : '')
                    this.M_TN_LotReservationLOT.netarea = (data.NetArea ? data.NetArea : '')
                    this.M_TN_LotReservationLOT.blockcd = (data.BlockCd ? data.BlockCd : '')
                    this.M_TN_LotReservationLOT.blockdescs = (data.BlockCd ? data.BlockCd : '') + ' - ' + (data.BlockName ? data.BlockName : '')
                    this.M_TN_LotReservationLOT.floorcd = (data.FloorCd ? data.FloorCd : '')
                    this.M_TN_LotReservationLOT.floordescs = (data.FloorCd ? data.FloorCd : '') + ' - ' + (data.FloorName ? data.FloorName : '')
                    this.M_TN_LotReservationLOT.lotthemecd = (data.LotThemeCd ? data.LotThemeCd : '')
                    this.M_TN_LotReservationLOT.themedescs = (data.LotThemeCd ? data.LotThemeCd : '') + ' - ' + (data.ThemeDescs ? data.ThemeDescs : '')
                    this.M_TN_LotReservationLOT.lotclasscd = (data.LotClassCd ? data.LotClassCd : '')
                    this.M_TN_LotReservationLOT.classdescs = (data.LotClassCd ? data.LotClassCd : '') + ' - ' + (data.ClassDescs ? data.ClassDescs : '')
                    this.M_TN_LotReservationLOT.lotcategorycd = (data.CategoryDescs ? data.CategoryDescs : '')
                    this.M_TN_LotReservationLOT.categorydescs = (data.LotCategoryCd ? data.LotCategoryCd : '') + ' - ' + (data.CategoryDescs ? data.CategoryDescs : '')
                })
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
                    this.GetRCd(false, ress[0].FixCharges)
                }
                else if (ress.length > 0) {
                    this.GetRCd(true,'')
                }
                else {
                    this.GetRCd(false, ress[0].FixCharges)
                }
            })
        },
        GetRCd(bAll = true, FixCharges = ''){
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
                this.M_TN_LotReservationLOT.rcd = this.momentDate(data.RCD)

                this.PI_lotno.dataLookUp.ParamView = "'"+this.momentDate(data.RCD)+"','"+this.getDataUser().SubPortfolioCd+"','"+this.DataRowPage1.ApplicationNo+"'"

                if (bAll == false) {
                    this.PI_lotno.dataLookUp.InitialWhere = "FixCharges = (SELECT top 1 tl.FixCharges FROM TN_ContractLot tcl INNER JOIN TN_Lot tl ON tl.LotNo = tcl.LotNo AND tl.SubPortfolioCd = tcl.SubPortfolioCd Where applicationno = '" +this.DataRowPage1.ApplicationNo+ "' and tcl.SubPortfolioCd = '" +this.getDataUser().SubPortfolioCd+ "') And Antenna = (SELECT top 1 tl.Antenna FROM TN_ContractLot tcl INNER JOIN TN_Lot tl ON tl.LotNo = tcl.LotNo AND tl.SubPortfolioCd = tcl.SubPortfolioCd Where applicationno = '" +this.DataRowPage1.ApplicationNo+ "' and tcl.SubPortfolioCd = '" +this.getDataUser().SubPortfolioCd+ "')"
                }
                else {}
            })
        },
		paramFromParent(){
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            this.M_TN_LotReservationLOT.applicationno = data.ApplicationNo 
            this.GetRCd()
            // console.log(data)
            // if(this.$store.getters.getLevel == this.PageLevel && this.$store.getters.getTab == this.TabIndex){              
                if (
                    (data.StatusCd == 'A' && data.ContractStatus.toString() == '5')
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
            this.propList.initialWhere =" ApplicationNo = '" + data.ApplicationNo + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_LotReservationLOT.applicationno,
                LotNo: this.M_TN_LotReservationLOT.lotno == '' || this.M_TN_LotReservationLOT.lotno == null ? 'NULL' : this.M_TN_LotReservationLOT.lotno ,
                RentalQty: this.M_TN_LotReservationLOT.rentalqty,
                RentalRate: this.M_TN_LotReservationLOT.rentalrate,
                Remarks: this.M_TN_LotReservationLOT.remarks,
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
                ApplicationNo: this.M_TN_LotReservationLOT.applicationno,
                LotNo: this.M_TN_LotReservationLOT.lotno == '' || this.M_TN_LotReservationLOT.lotno == null ? 'NULL' : this.M_TN_LotReservationLOT.lotno ,
                RentalQty: this.M_TN_LotReservationLOT.rentalqty,
                RentalRate: this.M_TN_LotReservationLOT.rentalrate,
                Remarks: this.M_TN_LotReservationLOT.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_LotReservationLOT.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_LotReservationLOT = {
                applicationno: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lotno: '',
                grossarea: 0,
                semigrossarea: 0,
                netarea: 0,
                rentalqty: 0,
                rentalrate: 0,
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
                grossseminetarea: ''
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_LotReservationLOT.applicationno = data.ApplicationNo
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
this.M_TN_LotReservationLOT = {
                applicationno: record.ApplicationNo,
                subportfoliocd: data.subportfoliocd,
                lotno: data.lotno,
                grossarea: this.isCurrency(data.grossarea, this.decimal),
                semigrossarea: this.isCurrency(data.semigrossarea, this.decimal),
                netarea: this.isCurrency(data.netarea, this.decimal),
                rentalqty: this.isCurrency(data.rentalqty, this.decimal),
                rentalrate: this.isCurrency(data.rentalrate, this.decimal),
                rentalamt: this.isCurrency(data.rentalamt, this.decimal),
                chargearea: data.chargearea,
                fixcharges: data.fixcharges,
                blockcd: data.blockcd + '-' + data.blockdescs,
                blockdescs: data.blockdescs,
                floorcd: data.floorcd + '-' + data.floordescs,
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
                rowid: data.rowid,
                grossseminetarea: data.grossseminetarea
                    }
                 

                this.M_TN_LotReservationLOT.lotnoLabel = this.M_TN_LotReservationLOT.lotno != null && this.M_TN_LotReservationLOT.lotno != '' ? data.lotno + this.separator + data.lotdescs :'' 
  

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

