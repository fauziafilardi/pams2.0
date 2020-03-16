<template>
    <div>        
    <ABSListVuex
      :prop="propList"
      :title="data.QueryName"
      @rowClicked="$parent.rowClicked"
      @rowDblClicked="$parent.doDoubleClick"
      @rowLinkClick="$parent.rowLink"
      @pageSize="$parent.M_PageSize"
      @pagination="$parent.M_Pagination"
      @filter="$parent.M_Advance_Filter"
      @headTable="$parent.M_Head_Table"
    />


        <div v-show="$parent.showForm"  :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
            <div class="div-collapse" v-b-toggle.collapse1>
                <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
                    Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                </span>
            </div>
            <b-collapse id="collapse1" visible="true">
                <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">     
					<b-col md="12" id="col-left" class="bColMasterForm">	
						<b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                            <b-row style="padding-left:10px;">					
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_queryname" v-model="M_SS_PageMasterFileInfoH.queryname"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex :prop="PI_querytype" v-model="M_SS_PageMasterFileInfoH.querytype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_sourcetable" v-model="M_SS_PageMasterFileInfoH.sourcetable"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_pageorder" v-model="M_SS_PageMasterFileInfoH.pageorder"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex :prop="PI_filterbysubportfolio" v-model="M_SS_PageMasterFileInfoH.filterbysubportfolio" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_subportfoliocolumnname" v-model="M_SS_PageMasterFileInfoH.subportfoliocolumnname"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_url" v-model="M_SS_PageMasterFileInfoH.url"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_level" v-model="M_SS_PageMasterFileInfoH.level" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_parentsequenceno" v-model="M_SS_PageMasterFileInfoH.parentsequenceno"/>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                  
							</b-row>
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
			Module:"SS",
            propList: {
                initialWhere:"PageMasterSeq = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_SS_PageMasterFileInfoH :{
                querysequenceno: 0,
                pagemasterseq: 0,
                queryname: '',
                querytype: 'L',
                sourcetable: '',
                pageorder: '',
                filterbysubportfolio: 'N',
                subportfoliocolumnname: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                controlsequenceno: 0,
                url: '',
                level: 0,
                parentsequenceno: 0,
                ss_optiondb_lineno: 0,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_queryname: { 
                cValidate :'', 
                cName:'queryname', 
                cLabel:'Query Name', 
                cOrder:1, 
                cKey:false, 
                cVisible:true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_querytype: { 
                cValidate :'', 
                cName:'querytype', 
                cId:'rdbquerytype', 
                cRadioOptions: [{ text: 'Listing', value: 'L' },{ text: 'Grid', value: 'G' },], 
                cLabel:'Query Type', 
                cOrder:2, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_sourcetable: { 
                cValidate :'', 
                cName:'sourcetable', 
                cLabel:'Source Table', 
                cOrder:3, 
                cKey:true, 
                cVisible:true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_pageorder: { 
                cValidate :'', 
                cName:'pageorder', 
                cLabel:'Page Order', 
                cOrder:4, 
                cKey:false, 
                cVisible:true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_filterbysubportfolio: { 
                cValidate :'', 
                cName:'filterbysubportfolio', 
                cId:'rdbfilterbysubportfolio', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cLabel:'Filter By SubPortfolio', 
                cOrder:5, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_subportfoliocolumnname: { 
                cValidate :'', 
                cName:'subportfoliocolumnname', 
                cLabel:'SubPortfolio Column Name', 
                cOrder:6, 
                cKey:false, 
                cVisible:true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_url: { 
                cValidate :'', 
                cName:'url', 
                cLabel:'Url', 
                cOrder:7, 
                cKey:false, 
                cVisible:true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_level: { 
                cValidate :'', 
                cName:'level', 
                cLabel:'Level', 
                cOrder:8, 
                cKey:false, 
                cType: 'numeric',
                cVisible:true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_parentsequenceno: { 
                cValidate :'', 
                cName:'parentsequenceno', 
                cLabel:'Parent Sequence No', 
                cOrder:9, 
                cKey:false, 
                cVisible:true, 
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
		return this.$store.getters.GetPage2Data
    },
    DataRowPage1(){
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
        M_Insert () {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                PageMasterSeq: this.M_SS_PageMasterFileInfoH.pagemasterseq,
                QueryName: this.M_SS_PageMasterFileInfoH.queryname,
                QueryType: this.M_SS_PageMasterFileInfoH.querytype,
                SourceTable: this.M_SS_PageMasterFileInfoH.sourcetable,
                PageOrder: this.M_SS_PageMasterFileInfoH.pageorder,
                FilterBySubPortfolio: this.M_SS_PageMasterFileInfoH.filterbysubportfolio,
                SubPortfolioColumnName: this.M_SS_PageMasterFileInfoH.subportfoliocolumnname,
                Url: this.M_SS_PageMasterFileInfoH.url,
                Level: this.M_SS_PageMasterFileInfoH.level,
                ParentSequenceNo: this.M_SS_PageMasterFileInfoH.parentsequenceno,
                UserInput: this.getDataUser().UserId                 
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                
                this.$parent.resultInsert(response.Message)
            })
        },
        M_Update () {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                PageMasterSeq: this.M_SS_PageMasterFileInfoH.pagemasterseq,
                QuerySequenceNo: this.M_SS_PageMasterFileInfoH.querysequenceno,
                QueryName: this.M_SS_PageMasterFileInfoH.queryname,
                QueryType: this.M_SS_PageMasterFileInfoH.querytype,
                SourceTable: this.M_SS_PageMasterFileInfoH.sourcetable,
                PageOrder: this.M_SS_PageMasterFileInfoH.pageorder,
                FilterBySubPortfolio: this.M_SS_PageMasterFileInfoH.filterbysubportfolio,
                SubPortfolioColumnName: this.M_SS_PageMasterFileInfoH.subportfoliocolumnname,
                Url: this.M_SS_PageMasterFileInfoH.url,
                Level: this.M_SS_PageMasterFileInfoH.level,
                ParentSequenceNo: this.M_SS_PageMasterFileInfoH.parentsequenceno,
                UserInput: this.getDataUser().UserId                 
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.$parent.resultUpdate(response.Message)
            })
        },
		M_ClearForm(){
            this.M_SS_PageMasterFileInfoH = {
                querysequenceno: 0,
                pagemasterseq: 0,
                queryname: '',
                querytype: 'L',
                sourcetable: '',
                pageorder: '',
                filterbysubportfolio: 'N',
                subportfoliocolumnname: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                controlsequenceno: 0,
                url: '',
                level: 0,
                parentsequenceno: '',
                ss_optiondb_lineno: 0,
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
			let data = this.$store.getters.GetPage1Data
            this.M_SS_PageMasterFileInfoH.pagemasterseq = data.PageMasterSeq 
        },
        M_Edit(){
            //this.$nextTick().then(() => {
            //    document.getElementById("???").focus()
            //})
        },
        M_Delete(dt){
            var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                    PageMasterSeq: this.DataRowPage1.PageMasterSeq,
                    QuerySequenceNo:  value.QuerySequenceNo,
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

                this.$parent.resultDelete("Deleting Data Successfully")
            })
        },
        paramFromParent(){
            this.$parent.showForm = false
            let data = this.$store.getters.GetPage1Data
            this.M_SS_PageMasterFileInfoH.pagemasterseq = data.PageMasterSeq 
            this.propList.initialWhere =" PageMasterSeq = '" + data.PageMasterSeq + "'"
        
            this.FormToABSList().doGetList('','eb_getList')
        },
		M_Cancel() {},		
		doDoubleClick(){
        },
        rowClicked (record, index) {            
        },
        rowLink (url){
        },
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                pagemasterseq: record.PageMasterSeq,
                querysequenceno: record.QuerySequenceNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
                this.M_SS_PageMasterFileInfoH = {
                    querysequenceno: data.querysequenceno,
                    pagemasterseq: data.pagemasterseq,
                    queryname: data.queryname,
                    querytype: data.querytype,
                    sourcetable: data.sourcetable,
                    pageorder: data.pageorder,
                    filterbysubportfolio: data.filterbysubportfolio,
                    subportfoliocolumnname: data.subportfoliocolumnname,
                    userinput: data.userinput,
                    useredit: data.useredit,
                    timeinput: data.timeinput,
                    timeedit: data.timeedit,
                    controlsequenceno: data.controlsequenceno,
                    url: data.url,
                    level: data.level,
                    parentsequenceno: data.parentsequenceno,
                    ss_optiondb_lineno: data.ss_optiondb_lineno,
                    lastupdatestamp: record.LastUpdateStamp,
                    rowid: data.rowid
                }
                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        },
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

