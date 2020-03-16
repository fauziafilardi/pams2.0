<template>
    <div>        
    <ABSListVuex
      :prop="propList"
      :title="data.QueryName"
      @rowClicked="$parent.rowClicked"
      @rowDblClicked="$parent.doDoubleClick"
      @rowLinkClick="$parent.rowLink"
      @pageSize="$parent.M_PageSize"
      @pagination="$parent.M_Pagination"
      @filter="$parent.M_Advance_Filter"
      @headTable="$parent.M_Head_Table"
      @refreshColumn="$parent.refreshColumn"
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
                                <b-col md="12" id="col-left">
                                    <b-row>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_TaxCd" v-model="M_CM_TaxMaster.TaxCd" ref='ref_TaxCd'/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_Descs" v-model="M_CM_TaxMaster.Descs" ref='ref_Descs'/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex :prop="PI_Category" v-model="M_CM_TaxMaster.Category" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex :prop="PI_FinalWithholdingTax" v-model="M_CM_TaxMaster.FinalWithholdingTax" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex :prop="PI_VATFree" v-model="M_CM_TaxMaster.VATFree" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_JoinLevel" v-model="M_CM_TaxMaster.JoinLevel"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                        <b-col md="6">
                                            <b-row>
                                                <b-col md="4" class="lbl-col-align"></b-col>                                                
                                                <b-col><label class="lbl-value-view-form">* 0 artinya selalu dipisah. Jadi kalau mau disatukan, isi dengan angka yang sama tapi selain 0.</label></b-col>
                                            </b-row>                                              
                                        </b-col>
                                    </b-row>
                                </b-col>                  
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
    props: {PageLevel: '', TabIndex: '', data: ''},
    data() {
        return {
		FormType: "List",
        Module:"CM",
        cInsertKey: "id=TaxCd,label=TaxCd+|+Descs",
            propList: {
                initialWhere: "",
                LineNo: this.$parent.data.PageOrder,
                PageLevel: this.PageLevel,
                TabIndex: this.TabIndex, 
                OrderBy: '' 
            },
       
            IEBy: {Input: '', Edit: ''},

            M_CM_TaxMaster :{
                TaxCd: '',
                Descs: '',
                Category: 'E',
                JoinLevel: '0',
                T0: '',
                T1: '',
                T2: '',
                T3: '',
                T4: '',
                T5: '',
                T6: '',
                T7: '',
                T8: '',
                T9: '',
                T10: '',
                T11: '',
                T12: '',
                T13: '',
                T14: '',
                T15: '',
                T16: '',
                T17: '',
                T18: '',
                T19: '',
                T20: '',
                T21: '',
                T22: '',
                T23: '',
                T24: '',
                T25: '',
                T26: '',
                T27: '',
                T28: '',
                T29: '',
                T30: '',
                Status: '',
                UserInput: '',
                UserEdit: this.getDataUser().UserId,
                TimeInput: '',
                TimeEdit: '',
                LastUpdateStamp: 0,
                ControlSequenceNo: 0,
                FinalWithholdingTax: 'Y',
                VATFree: 'N',
                RowId: 0
            },
            PI_TaxCd: { 
                cValidate :'required|max:4', 
                cName:'TaxCd', 
                cLabel:'Tax Code', 
                cOrder:1, 
                cKey:true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex,
                cKey: true 
            }, 
            PI_Descs: { 
                cValidate :'required|max:60', 
                cName:'Descs', 
                cLabel:'Description', 
                cOrder:2, 
                cKey:false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_Category: { 
                cValidate :'', 
                cName:'Category', 
                cId:'rdbCategory', 
                cRadioOptions: [{ text: 'Inclusive', value: 'I' },{ text: 'Exclusive', value: 'E' },], 
                cLabel:'VAT Category', 
                cOrder:3, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_FinalWithholdingTax: { 
                cValidate :'', 
                cName:'FinalWithholdingTax', 
                cId:'rdbFinalWithholdingTax', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cLabel:'Final Withholding Tax', 
                cOrder:4, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_VATFree: { 
                cValidate :'', 
                cName:'VATFree', 
                cId:'rdbVATFree', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cLabel:'VAT Exemption', 
                cOrder:5, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_JoinLevel: { 
                cValidate :'required|max:12', 
                cName:'JoinLevel', 
                cLabel:'Join Level', 
                cOrder:6, 
                cKey:false, 
                cType: 'numeric',
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
            if (this.$store.getters.getLevel == this.PageLevel && this.$store.getters.getTab == this.TabIndex) {
                return this.$store.getters.getStatus.toUpperCase()
            } else {
                return 'VIEW'
            }
        }
  },
    methods: {		
	
		setToolbarButton () {
           //this.getToolbar().statusFunction[4].disabled = false
		},
        M_Head_Table () {
        },
        M_PageSize () {
        },
        M_TabClick () {
        },
        M_Pagination () {
        },
        M_Advance_Filter() {
        },
        M_Search (data) {
        },
        M_Post () {
        },
        M_Refresh () {
        },
		M_ClearForm(){
            this.M_CM_TaxMaster ={
                TaxCd: '',
                Descs: '',
                Category: 'E',
                JoinLevel: '',
                T0: '',
                T1: '',
                T2: '',
                T3: '',
                T4: '',
                T5: '',
                T6: '',
                T7: '',
                T8: '',
                T9: '',
                T10: '',
                T11: '',
                T12: '',
                T13: '',
                T14: '',
                T15: '',
                T16: '',
                T17: '',
                T18: '',
                T19: '',
                T20: '',
                T21: '',
                T22: '',
                T23: '',
                T24: '',
                T25: '',
                T26: '',
                T27: '',
                T28: '',
                T29: '',
                T30: '',
                Status: '',
                UserInput: '',
                UserEdit: this.getDataUser().UserId,
                TimeInput: '',
                TimeEdit: '',
                LastUpdateStamp: 0,
                ControlSequenceNo: 0,
                FinalWithholdingTax: 'Y',
                VATFree: 'N',
                RowId: 0
                    }
            		
		},
        M_New () {
            this.$refs.ref_TaxCd.focus()
        },
        M_Edit() {
            this.$refs.ref_Descs.focus()
        },
        M_Delete (dt) {
        var data = this.FormToABSList().getRowSelected()  
        var dataDelete = []

        
        data.forEach((value) => {
          dataDelete.push({
          TaxCd: value.TaxCd,
          SubPortfolioCd: this.getDataUser().SubPortfolioCd,
          TaxType: value.TaxType,
          LastUpdateStamp: value.LastUpdateStamp,
          _Message: ''
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
        // SaveData () {
        M_Insert () {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                TaxCd: this.M_CM_TaxMaster.TaxCd,
                Descs: this.M_CM_TaxMaster.Descs,
                // JoinLevel: this.M_CM_TaxMaster.JoinLevel ? this.replaceAllString(this.M_CM_TaxMaster.JoinLevel, ",", "").split(".")[0] : 0 ,
                JoinLevel: this.M_CM_TaxMaster.JoinLevel,
                Category: this.M_CM_TaxMaster.Category,
                FinalWithholdingTax: this.M_CM_TaxMaster.FinalWithholdingTax,
                VATFree: this.M_CM_TaxMaster.VATFree,
                UserInput: this.getDataUser().UserId                 
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                
                this.$parent.resultInsert(response.Message)
            })

        },
        // UpdateData () {
        M_Update () {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                TaxCd: this.M_CM_TaxMaster.TaxCd,
                Descs: this.M_CM_TaxMaster.Descs,
                // JoinLevel: this.M_CM_TaxMaster.JoinLevel ? this.replaceAllString(this.M_CM_TaxMaster.JoinLevel, ",", "").split(".")[0] : 0 ,
                JoinLevel: this.M_CM_TaxMaster.JoinLevel,
                Category: this.M_CM_TaxMaster.Category,
                FinalWithholdingTax: this.M_CM_TaxMaster.FinalWithholdingTax,
                VATFree: this.M_CM_TaxMaster.VATFree,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_CM_TaxMaster.LastUpdateStamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.$parent.resultUpdate(response.Message)
            })
        },
        M_Cancel() {
        },
        paramFromParent () {
        },
		rowClicked (record, index) {
        },
        doDoubleClick () {
        },
        rowLink (url) {
            // this.$refs.modalTest.show()
        },
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                TaxCd: record.TaxCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                this.M_CM_TaxMaster = {
                    TaxCd: data.taxcd,
                    Descs: data.descs,
                    Category: data.category,
                    JoinLevel: data.joinlevel,
                    T0: data.t0,
                    T1: data.t1,
                    T2: data.t2,
                    T3: data.t3,
                    T4: data.t4,
                    T5: data.t5,
                    T6: data.t6,
                    T7: data.t7,
                    T8: data.t8,
                    T9: data.t9,
                    T10: data.t10,
                    T11: data.t11,
                    T12: data.t12,
                    T13: data.t13,
                    T14: data.t14,
                    T15: data.t15,
                    T16: data.t16,
                    T17: data.t17,
                    T18: data.t18,
                    T19: data.t19,
                    T20: data.t20,
                    T21: data.t21,
                    T22: data.t22,
                    T23: data.t23,
                    T24: data.t24,
                    T25: data.t25,
                    T26: data.t26,
                    T27: data.t27,
                    T28: data.t28,
                    T29: data.t29,
                    T30: data.t30,
                    Status: data.status,
                    UserInput: data.userinput,
                    UserEdit: data.useredit,
                    TimeInput: data.timeinput,
                    TimeEdit: data.timeedit,
                    LastUpdateStamp: record.LastUpdateStamp,
                    ControlSequenceNo: data.controlsequenceno,
                    FinalWithholdingTax: data.finalwithholdingtax,
                    VATFree: data.vatfree,
                    RowId: data.rowid
                }
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

