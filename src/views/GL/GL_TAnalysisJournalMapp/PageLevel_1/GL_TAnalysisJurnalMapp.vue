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
                                        <ABSInputSelectList @change="OnprocesscdChange" :prop="PI_processcd" :value="M_GL_TAnalysisJurnalMapp.processcd" :label="M_GL_TAnalysisJurnalMapp.processcdLabel" ref="ref_processcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnjournalcdChange" :prop="PI_journalcd" :value="M_GL_TAnalysisJurnalMapp.journalcd" :label="M_GL_TAnalysisJurnalMapp.journalcdLabel" ref="ref_journalcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_chooselistremarks" v-model="M_GL_TAnalysisJurnalMapp.chooselistremarks"  ref="ref_chooselistremarks" />
                                      </b-col>
                                    </b-row>
                                    <b-row style="height: 20px !important;">
                                      <b-col md="2">
                                        <ABSLabelOnly
                                        :prop="{cLabel: '', 
                                          cLabelSize: 4, 
                                          cValue: '', 
                                          cPageLevel: PageLevel, 
                                          cTabIndex: TabIndex, 
                                          cVisible: true,
                                          cClass: 'lbl-col-align'}"
                                        />
                                      </b-col>
                                      <b-col md="2" style="text-align: center !important;">T Source</b-col>
                                      <b-col md="1" style="text-align: center !important;"></b-col>                                      
                                      <b-col md="2" style="text-align: left !important;">Mandatory </b-col>                                     
                                      <b-col md="2" style="text-align: left !important;">Independent </b-col>
                                      <b-col md="2" style="text-align: center !important;">Parent Code </b-col>
                                    </b-row>
                                    <template v-for="(data, index) in DataAnalysis">
                                        <b-row>
                                            <b-col md="2">
                                                <ABSLabelOnly
                                                :prop="{cLabel: data.TDescs, 
                                                cLabelSize: 4, 
                                                cValue: '', 
                                                cPageLevel: PageLevel, 
                                                cTabIndex: TabIndex, 
                                                cVisible: true,
                                                cClass: 'lbl-col-align'}"
                                                />
                                            </b-col>
                                            <b-col md="2">                                        
                                                <ABSInputSelect2Only @change="OntanalysismappingChange(M_GL_TAnalysisJurnalMapp['t'+data.n], 't'+data.n)"
                                                :prop="{
                                                    dataLookUp: null, 
                                                    cValidate :'', 
                                                    cName: 't'+data.n, 
                                                    cLabel: '', 
                                                    cLabelSize: 4, 
                                                    cOrder: 1, 
                                                    cKey: false, 
                                                    cTriggered: false, 
                                                    cDefault: '', 
                                                    cProtect: false, 
                                                    cVisible:  true, 
                                                    cAsync:  false, 
                                                    cFilter: true, 
                                                    cPageLevel: PageLevel, 
                                                    cTabIndex: TabIndex, 
                                                    cParentForm: 'FormScope_' + PageLevel + '_' + TabIndex, 
                                                    cStatic: true, 
                                                    cOption: DataLookUpMandatory, 
                                                    
                                                    cDisplayColumn: '' ,
                                                    
                                                    cHideRowColumnCSS: true,
                                                    cRowDisable: [] 
                                                }" :rowLine="index" v-model="M_GL_TAnalysisJurnalMapp['t'+data.n]" :label="M_GL_TAnalysisJurnalMapp['t'+data.n+'Label']"  :ref="'ref_t'+data.n"/>
                                            </b-col>
                                            <b-col md="1">
                                                {{'(T'+ data.n +')'}}
                                            </b-col>

                                            <b-col md="2">  
                                                <ABSinputRadioButtonOnly :prop="{
                                                    cValidate :'', 
                                                    cName: 't'+data.n+'mandatoryanalysis', 
                                                    cId: 't'+data.n+'rdbmandatory', 
                                                    cRadioOptions: [{ text: 'No', value: 'N' },{ text: 'Yes', value: 'Y' },], 
                                                    cRadioDefaultOption: data.TnMandatoryAnalysis, 
                                                    cLabel:'Mandatory', 
                                                    cLabelSize: 4, 
                                                    cOrder: 0, 
                                                    cProtect: false, 
                                                    cVisible:  true, 
                                                    cPageLevel: PageLevel, 
                                                    cTabIndex: TabIndex, 
                                                    cParentForm: 'FormScope_' + PageLevel + '_' + TabIndex,
                                                    cHideRowColumnCSS: true,
                                                    cRowDisable: []
                                                }" :rowLine="index" v-model="M_GL_TAnalysisJurnalMapp['t'+data.n+'mandatoryanalysis']"  :ref="'ref_mandatory'+data.n"/>
                                            </b-col>

                                            <b-col md="2">
                                                <ABSinputRadioButtonOnly :prop="{
                                                    cValidate :'', 
                                                    cName: 't'+data.n+'independentanalysis', 
                                                    cId: 't'+data.n+'rdbindependentanalysis', 
                                                    cRadioOptions: [{ text: 'No', value: 'N' },{ text: 'Yes', value: 'Y' },], 
                                                    cRadioDefaultOption: data.TnIndependentAnalysis, 
                                                    cLabel:'Independent', 
                                                    cLabelSize: 4, 
                                                    cOrder: 0, 
                                                    cProtect: false, 
                                                    cVisible:  true, 
                                                    cPageLevel: PageLevel, 
                                                    cTabIndex: TabIndex, 
                                                    cParentForm: 'FormScope_' + PageLevel + '_' + TabIndex,
                                                    cHideRowColumnCSS: true,
                                                    cRowDisable: [] 
                                                }" :rowLine="index" v-model="M_GL_TAnalysisJurnalMapp['t'+data.n+'independentanalysis']"  :ref="'ref_independentanalysis'+data.n"/>
                                            </b-col>

                                            <b-col md="2">
                                                <ABSInputSelect2Only @change="OnparenttrxanalysiscategoryChange(M_GL_TAnalysisJurnalMapp['t'+data.n+'parenttrxanalysiscategory'], 't'+data.n+'parenttrxanalysiscategory')"
                                                :prop="{
                                                    dataLookUp: null, 
                                                    cValidate :'', 
                                                    cName: 't'+data.n+'parenttrxanalysiscategory', 
                                                    cLabel: '', 
                                                    cLabelSize: 4, 
                                                    cOrder: 1, 
                                                    cKey: false, 
                                                    cTriggered: false, 
                                                    cDefault: '', 
                                                    cProtect: false, 
                                                    cVisible:  true, 
                                                    cAsync:  false, 
                                                    cFilter: false, 
                                                    cPageLevel: PageLevel, 
                                                    cTabIndex: TabIndex, 
                                                    cParentForm: 'FormScope_' + PageLevel + '_' + TabIndex, 
                                                    cStatic: true, 
                                                    cOption: DataLookUpParentCode,  
                                                    
                                                    cDisplayColumn: '' ,
                                                    cHideRowColumnCSS: true,
                                                    cRowDisable: [] 
                                                }" :rowLine="index" v-model="M_GL_TAnalysisJurnalMapp['t'+data.n+'parenttrxanalysiscategory']" :label="M_GL_TAnalysisJurnalMapp['t'+data.n+'parenttrxanalysiscategory']+'Label'" :ref="'ref_parenttrxanalysiscategory'+data.n"/>
                                            </b-col>

                                        </b-row>
                                    </template>
                                    
                                <!-- <b-col md="12" id="col-left"> 
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSInputSelectList @change="OntanalysismappingChange" :prop="PI_tanalysismapping" :value="M_GL_TAnalysisJurnalMapp.tanalysismapping" :label="M_GL_TAnalysisJurnalMapp.tanalysismappingLabel" ref="ref_tanalysismapping"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputRadioButtonVuex @input="OnmandatoryChange" :prop="PI_mandatory" v-model="M_GL_TAnalysisJurnalMapp.mandatory"  ref="ref_mandatory" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputRadioButtonVuex @input="OnindependentanalysisChange" :prop="PI_independentanalysis" v-model="M_GL_TAnalysisJurnalMapp.independentanalysis"  ref="ref_independentanalysis" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSInputSelectList @change="OnanalysiscategoryChange" :prop="PI_analysiscategory" :value="M_GL_TAnalysisJurnalMapp.analysiscategory" :label="M_GL_TAnalysisJurnalMapp.analysiscategoryLabel" ref="ref_analysiscategory"/>
                                      </b-col>
                                    </b-row>
                                </b-col> -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_GL_TAnalysisJurnalMapp.remarks"  ref="ref_remarks" />
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
        Module:"GL",
        DataAnalysis: [],
        DataLookUpMandatory:[],
        DataLookUpParentCode:[],
            propList: {
                initialWhere: "SubPortfolioCd='"+this.getDataUser().SubPortfolioCd+"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
            getDataStatus: false,
       
            IEBy: {Input: '', Edit: ''},   			

            M_GL_TAnalysisJurnalMapp :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                processcd: '',
                journalcd: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                controlsequenceno: 0,
                processdescs: '',
                journaldescs: '',
                chooselistremarks: '',
                lastupdatestamp: 0,
                rowid: 0,
                tanalysismapping: '',
                mandatory: '',
                independentanalysis: '',
                analysiscategory: '',
                t2:'',
                    }
            ,
            PI_processcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLProcessCd'    , 
                    ColumnDB: 'ProcessCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'processcd', 
                cLabel: 'Process Code', 
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
                cDisplayColumn: 'ProcessCd,Descs' ,
            }, 
            PI_journalcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGL_TransactionAnalysisJournalList'    , 
                    ColumnDB: 'JournalCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'journalcd', 
                cLabel: 'Journal Code', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'JournalCd,Descs' ,
            }, 
            PI_chooselistremarks: { 
                cLabel: 'Choose List Remarks', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            // PI_tanalysismapping: { 
            //     dataLookUp: null, 
            //     cValidate :'', 
            //     cName: 'tanalysismapping', 
            //     cLabel: '', 
            //     cLabelSize: 4, 
            //     cOrder: 1, 
            //     cKey: false, 
            //     cTriggered: false, 
            //     cDefault: '', 
            //     cProtect: false, 
            //     cVisible:  true, 
            //     cAsync:  false, 
            //     cFilter: true, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
            //     cStatic: true, 
            //     cOption: [{ label: 'Single', id: 'S' },{ label: 'Married', id: 'M' },{ label: 'Widow', id: 'W' },{ label: 'Widower', id: 'R' }], 
            //     cMasterUrl: '' ,
            //     cDisplayColumn: '' ,                
            // }, 
            // PI_mandatory: { 
            //     cValidate :'', 
            //     cName: 'mandatory', 
            //     cId: 'rdbmandatory', 
            //     cRadioOptions: [{ text: 'No', value: 'N' },{ text: 'Yes', value: 'Y' },], 
            //     cRadioDefaultOption: 'N', 
            //     cLabel:'Mandatory', 
            //     cLabelSize: 4, 
            //     cOrder: 0, 
            //     cProtect: false, 
            //     cVisible:  true, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
            //     cHideRowColumnCSS: true 
            // }, 
            // PI_independentanalysis: { 
            //     cValidate :'', 
            //     cName: 'independentanalysis', 
            //     cId: 'rdbindependentanalysis', 
            //     cRadioOptions: [{ text: 'No', value: 'N' },{ text: 'Yes', value: 'Y' },], 
            //     cRadioDefaultOption: 'N', 
            //     cLabel:'Independent', 
            //     cLabelSize: 4, 
            //     cOrder: 0, 
            //     cProtect: false, 
            //     cVisible:  true, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
            //     cHideRowColumnCSS: true 
            // }, 
            // PI_analysiscategory: { 
            //     dataLookUp: null, 
            //     cValidate :'required', 
            //     cName: 'analysiscategory', 
            //     cLabel: '', 
            //     cLabelSize: 4, 
            //     cOrder: 1, 
            //     cKey: false, 
            //     cTriggered: false, 
            //     cDefault: '', 
            //     cProtect: false, 
            //     cVisible:  true, 
            //     cAsync:  false, 
            //     cFilter: false, 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
            //     cStatic: true, 
            //     cOption: [{ label: 'Single', id: 'S' },{ label: 'Married', id: 'M' },{ label: 'Widow', id: 'W' },{ label: 'Widower', id: 'R' }],  
            //     cMasterUrl: '' ,
            //     cDisplayColumn: '' ,
            // }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:3, 
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
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {
        GetTransactionAnalysisH(){
            var param = {
                OptionFunctionCd: "Get_GLTransactionAnalysisH",
                ModuleCd: this.Module               
            }

          this.FnDynamicFunction(param)
            .then(ress => {
                if(ress == null) return
                var data = ress
                
                var x = data

                data.forEach(data => {
                    this.DataLookUpParentCode.push({
                        id: data.TrxAnalysisCategory,
                        label: data.TrxAnalysisCategory +' - '+ data.Descs
                    })
                });

                
            })
        },
        BindTAnalysisMapping(){
            var param = {
                OptionFunctionCd: "getTAnalysisJournalMapping",
                ModuleCd: this.Module,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                ProcessCd: this.M_GL_TAnalysisJurnalMapp.processcd,
                JournalCd: this.M_GL_TAnalysisJurnalMapp.journalcd
            }

          this.FnDynamicFunction(param)
            .then(ress => {
                if(ress == null) return
                this.DataAnalysis = ress
                for (var x = 0; x < ress.length; x ++) {                
                    if (this.getDataStatus) {
                        this.M_GL_TAnalysisJurnalMapp['t'+ress[x].n] = ress[x].Tn ? ress[x].Tn : ''
                        this.M_GL_TAnalysisJurnalMapp['t'+ress[x].n+'mandatoryanalysis'] = ress[x].TnMandatoryAnalysis && ress[x].TnMandatoryAnalysis != '' ? ress[x].TnMandatoryAnalysis : 'Y'
                        this.M_GL_TAnalysisJurnalMapp['t'+ress[x].n+'independentanalysis'] = ress[x].TnIndependentAnalysis && ress[x].TnIndependentAnalysis != '' ? ress[x].TnIndependentAnalysis : 'Y'
                        this.M_GL_TAnalysisJurnalMapp['t'+ress[x].n+'parenttrxanalysiscategory'] = ress[x].TnParentTrxAnalysisCategory ? ress[x].TnParentTrxAnalysisCategory : ''
                    }
                    else {
                        this.M_GL_TAnalysisJurnalMapp['t'+ress[x].n] = ress[x].Tn ? ress[x].Tn : ''
                        this.M_GL_TAnalysisJurnalMapp['t'+ress[x].n+'mandatoryanalysis'] = ress[x].TnMandatoryAnalysis && ress[x].TnMandatoryAnalysis != '' ? ress[x].TnMandatoryAnalysis : 'N'
                        this.M_GL_TAnalysisJurnalMapp['t'+ress[x].n+'independentanalysis'] = ress[x].TnIndependentAnalysis && ress[x].TnIndependentAnalysis != '' ? ress[x].TnIndependentAnalysis : 'N'
                        this.M_GL_TAnalysisJurnalMapp['t'+ress[x].n+'parenttrxanalysiscategory'] = ress[x].TnParentTrxAnalysisCategory ? ress[x].TnParentTrxAnalysisCategory : ''
                    }
                }
                this.$store.commit('setStatusLoader', false)
                this.getDataStatus = false

                // for (var x = 0; x <= 30; x ++) {                
                //     if (this.getDataStatus) {
                //         this.M_GL_TAnalysisJurnalMapp['t'+x] = x.Tn ? x.Tn : ''
                //         this.M_GL_TAnalysisJurnalMapp['t'+x+'mandatoryanalysis'] = x.TnMandatoryAnalysis && x.TnMandatoryAnalysis != '' ? x.TnMandatoryAnalysis : 'Y'
                //         this.M_GL_TAnalysisJurnalMapp['t'+x+'independentanalysis'] = x.TnIndependentAnalysis && x.TnIndependentAnalysis != '' ? x.TnIndependentAnalysis : 'Y'
                //         this.M_GL_TAnalysisJurnalMapp['t'+x+'parenttrxanalysiscategory'] = x.TnParentTrxAnalysisCategory ? x.TnParentTrxAnalysisCategory : ''
                //     }
                //     else {
                //         this.M_GL_TAnalysisJurnalMapp['t'+x] = x.Tn ? x.Tn : ''
                //         this.M_GL_TAnalysisJurnalMapp['t'+x+'mandatoryanalysis'] = x.TnMandatoryAnalysis && x.TnMandatoryAnalysis != '' ? x.TnMandatoryAnalysis : 'N'
                //         this.M_GL_TAnalysisJurnalMapp['t'+x+'independentanalysis'] = x.TnIndependentAnalysis && x.TnIndependentAnalysis != '' ? x.TnIndependentAnalysis : 'N'
                //         this.M_GL_TAnalysisJurnalMapp['t'+x+'parenttrxanalysiscategory'] = x.TnParentTrxAnalysisCategory ? x.TnParentTrxAnalysisCategory : ''
                //     }
                // }
                // this.getDataStatus = false
            })

        },
        GetChooseList(){
            var param = {
                OptionFunctionCd: "getAllowedChooseList",
                ModuleCd: this.Module,
                ProcessCd: this.M_GL_TAnalysisJurnalMapp.processcd,
                JournalCd: this.M_GL_TAnalysisJurnalMapp.journalcd
            }

          this.FnDynamicFunction(param)
            .then(ress => {
                if(ress == null) return
                var data = ress[0]

                var x = data.AllowedChooseList.split(',')

                x.forEach(x => {
                    this.DataLookUpMandatory.push({
                        id: x,
                        label: x
                    })
                });
            })
        },

        ChooseListRemarks(){
            var param = {
                OptionFunctionCd: "getChooseListRemarks",
                ModuleCd: this.Module,
                ProcessCd: this.M_GL_TAnalysisJurnalMapp.processcd,
                JournalCd: this.M_GL_TAnalysisJurnalMapp.journalcd
            }

          this.FnDynamicFunction(param)
            .then(ress => {
                if(ress == null) return
                var data = ress[0]
                
                this.M_GL_TAnalysisJurnalMapp.chooselistremarks = data.ChooseListRemarks
            })
        },
        OnprocesscdChange (data) {
            // console.log(data)
        this.$nextTick(() => {
            this.M_GL_TAnalysisJurnalMapp.processcd = data.id
            this.M_GL_TAnalysisJurnalMapp.processcdLabel = data.label
            // if((this.M_GL_TAnalysisJurnalMapp.processcd != '' || this.M_GL_TAnalysisJurnalMapp.processcd != null) && (this.M_GL_TAnalysisJurnalMapp.journalcd != '' || this.M_GL_TAnalysisJurnalMapp.journalcd != null)){
            //     this.ChooseListRemarks()
            //     this.GetChooseList()
            //     this.BindTAnalysisMapping()
            // }
            
            if (this.inputStatus != "VIEW") {                               
                var where = " ProcessCd = '" + data.ProcessCd + "'"           
                this.$refs.ref_journalcd.prop.dataLookUp.InitialWhere = where
                this.$refs.ref_journalcd.onChangeTriggered = true
                this.$refs.ref_journalcd.prop.cDefault == '' 

            }
        })
        this.$forceUpdate()
        },
        OnjournalcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_TAnalysisJurnalMapp.journalcd = data.id
            this.M_GL_TAnalysisJurnalMapp.journalcdLabel = data.label
            this.M_GL_TAnalysisJurnalMapp.chooselistremarks = data.ChooseListRemarks
            
            if((this.M_GL_TAnalysisJurnalMapp.processcd != '' || this.M_GL_TAnalysisJurnalMapp.processcd != null) && (this.M_GL_TAnalysisJurnalMapp.journalcd != '' || this.M_GL_TAnalysisJurnalMapp.journalcd != null)){
                this.ChooseListRemarks()
                this.GetChooseList()
                this.GetTransactionAnalysisH()
                this.BindTAnalysisMapping()
            }

            if (this.inputStatus != "VIEW") {
                //{journalcd}
            }
        })
        this.$forceUpdate()
        },
        OnmandatoryChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{mandatory}
            }
        })
        this.$forceUpdate()
        },
        OnindependentanalysisChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{independentanalysis}
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
        OntanalysismappingChange(data, selector){
            this.M_GL_TAnalysisJurnalMapp[selector] = data.id
            this.M_GL_TAnalysisJurnalMapp[selector+'Label'] = data.label
            this.$nextTick(() => {
                if(this.inputStatus != "VIEW"){

                }
            })
            this.$forceUpdate()
        },
        OnparenttrxanalysiscategoryChange(data, selector){
            this.M_GL_TAnalysisJurnalMapp[selector] = data.id
            this.M_GL_TAnalysisJurnalMapp[selector+'Label'] = data.label
            this.$nextTick(() => {
                if(this.inputStatus != "VIEW"){
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
        M_Post(){
        },
        M_Insert() {
            console.log(this.M_GL_TAnalysisJurnalMapp)

            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ProcessCd: this.M_GL_TAnalysisJurnalMapp.processcd == '' || this.M_GL_TAnalysisJurnalMapp.processcd == null ? 'NULL' : this.M_GL_TAnalysisJurnalMapp.processcd ,
                JournalCd: this.M_GL_TAnalysisJurnalMapp.journalcd == '' || this.M_GL_TAnalysisJurnalMapp.journalcd == null ? 'NULL' : this.M_GL_TAnalysisJurnalMapp.journalcd ,
                Remarks: this.M_GL_TAnalysisJurnalMapp.remarks,
                UserInput: this.getDataUser().UserId 
            }

                for (let index = 2; index <= 30; index++) {
                    param['T'+index] = this.M_GL_TAnalysisJurnalMapp['t'+index] ? this.M_GL_TAnalysisJurnalMapp['t'+index] : ''
                    param['T'+index+'mandatoryanalysis'] = this.M_GL_TAnalysisJurnalMapp['t'+index+'mandatoryanalysis'] ? this.M_GL_TAnalysisJurnalMapp['t'+index+'mandatoryanalysis'] : ''
                    param['T'+index+'independentanalysis'] = this.M_GL_TAnalysisJurnalMapp['t'+index+'independentanalysis'] ? this.M_GL_TAnalysisJurnalMapp['t'+index+'independentanalysis'] : ''
                    param['T'+index+'parenttrxanalysiscategory'] = this.M_GL_TAnalysisJurnalMapp['t'+index+'parenttrxanalysiscategory'] ? this.M_GL_TAnalysisJurnalMapp['t'+index+'parenttrxanalysiscategory'] : ''
                }

            // })

            

                // T2: this.M_GL_TAnalysisJurnalMapp.t2,
                // T2MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t2mandatoryanalysis,
                // T2IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t2independentanalysis,
                // T2ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t2parenttrxanalysiscategory,

                // T3: this.M_GL_TAnalysisJurnalMapp.t3,
                // T3MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t3mandatoryanalysis,
                // T3IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t3independentanalysis,
                // T3ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t3parenttrxanalysiscategory,
                // T4: this.M_GL_TAnalysisJurnalMapp.t4,

                // T4MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t4mandatoryanalysis,
                // T4IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t4independentanalysis,
                // T4ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t4parenttrxanalysiscategory,
                // T5: this.M_GL_TAnalysisJurnalMapp.t5,
                // T5MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t5mandatoryanalysis,
                // T5IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t5independentanalysis,
                // T5ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t5parenttrxanalysiscategory,
                // T6: this.M_GL_TAnalysisJurnalMapp.t6,
                // T6MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t6mandatoryanalysis,
                // T6IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t6independentanalysis,
                // T6ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t6parenttrxanalysiscategory,
                // T7: this.M_GL_TAnalysisJurnalMapp.t7,
                // T7MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t7mandatoryanalysis,
                // T7IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t7independentanalysis,
                // T7ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t7parenttrxanalysiscategory,
                // T8: this.M_GL_TAnalysisJurnalMapp.t8,
                // T8MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t8mandatoryanalysis,
                // T8IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t8independentanalysis,
                // T8ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t8parenttrxanalysiscategory,
                // T9: this.M_GL_TAnalysisJurnalMapp.t9,
                // T9MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t9mandatoryanalysis,
                // T9IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t9independentanalysis,
                // T9ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t9parenttrxanalysiscategory,
                // T10: this.M_GL_TAnalysisJurnalMapp.t10,
                // T10MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t10mandatoryanalysis,
                // T10IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t10independentanalysis,
                // T10ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t10parenttrxanalysiscategory,
                // T11: this.M_GL_TAnalysisJurnalMapp.t11,
                // T11MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t11mandatoryanalysis,
                // T11IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t11independentanalysis,
                // T11ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t11parenttrxanalysiscategory,
                // T12: this.M_GL_TAnalysisJurnalMapp.t12,
                // T12MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t12mandatoryanalysis,
                // T12IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t12independentanalysis,
                // T12ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t12parenttrxanalysiscategory,
                // T13: this.M_GL_TAnalysisJurnalMapp.t13,
                // T13MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t13mandatoryanalysis,
                // T13IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t13independentanalysis,
                // T13ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t13parenttrxanalysiscategory,
                // T14: this.M_GL_TAnalysisJurnalMapp.t14,
                // T14MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t14mandatoryanalysis,
                // T14IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t14independentanalysis,
                // T14ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t14parenttrxanalysiscategory,
                // T15: this.M_GL_TAnalysisJurnalMapp.t15,
                // T15MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t15mandatoryanalysis,
                // T15IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t15independentanalysis,
                // T15ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t15parenttrxanalysiscategory,
                // T16: this.M_GL_TAnalysisJurnalMapp.t16,
                // T16MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t16mandatoryanalysis,
                // T16IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t16independentanalysis,
                // T16ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t16parenttrxanalysiscategory,
                // T17: this.M_GL_TAnalysisJurnalMapp.t17,
                // T17MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t17mandatoryanalysis,
                // T17IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t17independentanalysis,
                // T17ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t17parenttrxanalysiscategory,
                // T18: this.M_GL_TAnalysisJurnalMapp.t18,
                // T18MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t18mandatoryanalysis,
                // T18IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t18independentanalysis,
                // T18ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t18parenttrxanalysiscategory,
                // T19: this.M_GL_TAnalysisJurnalMapp.t19,
                // T19MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t19mandatoryanalysis,
                // T19IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t19independentanalysis,
                // T19ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t19parenttrxanalysiscategory,
                // T20: this.M_GL_TAnalysisJurnalMapp.t20,
                // T20MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t20mandatoryanalysis,
                // T20IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t20independentanalysis,
                // T20ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t20parenttrxanalysiscategory,
                // T21: this.M_GL_TAnalysisJurnalMapp.t21,
                // T21MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t21mandatoryanalysis,
                // T21IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t21independentanalysis,
                // T21ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t21parenttrxanalysiscategory,
                // T22: this.M_GL_TAnalysisJurnalMapp.t22,
                // T22MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t22mandatoryanalysis,
                // T22IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t22independentanalysis,
                // T22ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t22parenttrxanalysiscategory,
                // T23: this.M_GL_TAnalysisJurnalMapp.t23,
                // T23MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t23mandatoryanalysis,
                // T23IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t23independentanalysis,
                // T23ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t23parenttrxanalysiscategory,
                // T24: this.M_GL_TAnalysisJurnalMapp.t24,
                // T24MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t24mandatoryanalysis,
                // T24IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t24independentanalysis,
                // T24ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t24parenttrxanalysiscategory,
                // T25: this.M_GL_TAnalysisJurnalMapp.t25,
                // T25MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t25mandatoryanalysis,
                // T25IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t25independentanalysis,
                // T25ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t25parenttrxanalysiscategory,
                // T26: this.M_GL_TAnalysisJurnalMapp.t26,
                // T26MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t26mandatoryanalysis,
                // T26IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t26independentanalysis,
                // T26ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t26parenttrxanalysiscategory,
                // T27: this.M_GL_TAnalysisJurnalMapp.t27,
                // T27MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t27mandatoryanalysis,
                // T27IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t27independentanalysis,
                // T27ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t27parenttrxanalysiscategory,
                // T28: this.M_GL_TAnalysisJurnalMapp.t28,
                // T28MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t28mandatoryanalysis,
                // T28IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t28independentanalysis,
                // T28ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t28parenttrxanalysiscategory,
                // T29: this.M_GL_TAnalysisJurnalMapp.t29,
                // T29MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t29mandatoryanalysis,
                // T29IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t29independentanalysis,
                // T29ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t29parenttrxanalysiscategory,
                // T30: this.M_GL_TAnalysisJurnalMapp.t30,
                // T30MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t30mandatoryanalysis,
                // T30IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t30independentanalysis,
                // T30ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t30parenttrxanalysiscategory,
                                
            // }
            console.log(param)

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
                ProcessCd: this.M_GL_TAnalysisJurnalMapp.processcd == '' || this.M_GL_TAnalysisJurnalMapp.processcd == null ? 'NULL' : this.M_GL_TAnalysisJurnalMapp.processcd ,
                JournalCd: this.M_GL_TAnalysisJurnalMapp.journalcd == '' || this.M_GL_TAnalysisJurnalMapp.journalcd == null ? 'NULL' : this.M_GL_TAnalysisJurnalMapp.journalcd ,
                Remarks: this.M_GL_TAnalysisJurnalMapp.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_GL_TAnalysisJurnalMapp.lastupdatestamp,
                // T2: this.M_GL_TAnalysisJurnalMapp.t2,
                // T2MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t2mandatoryanalysis,
                // T2IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t2independentanalysis,
                // T2ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t2parenttrxanalysiscategory,
                // T3: this.M_GL_TAnalysisJurnalMapp.t3,
                // T3MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t3mandatoryanalysis,
                // T3IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t3independentanalysis,
                // T3ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t3parenttrxanalysiscategory,
                // T4: this.M_GL_TAnalysisJurnalMapp.t4,
                // T4MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t4mandatoryanalysis,
                // T4IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t4independentanalysis,
                // T4ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t4parenttrxanalysiscategory,
                // T5: this.M_GL_TAnalysisJurnalMapp.t5,
                // T5MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t5mandatoryanalysis,
                // T5IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t5independentanalysis,
                // T5ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t5parenttrxanalysiscategory,
                // T6: this.M_GL_TAnalysisJurnalMapp.t6,
                // T6MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t6mandatoryanalysis,
                // T6IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t6independentanalysis,
                // T6ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t6parenttrxanalysiscategory,
                // T7: this.M_GL_TAnalysisJurnalMapp.t7,
                // T7MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t7mandatoryanalysis,
                // T7IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t7independentanalysis,
                // T7ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t7parenttrxanalysiscategory,
                // T8: this.M_GL_TAnalysisJurnalMapp.t8,
                // T8MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t8mandatoryanalysis,
                // T8IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t8independentanalysis,
                // T8ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t8parenttrxanalysiscategory,
                // T9: this.M_GL_TAnalysisJurnalMapp.t9,
                // T9MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t9mandatoryanalysis,
                // T9IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t9independentanalysis,
                // T9ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t9parenttrxanalysiscategory,
                // T10: this.M_GL_TAnalysisJurnalMapp.t10,
                // T10MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t10mandatoryanalysis,
                // T10IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t10independentanalysis,
                // T10ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t10parenttrxanalysiscategory,
                // T11: this.M_GL_TAnalysisJurnalMapp.t11,
                // T11MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t11mandatoryanalysis,
                // T11IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t11independentanalysis,
                // T11ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t11parenttrxanalysiscategory,
                // T12: this.M_GL_TAnalysisJurnalMapp.t12,
                // T12MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t12mandatoryanalysis,
                // T12IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t12independentanalysis,
                // T12ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t12parenttrxanalysiscategory,
                // T13: this.M_GL_TAnalysisJurnalMapp.t13,
                // T13MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t13mandatoryanalysis,
                // T13IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t13independentanalysis,
                // T13ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t13parenttrxanalysiscategory,
                // T14: this.M_GL_TAnalysisJurnalMapp.t14,
                // T14MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t14mandatoryanalysis,
                // T14IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t14independentanalysis,
                // T14ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t14parenttrxanalysiscategory,
                // T15: this.M_GL_TAnalysisJurnalMapp.t15,
                // T15MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t15mandatoryanalysis,
                // T15IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t15independentanalysis,
                // T15ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t15parenttrxanalysiscategory,
                // T16: this.M_GL_TAnalysisJurnalMapp.t16,
                // T16MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t16mandatoryanalysis,
                // T16IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t16independentanalysis,
                // T16ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t16parenttrxanalysiscategory,
                // T17: this.M_GL_TAnalysisJurnalMapp.t17,
                // T17MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t17mandatoryanalysis,
                // T17IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t17independentanalysis,
                // T17ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t17parenttrxanalysiscategory,
                // T18: this.M_GL_TAnalysisJurnalMapp.t18,
                // T18MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t18mandatoryanalysis,
                // T18IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t18independentanalysis,
                // T18ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t18parenttrxanalysiscategory,
                // T19: this.M_GL_TAnalysisJurnalMapp.t19,
                // T19MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t19mandatoryanalysis,
                // T19IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t19independentanalysis,
                // T19ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t19parenttrxanalysiscategory,
                // T20: this.M_GL_TAnalysisJurnalMapp.t20,
                // T20MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t20mandatoryanalysis,
                // T20IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t20independentanalysis,
                // T20ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t20parenttrxanalysiscategory,
                // T21: this.M_GL_TAnalysisJurnalMapp.t21,
                // T21MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t21mandatoryanalysis,
                // T21IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t21independentanalysis,
                // T21ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t21parenttrxanalysiscategory,
                // T22: this.M_GL_TAnalysisJurnalMapp.t22,
                // T22MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t22mandatoryanalysis,
                // T22IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t22independentanalysis,
                // T22ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t22parenttrxanalysiscategory,
                // T23: this.M_GL_TAnalysisJurnalMapp.t23,
                // T23MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t23mandatoryanalysis,
                // T23IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t23independentanalysis,
                // T23ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t23parenttrxanalysiscategory,
                // T24: this.M_GL_TAnalysisJurnalMapp.t24,
                // T24MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t24mandatoryanalysis,
                // T24IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t24independentanalysis,
                // T24ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t24parenttrxanalysiscategory,
                // T25: this.M_GL_TAnalysisJurnalMapp.t25,
                // T25MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t25mandatoryanalysis,
                // T25IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t25independentanalysis,
                // T25ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t25parenttrxanalysiscategory,
                // T26: this.M_GL_TAnalysisJurnalMapp.t26,
                // T26MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t26mandatoryanalysis,
                // T26IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t26independentanalysis,
                // T26ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t26parenttrxanalysiscategory,
                // T27: this.M_GL_TAnalysisJurnalMapp.t27,
                // T27MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t27mandatoryanalysis,
                // T27IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t27independentanalysis,
                // T27ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t27parenttrxanalysiscategory,
                // T28: this.M_GL_TAnalysisJurnalMapp.t28,
                // T28MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t28mandatoryanalysis,
                // T28IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t28independentanalysis,
                // T28ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t28parenttrxanalysiscategory,
                // T29: this.M_GL_TAnalysisJurnalMapp.t29,
                // T29MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t29mandatoryanalysis,
                // T29IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t29independentanalysis,
                // T29ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t29parenttrxanalysiscategory,
                // T30: this.M_GL_TAnalysisJurnalMapp.t30,
                // T30MandatoryAnalysis: this.M_GL_TAnalysisJurnalMapp.t30mandatoryanalysis,
                // T30IndependentAnalysis: this.M_GL_TAnalysisJurnalMapp.t30independentanalysis,
                // T30ParentTrxAnalysisCategory: this.M_GL_TAnalysisJurnalMapp.t30parenttrxanalysiscategory,                
            }
            for (let index = 2; index <= 30; index++) {
                    param['T'+index] = this.M_GL_TAnalysisJurnalMapp['t'+index] ? this.M_GL_TAnalysisJurnalMapp['t'+index] : ''
                    param['T'+index+'mandatoryanalysis'] = this.M_GL_TAnalysisJurnalMapp['t'+index+'mandatoryanalysis'] ? this.M_GL_TAnalysisJurnalMapp['t'+index+'mandatoryanalysis'] : ''
                    param['T'+index+'independentanalysis'] = this.M_GL_TAnalysisJurnalMapp['t'+index+'independentanalysis'] ? this.M_GL_TAnalysisJurnalMapp['t'+index+'independentanalysis'] : ''
                    param['T'+index+'parenttrxanalysiscategory'] = this.M_GL_TAnalysisJurnalMapp['t'+index+'parenttrxanalysiscategory'] ? this.M_GL_TAnalysisJurnalMapp['t'+index+'parenttrxanalysiscategory'] : ''
                }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_TAnalysisJurnalMapp = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                processcd: '',
                journalcd: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                controlsequenceno: 0,
                processdescs: '',
                journaldescs: '',
                chooselistremarks: '',
                lastupdatestamp: 0,
                rowid: 0,
                tanalysismapping: '',
                mandatory: '',
                independentanalysis: '',
                analysiscategory: '',
                t2: ''
                    }
            		
		},
        M_New(){
			this.$refs.ref_processcd.focus()
        },
        M_Edit(){
            this.$refs.ref_remarks.focus()
        },
        M_Delete(dt){       

            var data = this.FormToABSList().getRowSelected()  
          var dataDelete = []
          
          data.forEach((value) => {
            
            dataDelete.push({
                LotNo: value.LotNo,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                ProcessCd: value.ProcessCode,
                JournalCd: value.JournalCode,
                LastUpdateStamp: value.LastUpdateStamp,
                _Message_: ""
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
            this.getDataStatus = true
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,                
                subportfoliocd: record.SubPortfolioCd,
                processcd: record.ProcessCode,
                journalcd: record.JournalCode
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                this.$store.commit('setStatusLoader', true)
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                this.M_GL_TAnalysisJurnalMapp = {
                    subportfoliocd: data.subportfoliocd,
                    processcd: data.processcd,
                    journalcd: data.journalcd,
                    remarks: data.remarks,
                    userinput: data.userinput,
                    useredit: data.useredit,
                    timeinput: data.timeinput,
                    timeedit: data.timeedit,
                    controlsequenceno: data.controlsequenceno,
                    processdescs: data.processdescs,
                    journaldescs: data.journaldescs,
                    chooselistremarks: data.chooselistremarks,
                    lastupdatestamp: record.LastUpdateStamp,
                    rowid: data.rowid
                }
                 

                this.M_GL_TAnalysisJurnalMapp.processcdLabel = this.M_GL_TAnalysisJurnalMapp.processcd != null ? data.processcd + this.separator + data.processdescs :'' 
                this.M_GL_TAnalysisJurnalMapp.journalcdLabel = this.M_GL_TAnalysisJurnalMapp.journalcd != null ? data.journalcd + this.separator + data.journaldescs :'' 
                
                this.GetChooseList()
                this.GetTransactionAnalysisH()
                this.BindTAnalysisMapping()

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

