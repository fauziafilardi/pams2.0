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
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for=""><span style="color:red;">* </span>GL Open Period / Year From</label>
                                          </b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_openfinperiod" v-model="M_GL_SubPortfolioSpecification_LIPPO.openfinperiod"  ref="ref_openfinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_openfinyear" v-model="M_GL_SubPortfolioSpecification_LIPPO.openfinyear"  ref="ref_openfinyear"/>
                                          </b-col>
                                          <b-col md="1">to</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_tofinperiod" v-model="M_GL_SubPortfolioSpecification_LIPPO.tofinperiod"  ref="ref_tofinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_tofinyear" v-model="M_GL_SubPortfolioSpecification_LIPPO.tofinyear"  ref="ref_tofinyear"/>
                                          </b-col>
                                        </b-row>
                                      </b-col>                                      
                                    </b-row>                                   

                                    <b-row>
                                      <b-col md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for=""><span style="color:red;">* </span>AR Open Period / Year From</label>
                                          </b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_aropenfinperiod" v-model="M_GL_SubPortfolioSpecification_LIPPO.aropenfinperiod"  ref="ref_aropenfinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_aropenfinyear" v-model="M_GL_SubPortfolioSpecification_LIPPO.aropenfinyear"  ref="ref_aropenfinyear"/>
                                          </b-col>
                                          <b-col md="1">to</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_artofinperiod" v-model="M_GL_SubPortfolioSpecification_LIPPO.artofinperiod"  ref="ref_artofinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_artofinyear" v-model="M_GL_SubPortfolioSpecification_LIPPO.artofinyear"  ref="ref_artofinyear"/>
                                          </b-col>
                                        </b-row>
                                      </b-col>                                      
                                    </b-row>

                                    <b-row>
                                      <b-col md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for=""><span style="color:red;">* </span>AP Open Period / Year From</label>
                                          </b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_apopenfinperiod" v-model="M_GL_SubPortfolioSpecification_LIPPO.apopenfinperiod"  ref="ref_apopenfinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_apopenfinyear" v-model="M_GL_SubPortfolioSpecification_LIPPO.apopenfinyear"  ref="ref_apopenfinyear"/>
                                          </b-col>
                                          <b-col md="1">to</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_aptofinperiod" v-model="M_GL_SubPortfolioSpecification_LIPPO.aptofinperiod"  ref="ref_aptofinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_aptofinyear" v-model="M_GL_SubPortfolioSpecification_LIPPO.aptofinyear"  ref="ref_aptofinyear"/>
                                          </b-col>
                                        </b-row>
                                      </b-col>                                      
                                    </b-row>

                                    <b-row>
                                      <b-col md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for=""><span style="color:red;">* </span>CB Open Period / Year From </label>
                                          </b-col>
                                          <b-col  md="1">
                                            <ABSTextBoxOnly :prop="PI_cbopenfinperiod" v-model="M_GL_SubPortfolioSpecification_LIPPO.cbopenfinperiod"  ref="ref_cbopenfinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_cbopenfinyear" v-model="M_GL_SubPortfolioSpecification_LIPPO.cbopenfinyear"  ref="ref_cbopenfinyear"/>
                                          </b-col>
                                          <b-col md="1">to</b-col>
                                          <b-col md="1">                                            
                                            <ABSTextBoxOnly :prop="PI_cbtofinperiod" v-model="M_GL_SubPortfolioSpecification_LIPPO.cbtofinperiod"  ref="ref_cbtofinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_cbtofinyear" v-model="M_GL_SubPortfolioSpecification_LIPPO.cbtofinyear"  ref="ref_cbtofinyear"/>
                                          </b-col>
                                        </b-row>
                                      </b-col>
                                    </b-row>

                                    <b-row>
                                      <b-col md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for=""><span style="color:red;">* </span>FA Open Period / Year From </label>
                                          </b-col>
                                          <b-col  md="1">
                                            <ABSTextBoxOnly :prop="PI_faopenfinperiod" v-model="M_GL_SubPortfolioSpecification_LIPPO.faopenfinperiod"  ref="ref_faopenfinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_faopenfinyear" v-model="M_GL_SubPortfolioSpecification_LIPPO.faopenfinyear"  ref="ref_faopenfinyear"/>
                                          </b-col>
                                          <b-col md="1">to</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_fatofinperiod" v-model="M_GL_SubPortfolioSpecification_LIPPO.fatofinperiod"  ref="ref_fatofinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_fatofinyear" v-model="M_GL_SubPortfolioSpecification_LIPPO.fatofinyear"  ref="ref_fatofinyear"/>
                                          </b-col>
                                        </b-row>
                                      </b-col>
                                    </b-row> 

                                    <b-row>
                                      <b-col md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for=""><span style="color:red;">* </span>PO Open Period / Year From </label>
                                          </b-col>
                                          <b-col  md="1">
                                            <ABSTextBoxOnly :prop="PI_poopenfinperiod" v-model="M_GL_SubPortfolioSpecification_LIPPO.poopenfinperiod"  ref="ref_poopenfinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_poopenfinyear" v-model="M_GL_SubPortfolioSpecification_LIPPO.poopenfinyear"  ref="ref_poopenfinyear"/>
                                          </b-col>
                                          <b-col md="1">to</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_potofinperiod" v-model="M_GL_SubPortfolioSpecification_LIPPO.potofinperiod"  ref="ref_potofinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_potofinyear" v-model="M_GL_SubPortfolioSpecification_LIPPO.potofinyear"  ref="ref_potofinyear"/>
                                          </b-col>
                                        </b-row>
                                      </b-col>
                                    </b-row>

                                    <b-row>
                                      <b-col md="6">
                                        <b-row>
                                          <b-col md="4" class="lbl-col-align">
                                            <label :class="inputStatus=='VIEW' ? 'lbl-view-form' : 'text-field-form'" for=""><span style="color:red;">* </span>IC Open Period / Year From </label>
                                          </b-col>
                                          <b-col  md="1">
                                            <ABSTextBoxOnly :prop="PI_icopenfinperiod" v-model="M_GL_SubPortfolioSpecification_LIPPO.icopenfinperiod"  ref="ref_icopenfinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_icopenfinyear" v-model="M_GL_SubPortfolioSpecification_LIPPO.icopenfinyear"  ref="ref_icopenfinyear"/>
                                          </b-col>
                                          <b-col md="1">to</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_ictofinperiod" v-model="M_GL_SubPortfolioSpecification_LIPPO.ictofinperiod"  ref="ref_ictofinperiod"/>
                                          </b-col>
                                          <b-col md="1">/</b-col>
                                          <b-col md="1">
                                            <ABSTextBoxOnly :prop="PI_ictofinyear" v-model="M_GL_SubPortfolioSpecification_LIPPO.ictofinyear"  ref="ref_ictofinyear"/>
                                          </b-col>
                                        </b-row>
                                      </b-col>
                                    </b-row>  

                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnuniquereferencenoChange" :prop="PI_uniquereferenceno" v-model="M_GL_SubPortfolioSpecification_LIPPO.uniquereferenceno"  ref="ref_uniquereferenceno" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_bbcfreferenceno" v-model="M_GL_SubPortfolioSpecification_LIPPO.bbcfreferenceno"  ref="ref_bbcfreferenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_budgetbbcfreferenceno" v-model="M_GL_SubPortfolioSpecification_LIPPO.budgetbbcfreferenceno"  ref="ref_budgetbbcfreferenceno"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Revaluation
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnglforexgainaccountcdChange" :prop="PI_glforexgainaccountcd" :value="M_GL_SubPortfolioSpecification_LIPPO.glforexgainaccountcd" :label="M_GL_SubPortfolioSpecification_LIPPO.glforexgainaccountcdLabel" ref="ref_glforexgainaccountcd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnglforexlossaccountcdChange" :prop="PI_glforexlossaccountcd" :value="M_GL_SubPortfolioSpecification_LIPPO.glforexlossaccountcd" :label="M_GL_SubPortfolioSpecification_LIPPO.glforexlossaccountcdLabel" ref="ref_glforexlossaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <div class="div-collapse">
                                        <span class="master-span-form">
                                            Retained Earning
                                        </span>
                                    </div>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnretainedearningtrxtypeChange" :prop="PI_retainedearningtrxtype" :value="M_GL_SubPortfolioSpecification_LIPPO.retainedearningtrxtype" :label="M_GL_SubPortfolioSpecification_LIPPO.retainedearningtrxtypeLabel" ref="ref_retainedearningtrxtype"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnplsuspendaccountcdChange" :prop="PI_plsuspendaccountcd" :value="M_GL_SubPortfolioSpecification_LIPPO.plsuspendaccountcd" :label="M_GL_SubPortfolioSpecification_LIPPO.plsuspendaccountcdLabel" ref="ref_plsuspendaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnbssuspendaccountcdChange" :prop="PI_bssuspendaccountcd" :value="M_GL_SubPortfolioSpecification_LIPPO.bssuspendaccountcd" :label="M_GL_SubPortfolioSpecification_LIPPO.bssuspendaccountcdLabel" ref="ref_bssuspendaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnreaccountcdChange" :prop="PI_reaccountcd" :value="M_GL_SubPortfolioSpecification_LIPPO.reaccountcd" :label="M_GL_SubPortfolioSpecification_LIPPO.reaccountcdLabel" ref="ref_reaccountcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_GL_SubPortfolioSpecification_LIPPO.remarks"  ref="ref_remarks" />
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

            M_GL_SubPortfolioSpecification_LIPPO :{
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
                    LookUpCd: 'GetLookupGLAccountCodeReport'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status in ('A','S')"   , 
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
                    LookUpCd: 'GetLookupGLAccountCodeReport'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status in ('A','S')"   , 
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
                    InitialWhere: "ModuleCd = 'GL' and RunningCd<>''"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'retainedearningtrxtype', 
                cLabel: 'Trans. Type ', 
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
                    LookUpCd: 'GetLookupGLAccountCodeReport'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status in ('A','S')"   , 
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
                    LookUpCd: 'GetLookupGLAccountCodeReport'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status in ('A','S')"   , 
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
                    LookUpCd: 'GetLookupGLAccountCodeReport'    , 
                    ColumnDB: 'AccountCd'   , 
                    InitialWhere: "Status in ('A','S')"   , 
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
            this.M_GL_SubPortfolioSpecification_LIPPO.glforexgainaccountcd = data.id
            this.M_GL_SubPortfolioSpecification_LIPPO.glforexgainaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{glforexgainaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnglforexlossaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_SubPortfolioSpecification_LIPPO.glforexlossaccountcd = data.id
            this.M_GL_SubPortfolioSpecification_LIPPO.glforexlossaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{glforexlossaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnretainedearningtrxtypeChange (data) {
        this.$nextTick(() => {
            this.M_GL_SubPortfolioSpecification_LIPPO.retainedearningtrxtype = data.id
            this.M_GL_SubPortfolioSpecification_LIPPO.retainedearningtrxtypeLabel = data.label
            if (this.inputStatus != "VIEW") {
//{retainedearningtrxtype}
            }
        })
        this.$forceUpdate()
        },
        OnplsuspendaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_SubPortfolioSpecification_LIPPO.plsuspendaccountcd = data.id
            this.M_GL_SubPortfolioSpecification_LIPPO.plsuspendaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{plsuspendaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnbssuspendaccountcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_SubPortfolioSpecification_LIPPO.bssuspendaccountcd = data.id
            this.M_GL_SubPortfolioSpecification_LIPPO.bssuspendaccountcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{bssuspendaccountcd}
            }
        })
        this.$forceUpdate()
        },
        OnreaccountcdChange (data) {
          console.log(data)
        this.$nextTick(() => {
            this.M_GL_SubPortfolioSpecification_LIPPO.reaccountcd = data.id
            this.M_GL_SubPortfolioSpecification_LIPPO.reaccountcdLabel = data.label
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
            if(this.M_GL_SubPortfolioSpecification_LIPPO.openfinyear > this.M_GL_SubPortfolioSpecification_LIPPO.tofinyear){              
              this.error = true
              this.err1 = true
              return
            }else{
              this.error = false
              this.err1 = false
            }
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq, 
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.getDataUser().SubPortfolioCd,
                OpenFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.openfinperiod,
                OpenFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.openfinyear,
                ToFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.tofinperiod,
                ToFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.tofinyear,
                AROpenFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.openfinperiod,
                AROpenFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.openfinyear,
                ARToFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.tofinperiod,
                ARToFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.tofinyear,
                APOpenFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.openfinperiod,
                APOpenFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.openfinyear,
                APToFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.tofinperiod,
                APToFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.tofinyear,
                CBOpenFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.openfinperiod,
                CBOpenFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.openfinyear,
                CBToFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.tofinperiod,
                CBToFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.tofinyear,
                FAOpenFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.openfinperiod,
                FAOpenFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.openfinyear,
                FAToFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.tofinperiod,
                FAToFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.tofinyear,
                POOpenFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.openfinperiod,
                POOpenFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.openfinyear,
                POToFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.tofinperiod,
                POToFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.tofinyear,
                ICOpenFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.openfinperiod,
                ICOpenFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.openfinyear,
                ICToFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.tofinperiod,
                ICToFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.tofinyear,
                UniqueReferenceNo: this.M_GL_SubPortfolioSpecification_LIPPO.uniquereferenceno,
                BBCFReferenceNo: this.M_GL_SubPortfolioSpecification_LIPPO.bbcfreferenceno,
                BudgetBBCFReferenceNo: this.M_GL_SubPortfolioSpecification_LIPPO.bbcfreferenceno,
                PLSuspendAccountCd: this.M_GL_SubPortfolioSpecification_LIPPO.plsuspendaccountcd == '' || this.M_GL_SubPortfolioSpecification_LIPPO.plsuspendaccountcd == null ? 'NULL' : this.M_GL_SubPortfolioSpecification_LIPPO.plsuspendaccountcd ,
                BSSuspendAccountCd: this.M_GL_SubPortfolioSpecification_LIPPO.bssuspendaccountcd == '' || this.M_GL_SubPortfolioSpecification_LIPPO.bssuspendaccountcd == null ? 'NULL' : this.M_GL_SubPortfolioSpecification_LIPPO.bssuspendaccountcd ,
                REAccountCd: this.M_GL_SubPortfolioSpecification_LIPPO.reaccountcd == '' || this.M_GL_SubPortfolioSpecification_LIPPO.reaccountcd == null ? 'NULL' : this.M_GL_SubPortfolioSpecification_LIPPO.reaccountcd ,
                RetainedEarningTrxType: this.M_GL_SubPortfolioSpecification_LIPPO.retainedearningtrxtype == '' || this.M_GL_SubPortfolioSpecification_LIPPO.retainedearningtrxtype == null ? 'NULL' : this.M_GL_SubPortfolioSpecification_LIPPO.retainedearningtrxtype ,
                RetainedEarningModuleCd: 'GL',
                GLForexGainAccountCd: this.M_GL_SubPortfolioSpecification_LIPPO.glforexgainaccountcd == '' || this.M_GL_SubPortfolioSpecification_LIPPO.glforexgainaccountcd == null ? 'NULL' : this.M_GL_SubPortfolioSpecification_LIPPO.glforexgainaccountcd ,
                GLForexLossAccountCd: this.M_GL_SubPortfolioSpecification_LIPPO.glforexlossaccountcd == '' || this.M_GL_SubPortfolioSpecification_LIPPO.glforexlossaccountcd == null ? 'NULL' : this.M_GL_SubPortfolioSpecification_LIPPO.glforexlossaccountcd ,
                Remarks: this.M_GL_SubPortfolioSpecification_LIPPO.remarks,
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
            if(this.M_GL_SubPortfolioSpecification_LIPPO.openfinyear > this.M_GL_SubPortfolioSpecification_LIPPO.tofinyear){              
              this.error = true
              this.err1 = true
              return
            }else{
              this.error = false
              this.err1 = false
            }

            if(this.M_GL_SubPortfolioSpecification_LIPPO.openfinperiod > this.M_GL_SubPortfolioSpecification_LIPPO.tofinperiod && this.M_GL_SubPortfolioSpecification_LIPPO.openfinyear == this.M_GL_SubPortfolioSpecification_LIPPO.tofinyear){
              this.error = true
              this.err2 = true
              return
            }else{
              this.error = false
              this.err2 = false
            }

            if(this.M_GL_SubPortfolioSpecification_LIPPO.aropenfinyear > this.M_GL_SubPortfolioSpecification_LIPPO.artofinyear){              
              this.error = true
              this.err3 = true
              return
            }else{
              this.error = false
              this.err3 = false
            }

            if(this.M_GL_SubPortfolioSpecification_LIPPO.aropenfinperiod > this.M_GL_SubPortfolioSpecification_LIPPO.artofinperiod && this.M_GL_SubPortfolioSpecification_LIPPO.aropenfinyear == this.M_GL_SubPortfolioSpecification_LIPPO.artofinyear){
              this.error = true
              this.err4 = true
              return
            }else{
              this.error = false
              this.err4 = false
            }

            if(this.M_GL_SubPortfolioSpecification_LIPPO.apopenfinyear > this.M_GL_SubPortfolioSpecification_LIPPO.aptofinyear){              
              this.error = true
              this.err5 = true
              return
            }else{
              this.error = false
              this.err5 = false
            }

            if(this.M_GL_SubPortfolioSpecification_LIPPO.apopenfinperiod > this.M_GL_SubPortfolioSpecification_LIPPO.aptofinperiod && this.M_GL_SubPortfolioSpecification_LIPPO.apopenfinyear == this.M_GL_SubPortfolioSpecification_LIPPO.aptofinyear){
              this.error = true
              this.err6 = true
              return
            }else{
              this.error = false
              this.err6 = false
            }

            if(this.M_GL_SubPortfolioSpecification_LIPPO.cbopenfinyear > this.M_GL_SubPortfolioSpecification_LIPPO.cbtofinyear){              
              this.error = true
              this.err7 = true
              return
            }else{
              this.error = false
              this.err7 = false
            }

            if(this.M_GL_SubPortfolioSpecification_LIPPO.cbopenfinperiod > this.M_GL_SubPortfolioSpecification_LIPPO.cbtofinperiod && this.M_GL_SubPortfolioSpecification_LIPPO.cbopenfinyear == this.M_GL_SubPortfolioSpecification_LIPPO.cbtofinyear){
              this.error = true
              this.err8 = true
              return
            }else{
              this.error = false
              this.err8 = false
            }

            if(this.M_GL_SubPortfolioSpecification_LIPPO.faopenfinyear > this.M_GL_SubPortfolioSpecification_LIPPO.fatofinyear){              
              this.error = true
              this.err9 = true
              return
            }else{
              this.error = false
              this.err9 = false
            }

            if(this.M_GL_SubPortfolioSpecification_LIPPO.faopenfinperiod > this.M_GL_SubPortfolioSpecification_LIPPO.fatofinperiod && this.M_GL_SubPortfolioSpecification_LIPPO.faopenfinyear == this.M_GL_SubPortfolioSpecification_LIPPO.fatofinyear){
              this.error = true
              this.err10 = true
              return
            }else{
              this.error = false
              this.err10 = false
            }

            if(this.M_GL_SubPortfolioSpecification_LIPPO.poopenfinyear > this.M_GL_SubPortfolioSpecification_LIPPO.potofinyear){              
              this.error = true
              this.err11 = true
              return
            }else{
              this.error = false
              this.err11 = false
            }

            if(this.M_GL_SubPortfolioSpecification_LIPPO.poopenfinperiod > this.M_GL_SubPortfolioSpecification_LIPPO.potofinperiod && this.M_GL_SubPortfolioSpecification_LIPPO.poopenfinyear == this.M_GL_SubPortfolioSpecification_LIPPO.potofinyear){
              this.error = true
              this.err12 = true
              return
            }else{
              this.error = false
              this.err12 = false
            }

            if(this.M_GL_SubPortfolioSpecification_LIPPO.icopenfinyear > this.M_GL_SubPortfolioSpecification_LIPPO.ictofinyear){              
              this.error = true
              this.err13 = true
              return
            }else{
              this.error = false
              this.err13 = false
            }

            if(this.M_GL_SubPortfolioSpecification_LIPPO.icopenfinperiod > this.M_GL_SubPortfolioSpecification_LIPPO.ictofinperiod && this.M_GL_SubPortfolioSpecification_LIPPO.icopenfinyear == this.M_GL_SubPortfolioSpecification_LIPPO.ictofinyear){
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
                OpenFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.openfinperiod,
                OpenFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.openfinyear,
                ToFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.tofinperiod,
                ToFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.tofinyear,
                AROpenFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.aropenfinperiod,
                AROpenFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.aropenfinyear,
                ARToFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.artofinperiod,
                ARToFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.artofinyear,
                APOpenFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.apopenfinperiod,
                APOpenFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.apopenfinyear,
                APToFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.aptofinperiod,
                APToFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.aptofinyear,
                CBOpenFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.cbopenfinperiod,
                CBOpenFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.cbopenfinyear,
                CBToFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.cbtofinperiod,
                CBToFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.cbtofinyear,
                FAOpenFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.faopenfinperiod,
                FAOpenFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.faopenfinyear,
                FAToFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.fatofinperiod,
                FAToFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.fatofinyear,
                POOpenFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.poopenfinperiod,
                POOpenFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.poopenfinyear,
                POToFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.potofinperiod,
                POToFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.potofinyear,
                ICOpenFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.icopenfinperiod,
                ICOpenFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.icopenfinyear,
                ICToFinPeriod: this.M_GL_SubPortfolioSpecification_LIPPO.ictofinperiod,
                ICToFinYear: this.M_GL_SubPortfolioSpecification_LIPPO.ictofinyear,
                PLSuspendAccountCd: this.M_GL_SubPortfolioSpecification_LIPPO.plsuspendaccountcd == '' || this.M_GL_SubPortfolioSpecification_LIPPO.plsuspendaccountcd == null ? 'NULL' : this.M_GL_SubPortfolioSpecification_LIPPO.plsuspendaccountcd ,
                BSSuspendAccountCd: this.M_GL_SubPortfolioSpecification_LIPPO.bssuspendaccountcd == '' || this.M_GL_SubPortfolioSpecification_LIPPO.bssuspendaccountcd == null ? 'NULL' : this.M_GL_SubPortfolioSpecification_LIPPO.bssuspendaccountcd ,
                REAccountCd: this.M_GL_SubPortfolioSpecification_LIPPO.reaccountcd == '' || this.M_GL_SubPortfolioSpecification_LIPPO.reaccountcd == null ? 'NULL' : this.M_GL_SubPortfolioSpecification_LIPPO.reaccountcd ,
                RetainedEarningTrxType: this.M_GL_SubPortfolioSpecification_LIPPO.retainedearningtrxtype == '' || this.M_GL_SubPortfolioSpecification_LIPPO.retainedearningtrxtype == null ? 'NULL' : this.M_GL_SubPortfolioSpecification_LIPPO.retainedearningtrxtype ,
                RetainedEarningModuleCd: 'GL',
                GLForexGainAccountCd: this.M_GL_SubPortfolioSpecification_LIPPO.glforexgainaccountcd == '' || this.M_GL_SubPortfolioSpecification_LIPPO.glforexgainaccountcd == null ? 'NULL' : this.M_GL_SubPortfolioSpecification_LIPPO.glforexgainaccountcd ,
                GLForexLossAccountCd: this.M_GL_SubPortfolioSpecification_LIPPO.glforexlossaccountcd == '' || this.M_GL_SubPortfolioSpecification_LIPPO.glforexlossaccountcd == null ? 'NULL' : this.M_GL_SubPortfolioSpecification_LIPPO.glforexlossaccountcd ,
                UniqueReferenceNo: this.M_GL_SubPortfolioSpecification_LIPPO.uniquereferenceno,
                BBCFReferenceNo: this.M_GL_SubPortfolioSpecification_LIPPO.bbcfreferenceno,
                BudgetBBCFReferenceNo: this.M_GL_SubPortfolioSpecification_LIPPO.budgetbbcfreferenceno,
                Remarks: this.M_GL_SubPortfolioSpecification_LIPPO.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_GL_SubPortfolioSpecification_LIPPO.lastupdatestamp                
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
            this.M_GL_SubPortfolioSpecification_LIPPO = {
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
        M_New(){
          this.$refs.ref_openfinperiod.focus()
        },
        M_Edit(){
          this.$refs.ref_openfinperiod.focus()
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
                console.log(data)
                if(response.Data.length > 0){
                  this.getToolbar().FormStatus = 'EDIT'
                  this.getToolbar().ProcessPS()
                  this.M_GL_SubPortfolioSpecification_LIPPO = {
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
                 

                this.M_GL_SubPortfolioSpecification_LIPPO.glforexgainaccountcdLabel = this.M_GL_SubPortfolioSpecification_LIPPO.glforexgainaccountcd != null ? data.glforexgainaccountcd :'' 
                this.M_GL_SubPortfolioSpecification_LIPPO.glforexlossaccountcdLabel = this.M_GL_SubPortfolioSpecification_LIPPO.glforexlossaccountcd != null ? data.glforexlossaccountcd :'' 
                this.M_GL_SubPortfolioSpecification_LIPPO.retainedearningtrxtypeLabel = this.M_GL_SubPortfolioSpecification_LIPPO.retainedearningtrxtype != null ? data.retainedearningtrxtype + this.separator + data.transtypedescs :'' 
                this.M_GL_SubPortfolioSpecification_LIPPO.plsuspendaccountcdLabel = this.M_GL_SubPortfolioSpecification_LIPPO.plsuspendaccountcd != null ? data.plsuspendaccountcd + this.separator + data.pldescs :'' 
                this.M_GL_SubPortfolioSpecification_LIPPO.bssuspendaccountcdLabel = this.M_GL_SubPortfolioSpecification_LIPPO.bssuspendaccountcd != null ? data.bssuspendaccountcd + this.separator + data.bsdescs :'' 
                this.M_GL_SubPortfolioSpecification_LIPPO.reaccountcdLabel = this.M_GL_SubPortfolioSpecification_LIPPO.reaccountcd != null ? data.reaccountcd + this.separator + data.redescs :'' 
         

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
