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
                                        <ABSinputTextVuex :prop="PI_documenttype" v-model="M_CM_DocAuthorizeUser.documenttype"  ref="ref_documenttype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_CM_DocAuthorizeUser.descs"  ref="ref_descs"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="Onauthorize1idChange" :prop="PI_authorize1id" :value="M_CM_DocAuthorizeUser.authorize1id" :label="M_CM_DocAuthorizeUser.authorize1idLabel" ref="ref_authorize1id"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_authorize1name" v-model="M_CM_DocAuthorizeUser.authorize1name"  ref="ref_authorize1name"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_authorize1position" v-model="M_CM_DocAuthorizeUser.authorize1position"  ref="ref_authorize1position"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_authorize1reffno" v-model="M_CM_DocAuthorizeUser.authorize1reffno"  ref="ref_authorize1reffno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="Onauthorize2idChange" :prop="PI_authorize2id" :value="M_CM_DocAuthorizeUser.authorize2id" :label="M_CM_DocAuthorizeUser.authorize2idLabel" ref="ref_authorize2id"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_authorize2name" v-model="M_CM_DocAuthorizeUser.authorize2name"  ref="ref_authorize2name"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_authorize2position" v-model="M_CM_DocAuthorizeUser.authorize2position"  ref="ref_authorize2position"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_authorize2reffno" v-model="M_CM_DocAuthorizeUser.authorize2reffno"  ref="ref_authorize2reffno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="Onauthorize3idChange" :prop="PI_authorize3id" :value="M_CM_DocAuthorizeUser.authorize3id" :label="M_CM_DocAuthorizeUser.authorize3idLabel" ref="ref_authorize3id"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_authorize3name" v-model="M_CM_DocAuthorizeUser.authorize3name"  ref="ref_authorize3name"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_authorize3position" v-model="M_CM_DocAuthorizeUser.authorize3position"  ref="ref_authorize3position"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_authorize3reffno" v-model="M_CM_DocAuthorizeUser.authorize3reffno"  ref="ref_authorize3reffno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="Onfooterremarks1Change" :prop="PI_footerremarks1" v-model="M_CM_DocAuthorizeUser.footerremarks1"  ref="ref_footerremarks1" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="Onfooterremarks2Change" :prop="PI_footerremarks2" v-model="M_CM_DocAuthorizeUser.footerremarks2"  ref="ref_footerremarks2" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="Onfooterremarks3Change" :prop="PI_footerremarks3" v-model="M_CM_DocAuthorizeUser.footerremarks3"  ref="ref_footerremarks3" />
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
			Module:"CM",
            propList: {
                initialWhere:"SubPortfolioCd = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_CM_DocAuthorizeUser :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                documenttype: '',
                descs: '',
                authorize1id: '',
                authorize1name: '',
                authorize1position: '',
                handphone1: '',
                authorize1reffno: '',
                footerremarks1: '',
                authorize2id: '',
                authorize2name: '',
                authorize2position: '',
                handphone2: '',
                authorize2reffno: '',
                footerremarks2: '',
                authorize3id: '',
                authorize3name: '',
                authorize3position: '',
                handphone3: '',
                authorize3reffno: '',
                footerremarks3: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_documenttype: { 
                cValidate :'required|max:5', 
                cName: 'documenttttype', 
                cLabel: 'Document Type', 
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
            PI_descs: { 
                cValidate :'max:50', 
                cName: 'deeescs', 
                cLabel: 'Description', 
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
            PI_authorize1id: { 
                dataLookUp: { 
                    LookUpCd: 'GetAuthorize1ID'    , 
                    ColumnDB: 'Authorize1ID'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'authorize1id', 
                cLabel: 'Authorize User I', 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'UserId,UserName' ,
            }, 
            PI_authorize1name: { 
                cValidate :'', 
                cName: 'authorize1name', 
                cLabel: 'Authorize Name I', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_authorize1position: { 
                cValidate :'', 
                cName: 'authorize1position', 
                cLabel: 'Authorize Position I', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_authorize1reffno: { 
                cValidate :'', 
                cName: 'authorize1reffno', 
                cLabel: 'Authorize Reference No I', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_authorize2id: { 
                dataLookUp: { 
                    LookUpCd: 'GetAuthorize1ID'    , 
                    ColumnDB: 'Authorize1ID'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'authorize2id', 
                cLabel: 'Authorize User II', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 7, 
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
                cDisplayColumn: 'UserId,UserName' ,
            }, 
            PI_authorize2name: { 
                cValidate :'', 
                cName: 'authorize2name', 
                cLabel: 'Authorize Name II', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_authorize2position: { 
                cValidate :'', 
                cName: 'authorize2position', 
                cLabel: 'Authorize Position II', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_authorize2reffno: { 
                cValidate :'', 
                cName: 'authorize2reffno', 
                cLabel: 'Authorize Reference No II', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_authorize3id: { 
                dataLookUp: { 
                    LookUpCd: 'GetAuthorize1ID'    , 
                    ColumnDB: 'Authorize1ID'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'authorize3id', 
                cLabel: 'Authorize User III', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 11, 
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
                cDisplayColumn: 'UserId,UserName' ,
            }, 
            PI_authorize3name: { 
                cValidate :'', 
                cName: 'authorize3name', 
                cLabel: 'Authorize Name III', 
                cLabelSize: 4, 
                cOrder: 12, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_authorize3position: { 
                cValidate :'', 
                cName: 'authorize3position', 
                cLabel: 'Authorize Position III', 
                cLabelSize: 4, 
                cOrder: 13, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_authorize3reffno: { 
                cValidate :'', 
                cName: 'authorize3reffno', 
                cLabel: 'Authorize Reference No III', 
                cLabelSize: 4, 
                cOrder: 14, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_footerremarks1: { 
                cValidate :'', 
                cName:'footerremarks1', 
                cLabel:'Footer Remarks I', 
                cLabelSize: 4, 
                cOrder:15, 
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
            PI_footerremarks2: { 
                cValidate :'', 
                cName:'footerremarks2', 
                cLabel:'Footer Remarks II', 
                cLabelSize: 4, 
                cOrder:16, 
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
            PI_footerremarks3: { 
                cValidate :'', 
                cName:'footerremarks3', 
                cLabel:'Footer Remarks III', 
                cLabelSize: 4, 
                cOrder:17, 
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
        Onauthorize1idChange (data) {
        if (this.M_CM_DocAuthorizeUser.authorize1id == data.id) return
        this.$nextTick(() => {
            this.M_CM_DocAuthorizeUser.authorize1id = data.id
            this.M_CM_DocAuthorizeUser.authorize1idLabel = data.label
            if (this.inputStatus != "VIEW") {
        this.M_CM_DocAuthorizeUser.authorize1name = data.UserName
        this.M_CM_DocAuthorizeUser.authorize1position = data.Position
        this.M_CM_DocAuthorizeUser.authorize1reffno = data.ReferenceNo

            }
        })
        this.$forceUpdate()
        },
        Onauthorize2idChange (data) {
        if (this.M_CM_DocAuthorizeUser.authorize2id == data.id) return
        this.$nextTick(() => {
            this.M_CM_DocAuthorizeUser.authorize2id = data.id
            this.M_CM_DocAuthorizeUser.authorize2idLabel = data.label
            if (this.inputStatus != "VIEW") {
        this.M_CM_DocAuthorizeUser.authorize2name = data.UserName
        this.M_CM_DocAuthorizeUser.authorize2position = data.Position
        this.M_CM_DocAuthorizeUser.authorize2reffno = data.ReferenceNo

            }
        })
        this.$forceUpdate()
        },
        Onauthorize3idChange (data) {
        if (this.M_CM_DocAuthorizeUser.authorize3id == data.id) return
        this.$nextTick(() => {
            this.M_CM_DocAuthorizeUser.authorize3id = data.id
            this.M_CM_DocAuthorizeUser.authorize3idLabel = data.label
            if (this.inputStatus != "VIEW") {
        this.M_CM_DocAuthorizeUser.authorize3name = data.UserName
        this.M_CM_DocAuthorizeUser.authorize3position = data.Position
        this.M_CM_DocAuthorizeUser.authorize3reffno = data.ReferenceNo

            }
        })
        this.$forceUpdate()
        },
        Onfooterremarks1Change (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{footerremarks1}
            }
        })
        this.$forceUpdate()
        },
        Onfooterremarks2Change (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{footerremarks2}
            }
        })
        this.$forceUpdate()
        },
        Onfooterremarks3Change (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{footerremarks3}
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
            this.$parent.showForm = false
			
            let data = this.$store.getters.GetPage1Data
            this.M_CM_DocAuthorizeUser.subportfoliocd = data.SubPortfolioCd 
            this.propList.initialWhere =" SubPortfolioCd = '" + data.SubPortfolioCd + "' "
        

            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.M_CM_DocAuthorizeUser.subportfoliocd,
                DocumentType: this.M_CM_DocAuthorizeUser.documenttype,
                Descs: this.M_CM_DocAuthorizeUser.descs,
                Authorize1ID: this.M_CM_DocAuthorizeUser.authorize1id == '' || this.M_CM_DocAuthorizeUser.authorize1id == null ? 'NULL' : this.M_CM_DocAuthorizeUser.authorize1id ,
                Authorize2ID: this.M_CM_DocAuthorizeUser.authorize2id == '' || this.M_CM_DocAuthorizeUser.authorize2id == null ? 'NULL' : this.M_CM_DocAuthorizeUser.authorize2id ,
                Authorize3ID: this.M_CM_DocAuthorizeUser.authorize3id == '' || this.M_CM_DocAuthorizeUser.authorize3id == null ? 'NULL' : this.M_CM_DocAuthorizeUser.authorize3id ,
                FooterRemarks1: this.M_CM_DocAuthorizeUser.footerremarks1,
                FooterRemarks2: this.M_CM_DocAuthorizeUser.footerremarks2,
                FooterRemarks3: this.M_CM_DocAuthorizeUser.footerremarks3,
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
                Descs: this.M_CM_DocAuthorizeUser.descs,
                Authorize1ID: this.M_CM_DocAuthorizeUser.authorize1id == '' || this.M_CM_DocAuthorizeUser.authorize1id == null ? 'NULL' : this.M_CM_DocAuthorizeUser.authorize1id ,
                Authorize2ID: this.M_CM_DocAuthorizeUser.authorize2id == '' || this.M_CM_DocAuthorizeUser.authorize2id == null ? 'NULL' : this.M_CM_DocAuthorizeUser.authorize2id ,
                Authorize3ID: this.M_CM_DocAuthorizeUser.authorize3id == '' || this.M_CM_DocAuthorizeUser.authorize3id == null ? 'NULL' : this.M_CM_DocAuthorizeUser.authorize3id ,
                FooterRemarks1: this.M_CM_DocAuthorizeUser.footerremarks1,
                FooterRemarks2: this.M_CM_DocAuthorizeUser.footerremarks2,
                FooterRemarks3: this.M_CM_DocAuthorizeUser.footerremarks3,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_CM_DocAuthorizeUser.lastupdatestamp,
                DocumentType: this.M_CM_DocAuthorizeUser.documenttype,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_CM_DocAuthorizeUser = {
                subportfoliocd: '',
                documenttype: '',
                descs: '',
                authorize1id: '',
                authorize1name: '',
                authorize1position: '',
                handphone1: '',
                authorize1reffno: '',
                footerremarks1: '',
                authorize2id: '',
                authorize2name: '',
                authorize2position: '',
                handphone2: '',
                authorize2reffno: '',
                footerremarks2: '',
                authorize3id: '',
                authorize3name: '',
                authorize3position: '',
                handphone3: '',
                authorize3reffno: '',
                footerremarks3: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_CM_DocAuthorizeUser.subportfoliocd = data.SubPortfolioCd 

            this.$refs.ref_documenttype.focus()
        },
        M_Edit(){
          this.$refs.ref_descs.focus()
        },
        M_Delete(dt){           

        var data = this.FormToABSList().getRowSelected()  
        var dataDelete = []

        
        data.forEach((value) => {
          dataDelete.push({
            DocumentType: value.DocumentType,
            LastUpdateStamp: value.LastUpdateStamp,
            SubPortfolioCd: value,SubPortfolioCd,
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
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                documenttype: record.DocumentType,
                subportfoliocd: record.SubPortfolioCd				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_CM_DocAuthorizeUser = {
                subportfoliocd: data.subportfoliocd,
                documenttype: data.documenttype,
                descs: data.descs,
                authorize1id: data.authorize1id,
                authorize1name: data.authorize1name,
                authorize1position: data.authorize1position,
                handphone1: data.handphone1,
                authorize1reffno: data.authorize1reffno,
                footerremarks1: data.footerremarks1,
                authorize2id: data.authorize2id,
                authorize2name: data.authorize2name,
                authorize2position: data.authorize2position,
                handphone2: data.handphone2,
                authorize2reffno: data.authorize2reffno,
                footerremarks2: data.footerremarks2,
                authorize3id: data.authorize3id,
                authorize3name: data.authorize3name,
                authorize3position: data.authorize3position,
                handphone3: data.handphone3,
                authorize3reffno: data.authorize3reffno,
                footerremarks3: data.footerremarks3,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_CM_DocAuthorizeUser.authorize1idLabel = this.M_CM_DocAuthorizeUser.authorize1id != null ? data.authorize1id + this.separator  :'' 
                this.M_CM_DocAuthorizeUser.authorize2idLabel = this.M_CM_DocAuthorizeUser.authorize2id != null ? data.authorize2id + this.separator  :'' 
                this.M_CM_DocAuthorizeUser.authorize3idLabel = this.M_CM_DocAuthorizeUser.authorize3id != null ? data.authorize3id + this.separator  :'' 
  

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

