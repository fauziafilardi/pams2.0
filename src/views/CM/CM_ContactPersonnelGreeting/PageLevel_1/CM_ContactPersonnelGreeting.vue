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
						<!-- <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex"> -->
                            <b-row style="padding-left:10px;">					
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_contactid" v-model="M_CM_ContactPersonnelGreeting.contactid"  ref="ref_contactid" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSCompute :prop="PI_contactpersonnelid" v-model="M_CM_ContactPersonnelGreeting.contactpersonnelid"  ref="ref_contactpersonnelid" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->                            
                                <b-col md="12" id="col-left"> <!-- table open -->
                                <b-row style="padding-left:10px;">					
                                <b-col md="12" id="col-left"> <!-- table open -->
                                   <b-row style="padding-left:10px;">					
                                <b-col md="12" id="col-left">                                    
                                    <b-row style="padding-top:10px; padding-right: 10px; padding-left: 25px; padding-bottom: 10px; !important;">
                                        <!-- Subportfolio : {{subportfolio}} -->
                                    </b-row>
                                    <b-row>
                                    <b-col md="4" style="padding-right: 15px !important;">
                                        <input
                                            v-model="search"
                                            type="text"
                                            class="form-control text-field-form"
                                            style="margin-left: 20px !important;"
                                            placeholder="Search..."
                                            autofocus
                                            autocomplete="off"
                                            @keyup.enter="onSearchEnter"
                                            :disabled="ButtonDisabled"
                                            ref="ref_search"
                                            >
                                    </b-col>
                                    </b-row>
                                    <b-row style="padding-top:10px; padding-right: 10px; padding-left: 20px; padding-bottom: 10px; !important;">                                        
                                      <b-col md="4">
                                        All Greeting
                                        <ABSMultiSelect
                                            v-model="leftData"
                                            :options="leftDataOptions"
                                            size=10
                                            class="selectCustom"
                                        />
                                      </b-col>
                                      <b-col md="1" style="padding: 120px 8px;">
                                        <b-button id="satu" :disabled="ButtonDisabled" size="sm" variant="primary" @click="moveAllToRight" style="width:50px">
                                            &gt;&gt;
                                        </b-button>
                                        <br>
                                        <b-button :disabled="ButtonDisabled" size="sm" variant="primary" @click="moveToRight" style="width:50px;margin-top:10px;">
                                            &gt;
                                        </b-button>
                                        <br>
                                        <b-button :disabled="ButtonDisabled" size="sm" variant="primary" @click="moveToLeft" style="width:50px;margin-top:10px;">
                                            &lt;
                                        </b-button>
                                        <br>
                                        <b-button :disabled="ButtonDisabled" size="sm" variant="primary" @click="moveAllToLeft" style="width:50px;margin-top:10px;">
                                            &lt;&lt;
                                        </b-button>
                                      </b-col>
                                      <b-col md="4">
                                        Selected Greeting
                                        <ABSMultiSelect
                                            v-model="rightData"
                                            :options="rightDataOptions"
                                            size=10
                                            class="selectCustom"
                                        />
                                      </b-col>
                                    </b-row>
                                </b-col>
                  
							</b-row>
                                </b-col> <!-- table close -->
							</b-row>

                                </b-col> <!-- table close -->
                                
                  
							</b-row>
							<ABSTAnalysis :prop="PTAnalysis" />
						<!-- </b-form> -->
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
        Module:"CM",
        subportfolio: '',
            allDataOptions: [],
            leftData: [],
            leftDataOptions: [],
            rightData: [],
            rightDataOptions: [],
            search: '',
            DataRow: [],
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
            rowSelected: '',

            M_CM_ContactPersonnelGreeting :{
                contactid: '',
                fullname: '',
                contactpersonnelid: '',
                name: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_contactid: { 
                cLabel: 'Contact ID', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
            }, 
            PI_contactpersonnelid: { 
                cLabel: 'Contact Personnel ID', 
                cLabelSize: 4, 
                cValue: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
    watch : {
        leftDataOptions (newData, oldData) {
            this.tempLeftFilter = newData
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
	},
	GetDataBy1(){
		return this.$store.getters.GetPage1GetDataBy
	},
    ButtonDisabled() {
        if (this.inputStatus != 'EDIT') {
            return true
        }
        else {
            return false
        }
    }
  },
    methods: {
        onSearchEnter () {  
            if (this.ButtonDisabled) return
            // this.getAllColumn(this.search)
            this.getRightColumn(this.search)

        },
        getDataList (search) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                UserId: this.getDataUser().UserId,
                PortfolioCd: this.getDataUser().PortfolioCd,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                LineNo: 0,
                InitialWhere: "GreetingCd like '%" + search + "%' OR Descs like '%" + search + "%'",
                ParamView: '',
                SortField: 'GreetingCd'
            }
            this.postEncode( this.getUrlDataList(), param )
            .then( response => {
                this.$store.commit('setStatusLoader', false)
                if (response == null) return
                this.allDataOptions = response.Data
                // console.log(this.allDataOptions)
                this.leftDataOptions = []
                var status = false
                for (var x = 0; x < this.allDataOptions.length; x++) {
                    status = false
                    for (var y = 0; y < this.rightDataOptions.length; y++) {
                    // console.log(this.allDataOptions[x].greetingcd,this.rightDataOptions[y].value)
                        if (this.allDataOptions[x].greetingcd == this.rightDataOptions[y].value) {  
                            status = true
                            break
                        }
                    }
                    if (status == false) {
                        this.leftDataOptions.push({
                            value: this.allDataOptions[x].greetingcd,                             
                            key: this.allDataOptions[x].descs
                            // , 
                            // RowId: this.allDataOptions[x].rowid
                        })
                    }
                }
                this.$forceUpdate()
            })
        },
        getRightColumn (search, ContactID, ContactPersonnelID) {
            
            this.$store.commit('setStatusLoader', true)           
            
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 2,  
                ContactID: ContactID,
                ContactPersonnelID: ContactPersonnelID
            }

            this.postEncode( this.getUrlById(), param )
            .then( response => {
                if (response == null) return
                var data = response.Data
                this.rightDataOptions = []
                for (var x = 0; x < data.length; x++) {
                    this.rightDataOptions.push({
                        value: data[x].greetingcd,                        
                        key: data[x].descs,
                        // RowId: data[x].greetingcd,
                    })
                }
                this.getDataList(search)
            })
        },
        moveAllToRight () {
            for (var x = 0; x < this.leftDataOptions.length; x++) {
                var data = this.leftDataOptions[x]
                this.rightDataOptions.push({
                    value: data.value,
                    key: data.key,
                    RowId: data.RowId,
                })
            }
            this.leftDataOptions = []
            this.$forceUpdate()
        },
        moveToRight () {
            for (var x = 0; x < this.leftData.length; x++) {
                var index = -1
                var data
                for (var y = 0; y < this.leftDataOptions.length; y++) {
                    if (this.leftData[x] == this.leftDataOptions[y].value) {
                        data = this.leftDataOptions[y]
                        index = y
                    }
                }
                this.rightDataOptions.push({
                    value: data.value,
                    key: data.key,
                    RowId: data.RowId,
                })
                this.leftDataOptions.splice(index, 1)
            }
            this.$forceUpdate()
        },
        moveToLeft () {
            for (var x = 0; x < this.rightData.length; x++) {
                var index = -1
                var data
                for (var y = 0; y < this.rightDataOptions.length; y++) {
                    if (this.rightData[x] == this.rightDataOptions[y].value) {
                        data = this.rightDataOptions[y]
                        index = y
                    }
                }
                this.leftDataOptions.push({
                    value: data.value,
                    key: data.key,
                    RowId: data.RowId,
                })
                this.rightDataOptions.splice(index, 1)
            }
            this.$forceUpdate()
        },
        moveAllToLeft () {
            for (var x = 0; x < this.rightDataOptions.length; x++) {
                var data = this.rightDataOptions[x]
                this.leftDataOptions.push({
                    value: data.value,
                    key: data.key,
                    RowId: data.RowId,
                })
            }
            this.rightDataOptions = []
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
            this.rowClicked()
            this.search = ''

		},		
		doDoubleClick(){
        },
        rowClicked (record, index) {            
            this.getRightColumn('', record.ContactId, record.ContactPersonnelID)
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },		
		paramFromParent(){
        },		
        M_Post(dt){
        },
        M_Insert() {
            // alert('insert')
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
        },
        M_Update() {
            // alert('update')
            var dataPost = []
            var param2 = null
            var param3 = []
            

            // for (let x = 0 ; x < this.leftDataOptions.length ; x ++) {
            var param1 = {
                    _Method_: 'DELETE',
                    _LineNo_: this.$parent.data.PageOrder,
                    SubportfoliCd: this.getDataUser().SubPortfolioCd,
                    ContactID: this.M_CM_ContactPersonnelGreeting.contactid,
                    ContactPersonnelID: this.M_CM_ContactPersonnelGreeting.contactpersonnelid
                }

                // param1.push({
                //     _Method_: 'DELETE',
                //     _LineNo_: this.$parent.data.PageOrder,
                //     SubportfoliCd: this.getDataUser().SubPortfolioCd,
                //     ContactID: this.M_CM_ContactPersonnelGreeting.contactid,
                //     ContactPersonnelID: this.M_CM_ContactPersonnelGreeting.contactpersonnelid
                // })
            
            
                if (this.rowSelected.length == 0){
                    // param2.push({
                    //     _Method_: 'UPDATE',
                    //     _LineNo_: this.$parent.data.PageOrder,
                    //     ContactID: this.M_CM_ContactPersonnelGreeting.contactid,
                    //     ContactPersonnelID: this.M_CM_ContactPersonnelGreeting.contactpersonnelid,
                    //     GreetingCd: '',
                    //     UserEdit: this.getDataUser().UserId
                    // })
                    param2 = {
                        _Method_: 'UPDATE',
                        _LineNo_: this.$parent.data.PageOrder,
                        ContactID: this.M_CM_ContactPersonnelGreeting.contactid,
                        ContactPersonnelID: this.M_CM_ContactPersonnelGreeting.contactpersonnelid,
                        GreetingCd: '',
                        UserEdit: this.getDataUser().UserId
                    }
                }else{
                    //  param2.push({
                    //     _Method_: 'UPDATE2',
                    //     _LineNo_: this.$parent.data.PageOrder,
                    //     ContactID: this.M_CM_ContactPersonnelGreeting.contactid,
                    //     ContactPersonnelID: this.M_CM_ContactPersonnelGreeting.contactpersonnelid,
                    //     GreetingCd: this.M_CM_ContactPersonnelGreeting.greetingcd,
                    //     UserEdit: this.getDataUser().UserId
                    // })
                    param2 = {
                        _Method_: 'UPDATE2',
                        _LineNo_: this.$parent.data.PageOrder,
                        ContactID: this.M_CM_ContactPersonnelGreeting.contactid,
                        ContactPersonnelID: this.M_CM_ContactPersonnelGreeting.contactpersonnelid,
                        GreetingCd: this.M_CM_ContactPersonnelGreeting.greetingcd,
                        UserEdit: this.getDataUser().UserId
                    }
                }

            // for (let x = 0 ; x < this.rightDataOptions.length ; x ++) {
            //     param2.push({
            //         _Method_: 'UPDATE2',
            //         _LineNo_: this.$parent.data.PageOrder,
            //         CONTACTID: this.M_CM_ContactPersonnelGreeting.contactid,
            //         CONTACTPERSONNELID: this.M_CM_ContactPersonnelGreeting.contactpersonnelid,
            //         GREETINGCD: this.rightDataOptions[x].value,
            //         UserEdit: this.getDataUser().UserId
            //     })
            // }

            for (let x = 0 ; x < this.rightDataOptions.length ; x ++) {
                param3.push({
                    _Method_: 'UPDATE2',
                    _LineNo_: this.$parent.data.PageOrder,
                    CONTACTID: this.M_CM_ContactPersonnelGreeting.contactid,
                    CONTACTPERSONNELID: this.M_CM_ContactPersonnelGreeting.contactpersonnelid,
                    GREETINGCD: this.rightDataOptions[x].value,
                    UserEdit: this.getDataUser().UserId
                })
            }



            dataPost.push({
                A_Delete: param1,
                B_Update: param2
            })

            if (param3.length > 0) {
                dataPost[0].C_Looping = param3
            }



            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                Data: dataPost,
                search: this.search = ''
            }
                
            this.postJSONMulti (this.getUrlProsesDataPostMulti(), param)
            .then(response => {
                if (response == null) return
                // this.alertSuccess('Success...!')
                this.$parent.resultInsert('Success...!')
            })
            // if (this.rowSelected.length == 0){
            //     var param = {			
            //         OptionSeq: this.getOptionSeq().OptionSeq,
            //         LineNo: this.$parent.data.PageOrder,
            //         ContactId: this.M_CM_ContactPersonnelGreeting.contactid,
            //         ContactPersonnelID: this.M_CM_ContactPersonnelGreeting.contactpersonnelid,
            //         GreetingCd: this.M_CM_ContactPersonnelGreeting.greetingcd,
            //         UserEdit: this.getDataUser().UserId                 
            //     }

            //     this.postJSON(this.getUrlUpdate(), param)
            //     .then((response) => {
            //         if(response == null) return

            //         //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
            //         this.$parent.resultUpdate(response.Message)
                    
            //     })
            // }else{
            //     var param = {			
            //         OptionSeq: this.getOptionSeq().OptionSeq,
            //         LineNo: this.$parent.data.PageOrder,
            //         ContactId: this.M_CM_ContactPersonnelGreeting.contactid,
            //         ContactPersonnelID: this.M_CM_ContactPersonnelGreeting.contactpersonnelid,
            //         GreetingCd: this.M_CM_ContactPersonnelGreeting.greetingcd,
            //         UserEdit: this.getDataUser().UserId                 
            //     }

            //     this.postJSON(this.getUrlUpdate(), param)
            //     .then((response) => {
            //         if(response == null) return

            //         //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
            //         this.$parent.resultUpdate(response.Message)
                    
            //     })
            // }
        },
        M_ClearForm(){
            this.M_CM_ContactPersonnelGreeting = {
                contactid: '',
                fullname: '',
                contactpersonnelid: '',
                name: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                rowid: 0
                    }
            		
		},
        M_New(){
            this.$refs.ref_search.focus()
        },
        M_Edit(){
            this.$refs.ref_search.focus()
        },
        M_Delete(dt){       
			var data = this.FormToABSList().getRowSelected()  
			var dataDelete = []

			
			data.forEach((value) => {
				dataDelete.push({
                _Message_: ''

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
                LineNo: this.$parent.data.PageOrder,                
                contactid: record.ContactId,
                contactpersonnelid: record.ContactPersonnelID
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_CM_ContactPersonnelGreeting = {
                contactid: data.contactid,
                fullname: data.fullname,
                contactpersonnelid: data.contactpersonnelid,
                name: data.name,
                userinput: data.userinput,
                useredit: data.useredit,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }

                this.M_CM_ContactPersonnelGreeting.contactid = data.contactid + ' - ' + data.name
                
                this.M_CM_ContactPersonnelGreeting.contactpersonnelid = data.contactpersonnelid + ' - ' + data.fullname         

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

