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
                                        <ABSinputTextVuex :prop="PI_customercategorycd" v-model="M_TN_CustomerCategory.customercategorycd"  ref="ref_customercategorycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputCheckBox @input="OncategoryusageChange" :prop="PI_categoryusage" v-model="M_TN_CustomerCategory.categoryusage"  ref="ref_categoryusage" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnchargeperiodChange" :prop="PI_chargeperiod" v-model="M_TN_CustomerCategory.chargeperiod"  ref="ref_chargeperiod" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_CustomerCategory.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_CustomerCategory.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OngroupcategoryChange" :prop="PI_groupcategory" :value="M_TN_CustomerCategory.groupcategory" :label="M_TN_CustomerCategory.groupcategoryLabel" ref="ref_groupcategory"/>
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
		cInsertKey:'id=CustomerCategoryCd, label=CustomerCategoryCd+|+Descs',
		FormType: "List",
		Module:"TN",
            propList: {
                initialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_CustomerCategory :{
                customercategorycd: '',
                leasingstatus: '',
                clstatus: '',
                chargeperiod: 'M',
                descs: '',
                remarks: '',
                groupcategory: '',
                descsgroupcategory: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0,
                categorystatus: '',
                categoryusage: ['L','C']
                    }
            ,
            PI_customercategorycd: { 
                cValidate :'required|max:8', 
                cName: 'customercategorycd', 
                cLabel: 'Customer Category', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_categoryusage: { 
                cValidate :'', 
                cName: 'categoryusage', 
                cLabel: 'Category Usage', 
                cLabelSize: 4, 
                cOptions: [{ text: 'Leasing', value: 'L' }, { text: 'Casual Leasing', value: 'C' }], 
                cOrder: 2, 
                cKey: false, 
                cVisible: true, 
                cProtect: false, 
                cDefault: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_chargeperiod: { 
                cValidate :'', 
                cName: 'chargeperiod', 
                cId: 'rdbchargeperiod', 
                cRadioOptions: [{ text: 'Monthly', value: 'M' },{ text: 'Daily', value: 'D' },], 
                cRadioDefaultOption: '', 
                cLabel:'Charge Period', 
                cLabelSize: 4, 
                cOrder: 3, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs: { 
                cValidate :'required|max:60', 
                cName: 'descs', 
                cLabel: 'Descs', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'text',
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
            PI_groupcategory: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGroupCategory'    , 
                    ColumnDB: 'GroupCategoryCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'groupcategory', 
                cLabel: 'Group Category', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 6, 
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
                cMasterUrl: 'TN/TN_GroupCategory' ,
                cDisplayColumn: 'GroupCategoryCd,Descs' ,
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
        OncategoryusageChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{categoryusage}
            }
        })
        this.$forceUpdate()
        },
        OnchargeperiodChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{clstatus}
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
        OngroupcategoryChange (data) {
        this.$nextTick(() => {
            this.M_TN_CustomerCategory.groupcategory = data.id
            this.M_TN_CustomerCategory.groupcategoryLabel = data.label
            if (this.inputStatus != "VIEW") {
//{groupcategory}
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
        },		
        M_Post(dt){
        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                CustomerCategoryCd: this.M_TN_CustomerCategory.customercategorycd,
                LeasingStatus: this.M_TN_CustomerCategory.categoryusage.indexOf('L') >= 0 ? 'Y' : 'N',
                CLStatus: this.M_TN_CustomerCategory.categoryusage.indexOf('C') >= 0 ? 'Y' : 'N',
                Charge: this.M_TN_CustomerCategory.chargeperiod,
                Descs: this.M_TN_CustomerCategory.descs,
                GroupCategory: this.M_TN_CustomerCategory.groupcategory == '' || this.M_TN_CustomerCategory.groupcategory == null ? 'NULL' : this.M_TN_CustomerCategory.groupcategory ,
                Remarks: this.M_TN_CustomerCategory.remarks,
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
                CustomerCategoryCd: this.M_TN_CustomerCategory.customercategorycd,
                LeasingStatus: this.M_TN_CustomerCategory.categoryusage.indexOf('L') >= 0 ? 'Y' : 'N',
                CLStatus: this.M_TN_CustomerCategory.categoryusage.indexOf('C') >= 0 ? 'Y' : 'N',
                Charge: this.M_TN_CustomerCategory.chargeperiod,
                Descs: this.M_TN_CustomerCategory.descs,
                Remarks: this.M_TN_CustomerCategory.remarks,
                GroupCategory: this.M_TN_CustomerCategory.groupcategory == '' || this.M_TN_CustomerCategory.groupcategory == null ? 'NULL' : this.M_TN_CustomerCategory.groupcategory ,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_CustomerCategory.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_CustomerCategory = {
                customercategorycd: '',
                leasingstatus: '',
                clstatus: '',
                chargeperiod: 'M',
                descs: '',
                remarks: '',
                groupcategory: '',
                descsgroupcategory: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lastupdatestamp: 0,
                rowid: 0,
                categorystatus: '',
                categoryusage: ['L']
                    }
            		
		},
        M_New(){
            this.$refs.ref_customercategorycd.focus()
			
        },
        M_Edit(){
            this.$refs.ref_customercategorycd.focus()
        },
        M_Delete(dt){       

        var data = this.FormToABSList().getRowSelected()  
        var dataDelete = []

        
        data.forEach((value) => {
          dataDelete.push({
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          CustomerCategoryCd: value.CustomerCategoryCd,
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
                customercategorycd: record.CustomerCategoryCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                var categoryusg = []
                // var paymentctrl = ''
                if (data.leasingstatus == 'Y'){
                    // paymentctrl = 'L'
                    categoryusg.push('L')
                } 
                if (data.clstatus == 'Y'){
                    // paymentctrl = 'A'
                    categoryusg.push('C')
                }
this.M_TN_CustomerCategory = {
                customercategorycd: data.customercategorycd,
                leasingstatus: data.leasingstatus,
                clstatus: data.clstatus,
                chargeperiod: data.chargeperiod,
                descs: data.descs,
                remarks: data.remarks,
                groupcategory: data.groupcategory,
                descsgroupcategory: data.descsgroupcategory,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                subportfoliocd: data.subportfoliocd,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: this.isCurrency(data.rowid, this.decimal),
                categorystatus: data.categorystatus,
                categoryusage: categoryusg
                    }
                 

                this.M_TN_CustomerCategory.groupcategoryLabel = this.M_TN_CustomerCategory.groupcategory != null && this.M_TN_CustomerCategory.groupcategory != '' ? data.groupcategory + this.separator + data.descsgroupcategory :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

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
        this.FormToABSList().doGetList('','eb_getList')

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

