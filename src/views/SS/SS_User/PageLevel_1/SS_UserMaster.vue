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
                                        <ABSinputTextVuex @input="OnuseridChange" :prop="PI_userid" v-model="M_SS_UserMaster.userid"  ref="ref_userid"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputCheckBox @input="OnisinactiveChange" :prop="PI_isinactive" v-model="M_SS_UserMaster.isinactive"  ref="ref_isinactive" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnusergroupChange" :prop="PI_usergroup" :value="M_SS_UserMaster.usergroup" :label="M_SS_UserMaster.usergroupLabel" ref="ref_usergroup" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnusernameChange" :prop="PI_username" v-model="M_SS_UserMaster.username"  ref="ref_username"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnhandphoneChange" :prop="PI_handphone" v-model="M_SS_UserMaster.handphone"  ref="ref_handphone"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnemailChange" :prop="PI_email" v-model="M_SS_UserMaster.email"  ref="ref_email"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelect2 @change="OnuserlevelChange" :prop="PI_userlevel" :value="M_SS_UserMaster.userlevel"  ref="ref_userlevel" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnpositionChange" :prop="PI_position" v-model="M_SS_UserMaster.position"  ref="ref_position"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnreferencenoChange" :prop="PI_referenceno" v-model="M_SS_UserMaster.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnexpireddateChange" :prop="PI_expireddate" v-model="M_SS_UserMaster.expireddate"  ref="ref_expireddate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputPassword @input="OnpasswordChange" :prop="PI_password" v-model="M_SS_UserMaster.password"  ref="ref_password"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputPassword @input="OnconfirmnewpasswordChange" :prop="PI_confirmnewpassword" v-model="M_SS_UserMaster.confirmnewpassword"  ref="ref_confirmnewpassword"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnusertypeChange" :prop="PI_usertype" v-model="M_SS_UserMaster.usertype"  ref="ref_usertype" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnfailedattemptsChange" :prop="PI_failedattempts" v-model="M_SS_UserMaster.failedattempts"  ref="ref_failedattempts"/>
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
            TempPwd: "",	

            M_SS_UserMaster :{
                userid: '',
                usergroup: '',
                usergroupLabel: '',
                username: '',
                password: '',
                email: '',
                userlevel: 'M',
                expireddate: '',
                logindate: '',
                statuslogin: '',
                isinactive: '',
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
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                position: '',
                handphone: '',
                referenceno: '',
                controlsequenceno: 0,
                usertype: 'P',
                failedattempts: 0,
                lastchangepassword: '',
                rowid: 0,
                groupdescs: '',
                confirmnewpassword: ''
                    }
            ,
            PI_userid: { 
                cValidate :'required|max:10', 
                cName: 'userid', 
                cLabel: 'User ID ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_isinactive: { 
                cValidate :'', 
                cName: 'isinactive', 
                cLabel: 'Mark user as INACTIVE', 
                cLabelSize: 4, 
                cOptions: [ { text: '', value: true } ], 
                cOrder: 0, 
                cKey: false, 
                cVisible: true, 
                cProtect: false, 
                cDefault: '', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_usergroup: { 
                dataLookUp: { 
                    LookUpCd: 'GetUserGroup'    , 
                    ColumnDB: 'UserGroup'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'usergroup', 
                cLabel: 'Group', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 0, 
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
                cMasterUrl: 'SS/SS_Group' ,
                cDisplayColumn: 'UserGroup,Descs' ,
            }, 
            PI_username: { 
                cValidate :'required|max:50', 
                cName: 'username', 
                cLabel: 'User Name ', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_handphone: { 
                cValidate :'', 
                cName: 'handphone', 
                cLabel: 'HandPhone', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_email: { 
                cValidate :'', 
                cName: 'email', 
                cLabel: 'Email Address', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_userlevel: { 
                dataLookUp: null, 
                cValidate :'', 
                cName: 'userlevel', 
                cLabel: 'User Level', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cTriggered: false, 
                cDefault: 'M', 
                cProtect: false, 
                cVisible:  true, 
                cAsync:  false, 
                cFilter: true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex, 
                cStatic: true, 
                cOption: [{ label: 'Staff', id: 'S' },{ label: 'Supervisor', id: 'P' },{ label: 'Manager', id: 'M' }], 
                cMasterUrl: '' ,
                cDisplayColumn: '' ,
            }, 
            PI_position: { 
                cValidate :'', 
                cName: 'position', 
                cLabel: 'Position', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
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
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_expireddate: { 
                cValidate :'', 
                cName: 'expireddate', 
                cLabel: 'Expired Date (leave blank for no expiry date)', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_password: { 
                cValidate :'', 
                cName: 'password', 
                cLabel: 'New Password', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_confirmnewpassword: { 
                cValidate :'', 
                cName: 'confirmnewpassword', 
                cLabel: 'Confirm New Password', 
                cLabelSize: 4, 
                cOrder: 0, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_usertype: { 
                cValidate :'', 
                cName: 'usertype', 
                cId: 'rdbusertype', 
                cRadioOptions: [{ text: 'Public', value: 'P' },{ text: 'Internal', value: 'I' },], 
                cRadioDefaultOption: 'P', 
                cLabel:'User Type', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_failedattempts: { 
                cValidate :'', 
                cName: 'failedattempts', 
                cLabel: 'Login Failed Attempt', 
                cLabelSize: 4, 
                cOrder: 0, 
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
        OnuseridChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{userid}
            }
        })
        this.$forceUpdate()
        },
        OnisinactiveChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{isinactive}
            }
        })
        this.$forceUpdate()
        },
        OnusergroupChange (data) {
            this.M_SS_UserMaster.usergroup = data.id
            this.M_SS_UserMaster.usergroupLabel = data.label
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {
                    //x
                }
            })
            this.$forceUpdate()
        },
        OnusernameChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{username}
            }
        })
        this.$forceUpdate()
        },
        OnhandphoneChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{handphone}
            }
        })
        this.$forceUpdate()
        },
        OnemailChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{email}
            }
        })
        this.$forceUpdate()
        },
        OnuserlevelChange (data) {
            this.M_SS_UserMaster.userlevel = data.id
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{userlevel}
            }
        })
        this.$forceUpdate()
        },
        OnpositionChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{position}
            }
        })
        this.$forceUpdate()
        },
        OnreferencenoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{referenceno}
            }
        })
        this.$forceUpdate()
        },
        OnexpireddateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{expireddate}
            }
        })
        this.$forceUpdate()
        },
        OnpasswordChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
                if (data != "") {
                    this.PI_confirmnewpassword.cValidate = "required"
                    this.$refs.ref_confirmnewpassword.isRequired = true
                }
                else {
                    this.PI_confirmnewpassword.cValidate = ""
                    this.$refs.ref_confirmnewpassword.isRequired = false
                }
            }
        })
        this.$forceUpdate()
        },
        OnconfirmnewpasswordChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{confirmnewpassword}
            }
        })
        this.$forceUpdate()
        },
        OnusertypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{usertype}
            }
        })
        this.$forceUpdate()
        },
        OnfailedattemptsChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{failedattempts}
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
            var isInActive = ""

            if (this.M_SS_UserMaster.isinactive === true) {
                isInActive = "Y"
            }
            else {
                if (this.M_SS_UserMaster.expireddate == '' || this.M_SS_UserMaster.expireddate == null) {
                    isInActive = "N"
                }
                else {
                    var intervalDate = this.datediff(new Date(), this.M_SS_UserMaster.expireddate)
                    
                    if (intervalDate <= 0) {
                        isInActive = "Y"
                    }
                    else {
                        isInActive = "N"
                    }
                }
            }

            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                UserId: this.M_SS_UserMaster.userid,
                UserGroup: this.M_SS_UserMaster.usergroup,
                UserName: this.M_SS_UserMaster.username,
                Email: this.M_SS_UserMaster.email,
                Password: this.M_SS_UserMaster.password,
                UserLevel: this.M_SS_UserMaster.userlevel,
                ExpiredDate: this.M_SS_UserMaster.expireddate == '' || this.M_SS_UserMaster.expireddate == null ? 'NULL' : this.M_SS_UserMaster.expireddate ,
                IsInactive: isInActive,
                UserInput: this.getDataUser().UserId ,
                Position: this.M_SS_UserMaster.position,
                HandPhone: this.M_SS_UserMaster.handphone,
                ReferenceNo: this.M_SS_UserMaster.referenceno,
                UserType: this.M_SS_UserMaster.usertype,
                FailedAttempts: this.M_SS_UserMaster.failedattempts                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
        },
        M_Update() {
            var isInActive = ""

            if (this.M_SS_UserMaster.isinactive === true) {
                isInActive = "Y"
            }
            else {
                if (this.M_SS_UserMaster.expireddate == '' || this.M_SS_UserMaster.expireddate == null) {
                    isInActive = "N"
                }
                else {
                    var intervalDate = this.datediff(new Date(), this.M_SS_UserMaster.expireddate)

                    if (intervalDate <= 0) {
                        isInActive = "Y"
                    }
                    else {
                        isInActive = "N"
                    }
                }
            }

            var pwd = this.TempPwd

            if (this.M_SS_UserMaster.password != "") {
                if (this.M_SS_UserMaster.confirmnewpassword != this.M_SS_UserMaster.password) {
                    this.alertWarning("Your Confirm New Password Should Be Same With New Password !")
                    return
                }
                else {
                    pwd = this.M_SS_UserMaster.password
                }
            }

            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                UserId: this.M_SS_UserMaster.userid,
                UserGroup: this.M_SS_UserMaster.usergroup,
                UserName: this.M_SS_UserMaster.username,
                Email: this.M_SS_UserMaster.email,
                NewPassword: pwd,
                UserLevel: this.M_SS_UserMaster.userlevel,
                ExpiredDate: this.M_SS_UserMaster.expireddate == '' || this.M_SS_UserMaster.expireddate == null ? 'NULL' : this.M_SS_UserMaster.expireddate ,
                IsInactive: isInActive,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_SS_UserMaster.lastupdatestamp,
                Position: this.M_SS_UserMaster.position,
                HandPhone: this.M_SS_UserMaster.handphone,
                ReferenceNo: this.M_SS_UserMaster.referenceno,
                UserType: this.M_SS_UserMaster.usertype,
                FailedAttempts: this.M_SS_UserMaster.failedattempts                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_SS_UserMaster = {
                userid: '',
                usergroup: '',
                usergroupLabel: '',
                username: '',
                password: '',
                email: '',
                userlevel: 'M',
                expireddate: '',
                logindate: '',
                statuslogin: '',
                isinactive: '',
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
                userinput: '',
                useredit: '',
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                position: '',
                handphone: '',
                referenceno: '',
                controlsequenceno: 0,
                usertype: 'P',
                failedattempts: 0,
                lastchangepassword: '',
                rowid: 0,
                groupdescs: '',
                confirmnewpassword: ''
                    }
            		
		},
        M_New(){
			
        },
        M_Edit(){
        },
        M_Delete(dt){
            var data = this.FormToABSList().getRowSelected()
            var dataDelete = []

            data.forEach((value) => {
                dataDelete.push({
                    UserId: value.UserId,
                    LastUpdateStamp:  value.LastUpdateStamp,
                    UserEdit: this.getDataUser().UserId,
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
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,               Userid: record.UserId
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                this.TempPwd = data.password
this.M_SS_UserMaster = {
                userid: data.userid,
                usergroup: data.usergroup,
                username: data.username,
                password: "",
                email: data.email,
                userlevel: data.userlevel,
                expireddate: data.expireddate,
                logindate: data.logindate,
                statuslogin: data.statuslogin,
                isinactive: data.isinactive === "Y" ? true : "",
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
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                position: data.position,
                handphone: data.handphone,
                referenceno: data.referenceno,
                controlsequenceno: data.controlsequenceno,
                usertype: data.usertype,
                failedattempts: data.failedattempts,
                lastchangepassword: data.lastchangepassword,
                rowid: data.rowid,
                groupdescs: data.groupdescs,
                confirmnewpassword: data.confirmnewpassword
                    }
                 
                this.M_SS_UserMaster.usergroupLabel = this.M_SS_UserMaster.usergroup && this.M_SS_UserMaster.usergroup != '' ? data.usergroup + this.separator + data.groupdescs : ''

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

