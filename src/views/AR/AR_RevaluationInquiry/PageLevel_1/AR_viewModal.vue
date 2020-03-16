<template>
  <div>
    <b-row class="size-modal-content">
                <b-col sm="12" style="margin-left: 4px; margin-bottom: 10px; margin-top: 10px;">
                  <div class="modal-customize-abs__modal-header">
                  <div class="modal-customize-abs__modal-header--title">
                    <!-- Journal Detail Information -->
                  </div>
                  <div
                    class="modal-customize-abs__modal-header--icon"
                    @click="$emit('close')"
                  >
                    <i class="icon-close"></i>
                  </div>
                </div>
                  <div class="modal-customize-abs__modal-body" style="padding-right: 0px;">
                    
                    <div class="box-category">
                      <div class="table--list" style="max-height: 500px; width:100%;">  
                        
                        <b-row style="padding-bottom:10px;">
                            <b-col md="12">
                                <b-container class="bv-example-row">
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_debtorcd" v-model="M_AR_RevaluationInquiry.debtorcd" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_trxtype" v-model="M_AR_RevaluationInquiry.trxtype" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_revno" v-model="M_AR_RevaluationInquiry.revno" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_revdate" v-model="M_AR_RevaluationInquiry.revdate" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_status" v-model="M_AR_RevaluationInquiry.status" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_docno" v-model="M_AR_RevaluationInquiry.docno" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_docsource" v-model="M_AR_RevaluationInquiry.docsource" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_descs" v-model="M_AR_RevaluationInquiry.descs" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_prevrevdate" v-model="M_AR_RevaluationInquiry.prevrevdate" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_currency" v-model="M_AR_RevaluationInquiry.currency" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_prevcurrrate" v-model="M_AR_RevaluationInquiry.prevcurrrate" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_currcurrrate" v-model="M_AR_RevaluationInquiry.currcurrrate" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_outamt" v-model="M_AR_RevaluationInquiry.outamt" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_forexgainlossamt" v-model="M_AR_RevaluationInquiry.forexgainlossamt" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_journalrefno" v-model="M_AR_RevaluationInquiry.journalrefno" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_revjournalrefno" v-model="M_AR_RevaluationInquiry.revjournalrefno" />
                                        </b-col>
                                    </b-row>                                    
                                </b-container>
                            </b-col>                            
                        </b-row>                        
                      </div>
                    </div>
                  </div>
                </b-col>
              </b-row>
  </div>
</template>

<script>


export default {
    props: {dataModal:[]},
  data() {
    return {
        FormType: "View",
        dataModalHeader: [],
        M_AR_RevaluationInquiry: {
            debtorcd:'',
            trxtype:'',
            revno:'',
            revdate:'',
            status:'',
            docno:'',
            docsource:'',
            descs:'',
            prevrevdate:'',
            currency:'',
            prevcurrrate:'',
            currcurrrate:'',
            outamt:'',
            forexgainlossamt:'',
            journalrefno:'',
            revjournalrefno:''
            },
        PI_debtorcd: { 
            cLabel:'Debtor Code ', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1,
            cLabelSize: 6 
        }, 
        PI_trxtype: { 
            cLabel:'Trans. Type', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1,
            cLabelSize: 6 
        },
        PI_revno: { 
            cLabel:'Revaluation No', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
            cLabelSize: 6
        },
        PI_revdate: { 
            cLabel:'Revaluation Date', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
            cLabelSize: 6
        },
        PI_status: { 
            cLabel:'Status', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
            cLabelSize: 6
        },
        PI_docno: { 
            cLabel:'Doc. No', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1,
            cLabelSize: 6 
        },
        PI_docsource: { 
            cLabel:'Doc. Source', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1,
            cLabelSize: 6 
        },
        PI_descs: { 
            cLabel:'Description', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1,
            cLabelSize: 6 
        },
        PI_prevrevdate: { 
            cLabel:'Previous Revaluation Date', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1,
            cLabelSize: 6 
        },
        PI_currency: { 
            cLabel:'Currency', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1,
            cLabelSize: 6 
        },
        PI_prevcurrrate: { 
            cLabel:'Previous Currency Rate', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1,
            cLabelSize: 6 
        },
        PI_currcurrrate: { 
            cLabel:'Current Currency Rate', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
            cLabelSize: 6
        },
        PI_outamt: { 
            cLabel:'Outstanding Amount', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1,
            cLabelSize: 6 
        },
        PI_forexgainlossamt: { 
            cLabel:'Forex Gain/Loss Amount', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1,
            cLabelSize: 6 
        },
        PI_journalrefno: { 
            cLabel:'Journal Reference No', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1,
            cLabelSize: 6 
        },
        PI_revjournalrefno: { 
            cLabel:'Reversal Journal Reference No', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1,
            cLabelSize: 6 
        },
    };
  },
  methods: {
    getDataModalH(record){
          var param = {
                OptionSeq:this.getOptionSeq().OptionSeq,
                LineNo:0,
                SequenceNo: record.SequenceNo                              
            }
            
            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]               
                console.log('data modal')
                console.log(data)
                this.M_AR_RevaluationInquiry={
                    debtorcd:data.debtorcd,
                    trxtype:data.trxtype,
                    revno:data.revaluationno,
                    revdate:data.revaluationdate,
                    status:data.status,
                    docno:data.documentno,
                    docsource:data.source,
                    descs:data.descs,
                    prevrevdate:data.previousrevaluationdate,
                    currency:data.currencycd,
                    prevcurrrate:this.isCurrency(data.previouscurrencyrate, this.decimal),
                    currcurrrate:this.isCurrency(data.currentcurrencyrate, this.decimal),
                    outamt:this.isCurrency(data.outstandingamt, this.decimal),
                    forexgainlossamt:this.isCurrency(data.forexgainlossamt, this.decimal),
                    journalrefno:data.journalreferenceno,
                    revjournalrefno:data.reversaljournalreferenceno
                }

                if(data.status == 'P'){
                    this.M_AR_RevaluationInquiry.status = 'Posted'
                }else{ 
                    this.M_AR_RevaluationInquiry.status = 'New/Pending'
                }

                if(data.source == 'I'){
                    this.M_AR_RevaluationInquiry.source = 'Invoice Manual'
                }else if(data.source == 'A'){
                    this.M_AR_RevaluationInquiry.source = 'Advance'
                }else if(data.source == 'T'){
                    this.M_AR_RevaluationInquiry.source = 'Deposit  '
                }else if(data.source == 'R'){
                    this.M_AR_RevaluationInquiry.source = 'Advance From OR'
                }else if(data.source == 'C'){
                    this.M_AR_RevaluationInquiry.source = 'Credit Note To Account'
                }else if(data.source == 'D'){
                    this.M_AR_RevaluationInquiry.source = 'Debit Note'
                }else if(data.source == 'G'){
                    this.M_AR_RevaluationInquiry.source = 'Invoice Generated'
                }else{
                    this.M_AR_RevaluationInquiry.source = 'Invoice Deposit'
                }
            })
        }
  },
  beforeCreate: function () {   
      
  },
  created: function() {
    //   this.M_BG_ViewBudgetUsage.BudgetCd = this.dataModal.BudgetCd
    //   this.M_BG_ViewBudgetUsage.Descs = this.dataModal.Descs
    //   console.log(JSON.stringify(this.dataModal,null,2))
      this.getDataModalH(this.dataModal)
    // this.getDataModalD(this.dataModal)
  },
  beforeMount: function() {
  },
  mounted: function() {
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
<style scoped>
    table {
    border-collapse: collapse;
    }

    table, td, th {
        border: 1px solid black;
        padding: 0px 5px 0px 5px;
    }
      .size-modal-content {
            padding: 10px;
            font-style: 13px;
        }
        .v--modal-overlay[data-modal="size-modal"] {
            background: rgba(0, 0, 0, 0.5);
        }
        .demo-modal-class {
            border-radius: 5px;
            background: #F7F7F7;
            box-shadow: 5px 5px 30px 0px rgba(46,61,73, 0.6);
        }
        .container{
            margin-left: 0px !important;
        }
</style>