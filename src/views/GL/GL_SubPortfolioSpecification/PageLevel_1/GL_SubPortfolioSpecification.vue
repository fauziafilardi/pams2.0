<template>
    <div>
        <div :style="'margin-top:10px;'" class="el" mousetip mousetip-msg="I'm a tooltip">
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
                                    <!-- <b-row>
                                      <b-col md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">Open Period / Year From</label>
                                          </b-col>
                                          <b-col>
                                              <input type="text">                                            
                                          </b-col>
                                          <b-col md=1 style="text-align: center">
                                              <span>/</span>
                                          </b-col>
                                          <b-col>
                                              <input type="text">                                            
                                          </b-col>
                                        </b-row>
                                      </b-col>                                        
                                    </b-row>                                     -->
                                    <b-row>
                                      <b-col md="6" v-show="err1">
                                        <b-row v-show="err1">
                                          <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> GL Open Year From must less than GL Open Year To </label></b-col>
                                        </b-row>
                                        <b-row v-show="err2">
                                            <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> GL Open Period From must less than GL Open Period To</label></b-col>
                                        </b-row>
                                        <b-row v-show="err3">
                                            <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> AR Open Year From must less than AR Open Year To </label></b-col>
                                        </b-row>
                                        <b-row v-show="err4">
                                            <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> AR Open Period From must less than AR Open Period To </label></b-col>
                                        </b-row> 
                                        <b-row v-show="err5">
                                            <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> AP Open Year From must less than AP Open Year To </label></b-col>
                                        </b-row> 
                                        <b-row v-show="err6">
                                            <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> AP Open Period From must less than AP Open Period To </label></b-col>
                                        </b-row> 
                                        <b-row v-show="err7">
                                            <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> CB Open Year From must less than CB Open Year To </label></b-col>
                                        </b-row> 
                                        <b-row v-show="err8">
                                            <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> CB Open Period From must less than CB Open Period To </label></b-col>
                                        </b-row> 
                                        <b-row v-show="err9">
                                            <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> FA Open Year From must less than Open FA Year To </label></b-col>
                                        </b-row> 
                                        <b-row v-show="err10">
                                            <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> FA Open Period From must less than FA Open Period To </label></b-col>
                                        </b-row> 
                                        <b-row v-show="err11">
                                            <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> PO Open Year From must less than PO Open Year To </label></b-col>
                                        </b-row> 
                                        <b-row v-show="err12">
                                            <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> PO Open Period From must less than PO Open Period To </label></b-col>
                                        </b-row> 
                                        <b-row v-show="err13">
                                            <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> IC Open Year From must less than IC Open Year To </label></b-col>
                                        </b-row> 
                                        <b-row v-show="err14">
                                            <b-col offset="4"><label class="lbl-value-view-form" style="color:red"> IC Open Period From must less than IC Open Period To </label></b-col>
                                        </b-row>                                             
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">GL Open Period / Year From</label>
                                          </b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_openfinperiod" v-model="M_GL_SubPortfolioSpecification.openfinperiod"  ref="ref_openfinperiod"/> 
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_openfinyear" v-model="M_GL_SubPortfolioSpecification.openfinyear"  ref="ref_openfinyear"/>
                                          </b-col>
                                          <b-col md="1">to</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_tofinperiod" v-model="M_GL_SubPortfolioSpecification.tofinperiod"  ref="ref_tofinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_tofinyear" v-model="M_GL_SubPortfolioSpecification.tofinyear"  ref="ref_tofinyear"/>
                                          </b-col>
                                        </b-row>                                       
                                      </b-col>
                                    </b-row>                                   

                                    <b-row>
                                      <b-col md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">AR Open Period / Year From</label>
                                          </b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_aropenfinperiod" v-model="M_GL_SubPortfolioSpecification.aropenfinperiod"  ref="ref_aropenfinperiod"/>    
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_aropenfinyear" v-model="M_GL_SubPortfolioSpecification.aropenfinyear"  ref="ref_aropenfinyear"/>
                                          </b-col>
                                          <b-col md="1">to</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_artofinperiod" v-model="M_GL_SubPortfolioSpecification.artofinperiod"  ref="ref_artofinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_artofinyear" v-model="M_GL_SubPortfolioSpecification.artofinyear"  ref="ref_artofinyear"/>
                                          </b-col>
                                        </b-row>
                                      </b-col>
                                    </b-row>

                                    <b-row>
                                      <b-col md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">AP Open Period / Year From</label>
                                          </b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_apopenfinperiod" v-model="M_GL_SubPortfolioSpecification.apopenfinperiod"  ref="ref_apopenfinperiod"/>    
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_apopenfinyear" v-model="M_GL_SubPortfolioSpecification.apopenfinyear"  ref="ref_apopenfinyear"/>
                                          </b-col>
                                          <b-col md="1">to</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_aptofinperiod" v-model="M_GL_SubPortfolioSpecification.aptofinperiod"  ref="ref_aptofinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_aptofinyear" v-model="M_GL_SubPortfolioSpecification.aptofinyear"  ref="ref_aptofinyear"/>
                                          </b-col>
                                        </b-row>
                                      </b-col>
                                    </b-row>                                   

                                    <b-row>
                                      <b-col md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">CB Open Period / Year From</label>
                                          </b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_cbopenfinperiod" v-model="M_GL_SubPortfolioSpecification.cbopenfinperiod"  ref="ref_cbopenfinperiod"/>    
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_cbopenfinyear" v-model="M_GL_SubPortfolioSpecification.cbopenfinyear"  ref="ref_cbopenfinyear"/>
                                          </b-col>
                                          <b-col md="1">to</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_cbtofinperiod" v-model="M_GL_SubPortfolioSpecification.cbtofinperiod"  ref="ref_cbtofinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_cbtofinyear" v-model="M_GL_SubPortfolioSpecification.cbtofinyear"  ref="ref_cbtofinyear"/>
                                          </b-col>
                                        </b-row>
                                      </b-col>
                                    </b-row> 
                                    
                                    <b-row>
                                      <b-col md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">FA Open Period / Year From</label>
                                          </b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_faopenfinperiod" v-model="M_GL_SubPortfolioSpecification.faopenfinperiod"  ref="ref_faopenfinperiod"/>    
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_faopenfinyear" v-model="M_GL_SubPortfolioSpecification.faopenfinyear"  ref="ref_faopenfinyear"/>
                                          </b-col>
                                          <b-col md="1">to</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_fatofinperiod" v-model="M_GL_SubPortfolioSpecification.fatofinperiod"  ref="ref_fatofinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_fatofinyear" v-model="M_GL_SubPortfolioSpecification.fatofinyear"  ref="ref_fatofinyear"/>
                                          </b-col>
                                        </b-row>
                                      </b-col>
                                    </b-row>

                                    <b-row>
                                      <b-col md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">PO Open Period / Year From</label>
                                          </b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_poopenfinperiod" v-model="M_GL_SubPortfolioSpecification.poopenfinperiod"  ref="ref_poopenfinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_poopenfinyear" v-model="M_GL_SubPortfolioSpecification.poopenfinyear"  ref="ref_poopenfinyear"/>
                                          </b-col>
                                          <b-col md="1">to</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_potofinperiod" v-model="M_GL_SubPortfolioSpecification.potofinperiod"  ref="ref_potofinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_potofinyear" v-model="M_GL_SubPortfolioSpecification.potofinyear"  ref="ref_potofinyear"/>
                                          </b-col>
                                        </b-row>
                                      </b-col>
                                    </b-row>

                                    <b-row>
                                      <b-col md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for="">IC Open Period / Year From</label>
                                          </b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_icopenfinperiod" v-model="M_GL_SubPortfolioSpecification.icopenfinperiod"  ref="ref_icopenfinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_icopenfinyear" v-model="M_GL_SubPortfolioSpecification.icopenfinyear"  ref="ref_icopenfinyear"/>
                                          </b-col>
                                          <b-col md="1">to</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_ictofinperiod" v-model="M_GL_SubPortfolioSpecification.ictofinperiod"  ref="ref_ictofinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_ictofinyear" v-model="M_GL_SubPortfolioSpecification.ictofinyear"  ref="ref_ictofinyear"/>
                                          </b-col>
                                        </b-row>
                                      </b-col>
                                    </b-row>

                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnuniquereferencenoChange" :prop="PI_uniquereferenceno" v-model="M_GL_SubPortfolioSpecification.uniquereferenceno"  ref="ref_uniquereferenceno" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_bbcfreferenceno" v-model="M_GL_SubPortfolioSpecification.bbcfreferenceno"  ref="ref_bbcfreferenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_budgetbbcfreferenceno" v-model="M_GL_SubPortfolioSpecification.budgetbbcfreferenceno"  ref="ref_budgetbbcfreferenceno"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Revaluation
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnglforexgainaccountcdChange" :prop="PI_glforexgainaccountcd" :value="M_GL_SubPortfolioSpecification.glforexgainaccountcd" :label="M_GL_SubPortfolioSpecification.glforexgainaccountcdLabel" ref="ref_glforexgainaccountcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnglforexlossaccountcdChange" :prop="PI_glforexlossaccountcd" :value="M_GL_SubPortfolioSpecification.glforexlossaccountcd" :label="M_GL_SubPortfolioSpecification.glforexlossaccountcdLabel" ref="ref_glforexlossaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Retained Earning
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnretainedearningtrxtypeChange" :prop="PI_retainedearningtrxtype" :value="M_GL_SubPortfolioSpecification.retainedearningtrxtype" :label="M_GL_SubPortfolioSpecification.retainedearningtrxtypeLabel" ref="ref_retainedearningtrxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnplsuspendaccountcdChange" :prop="PI_plsuspendaccountcd" :value="M_GL_SubPortfolioSpecification.plsuspendaccountcd" :label="M_GL_SubPortfolioSpecification.plsuspendaccountcdLabel" ref="ref_plsuspendaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnbssuspendaccountcdChange" :prop="PI_bssuspendaccountcd" :value="M_GL_SubPortfolioSpecification.bssuspendaccountcd" :label="M_GL_SubPortfolioSpecification.bssuspendaccountcdLabel" ref="ref_bssuspendaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreaccountcdChange" :prop="PI_reaccountcd" :value="M_GL_SubPortfolioSpecification.reaccountcd" :label="M_GL_SubPortfolioSpecification.reaccountcdLabel" ref="ref_reaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_GL_SubPortfolioSpecification.remarks"  ref="ref_remarks" />
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
            FormType: "Form",
      Module:"GL",
      error: false,
      err1: false,
      err2: false,
      err3: false,
      err4: false,
      err5: false,
      err6: false,
      err7: false,
      err8: false,
      err9: false,
      err10: false,
      err11: false,
      err12: false,
      err13: false,
      err14: false,	
            IEBy: {Input: '', Edit: ''},

            M_GL_SubPortfolioSpecification :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                openfinperiod: '0',
                openfinyear: '0',
                tofinperiod: '0',
                tofinyear: '0',
                aropenfinperiod: '0',
                aropenfinyear: '0',
                artofinperiod: '0',
                artofinyear: '0',
                apopenfinperiod: '0',
                apopenfinyear: '0',
                aptofinperiod: '0',
                aptofinyear: '0',
                cbopenfinperiod: '0',
                cbopenfinyear: '0',
                cbtofinperiod: '0',
                cbtofinyear: '0',
                faopenfinperiod: '0',
                faopenfinyear: '0',
                fatofinperiod: '0',
                fatofinyear: '0',
                poopenfinperiod: '0',
                poopenfinyear: '0',
                potofinperiod: '0',
                potofinyear: '0',
                icopenfinperiod: '0',
                icopenfinyear: '0',
                ictofinperiod: '0',
                ictofinyear: '0',
                plsuspendaccountcd: '',
                bssuspendaccountcd: '',
                reaccountcd: '',
                uniquereferenceno: '',
                bbcfreferenceno: '',
                budgetbbcfreferenceno: '',
                pldescs: '',
                bsdescs: '',
                redescs: '',
                transtypedescs: '',
                glforexgainaccountcd: '',
                glforexlossaccountcd: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                retainedearningtrxtype: '',
                remarks: '',
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
                rowid: 0
                    }
            ,					
            PI_openfinperiod: { 
                cValidate :'required|max:2', 
                cName: 'openfinperiod', 
                cLabel: 'GL Open Period / Year From ', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_openfinyear: { 
                cValidate :'required|max:4', 
                cName: 'openfinyear', 
                cLabel: '/', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_tofinperiod: { 
                cValidate :'required|max:2', 
                cName: 'tofinperiod', 
                cLabel: 'to', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_tofinyear: { 
                cValidate :'required|max:4', 
                cName: 'tofinyear', 
                cLabel: '/', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_aropenfinperiod: { 
                cValidate :'required|max:2', 
                cName: 'aropenfinperiod', 
                cLabel: 'AR Open Period / Year From ', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_aropenfinyear: { 
                cValidate :'required|max:4', 
                cName: 'aropenfinyear', 
                cLabel: '/', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_artofinperiod: { 
                cValidate :'required|max:2', 
                cName: 'artofinperiod', 
                cLabel: 'to', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_artofinyear: { 
                cValidate :'required|max:4', 
                cName: 'artofinyear', 
                cLabel: '/', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_apopenfinperiod: { 
                cValidate :'required|max:2', 
                cName: 'apopenfinperiod', 
                cLabel: 'AP Open Period / Year From ', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_apopenfinyear: { 
                cValidate :'required|max:4', 
                cName: 'apopenfinyear', 
                cLabel: '/', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_aptofinperiod: { 
                cValidate :'required|max:2', 
                cName: 'aptofinperiod', 
                cLabel: 'to', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_aptofinyear: { 
                cValidate :'required|max:4', 
                cName: 'aptofinyear', 
                cLabel: '/', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_cbopenfinperiod: { 
                cValidate :'required|max:2', 
                cName: 'cbopenfinperiod', 
                cLabel: 'CB Open Period / Year From ', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_cbopenfinyear: { 
                cValidate :'required|max:4', 
                cName: 'cbopenfinyear', 
                cLabel: '/', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_cbtofinperiod: { 
                cValidate :'required|max:2', 
                cName: 'cbtofinperiod', 
                cLabel: 'to', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_cbtofinyear: { 
                cValidate :'required|max:4', 
                cName: 'cbtofinyear', 
                cLabel: '/', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_faopenfinperiod: { 
                cValidate :'required|max:2', 
                cName: 'faopenfinperiod', 
                cLabel: 'FA Open Period / Year From ', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_faopenfinyear: { 
                cValidate :'required|max:4', 
                cName: 'faopenfinyear', 
                cLabel: '/', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fatofinperiod: { 
                cValidate :'required|max:2', 
                cName: 'fatofinperiod', 
                cLabel: 'to', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_fatofinyear: { 
                cValidate :'required|max:4', 
                cName: 'fatofinyear', 
                cLabel: '/', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_poopenfinperiod: { 
                cValidate :'required|max:2', 
                cName: 'poopenfinperiod', 
                cLabel: 'PO Open Period / Year From ', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_poopenfinyear: { 
                cValidate :'required|max:4', 
                cName: 'poopenfinyear', 
                cLabel: '/', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_potofinperiod: { 
                cValidate :'required|max:2', 
                cName: 'potofinperiod', 
                cLabel: 'to', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_potofinyear: { 
                cValidate :'required|max:4', 
                cName: 'potofinyear', 
                cLabel: '/', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_icopenfinperiod: { 
                cValidate :'required|max:2', 
                cName: 'icopenfinperiod', 
                cLabel: 'IC Open Period / Year From ', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_icopenfinyear: { 
                cValidate :'required|max:4', 
                cName: 'icopenfinyear', 
                cLabel: '/', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_ictofinperiod: { 
                cValidate :'required|max:2', 
                cName: 'ictofinperiod', 
                cLabel: 'to', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_ictofinyear: { 
                cValidate :'required|max:4', 
                cName: 'ictofinyear', 
                cLabel: '/', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_uniquereferenceno: { 
                cValidate :'', 
                cName: 'uniquereferenceno', 
                cId: 'rdbuniquereferenceno', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Unique Reference Number', 
                cLabelSize: 4, 
                cOrder: 5, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_bbcfreferenceno: { 
                cValidate :'max:20', 
                cName: 'bbcfreferenceno', 
                cLabel: 'Beginning Balance Reference No', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_budgetbbcfreferenceno: { 
                cValidate :'max:20', 
                cName: 'budgetbbcfreferenceno', 
                cLabel: 'Budget Beginning Balance Reference No', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_glforexgainaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'glforexgainaccountcd', 
                cLabel: 'Forex Gain Account Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 8, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_glforexlossaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'glforexlossaccountcd', 
                cLabel: 'Forex Loss Account Code', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 9, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_retainedearningtrxtype: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMTransTypeMaster'    , 
                    ColumnDB: 'TrxType'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'retainedearningtrxtype', 
                cLabel: 'Trans. Type', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 10, 
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
                cMasterUrl: 'GL/GL_TransactionType' ,
                cDisplayColumn: 'TrxType,Descs' ,
            }, 
            PI_plsuspendaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'plsuspendaccountcd', 
                cLabel: 'P/L Suspend Account ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 11, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_bssuspendaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'bssuspendaccountcd', 
                cLabel: 'B/S Suspend Account ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 12, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_reaccountcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLAccountCode'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status = 'A'"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'reaccountcd', 
                cLabel: 'Retained Earning Account ', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 13, 
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
                cMasterUrl: 'GL/GL_ChartOfAccount' ,
                cDisplayColumn: 'AccountCd,Descs1' ,
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:14, 
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
    }
  },
    methods: {		
        OnuniquereferencenoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{uniquereferenceno}
            }
        })
        this.$forceUpdate()
        },
        OnglforexgainaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_SubPortfolioSpecification.glforexgainaccountcd = data.id
            this.M_GL_SubPortfolioSpecification.glforexgainaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{glforexgainaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnglforexlossaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_SubPortfolioSpecification.glforexlossaccountcd = data.id
            this.M_GL_SubPortfolioSpecification.glforexlossaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{glforexlossaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnretainedearningtrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_GL_SubPortfolioSpecification.retainedearningtrxtype = data.id
            this.M_GL_SubPortfolioSpecification.retainedearningtrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{retainedearningtrxtype}
            }
        })
        this.$forceUpdate()
        },
        OnplsuspendaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_SubPortfolioSpecification.plsuspendaccountcd = data.id
            this.M_GL_SubPortfolioSpecification.plsuspendaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{plsuspendaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnbssuspendaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_SubPortfolioSpecification.bssuspendaccountcd = data.id
            this.M_GL_SubPortfolioSpecification.bssuspendaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{bssuspendaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnreaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_SubPortfolioSpecification.reaccountcd = data.id
            this.M_GL_SubPortfolioSpecification.reaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{reaccountcd}
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
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                OpenFinPeriod: this.M_GL_SubPortfolioSpecification.openfinperiod,
                OpenFinYear: this.M_GL_SubPortfolioSpecification.openfinyear,
                ToFinPeriod: this.M_GL_SubPortfolioSpecification.tofinperiod,
                ToFinYear: this.M_GL_SubPortfolioSpecification.tofinyear,
                AROpenFinPeriod: this.M_GL_SubPortfolioSpecification.openfinperiod,
                AROpenFinYear: this.M_GL_SubPortfolioSpecification.openfinyear,
                ARToFinPeriod: this.M_GL_SubPortfolioSpecification.tofinperiod,
                ARToFinYear: this.M_GL_SubPortfolioSpecification.tofinyear,
                APOpenFinPeriod: this.M_GL_SubPortfolioSpecification.openfinperiod,
                APOpenFinYear: this.M_GL_SubPortfolioSpecification.openfinyear,
                APToFinPeriod: this.M_GL_SubPortfolioSpecification.tofinperiod,
                APToFinYear: this.M_GL_SubPortfolioSpecification.tofinyear,
                CBOpenFinPeriod: this.M_GL_SubPortfolioSpecification.openfinperiod,
                CBOpenFinYear: this.M_GL_SubPortfolioSpecification.openfinyear,
                CBToFinPeriod: this.M_GL_SubPortfolioSpecification.tofinperiod,
                CBToFinYear: this.M_GL_SubPortfolioSpecification.tofinyear,
                FAOpenFinPeriod: this.M_GL_SubPortfolioSpecification.openfinperiod,
                FAOpenFinYear: this.M_GL_SubPortfolioSpecification.openfinyear,
                FAToFinPeriod: this.M_GL_SubPortfolioSpecification.tofinperiod,
                FAToFinYear: this.M_GL_SubPortfolioSpecification.tofinyear,
                POOpenFinPeriod: this.M_GL_SubPortfolioSpecification.openfinperiod,
                POOpenFinYear: this.M_GL_SubPortfolioSpecification.openfinyear,
                POToFinPeriod: this.M_GL_SubPortfolioSpecification.tofinperiod,
                POToFinYear: this.M_GL_SubPortfolioSpecification.tofinyear,
                ICOpenFinPeriod: this.M_GL_SubPortfolioSpecification.openfinperiod,
                ICOpenFinYear: this.M_GL_SubPortfolioSpecification.openfinyear,
                ICToFinPeriod: this.M_GL_SubPortfolioSpecification.tofinperiod,
                ICToFinYear: this.M_GL_SubPortfolioSpecification.tofinyear,
                UniqueReferenceNo: this.M_GL_SubPortfolioSpecification.uniquereferenceno,
                BBCFReferenceNo: this.M_GL_SubPortfolioSpecification.bbcfreferenceno,
                BudgetBBCFReferenceNo: this.M_GL_SubPortfolioSpecification.bbcfreferenceno,
                PLSuspendAccountCd: this.M_GL_SubPortfolioSpecification.plsuspendaccountcd == '' || this.M_GL_SubPortfolioSpecification.plsuspendaccountcd == null ? 'NULL' : this.M_GL_SubPortfolioSpecification.plsuspendaccountcd ,
                BSSuspendAccountCd: this.M_GL_SubPortfolioSpecification.bssuspendaccountcd == '' || this.M_GL_SubPortfolioSpecification.bssuspendaccountcd == null ? 'NULL' : this.M_GL_SubPortfolioSpecification.bssuspendaccountcd ,
                REAccountCd: this.M_GL_SubPortfolioSpecification.reaccountcd == '' || this.M_GL_SubPortfolioSpecification.reaccountcd == null ? 'NULL' : this.M_GL_SubPortfolioSpecification.reaccountcd ,
                RetainedEarningTrxType: this.M_GL_SubPortfolioSpecification.retainedearningtrxtype == '' || this.M_GL_SubPortfolioSpecification.retainedearningtrxtype == null ? 'NULL' : this.M_GL_SubPortfolioSpecification.retainedearningtrxtype ,
                RetainedEarningModuleCd: 'GL',
                GLForexGainAccountCd: this.M_GL_SubPortfolioSpecification.glforexgainaccountcd == '' || this.M_GL_SubPortfolioSpecification.glforexgainaccountcd == null ? 'NULL' : this.M_GL_SubPortfolioSpecification.glforexgainaccountcd ,
                GLForexLossAccountCd: this.M_GL_SubPortfolioSpecification.glforexlossaccountcd == '' || this.M_GL_SubPortfolioSpecification.glforexlossaccountcd == null ? 'NULL' : this.M_GL_SubPortfolioSpecification.glforexlossaccountcd ,
                Remarks: this.M_GL_SubPortfolioSpecification.remarks,
                UserInput: this.getDataUser().UserId                 
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return
                
                this.alertSuccess(response.Message)
                .then(() => {
                    this.getToolbar().FormStatus = 'EDIT'
                    this.getToolbar().ProcessPS()
                    this.$store.commit('setStatus', 'view')
					this.$store.commit('setEventStatus', 'Save')

                    this.FormToMasterPage().ValidasiPage()
										
					
                })
            })
        },
        M_Update() {
          if(this.M_GL_SubPortfolioSpecification.openfinyear > this.M_GL_SubPortfolioSpecification.tofinyear){              
              this.error = true
              this.err1 = true
              return
            }else{
              this.error = false
              this.err1 = false
            }

            if(this.M_GL_SubPortfolioSpecification.openfinperiod > this.M_GL_SubPortfolioSpecification.tofinperiod && this.M_GL_SubPortfolioSpecification.openfinyear == this.M_GL_SubPortfolioSpecification.tofinyear){
              this.error = true
              this.err2 = true
              return
            }else{
              this.error = false
              this.err2 = false
            }

            if(this.M_GL_SubPortfolioSpecification.aropenfinyear > this.M_GL_SubPortfolioSpecification.artofinyear){              
              this.error = true
              this.err3 = true
              return
            }else{
              this.error = false
              this.err3 = false
            }

            if(this.M_GL_SubPortfolioSpecification.aropenfinperiod > this.M_GL_SubPortfolioSpecification.artofinperiod && this.M_GL_SubPortfolioSpecification.aropenfinyear == this.M_GL_SubPortfolioSpecification.artofinyear){
              this.error = true
              this.err4 = true
              return
            }else{
              this.error = false
              this.err4 = false
            }

            if(this.M_GL_SubPortfolioSpecification.apopenfinyear > this.M_GL_SubPortfolioSpecification.aptofinyear){              
              this.error = true
              this.err5 = true
              return
            }else{
              this.error = false
              this.err5 = false
            }

            if(this.M_GL_SubPortfolioSpecification.apopenfinperiod > this.M_GL_SubPortfolioSpecification.aptofinperiod && this.M_GL_SubPortfolioSpecification.apopenfinyear == this.M_GL_SubPortfolioSpecification.aptofinyear){
              this.error = true
              this.err6 = true
              return
            }else{
              this.error = false
              this.err6 = false
            }

            if(this.M_GL_SubPortfolioSpecification.cbopenfinyear > this.M_GL_SubPortfolioSpecification.cbtofinyear){              
              this.error = true
              this.err7 = true
              return
            }else{
              this.error = false
              this.err7 = false
            }

            if(this.M_GL_SubPortfolioSpecification.cbopenfinperiod > this.M_GL_SubPortfolioSpecification.cbtofinperiod && this.M_GL_SubPortfolioSpecification.cbopenfinyear == this.M_GL_SubPortfolioSpecification.cbtofinyear){
              this.error = true
              this.err8 = true
              return
            }else{
              this.error = false
              this.err8 = false
            }

            if(this.M_GL_SubPortfolioSpecification.faopenfinyear > this.M_GL_SubPortfolioSpecification.fatofinyear){              
              this.error = true
              this.err9 = true
              return
            }else{
              this.error = false
              this.err9 = false
            }

            if(this.M_GL_SubPortfolioSpecification.faopenfinperiod > this.M_GL_SubPortfolioSpecification.fatofinperiod && this.M_GL_SubPortfolioSpecification.faopenfinyear == this.M_GL_SubPortfolioSpecification.fatofinyear){
              this.error = true
              this.err10 = true
              return
            }else{
              this.error = false
              this.err10 = false
            }

            if(this.M_GL_SubPortfolioSpecification.poopenfinyear > this.M_GL_SubPortfolioSpecification.potofinyear){              
              this.error = true
              this.err11 = true
              return
            }else{
              this.error = false
              this.err11 = false
            }

            if(this.M_GL_SubPortfolioSpecification.poopenfinperiod > this.M_GL_SubPortfolioSpecification.potofinperiod && this.M_GL_SubPortfolioSpecification.poopenfinyear == this.M_GL_SubPortfolioSpecification.potofinyear){
              this.error = true
              this.err12 = true
              return
            }else{
              this.error = false
              this.err12 = false
            }

            if(this.M_GL_SubPortfolioSpecification.icopenfinyear > this.M_GL_SubPortfolioSpecification.ictofinyear){              
              this.error = true
              this.err13 = true
              return
            }else{
              this.error = false
              this.err13 = false
            }

            if(this.M_GL_SubPortfolioSpecification.icopenfinperiod > this.M_GL_SubPortfolioSpecification.ictofinperiod && this.M_GL_SubPortfolioSpecification.icopenfinyear == this.M_GL_SubPortfolioSpecification.ictofinyear){
              this.error = true
              this.err14 = true
              return
            }else{
              this.error = false
              this.err14 = false
            }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                OpenFinPeriod: this.M_GL_SubPortfolioSpecification.openfinperiod,
                OpenFinYear: this.M_GL_SubPortfolioSpecification.openfinyear,
                ToFinPeriod: this.M_GL_SubPortfolioSpecification.tofinperiod,
                ToFinYear: this.M_GL_SubPortfolioSpecification.tofinyear,
                AROpenFinPeriod: this.M_GL_SubPortfolioSpecification.aropenfinperiod,
                AROpenFinYear: this.M_GL_SubPortfolioSpecification.aropenfinyear,
                ARToFinPeriod: this.M_GL_SubPortfolioSpecification.artofinperiod,
                ARToFinYear: this.M_GL_SubPortfolioSpecification.artofinyear,
                APOpenFinPeriod: this.M_GL_SubPortfolioSpecification.apopenfinperiod,
                APOpenFinYear: this.M_GL_SubPortfolioSpecification.apopenfinyear,
                APToFinPeriod: this.M_GL_SubPortfolioSpecification.aptofinperiod,
                APToFinYear: this.M_GL_SubPortfolioSpecification.aptofinyear,
                CBOpenFinPeriod: this.M_GL_SubPortfolioSpecification.cbopenfinperiod,
                CBOpenFinYear: this.M_GL_SubPortfolioSpecification.cbopenfinyear,
                CBToFinPeriod: this.M_GL_SubPortfolioSpecification.cbtofinperiod,
                CBToFinYear: this.M_GL_SubPortfolioSpecification.cbtofinyear,
                FAOpenFinPeriod: this.M_GL_SubPortfolioSpecification.faopenfinperiod,
                FAOpenFinYear: this.M_GL_SubPortfolioSpecification.faopenfinyear,
                FAToFinPeriod: this.M_GL_SubPortfolioSpecification.fatofinperiod,
                FAToFinYear: this.M_GL_SubPortfolioSpecification.fatofinyear,
                POOpenFinPeriod: this.M_GL_SubPortfolioSpecification.poopenfinperiod,
                POOpenFinYear: this.M_GL_SubPortfolioSpecification.poopenfinyear,
                POToFinPeriod: this.M_GL_SubPortfolioSpecification.potofinperiod,
                POToFinYear: this.M_GL_SubPortfolioSpecification.potofinyear,
                ICOpenFinPeriod: this.M_GL_SubPortfolioSpecification.icopenfinperiod,
                ICOpenFinYear: this.M_GL_SubPortfolioSpecification.icopenfinyear,
                ICToFinPeriod: this.M_GL_SubPortfolioSpecification.ictofinperiod,
                ICToFinYear: this.M_GL_SubPortfolioSpecification.ictofinyear,
                PLSuspendAccountCd: this.M_GL_SubPortfolioSpecification.plsuspendaccountcd == '' || this.M_GL_SubPortfolioSpecification.plsuspendaccountcd == null ? 'NULL' : this.M_GL_SubPortfolioSpecification.plsuspendaccountcd ,
                BSSuspendAccountCd: this.M_GL_SubPortfolioSpecification.bssuspendaccountcd == '' || this.M_GL_SubPortfolioSpecification.bssuspendaccountcd == null ? 'NULL' : this.M_GL_SubPortfolioSpecification.bssuspendaccountcd ,
                REAccountCd: this.M_GL_SubPortfolioSpecification.reaccountcd == '' || this.M_GL_SubPortfolioSpecification.reaccountcd == null ? 'NULL' : this.M_GL_SubPortfolioSpecification.reaccountcd ,
                RetainedEarningTrxType: this.M_GL_SubPortfolioSpecification.retainedearningtrxtype == '' || this.M_GL_SubPortfolioSpecification.retainedearningtrxtype == null ? 'NULL' : this.M_GL_SubPortfolioSpecification.retainedearningtrxtype ,
                RetainedEarningModuleCd: 'GL',
                GLForexGainAccountCd: this.M_GL_SubPortfolioSpecification.glforexgainaccountcd == '' || this.M_GL_SubPortfolioSpecification.glforexgainaccountcd == null ? 'NULL' : this.M_GL_SubPortfolioSpecification.glforexgainaccountcd ,
                GLForexLossAccountCd: this.M_GL_SubPortfolioSpecification.glforexlossaccountcd == '' || this.M_GL_SubPortfolioSpecification.glforexlossaccountcd == null ? 'NULL' : this.M_GL_SubPortfolioSpecification.glforexlossaccountcd ,
                UniqueReferenceNo: this.M_GL_SubPortfolioSpecification.uniquereferenceno,
                BBCFReferenceNo: this.M_GL_SubPortfolioSpecification.bbcfreferenceno,
                BudgetBBCFReferenceNo: this.M_GL_SubPortfolioSpecification.budgetbbcfreferenceno,
                Remarks: this.M_GL_SubPortfolioSpecification.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_GL_SubPortfolioSpecification.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                this.alertSuccess(response.Message)
                .then(() => {
                    this.getToolbar().setButton(false)
                    this.$store.commit('setStatus', 'view')

                    this.FormToMasterPage().ValidasiPage()
					
                })
            })
        },
		M_ClearForm(){
            this.M_GL_SubPortfolioSpecification = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                openfinperiod: '0',
                openfinyear: '0',
                tofinperiod: '0',
                tofinyear: '0',
                aropenfinperiod: '0',
                aropenfinyear: '0',
                artofinperiod: '0',
                artofinyear: '0',
                apopenfinperiod: '0',
                apopenfinyear: '0',
                aptofinperiod: '0',
                aptofinyear: '0',
                cbopenfinperiod: '0',
                cbopenfinyear: '0',
                cbtofinperiod: '0',
                cbtofinyear: '0',
                faopenfinperiod: '0',
                faopenfinyear: '0',
                fatofinperiod: '0',
                fatofinyear: '0',
                poopenfinperiod: '0',
                poopenfinyear: '0',
                potofinperiod: '0',
                potofinyear: '0',
                icopenfinperiod: '0',
                icopenfinyear: '0',
                ictofinperiod: '0',
                ictofinyear: '0',
                plsuspendaccountcd: '',
                bssuspendaccountcd: '',
                reaccountcd: '',
                uniquereferenceno: '',
                bbcfreferenceno: '',
                budgetbbcfreferenceno: '',
                pldescs: '',
                bsdescs: '',
                redescs: '',
                transtypedescs: '',
                glforexgainaccountcd: '',
                glforexlossaccountcd: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                lastupdatestamp: 0,
                retainedearningtrxtype: '',
                remarks: '',
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
                rowid: 0
                    }
            		
		},
        M_New (){
          // this.$refs.ref_openfinperiod.focus()
        },
        M_Edit (){
          // this.$refs.ref_openfinperiod.focus()
        },
        M_Delete(dt){       

        //nothing
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                subportfoliocd: this.getDataUser().SubPortfolioCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                if(response.Data.length > 0){
                  this.getToolbar().FormStatus = 'EDIT'
                  this.getToolbar().ProcessPS()
                  this.M_GL_SubPortfolioSpecification = {
                    subportfoliocd: data.subportfoliocd,
                    openfinperiod: data.openfinperiod,
                    openfinyear: data.openfinyear,
                    tofinperiod: data.tofinperiod,
                    tofinyear: data.tofinyear,
                    aropenfinperiod: data.aropenfinperiod,
                    aropenfinyear: data.aropenfinyear,
                    artofinperiod: data.artofinperiod,
                    artofinyear: data.artofinyear,
                    apopenfinperiod: data.apopenfinperiod,
                    apopenfinyear: data.apopenfinyear,
                    aptofinperiod: data.aptofinperiod,
                    aptofinyear: data.aptofinyear,
                    cbopenfinperiod: data.cbopenfinperiod,
                    cbopenfinyear: data.cbopenfinyear,
                    cbtofinperiod: data.cbtofinperiod,
                    cbtofinyear: data.cbtofinyear,
                    faopenfinperiod: data.faopenfinperiod,
                    faopenfinyear: data.faopenfinyear,
                    fatofinperiod: data.fatofinperiod,
                    fatofinyear: data.fatofinyear,
                    poopenfinperiod: data.poopenfinperiod,
                    poopenfinyear: data.poopenfinyear,
                    potofinperiod: data.potofinperiod,
                    potofinyear: data.potofinyear,
                    icopenfinperiod: data.icopenfinperiod,
                    icopenfinyear: data.icopenfinyear,
                    ictofinperiod: data.ictofinperiod,
                    ictofinyear: data.ictofinyear,
                    plsuspendaccountcd: data.plsuspendaccountcd,
                    bssuspendaccountcd: data.bssuspendaccountcd,
                    reaccountcd: data.reaccountcd,
                    uniquereferenceno: data.uniquereferenceno,
                    bbcfreferenceno: data.bbcfreferenceno,
                    budgetbbcfreferenceno: data.budgetbbcfreferenceno,
                    pldescs: data.pldescs,
                    bsdescs: data.bsdescs,
                    redescs: data.redescs,
                    transtypedescs: data.transtypedescs,
                    glforexgainaccountcd: data.glforexgainaccountcd,
                    glforexlossaccountcd: data.glforexlossaccountcd,
                    userinput: data.userinput,
                    useredit: data.useredit,
                    lastupdatestamp: data.lastupdatestamp,
                    retainedearningtrxtype: data.retainedearningtrxtype,
                    remarks: data.remarks,
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
                    rowid: data.rowid
                  }
                    this.M_GL_SubPortfolioSpecification.glforexgainaccountcdLabel = this.M_GL_SubPortfolioSpecification.glforexgainaccountcd != null ? data.glforexgainaccountcd  :'' 
                    this.M_GL_SubPortfolioSpecification.glforexlossaccountcdLabel = this.M_GL_SubPortfolioSpecification.glforexlossaccountcd != null ? data.glforexlossaccountcd  :'' 
                    this.M_GL_SubPortfolioSpecification.retainedearningtrxtypeLabel = this.M_GL_SubPortfolioSpecification.retainedearningtrxtype != null ? data.retainedearningtrxtype + this.separator + data.transtypedescs :'' 
                    this.M_GL_SubPortfolioSpecification.plsuspendaccountcdLabel = this.M_GL_SubPortfolioSpecification.plsuspendaccountcd != null ? data.plsuspendaccountcd + this.separator + data.pldescs :'' 
                    this.M_GL_SubPortfolioSpecification.bssuspendaccountcdLabel = this.M_GL_SubPortfolioSpecification.bssuspendaccountcd != null ? data.bssuspendaccountcd + this.separator + data.bsdescs :'' 
                    this.M_GL_SubPortfolioSpecification.reaccountcdLabel = this.M_GL_SubPortfolioSpecification.reaccountcd != null ? data.reaccountcd + this.separator + data.redescs :'' 
         

                    this.IEBy.Input = data.userinput
                    this.IEBy.Edit = data.useredit
                } else {
                  this.getToolbar().FormStatus = 'NEW'
                  this.getToolbar().ProcessPS()
                }

            })
        }
		
    },
    beforeCreate: function () {
    },
    created: function() {
        this.$store.commit('setFormType','Form')
        // this.isDetail = true
    },
    beforeMount: function() {
    },
    mounted: function() {
        this.getDataBy()
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
