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
                                        <ABSInputSelectList @change="OnsubportfoliocdChange" :prop="PI_subportfoliocd" :value="M_GL_TransactionAnalysisPageMasterFileSetup_D.subportfoliocd" :label="M_GL_TransactionAnalysisPageMasterFileSetup_D.subportfoliocdLabel" ref="ref_subportfoliocd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnformpagenoChange" :prop="PI_formpageno" :value="M_GL_TransactionAnalysisPageMasterFileSetup_D.formpageno" :label="M_GL_TransactionAnalysisPageMasterFileSetup_D.formpagenoLabel" ref="ref_formpageno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_GL_TransactionAnalysisPageMasterFileSetup_D.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnupdatetableChange" :prop="PI_updatetable" :value="M_GL_TransactionAnalysisPageMasterFileSetup_D.updatetable" :label="M_GL_TransactionAnalysisPageMasterFileSetup_D.updatetableLabel" ref="ref_updatetable"/>
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
                                      <b-col md="3" style="text-align: center !important;">Status</b-col>                                      
                                      <b-col md="2" style="text-align: left !important;">Mandatory </b-col>                                     
                                      <b-col md="2" style="text-align: center !important;">TCode </b-col>
                                      <b-col md="2" style="text-align: center !important;">TDescs</b-col>
                                    </b-row>
                                    <template v-for="(data, index) in DataAnalysis">
                                        <b-row>
                                            <b-col md="2">
                                                <ABSLabelOnly
                                                :prop="{cLabel: data.Descs, 
                                                cLabelSize: 4, 
                                                cValue: '', 
                                                cPageLevel: PageLevel, 
                                                cTabIndex: TabIndex, 
                                                cVisible: true,
                                                cClass: 'lbl-col-align'}"
                                                />
                                            </b-col>
                                            <b-col md="3">  
                                            <ABSinputRadioButtonOnly :prop="{
                                                cValidate :'', 
                                                cName: 't'+data.OTrxAnalysisCategory+'status', 
                                                cId: 't'+data.OTrxAnalysisCategory+'rdbstatus', 
                                                cRadioOptions: [{ text: 'No', value: 'N' },{ text: 'Yes', value: 'Y' },{ text: 'Code', value: 'C' },{ text: 'Master', value: 'M' },],  
                                                cRadioDefaultOption: '', 
                                                cLabel:'Status', 
                                                cLabelSize: 4, 
                                                cOrder: 0, 
                                                cProtect: false, 
                                                cVisible:  true, 
                                                cPageLevel: PageLevel, 
                                                cTabIndex: TabIndex, 
                                                cParentForm: 'FormScope_' + PageLevel + '_' + TabIndex,
                                                cHideRowColumnCSS: true,
                                                cRowDisable: []
                                            }" :rowLine="index" v-model="M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+data.OTrxAnalysisCategory+'status']"  :ref="'ref_status'+data.OTrxAnalysisCategory"/>
                                        </b-col>
                                        <b-col md="2">  
                                            <ABSinputRadioButtonOnly :prop="{
                                                cValidate :'', 
                                                cName: 't'+data.OTrxAnalysisCategory+'mandatoryanalysis', 
                                                cId: 't'+data.OTrxAnalysisCategory+'rdbmandatoryanalysis', 
                                                cRadioOptions: [{ text: 'No', value: 'N' },{ text: 'Yes', value: 'Y' }],  
                                                cRadioDefaultOption: '', 
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
                                            }" :rowLine="index" v-model="M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+data.OTrxAnalysisCategory+'mandatoryanalysis']"  :ref="'ref_mandatoryanalysis'+data.OTrxAnalysisCategory"/>
                                        </b-col>
                                        <b-col md="2">
                                                <ABSInputSelectListOnly @change="OncodeChange(M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+data.OTrxAnalysisCategory+'code'], 't'+data.OTrxAnalysisCategory+'code')"
                                                :prop="{
                                                    dataLookUp: {
                                                        LookUpCd: 'getSysColumn',
                                                        ColumnDB: 'name',
                                                        InitialWhere: LookUpParam,
                                                        ParamWhere: '',
                                                        OrderBy: 'name ASC'  
                                                    }, 
                                                    cValidate :'', 
                                                    cName: 't'+data.OTrxAnalysisCategory+'code', 
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
                                                    cPageLevel: 2, 
                                                    cTabIndex: 1, 
                                                    cParentForm: 'FormScope_' + 2 + '_' + 1, 
                                                    cStatic: false, 
                                                    cOption: [],  
                                                    
                                                    cDisplayColumn: 'name' ,
                                                    cHideRowColumnCSS: false,
                                                    cRowDisable: [] 
                                                }" :rowLine="index" v-model="M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+data.OTrxAnalysisCategory+'code']" :label="M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+data.OTrxAnalysisCategory+'codeLabel']" :ref="'ref_code'+data.OTrxAnalysisCategory"/>
                                            </b-col>
                                            <b-col md="2">
                                                <ABSInputSelectListOnly @change="OndescsChange(M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+data.OTrxAnalysisCategory+'descs'], 't'+data.OTrxAnalysisCategory+'descs')"
                                                :prop="{
                                                    dataLookUp: {
                                                        LookUpCd: 'getSysColumn',
                                                        ColumnDB: 'name',
                                                        InitialWhere: LookUpParam,
                                                        ParamWhere: '',
                                                        OrderBy: 'name ASC'  
                                                    }, 
                                                    cValidate :'', 
                                                    cName: 't'+data.OTrxAnalysisCategory+'descs', 
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
                                                    cStatic: false, 
                                                    cOption: [],  
                                                    
                                                    cDisplayColumn: 'name' ,
                                                    cHideRowColumnCSS: false,
                                                    cRowDisable: [] 
                                                }" :rowLine="index" v-model="M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+data.OTrxAnalysisCategory+'descs']" :label="M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+data.OTrxAnalysisCategory+'descsLabel']" :ref="'ref_descs'+data.OTrxAnalysisCategory"/>
                                            </b-col>
                                        </b-row>
                                        
                                    </template>
                                </b-col> <!-- table close -->
                                <!-- <b-col md="12" id="col-left">
                                    <b-row>
                                        
                                    </b-row>
                                </b-col> -->
                  
							</b-row>

							<ABSTAnalysis :prop="PTAnalysis" />
						</b-form>
					</b-col>
                </b-row>
                <!-- <ABSGrid
                                            :prop="PI_grid"
                                            @changeCheckbox="changeCheckbox"
                                            :PageLevel="PageLevel"
                                            :TabIndex="TabIndex"
                                            v-model="dataDetail"
                                            ref='ref_GL_TransactionAnalysisPageMasterFileSetup_D'
                                        /> -->
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
            Module:"GL",
            DataAnalysis: [],
            getDataStatus: false,
            LookUpParam:'',
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

            M_GL_TransactionAnalysisPageMasterFileSetup_D :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                pagemasterseq: 0,
                formpageno: '',
                sequenceno: 0,
                descs: '',
                updatetable: '',

                // t2status: '',
                // t2code: '',
                // t2tdescs: '',
                // t2mandatoryanalysis: '',
                // t3status: '',
                // t3tcode: '',
                // t3tdescs: '',
                // t3mandatoryanalysis: '',
                // t4status: '',
                // t4tcode: '',
                // t4tdescs: '',
                // t4mandatoryanalysis: '',
                // t5status: '',
                // t5tcode: '',
                // t5tdescs: '',
                // t5mandatoryanalysis: '',
                // t6status: '',
                // t6tcode: '',
                // t6tdescs: '',
                // t6mandatoryanalysis: '',
                // t7status: '',
                // t7tcode: '',
                // t7tdescs: '',
                // t7mandatoryanalysis: '',
                // t8status: '',
                // t8tcode: '',
                // t8tdescs: '',
                // t8mandatoryanalysis: '',
                // t9status: '',
                // t9tcode: '',
                // t9tdescs: '',
                // t9mandatoryanalysis: '',
                // t10status: '',
                // t10tcode: '',
                // t10tdescs: '',
                // t10mandatoryanalysis: '',
                // t11status: '',
                // t11tcode: '',
                // t11tdescs: '',
                // t11mandatoryanalysis: '',
                // t12status: '',
                // t12tcode: '',
                // t12tdescs: '',
                // t12mandatoryanalysis: '',
                // t13status: '',
                // t13tcode: '',
                // t13tdescs: '',
                // t13mandatoryanalysis: '',
                // t14status: '',
                // t14tcode: '',
                // t14tdescs: '',
                // t14mandatoryanalysis: '',
                // t15status: '',
                // t15tcode: '',
                // t15tdescs: '',
                // t15mandatoryanalysis: '',
                // t16status: '',
                // t16tcode: '',
                // t16tdescs: '',
                // t16mandatoryanalysis: '',
                // t17status: '',
                // t17tcode: '',
                // t17tdescs: '',
                // t17mandatoryanalysis: '',
                // t18status: '',
                // t18tcode: '',
                // t18tdescs: '',
                // t18mandatoryanalysis: '',
                // t19status: '',
                // t19tcode: '',
                // t19tdescs: '',
                // t19mandatoryanalysis: '',
                // t20status: '',
                // t20tcode: '',
                // t20tdescs: '',
                // t20mandatoryanalysis: '',
                // t21status: '',
                // t21tcode: '',
                // t21tdescs: '',
                // t21mandatoryanalysis: '',
                // t22status: '',
                // t22tcode: '',
                // t22tdescs: '',
                // t22mandatoryanalysis: '',
                // t23status: '',
                // t23tcode: '',
                // t23tdescs: '',
                // t23mandatoryanalysis: '',
                // t24status: '',
                // t24tcode: '',
                // t24tdescs: '',
                // t24mandatoryanalysis: '',
                // t25status: '',
                // t25tcode: '',
                // t25tdescs: '',
                // t25mandatoryanalysis: '',
                // t26status: '',
                // t26tcode: '',
                // t26tdescs: '',
                // t26mandatoryanalysis: '',
                // t27status: '',
                // t27tcode: '',
                // t27tdescs: '',
                // t27mandatoryanalysis: '',
                // t28status: '',
                // t28tcode: '',
                // t28tdescs: '',
                // t28mandatoryanalysis: '',
                // t29status: '',
                // t29tcode: '',
                // t29tdescs: '',
                // t29mandatoryanalysis: '',
                // t30status: '',
                // t30tcode: '',
                // t30tdescs: '',
                // t30mandatoryanalysis: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                controlsequenceno: 0,
                rowid: 0,
                subportfolioname: ''
                    }
            ,
            PI_subportfoliocd: { 
                dataLookUp: { 
                    LookUpCd: 'GetSubPortfolioCd'    , 
                    ColumnDB: 'SubPortfolioCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'subportfoliocd', 
                cLabel: 'SubPortfolio Code', 
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
                cDisplayColumn: 'SubPortfolioCd,Name' ,
            }, 
            PI_formpageno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLPageOrder'    , 
                    ColumnDB: 'PageOrder'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'formpageno', 
                cLabel: 'Page Order No', 
                cKey: false, 
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
                cDisplayColumn: 'PageOrder,QueryName' ,
            }, 
            PI_descs: { 
                cValidate :'', 
                cName: 'descs', 
                cLabel: 'Description', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_updatetable: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTableName'    , 
                    ColumnDB: 'name'   , 
                    InitialWhere: ""   , 
                    ParamWhere: '',
                    OrderBy: 'name ASC'  
                        }, 
                cValidate :'', 
                cName: 'updatetable', 
                cLabel: 'Update Table', 
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
                cDisplayColumn: 'name' ,
            }, 

			PTAnalysis: {
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cPageMasterSeq: this.data.PageMasterSeq,
                cFormPageNo: this.data.PageOrder
            },
            dataDetail: [],
            // PI_grid: {
            //     propList: {
            //         initialWhere:"",
            //         LineNo: 2,
            //         PageLevel: this.PageLevel,
            //         TabIndex: this.TabIndex, 
            //         OrderBy: "OTrxAnalysisCategory ASC", 
            //         SourceField: '', 
            //         ParamView: '' 
            //     },
            //     cDisplayColumn: 'Descs,Status,Mandatory,Code,TDescs',
            //     cTotalColumn: '',
            //     showCheckBoxDelete: false,
            //     comp: [                    
            //         // {
            //         //     slot: 'Descs',
            //         //     compType: 'ABSTextBoxOnly',
            //         //     cIsAlwaysShow: false,
            //         //     cValidate :'', 
            //         //     cName: 'Descs', 
            //         //     cLabel: '', 
            //         //     cLabelSize: 4, 
            //         //     cOrder: 0, 
            //         //     cKey: false, 
            //         //     cType: 'decimal',
            //         //     cVisible: true, 
            //         //     cProtect: false, 
            //         //     cPageLevel: this.PageLevel, 
            //         //     cTabIndex: this.TabIndex, 
            //         //     cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
            //         //     cRowDisable: []  
            //         // }
            //         {
            //             slot: 'Status',
            //             compType: 'ABSinputRadioButtonOnly',
            //             cValidate :'', 
            //             cName: 'status', 
            //             cId: 'rbstatus', 
            //             cRadioOptions: [{ text: 'No', value: 'N' },{ text: 'Yes', value: 'Y' },{ text: 'Code', value: 'C' },{ text: 'Master', value: 'M' },], 
            //             cRadioDefaultOption: 'N', 
            //             cLabel:'', 
            //             cLabelSize: 4, 
            //             cOrder: 31, 
            //             cProtect: false, 
            //             cVisible:  true, 
            //             cPageLevel: this.PageLevel, 
            //             cTabIndex: this.TabIndex, 
            //             cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
            //             cHideRowColumnCSS: true
            //         },
            //         {
            //             slot: 'Mandatory',
            //             compType: 'ABSinputRadioButtonOnly',
            //             cValidate :'', 
            //             cName: 'mandatory', 
            //             cId: 'rbmandatory', 
            //             cRadioOptions: [{ text: 'No', value: 'N' },{ text: 'Yes', value: 'Y' }], 
            //             cRadioDefaultOption: 'N', 
            //             cLabel:'', 
            //             cLabelSize: 4, 
            //             cOrder: 31, 
            //             cProtect: false, 
            //             cVisible:  true, 
            //             cPageLevel: this.PageLevel, 
            //             cTabIndex: this.TabIndex, 
            //             cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
            //             cHideRowColumnCSS: true
            //         },
            //         {
            //             slot: 'Code',
            //             compType: 'ABSInputSelectListOnly',
            //             dataLookUp: { 
            //                 LookUpCd: 'getSysColumn'    , 
            //                 ColumnDB: 'name'   , 
            //                 InitialWhere: ""   , 
            //                 ParamWhere: '',
            //                 OrderBy: 'name ASC'  
            //                     }, 
            //             cValidate :'', 
            //             cName: 'code', 
            //             cLabel: '', 
            //             cKey: false, 
            //             cLabelSize: 4, 
            //             cOrder: 0, 
            //             cTriggered: false, 
            //             cDefault: '', 
            //             cProtect: false, 
            //             cVisible:  true, 
            //             cAsync:  false, 
            //             cFilter: true, 
            //             cPageLevel: this.PageLevel, 
            //             cTabIndex: this.TabIndex, 
            //             cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
            //             cStatic: false, 
            //             cOption: [], 
            //             // cMasterUrl: '' ,
            //             cDisplayColumn: 'name' ,
            //         },
            //         {
            //             slot: 'TDescs',
            //             compType: 'ABSInputSelectListOnly',
            //             dataLookUp: { 
            //                 LookUpCd: 'getSysColumn'    , 
            //                 ColumnDB: 'name'   , 
            //                 InitialWhere: ""   , 
            //                 ParamWhere: '',
            //                 OrderBy: 'name ASC'  
            //                     }, 
            //             cValidate :'', 
            //             cName: 'tdescs', 
            //             cLabel: '', 
            //             cKey: false, 
            //             cLabelSize: 4, 
            //             cOrder: 0, 
            //             cTriggered: false, 
            //             cDefault: '', 
            //             cProtect: false, 
            //             cVisible:  true, 
            //             cAsync:  false, 
            //             cFilter: true, 
            //             cPageLevel: this.PageLevel, 
            //             cTabIndex: this.TabIndex, 
            //             cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
            //             cStatic: false, 
            //             cOption: [], 
            //             // cMasterUrl: '' ,
            //             cDisplayColumn: 'name' ,
            //         },
            //     ]
            // }         
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
        GetT(){
            var param = {
                OptionFunctionCd: "getT",
                ModuleCd: this.Module,                
            }

          this.FnDynamicFunction(param)
            .then(ress => {
                if(ress == null) return
                this.DataAnalysis = ress               
                
                // this.$store.commit('setStatusLoader', true)
                for (var x = 0; x < ress.length; x ++) {
                // for (let x = 2; x <= 30; x++) {                
                    if (this.getDataStatus) {
                        // this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+ress[x].OTrxAnalysisCategory+'status'] = ress[x] ? ress[x] : ''
                        // this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+ress[x].OTrxAnalysisCategory+'tcode'] = ress[x] && ress[x] != '' ? ress[x] : 'Y'
                        // this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+ress[x].OTrxAnalysisCategory+'descs'] = ress[x].TnIndependentAnalysis && ress[x].TnIndependentAnalysis != '' ? ress[x].TnIndependentAnalysis : 'Y'
                        // this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+ress[x].OTrxAnalysisCategory+'mandatoryanalysis'] = ress[x].TnParentTrxAnalysisCategory ? ress[x].TnParentTrxAnalysisCategory : ''
                    }
                    else {
                        this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+ress[x].OTrxAnalysisCategory+'status'] = 'N'
                        this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+ress[x].OTrxAnalysisCategory+'code'] = ''
                        this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+ress[x].OTrxAnalysisCategory+'codeLabel'] = ''
                        this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+ress[x].OTrxAnalysisCategory+'descs'] = ''
                        this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+ress[x].OTrxAnalysisCategory+'descsLabel'] = ''
                        this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+ress[x].OTrxAnalysisCategory+'mandatoryanalysis'] = 'N'
                    }
                }
                this.$store.commit('setStatusLoader', false)
                this.getDataStatus = false
            })
        },
        GetUpdateTableName(){
            var param = {
            OptionFunctionCd: "GetUpdateTableName",
            ModuleCd: this.Module,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            PageMasterSeq: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.pagemasterseq
          }

          this.FnDynamicFunction(param)
            .then(ress => {
                if(ress == null) return
                var data = ress[0]
                
                this.M_GL_TransactionAnalysisPageMasterFileSetup_D.updatetable = data.tablename
                this.M_GL_TransactionAnalysisPageMasterFileSetup_D.updatetableLabel = data.tablename

                this.LookUpParam = "object_id = OBJECT_ID('"+ data.tablename +"')"

                // this.PI_grid.comp[2].dataLookUp.InitialWhere = "object_id = OBJECT_ID('"+ data.tablename +"')"
                // this.PI_grid.comp[3].dataLookUp.InitialWhere = "object_id = OBJECT_ID('"+ data.tablename +"')"
            })

        },
        OnsubportfoliocdChange (data) {
            
        this.$nextTick(() => {
            this.M_GL_TransactionAnalysisPageMasterFileSetup_D.subportfoliocd = data.id
            this.M_GL_TransactionAnalysisPageMasterFileSetup_D.subportfoliocdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{subportfoliocd}
            }
        })
        this.$forceUpdate()
        },
        OnformpagenoChange (data) {
            
        this.$nextTick(() => {
            this.M_GL_TransactionAnalysisPageMasterFileSetup_D.formpageno = data.id
            this.M_GL_TransactionAnalysisPageMasterFileSetup_D.formpagenoLabel = data.label

            this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs = data.QueryName
            if (this.inputStatus != "VIEW") {
//{formpageno}
            }
        })
        this.$forceUpdate()
        },
        OnupdatetableChange (data) {
        this.$nextTick(() => {
            this.M_GL_TransactionAnalysisPageMasterFileSetup_D.updatetable = data.id
            this.M_GL_TransactionAnalysisPageMasterFileSetup_D.updatetableLabel = data.label

            this.LookUpParam = "object_id = OBJECT_ID('"+ data.id +"')"
    console.log(this.LookUpParam)
            if (this.inputStatus != "VIEW") {
//{updatetable}
            }
        })
        this.$forceUpdate()
        },
        OncodeChange(data, selector){
            this.M_GL_TransactionAnalysisPageMasterFileSetup_D[selector] = data.id
            this.M_GL_TransactionAnalysisPageMasterFileSetup_D[selector+'Label'] = data.label
            this.$nextTick(() => {
              if(this.inputStatus != "VIEW"){

              }  
            })
            this.$forceUpdate()
        },
		OndescsChange(data, selector){
            // console.log(data)
            // console.log(selector)
            this.M_GL_TransactionAnalysisPageMasterFileSetup_D[selector] = data.id
            this.M_GL_TransactionAnalysisPageMasterFileSetup_D[selector+'Label'] = data.label
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
            // this.$store.commit('setStatusLoader', false)
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },
		paramFromParent(){
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            // console.log(data)
            this.M_GL_TransactionAnalysisPageMasterFileSetup_D.pagemasterseq = data.PageMasterSeq 
            this.propList.initialWhere =" PageMasterSeq = '" + data.PageMasterSeq + "' "
            this.PI_formpageno.dataLookUp.InitialWhere =  " PageMasterSeq = '" + data.PageMasterSeq + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
            
        },		       
        M_Insert() {            
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.subportfoliocd,
                PageMasterSeq: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.pagemasterseq,
                FormPageNo: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.formpageno == '' || this.M_GL_TransactionAnalysisPageMasterFileSetup_D.formpageno == null ? 'NULL' : this.M_GL_TransactionAnalysisPageMasterFileSetup_D.formpageno ,
                Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                UpdateTable: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.updatetable == '' || this.M_GL_TransactionAnalysisPageMasterFileSetup_D.updatetable == null ? 'NULL' : this.M_GL_TransactionAnalysisPageMasterFileSetup_D.updatetable ,
                UserInput: this.getDataUser().UserId
            }

            for (let index = 2; index <= 30; index++) {
                param['T'+index+'Status'] = this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+index+'status'] ? this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+index+'status'] : ''
                param['T'+index+'Code'] = this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+index+'code'] ? this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+index+'code'] : ''
                param['T'+index+'Descs'] = this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+index+'descs'] ? this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+index+'descs'] : ''
                param['T'+index+'Mandatory'] = this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+index+'mandatoryanalysis'] ? this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+index+'mandatoryanalysis'] : ''                
            }

            //     T2Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t2status,
            //     T3Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t3status,
            //     T4Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t4status,
            //     T5Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t5status,
            //     T6Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t6status,
            //     T7Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t7status,
            //     T8Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t8status,
            //     T9Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t9status,
            //     T10Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t10status,
            //     T11Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t11status,
            //     T12Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t12status,
            //     T13Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t13status,
            //     T14Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t14status,
            //     T15Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t15status,
            //     T16Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t16status,
            //     T17Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t17status,
            //     T18Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t18status,
            //     T19Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t19status,
            //     T20Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t20status,
            //     T21Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t21status,
            //     T22Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t22status,
            //     T23Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t23status,
            //     T24Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t24status,
            //     T25Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t25status,
            //     T26Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t26status,
            //     T27Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t27status,
            //     T28Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t28status,
            //     T29Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t29status,
            //     T30Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t30status,

            //     T2Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t2tcode,
            //     T3Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t3tcode,
            //     T4Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t4tcode,
            //     T5Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t5tcode,
            //     T6Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t6tcode,
            //     T7Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t7tcode,
            //     T8Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t8tcode,
            //     T9Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t9tcode,
            //     T10Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t10tcode,
            //     T11Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t11tcode,
            //     T12Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t12tcode,
            //     T13Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t13tcode,
            //     T14Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t14tcode,
            //     T15Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t15tcode,
            //     T16Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t16tcode,
            //     T17Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t17tcode,
            //     T18Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t18tcode,
            //     T19Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t19tcode,
            //     T20Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t20tcode,
            //     T21Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t21tcode,
            //     T22Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t22tcode,
            //     T23Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t23tcode,
            //     T24Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t24tcode,
            //     T25Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t25tcode,
            //     T26Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t26tcode,
            //     T27Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t27tcode,
            //     T28Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t28tcode,
            //     T29Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t29tcode,
            //     T30Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t30tcode,

            //     T2Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T3Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T4Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T5Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T6Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T7Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T8Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T9Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T10Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T11Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T12Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T13Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T14Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T15Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T16Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T17Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T18Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T19Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T20Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T21Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T22Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T23Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T24Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T25Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T26Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T27Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T28Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T29Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
            //     T30Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,

            //     T2Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t2mandatoryanalysis,
            //     T3Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t3mandatoryanalysis,
            //     T4Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t4mandatoryanalysis,
            //     T5Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t5mandatoryanalysis,
            //     T6Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t6mandatoryanalysis,
            //     T7Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t7mandatoryanalysis,
            //     T8Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t8mandatoryanalysis,
            //     T9Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t9mandatoryanalysis,
            //     T10Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t10mandatoryanalysis,
            //     T11Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t11mandatoryanalysis,
            //     T12Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t12mandatoryanalysis,
            //     T13Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t13mandatoryanalysis,
            //     T14Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t14mandatoryanalysis,
            //     T15Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t15mandatoryanalysis,
            //     T16Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t16mandatoryanalysis,
            //     T17Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t17mandatoryanalysis,
            //     T18Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t18mandatoryanalysis,
            //     T19Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t19mandatoryanalysis,
            //     T20Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t20mandatoryanalysis,
            //     T21Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t21mandatoryanalysis,
            //     T22Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t22mandatoryanalysis,
            //     T23Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t23mandatoryanalysis,
            //     T24Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t24mandatoryanalysis,
            //     T25Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t25mandatoryanalysis,
            //     T26Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t26mandatoryanalysis,
            //     T27Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t27mandatoryanalysis,
            //     T28Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t28mandatoryanalysis,
            //     T29Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t29mandatoryanalysis,
            //     T30Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t30mandatoryanalysis,
                                 
            // }

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
                SubPortfolioCd: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.subportfoliocd,
                PageMasterSeq: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.pagemasterseq,
                SequenceNo: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.sequenceno,
                FormPageNo: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.formpageno == '' || this.M_GL_TransactionAnalysisPageMasterFileSetup_D.formpageno == null ? 'NULL' : this.M_GL_TransactionAnalysisPageMasterFileSetup_D.formpageno ,
                Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                UpdateTable: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.updatetable == '' || this.M_GL_TransactionAnalysisPageMasterFileSetup_D.updatetable == null ? 'NULL' : this.M_GL_TransactionAnalysisPageMasterFileSetup_D.updatetable ,
                
                // T2Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t2status,
                // T2Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t2code,
                // T2Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T2Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t2mandatory,
                // T3Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t3status,
                // T3Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t3code,
                // T3Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T3Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t3mandatory,
                // T4Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t4status,
                // T4Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t4code,
                // T4Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T4Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t4mandatory,
                // T5Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t5status,
                // T5Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t5code,
                // T5Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T5Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t5mandatory,
                // T6Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t6status,
                // T6Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t6code,
                // T6Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T6Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t6mandatory,
                // T7Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t7status,
                // T7Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t7code,
                // T7Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T7Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t7mandatory,
                // T8Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t8status,
                // T8Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t8code,
                // T8Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T8Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t8mandatory,
                // T9Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t9status,
                // T9Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t9code,
                // T9Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T9Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t9mandatory,
                // T10Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t10status,
                // T10Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t10code,
                // T10Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T10Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t10mandatory,
                // T11Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t11status,
                // T11Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t11code,
                // T11Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T11Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t11mandatory,
                // T12Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t12status,
                // T12Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t12code,
                // T12Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T12Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t12mandatory,
                // T13Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t13status,
                // T13Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t13code,
                // T13Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T13Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t13mandatory,
                // T14Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t14status,
                // T14Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t14code,
                // T14Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T14Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t14mandatory,
                // T15Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t15status,
                // T15Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t15code,
                // T15Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T15Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t15mandatory,
                // T16Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t16status,
                // T16Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t16code,
                // T16Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T16Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t16mandatory,
                // T17Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t17status,
                // T17Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t17code,
                // T17Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T17Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t17mandatory,
                // T18Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t18status,
                // T18Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t18code,
                // T18Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T18Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t18mandatory,
                // T19Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t19status,
                // T19Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t19code,
                // T19Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T19Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t19mandatory,
                // T20Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t20status,
                // T20Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t20code,
                // T20Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T20Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t20mandatory,
                // T21Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t21status,
                // T21Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t21code,
                // T21Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T21Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t21mandatory,
                // T22Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t22status,
                // T22Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t22code,
                // T22Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T22Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t22mandatory,
                // T23Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t23status,
                // T23Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t23code,
                // T23Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T23Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t23mandatory,
                // T24Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t24status,
                // T24Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t24code,
                // T24Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T24Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t24mandatory,
                // T25Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t25status,
                // T25Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t25code,
                // T25Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T25Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t25mandatory,
                // T26Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t26status,
                // T26Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t26code,
                // T26Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T26Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t26mandatory,
                // T27Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t27status,
                // T27Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t27code,
                // T27Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T27Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t27mandatory,
                // T28Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t28status,
                // T28Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t28code,
                // T28Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T28Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t28mandatory,
                // T29Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t29status,
                // T29Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t29code,
                // T29Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T29Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t29mandatory,
                // T30Status: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t30status,
                // T30Code: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t30code,
                // T30Descs: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.descs,
                // T30Mandatory: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.t30mandatory,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_GL_TransactionAnalysisPageMasterFileSetup_D.lastupdatestamp                
            }

            for (let index = 2; index <= 30; index++) {
                param['T'+index+'Status'] = this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+index+'status'] ? this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+index+'status'] : ''
                param['T'+index+'Code'] = this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+index+'code'] ? this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+index+'code'] : ''
                param['T'+index+'Descs'] = this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+index+'descs'] ? this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+index+'descs'] : ''
                param['T'+index+'Mandatory'] = this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+index+'mandatoryanalysis'] ? this.M_GL_TransactionAnalysisPageMasterFileSetup_D['t'+index+'mandatoryanalysis'] : ''                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_TransactionAnalysisPageMasterFileSetup_D = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                pagemasterseq: 0,
                formpageno: '',
                sequenceno: 0,
                descs: '',
                updatetable: '',

                // t2status: '',
                // t2code: '',
                // t2tdescs: '',
                // t2mandatoryanalysis: '',
                // t3status: '',
                // t3tcode: '',
                // t3tdescs: '',
                // t3mandatoryanalysis: '',
                // t4status: '',
                // t4tcode: '',
                // t4tdescs: '',
                // t4mandatoryanalysis: '',
                // t5status: '',
                // t5tcode: '',
                // t5tdescs: '',
                // t5mandatoryanalysis: '',
                // t6status: '',
                // t6tcode: '',
                // t6tdescs: '',
                // t6mandatoryanalysis: '',
                // t7status: '',
                // t7tcode: '',
                // t7tdescs: '',
                // t7mandatoryanalysis: '',
                // t8status: '',
                // t8tcode: '',
                // t8tdescs: '',
                // t8mandatoryanalysis: '',
                // t9status: '',
                // t9tcode: '',
                // t9tdescs: '',
                // t9mandatoryanalysis: '',
                // t10status: '',
                // t10tcode: '',
                // t10tdescs: '',
                // t10mandatoryanalysis: '',
                // t11status: '',
                // t11tcode: '',
                // t11tdescs: '',
                // t11mandatoryanalysis: '',
                // t12status: '',
                // t12tcode: '',
                // t12tdescs: '',
                // t12mandatoryanalysis: '',
                // t13status: '',
                // t13tcode: '',
                // t13tdescs: '',
                // t13mandatoryanalysis: '',
                // t14status: '',
                // t14tcode: '',
                // t14tdescs: '',
                // t14mandatoryanalysis: '',
                // t15status: '',
                // t15tcode: '',
                // t15tdescs: '',
                // t15mandatoryanalysis: '',
                // t16status: '',
                // t16tcode: '',
                // t16tdescs: '',
                // t16mandatoryanalysis: '',
                // t17status: '',
                // t17tcode: '',
                // t17tdescs: '',
                // t17mandatoryanalysis: '',
                // t18status: '',
                // t18tcode: '',
                // t18tdescs: '',
                // t18mandatoryanalysis: '',
                // t19status: '',
                // t19tcode: '',
                // t19tdescs: '',
                // t19mandatoryanalysis: '',
                // t20status: '',
                // t20tcode: '',
                // t20tdescs: '',
                // t20mandatoryanalysis: '',
                // t21status: '',
                // t21tcode: '',
                // t21tdescs: '',
                // t21mandatoryanalysis: '',
                // t22status: '',
                // t22tcode: '',
                // t22tdescs: '',
                // t22mandatoryanalysis: '',
                // t23status: '',
                // t23tcode: '',
                // t23tdescs: '',
                // t23mandatoryanalysis: '',
                // t24status: '',
                // t24tcode: '',
                // t24tdescs: '',
                // t24mandatoryanalysis: '',
                // t25status: '',
                // t25tcode: '',
                // t25tdescs: '',
                // t25mandatoryanalysis: '',
                // t26status: '',
                // t26tcode: '',
                // t26tdescs: '',
                // t26mandatoryanalysis: '',
                // t27status: '',
                // t27tcode: '',
                // t27tdescs: '',
                // t27mandatoryanalysis: '',
                // t28status: '',
                // t28tcode: '',
                // t28tdescs: '',
                // t28mandatoryanalysis: '',
                // t29status: '',
                // t29tcode: '',
                // t29tdescs: '',
                // t29mandatoryanalysis: '',
                // t30status: '',
                // t30tcode: '',
                // t30tdescs: '',
                // t30mandatoryanalysis: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                controlsequenceno: 0,
                rowid: 0,
                subportfolioname: ''
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_GL_TransactionAnalysisPageMasterFileSetup_D.pagemasterseq = data.PageMasterSeq 
            // this.GetUpdateTableName()
            this.GetT()

            this.$refs.ref_subportfoliocd.focus()


        },
        M_Edit(){
            let data = this.$store.getters.GetPage1Data
            this.M_GL_TransactionAnalysisPageMasterFileSetup_D.pagemasterseq = data.PageMasterSeq
            // this.GetUpdateTableName()

            this.$refs.ref_subportfoliocd.focus()
        },
        M_Delete(dt){           
            var data = this.FormToABSList().getRowSelected()  
          var dataDelete = []
          
          data.forEach((value) => {
            //   console.log(value)
            
            dataDelete.push({
                PageMasterSeq: value.PageMasterSeq,
                SubPortfolioCd: value.SubPortfolio,
                FormPageNo: value.FormPageNo,
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
            // console.log(record)
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                pagemasterseq: record.PageMasterSeq,
                formpageno: record.FormPageNo,
                subportfoliocd: record.SubPortfolio,
                sequenceno: record.SequenceNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) {
                    this.$store.commit('setStatusLoader', false)
                    return
                }
                if(response.Data == null) {
                    this.$store.commit('setStatusLoader', false)
                    return
                }
                if(response.Data.length < 1) {
                    this.$store.commit('setStatusLoader', false)
                    return
                }

                // if (response.Data.length < 1) return
                var data = response.Data[0]
                // console.log(data)
this.M_GL_TransactionAnalysisPageMasterFileSetup_D = {
                subportfoliocd: data.subportfoliocd,
                pagemasterseq: data.pagemasterseq,
                formpageno: data.formpageno,
                sequenceno: data.sequenceno,
                descs: data.descs,
                updatetable: data.updatetable,
                t2status: data.t2status,
                t2code: data.t2tcode,
                t2codeLabel: data.t2tcode,
                t2descs: data.t2tdescs,
                t2descsLabel: data.t2tdescs,
                t2mandatoryanalysis: data.t2mandatoryanalysis,
                t3status: data.t3status,
                t3code: data.t3tcode,
                t3codeLabel: data.t3tcode,
                t3descs: data.t3tdescs,
                t3descsLabel: data.t3tdescs,
                t3mandatoryanalysis: data.t3mandatoryanalysis,
                t4status: data.t4status,
                t4code: data.t4tcode,
                t4codeLabel: data.t4tcode,
                t4descs: data.t4tdescs,
                t4descsLabel: data.t4tdescs,
                t4mandatoryanalysis: data.t4mandatoryanalysis,
                t5status: data.t5status,
                t5code: data.t5tcode,
                t5codeLabel: data.t5tcode,
                t5descs: data.t5tdescs,
                t5descsLabel: data.t5tdescs,
                t5mandatoryanalysis: data.t5mandatoryanalysis,
                t6status: data.t6status,
                t6code: data.t6tcode,
                t6codeLabel: data.t6tcode,
                t6descs: data.t6tdescs,
                t6descsLabel: data.t6tdescs,
                t6mandatoryanalysis: data.t6mandatoryanalysis,
                t7status: data.t7status,
                t7code: data.t7tcode,
                t7codeLabel: data.t7tcode,
                t7descs: data.t7tdescs,
                t7descsLabel: data.t7tdescs,
                t7mandatoryanalysis: data.t7mandatoryanalysis,
                t8status: data.t8status,
                t8code: data.t8tcode,
                t8codeLabel: data.t8tcode,
                t8descs: data.t8tdescs,
                t8descsLabel: data.t8tdescs,
                t8mandatoryanalysis: data.t8mandatoryanalysis,
                t9status: data.t9status,
                t9code: data.t9tcode,
                t9codeLabel: data.t9tcode,
                t9descs: data.t9tdescs,
                t9descsLabel: data.t9tdescs,
                t9mandatoryanalysis: data.t9mandatoryanalysis,
                t10status: data.t10status,
                t10code: data.t10tcode,
                t10codeLabel: data.t10tcode,
                t10descs: data.t10tdescs,
                t10descsLabel: data.t10tdescs,
                t10mandatoryanalysis: data.t10mandatoryanalysis,
                t11status: data.t11status,
                t11code: data.t11tcode,
                t11codeLabel: data.t11tcode,
                t11descs: data.t11tdescs,
                t11descsLabel: data.t11tdescs,
                t11mandatoryanalysis: data.t11mandatoryanalysis,
                t12status: data.t12status,
                t12code: data.t12tcode,
                t12codeLabel: data.t12tcode,
                t12descs: data.t12tdescs,
                t12descsLabel: data.t12tdescs,
                t12mandatoryanalysis: data.t12mandatoryanalysis,
                t13status: data.t13status,
                t13code: data.t13tcode,
                t13codeLabel: data.t13tcode,
                t13descs: data.t13tdescs,
                t13descsLabel: data.t13tdescs,
                t13mandatoryanalysis: data.t13mandatoryanalysis,
                t14status: data.t14status,
                t14code: data.t14tcode,
                t14codeLabel: data.t14tcode,
                t14descs: data.t14tdescs,
                t14descsLabel: data.t14tdescs,
                t14mandatoryanalysis: data.t14mandatoryanalysis,
                t15status: data.t15status,
                t15code: data.t15tcode,
                t15codeLabel: data.t15tcode,
                t15descs: data.t15tdescs,
                t15descsLabel: data.t15tdescs,
                t15mandatoryanalysis: data.t15mandatoryanalysis,
                t16status: data.t16status,
                t16code: data.t16tcode,
                t16codeLabel: data.t16tcode,
                t16descs: data.t16tdescs,
                t16descsLabel: data.t16tdescs,
                t16mandatoryanalysis: data.t16mandatoryanalysis,
                t17status: data.t17status,
                t17code: data.t17tcode,
                t17codeLabel: data.t17tcode,
                t17descs: data.t17tdescs,
                t17descsLabel: data.t17tdescs,
                t17mandatoryanalysis: data.t17mandatoryanalysis,
                t18status: data.t18status,
                t18code: data.t18tcode,
                t18codeLabel: data.t18tcode,
                t18descs: data.t18tdescs,
                t18descsLabel: data.t18tdescs,
                t18mandatoryanalysis: data.t18mandatoryanalysis,
                t19status: data.t19status,
                t19code: data.t19tcode,
                t19codeLabel: data.t19tcode,
                t19descs: data.t19tdescs,
                t19descsLabel: data.t19tdescs,
                t19mandatoryanalysis: data.t19mandatoryanalysis,
                t20status: data.t20status,
                t20code: data.t20tcode,
                t20codeLabel: data.t20tcode,
                t20descs: data.t20tdescs,
                t20descsLabel: data.t20tdescs,
                t20mandatoryanalysis: data.t20mandatoryanalysis,
                t21status: data.t21status,
                t21code: data.t21tcode,
                t21codeLabel: data.t21tcode,
                t21descs: data.t21tdescs,
                t21descsLabel: data.t21tdescs,
                t21mandatoryanalysis: data.t21mandatoryanalysis,
                t22status: data.t22status,
                t22code: data.t22tcode,
                t22codeLabel: data.t22tcode,
                t22descs: data.t22tdescs,
                t22descsLabel: data.t22tdescs,
                t22mandatoryanalysis: data.t22mandatoryanalysis,
                t23status: data.t23status,
                t23code: data.t23tcode,
                t23codeLabel: data.t23tcode,
                t23descs: data.t23tdescs,
                t23descsLabel: data.t23tdescs,
                t23mandatoryanalysis: data.t23mandatoryanalysis,
                t24status: data.t24status,
                t24code: data.t24tcode,
                t24codeLabel: data.t24tcode,
                t24descs: data.t24tdescs,
                t24descsLabel: data.t24tdescs,
                t24mandatoryanalysis: data.t24mandatoryanalysis,
                t25status: data.t25status,
                t25code: data.t25tcode,
                t25codeLabel: data.t25tcode,
                t25descs: data.t25tdescs,
                t25descsLabel: data.t25tdescs,
                t25mandatoryanalysis: data.t25mandatoryanalysis,
                t26status: data.t26status,
                t26code: data.t26tcode,
                t26codeLabel: data.t26tcode,
                t26descs: data.t26tdescs,
                t26descsLabel: data.t26tdescs,
                t26mandatoryanalysis: data.t26mandatoryanalysis,
                t27status: data.t27status,
                t27code: data.t27tcode,
                t27codeLabel: data.t27tcode,
                t27descs: data.t27tdescs,
                t27descsLabel: data.t27tdescs,
                t27mandatoryanalysis: data.t27mandatoryanalysis,
                t28status: data.t28status,
                t28code: data.t28tcode,
                t28codeLabel: data.t28tcode,
                t28descs: data.t28tdescs,
                t28descsLabel: data.t28tdescs,
                t28mandatoryanalysis: data.t28mandatoryanalysis,
                t29status: data.t29status,
                t29code: data.t29tcode,
                t29codeLabel: data.t29tcode,
                t29descs: data.t29tdescs,
                t29descsLabel: data.t29tdescs,
                t29mandatoryanalysis: data.t29mandatoryanalysis,
                t30status: data.t30status,
                t30code: data.t30tcode,
                t30codeLabel: data.t30tcode,
                t30descs: data.t30tdescs,
                t30descsLabel: data.t30tdescs,
                t30mandatoryanalysis: data.t30mandatoryanalysis,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                controlsequenceno: data.controlsequenceno,
                rowid: data.rowid,
                subportfolioname: data.subportfolioname
                    }
                 

                this.M_GL_TransactionAnalysisPageMasterFileSetup_D.subportfoliocdLabel = this.M_GL_TransactionAnalysisPageMasterFileSetup_D.subportfoliocd != null ? data.subportfoliocd + this.separator + data.subportfolioname :'' 
                this.M_GL_TransactionAnalysisPageMasterFileSetup_D.formpagenoLabel = this.M_GL_TransactionAnalysisPageMasterFileSetup_D.formpageno != null ? data.formpageno  :'' 
                this.M_GL_TransactionAnalysisPageMasterFileSetup_D.updatetableLabel = this.M_GL_TransactionAnalysisPageMasterFileSetup_D.updatetable != null ? data.updatetable  :'' 
                
                this.GetT()
                this.LookUpParam = "object_id = OBJECT_ID('"+ data.updatetable +"')"

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit
                // this.$store.commit('setStatusLoader', false)
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

