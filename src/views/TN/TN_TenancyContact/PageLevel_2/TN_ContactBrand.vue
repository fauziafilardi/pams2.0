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
                                        <ABSinputTextVuex :prop="PI_brandcd" v-model="M_TN_ContactBrand.brandcd"  ref="ref_brandcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_brandname" v-model="M_TN_ContactBrand.brandname"  ref="ref_brandname"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputCheckBox @input="OnbrandusageChange" :prop="PI_brandusage" v-model="M_TN_ContactBrand.brandusage"  ref="ref_brandusage" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_themecd" v-model="M_TN_ContactBrand.themecd"  ref="ref_themecd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnclasscdChange" :prop="PI_classcd" :value="M_TN_ContactBrand.classcd" :label="M_TN_ContactBrand.classcdLabel" ref="ref_classcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncategorysequencenoChange" :prop="PI_categorysequenceno" :value="M_TN_ContactBrand.categorysequenceno" :label="M_TN_ContactBrand.categorysequencenoLabel" ref="ref_categorysequenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnbrandcategoryChange" :prop="PI_brandcategory" v-model="M_TN_ContactBrand.brandcategory"  ref="ref_brandcategory" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_ContactBrand.remarks"  ref="ref_remarks" />
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
                initialWhere:"ContactId = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_ContactBrand :{
                brandcd: '',
                brandname: '',
                leasingstatus: '',
                clstatus: '',
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
                contactid: '',
                lastupdatestamp: 0,
                rowid: 0,
                brandusage: ''
                    }
            ,
            PI_brandcd: { 
                cValidate :'required|max:8', 
                cName: 'brandcd', 
                cLabel: 'Brand Code', 
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
            PI_brandname: { 
                cValidate :'required|max:60', 
                cName: 'brandname', 
                cLabel: 'Brand Name', 
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
                cValidate :'', 
                cName: 'themecd', 
                cLabel: 'Theme', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
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
                    LookUpCd: 'GetLotClassSequenceNo'    , 
                    ColumnDB: 'LotClassSequenceNo'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'classcd', 
                cLabel: 'Class', 
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
                cDisplayColumn: 'LotClassSequenceNo,Descs' ,
            }, 
            PI_categorysequenceno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLotCategorySequenceNo'    , 
                    ColumnDB: 'LotCategorySequenceNo'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'categorysequenceno', 
                cLabel: 'Category', 
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
                cDisplayColumn: 'LotCategorySequenceNo,Descs' ,
            }, 
            PI_brandcategory: { 
                cValidate :'', 
                cName: 'brandcategory', 
                cId: 'rdbbrandcategory', 
                cRadioOptions: [{ text: 'National', value: 'N' },{ text: 'International', value: 'I' },{ text: 'Local', value: 'L' },], 
                cRadioDefaultOption: 'N', 
                cLabel:'BrandCategory', 
                cLabelSize: 4, 
                cOrder: 7, 
                cProtect: false, 
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
                cOrder:8, 
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
        OnbrandusageChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{brandusage}
            }
        })
        this.$forceUpdate()
        },
        OnclasscdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContactBrand.classcd = data.id
            this.M_TN_ContactBrand.classcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{classcd}
            }
        })
        this.$forceUpdate()
        },
        OncategorysequencenoChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContactBrand.categorysequenceno = data.id
            this.M_TN_ContactBrand.categorysequencenoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{categorysequenceno}
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
           this.getToolbar().statusFunction[1].disabled = true
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
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            this.M_TN_ContactBrand.contactid = data.ContactId 
            this.propList.initialWhere =" ContactId = '" + data.ContactId + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                BrandCd: this.M_TN_ContactBrand.brandcd,
                BrandName: this.M_TN_ContactBrand.brandname,
                LeasingStatus: this.M_TN_ContactBrand.leasingstatus,
                CLStatus: this.M_TN_ContactBrand.clstatus,
                ThemeCd: this.M_TN_ContactBrand.themecd,
                ClassSequenceNo: this.M_TN_ContactBrand.classsequenceno,
                CategorySequenceNo: this.M_TN_ContactBrand.categorysequenceno == '' || this.M_TN_ContactBrand.categorysequenceno == null ? 'NULL' : this.M_TN_ContactBrand.categorysequenceno ,
                BrandCategory: this.M_TN_ContactBrand.brandcategory,
                BrandOwner: this.M_TN_ContactBrand.brandownerid,
                Remarks: this.M_TN_ContactBrand.remarks,
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
                BrandCd: this.M_TN_ContactBrand.brandcd,
                BrandName: this.M_TN_ContactBrand.brandname,
                LeasingStatus: this.M_TN_ContactBrand.leasingstatus,
                CLStatus: this.M_TN_ContactBrand.clstatus,
                ThemeCd: this.M_TN_ContactBrand.themecd,
                ClassSequenceNo: this.M_TN_ContactBrand.classsequenceno,
                CategorySequenceNo: this.M_TN_ContactBrand.categorysequenceno == '' || this.M_TN_ContactBrand.categorysequenceno == null ? 'NULL' : this.M_TN_ContactBrand.categorysequenceno ,
                BrandCategory: this.M_TN_ContactBrand.brandcategory,
                BrandOwner: this.M_TN_ContactBrand.brandownerid,
                Remarks: this.M_TN_ContactBrand.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_ContactBrand.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_ContactBrand = {
                brandcd: '',
                brandname: '',
                leasingstatus: '',
                clstatus: '',
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
                contactid: '',
                lastupdatestamp: 0,
                rowid: 0,
                brandusage: ''
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_ContactBrand.contactid = data.ContactId 
            this.$refs.ref_brandcd.focus()
        },
        M_Edit(){
            this.$refs.ref_brandcd.focus()
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
,                brandcd: record.BrandCd,
                contactid: record.ContactId				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_ContactBrand = {
                brandcd: data.brandcd,
                brandname: data.brandname,
                leasingstatus: data.leasingstatus,
                clstatus: data.clstatus,
                themecd: data.themecd,
                classsequenceno: this.isCurrency(data.classsequenceno, this.decimal),
                categorysequenceno: this.isCurrency(data.categorysequenceno, this.decimal),
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
                contactid: data.contactid,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: this.isCurrency(data.rowid, this.decimal),
                brandusage: data.brandusage
                    }
                 

                this.M_TN_ContactBrand.classcdLabel = this.M_TN_ContactBrand.classcd != null && this.M_TN_ContactBrand.classcd != '' ? data.classcd + this.separator + data.classdescs :'' 
                this.M_TN_ContactBrand.categorysequencenoLabel = this.M_TN_ContactBrand.categorysequenceno != null && this.M_TN_ContactBrand.categorysequenceno != '' ? data.categorysequenceno + this.separator + data.categorydescs :'' 
  

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

