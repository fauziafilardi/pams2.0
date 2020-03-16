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
                                        <ABSinputTextVuex :prop="PI_brandcd" v-model="M_TN_BrandMaster.brandcd"  ref="ref_brandcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_brandname" v-model="M_TN_BrandMaster.brandname"  ref="ref_brandname"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputCheckBox @input="OnbrandusageChange" :prop="PI_brandusage" v-model="M_TN_BrandMaster.brandusage"  ref="ref_brandusage" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnthemecdChange" :prop="PI_themecd" :value="M_TN_BrandMaster.themecd" :label="M_TN_BrandMaster.themecdLabel" ref="ref_themecd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnclasscdChange" :prop="PI_classcd" :value="M_TN_BrandMaster.classcd" :label="M_TN_BrandMaster.classcdLabel" ref="ref_classcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncategorycdChange" :prop="PI_categorycd" :value="M_TN_BrandMaster.categorycd" :label="M_TN_BrandMaster.categorycdLabel" ref="ref_categorycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnbrandcategoryChange" :prop="PI_brandcategory" v-model="M_TN_BrandMaster.brandcategory"  ref="ref_brandcategory" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnbrandowneridChange" :prop="PI_brandownerid" :value="M_TN_BrandMaster.brandownerid" :label="M_TN_BrandMaster.brandowneridLabel" ref="ref_brandownerid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_BrandMaster.remarks"  ref="ref_remarks" />
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
                initialWhere: "",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_BrandMaster :{
                brandcd: '',
                brandname: '',
                leasingstatus: 'Y',
                clstatus: 'Y',
                themecd: '',
                classsequenceno: 0,
                categorysequenceno: 0,
                brandcategory: 'N',
                brandownerid: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                themedescs: '',
                categorydescs: '',
                classdescs: '',
                name: '',
                categorycd: '',
                classcd: '',
                brandusage: '',
                lastupdatestamp: 0,
                rowid: 0,
                brandusage: ['L','C']
                    }
            ,
            PI_brandcd: { 
                cValidate :'required|max:8', 
                cName: 'brandcd', 
                cLabel: 'Brand Code ', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_brandname: { 
                cValidate :'required|max:60', 
                cName: 'brandname', 
                cLabel: 'Brand Name ', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_brandusage: { 
                cValidate :'', 
                cName: 'brandusage', 
                cLabel: 'Brand Usage', 
                cLabelSize: 4, 
                cOptions: [{ text: 'Leasing', value: 'L' }, { text: 'Casual Leasing', value: 'C' }], 
                cOrder: 3, 
                cKey: false, 
                cVisible: true, 
                cProtect: false, 
                cDefault: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_themecd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLotTheme'    , 
                    ColumnDB: 'LotThemeCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'themecd', 
                cLabel: 'Theme ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 4, 
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
                cDisplayColumn: 'Lot_Theme_Cd,Descs' ,
            }, 
            PI_classcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLotClass'    , 
                    ColumnDB: 'LotClassCd'   , 
                    InitialWhere: "LotThemeCd=''"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'classcd', 
                cLabel: 'Class ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 5, 
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
                cDisplayColumn: 'Lot_Class_Cd,Descs' ,
            }, 
            PI_categorycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLotCategory'    , 
                    ColumnDB: 'LotCategoryCd'   , 
                    InitialWhere: "LotClassSequenceNo='0'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'categorycd', 
                cLabel: 'Category ', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'Lot_Category_Cd,Descs' ,
            }, 
            PI_brandcategory: { 
                cValidate :'', 
                cName: 'brandcategory', 
                cId: 'rdbbrandcategory', 
                cRadioOptions: [{ text: 'National', value: 'N' },{ text: 'International', value: 'I' },{ text: 'Local', value: 'L' },], 
                cRadioDefaultOption: 'N', 
                cLabel:'Brand Category', 
                cLabelSize: 4, 
                cOrder: 7, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_brandownerid: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMContact'    , 
                    ColumnDB: 'ContactId'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'brandownerid', 
                cLabel: 'Brand Owner', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 8, 
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
                cDisplayColumn: 'ContactId,Name' ,
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:9, 
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
        OnbrandusageChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
              if(data.length==0){
                this.M_TN_BrandMaster.leasingstatus = 'N'
                this.M_TN_BrandMaster.clstatus = 'N'
              }else{
                // console.log(data.includes('B'))
                if(data.includes('L')){
                  this.M_TN_BrandMaster.leasingstatus = 'Y'
                }else{
                  this.M_TN_BrandMaster.leasingstatus = 'N'
                }
                if(data.includes('C')){
                  this.M_TN_BrandMaster.clstatus = 'Y'
                }else{
                  this.M_TN_BrandMaster.clstatus = 'N'
                }
              }
            }
        })
        this.$forceUpdate()
        },
        OnthemecdChange (data) {
        this.$nextTick(() => {
            this.M_TN_BrandMaster.themecd = data.id
            this.M_TN_BrandMaster.themecdLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.setColumnClassWhere()
//{themecd}
            }
        })
        this.$forceUpdate()
        },
        OnclasscdChange (data) {
        this.$nextTick(() => {
            this.M_TN_BrandMaster.classcd = data.id
            this.M_TN_BrandMaster.classcdLabel = data.label
            this.M_TN_BrandMaster.classsequenceno = data.LotClassSequenceNo
            if (this.inputStatus != "VIEW") {
            this.setColumnCategoryWhere()
            }
        })
        this.$forceUpdate()
        },
        OncategorycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_BrandMaster.categorycd = data.id
            this.M_TN_BrandMaster.categorycdLabel = data.label
            this.M_TN_BrandMaster.categorysequenceno = data.LotCategorySequenceNo
            if (this.inputStatus != "VIEW") {
//{categorycd}
            }
        })
        this.$forceUpdate()
        },
        OnbrandcategoryChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{brandcategory}
            }
        })
        this.$forceUpdate()
        },
        OnbrandowneridChange (data) {
        this.$nextTick(() => {
            this.M_TN_BrandMaster.brandownerid = data.id
            this.M_TN_BrandMaster.brandowneridLabel = data.label
            if (this.inputStatus != "VIEW") {
//{brandownerid}
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
           this.getToolbar().isByPassCancel = false
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
                BrandCd: this.M_TN_BrandMaster.brandcd,
                BrandName: this.M_TN_BrandMaster.brandname,
                LeasingStatus: this.M_TN_BrandMaster.brandusage.indexOf('L') >= 0 ? 'Y' : 'N',
                CLStatus: this.M_TN_BrandMaster.brandusage.indexOf('C') >= 0 ? 'Y' : 'N',
                ThemeCd: this.M_TN_BrandMaster.themecd == '' || this.M_TN_BrandMaster.themecd == null ? 'NULL' : this.M_TN_BrandMaster.themecd,
                ClassCd: this.M_TN_BrandMaster.classcd == '' || this.M_TN_BrandMaster.classcd == null ? 'NULL' : this.M_TN_BrandMaster.classcd,
                CategoryCd: this.M_TN_BrandMaster.categorycd == '' || this.M_TN_BrandMaster.categorycd == null ? 'NULL' : this.M_TN_BrandMaster.categorycd,
                BrandOwner: this.M_TN_BrandMaster.brandownerid == '' || this.M_TN_BrandMaster.brandownerid == null ? 'NULL' : this.M_TN_BrandMaster.brandownerid,
                ClassSequenceNo: this.M_TN_BrandMaster.classsequenceno,
                CategorySequenceNo: this.M_TN_BrandMaster.categorysequenceno,
                BrandCategory: this.M_TN_BrandMaster.brandcategory,
                Remarks: this.M_TN_BrandMaster.remarks,
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
            console.log(this.M_TN_BrandMaster)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                BrandCd: this.M_TN_BrandMaster.brandcd,
                BrandName: this.M_TN_BrandMaster.brandname,
                LeasingStatus: this.M_TN_BrandMaster.brandusage.indexOf('L') >= 0 ? 'Y' : 'N',
                CLStatus: this.M_TN_BrandMaster.brandusage.indexOf('C') >= 0 ? 'Y' : 'N',
                ThemeCd: this.M_TN_BrandMaster.themecd == '' || this.M_TN_BrandMaster.themecd == null ? 'NULL' : this.M_TN_BrandMaster.themecd ,
                ClassCd: this.M_TN_BrandMaster.classcd == '' || this.M_TN_BrandMaster.classcd == null ? 'NULL' : this.M_TN_BrandMaster.classcd,
                CategoryCd: this.M_TN_BrandMaster.categorycd == '' || this.M_TN_BrandMaster.categorycd == null ? 'NULL' : this.M_TN_BrandMaster.categorycd,
                BrandOwner: this.M_TN_BrandMaster.brandownerid == '' || this.M_TN_BrandMaster.brandownerid == null ? 'NULL' : this.M_TN_BrandMaster.brandownerid,
                ClassSequenceNo: this.M_TN_BrandMaster.classsequenceno,
                CategorySequenceNo: this.M_TN_BrandMaster.categorysequenceno,
                BrandCategory: this.M_TN_BrandMaster.brandcategory,
                Remarks: this.M_TN_BrandMaster.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_BrandMaster.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_BrandMaster = {
                brandcd: '',
                brandname: '',
                leasingstatus: 'Y',
                clstatus: 'Y',
                themecd: '',
                classsequenceno: 0,
                categorysequenceno: 0,
                brandcategory: 'N',
                brandownerid: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                themedescs: '',
                categorydescs: '',
                classdescs: '',
                name: '',
                categorycd: '',
                classcd: '',
                brandusage: '',
                lastupdatestamp: 0,
                rowid: 0,
                brandusage: ['L','C']
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){       
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({
                    BrandCd: value.BrandCd,
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
,                brandcd: record.BrandCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                var brandusage = []
                // var paymentctrl = ''
                if (data.leasingstatus == 'Y'){
                    // paymentctrl = 'L'
                    brandusage.push('L')
                } 
                if (data.clstatus == 'Y'){
                    // paymentctrl = 'A'
                    brandusage.push('C')
                }
                console.log(data)
this.M_TN_BrandMaster = {
    
                brandcd: data.brandcd,
                brandname: data.brandname,
                leasingstatus: data.leasingstatus,
                clstatus: data.clstatus,
                themecd: data.themecd,
                classsequenceno: data.classsequenceno,
                categorysequenceno: data.categorysequenceno,
                brandcategory: data.brandcategory,
                brandownerid: data.brandownerid,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                themedescs: data.themedescs,
                categorydescs: data.categorydescs,
                classdescs: data.classdescs,
                name: data.name,
                categorycd: data.categorycd,
                classcd: data.classcd,
                brandusage: brandusage,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: this.isCurrency(data.rowid, this.decimal)
                    }
                 

                this.M_TN_BrandMaster.themecdLabel = this.M_TN_BrandMaster.themecd != null && this.M_TN_BrandMaster.themecd != '' ? data.themecd + this.separator + data.themedescs :'' 
                this.M_TN_BrandMaster.classcdLabel = this.M_TN_BrandMaster.classcd != null && this.M_TN_BrandMaster.classcd != '' ? data.classcd + this.separator + data.classdescs :'' 
                this.M_TN_BrandMaster.categorycdLabel = this.M_TN_BrandMaster.categorycd != null && this.M_TN_BrandMaster.categorycd != '' ? data.categorycd + this.separator + data.categorydescs :'' 
                this.M_TN_BrandMaster.brandowneridLabel = this.M_TN_BrandMaster.brandownerid != null && this.M_TN_BrandMaster.brandownerid != '' ? data.brandownerid + this.separator + data.name  :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        },
        setColumnClassWhere() {
            // Lookup Class
            var where = "LotThemeCd='"+this.M_TN_BrandMaster.themecd+"'"
            this.$refs.ref_classcd.prop.dataLookUp.InitialWhere = where
            this.$refs.ref_classcd.onChangeTriggered = true
            this.$refs.ref_classcd.prop.cDefault = this.M_TN_BrandMaster.classcd
        },
        setColumnCategoryWhere() {
            // Lookup   
            var where = "LotClassSequenceNo='"+(this.M_TN_BrandMaster.classsequenceno && this.M_TN_BrandMaster.classsequenceno != '' ? this.M_TN_BrandMaster.classsequenceno : 0)+"'"
            this.$refs.ref_categorycd.prop.dataLookUp.InitialWhere = where
            this.$refs.ref_categorycd.onChangeTriggered = true
            this.$refs.ref_categorycd.prop.cDefault = this.M_TN_BrandMaster.categorycd
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

