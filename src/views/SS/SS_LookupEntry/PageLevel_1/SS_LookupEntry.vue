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
                                        <ABSinputTextVuex :prop="PI_lookupcd" v-model="M_SS_LookupEntry.optionlookupcd"  ref="ref_optionlookupcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_columndb" v-model="M_SS_LookupEntry.columndb"  ref="ref_columndb"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_viewname" v-model="M_SS_LookupEntry.viewname"  ref="ref_viewname"/>
                                      </b-col>
                                    </b-row>
                                    
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_sourcefield" v-model="M_SS_LookupEntry.sourcefield"  ref="ref_sourcefield"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_sourcewhere" v-model="M_SS_LookupEntry.sourcewhere"  ref="ref_sourcewhere"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_displaylookup" v-model="M_SS_LookupEntry.displaylookup"  ref="ref_displaylookup"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSTextAreaVuex :prop="PI_sourcequery" v-model="M_SS_LookupEntry.sourcequery"  ref="ref_sourcequery"/>
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
		cInsertKey:'id=LookUpCd,label=LookUpCd',
		FormType: "List",
		Module:"SS",
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

            M_SS_LookupEntry :{
                optionlookupcd: '',
                columndb: '',
                viewname: '',
                sourcefield: '',
                sourcewhere: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                sisplaylookup: '',
                islookuplist: '',
                isasyn: '',
                stringquery: '',
                sourcequery: '',
                ss_optionlookup_id: 0
                    }
            ,
            PI_lookupcd: { 
                cValidate :'required', 
                cName: 'optionlookupcd', 
                cLabel: 'Lookup Code', 
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
            PI_columndb: { 
                cValidate :'required', 
                cName: 'columndb', 
                cLabel: 'Column DB', 
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
            PI_viewname: { 
                cValidate :'required', 
                cName: 'viewname', 
                cLabel: 'View Name', 
                cOrder:3, 
                cLabelSize: 4, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_sourcequery: { 
                cValidate :'', 
                cName:'sourcequery', 
                cLabel:'Query', 
                cLabelSize: 2, 
                cOrder:4, 
                cKey: false, 
                cDefault: '', 
                cProtect: false, 
                cVisible: true, 
                cResize: false, 
                cReadOnly: false, 
                cRows: 8, 
                cMaxRows: 10, 
                cSize: 'md', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
            }, 
            PI_sourcefield: { 
                cValidate :'required', 
                cName: 'sourcefield', 
                cLabel: 'Source Field', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_sourcewhere: { 
                cValidate :'', 
                cName: 'sourcewhere', 
                cLabel: 'Source Where', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_displaylookup: { 
                cValidate :'required', 
                cName: 'displaylookup', 
                cLabel: 'Display Lookup', 
                cLabelSize: 4, 
                cOrder: 7, 
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
      // this.PI_viewname.cVisible = true
		},		
		doDoubleClick(){
        },
        rowClicked (record, index) {
          // this.PI_viewname.cVisible = true
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
                LookUpCd: this.M_SS_LookupEntry.optionlookupcd,
                ColumnDB: this.M_SS_LookupEntry.columndb,
                ViewName: this.M_SS_LookupEntry.viewname,
                SourceField: this.M_SS_LookupEntry.sourcefield,
                SourceWhere: this.M_SS_LookupEntry.sourcewhere,
                UserInput: this.getDataUser().UserId ,
                DisplayLookup: this.M_SS_LookupEntry.displaylookup,
                SourceQuery: this.M_SS_LookupEntry.sourcequery             
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
                SS_OptionLookUpId: this.M_SS_LookupEntry.ss_optionlookup_id,
                LookUpCd: this.M_SS_LookupEntry.optionlookupcd,
                ColumnDB: this.M_SS_LookupEntry.columndb,
                ViewName: this.M_SS_LookupEntry.viewname,
                SourceField: this.M_SS_LookupEntry.sourcefield,
                SourceWhere: this.M_SS_LookupEntry.sourcewhere,
                UserInput: this.getDataUser().UserId ,
                DisplayLookup: this.M_SS_LookupEntry.displaylookup,
                SourceQuery: this.M_SS_LookupEntry.sourcequery                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_SS_LookupEntry = {
                optionlookupcd: '',
                columndB: '',
                viewname: '',
                sourcefield: '',
                sourcewhere: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                sisplaylookup: '',
                islookuplist: '',
                isasyn: '',
                stringquery: '',
                sourcequery: '',
                ss_optionlookup_id: 0
            }
		},
        M_New(){
          // this.PI_viewname.cVisible = false
        },
        M_Edit(){
          let data = this.$store.getters.GetPage1Data
          // console.log(data)
          this.M_SS_LookupEntry.ss_optionlookup_id = data.SS_OptionLookUp_ID
        },
        M_Delete(dt){       
            var data = this.FormToABSList().getRowSelected()  
            var dataDelete = []

        
            data.forEach((value) => {
                // console.log(value
                dataDelete.push({
                SS_OptionLookUpId: value.SS_OptionLookUp_ID,
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
            // console.log(record)
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,                
                SS_OptionLookUpId: record.SS_OptionLookUp_ID
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                // console.log(data)
this.M_SS_LookupEntry = {
                optionlookupcd: data.optionlookupcd,
                columndb: data.columndb,
                viewname: data.viewname,
                sourcefield: data.sourcefield,
                sourcewhere: data.sourcewhere,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                displaylookup: data.displaylookup,
                islookuplist: data.islookuplist,
                isasyn: data.isasyn,
                sourcequery: data.stringquery,
                ss_optionlookup_id: record.SS_OptionLookUp_ID
                    }
                 

         

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

