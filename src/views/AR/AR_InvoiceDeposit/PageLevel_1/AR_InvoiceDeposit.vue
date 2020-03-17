<template>
    <div>
        <ABSList
            :prop="propList"
            @rowClicked="rowClicked"
            @rowDblClicked="doDoubleClick"
            @rowLinkClick="rowLink"
        />

        <div v-show="$parent.isDetail"  :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
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
                                <b-col md="12" id="col-left">
                                    <b-row>
                                        <b-col md="5">
                                            <ABSInputSelect @change="onChange" :prop="PI.DebtorCd" v-model="M_AR_DebitH.DebtorCd"/>
                                        </b-col>
                                    </b-row>

                                    <b-row>
                                        <b-col md="5">
                                            <ABSInputSelect @change="onChange" :prop="PI.TrxType" v-model="M_AR_DebitH.TrxType"/>
                                        </b-col>
                                    </b-row>
                                    
                                    <b-row>
                                        <b-col md="5">
                                            <ABSinputText :prop="PI.DebitNo" v-model="M_AR_DebitH.DebitNo"/>
                                        </b-col>
                                        <b-col md="6">
                                            <ABSinputDate :prop="PI.DebitDate" v-model="M_AR_DebitH.DebitDate"/>
                                        </b-col>
                                    </b-row>

                                    <b-row>
                                        <b-col md="5">
                                            <ABSinputText :prop="PI.Descs" v-model="M_AR_DebitH.Descs"/>
                                        </b-col>
                                    </b-row>

                                    <b-row>
                                        <b-col md="5">
                                            <ABSinputText :prop="PI.ReferenceNo" v-model="M_AR_DebitH.ReferenceNo"/>
                                        </b-col>
                                        <b-col md="6">
                                            <ABSInputSelect @change="onChange" :prop="PI.AddressCd" v-model="M_AR_DebitH.AddressCd"/>
                                        </b-col>
                                    </b-row>

                                    <b-row>
                                        <b-col md="5">
                                            <ABSinputDate @input="JournalDateChoosen" :prop="PI.JournalDate" v-model="M_AR_DebitH.JournalDate"/>
                                        </b-col>
                                    </b-row>

                                    <b-row>
                                        <b-col md="5">
                                            <ABSInputSelect @change="onChange" :prop="PI.CreditTermsCd" v-model="M_AR_DebitH.CreditTermsCd"/>
                                        </b-col>
                                        <b-col md="6">
                                            <ABSinputDate :prop="PI.DueDate" v-model="M_AR_DebitH.BillingDueDate"/>
                                        </b-col>
                                    </b-row>

                                    <b-row>
                                        <b-col md="5">
                                            <ABSInputSelect @change="onChange" :prop="PI.CurrencyCd" v-model="M_AR_DebitH.CurrencyCd"/>
                                            <!-- <ABSButton icon="plus" classButton="btnList__btnPrimary" classIcon="icon-style-1" @click="addMaster" /> -->
                                            <!-- <a href="http://google.com" onclick="javascript:void window.open('http://google.com','1541422756027','width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=1,left=0,top=0');return false;">Plus</a> -->
                                        </b-col>
                                        <b-col md="6">
                                            <ABSinputText :prop="PI.CurrencyRate" v-model="M_AR_DebitH.CurrencyRate"/>
                                        </b-col>
                                    </b-row>

                                    <b-row>
                                        <b-col md="5">
                                            <ABSinputText :prop="PI.TrxAmt" v-model="M_AR_DebitH.TrxAmt"/>
                                        </b-col>
                                    </b-row>

                                    <b-row>
                                        <b-col md="5">
                                            <ABSinputDateVuex :prop="PI.DepositRefundDate" v-model="M_AR_DebitH.DepositRefundDate"/>
                                        </b-col>
                                    </b-row>
                                </b-col>
                                <!-- <b-col md="6" id="col-right">

                                    <ABSinputDate :prop="PI.DebitDate" v-model="M_AR_DebitH.DebitDate"/>

                                    <ABSInputSelect @change="onAddressCdChange" :prop="PI.AddressCd" v-model="M_AR_DebitH.AddressCd"/>

                                    <ABSinputDate :prop="PI.DueDate" v-model="M_AR_DebitH.BillingDueDate"/>
                                    
                                    <ABSinputText :prop="PI.CurrencyRate" v-model="M_AR_DebitH.CurrencyRate"/>
                                </b-col> -->
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
    props: {PageLevel: '', TabIndex: ''},
    data() {
        return {
            propList: {
                initialWhere: "",
                LineNo: 0,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex
            },
            M_AR_DebitH: {
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BatchNo: 0,
                DebtorCd: null,
                ModuleCd: "AR",
                TrxType: null,
                RunningCd: null,
                DebitNo: null,
                DebitDate: this.M_FormatingDate(new Date()),
                JournalDate: this.M_FormatingDate(new Date()),
                ReferenceNo: null,
                CreditTermsCd: null,
                AddressContactId: null,
                AddressCd: null,
                CurrencyCd: null,
                CurrencyRate: '',
                DepositRefundDate: null,
                BillingDueDate: this.M_FormatingDate(new Date()),
                Descs: null,
                TrxAmt: ''
            },
            CTermDueDay: null,
            IEBy: {Input: null, Edit: null},

            PI: {
                DebtorCd: {
                    dataLookUp: {
                        LookUpCd: 'GetDebtorCd',
                        ColumnDB: 'DebtorCd',
                        InitialWhere: "Status = 'Y'",
                        ParamWhere: ''
                    },
                    cValidate: 'required',
                    cName: 'DebtorCd',
                    cLabel: 'Debtor Code',
                    cOrder: 1,
                    cSelected: null,
                    cType: 'lookup',
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                TrxType: {
                    dataLookUp: {
                        LookUpCd: 'GetTrxType',
                        ColumnDB: 'TrxType',
                        InitialWhere: "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"' AND  ModuleCd = 'AR' AND TrxClass = 'T'",
                        ParamWhere: ''
                    },
                    cValidate: 'required',
                    cName: 'TrxType',
                    cLabel: 'Trans. Type',
                    cOrder: 2,
                    cType: 'lookup',
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                DebitNo: {
                    cValidate: 'required|min:1|max:20',
                    cName: 'DebitNo',
                    cLabel: 'Invoice Deposit No',
                    cOrder: 3,
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                Descs: {
                    cValidate: 'min:1|max:150',
                    cName: 'Descs',
                    cLabel: 'Description',
                    cOrder: 5,
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                ReferenceNo: {
                    cValidate: 'min:1|max:20',
                    cName: 'ReferenceNo',
                    cLabel: 'Reference No',
                    cOrder: 6,
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                JournalDate: {
                    cValidate: 'required',
                    cName: 'JournalDate',
                    cNameError: 'Journal Date',
                    cLabel: 'Journal Date',
                    cOrder: 8,
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                CreditTermsCd: {
                    dataLookUp: {
                        LookUpCd: 'GetCreditTermsCd',
                        ColumnDB: 'CreditTermsCd',
                        InitialWhere: '',
                        ParamWhere: ''
                    },
                    cValidate: 'required',
                    cName: 'CreditTermsCd',
                    cLabel: 'Credit Terms',
                    cOrder: 9,
                    cType: 'lookup',
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                CurrencyCd: {
                    dataLookUp: {
                        LookUpCd: 'GetCurrencyCd',
                        ColumnDB: 'CurrencyCd',
                        InitialWhere: '',
                        ParamWhere: ''
                    },
                    cValidate: 'required',
                    cName: 'CurrencyCd',
                    cLabel: 'Currency Code',
                    cOrder: 10,
                    cType: 'lookup',
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                TrxAmt: {
                    cValidate: 'min:1|max:20',
                    cName: 'TrxAmt',
                    cType: 'decimal',
                    cLabel: 'Trans. Amount',
                    cOrder: 12,
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                DepositRefundDate: {
                    cValidate: '',
                    cName: 'DepositRefundDate',
                    cNameError: 'Refund Date',
                    cValue: '',
                    cLabel: 'Refund Date',
                    cOrder: 13,
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                DebitDate: {
                    cValidate: 'required',
                    cName: 'DebitDate',
                    cNameError: 'Invoice Date',
                    cLabel: 'Invoice Date',
                    cOrder: 4,
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                AddressCd: {
                    dataLookUp: {
                        LookUpCd: 'GetAddressCd',
                        ColumnDB: 'AddressCd',
                        InitialWhere: "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"'",
                        ParamWhere: ''
                    },
                    cValidate: 'required',
                    cName: 'AddressCd',
                    cLabel: 'Address',
                    cOrder: 7,
                    cTriggered: true,
                    cType: 'lookup',
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                DueDate: {
                    cValidate: 'required',
                    cName: 'DueDate',
                    cNameError: 'Due Date',
                    // cValue: this.M_FormatingDate(new Date()),
                    cLabel: 'Due Date',
                    cOrder: 999,
                    cProtect: true,
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                },
                CurrencyRate : {
                    cValidate: 'required|min:1|max:20',
                    cName: 'CurrencyRate',
                    cLabel: 'CurrencyRate',
                    cType: 'decimal',
                    cOrder: 11,
                    cPageLevel: this.PageLevel,
                    cTabIndex: this.TabIndex,
                    cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
                }
            }
        }
    },
    methods: {
        M_HeaderPage () {
            return true
        },
        M_HeaderChildPage(){
            return true
        },
        addMaster () {
            window.open(
                'http://localhost:8080/CM_CurrencyMaster',
                '1541422756027',
                'width=700,height=500,toolbar=0,menubar=0,location=0,status=1,scrollbars=1,resizable=0,left=0,top=0'
            )
            
            return false
        },
        M_New(){
            this.$parent.isPointer = false
            this.$parent.isDefault = true

            this.clearForm('new')

            this.$nextTick(() => {
                // this.getPropertyInput()
                this.PI.DebitNo.cProtect = false
                document.getElementById('DebtorCd').focus()
            })
        },
        M_Delete(data){
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                SubPortfolioCd:this.getDataUser().SubPortfolioCd,
                PortfolioCd:this.getDataUser().PortfolioCd,
                LineNo: 0,
                Data: data
            }
            
            this.postJSON( this.postJSONMulti(), param )
            .then(response => {
                // response from API
                if(response == null) return

                this.responses = response
                this.alertSuccess("Deleting Data Successfully")
                this.$parent.isDetail = false

                this.$parent.EbData.Event = 'delete'
                this.$parent.EbData.Key = ''
                
                EventBus.$emit('ToOpen', this.$parent.EbData)

                // Refresh List
                EventBus.$emit('ebGetList_' + this.PageLevel + '_' + this.TabIndex)
            })
        },
        M_Edit(){
            this.$nextTick().then(() => {
                // this.getPropertyInput()
                document.getElementById("DebtorCd").focus()
            })
        },
        M_Post(){
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                SubPortfolioCd:this.getDataUser().SubPortfolioCd,
                PortfolioCd:this.getDataUser().PortfolioCd,
                LineNo: 0,
                Data: data
            }
            
            this.postJSON( this.postJSONMulti(), param )
            .then(response => {
                // response from API
                if(response == null) return

                this.responses = response
                this.alertSuccess("Posting Data Successfully")
                this.$parent.isDetail = false

                this.$parent.EbData.Event = 'post'
                this.$parent.EbData.Key = ''
                
                EventBus.$emit('ToOpen', this.$parent.EbData)

                // Refresh List
                EventBus.$emit('ebGetList_' + this.PageLevel + '_' + this.TabIndex)
            })
        },
        M_Save(){
            this.beforeSave()
        },
        beforeSave(){
            if(this.M_AR_DebitH.RunningCd == ''){
                this.doSave()
            }
            else {
                if(this.$parent.state !== 'UPDATE'){
                    this.generateRunningCd()
                    .then((ress) => {
                        // console.log(ress)
                        if(ress == null) return

                        this.M_AR_DebitH.DebitNo = ress.Data.RunningCode

                        this.doSave()
                    })
                }
                else {
                    this.doSave()
                }
            }
        },
        doSave(){
            this.M_AR_DebitH.SubPortfolioCd = this.getDataUser().SubPortfolioCd
            this.M_AR_DebitH.CurrencyRate = this.M_AR_DebitH.CurrencyRate?this.M_AR_DebitH.CurrencyRate.replace(/,/g,'').split('.')[0]:0
            this.M_AR_DebitH.TrxAmt = this.M_AR_DebitH.TrxAmt?this.M_AR_DebitH.TrxAmt.replace(/,/g,'').split('.')[0]:0
            this.M_AR_DebitH.OptionSeq = this.getOptionSeq().OptionSeq
            this.M_AR_DebitH.LineNo = 0

            // console.log('postSave', this.M_AR_DebitH)

            if(this.$parent.state !== 'NEW'){
                this.M_AR_DebitH.UserEdit = this.getDataUser().UserId
                delete this.M_AR_DebitH['BillingDueDate']
                delete this.M_AR_DebitH['ContactID']
                this.postJSON(this.getUrlUpdate(), this.M_AR_DebitH)
                .then((response) => {
                    if(response == null) return

                    delete this.M_AR_DebitH['UserEdit']
                    this.M_AR_DebitH.BillingDueDate = this.M_FormatingDate(new Date())
                    EventBus.$emit('ebGetList_' + this.PageLevel + '_' + this.TabIndex)
                    this.alertSuccess(response.Message)
                    .then(() => {
                        this.$parent.isDetail = false
                        this.$parent.EbData.Event = 'SAVE'
                        EventBus.$emit('ToOpen',this.$parent.EbData)
                        EventBus.$emit('ebToolbar', 'view')
                        // EventBus.$emit('ebSaveSuccess_' + this.PageLevel + '_' + this.TabIndex)
                        this.$store.commit('setStatus', 'view')
                    })
                })
            }
            else {
                this.$parent.isPointer= true
                this.$parent.isDefault= false
                this.M_AR_DebitH.UserInput = this.getDataUser().UserId
                // alert('save api')
                // console.log(this.M_AR_DebitH)
                this.postJSON(this.getUrlInsert(), this.M_AR_DebitH)
                .then((response) => {
                    if(response == null) return
                    delete this.M_AR_DebitH['UserInput']
                    EventBus.$emit('ebGetList_' + this.PageLevel + '_' + this.TabIndex)
                    this.alertSuccess(response.Message)
                    .then(() => {
                        this.$parent.isDetail = false
                        this.$parent.EbData.Event = 'SAVE'
                        EventBus.$emit('ToOpen',this.$parent.EbData)
                        EventBus.$emit('ebToolbar', 'view')
                        // EventBus.$emit('ebSaveSuccess_' + this.PageLevel + '_' + this.TabIndex)
                        this.$store.commit('setStatus', 'view')
                    })
                })
            }
            
            this.M_AR_DebitH.CurrencyRate = this.isCurrency(this.M_AR_DebitH.CurrencyRate)
            this.M_AR_DebitH.TrxAmt = this.isCurrency(this.M_AR_DebitH.TrxAmt)
        },
        rowClicked (record, index) {
            this.$parent.state = 'UPDATE'
            this.$parent.EbData.PageLevel = this.PageLevel
            this.$parent.EbData.Event = 'rowClick'
            this.$parent.EbData.Key = record
            
            EventBus.$emit('ToOpen', this.$parent.EbData)
            this.getDataBy(record)
            this.$parent.isDetail = true
        },
        rowLink: function(url){
            this.$refs.modalTest.show()
        },
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: 0,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                DebitNo: record.DebitNo
            }

            this.postEncode( this.getUrlById(), param )
            .then( response => {
                this.clearForm('edit')
                if(response == null) return
                var data = response.Data
                if(data.length > 0){
                    data = data[0]
                    this.$nextTick(() => {
                        this.M_AR_DebitH.BatchNo = data.BatchNo
                        this.M_AR_DebitH.SubPortfolioCd = this.getDataUser().SubPortfolioCd
                        this.M_AR_DebitH.ModuleCd = data.ModuleCd
                        this.M_AR_DebitH.RunningCd = data.RunningCd
                        this.M_AR_DebitH.DebitNo = data.DebitNo
                        this.M_AR_DebitH.DebitDate = data.DebitDate ? this.momentDate(data.DebitDate) : data.DebitDate
                        this.M_AR_DebitH.JournalDate = data.JournalDate ? this.momentDate(data.JournalDate) : data.JournalDate
                        this.M_AR_DebitH.ReferenceNo = data.ReferenceNo
                        this.M_AR_DebitH.AddressContactId = data.AddressContactId
                        this.M_AR_DebitH.CurrencyRate = this.isCurrency(data.CurrencyRate)
                        this.M_AR_DebitH.DepositRefundDate = data.DepositRefundDate ? this.momentDate(data.DepositRefundDate) : data.DepositRefundDate
                        this.M_AR_DebitH.BillingDueDate = data.DueDate ? this.momentDate(data.DueDate) : data.DueDate
                        this.M_AR_DebitH.Descs = data.Descs
                        this.M_AR_DebitH.TrxAmt = this.isCurrency(data.TrxAmt)
                        this.M_AR_DebitH.LastUpdateStamp = data.LastUpdateStamp
                        this.M_AR_DebitH.ContactID = data.ContactID
                        this.M_AR_DebitH.DebtorCd = data.DebtorCd
                        this.M_AR_DebitH.TrxType = data.TrxType
                        this.M_AR_DebitH.CreditTermsCd = data.CreditTermsCd
                        this.CTermDueDay = data.DueDay
                        this.M_AR_DebitH.CurrencyCd = data.CurrencyCd
                        this.M_AR_DebitH.AddressCd = data.AddressCd

                        EventBus.$emit('ebSetValue' + this.PI.DebtorCd.cName + '_' + this.PageLevel + '_' + this.TabIndex, {data: data.DebtorCd, action: 'getByID'})
                        EventBus.$emit('ebSetValue' + this.PI.TrxType.cName + '_' + this.PageLevel + '_' + this.TabIndex, {data: data.TrxType, action: 'getByID'})
                        this.M_AR_DebitH.CurrencyRate = this.isCurrency(data.CurrencyRate)
                        this.PI.DebitNo.cProtect = true
                    })
                    
                    this.IEBy.Input = data.userinput
                    this.IEBy.Edit = data.useredit
                }
            })
        },
        getCurrencyRate(DebitDate, CurrencyCd){
            var param = {
                'SubPortfolioCd': this.getDataUser().SubPortfolioCd,
                'DebitDate': DebitDate,
                'CurrencyCd': CurrencyCd
            }

            this.M_AR_DebitH.CurrencyRate = this.isCurrency(this.FnGetCurrencyRate())
        },
        JournalDateChoosen(data) {
            if(this.CTermDueDay !== null){
                // alert(this.CTermDueDay)
                var d = new Date(data)
                d.setDate(d.getDate() + this.CTermDueDay)
                this.M_AR_DebitH.BillingDueDate = this.M_FormatingDate(d)
            }
        },
        onChange (data) {
            var from = data.from

            //DebtorCd
            if (from == (this.PI.DebtorCd.cName + "_" + this.PageLevel + "_" + this.TabIndex)) {
                console.log('debtor',data)
                if(data.value && data.value.id !== ''){
                    this.M_AR_DebitH.DebtorCd = data.value.id
                    var where = "SubPortfolioCd = '"+ this.getDataUser().SubPortfolioCd +"' AND ContactID = '"+ data.value.ContactID +"'"
                    if (data.action !== 'getByID' && data.action !== 'manual') {
                        EventBus.$emit('ebSetValue' + this.PI.CreditTermsCd.cName + '_' + this.PageLevel + '_' + this.TabIndex, {data: data.value.CreditTermsCd, action: 'onChange'})
                        this.M_AR_DebitH.AddressContactId = data.value.ContactID
                        this.M_AR_DebitH.CreditTermsCd = data.value.CreditTermsCd
                    }
                    else {
                        EventBus.$emit('ebSetValue'+ this.PI.CreditTermsCd.cName + '_' + this.PageLevel + '_' + this.TabIndex, {data: this.M_AR_DebitH.CreditTermsCd, action: 'onChange'})
                    }
                    EventBus.$emit('ebSetInitWhere' + this.PI.AddressCd.cName + '_' + this.PageLevel + '_' + this.TabIndex, {data: where, default: this.M_AR_DebitH.AddressCd})
                }
            }

            //TrxType
            else if (from == (this.PI.TrxType.cName + "_" + this.PageLevel + "_" + this.TabIndex)) {
                console.log('trxtype',data)
                if(data.value && data.value.id !== ''){
                    this.M_AR_DebitH.TrxType = data.value.id
                    this.M_AR_DebitH.Descs = data.value.Descs
                    this.M_AR_DebitH.RunningCd = data.value.RunningCd
                    // alert(data.value.RunningCd)
                    if(data.value.RunningCd !== ''){
                        if(this.$parent.state !== 'UPDATE') {
                            this.M_AR_DebitH.DebitNo = '(auto)'
                            this.PI.DebitNo.cProtect = true
                        }
                    }
                    if (data.action !== 'getByID' && data.action !== 'manual') {
                        // console.log(data.action)
                        this.M_AR_DebitH.CurrencyCd = data.value.CurrencyCd
                        EventBus.$emit('ebSetValue' + this.PI.CurrencyCd.cName + '_' + this.PageLevel + '_' + this.TabIndex, {data: data.value.CurrencyCd, action: 'onChange'})
                        this.getCurrencyRate(this.M_AR_DebitH.DebitDate, data.value.CurrencyCd)
                    }
                    else {
                        EventBus.$emit('ebSetValue'+ this.PI.CurrencyCd.cName + '_' + this.PageLevel + '_' + this.TabIndex, {data: this.M_AR_DebitH.CurrencyCd, action: 'manual'})
                    }
                }
            }

            //CurrencyCd
            else if (from == (this.PI.CurrencyCd.cName + "_" + this.PageLevel + "_" + this.TabIndex)) {
                if(data.value && data.value.id !== ''){
                    this.M_AR_DebitH.CurrencyCd = data.value.id
                }
            }

            //CreditTermsCd
            else if (from == (this.PI.CreditTermsCd.cName + "_" + this.PageLevel + "_" + this.TabIndex)) {
                if(data.value && data.value.id !== ''){
                    this.M_AR_DebitH.CreditTermsCd = data.value.id
                    if (data.action !== 'getByID' && data.action !== 'manual') {
                        var d = new Date(this.M_AR_DebitH.JournalDate)
                        this.CTermDueDay = data.value.DueDay
                        d.setDate(d.getDate() + data.value.DueDay)
                        this.M_AR_DebitH.BillingDueDate = this.M_FormatingDate(d)
                    }
                }
            }

            //AddressCd
            else if (from == (this.PI.AddressCd.cName + "_" + this.PageLevel + "_" + this.TabIndex)) {
                if(data.value && data.value.id !== ''){
                    this.M_AR_DebitH.AddressCd = data.value.id
                }
            }
        },
        getPropertyInput(){
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                UserId: this.getDataUser().UserId,
                LineNo: 0,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd
            }

            this.postEncode( this.getUrlGetPropery(), param ).then(response => {
                // response from API
                if(response == null || response.Data.length < 1) return
                var data = response.Data

                for(var key in this.PI){
                    data.forEach(el => {
                        if(this.PI[key].cName == el.cName){
                            if(this.$parent.state == 'NEW'){
                                if (this.PI[key].cType == undefined) {
                                    // this.M_AR_DebitH[el.cName] = el.cDefault
                                }
                                else if (this.PI[key].cType.toLowerCase() == 'text') {
                                    this.M_AR_DebitH[el.cName] = el.cDefault
                                }
                                else if (this.PI[key].cType.toLowerCase() == 'lookup') {
                                    setTimeout(() => {
                                        EventBus.$emit('ebSetValue'+el.cName, {data: el.cDefault, action: 'setDefault'})
                                    }, 500)
                                }
                            }

                            this.PI[key].cLabel = el.cLabel
                            this.PI[key].cDefault = el.cDefault
                            this.PI[key].cProtect = (el.cProtect.toLowerCase() === 'true')
                            this.PI[key].cVisible = (el.cVisible.toLowerCase() === 'true')
                        }
                    });
                }

                // console.log(this.M_AR_DebitH.PI_Descs)
            })
        },
        generateRunningCd () {
            var param = {
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                RunningCd: this.M_AR_DebitH.RunningCd,
                UserInput: this.getDataUser().UserId,
                Date: this.M_AR_DebitH.DebitDate
            }

            return this.postEncode( this.getFunctionGenerateRunningCd(), param )
        },
        clearForm (parm) {
            this.M_AR_DebitH.SubPortfolioCd = this.getDataUser().SubPortfolioCd
            this.M_AR_DebitH.BatchNo = 0
            this.M_AR_DebitH.DebtorCd = null
            EventBus.$emit('ebSetValue' + this.PI.DebtorCd.cName + '_' + this.PageLevel + '_' + this.TabIndex, {data: '', action: parm})
            this.M_AR_DebitH.ModuleCd = "AR"
            this.M_AR_DebitH.TrxType = null
            EventBus.$emit('ebSetValue' + this.PI.TrxType.cName + '_' + this.PageLevel + '_' + this.TabIndex, {data: '', action: parm})
            this.M_AR_DebitH.RunningCd = null
            this.M_AR_DebitH.DebitNo = null
            this.M_AR_DebitH.DebitDate = this.M_FormatingDate(new Date())
            this.M_AR_DebitH.JournalDate = this.M_FormatingDate(new Date())
            this.M_AR_DebitH.ReferenceNo = null
            this.M_AR_DebitH.CreditTermsCd = null
            this.CTermDueDay = null
            EventBus.$emit('ebSetValue' + this.PI.CreditTermsCd.cName + '_' + this.PageLevel + '_' + this.TabIndex, {data: '', action: parm})
            this.M_AR_DebitH.AddressContactId = null
            this.M_AR_DebitH.AddressCd = null
            EventBus.$emit('ebSetValue' + this.PI.AddressCd.cName + '_' + this.PageLevel + '_' + this.TabIndex, {data: '', action: parm})
            this.M_AR_DebitH.CurrencyCd = null
            EventBus.$emit('ebSetValue' + this.PI.CurrencyCd.cName + '_' + this.PageLevel + '_' + this.TabIndex, {data: '', action: parm})
            this.M_AR_DebitH.CurrencyRate = ''
            this.M_AR_DebitH.TrxAmt = ''
            this.M_AR_DebitH.DepositRefundDate = null
            this.M_AR_DebitH.BillingDueDate = null
            this.M_AR_DebitH.Descs = null
        }
    },

    beforeCreate: function () {
    },

    created: function() {
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.hideSideBarMenu()
        EventBus.$emit('ebGetList_' + this.PageLevel + '_' + this.TabIndex)
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
