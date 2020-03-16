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
                                        <ABSInputSelectList @change="OnlotthemecdChange" :prop="PI_lotthemecd" :value="M_TN_LotCategory.lotthemecd" :label="M_TN_LotCategory.lotthemecdLabel" ref="ref_lotthemecd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnlotclasscdChange" :prop="PI_lotclasscd" :value="M_TN_LotCategory.lotclasscd" :label="M_TN_LotCategory.lotclasscdLabel" ref="ref_lotclasscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_lotcategorycd" v-model="M_TN_LotCategory.lotcategorycd"  ref="ref_lotcategorycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_TN_LotCategory.descs"  ref="ref_descs"/>
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

            M_TN_LotCategory :{
                lotclasssequenceno: 0,
                lotcategorysequenceno: 0,
                lotcategorycd: '',
                descs: '',
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
                rowid: 0,
                lotclasscd: '',
                lotclassdescs: '',
                lotthemecd: '',
                themedescs: ''
                    }
            ,
            PI_lotthemecd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLotTheme'    , 
                    ColumnDB: 'LotThemeCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'lotthemecd', 
                cLabel: 'Theme Code', 
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
                cMasterUrl: 'TN/TN_LotTheme' ,
                cDisplayColumn: 'Lot_Theme_Cd,Descs' ,
            }, 
            PI_lotclasscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNLotClass'    , 
                    ColumnDB: 'LotClassCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'lotclasscd', 
                cLabel: 'Class Code ', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 2, 
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
                cMasterUrl: 'TN/TN_LotClass' ,
                cDisplayColumn: 'Lot_Class_Cd,Descs' ,
            }, 
            PI_lotclasssequenceno: {
                cValidate :'required|max:5', 
                cName: 'lotclasssequenceno',
                cLabelSize: 4, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_lotcategorycd: { 
                cValidate :'required|max:5', 
                cName: 'lotcategorycd', 
                cLabel: 'Category Code ', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs: { 
                cValidate :'required|max:60', 
                cName: 'descs', 
                cLabel: 'Description ', 
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
        OnlotthemecdChange (data) {
        this.$nextTick(() => {
            this.M_TN_LotCategory.lotthemecd = data.id
            this.M_TN_LotCategory.lotthemecdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{lotthemecd}
            this.setColumnClassWhere()
            }
        })
        this.$forceUpdate()
        },
        OnlotclasscdChange (data) {
this.$nextTick(() => {
            this.M_TN_LotCategory.lotclasscd = data.id
            this.M_TN_LotCategory.lotclasscdLabel = data.label
            this.M_TN_LotCategory.lotclasssequenceno = data.LotClassSequenceNo
            if (this.inputStatus != "VIEW") {
//{lotclasscd}
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
            console.log(this.M_TN_LotCategory)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                LotClassCd: this.M_TN_LotCategory.lotclasscd = '' || this.M_TN_LotCategory.lotclasscd == null ? 'NULL' : this.M_TN_LotCategory.lotclasscd,
                LotThemeCd: this.M_TN_LotCategory.lotthemecd = '' || this.M_TN_LotCategory.lotthemecd == null ? 'NULL' : this.M_TN_LotCategory.lotthemecd,
                LotClassSequenceNo: this.M_TN_LotCategory.lotclasssequenceno,
                LotCategorySequenceNo: this.M_TN_LotCategory.lotcategorysequenceno,
                LotCategoryCD: this.M_TN_LotCategory.lotcategorycd.toUpperCase(),
                Descs: this.M_TN_LotCategory.descs,
                UserInput: this.getDataUser().UserId ,
                UserEdit: this.getDataUser().UserId                 
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
                LotClassCd: this.M_TN_LotCategory.lotclasscd = '' || this.M_TN_LotCategory.lotclasscd == null ? 'NULL' : this.M_TN_LotCategory.lotclasscd,
                LotThemeCd: this.M_TN_LotCategory.lotthemecd = '' || this.M_TN_LotCategory.lotthemecd == null ? 'NULL' : this.M_TN_LotCategory.lotthemecd,
                LotCategorySequenceNo: this.M_TN_LotCategory.lotcategorysequenceno  ,
                Descs: this.M_TN_LotCategory.descs,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_LotCategory.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_LotCategory = {
                lotclasssequenceno: 0,
                lotcategorysequenceno: 0,
                lotcategorycd: '',
                descs: '',
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
                rowid: 0,
                lotclasscd: '',
                lotclassdescs: '',
                lotthemecd: '',
                themedescs: ''
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
                    LotCategorySequenceNo: value.LotCategorySequenceNo,
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
,                lotcategorysequenceno: record.LotCategorySequenceNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_TN_LotCategory = {
                lotclasssequenceno: this.isCurrency(data.lotclasssequenceno, this.decimal),
                lotcategorysequenceno: this.isCurrency(data.lotcategorysequenceno, this.decimal),
                lotcategorycd: data.lotcategorycd,
                descs: data.descs,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                t0: data.t0,
                t1: data.t1,
                t2: data.t2,
                t3: data.t3,
                t4: data.t4,
                t5: data.t5,
                t6: data.t6,
                t7: data.t7,
                t8: data.t8,
                t9: data.t9,
                t10: data.t10,
                t11: data.t11,
                t12: data.t12,
                t13: data.t13,
                t14: data.t14,
                t15: data.t15,
                t16: data.t16,
                t17: data.t17,
                t18: data.t18,
                t19: data.t19,
                t20: data.t20,
                t21: data.t21,
                t22: data.t22,
                t23: data.t23,
                t24: data.t24,
                t25: data.t25,
                t26: data.t26,
                t27: data.t27,
                t28: data.t28,
                t29: data.t29,
                t30: data.t30,
                controlsequenceno: this.isCurrency(data.controlsequenceno, this.decimal),
                rowid: this.isCurrency(data.rowid, this.decimal),
                lotclasscd: data.lotclasscd,
                lotclassdescs: data.lotclassdescs,
                lotthemecd: data.lotthemecd,
                themedescs: data.themedescs
                    }
                 

                this.M_TN_LotCategory.lotthemecdLabel = this.M_TN_LotCategory.lotthemecd != null && this.M_TN_LotCategory.lotthemecd != '' ? data.lotthemecd + this.separator + data.lotthemecd :'' 
                this.M_TN_LotCategory.lotclasscdLabel = this.M_TN_LotCategory.lotclasscd != null && this.M_TN_LotCategory.lotclasscd != '' ? data.lotclasscd + this.separator + data.lotclassdescs :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        },
    setColumnClassWhere() {
            // Lookup Class
            var where = "LotThemeCd='"+this.M_TN_LotCategory.lotthemecd+"'"
            this.$refs.ref_lotclasscd.prop.dataLookUp.InitialWhere = where
            this.$refs.ref_lotclasscd.onChangeTriggered = true
            this.$refs.ref_lotclasscd.prop.cDefault = this.M_TN_LotCategory.lotclasscd
        },
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

