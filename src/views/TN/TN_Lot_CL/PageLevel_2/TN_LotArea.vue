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
                                        <ABSinputDateVuex @input="OnstartdateChange" :prop="PI_startdate" v-model="M_TN_LotArea.startdate"  ref="ref_startdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <b-row v-show="err4">
                                                <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> Start Date Must be Greater Then or Equal of Effective Date </label></b-col>
                                            </b-row>                                            
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnenddateChange" :prop="PI_enddate" v-model="M_TN_LotArea.enddate"  ref="ref_enddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <b-row v-show="err5">
                                                <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> Start Date Must be Greater Then or Equal of Start Date </label></b-col>
                                            </b-row>                                            
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OngrossareaChange" :prop="PI_grossarea" v-model="M_TN_LotArea.grossarea"  ref="ref_grossarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <b-row v-show="err1">
                                                <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> Gross Area Must be Greater Then or Equal of Semi Gross Area </label></b-col>
                                            </b-row>
                                            <b-row v-show="err2">
                                                <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> Gross Area Must be Greater Then or Equal of Net Area</label></b-col>
                                            </b-row>
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnsemigrossareaChange" :prop="PI_semigrossarea" v-model="M_TN_LotArea.semigrossarea"  ref="ref_semigrossarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6" v-show="err3">
                                            <b-row v-show="err3">
                                                <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> Semi Gross Area Must be Greater Then or Equal of Net Area </label></b-col>
                                            </b-row>                                            
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnnetareaChange" :prop="PI_netarea" v-model="M_TN_LotArea.netarea" ref="ref_netarea"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_LotArea.remarks"  ref="ref_remarks" />
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
            // error: false,
            err1: false,
            err2: false,
            err3: false,
            err4: false,
            err5: false,
            propList: {
                initialWhere:"LotNo = '" + this.ValKey + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '', 
                SourceField: '', 
                ParamView: '' 
            },
       
            IEBy: {Input: '', Edit: ''},   			

            M_TN_LotArea :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lotno: '',
                sequenceno: 0,
                startdate: '',
                enddate: '',
                grossarea: '',
                semigrossarea: '',
                netarea: '',
                status: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_startdate: { 
                cValidate :'required', 
                cName: 'startdateee', 
                cLabel: 'Start Date', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_enddate: { 
                cValidate :'required', 
                cName: 'enddateee', 
                cLabel: 'End Date', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_grossarea: { 
                cValidate :'', 
                cName: 'grossareaaa', 
                cLabel: 'Gross Area', 
                cLabelSize: 4, 
                cOrder: 3, 
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
                cValidate :'', 
                cName: 'semigrossareaaa', 
                cLabel: 'Semi Gross Area', 
                cLabelSize: 4, 
                cOrder: 4, 
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
                cValidate :'', 
                cName: 'netareaaa', 
                cLabel: 'Net Area', 
                cLabelSize: 4, 
                cOrder: 5, 
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
                cOrder:6, 
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
            },
            Antenna: ''
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
        OnstartdateChange (value) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                // let data = this.$store.getters.GetPage1Data
                // console.log(this.momentDateFormatting(value, 'DD/MM/YYYY'))
                // console.log(data.EffectiveDate)
                // this.err4 = this.momentDateFormatting(value, 'DD/MM/YYYY') < data.EffectiveDate ? true : false
            }
        })
        this.$forceUpdate()
        },
        OnenddateChange (data) {
            // console.log(this.momentDateFormatting(data, 'DD/MM/YYYY'))
            // console.log(this.momentDateFormatting(this.M_TN_LotArea.startdate, 'DD/MM/YYYY'))
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                // this.err5 = this.momentDateFormatting(data, 'DD/MM/YYYY') < this.momentDateFormatting(this.M_TN_LotArea.startdate, 'DD/MM/YYYY') ? true : false
            }
        })
        this.$forceUpdate()
        },
        OngrossareaChange (data) {
        // this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                this.M_TN_LotArea.semigrossarea = data
                this.M_TN_LotArea.netarea = data

                var gross = parseFloat(this.replaceAllString(data, ',', '', 'number'))
                var semigross = parseFloat(this.replaceAllString(this.M_TN_LotArea.semigrossarea, ',', '', 'number'))
                var netarea = parseFloat(this.replaceAllString(this.M_TN_LotArea.netarea, ',', '', 'number'))

                this.err1 = semigross > gross ? true : false
                this.err2 = netarea > gross ? true : false
            }
        // })
        // this.$forceUpdate()
        },
        OnsemigrossareaChange (data) {
        // this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                var gross = parseFloat(this.replaceAllString(this.M_TN_LotArea.grossarea, ',', '', 'number'))
                var semigross = parseFloat(this.replaceAllString(data, ',', '', 'number'))
                var netarea = parseFloat(this.replaceAllString(this.M_TN_LotArea.netarea, ',', '', 'number'))

                this.err1 = semigross > gross ? true : false
                this.err3 = netarea > semigross ? true : false
            }
        // })
        // this.$forceUpdate()
        },
        OnnetareaChange (data) {
        // this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                var gross = parseFloat(this.replaceAllString(this.M_TN_LotArea.grossarea, ',', '', 'number'))
                var semigross = parseFloat(this.replaceAllString(this.M_TN_LotArea.semigrossarea, ',', '', 'number'))
                var netarea = parseFloat(this.replaceAllString(data, ',', '', 'number'))

                this.err2 = netarea > gross ? true : false
                this.err3 = netarea > semigross ? true : false
            }
        // })
        // this.$forceUpdate()
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
           this.getToolbar().statusFunction[1].disabled = false
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
            // console.log(data)
            this.M_TN_LotArea.lotno = data.LotNo 
            this.getIsAntenna(data.LotNo)
            this.propList.initialWhere = " SubPortfolioCd = '"+this.getDataUser().SubPortfolioCd+"' AND LotNo = '" + data.LotNo + "' "
            if (
                    (data.Status == 'Rented') ||
                    (data.Status == 'Available')
                ) {
                    this.FormType = "List"
                    this.$store.commit('setFormType','List')
                    this.getToolbar().ProcessPS()
                    
                }
                else {
                    this.FormType = "View"
                    this.$store.commit('setFormType','View')
                    this.getToolbar().ProcessPS()
                }
            this.FormToABSList().doGetList('','eb_getList')
        },		       
        M_Insert() {
            if(this.M_TN_LotArea.semigrossarea > this.M_TN_LotArea.grossarea){
                this.err1 = true
                return
            }
            else{
                this.err1 = false
            }
            if(this.M_TN_LotArea.netarea > this.M_TN_LotArea.grossarea){
                this.err2 = true
                return
            }
            else{
                this.err2 = false
            }
            if(this.M_TN_LotArea.netarea > this.M_TN_LotArea.semigrossarea){
                this.err3 = true
                return
            }
            else{
                this.err3 = false
            }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                LotNo: this.M_TN_LotArea.lotno,
                StartDate: this.M_TN_LotArea.startdate == '' || this.M_TN_LotArea.startdate == null ? 'NULL' : this.M_TN_LotArea.startdate ,
                EndDate: this.M_TN_LotArea.enddate == '' || this.M_TN_LotArea.enddate == null ? 'NULL' : this.M_TN_LotArea.enddate ,
                GrossArea: this.M_TN_LotArea.grossarea ? this.replaceAllString(this.M_TN_LotArea.grossarea,',','','number') : 0 ,
                SemiGrossArea: this.M_TN_LotArea.semigrossarea ? this.replaceAllString(this.M_TN_LotArea.semigrossarea,',','','number') : 0 ,
                NetArea: this.M_TN_LotArea.netarea ? this.replaceAllString(this.M_TN_LotArea.netarea,',','','number') : 0 ,
                Remarks: this.M_TN_LotArea.remarks,
                UserInput: this.getDataUser().UserId                 
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultInsert(response.Message)
            })
        },
        M_Update() {
            if(this.M_TN_LotArea.semigrossarea > this.M_TN_LotArea.grossarea){
                this.err1 = true
                return
            }
            else{
                this.err1 = false
            }
            if(this.M_TN_LotArea.netarea > this.M_TN_LotArea.grossarea){
                this.err2 = true
                return
            }
            else{
                this.err2 = false
            }
            if(this.M_TN_LotArea.netarea > this.M_TN_LotArea.semigrossarea){
                this.err3 = true
                return
            }
            else{
                this.err3 = false
            }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                LotNo: this.M_TN_LotArea.lotno,
                SequenceNo: this.M_TN_LotArea.sequenceno,
                StartDate: this.M_TN_LotArea.startdate == '' || this.M_TN_LotArea.startdate == null ? 'NULL' : this.M_TN_LotArea.startdate ,
                EndDate: this.M_TN_LotArea.enddate == '' || this.M_TN_LotArea.enddate == null ? 'NULL' : this.M_TN_LotArea.enddate ,
                GrossArea: this.M_TN_LotArea.grossarea ? this.replaceAllString(this.M_TN_LotArea.grossarea,',','','number') : 0 ,
                SemiGrossArea: this.M_TN_LotArea.semigrossarea ? this.replaceAllString(this.M_TN_LotArea.semigrossarea,',','','number') : 0 ,
                NetArea: this.M_TN_LotArea.netarea ? this.replaceAllString(this.M_TN_LotArea.netarea,',','','number') : 0 ,
                Remarks: this.M_TN_LotArea.remarks,
                UserEdit: this.getDataUser().UserId,
                LastUpdateStamp: this.M_TN_LotArea.lastupdatestamp               
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return
                this.$parent.resultUpdate(response.Message)
            })
        },
		M_ClearForm(){
            this.M_TN_LotArea = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                lotno: '',
                sequenceno: 0,
                startdate: '',
                enddate: '',
                grossarea: '',
                semigrossarea: '',
                netarea: '',
                status: '',
                remarks: '',
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
            this.M_TN_LotArea.lotno = data.LotNo
            // console.log(data)

            const dateString = data.EffectiveDate;
            const changedDate = dateString.replace(/(..)\/(..)\/(....)/, '$3-$2-$1');
            var date1 = this.momentDateFormatting(new Date(changedDate), 'YYYY-MM-DD');

            this.PI_startdate.cValidate = 'required|min_date:' + date1
            this.$refs.ref_startdate.focus()
        },
        M_Edit(){
            let data = this.$store.getters.GetPage1Data
            const dateString = data.EffectiveDate;
            const changedDate = dateString.replace(/(..)\/(..)\/(....)/, '$3-$2-$1');
            var date1 = this.momentDateFormatting(new Date(changedDate), 'YYYY-MM-DD');

            this.PI_startdate.cValidate = 'required|min_date:' + date1 
            this.$refs.ref_grossarea.focus()
        },
        M_Delete(dt){
            var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                    SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                    LotNo: value.LotNo,
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
,                SubportfolioCd: this.getDataUser().SubPortfolioCd,
                sequenceno: record.SequenceNo,
                lotno: record.LotNo				
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                if(response == null) return

                var data = response.Data[0]
this.M_TN_LotArea = {
                subportfoliocd: data.subportfoliocd,
                lotno: data.lotno,
                sequenceno: this.isCurrency(data.sequenceno, this.decimal),
                startdate: data.startdate,
                enddate: data.enddate,
                grossarea: this.isCurrency(data.grossarea, this.decimal),
                semigrossarea: this.isCurrency(data.semigrossarea, this.decimal),
                netarea: this.isCurrency(data.netarea, this.decimal),
                status: data.status,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: this.isCurrency(data.rowid, this.decimal)
                    }
                 

  

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        },
		getIsAntenna (LotNo) {
            // console.log(this.DataRowPage1)
            var param = {
                OptionFunctionCd: 'GetIsAntenna',
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubportfolioCd,
                LotNo: LotNo
            }

            this.FnDynamicFunction(param)
            .then(FnOpt2 => {
                // console.log(FnOpt2)
                if (FnOpt2 == null) return
                // this.Antenna = FnOpt2[0].Antenna
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

