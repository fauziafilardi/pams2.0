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
                                        <ABSinputTextVuex :prop="PI_applicationno" v-model="M_TN_ShopReopen.applicationno"  ref="ref_applicationno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_name" v-model="M_TN_ShopReopen.name"  ref="ref_name"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_brandname" v-model="M_TN_ShopReopen.brandname"  ref="ref_brandname"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_lotlist" v-model="M_TN_ShopReopen.lotlist"  ref="ref_lotlist"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_marketing" v-model="M_TN_ShopReopen.marketing"  ref="ref_marketing"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_totaloutstanding" v-model="M_TN_ShopReopen.totaloutstanding"  ref="ref_totaloutstanding"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_shopclosereason" v-model="M_TN_ShopReopen.shopclosereason"  ref="ref_shopclosereason"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_newoutstanding" v-model="M_TN_ShopReopen.newoutstanding"  ref="ref_newoutstanding"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnonopendateChange" :prop="PI_onopendate" v-model="M_TN_ShopReopen.onopendate"  ref="ref_onopendate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnonopenreasoncdChange" :prop="PI_onopenreasoncd" :value="M_TN_ShopReopen.reasoncd" :label="M_TN_ShopReopen.reasoncdLabel" ref="ref_reasoncd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_onopenreasondescs" v-model="M_TN_ShopReopen.reasondescs"  ref="ref_reasondescs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_ShopReopen.remarks"  ref="ref_remarks" />
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
                initialWhere: "Status ='Y' and SuspendType='S' and SubportfolioCd='" + this.getDataUser().SubPortfolioCd + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_ShopReopen :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                sequenceno: 0,
                suspendtype: '',
                outstandingamt: 0,
                cutclosereasoncd: '',
                onopentransdate: '',
                onopenreasoncd: '',
                onopenreasondescs: '',
                status: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                cutclosedate: '',
                reasondescs: '',
                reasoncd: '',
                name: '',
                marketingagent: '',
                cutclosereasondescs: '',
                brandname: '',
                lotlist: '',
                remainingamt: 0,
                lastupdatestamp: 0,
                onopendate: this.getToday(),
                rowid: 0,
                marketing: '',
                remainingamt: '0',
                totaloutstanding: '0',
                shopclosereason: '',
                newoutstanding: '0'
                    }
            ,
            PI_applicationno: { 
                cValidate :'', 
                cName: 'applicationno', 
                cLabel: 'Application No', 
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
            PI_name: { 
                cValidate :'', 
                cName: 'name', 
                cLabel: 'Customer Name', 
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
            PI_brandname: { 
                cValidate :'', 
                cName: 'brandname', 
                cLabel: 'Brand Name', 
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
            PI_lotlist: { 
                cValidate :'', 
                cName: 'lotlist', 
                cLabel: 'Lot No', 
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
            PI_marketing: { 
                cValidate :'', 
                cName: 'marketing', 
                cLabel: 'Marketing', 
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
            PI_totaloutstanding: { 
                cValidate :'', 
                cName: 'totaloutstanding', 
                cLabel: 'Total Outstanding', 
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
            PI_shopclosereason: { 
                cValidate :'', 
                cName: 'shopclosereason', 
                cLabel: 'Shop Close Reason', 
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
            PI_newoutstanding: { 
                cValidate :'', 
                cName: 'newoutstanding', 
                cLabel: 'New Outstanding', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_onopendate: { 
                cValidate :'required', 
                cName: 'onopendate', 
                cLabel: 'On Open Date', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_onopenreasoncd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMReason'    , 
                    ColumnDB: 'ReasonCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'reasoncd', 
                cLabel: 'Reason Code', 
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
                cMasterUrl: 'CM/CM_Reason' ,
                cDisplayColumn: 'ReasonCd,Descs' ,
            }, 
            PI_onopenreasondescs: { 
                cValidate :'', 
                cName: 'reasondescs', 
                cLabel: 'Reason Description', 
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
	}
  },
    methods: {		
        OnonopendateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{onopentransdate}
            }
        })
        this.$forceUpdate()
        },
        OnonopenreasoncdChange (data) {
          
        this.$nextTick(() => {
            this.M_TN_ShopReopen.reasoncd = data.id
            this.M_TN_ShopReopen.reasoncdLabel = data.id
            this.M_TN_ShopReopen.reasondescs = data.Descs
            if (this.inputStatus != "VIEW") {
//{onopenreasoncd}
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
           this.getToolbar().statusFunction[0].disabled = true
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
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                
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
                ApplicationNo: this.M_TN_ShopReopen.applicationno,
                SuspendType: 'E',
                NewOutstanding: this.M_TN_ShopReopen.remainingamt,
                OnOpenTransDate: this.M_TN_ShopReopen.onopentransdate == '' || this.M_TN_ShopReopen.onopentransdate == null ? 'NULL' : this.M_TN_ShopReopen.onopentransdate ,
                OnOpenReasonCd: this.M_TN_ShopReopen.reasoncd == '' || this.M_TN_ShopReopen.reasoncd == null ? 'NULL' : this.M_TN_ShopReopen.reasoncd ,
                OnOpenReasonDescs: this.M_TN_ShopReopen.reasondescs,
                OnOpenBy: this.getDataUser().SubPortfolioCd,
                OnOpenDate: this.M_TN_ShopReopen.onopendate,
                Status: 'C',
                Remarks: this.M_TN_ShopReopen.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_ShopReopen.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_ShopReopen = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                sequenceno: 0,
                suspendtype: '',
                outstandingamt: 0,
                cutclosereasoncd: '',
                onopentransdate: '',
                onopenreasoncd: '',
                onopenreasondescs: '',
                status: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                cutclosedate: '',
                reasondescs: '',
                reasoncd: '',
                name: '',
                marketingagent: '',
                cutclosereasondescs: '',
                brandname: '',
                lotlist: '',
                remainingamt: 0,
                lastupdatestamp: 0,
                onopendate: '',
                rowid: 0,
                marketing: '',
                remainingamt: '0',
                onopendate: this.getToday(),
                totaloutstanding: '0',
                shopclosereason: '',
                newoutstanding: '0'
                    }
            		
		},
        M_New(){
          this.$refs.ref_newoutstanding.focus()
        },
        M_Edit(){
          this.$refs.ref_newoutstanding.focus()
        },
        M_Delete(dt){       
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({


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
                applicationno: record.ApplicationNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                // console.log(data)
this.M_TN_ShopReopen = {
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
                sequenceno: data.sequenceno,
                suspendtype: data.suspendtype,
                outstandingamt: this.isCurrency(data.outstandingamt, this.decimal),
                cutclosereasoncd: data.cutclosereasoncd,
                onopentransdate: data.onopentransdate,
                onopenreasoncd: data.onopenreasoncd,
                onopenreasondescs: data.onopenreasondescs,
                status: data.status,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                cutclosedate: data.cutclosedate,
                reasondescs: data.reasondescs,
                reasoncd: data.reasoncd,
                name: data.name,
                marketingagent: data.marketingagent,
                cutclosereasondescs: data.cutclosereasondescs,
                brandname: data.brandname,
                lotlist: data.lotlist,
                remainingamt: this.isCurrency(data.remainingamt, this.decimal),
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid,
                marketing: data.marketing,
                onopendate: data.onopendate,
                totaloutstanding: this.isCurrency(data.outstandingamt, this.decimal),
                shopclosereason: data.cutclosereasondescs,
                newoutstanding: this.isCurrency(data.remainingamt, this.decimal)
                    }
                 

                this.M_TN_ShopReopen.reasoncdLabel = this.M_TN_ShopReopen.reasoncd != null && this.M_TN_ShopReopen.reasoncd != '' ? data.reasoncd :'' 
         

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

