<template>
  <div>
    <b-row class="size-modal-content">
                <b-col sm="12" style="margin-left: 4px; margin-bottom: 10px; margin-top: 10px;">
                  <div class="modal-customize-abs__modal-header">
                  <div class="modal-customize-abs__modal-header--title">
                    Journal Detail Information
                  </div>
                  <div
                    class="modal-customize-abs__modal-header--icon"
                    @click="$emit('close')"
                  >
                    <i class="icon-close"></i>
                  </div>
                </div>
                  <div class="modal-customize-abs__modal-body" style="padding-right: 0px;">
                    <!-- <p>Select data</p> -->
                    <div class="box-category">
                      <div class="table--list" style="max-height: 500px; width:100%;">  
                        <!-- <b-row>
                          <b-col md="6">
                              <ABSCompute :prop="PI_budgetcd" v-model="M_BG_ViewBudgetUsage.BudgetCd" />
                          </b-col>
                          <b-col md="6">
                              <ABSCompute :prop="PI_budgetcddescs" v-model="M_BG_ViewBudgetUsage.Descs" />
                          </b-col>
                        </b-row> -->
                        <!--table Header-->
                        <b-row style="padding-bottom:10px;">
                            <b-col md="12">
                                <b-container class="bv-example-row">
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_JournalNo" v-model="M_GL_AccountInquiry.JournalNo" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_LineNo" v-model="M_GL_AccountInquiry.LineNo" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_Descs" v-model="M_GL_AccountInquiry.Descs" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_AccountCd" v-model="M_GL_AccountInquiry.AccountCd" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_CurrencyRate" v-model="M_GL_AccountInquiry.CurrencyRate" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_BaseAmt" v-model="M_GL_AccountInquiry.BaseAmt" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_OtherAmt" v-model="M_GL_AccountInquiry.OtherAmt" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_DebitCredit" v-model="M_GL_AccountInquiry.DebitCredit" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_PortfolioCd" v-model="M_GL_AccountInquiry.PortfolioCd" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_SubPortfolioCd" v-model="M_GL_AccountInquiry.SubPortfolioCd" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_Location" v-model="M_GL_AccountInquiry.Location" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_Type" v-model="M_GL_AccountInquiry.Type" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_Theme" v-model="M_GL_AccountInquiry.Theme" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_Class" v-model="M_GL_AccountInquiry.Class" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_Category" v-model="M_GL_AccountInquiry.Category" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_DocAutIDR" v-model="M_GL_AccountInquiry.DocAutIDR" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_DocAutUSD" v-model="M_GL_AccountInquiry.DocAutUSD" />
                                        </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <ABSCompute :prop="PI_MgmOffice" v-model="M_GL_AccountInquiry.MgmOffice" />
                                        </b-col>
                                    </b-row>
                                    <!-- <table style="font-size: 11px;">                                        
                                        <tbody>
                                            <tr>
                                                <td style="text-align:center;"><span>Journal No</span></td>
                                                <td style="text-align:center;"><span></span></td>                                                
                                            </tr>
                                            <tr>
                                                <td style="text-align:center;"><span>Line No</span></td>
                                                <td style="text-align:center;"><span></span></td>                                                
                                            </tr>
                                            <tr>
                                                <td style="text-align:center;"><span>Description</span></td>
                                                <td style="text-align:center;"><span></span></td>                                                
                                            </tr>
                                            <tr>
                                                <td style="text-align:center;"><span>Account Code</span></td>
                                                <td style="text-align:center;"><span></span></td>                                                
                                            </tr>
                                            <tr>
                                                <td style="text-align:center;"><span>Currency Rate</span></td>
                                                <td style="text-align:center;"><span></span></td>                                                
                                            </tr>
                                            <tr>
                                                <td style="text-align:center;"><span>Base Amount</span></td>
                                                <td style="text-align:center;"><span></span></td>                                                
                                            </tr>
                                            <tr>
                                                <td style="text-align:center;"><span>Other Amount</span></td>
                                                <td style="text-align:center;"><span></span></td>                                                
                                            </tr>
                                            <tr>
                                                <td style="text-align:center;"><span>Debit Credit</span></td>
                                                <td style="text-align:center;"><span></span></td>                                                
                                            </tr>
                                            <tr>
                                                <td style="text-align:center;"><span>Portfolio</span></td>
                                                <td style="text-align:center;"><span></span></td>                                                
                                            </tr>
                                            <tr>
                                                <td style="text-align:center;"><span>SubPortfolio</span></td>
                                                <td style="text-align:center;"><span></span></td>                                                
                                            </tr>
                                            <tr>
                                                <td style="text-align:center;"><span>Location</span></td>
                                                <td style="text-align:center;"><span></span></td>                                                
                                            </tr>
                                            <tr>
                                                <td style="text-align:center;"><span>Type</span></td>
                                                <td style="text-align:center;"><span></span></td>                                                
                                            </tr>
                                            <tr>
                                                <td style="text-align:center;"><span>Theme</span></td>
                                                <td style="text-align:center;"><span></span></td>                                                
                                            </tr>
                                            <tr>
                                                <td style="text-align:center;"><span>Class</span></td>
                                                <td style="text-align:center;"><span></span></td>                                                
                                            </tr>
                                            <tr>
                                                <td style="text-align:center;"><span>Category</span></td>
                                                <td style="text-align:center;"><span></span></td>                                                
                                            </tr>
                                            <tr>
                                                <td style="text-align:center;"><span>Document Authorized IDR</span></td>
                                                <td style="text-align:center;"><span></span></td>                                                
                                            </tr>
                                            <tr>
                                                <td style="text-align:center;"><span>Document Authorized USD</span></td>
                                                <td style="text-align:center;"><span></span></td>                                                
                                            </tr>
                                            <tr>
                                                <td style="text-align:center;"><span>MANAGEMENT OFFICE</span></td>
                                                <td style="text-align:center;"><span></span></td>                                                
                                            </tr>
                                        </tbody>                                                                  
                                    </table> -->
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
        
        dataModalHeader: [],
        M_GL_AccountInquiry: {
              JournalNo: "",
              LineNo: "",
              Descs:"",
              AccountCd:"",
              CurrencyRate: "",
              BaseAmt: 0,
              OtherAmt: "",
              DebitCredit: "",
              PortfolioCd: 0,
              SubPortfolioCd: 0,
              Location:'',
              Type:'',
              Theme:'',
              Class:'',
              Category:'',
              DocAutIDR:'',
              DocAutUSD:'',
              MgmOffice: ''
            },
        PI_JournalNo: { 
            cLabel:'Journal No', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        }, 
        PI_LineNo: { 
            cLabel:'Line No', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_Descs: { 
            cLabel:'Description', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_AccountCd: { 
            cLabel:'Account Code', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_CurrencyRate: { 
            cLabel:'Currency Rate', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_BaseAmt: { 
            cLabel:'Base Amount', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_OtherAmt: { 
            cLabel:'Other Amount', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_DebitCredit: { 
            cLabel:'Debit Credit', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_PortfolioCd: { 
            cLabel:'Portfolio', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_SubPortfolioCd: { 
            cLabel:'SubPortfolio', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_Location: { 
            cLabel:'Location', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_Type: { 
            cLabel:'Type', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_Descs: { 
            cLabel:'Description', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_Theme: { 
            cLabel:'Theme', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_Class: { 
            cLabel:'Class', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_Category: { 
            cLabel:'Category', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_Class: { 
            cLabel:'Class', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_DocAutIDR: { 
            cLabel:'Document Authorized IDR', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_DocAutUSD: { 
            cLabel:'Document Authorized USD', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        },
        PI_MgmOffice: { 
            cLabel:'MANAGEMENT OFFICE', 
            cValue:'', 
            cPageLevel: 1, 
            cTabIndex: 1, 
        }
    };
  },
  methods: {
    getDataModalH(record){        
          var param = {
                OptionSeq:this.getOptionSeq().OptionSeq,
                LineNoV2:0,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                LineNo: record.LineNo,
                JournalNo: record.JournalNo,
                LedgerFlag:  record.ledgersource              
            }
            
            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                
                this.M_GL_AccountInquiry={
                    JournalNo: data.journalno,
                    LineNo: data.lineno,
                    Descs: data.descs,
                    AccountCd: data.accountcd,
                    CurrencyRate: data.currencyrate,
                    BaseAmt: data.baseamt,
                    OtherAmt: data.trxamt,
                    DebitCredit: data.debitcredit,
                    PortfolioCd: data.t0,
                    SubPortfolioCd: data.t1,
                    Location: data.t2,
                    Type: data.t3,
                    Theme: data.t4,
                    Class: data.t5,
                    Category: data.t6,
                    DocAutIDR: data.t7,
                    DocAutUSD: data.t8,
                    MgmOffice: data.t9
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