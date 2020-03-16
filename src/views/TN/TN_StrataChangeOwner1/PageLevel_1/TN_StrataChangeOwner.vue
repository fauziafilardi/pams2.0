<template>
    <div>
    <ABSListVuex
      :prop = "propList"
      :title = "data.QueryName"
      :hideCheckboxAndGear=true
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
                            <b-row  style="padding-left: 10px; padding-bottom: 10px; !important;">              
                                <b-col md="12" id="col-left"> <!-- table open -->
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnlotnoChange" :prop="PI_lotno" :value="M_TN_StrataChangeOwner.lotno" :label="M_TN_StrataChangeOwner.lotnoLabel" ref="ref_lotno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnchangedateChange" :prop="PI_changedate" v-model="M_TN_StrataChangeOwner.changedate"  ref="ref_changedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnowneridChange" :prop="PI_ownerid" :value="M_TN_StrataChangeOwner.ownerid" :label="M_TN_StrataChangeOwner.owneridLabel" ref="ref_ownerid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnoccupantidChange" :prop="PI_occupantid" :value="M_TN_StrataChangeOwner.occupantid" :label="M_TN_StrataChangeOwner.occupantidLabel" ref="ref_occupantid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_StrataChangeOwner.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
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
                initialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ISNULL(OwnerID, OccupantId) IS NOT NULL AND StrataStatus = 'Y' AND Status = 'Y' AND GETDATE() BETWEEN StartDate AND EndDate ",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
            IEBy: {Input: '', Edit: ''},

            M_TN_StrataChangeOwner :{
                lotno: '',
                changedate: '',
                ownerid: '',
                owneriddescs: '',
                occupantid: '',
                name: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                rowid: 0,
                remarks: ''
                    }
            ,					
            PI_lotno: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupLotNo'    , 
                    ColumnDB: 'LotNo'   , 
                    InitialWhere: "SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "' AND ISNULL(OwnerID, OccupantId) IS NOT NULL AND StrataBillingStatus = 'Y'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'lotno', 
                cLabel: 'Lot No', 
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
                cDisplayColumn: 'LotNo' ,
            }, 
            PI_changedate: { 
                cValidate :'required', 
                cName: 'changedate', 
                cLabel: 'Date', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_ownerid: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupOwnerId'    , 
                    ColumnDB: 'ContactId'   , 
                    InitialWhere: "ContactId <> ''"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'ownerid', 
                cLabel: 'Owner ID', 
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
                cDisplayColumn: 'ContactId,Name' ,
            }, 
            PI_occupantid: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupOccupantId'    , 
                    ColumnDB: 'ContactId'   , 
                    InitialWhere: "ContactId <> ''"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'occupantid', 
                cLabel: 'Occupant ID', 
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
                cDisplayColumn: 'ContactId,Name' ,
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder: 5, 
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
        OnlotnoChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataChangeOwner.lotno = data.id
            this.M_TN_StrataChangeOwner.lotnoLabel = data.label
            if (this.inputStatus != "VIEW") {
//{lotno}
            }
        })
        this.$forceUpdate()
        },
        OnchangedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{changedate}
            }
        })
        this.$forceUpdate()
        },
        OnowneridChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataChangeOwner.ownerid = data.id
            this.M_TN_StrataChangeOwner.owneridLabel = data.label
            if (this.inputStatus != "VIEW") {
//{ownerid}
            }
        })
        this.$forceUpdate()
        },
        OnoccupantidChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataChangeOwner.occupantid = data.id
            this.M_TN_StrataChangeOwner.occupantidLabel = data.label
            if (this.inputStatus != "VIEW") {
//{occupantid}
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
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                LotNo: this.M_TN_StrataChangeOwner.lotno == '' || this.M_TN_StrataChangeOwner.lotno == null ? 'NULL' : this.M_TN_StrataChangeOwner.lotno ,
                ChangeDate: this.M_TN_StrataChangeOwner.changedate == '' || this.M_TN_StrataChangeOwner.changedate == null ? 'NULL' : this.M_TN_StrataChangeOwner.changedate ,
                ChangeType: this.M_TN_StrataChangeOwner.changetype,
                OwnerID: this.M_TN_StrataChangeOwner.ownerid == '' || this.M_TN_StrataChangeOwner.ownerid == null ? 'NULL' : this.M_TN_StrataChangeOwner.ownerid ,
                OccupantID: this.M_TN_StrataChangeOwner.occupantid == '' || this.M_TN_StrataChangeOwner.occupantid == null ? 'NULL' : this.M_TN_StrataChangeOwner.occupantid ,
                UserInput: this.getDataUser().UserId                 
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                
                this.$parent.resultUpdate(response.Message)
            })
        },
        M_Update() {
            // console.log(this.M_TN_StrataChangeOwner)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                LotNo: this.M_TN_StrataChangeOwner.lotno == '' || this.M_TN_StrataChangeOwner.lotno == null ? 'NULL' : this.M_TN_StrataChangeOwner.lotno ,
                ChangeDate: this.M_TN_StrataChangeOwner.changedate == '' || this.M_TN_StrataChangeOwner.changedate == null ? 'NULL' : this.M_TN_StrataChangeOwner.changedate ,
                ChangeType: 'O',
                OwnerID: this.M_TN_StrataChangeOwner.ownerid == '' || this.M_TN_StrataChangeOwner.ownerid == null ? 'NULL' : this.M_TN_StrataChangeOwner.ownerid ,
                OccupantID: this.M_TN_StrataChangeOwner.occupantid == '' || this.M_TN_StrataChangeOwner.occupantid == null ? 'NULL' : this.M_TN_StrataChangeOwner.occupantid ,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_StrataChangeOwner.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.$parent.resultUpdate(response.Message)
            })
        },
		M_ClearForm(){
            this.M_TN_StrataChangeOwner = {
                lotno: '',
                changedate: '',
                ownerid: '',
                owneriddescs: '',
                occupantid: '',
                name: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                rowid: 0,
                remarks: ''
                    }
            		
		},
        M_New(){
			this.$refs.ref_lotno.focus()
        },
        M_Edit(){
            this.$refs.ref_changedate.focus()
        },
        M_Delete(dt){       
            var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {

				
				dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    SequenceNo: value.SequenceNo,
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
            // console.log(record)
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,                
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                lotno: record.LotNo,
                changedate: record.ChangeDate
            }

            this.postEncode(this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                // console.log(data)
this.M_TN_StrataChangeOwner = {
                lotno: data.lotno,
                changedate: data.changedate,
                changetype: data.changetype,
                ownerid: data.ownerid,
                owneriddescs: data.owneriddescs,
                occupantid: data.occupantid,
                name: data.name,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                subportfoliocd: data.subportfoliocd,
                rowid: data.rowid,
                remarks: data.remarks
                    }
                 

                this.M_TN_StrataChangeOwner.lotnoLabel = this.M_TN_StrataChangeOwner.lotno != null && this.M_TN_StrataChangeOwner.lotno != '' ? data.lotno  :'' 
                this.M_TN_StrataChangeOwner.owneridLabel = this.M_TN_StrataChangeOwner.ownerid != null && this.M_TN_StrataChangeOwner.ownerid != '' ? data.ownerid + this.separator + data.owneriddescs :'' 
                this.M_TN_StrataChangeOwner.occupantidLabel = this.M_TN_StrataChangeOwner.occupantid != null && this.M_TN_StrataChangeOwner.occupantid != '' ? data.occupantid + this.separator + data.name :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit
// console.log(data)
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
