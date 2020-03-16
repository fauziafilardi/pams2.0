<template>
    <div>        
    <ABSListEdit
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
      isCheckAsStatus="Checked=true"
      statusFalse="false"
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
                                    <!-- <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_taxsettlementno" v-model="M_AR_TaxSettlementVATH.taxsettlementno"  ref="ref_taxsettlementno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OntaxsettlementdateChange" :prop="PI_taxsettlementdate" v-model="M_AR_TaxSettlementVATH.taxsettlementdate"  ref="ref_taxsettlementdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_yearsettlement" v-model="M_AR_TaxSettlementVATH.yearsettlement"  ref="ref_yearsettlement"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelect2 @change="OnmonthsettlementChange" :prop="PI_monthsettlement" :value="M_AR_TaxSettlementVATH.monthsettlement" :label="M_AR_TaxSettlementVATH.monthsettlementLabel" ref="ref_monthsettlement"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_AR_TaxSettlementVATH.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row> -->
                                </b-col> <!-- table close -->
                  
							</b-row>
							<!-- <ABSTAnalysis :prop="PTAnalysis" /> -->
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
        FormType: "ListEdit",
		Module:"AR",
            propList: {
                initialWhere: "",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: 'DebitNo asc', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_AR_TaxSettlementVATD :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                taxsettlementno: '',
                // taxsettlementdate: '',
                // taxsettlementtype: '',
                // status: '',
                // yearsettlement: '',
                // monthsettlement: '2',
                // remarks: '',
                // userinput: '',
                // useredit: this.getDataUser().UserId,
                // timeinput: '',
                // timeedit: '',
                // lastupdatestamp: 0,
                // t0: '',
                // t1: '',
                // t2: '',
                // t3: '',
                // t4: '',
                // t5: '',
                // t6: '',
                // t7: '',
                // t8: '',
                // t9: '',
                // t10: '',
                // t11: '',
                // t12: '',
                // t13: '',
                // t14: '',
                // t15: '',
                // t16: '',
                // t17: '',
                // t18: '',
                // t19: '',
                // t20: '',
                // t21: '',
                // t22: '',
                // t23: '',
                // t24: '',
                // t25: '',
                // t26: '',
                // t27: '',
                // t28: '',
                // t29: '',
                // t30: '',
                // controlsequenceno: 0,
                // rowid: 0
                    }
            ,
            // PI_taxsettlementno: { 
            //     cValidate :'required|max:30', 
            //     cName: 'taxsettlementno', 
            //     cLabel: 'Tax Settlement No', 
            //     cLabelSize: 4, 
            //     cOrder: 5, 
            //     cKey: true, 
            //     cType: 'text',
            //     cVisible: true, 
            //     cProtect: false, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            // }, 
            // PI_taxsettlementdate: { 
            //     cValidate :'required', 
            //     cName: 'taxsettlementdate', 
            //     cLabel: 'Date', 
            //     cLabelSize: 4, 
            //     cOrder: 6, 
            //     cKey: false, 
            //     cVisible:  true, 
            //     cProtect: false, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            // }, 
            // PI_yearsettlement: { 
            //     cValidate :'required|max:4', 
            //     cName: 'yearsettlement', 
            //     cLabel: 'Year Settlement', 
            //     cLabelSize: 4, 
            //     cOrder: 1, 
            //     cKey: false, 
            //     cType: 'text',
            //     cVisible: true, 
            //     cProtect: false, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            // }, 
            // PI_monthsettlement: { 
            //     dataLookUp: null, 
            //     cValidate :'required', 
            //     cName: 'monthsettlement', 
            //     cLabel: 'Month Settlement ', 
            //     cLabelSize: 4, 
            //     cOrder: 0, 
            //     cKey: false, 
            //     cTriggered: false, 
            //     cDefault: '2', 
            //     cProtect: false, 
            //     cVisible:  true, 
            //     cAsync:  false, 
            //     cFilter: true, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
            //     cStatic: true, 
            //     cOption: [{ label: '1', id: '1' },{ label: '2', id: '2' },{ label: '3', id: '3' },{ label: '4', id: '4' },{ label: '5', id: '5' },{ label: '6', id: '6' },{ label: '7', id: '7' },{ label: '8', id: '8' },{ label: '9', id: '9' },{ label: '10', id: '10'},{label: '11', id: '11'},{label: '12', id: '12'}], 
            //     cMasterUrl: '' ,
            //     cDisplayColumn: '' ,
            // }, 
            // PI_remarks: { 
            //     cValidate :'', 
            //     cName:'remarks', 
            //     cLabel:'Remarks', 
            //     cLabelSize: 4, 
            //     cOrder:25, 
            //     cKey: false, 
            //     cDefault: '', 
            //     cProtect: false, 
            //     cVisible: true, 
            //     cResize: false, 
            //     cReadOnly: false, 
            //     cRows: 3, 
            //     cMaxRows: 3, 
            //     cSize: 'md', 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
            // }, 

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
        OntaxsettlementdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{taxsettlementdate}
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
            this.$store.commit('setStatus', 'new')
           //this.getToolbar().statusFunction[4].disabled = false
            // this.getToolbar().isNew = true
            // this.getToolbar().statusFunction[6].disabled = true
            if (this.getToolbar().FormStatus !== 'NEW') {
                this.getToolbar().FormStatus = 'NEW'
                this.getToolbar().ProcessPS()
            }
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
            this.M_AR_TaxSettlementVATD.taxsettlementno = data.TaxSettlementNo
            this.propList.ParamView = "'" + this.getDataUser().SubPortfolioCd + "', '" + data.TaxSettlementNo + "', 'V'"
            this.propList.OrderBy = "DebitNo ASC"

            this.FormToABSList().doGetList('','eb_getList')
        },		
        M_Post(dt){
        },
        M_Insert() {
            
            var data = this.$parent.FormToABSList2().getAllItem()
            // console.log(data)
            var dataPost = []

            let dataList = this.$store.getters.GetPage1Data

            for (let i = 0 ; i < data.length ; i ++) {
                dataPost.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    TaxSettlementNo: dataList.TaxSettlementNo,
                    DebitNo: data[i].DebitNo,
                    UserInput: this.getDataUser().UserId,
                    Checked: data[i].Checked == true ? 1 : 0
                })
            }

            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataPost
            }

            this.postJSONMulti(this.getUrlInsertMulti(), param)
            .then((response) => {
                // console.log(response)
                if(response == null) return
                var msg = "Data Has Been Save Successfully"
                // this.$parent.resultUpdate(response.Data[0].Message)
                this.$parent.resultUpdate(msg)
            })
            
            // var param = {			
            //     OptionSeq: this.getOptionSeq().OptionSeq,
            //     LineNo: this.$parent.data.PageOrder,
            //     SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            //     TaxSettlementNo: this.M_AR_TaxSettlementVATH.taxsettlementno,
            //     TaxSettlementDate: this.M_AR_TaxSettlementVATH.taxsettlementdate == '' || this.M_AR_TaxSettlementVATH.taxsettlementdate == null ? 'NULL' : this.M_AR_TaxSettlementVATH.taxsettlementdate ,
            //     TaxSettlementType: this.M_AR_TaxSettlementVATH.taxsettlementtype,
            //     Status: this.M_AR_TaxSettlementVATH.status,
            //     YearSettlement: this.M_AR_TaxSettlementVATH.yearsettlement,
            //     MonthSettlement: this.M_AR_TaxSettlementVATH.monthsettlement,
            //     Remarks: this.M_AR_TaxSettlementVATH.remarks,
            //     UserInput: this.getDataUser().UserId                 
            // }

            // this.postJSON(this.getUrlInsert(), param)
            // .then((response) => {
            //     if(response == null) return

			// 	//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
            //     this.$parent.resultInsert(response.Message)
					
				
            // })

        },
        M_Update() {
            this.M_Insert()
            // var param = {
            //     OptionSeq: this.getOptionSeq().OptionSeq,
            //     LineNo: 1,
            //     SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            //     TaxSettlementNo: this.M_AR_TaxSettlementVATD.taxsettlementno,
            //     DebitNo: this.M_AR_TaxSettlementVATD.DebitNo == '',
            //     UserInput: this.getDataUser().UserId,
            //     Checked: this.M_AR_TaxSettlementVATD.Checked
            // }

            // this.postJSON(this.getUrlUpdate(), param)
            // .then((response) => {
            //     if(response == null) return

            //     //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
            //     this.$parent.resultUpdate(response.Message)
				
            // })

        },
		M_ClearForm(){
            this.M_AR_TaxSettlementVATH = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                taxsettlementno: '',
                taxsettlementdate: '',
                taxsettlementtype: '',
                status: '',
                yearsettlement: '',
                monthsettlement: '2',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                t0: '',
                t1: '',
                t2: '',
                t3: '',
                t4: '',
                t5: '',
                t6: '',
                t7: '',
                t8: '',
                t9: '',
                t10: '',
                t11: '',
                t12: '',
                t13: '',
                t14: '',
                t15: '',
                t16: '',
                t17: '',
                t18: '',
                t19: '',
                t20: '',
                t21: '',
                t22: '',
                t23: '',
                t24: '',
                t25: '',
                t26: '',
                t27: '',
                t28: '',
                t29: '',
                t30: '',
                controlsequenceno: 0,
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
//             var param = {
//                 OptionSeq: this.getOptionSeq().OptionSeq,
//                 LineNo: this.$parent.data.PageOrder
// ,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
//                 taxsettlementno: record.TaxSettlementNo
//             }

//             this.postEncode( this.getUrlById(), param )
//             .then(response => {
//                 // response from API
//                 if(response == null) return
                
//                 var data = response.Data[0]
// this.M_AR_TaxSettlementVATH = {
//                 subportfoliocd: data.subportfoliocd,
//                 taxsettlementno: data.taxsettlementno,
//                 taxsettlementdate: data.taxsettlementdate,
//                 taxsettlementtype: data.taxsettlementtype,
//                 status: data.status,
//                 yearsettlement: data.yearsettlement,
//                 monthsettlement: data.monthsettlement,
//                 remarks: data.remarks,
//                 userinput: data.userinput,
//                 useredit: data.useredit,
//                 timeinput: data.timeinput,
//                 timeedit: data.timeedit,
//                 lastupdatestamp: record.LastUpdateStamp,
//                 t0: data.t0,
//                 t1: data.t1,
//                 t2: data.t2,
//                 t3: data.t3,
//                 t4: data.t4,
//                 t5: data.t5,
//                 t6: data.t6,
//                 t7: data.t7,
//                 t8: data.t8,
//                 t9: data.t9,
//                 t10: data.t10,
//                 t11: data.t11,
//                 t12: data.t12,
//                 t13: data.t13,
//                 t14: data.t14,
//                 t15: data.t15,
//                 t16: data.t16,
//                 t17: data.t17,
//                 t18: data.t18,
//                 t19: data.t19,
//                 t20: data.t20,
//                 t21: data.t21,
//                 t22: data.t22,
//                 t23: data.t23,
//                 t24: data.t24,
//                 t25: data.t25,
//                 t26: data.t26,
//                 t27: data.t27,
//                 t28: data.t28,
//                 t29: data.t29,
//                 t30: data.t30,
//                 controlsequenceno: data.controlsequenceno,
//                 rowid: data.rowid
//                     }
                 

         

//                 this.IEBy.Input = data.userinput
//                 this.IEBy.Edit = data.useredit

            // })
        }

    },
    beforeCreate: function () {
    },
    created: function() {
	// this.$store.commit('setFormType','ListProcess')
        this.getToolbar().ProcessPS()
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
        // this.FormToABSList().doGetList('','eb_getList')
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

