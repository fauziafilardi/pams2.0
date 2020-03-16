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
                                        <ABSCompute :prop="PI_lotno" v-model="M_TN_StrataOwnerAndBillingSetup.lotno"  ref="ref_lotno" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnowneridChange" :prop="PI_ownerid" :value="M_TN_StrataOwnerAndBillingSetup.ownerid" :label="M_TN_StrataOwnerAndBillingSetup.owneridLabel" ref="ref_ownerid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnoccupantidChange" :prop="PI_occupantid" :value="M_TN_StrataOwnerAndBillingSetup.occupantid" :label="M_TN_StrataOwnerAndBillingSetup.occupantidLabel" ref="ref_occupantid"/>
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
                initialWhere: "SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_StrataOwnerAndBillingSetup :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lotno: '',
                lottype: '',
                blockcd: '',
                floorcd: '',
                descs: '',
                address1: '',
                address2: '',
                address3: '',
                address4: '',
                citycd: '',
                zipcode: '',
                lotthemecd: '',
                lotclasssequenceno: 0,
                lotcategorysequenceno: 0,
                ownerid: '',
                debtorcd: '',
                occupantid: '',
                ownername: '',
                occupantname: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_lotno: { 
                cLabel: 'Lot No', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_ownerid: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupOwnerId'    , 
                    ColumnDB: 'ContactId'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'ownerid', 
                cLabel: 'Owner ID ', 
                cKey: false, 
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
                // cMasterUrl: '' ,
                cDisplayColumn: 'ContactId,Name' ,
            }, 
            PI_occupantid: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupOccupantId'    , 
                    ColumnDB: 'ContactId'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'occupantid', 
                cLabel: 'Occupant ID', 
                cKey: false, 
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
                // cMasterUrl: '' ,
                cDisplayColumn: 'ContactId,Name' ,
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
        OnowneridChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataOwnerAndBillingSetup.ownerid = data.id
            this.M_TN_StrataOwnerAndBillingSetup.owneridLabel = data.label
            if (this.inputStatus != "VIEW") {
//{ownerid}
            }
        })
        this.$forceUpdate()
        },
        OnoccupantidChange (data) {
        this.$nextTick(() => {
            this.M_TN_StrataOwnerAndBillingSetup.occupantid = data.id
            this.M_TN_StrataOwnerAndBillingSetup.occupantidLabel = data.label
            if (this.inputStatus != "VIEW") {
//{occupantid}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
           this.getToolbar().statusFunction[0].disabled = true
        //    this.getToolbar().statusFunction[1].disabled = true
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
            // console.log(record)
          if(record.OwnerID == null || record.OwnerID == ''){
            this.$store.commit('setEditStatus', false)
            
          }else{
            this.$store.commit('setEditStatus', true)
          }
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },		
		paramFromParent(){
        },		
        M_Post(dt){
        },
        M_Insert() {
        },
        M_Update() {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                LotNo: this.M_TN_StrataOwnerAndBillingSetup.lotno,
                OwnerID: this.M_TN_StrataOwnerAndBillingSetup.ownerid == '' || this.M_TN_StrataOwnerAndBillingSetup.ownerid == null ? 'NULL' : this.M_TN_StrataOwnerAndBillingSetup.ownerid ,
                OccupantID: this.M_TN_StrataOwnerAndBillingSetup.occupantid == '' || this.M_TN_StrataOwnerAndBillingSetup.occupantid == null ? 'NULL' : this.M_TN_StrataOwnerAndBillingSetup.occupantid ,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_StrataOwnerAndBillingSetup.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_StrataOwnerAndBillingSetup = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lotno: '',
                lottype: '',
                blockcd: '',
                floorcd: '',
                descs: '',
                address1: '',
                address2: '',
                address3: '',
                address4: '',
                citycd: '',
                zipcode: '',
                lotthemecd: '',
                lotclasssequenceno: 0,
                lotcategorysequenceno: 0,
                ownerid: '',
                debtorcd: '',
                occupantid: '',
                ownername: '',
                occupantname: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0
                    }
        },
        M_New(){
        },
        M_Edit(){
        },
        M_Delete(dt){
        },
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                lotno: record.LotNo
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_TN_StrataOwnerAndBillingSetup = {
                subportfoliocd: data.subportfoliocd,
                lotno: data.lotno,
                lottype: data.lottype,
                blockcd: data.blockcd,
                floorcd: data.floorcd,
                descs: data.descs,
                address1: data.address1,
                address2: data.address2,
                address3: data.address3,
                address4: data.address4,
                citycd: data.citycd,
                zipcode: data.zipcode,
                lotthemecd: data.lotthemecd,
                lotclasssequenceno: data.lotclasssequenceno,
                lotcategorysequenceno: data.lotcategorysequenceno,
                ownerid: data.ownerid,
                debtorcd: data.debtorcd,
                occupantid: data.occupantid,
                ownername: data.ownername,
                occupantname: data.occupantname,
                userinput: data.userinput,
                useredit: data.useredit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_TN_StrataOwnerAndBillingSetup.owneridLabel = this.M_TN_StrataOwnerAndBillingSetup.ownerid != null && this.M_TN_StrataOwnerAndBillingSetup.ownerid != '' ? data.ownerid + this.separator + data.ownername :'' 
                this.M_TN_StrataOwnerAndBillingSetup.occupantidLabel = this.M_TN_StrataOwnerAndBillingSetup.occupantid != null && this.M_TN_StrataOwnerAndBillingSetup.occupantid != '' ? data.occupantid + this.separator + data.occupantname :'' 
         

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

