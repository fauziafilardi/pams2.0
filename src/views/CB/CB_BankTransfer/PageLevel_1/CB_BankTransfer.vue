<template>
<div>
    <ABSListVuex :prop="propList" :title="data.QueryName" @rowClicked="$parent.rowClicked" @rowDblClicked="$parent.doDoubleClick" @rowLinkClick="$parent.rowLink" @pageSize="$parent.M_PageSize" @pagination="$parent.M_Pagination" @filter="$parent.M_Advance_Filter" @headTable="$parent.M_Head_Table" @refreshColumn="$parent.refreshColumn" />

    <div v-show="$parent.showForm" :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
        <div class="div-collapse" v-b-toggle.collapse1>
            <span class="master-span" v-show="IEBy.Input && IEBy.Edit">
                    Input By : {{IEBy.Input}} | Edit By : {{IEBy.Edit}} <font-awesome-icon icon="sort-down" class="icon-style-1__master" /> 
                </span>
        </div>
        <b-collapse id="collapse1" :visible="true">
            <b-row style="padding-left: 10px; padding-bottom: 10px; !important;">
                <b-col md="12" id="col-left" class="bColMasterForm">
                    <b-form :data-vv-scope="'FormScope_' + PageLevel + '_' + TabIndex" :data-vv-value-path="'FormScope_' + PageLevel + '_' + TabIndex">
                        <b-row style="padding-left:10px;">
                            <b-col md="12" id="col-left">
                                <!-- table open -->
                                <b-col md="12" id="col-left">
                                    <!-- table open -->
                                    <b-row>
                                        <b-col md="3">
                                            <ABSInputSelectList @change="OnbatchnoChange" :prop="PI_batchno" :value="M_CB_BankTransfer.batchno" :label="M_CB_BankTransfer.batchnoLabel" ref="ref_batchno" />
                                        </b-col>
                                        <b-col md="3">
                                            <ABSCompute :prop="PI_documentcount" v-model="M_CB_BankTransfer.documentcount" ref="ref_documentcount" />
                                        </b-col>
                                        <b-col md="3">
                                            <ABSCompute :prop="PI_batchtotal" v-model="M_CB_BankTransfer.batchtotal" ref="ref_batchtotal" />
                                        </b-col>
                                        <b-col md="3">
                                            <ABSinputCheckBox @input="OnbatchtotalChange" :prop="PI_batchtotal" v-model="M_CB_BankTransfer.batchtotal" ref="ref_batchtotal" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_currentdocumentcount" v-model="M_CB_BankTransfer.currentdocumentcount" ref="ref_currentdocumentcount" />
                                        </b-col>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_currentbatchtotal" v-model="M_CB_BankTransfer.currentbatchtotal" ref="ref_currentbatchtotal" />
                                        </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                <b-row>
                                    <b-col md="6">
                                        <ABSInputSelectList @change="OntrxtypeChange" :prop="PI_trxtype" :value="M_CB_BankTransfer.trxtype" :label="M_CB_BankTransfer.trxtypeLabel" ref="ref_trxtype" />
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_transferno" v-model="M_CB_BankTransfer.transferno" ref="ref_transferno" />
                                    </b-col>
                                    <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_CB_BankTransfer.referenceno" ref="ref_referenceno" />
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col md="6">
                                        <ABSinputDateVuex @input="OnpaymentdateChange" :prop="PI_paymentdate" v-model="M_CB_BankTransfer.paymentdate" ref="ref_paymentdate" />
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_descs" v-model="M_CB_BankTransfer.descs" ref="ref_descs" />
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col md="6">
                                        <ABSInputSelectList @change="OnpaymentcdChange" :prop="PI_paymentcd" :value="M_CB_BankTransfer.paymentcd" :label="M_CB_BankTransfer.paymentcdLabel" ref="ref_paymentcd" />
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col md="6">
                                        <ABSInputSelectList @change="OnbankcdChange" :prop="PI_bankcd" :value="M_CB_BankTransfer.bankcd" :label="M_CB_BankTransfer.bankcdLabel" ref="ref_bankcd" />
                                    </b-col>
                                    <b-col md="6">
                                        <ABSInputSelectList @change="OntobankcdChange" :prop="PI_tobankcd" :value="M_CB_BankTransfer.tobankcd" :label="M_CB_BankTransfer.tobankcdLabel" ref="ref_tobankcd" />
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencycd" v-model="M_CB_BankTransfer.currencycd" ref="ref_currencycd" />
                                    </b-col>
                                    <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_tocurrencycd" v-model="M_CB_BankTransfer.tocurrencycd" ref="ref_tocurrencycd" />
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_originalcurrencyrate" v-model="M_CB_BankTransfer.originalcurrencyrate" ref="ref_originalcurrencyrate" />
                                    </b-col>
                                    <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_currencyrate" v-model="M_CB_BankTransfer.currencyrate" ref="ref_currencyrate" />
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_trxamt" v-model="M_CB_BankTransfer.trxamt" ref="ref_trxamt" />
                                    </b-col>
                                    <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_totrxamt" v-model="M_CB_BankTransfer.totrxamt" ref="ref_totrxamt" />
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_bankchargesamt" v-model="M_CB_BankTransfer.bankchargesamt" ref="ref_bankchargesamt" />
                                    </b-col>
                                </b-row>
                                <div class="div-collapse">
                                    <span class="master-span-form">Cheque / Reference No</span>
                                </div>
                                <b-row>
                                    <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_chequereferenceno" v-model="M_CB_BankTransfer.chequereferenceno" ref="ref_chequereferenceno" />
                                    </b-col>
                                    <b-col md="6">
                                        <ABSinputDateVuex @input="OnchequereferencedateChange" :prop="PI_chequereferencedate" v-model="M_CB_BankTransfer.chequereferencedate" ref="ref_chequereferencedate" />
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_issuedbank" v-model="M_CB_BankTransfer.issuedbank" ref="ref_issuedbank" />
                                    </b-col>
                                    <b-col md="6">
                                        <ABSinputDateVuex @input="OnchequeduedateChange" :prop="PI_chequeduedate" v-model="M_CB_BankTransfer.chequeduedate" ref="ref_chequeduedate" />
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col md="6">
                                        <ABSInputSelectList @change="OnreceiveraccountChange" :prop="PI_receiveraccount" :value="M_CB_BankTransfer.receiveraccount" :label="M_CB_BankTransfer.receiveraccountLabel" ref="ref_receiveraccount" />
                                    </b-col>
                                    <b-col md="6">
                                        <ABSCompute :prop="PI_receiveraccount" v-model="M_CB_BankTransfer.receiveraccount" ref="ref_receiveraccount" />
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_CB_BankTransfer.remarks" ref="ref_remarks" />
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
    props: {
        PageLevel: '',
        TabIndex: '',
        data: ''
    },
    data() {
        return {
            cInsertKey: '',
            FormType: "ListProcess",
            Module: "CB",
            propList: {
                initialWhere: "Source = 'T' AND PaymentStatus = 'N' AND SubPortfolioCd = '" + this.getDataUser().SubPortfolioCd + "'",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex,
                OrderBy: '',
                SourceField: '',
                ParamView: ''
            },

            IEBy: {
                Input: '',
                Edit: ''
            },

            M_CB_BankTransfer: {
                batchno: '',
                source: '',
                runningcd: '',
                trxtype: '',
                modulecd: '',
                paymentdate: this.getToday(),
                descs: '',
                paymentcategory: '',
                transferno: '',
                documentcount: '',
                batchtotal: '',
                paymentcd: '',
                bankcd: '',
                tobankcd: '',
                currencycd: '',
                tocurrencycd: '',
                batchstatus: '',
                currencyrate: '0',
                originalcurrencyrate: '0',
                currencyoperator: '',
                trxamt: '0',
                chequereferenceno: '',
                chequereferencedate: '',
                chequeduedate: '',
                issuedbank: '',
                remarks: '',
                trxtypedescs: '',
                paymentdescs: '',
                paymenttype: '',
                frombankname: '',
                tobankname: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                referenceno: '',
                totrxamt: '0',
                bankchargesamt: '0',
                currentbatchtotal: '',
                currentdocumentcount: '',
                receiveraccount: '',
                name: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                debtorcd: '',
                creditorcd: '',
                debtorid: '',
                creditorid: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
            },
            PI_batchno: {
                dataLookUp: {
                    LookUpCd: 'GetLookupCBBatch',
                    ColumnDB: 'BatchNo',
                    InitialWhere: "SUBPORTFOLIOCD='" + this.getDataUser().SubPortfolioCd + "'",
                    ParamWhere: ''
                },
                cValidate: '',
                cName: 'batchno',
                cLabel: '',
                cKey: false,
                cLabelSize: 4,
                cOrder: 0,
                cTriggered: false,
                cDefault: '',
                cProtect: false,
                cVisible: false,
                cAsync: false,
                cFilter: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cStatic: false,
                cOption: [],
                cMasterUrl: 'CB/CB_BatchMaster',
                cDisplayColumn: 'BatchNo,DocumentCount',
            },
            PI_documentcount: {
                cLabel: 'Doc. Count',
                cLabelSize: 4,
                cValue: '',
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cVisible: false
            },
            PI_batchtotal: {
                cLabel: 'Batch Total',
                cLabelSize: 4,
                cValue: '',
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cVisible: false
            },
            PI_batchtotal: {
                cValidate: '',
                cName: 'batchtotal',
                cLabel: '',
                cLabelSize: 4,
                cOptions: [],
                cOrder: 0,
                cKey: false,
                cVisible: false,
                cProtect: false,
                cDefault: '',
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_currentdocumentcount: {
                cLabel: 'Curr. Doc. Count',
                cLabelSize: 4,
                cValue: '',
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cVisible: false
            },
            PI_currentbatchtotal: {
                cLabel: 'Curr. Batch Total  ',
                cLabelSize: 4,
                cValue: '',
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cVisible: false
            },
            PI_trxtype: {
                dataLookUp: {
                    LookUpCd: 'GetLookupTrxType',
                    ColumnDB: 'TrxType',
                    InitialWhere: "SubPortfolioCd  =  '" + this.getDataUser().SubPortfolioCd + "' AND  ModuleCd = 'CB' AND TrxClass = 'B' AND Status = 'A'",
                    ParamWhere: ''
                },
                cValidate: 'required',
                cName: 'trxtype',
                cLabel: 'Trans. Type',
                cKey: true,
                cLabelSize: 4,
                cOrder: 0,
                cTriggered: false,
                cDefault: '',
                cProtect: false,
                cVisible: true,
                cAsync: false,
                cFilter: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cStatic: false,
                cOption: [],
                cMasterUrl: '',
                cDisplayColumn: 'TrxType,Descs',
            },
            PI_transferno: {
                cValidate: 'required|max:20',
                cName: 'transferno',
                cLabel: 'Transfer No',
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
            PI_referenceno: {
                cValidate: 'max:20',
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
            PI_paymentdate: {
                cValidate: 'required',
                cName: 'paymentdate',
                cLabel: 'Transfer Date ',
                cLabelSize: 4,
                cOrder: 0,
                cKey: false,
                cVisible: true,
                cProtect: false,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_descs: {
                cValidate: 'max:150',
                cName: 'descs',
                cLabel: 'Description',
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
            PI_paymentcd: {
                dataLookUp: {
                    LookUpCd: 'GetLookupCMPaymentType',
                    ColumnDB: 'PaymentCd',
                    InitialWhere: "",
                    ParamWhere: ''
                },
                cValidate: 'required',
                cName: 'paymentcd',
                cLabel: 'Payment Type ',
                cKey: false,
                cLabelSize: 4,
                cOrder: 0,
                cTriggered: false,
                cDefault: '',
                cProtect: false,
                cVisible: true,
                cAsync: false,
                cFilter: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cStatic: false,
                cOption: [],
                cMasterUrl: 'CM/CM_PaymentType',
                cDisplayColumn: 'PaymentCd,Descs',
            },
            PI_bankcd: {
                dataLookUp: {
                    LookUpCd: 'GetLookupCBBank',
                    ColumnDB: 'BankCd',
                    InitialWhere: "SubPortfolioCd='" +this.getDataUser().SubPortfolioCd+ "' AND Status='A'",
                    ParamWhere: ''
                },
                cValidate: 'required',
                cName: 'bankcd',
                cLabel: 'From Bank',
                cKey: false,
                cLabelSize: 4,
                cOrder: 0,
                cTriggered: false,
                cDefault: '',
                cProtect: false,
                cVisible: true,
                cAsync: false,
                cFilter: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cStatic: false,
                cOption: [],
                cMasterUrl: 'CB/CB_Bank',
                cDisplayColumn: 'BankCd,BankName',
            },
            PI_tobankcd: {
                dataLookUp: {
                    LookUpCd: 'GetLookupCBBank',
                    ColumnDB: 'BankCd',
                    InitialWhere: "SubPortfolioCd='" +this.getDataUser().SubPortfolioCd+ "' AND Status='A'",
                    ParamWhere: ''
                },
                cValidate: 'required',
                cName: 'tobankcd',
                cLabel: 'To Bank',
                cKey: false,
                cLabelSize: 4,
                cOrder: 0,
                cTriggered: false,
                cDefault: '',
                cProtect: false,
                cVisible: true,
                cAsync: false,
                cFilter: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cStatic: false,
                cOption: [],
                cMasterUrl: 'CB/CB_Bank',
                cDisplayColumn: 'BankCd,ContactId',
            },
            PI_currencycd: {
                cValidate: '',
                cName: 'currencycd',
                cLabel: 'From Currency',
                cLabelSize: 4,
                cOrder: 0,
                cKey: false,
                cType: 'text',
                cVisible: true,
                cProtect: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_tocurrencycd: {
                cValidate: '',
                cName: 'tocurrencycd',
                cLabel: 'To Currency',
                cLabelSize: 4,
                cOrder: 0,
                cKey: false,
                cType: 'text',
                cVisible: true,
                cProtect: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_originalcurrencyrate: {
                cValidate: '',
                cName: 'originalcurrencyrate',
                cLabel: 'Original Rate',
                cLabelSize: 4,
                cOrder: 0,
                cKey: true,
                cType: 'decimal',
                cDecimal: 2,
                cVisible: true,
                cProtect: false,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_currencyrate: {
                cValidate: 'required|greater:1',
                cName: 'currencyrate',
                cLabel: 'Currency Rate ',
                cLabelSize: 4,
                cOrder: 0,
                cKey: true,
                cType: 'decimal',
                cDecimal: 2,
                cVisible: true,
                cProtect: false,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_trxamt: {
                cValidate: 'required|greater:1',
                cName: 'trxamt',
                cLabel: 'From Amount ',
                cLabelSize: 4,
                cOrder: 0,
                cKey: false,
                cType: 'decimal',
                cDecimal: 2,
                cVisible: true,
                cProtect: false,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_totrxamt: {
                cValidate: 'greater:1',
                cName: 'totrxamt',
                cLabel: 'To Amount',
                cLabelSize: 4,
                cOrder: 0,
                cKey: true,
                cType: 'decimal',
                cDecimal: 2,
                cVisible: true,
                cProtect: false,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_bankchargesamt: {
                cValidate: '',
                cName: 'bankchargesamt',
                cLabel: 'Bank Charges',
                cLabelSize: 4,
                cOrder: 0,
                cKey: false,
                cType: 'decimal',
                cDecimal: 2,
                cVisible: true,
                cProtect: false,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_chequereferenceno: {
                cValidate: 'max:20',
                cName: 'chequereferenceno',
                cLabel: 'Cheque / Ref. No',
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
            PI_chequereferencedate: {
                cValidate: '',
                cName: 'chequereferencedate',
                cLabel: 'Cheque / Ref. Date',
                cLabelSize: 4,
                cOrder: 0,
                cKey: false,
                cVisible: true,
                cProtect: false,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_issuedbank: {
                cValidate: 'max:30',
                cName: 'issuedbank',
                cLabel: 'Issue Bank',
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
            PI_chequeduedate: {
                cValidate: '',
                cName: 'chequeduedate',
                cLabel: 'Due Date',
                cLabelSize: 4,
                cOrder: 0,
                cKey: false,
                cVisible: true,
                cProtect: false,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            PI_receiveraccount: {
                dataLookUp: {
                    LookUpCd: 'GetLookupReceiverCd',
                    ColumnDB: 'ReceiverAccount',
                    InitialWhere: "",
                    ParamWhere: ''
                },
                cValidate: '',
                cName: 'receiveraccount',
                cLabel: 'Receiver Account',
                cKey: false,
                cLabelSize: 4,
                cOrder: 0,
                cTriggered: false,
                cDefault: '',
                cProtect: false,
                cVisible: true,
                cAsync: false,
                cFilter: true,
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cStatic: false,
                cOption: [],
                cMasterUrl: '',
                cDisplayColumn: '',
            },
            PI_receiveraccount: {
                cLabel: '',
                cLabelSize: 4,
                cValue: '',
                cPageLevel: this.PageLevel,
                cTabIndex: this.TabIndex,
                cVisible: true
            },
            PI_remarks: {
                cValidate: '',
                cName: 'remarks',
                cLabel: 'Remarks',
                cLabelSize: 4,
                cOrder: 0,
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
    computed: {
        inputStatus() {
            if (this.$store.getters.getLevel == this.PageLevel && this.$store.getters.getTab == this.TabIndex) {
                return this.$store.getters.getStatus.toUpperCase()
            } else {
                return 'VIEW'
            }
        },
        DataRow() {
            return this.$store.getters.GetPage1Data
        }
    },
    methods: {
        OnbatchnoChange(data) {
            this.$nextTick(() => {
                this.M_CB_BankTransfer.batchno = data.id
                this.M_CB_BankTransfer.batchnoLabel = data.label
                if (this.inputStatus != "VIEW") {
                    //{batchno}
                }
            })
            this.$forceUpdate()
        },
        OnbatchtotalChange(data) {
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {
                    //{batchtotal}
                }
            })
            this.$forceUpdate()
        },
        OntrxtypeChange(data) {
          this.$nextTick(() => {
            this.M_CB_BankTransfer.trxtype = data.id
            this.M_CB_BankTransfer.trxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
              this.FnGetTrxTypeData(this.getDataUser().SubPortfolioCd, this.Module, data.id).then(dt => {
                if (dt != null) { 
                  var dta = dt[0]
                  this.M_CB_BankTransfer.runningcd = dta.RunningCd
                  this.M_CB_BankTransfer.trxtypeLabel = data.id + this.separator + dta.TrxTypeDescs

                  if(data.DefaultBankCd && data.DefaultBankCd != ''){
                    this.M_CB_BankTransfer.bankcd = data.DefaultBankCd
                    this.M_CB_BankTransfer.bankcdLabel = data.DefaultBankCd + this.separator + data.BankName
                    
                    var bankParam = {id: data.DefaultBankCd, label: data.DefaultBankCd + this.separator + data.BankName}
                    this.OnbankcdChange(bankParam)
                  }

                  if (this.inputStatus != "EDIT") {
                    if (dta.RunningCd != '') {
                      this.M_CB_BankTransfer.transferno = "(auto)"
                      this.PI_transferno.cProtect = true
                    }
                    else {
                      this.M_CB_BankTransfer.transferno = ""
                      this.PI_transferno.cProtect = false
                    }
                  }
                }
              })
            }
          })
          this.$forceUpdate()
        },
        OnpaymentdateChange(data) {
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {
                    //{paymentdate}
                }
            })
            this.$forceUpdate()
        },
        OnpaymentcdChange(data) {
            this.$nextTick(() => {
                this.M_CB_BankTransfer.paymentcd = data.id
                this.M_CB_BankTransfer.paymentcdLabel = data.label
                if (this.inputStatus != "VIEW") {                    
                    if(data.PaymentType != 'Cash'){
                        this.PI_chequereferenceno.cValidate = 'required'
                        this.$refs.ref_chequereferenceno.isRequired = true

                        this.PI_chequereferencedate.cValidate = 'required'
                        this.$refs.ref_chequereferencedate.isRequired = true

                        this.PI_issuedbank.cValidate = 'required'
                        this.$refs.ref_issuedbank.isRequired = true

                        this.PI_chequeduedate.cValidate = 'required'
                        this.$refs.ref_chequeduedate.isRequired = true
                    }
                    else{
                        this.PI_chequereferenceno.cValidate = ''
                        this.$refs.ref_chequereferenceno.isRequired = false

                        this.PI_chequereferencedate.cValidate = ''
                        this.$refs.ref_chequereferencedate.isRequired = false

                        this.PI_issuedbank.cValidate = ''
                        this.$refs.ref_issuedbank.isRequired = false

                        this.PI_chequeduedate.cValidate = ''
                        this.$refs.ref_chequeduedate.isRequired = false
                    }
                }
            })
            this.$forceUpdate()
        },
        OnbankcdChange(data) {
          this.$nextTick(() => {
            this.M_CB_BankTransfer.bankcd = data.id
            this.M_CB_BankTransfer.bankcdLabel = data.label
            if (this.inputStatus != "VIEW") {
              var paramcurrencycd = {
                OptionFunctionCd: "GetBankCurrencyCd",
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BankCd: data.id,
                BankCurrencyCd_Output: ""
              }

              this.FnDynamicFunction(paramcurrencycd)
              .then(currCd => {
                if (currCd == null) return
                this.M_CB_BankTransfer.currencycd = currCd.BankCurrencyCd

                if (this.M_CB_BankTransfer.paymentdate && this.M_CB_BankTransfer.paymentdate != "") {
                  this.FnGetCurrencyMiddleRate(this.getDataUser().SubPortfolioCd, this.M_CB_BankTransfer.paymentdate, currCd.BankCurrencyCd).then(dtCurrRate => {
                    this.M_CB_BankTransfer.originalcurrencyrate = this.isCurrency(dtCurrRate.CurrencyRate, this.decimal)
                  })
                }
              })
            }
          })
          this.$forceUpdate()
        },
        OntobankcdChange(data) {
          this.$nextTick(() => {
            this.M_CB_BankTransfer.tobankcd = data.id
            this.M_CB_BankTransfer.tobankcdLabel = data.label
            if (this.inputStatus != "VIEW") {
              var paramcurrencycd = {
                OptionFunctionCd: "GetBankCurrencyCd",
                ModuleCd: this.Module,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BankCd: data.id,
                BankCurrencyCd_Output: ""
              }

              this.FnDynamicFunction(paramcurrencycd)
              .then(currCd => {
                if (currCd == null) return
                this.M_CB_BankTransfer.tocurrencycd = currCd.BankCurrencyCd

                if (this.M_CB_BankTransfer.paymentdate && this.M_CB_BankTransfer.paymentdate != "") {
                  this.FnGetCurrencyMiddleRate(this.getDataUser().SubPortfolioCd, this.M_CB_BankTransfer.paymentdate, currCd.BankCurrencyCd).then(dtCurrRate => {
                    this.M_CB_BankTransfer.currencyrate = this.isCurrency(dtCurrRate.CurrencyRate, this.decimal)
                  })
                }
              })
            }
          })
          this.$forceUpdate()
        },
        OnchequereferencedateChange(data) {
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {
                    //{chequereferencedate}
                }
            })
            this.$forceUpdate()
        },
        OnchequeduedateChange(data) {
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {
                    //{chequeduedate}
                }
            })
            this.$forceUpdate()
        },
        OnreceiveraccountChange(data) {
            this.$nextTick(() => {
                this.M_CB_BankTransfer.receiveraccount = data.id
                this.M_CB_BankTransfer.receiveraccountLabel = data.label
                if (this.inputStatus != "VIEW") {
                    //{receiveraccount}
                }
            })
            this.$forceUpdate()
        },
        OnremarksChange(data) {
            this.$nextTick(() => {
                if (this.inputStatus != "VIEW") {
                    //{remarks}
                }
            })
            this.$forceUpdate()
        },

        setToolbarButton() {
            this.getToolbar().statusFunction[4].text = "Post"
            //this.getToolbar().statusFunction[4].disabled = false
        },
        M_Head_Table() {},
        M_PageSize() {},
        M_TabClick() {},
        M_Pagination() {},
        M_Advance_Filter() {},
        M_Search(data) {},
        M_Refresh() {},
        M_Cancel() {},
        doDoubleClick() {},
        rowClicked(record, index) {},
        rowLink: function (url) {
            this.$refs.modalTest.show()
        },
        paramFromParent() {},
        M_Post(dt) {
          var data = this.FormToABSList().getRowSelected()
          var dataPost = []

          data.forEach((value) => {
            dataPost.push({
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              CheckedBatchNo: value.BatchNo,
              PostBy: this.getDataUser().UserId,
              _Message_: "Transfer No = "+value.TransferNo
            })
          })

          var param = {
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            Data: dataPost
          }
          
          this.postJSONMulti( this.getUrlPostMulti(), param )
          .then(response => {
            if (response == null) return
            this.$parent.resultPost()
          })
        },
        M_Insert() {
          if (this.M_CB_BankTransfer.runningcd != "") {
            this.FnGenerateRunningCode(
              this.getDataUser().SubPortfolioCd,
              this.M_CB_BankTransfer.runningcd,
              this.getDataUser().UserId,
              this.M_CB_BankTransfer.paymentdate
            ).then(dt => {
              if (dt == null) return

              this.M_CB_BankTransfer.transferno = dt.RunningCode

              var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                BatchNo: 0,
                TrxType: this.M_CB_BankTransfer.trxtype == '' || this.M_CB_BankTransfer.trxtype == null ? 'NULL' : this.M_CB_BankTransfer.trxtype,
                TransferNo: this.M_CB_BankTransfer.transferno,
                ReferenceNo: this.M_CB_BankTransfer.referenceno,
                ToBankCd: this.M_CB_BankTransfer.tobankcd == '' || this.M_CB_BankTransfer.tobankcd == null ? 'NULL' : this.M_CB_BankTransfer.tobankcd,
                FromBankCd: this.M_CB_BankTransfer.bankcd == '' || this.M_CB_BankTransfer.bankcd == null ? 'NULL' : this.M_CB_BankTransfer.bankcd,
                TransferDate: this.M_CB_BankTransfer.paymentdate == '' || this.M_CB_BankTransfer.paymentdate == null ? 'NULL' : this.M_CB_BankTransfer.paymentdate,
                Descs: this.M_CB_BankTransfer.descs,
                PaymentCd: this.M_CB_BankTransfer.paymentcd == '' || this.M_CB_BankTransfer.paymentcd == null ? 'NULL' : this.M_CB_BankTransfer.paymentcd,
                ToCurrencyCd: this.M_CB_BankTransfer.tocurrencycd,
                FromCurrencyCd: this.M_CB_BankTransfer.currencycd,
                OriginalCurrencyRate: this.M_CB_BankTransfer.originalcurrencyrate ? this.replaceAllString(this.M_CB_BankTransfer.originalcurrencyrate, ',', '', 'number') : 0,
                CurrencyRate: this.M_CB_BankTransfer.currencyrate ? this.replaceAllString(this.M_CB_BankTransfer.currencyrate, ',', '', 'number') : 0,
                TrxAmt: this.M_CB_BankTransfer.trxamt ? this.replaceAllString(this.M_CB_BankTransfer.trxamt, ',', '', 'number') : 0,
                ToTrxAmt: this.M_CB_BankTransfer.totrxamt ? this.replaceAllString(this.M_CB_BankTransfer.totrxamt, ',', '', 'number') : 0,
                BankChargesAmt: this.M_CB_BankTransfer.bankchargesamt ? this.replaceAllString(this.M_CB_BankTransfer.bankchargesamt, ',', '', 'number') : 0,
                ChequeReferenceNo: this.M_CB_BankTransfer.chequereferenceno,
                ChequeReferenceDate: this.M_CB_BankTransfer.chequereferencedate == '' || this.M_CB_BankTransfer.chequereferencedate == null ? 'NULL' : this.M_CB_BankTransfer.chequereferencedate,
                IssuedBank: this.M_CB_BankTransfer.issuedbank,
                Remarks: this.M_CB_BankTransfer.remarks,
                ChequeDueDate: this.M_CB_BankTransfer.chequeduedate == '' || this.M_CB_BankTransfer.chequeduedate == null ? 'NULL' : this.M_CB_BankTransfer.chequeduedate,
                UserInput: this.getDataUser().UserId,
                ReceiverAccount: this.M_CB_BankTransfer.receiveraccount == '' || this.M_CB_BankTransfer.receiveraccount == null ? 'NULL' : this.M_CB_BankTransfer.receiveraccount
              }

              this.postJSON(this.getUrlInsert(), param)
              .then((response) => {
                if (response == null) return
                this.$parent.resultInsert(response.Message)
              })
            })
          } else {
            var param = {
              OptionSeq: this.getOptionSeq().OptionSeq,
              LineNo: this.$parent.data.PageOrder,
              SubPortfolioCd: this.getDataUser().SubPortfolioCd,
              BatchNo: 0,
              TrxType: this.M_CB_BankTransfer.trxtype == '' || this.M_CB_BankTransfer.trxtype == null ? 'NULL' : this.M_CB_BankTransfer.trxtype,
              TransferNo: this.M_CB_BankTransfer.transferno,
              ReferenceNo: this.M_CB_BankTransfer.referenceno,
              ToBankCd: this.M_CB_BankTransfer.tobankcd == '' || this.M_CB_BankTransfer.tobankcd == null ? 'NULL' : this.M_CB_BankTransfer.tobankcd,
              FromBankCd: this.M_CB_BankTransfer.bankcd == '' || this.M_CB_BankTransfer.bankcd == null ? 'NULL' : this.M_CB_BankTransfer.bankcd,
              TransferDate: this.M_CB_BankTransfer.paymentdate == '' || this.M_CB_BankTransfer.paymentdate == null ? 'NULL' : this.M_CB_BankTransfer.paymentdate,
              Descs: this.M_CB_BankTransfer.descs,
              PaymentCd: this.M_CB_BankTransfer.paymentcd == '' || this.M_CB_BankTransfer.paymentcd == null ? 'NULL' : this.M_CB_BankTransfer.paymentcd,
              ToCurrencyCd: this.M_CB_BankTransfer.tocurrencycd,
              FromCurrencyCd: this.M_CB_BankTransfer.currencycd,
              OriginalCurrencyRate: this.M_CB_BankTransfer.originalcurrencyrate ? this.replaceAllString(this.M_CB_BankTransfer.originalcurrencyrate, ',', '', 'number') : 0,
              CurrencyRate: this.M_CB_BankTransfer.currencyrate ? this.replaceAllString(this.M_CB_BankTransfer.currencyrate, ',', '', 'number') : 0,
              TrxAmt: this.M_CB_BankTransfer.trxamt ? this.replaceAllString(this.M_CB_BankTransfer.trxamt, ',', '', 'number') : 0,
              ToTrxAmt: this.M_CB_BankTransfer.totrxamt ? this.replaceAllString(this.M_CB_BankTransfer.totrxamt, ',', '', 'number') : 0,
              BankChargesAmt: this.M_CB_BankTransfer.bankchargesamt ? this.replaceAllString(this.M_CB_BankTransfer.bankchargesamt, ',', '', 'number') : 0,
              ChequeReferenceNo: this.M_CB_BankTransfer.chequereferenceno,
              ChequeReferenceDate: this.M_CB_BankTransfer.chequereferencedate == '' || this.M_CB_BankTransfer.chequereferencedate == null ? 'NULL' : this.M_CB_BankTransfer.chequereferencedate,
              IssuedBank: this.M_CB_BankTransfer.issuedbank,
              Remarks: this.M_CB_BankTransfer.remarks,
              ChequeDueDate: this.M_CB_BankTransfer.chequeduedate == '' || this.M_CB_BankTransfer.chequeduedate == null ? 'NULL' : this.M_CB_BankTransfer.chequeduedate,
              UserInput: this.getDataUser().UserId,
              ReceiverAccount: this.M_CB_BankTransfer.receiveraccount == '' || this.M_CB_BankTransfer.receiveraccount == null ? 'NULL' : this.M_CB_BankTransfer.receiveraccount
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
              if (response == null) return
              this.$parent.resultInsert(response.Message)
            })
          }
        },
        M_Update() {
          var param = {
            OptionSeq: this.getOptionSeq().OptionSeq,
            LineNo: this.$parent.data.PageOrder,
            SubPortfolioCd: this.getDataUser().SubPortfolioCd,
            BatchNo: this.M_CB_BankTransfer.batchno == '' || this.M_CB_BankTransfer.batchno == null ? 'NULL' : this.M_CB_BankTransfer.batchno,
            TrxType: this.M_CB_BankTransfer.trxtype == '' || this.M_CB_BankTransfer.trxtype == null ? 'NULL' : this.M_CB_BankTransfer.trxtype,
            TransferNo: this.M_CB_BankTransfer.transferno,
            ReferenceNo: this.M_CB_BankTransfer.referenceno,
            TransferDate: this.M_CB_BankTransfer.paymentdate == '' || this.M_CB_BankTransfer.paymentdate == null ? 'NULL' : this.M_CB_BankTransfer.paymentdate,
            ToBankCd: this.M_CB_BankTransfer.tobankcd == '' || this.M_CB_BankTransfer.tobankcd == null ? 'NULL' : this.M_CB_BankTransfer.tobankcd,
            FromBankCd: this.M_CB_BankTransfer.bankcd == '' || this.M_CB_BankTransfer.bankcd == null ? 'NULL' : this.M_CB_BankTransfer.bankcd,
            Descs: this.M_CB_BankTransfer.descs,
            PaymentCd: this.M_CB_BankTransfer.paymentcd == '' || this.M_CB_BankTransfer.paymentcd == null ? 'NULL' : this.M_CB_BankTransfer.paymentcd,
            ToCurrencyCd: this.M_CB_BankTransfer.tocurrencycd,
            FromCurrencyCd: this.M_CB_BankTransfer.currencycd,
            OriginalCurrencyRate: this.M_CB_BankTransfer.originalcurrencyrate ? this.replaceAllString(this.M_CB_BankTransfer.originalcurrencyrate, ',', '', 'number') : 0,
            CurrencyRate: this.M_CB_BankTransfer.currencyrate ? this.replaceAllString(this.M_CB_BankTransfer.currencyrate, ',', '', 'number') : 0,
            TrxAmt: this.M_CB_BankTransfer.trxamt ? this.replaceAllString(this.M_CB_BankTransfer.trxamt, ',', '', 'number') : 0,
            ToTrxAmt: this.M_CB_BankTransfer.totrxamt ? this.replaceAllString(this.M_CB_BankTransfer.totrxamt, ',', '', 'number') : 0,
            BankChargesAmt: this.M_CB_BankTransfer.bankchargesamt ? this.replaceAllString(this.M_CB_BankTransfer.bankchargesamt, ',', '', 'number') : 0,
            ChequeReferenceNo: this.M_CB_BankTransfer.chequereferenceno,
            ChequeReferenceDate: this.M_CB_BankTransfer.chequereferencedate == '' || this.M_CB_BankTransfer.chequereferencedate == null ? 'NULL' : this.M_CB_BankTransfer.chequereferencedate,
            ChequeDueDate: this.M_CB_BankTransfer.chequeduedate == '' || this.M_CB_BankTransfer.chequeduedate == null ? 'NULL' : this.M_CB_BankTransfer.chequeduedate,
            IssuedBank: this.M_CB_BankTransfer.issuedbank,
            UserEdit: this.getDataUser().UserId,
            Remarks: this.M_CB_BankTransfer.remarks,
            LastUpdateStamp: this.M_CB_BankTransfer.lastupdatestamp,
            ReceiverAccount: this.M_CB_BankTransfer.receiveraccount == '' || this.M_CB_BankTransfer.receiveraccount == null ? 'NULL' : this.M_CB_BankTransfer.receiveraccount
          }

          this.postJSON(this.getUrlUpdate(), param)
          .then((response) => {
            if (response == null) return
            this.$parent.resultUpdate(response.Message)
          })
        },
        M_ClearForm() {
            this.M_CB_BankTransfer = {
                batchno: '',
                source: '',
                runningcd: '',
                trxtype: '',
                modulecd: '',
                paymentdate: this.getToday(),
                descs: '',
                paymentcategory: '',
                transferno: '',
                documentcount: '',
                batchtotal: '',
                paymentcd: '',
                bankcd: '',
                tobankcd: '',
                currencycd: '',
                tocurrencycd: '',
                batchstatus: '',
                currencyrate: '',
                originalcurrencyrate: '',
                currencyoperator: '',
                trxamt: '',
                chequereferenceno: '',
                chequereferencedate: '',
                chequeduedate: '',
                issuedbank: '',
                remarks: '',
                trxtypedescs: '',
                paymentdescs: '',
                paymenttype: '',
                frombankname: '',
                tobankname: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                referenceno: '',
                totrxamt: '',
                bankchargesamt: '',
                currentbatchtotal: '',
                currentdocumentcount: '',
                receiveraccount: '',
                name: '',
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                debtorcd: '',
                creditorcd: '',
                debtorid: '',
                creditorid: '',
                timeedit: '',
                lastupdatestamp: 0,
                rowid: 0
            }

        },
        M_New() {

        },
        M_Edit() {},
        M_Delete(dt) {

            var data = this.FormToABSList().getRowSelected()
            var dataDelete = [] 

            data.forEach((value) => {
                dataDelete.push({
                    SubportfolioCd: this.getDataUser().SubPortfolioCd,
                    TransferNo: value.TransferNo,
                    BatchNo: value.BatchNo,
                    UserEdit: this.getDataUser().UserId,
                    lastupdatestamp: value.LastUpdateStamp,
                    _Message_: "Transfer No : "+value.TransferNo
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
        getDataBy(record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                transferno: record.TransferNo
            }

            this.postEncode(this.getUrlById(), param)
                .then(response => {
                    // response from API
                    if (response == null) return

                    var data = response.Data[0]
                    this.M_CB_BankTransfer = {
                        batchno: data.batchno,
                        source: data.source,
                        runningcd: data.runningcd,
                        trxtype: data.trxtype,
                        modulecd: data.modulecd,
                        paymentdate: data.paymentdate,
                        descs: data.descs,
                        paymentcategory: data.paymentcategory,
                        transferno: data.paymentno,
                        documentcount: data.documentcount,
                        batchtotal: data.batchtotal,
                        paymentcd: data.paymentcd,
                        bankcd: data.bankcd,
                        tobankcd: data.tobankcd,
                        currencycd: data.currencycd,
                        tocurrencycd: data.tocurrencycd,
                        batchstatus: data.batchstatus,
                        currencyrate: this.isCurrency(data.currencyrate, this.decimal),
                        originalcurrencyrate: this.isCurrency(data.originalcurrencyrate, this.decimal),
                        currencyoperator: data.currencyoperator,
                        trxamt: this.isCurrency(data.trxamt, this.decimal),
                        chequereferenceno: data.chequereferenceno,
                        chequereferencedate: data.chequereferencedate,
                        chequeduedate: data.chequeduedate,
                        issuedbank: data.issuedbank,
                        remarks: data.remarks,
                        trxtypedescs: data.trxtypedescs,
                        paymentdescs: data.paymentdescs,
                        paymenttype: data.paymenttype,
                        frombankname: data.frombankname,
                        tobankname: data.tobankname,
                        userinput: data.userinput,
                        useredit: data.useredit,
                        referenceno: data.referenceno,
                        totrxamt: this.isCurrency(data.totrxamt, this.decimal),
                        bankchargesamt: this.isCurrency(data.bankchargesamt, this.decimal),
                        currentbatchtotal: data.currentbatchtotal,
                        currentdocumentcount: data.currentdocumentcount,
                        receiveraccount: data.receiveraccount,
                        name: data.name,
                        subportfoliocd: data.subportfoliocd,
                        debtorcd: data.debtorcd,
                        creditorcd: data.creditorcd,
                        debtorid: data.debtorid,
                        creditorid: data.creditorid,
                        timeedit: data.timeedit,
                        lastupdatestamp: record.LastUpdateStamp,
                        rowid: data.rowid
                    }

                    if(data.paymenttype != 'N'){
                        this.PI_chequereferenceno.cValidate = 'required'
                        this.$refs.ref_chequereferenceno.isRequired = true

                        this.PI_chequereferencedate.cValidate = 'required'
                        this.$refs.ref_chequereferencedate.isRequired = true

                        this.PI_issuedbank.cValidate = 'required'
                        this.$refs.ref_issuedbank.isRequired = true

                        this.PI_chequeduedate.cValidate = 'required'
                        this.$refs.ref_chequeduedate.isRequired = true
                    }
                    else{
                        this.PI_chequereferenceno.cValidate = ''
                        this.$refs.ref_chequereferenceno.isRequired = false

                        this.PI_chequereferencedate.cValidate = ''
                        this.$refs.ref_chequereferencedate.isRequired = false

                        this.PI_issuedbank.cValidate = ''
                        this.$refs.ref_issuedbank.isRequired = false

                        this.PI_chequeduedate.cValidate = ''
                        this.$refs.ref_chequeduedate.isRequired = false
                    }

                    this.M_CB_BankTransfer.batchnoLabel = this.M_CB_BankTransfer.batchno != null && this.M_CB_BankTransfer.batchno != '' ? data.batchno + this.separator : ''
                    this.M_CB_BankTransfer.trxtypeLabel = this.M_CB_BankTransfer.trxtype != null && this.M_CB_BankTransfer.trxtype != '' ? data.trxtype + this.separator + data.trxtypedescs : ''
                    this.M_CB_BankTransfer.paymentcdLabel = this.M_CB_BankTransfer.paymentcd != null && this.M_CB_BankTransfer.paymentcd != '' ? data.paymentcd + this.separator + data.paymentdescs : ''
                    this.M_CB_BankTransfer.bankcdLabel = this.M_CB_BankTransfer.bankcd != null && this.M_CB_BankTransfer.bankcd != '' ? data.bankcd + this.separator + data.frombankname : ''
                    this.M_CB_BankTransfer.tobankcdLabel = this.M_CB_BankTransfer.tobankcd != null && this.M_CB_BankTransfer.tobankcd != '' ? data.tobankcd + this.separator + data.tobankname : ''
                    this.M_CB_BankTransfer.receiveraccountLabel = this.M_CB_BankTransfer.receiveraccount != null && this.M_CB_BankTransfer.receiveraccount != '' ? data.receiveraccount + this.separator : ''

                    this.IEBy.Input = data.userinput
                    this.IEBy.Edit = data.useredit

                })
        }

    },
    beforeCreate: function () {},
    created: function () {
      this.$store.commit('setFormType', 'ListProcess')
      this.getToolbar().ProcessPS()
    },
    beforeMount: function () {},
    mounted: function () {
      this.hideSideBarMenu()
      this.FormToABSList().doGetList('', 'eb_getList')
    },
    beforeUpdate: function () {},
    updated: function () {},
    beforeDestroy: function () {},
    destroyed: function () {}
}
</script>
