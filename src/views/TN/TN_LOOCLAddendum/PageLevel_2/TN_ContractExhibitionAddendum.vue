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
                                        <ABSinputTextVuex :prop="PI_subject" v-model="M_TN_ContractExhibition.subject"  ref="ref_subject"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateRangeVuex :prop="PI_startdate" :valueFrom="M_TN_ContractExhibition.startdate" :valueTo="M_TN_ContractExhibition.enddate" ref="ref_startdate" @from="MdtRange_startdate" @to="MdtRange_enddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_TN_ContractExhibition.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnblockcdChange" :prop="PI_blockcd" :value="M_TN_ContractExhibition.blockcd" :label="M_TN_ContractExhibition.blockcdLabel" ref="ref_blockcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnfloorcdChange" :prop="PI_floorcd" :value="M_TN_ContractExhibition.floorcd" :label="M_TN_ContractExhibition.floorcdLabel" ref="ref_floorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnsectorcdChange" :prop="PI_sectorcd" :value="M_TN_ContractExhibition.sectorcd" :label="M_TN_ContractExhibition.sectorcdLabel" ref="ref_sectorcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_grossarea" v-model="M_TN_ContractExhibition.grossarea"  ref="ref_grossarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_semigrossarea" v-model="M_TN_ContractExhibition.semigrossarea"  ref="ref_semigrossarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_netarea" v-model="M_TN_ContractExhibition.netarea"  ref="ref_netarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_ContractExhibition.remarks"  ref="ref_remarks" />
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
                initialWhere:"ApplicationNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_ContractExhibition :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                addendumsequenceno: '',
                sequenceno: 0,
                subject: '',
                startdate: '',
                enddate: '',
                referenceno: '',
                blockcd: '',
                floorcd: '',
                sectorcd: '',
                grossarea: '0',
                semigrossarea: '0',
                netarea: '0',
                remarks: '',
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
                floordescs: '',
                sectordescs: '',
                blockdescs: ''
                    }
            ,
            PI_subject: { 
                cValidate :'required|max:150', 
                cName: 'subject', 
                cLabel: 'Subject ', 
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
            PI_startdate: { 
                cValidate :'required', 
                cName: 'startdate', 
                cLabel: 'Date  Period', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_referenceno: { 
                cValidate :'', 
                cName: 'referenceno', 
                cLabel: 'Reference No', 
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
            PI_blockcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNBlock'    , 
                    ColumnDB: 'BlockCd'   , 
                    InitialWhere: "SubportfolioCd='" + this.getDataUser().SubPortfolioCd + "'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'blockcd', 
                cLabel: 'Block ', 
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
                cMasterUrl: 'TN/TN_Block' ,
                cDisplayColumn: 'BlockCd,Descs' ,
            }, 
            PI_floorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNFloor'    , 
                    ColumnDB: 'FloorCd'   , 
                    InitialWhere: "SubportfolioCd='" + this.getDataUser().SubPortfolioCd + "' AND BlockCd = ''"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'floorcd', 
                cLabel: 'Floor ', 
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
                cMasterUrl: 'TN/TN_Block' ,
                cDisplayColumn: 'FloorCd,Descs' ,
            }, 
            PI_sectorcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupTNSector'    , 
                    ColumnDB: 'SectorCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'sectorcd', 
                cLabel: 'Sector', 
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
                cMasterUrl: 'TN/TN_Sector' ,
                cDisplayColumn: 'SectorCd,Descs' ,
            }, 
            PI_grossarea: { 
                cValidate :'required|max:20', 
                cName: 'grossarea', 
                cLabel: 'Gross Area ', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_semigrossarea: { 
                cValidate :'required|max:20', 
                cName: 'semigrossarea', 
                cLabel: 'Semi Gross Area ', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_netarea: { 
                cValidate :'required|max:20', 
                cName: 'netarea', 
                cLabel: 'Net Area ', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cType: 'decimal',
                cDecimal: 2, 
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
                cOrder:11, 
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
        OnblockcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractExhibition.blockcd = data.id
            this.M_TN_ContractExhibition.blockcdLabel = data.label
            if (this.inputStatus != "VIEW") {
                this.PI_floorcd.dataLookUp.InitialWhere = "SubportfolioCd='" + this.getDataUser().SubPortfolioCd + "' AND BlockCd = '" + (data.id ? data.id : '') + "'"
            }
        })
        this.$forceUpdate()
        },
        OnfloorcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractExhibition.floorcd = data.id
            this.M_TN_ContractExhibition.floorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{floorcd}
            }
        })
        this.$forceUpdate()
        },
        OnsectorcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_ContractExhibition.sectorcd = data.id
            this.M_TN_ContractExhibition.sectorcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{sectorcd}
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
            this.M_TN_ContractExhibition.applicationno = data.ApplicationNo 
            this.M_TN_ContractExhibition.addendumsequenceno = data.AddendumSequenceNo
            this.propList.initialWhere =" SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' and ApplicationNo = '" + data.ApplicationNo + "' AND AddendumSequenceNo = '" + data.AddendumSequenceNo + "'"
            
            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCD: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_ContractExhibition.applicationno,
                AddendumSequenceNo: this.M_TN_ContractExhibition.addendumsequenceno,
                Subject: this.M_TN_ContractExhibition.subject,
                StartDate: this.M_TN_ContractExhibition.startdate == '' || this.M_TN_ContractExhibition.startdate == null ? 'NULL' : this.M_TN_ContractExhibition.startdate ,
                EndDate: this.M_TN_ContractExhibition.enddate == '' || this.M_TN_ContractExhibition.enddate == null ? 'NULL' : this.M_TN_ContractExhibition.enddate ,
                ReferenceNo: this.M_TN_ContractExhibition.referenceno,
                BlockCd: this.M_TN_ContractExhibition.blockcd == '' || this.M_TN_ContractExhibition.blockcd == null ? 'NULL' : this.M_TN_ContractExhibition.blockcd ,
                FloorCd: this.M_TN_ContractExhibition.floorcd == '' || this.M_TN_ContractExhibition.floorcd == null ? 'NULL' : this.M_TN_ContractExhibition.floorcd ,
                SectorCd: this.M_TN_ContractExhibition.sectorcd == '' || this.M_TN_ContractExhibition.sectorcd == null ? 'NULL' : this.M_TN_ContractExhibition.sectorcd ,
                GrossArea: this.M_TN_ContractExhibition.grossarea ? this.replaceAllString(this.M_TN_ContractExhibition.grossarea,',','','number') : 0 ,
                SemiGrossArea: this.M_TN_ContractExhibition.semigrossarea ? this.replaceAllString(this.M_TN_ContractExhibition.semigrossarea,',','','number') : 0 ,
                NetArea: this.M_TN_ContractExhibition.netarea ? this.replaceAllString(this.M_TN_ContractExhibition.netarea,',','','number') : 0 ,
                Remarks: this.M_TN_ContractExhibition.remarks,
                UserInput: this.getDataUser().UserId ,
                UserEdit: this.getDataUser().UserId
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultInsert(response.Message)
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCD: this.getDataUser().SubPortfolioCd,
                ApplicationNo: this.M_TN_ContractExhibition.applicationno,
                AddendumSequenceNo: this.M_TN_ContractExhibition.addendumsequenceno,
                SequenceNo: this.M_TN_ContractExhibition.sequenceno,
                Subject: this.M_TN_ContractExhibition.subject,
                StartDate: this.M_TN_ContractExhibition.startdate == '' || this.M_TN_ContractExhibition.startdate == null ? 'NULL' : this.M_TN_ContractExhibition.startdate ,
                EndDate: this.M_TN_ContractExhibition.enddate == '' || this.M_TN_ContractExhibition.enddate == null ? 'NULL' : this.M_TN_ContractExhibition.enddate ,
                ReferenceNo: this.M_TN_ContractExhibition.referenceno,
                BlockCd: this.M_TN_ContractExhibition.blockcd == '' || this.M_TN_ContractExhibition.blockcd == null ? 'NULL' : this.M_TN_ContractExhibition.blockcd ,
                FloorCd: this.M_TN_ContractExhibition.floorcd == '' || this.M_TN_ContractExhibition.floorcd == null ? 'NULL' : this.M_TN_ContractExhibition.floorcd ,
                SectorCd: this.M_TN_ContractExhibition.sectorcd == '' || this.M_TN_ContractExhibition.sectorcd == null ? 'NULL' : this.M_TN_ContractExhibition.sectorcd ,
                GrossArea: this.M_TN_ContractExhibition.grossarea ? this.replaceAllString(this.M_TN_ContractExhibition.grossarea,',','','number') : 0 ,
                SemiGrossArea: this.M_TN_ContractExhibition.semigrossarea ? this.replaceAllString(this.M_TN_ContractExhibition.semigrossarea,',','','number') : 0 ,
                NetArea: this.M_TN_ContractExhibition.netarea ? this.replaceAllString(this.M_TN_ContractExhibition.netarea,',','','number') : 0 ,
                Remarks: this.M_TN_ContractExhibition.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_ContractExhibition.lastupdatestamp
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultUpdate(response.Message)				
            })
        },
		M_ClearForm(){
            this.M_TN_ContractExhibition = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                applicationno: '',
                addendumsequenceno: '',
                sequenceno: 0,
                subject: '',
                startdate: '',
                enddate: '',
                referenceno: '',
                blockcd: '',
                floorcd: '',
                sectorcd: '',
                grossarea: this.isCurrency(0, this.decimal),
                semigrossarea: this.isCurrency(0, this.decimal),
                netarea: this.isCurrency(0, this.decimal),
                remarks: '',
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
                floordescs: '',
                sectordescs: '',
                blockdescs: ''
                    }
            		
		},
        M_New(){
            let data = this.$store.getters.GetPage1Data
            this.M_TN_ContractExhibition.applicationno = data.ApplicationNo
            this.M_TN_ContractExhibition.addendumsequenceno = data.AddendumSequenceNo
        },
        M_Edit(){
        },
        M_Delete(dt){
            var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                    ApplicationNo: this.DataRowPage1.ApplicationNo,
                    AddendumSequenceNo: this.DataRowPage1.AddendumSequenceNo,
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    SequenceNo: value.SequenceNo,
                    LastUpdateStamp: value.LastUpdateStamp,
                    _Message_: "Sequence No " + value.SequenceNo
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
,                SubPortfolioCD: this.getDataUser().SubPortfolioCd,
                ApplicationNo: record.ApplicationNo,
                AddendumSequenceNo: this.DataRowPage1.AddendumSequenceNo,
                SequenceNo: record.SequenceNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_ContractExhibition = {
                subportfoliocd: data.subportfoliocd,
                applicationno: data.applicationno,
                addendumsequenceno: this.DataRowPage1.AddendumSequenceNo,
                sequenceno: record.SequenceNo,
                subject: data.subject,
                startdate: data.startdate,
                enddate: data.enddate,
                referenceno: data.referenceno,
                blockcd: data.blockcd,
                floorcd: data.floorcd,
                sectorcd: data.sectorcd,
                grossarea: this.isCurrency(data.grossarea, this.decimal),
                semigrossarea: this.isCurrency(data.semigrossarea, this.decimal),
                netarea: this.isCurrency(data.netarea, this.decimal),
                remarks: data.remarks,
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
                controlsequenceno: data.controlsequenceno,
                rowid: data.rowid,
                floordescs: data.floordescs,
                sectordescs: data.sectordescs,
                blockdescs: data.blockdescs
                    }
                 

                this.M_TN_ContractExhibition.blockcdLabel = this.M_TN_ContractExhibition.blockcd != null && this.M_TN_ContractExhibition.blockcd != '' ? data.blockcd + this.separator + data.blockdescs :'' 
                this.M_TN_ContractExhibition.floorcdLabel = this.M_TN_ContractExhibition.floorcd != null && this.M_TN_ContractExhibition.floorcd != '' ? data.floorcd + this.separator + data.floordescs :'' 
                this.M_TN_ContractExhibition.sectorcdLabel = this.M_TN_ContractExhibition.sectorcd != null && this.M_TN_ContractExhibition.sectorcd != '' ? data.sectorcd + this.separator + data.sectordescs :'' 
  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,MdtRange_startdate (data) {
            this.M_TN_ContractExhibition.startdate = data
        }
        ,MdtRange_enddate (data) {
            this.M_TN_ContractExhibition.enddate = data
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

