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
                                        <ABSInputSelectList @change="OncustomeridChange" :prop="PI_customerid" :value="M_CM_ContactLegalDocument.customerid" :label="M_CM_ContactLegalDocument.customeridLabel" ref="ref_customerid" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="OnministryapprnoChange" :prop="PI_ministryapprno" v-model="M_CM_ContactLegalDocument.ministryapprno"  ref="ref_ministryapprno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnowneridnoChange" :prop="PI_owneridno" v-model="M_CM_ContactLegalDocument.owneridno"  ref="ref_owneridno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnministryapprdateChange" :prop="PI_ministryapprdate" v-model="M_CM_ContactLegalDocument.ministryapprdate"  ref="ref_ministryapprdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnownernameChange" :prop="PI_ownername" v-model="M_CM_ContactLegalDocument.ownername"  ref="ref_ownername"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="OnregcertnoChange" :prop="PI_regcertno" v-model="M_CM_ContactLegalDocument.regcertno"  ref="ref_regcertno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnassoccertnoChange" :prop="PI_assoccertno" v-model="M_CM_ContactLegalDocument.assoccertno"  ref="ref_assoccertno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnregcertdateChange" :prop="PI_regcertdate" v-model="M_CM_ContactLegalDocument.regcertdate"  ref="ref_regcertdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnassoccertdateChange" :prop="PI_assoccertdate" v-model="M_CM_ContactLegalDocument.assoccertdate"  ref="ref_assoccertdate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnregcertexpiredateChange" :prop="PI_regcertexpiredate" v-model="M_CM_ContactLegalDocument.regcertexpiredate"  ref="ref_regcertexpiredate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnassoccertissueplaceChange" :prop="PI_assoccertissueplace" v-model="M_CM_ContactLegalDocument.assoccertissueplace"  ref="ref_assoccertissueplace"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="OnnotaryrepresentativeChange" :prop="PI_notaryrepresentative" v-model="M_CM_ContactLegalDocument.notaryrepresentative"  ref="ref_notaryrepresentative"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnassoccertchangenoChange" :prop="PI_assoccertchangeno" v-model="M_CM_ContactLegalDocument.assoccertchangeno"  ref="ref_assoccertchangeno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="OnnotarynameChange" :prop="PI_notaryname" v-model="M_CM_ContactLegalDocument.notaryname"  ref="ref_notaryname"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnassoccertchangedateChange" :prop="PI_assoccertchangedate" v-model="M_CM_ContactLegalDocument.assoccertchangedate"  ref="ref_assoccertchangedate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="OnnotarypermitnoChange" :prop="PI_notarypermitno" v-model="M_CM_ContactLegalDocument.notarypermitno"  ref="ref_notarypermitno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OncompanyaddrChange" :prop="PI_companyaddr" v-model="M_CM_ContactLegalDocument.companyaddr"  ref="ref_companyaddr"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnnotarypermitdateChange" :prop="PI_notarypermitdate" v-model="M_CM_ContactLegalDocument.notarypermitdate"  ref="ref_notarypermitdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnphonenoChange" :prop="PI_phoneno" v-model="M_CM_ContactLegalDocument.phoneno"  ref="ref_phoneno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="OnnotaryaddrChange" :prop="PI_notaryaddr" v-model="M_CM_ContactLegalDocument.notaryaddr"  ref="ref_notaryaddr"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnfaxnoChange" :prop="PI_faxno" v-model="M_CM_ContactLegalDocument.faxno"  ref="ref_faxno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="OnnotarycorrtaddrChange" :prop="PI_notarycorrtaddr" v-model="M_CM_ContactLegalDocument.notarycorrtaddr"  ref="ref_notarycorrtaddr"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OncompanycapitalChange" :prop="PI_companycapital" v-model="M_CM_ContactLegalDocument.companycapital"  ref="ref_companycapital"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="OnnotarydomicileChange" :prop="PI_notarydomicile" v-model="M_CM_ContactLegalDocument.notarydomicile"  ref="ref_notarydomicile"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OntaxpayernoChange" :prop="PI_taxpayerno" v-model="M_CM_ContactLegalDocument.taxpayerno"  ref="ref_taxpayerno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="OnrevisionnotarynameChange" :prop="PI_revisionnotaryname" v-model="M_CM_ContactLegalDocument.revisionnotaryname"  ref="ref_revisionnotaryname"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OntaxpayerreqdateChange" :prop="PI_taxpayerreqdate" v-model="M_CM_ContactLegalDocument.taxpayerreqdate"  ref="ref_taxpayerreqdate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="OnrevisionnotaryrepresentativeChange" :prop="PI_revisionnotaryrepresentative" v-model="M_CM_ContactLegalDocument.revisionnotaryrepresentative"  ref="ref_revisionnotaryrepresentative"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnvatcollectornoChange" :prop="PI_vatcollectorno" v-model="M_CM_ContactLegalDocument.vatcollectorno"  ref="ref_vatcollectorno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="OnrevisionnotarypermitnoChange" :prop="PI_revisionnotarypermitno" v-model="M_CM_ContactLegalDocument.revisionnotarypermitno"  ref="ref_revisionnotarypermitno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnvatcollectordateChange" :prop="PI_vatcollectordate" v-model="M_CM_ContactLegalDocument.vatcollectordate"  ref="ref_vatcollectordate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnrevisionnotarypermitdateChange" :prop="PI_revisionnotarypermitdate" v-model="M_CM_ContactLegalDocument.revisionnotarypermitdate"  ref="ref_revisionnotarypermitdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnfirstattorneynameChange" :prop="PI_firstattorneyname" v-model="M_CM_ContactLegalDocument.firstattorneyname"  ref="ref_firstattorneyname"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="OnrevisionnotaryaddrChange" :prop="PI_revisionnotaryaddr" v-model="M_CM_ContactLegalDocument.revisionnotaryaddr"  ref="ref_revisionnotaryaddr"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnfirstpositionChange" :prop="PI_firstposition" v-model="M_CM_ContactLegalDocument.firstposition"  ref="ref_firstposition"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="OnrevisionnotarycorrtaddrChange" :prop="PI_revisionnotarycorrtaddr" v-model="M_CM_ContactLegalDocument.revisionnotarycorrtaddr"  ref="ref_revisionnotarycorrtaddr"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnsecondattorneynameChange" :prop="PI_secondattorneyname" v-model="M_CM_ContactLegalDocument.secondattorneyname"  ref="ref_secondattorneyname"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="OnrevisionnotarydomicileChange" :prop="PI_revisionnotarydomicile" v-model="M_CM_ContactLegalDocument.revisionnotarydomicile"  ref="ref_revisionnotarydomicile"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnsecondpositionChange" :prop="PI_secondposition" v-model="M_CM_ContactLegalDocument.secondposition"  ref="ref_secondposition"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="OnattorneyletternoChange" :prop="PI_attorneyletterno" v-model="M_CM_ContactLegalDocument.attorneyletterno"  ref="ref_attorneyletterno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnthirdattorneynameChange" :prop="PI_thirdattorneyname" v-model="M_CM_ContactLegalDocument.thirdattorneyname"  ref="ref_thirdattorneyname"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnattorneyletterissuedateChange" :prop="PI_attorneyletterissuedate" v-model="M_CM_ContactLegalDocument.attorneyletterissuedate"  ref="ref_attorneyletterissuedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OnthirdpositionChange" :prop="PI_thirdposition" v-model="M_CM_ContactLegalDocument.thirdposition"  ref="ref_thirdposition"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OnattorneylettereffectivedateChange" :prop="PI_attorneylettereffectivedate" v-model="M_CM_ContactLegalDocument.attorneylettereffectivedate"  ref="ref_attorneylettereffectivedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OndomicilenoChange" :prop="PI_domicileno" v-model="M_CM_ContactLegalDocument.domicileno"  ref="ref_domicileno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="Oncompanybankname1Change" :prop="PI_companybankname1" v-model="M_CM_ContactLegalDocument.companybankname1"  ref="ref_companybankname1"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OndomicileundernameChange" :prop="PI_domicileundername" v-model="M_CM_ContactLegalDocument.domicileundername"  ref="ref_domicileundername"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="Oncompanybankaccountno2Change" :prop="PI_companybankaccountno2" v-model="M_CM_ContactLegalDocument.companybankaccountno2"  ref="ref_companybankaccountno2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OndomicileissuedateChange" :prop="PI_domicileissuedate" v-model="M_CM_ContactLegalDocument.domicileissuedate"  ref="ref_domicileissuedate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="Oncompanybankdetail2Change" :prop="PI_companybankdetail2" v-model="M_CM_ContactLegalDocument.companybankdetail2"  ref="ref_companybankdetail2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OndomicileexpiredateChange" :prop="PI_domicileexpiredate" v-model="M_CM_ContactLegalDocument.domicileexpiredate"  ref="ref_domicileexpiredate" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="Oncompanybankname2Change" :prop="PI_companybankname2" v-model="M_CM_ContactLegalDocument.companybankname2"  ref="ref_companybankname2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OntradinglicensenoChange" :prop="PI_tradinglicenseno" v-model="M_CM_ContactLegalDocument.tradinglicenseno"  ref="ref_tradinglicenseno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="Oncompanybankaccountno2Change" :prop="PI_companybankaccountno2" v-model="M_CM_ContactLegalDocument.companybankaccountno2"  ref="ref_companybankaccountno2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OntradinglicensetypeChange" :prop="PI_tradinglicensetype" v-model="M_CM_ContactLegalDocument.tradinglicensetype"  ref="ref_tradinglicensetype"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex @input="Oncompanybankdetail2Change" :prop="PI_companybankdetail2" v-model="M_CM_ContactLegalDocument.companybankdetail2"  ref="ref_companybankdetail2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex @input="OntradinglicenseissueplaceChange" :prop="PI_tradinglicenseissueplace" v-model="M_CM_ContactLegalDocument.tradinglicenseissueplace"  ref="ref_tradinglicenseissueplace"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OntradinglicenseissuedateChange" :prop="PI_tradinglicenseissuedate" v-model="M_CM_ContactLegalDocument.tradinglicenseissuedate"  ref="ref_tradinglicenseissuedate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OntradinglicenseexpiredateChange" :prop="PI_tradinglicenseexpiredate" v-model="M_CM_ContactLegalDocument.tradinglicenseexpiredate"  ref="ref_tradinglicenseexpiredate" />
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
		FormType: "List",
		Module:"CM",
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

            M_CM_ContactLegalDocument :{
                customerid: '',
                owneridno: '',
                ownername: '',
                assoccertno: '',
                assoccertdate: '',
                assoccertissueplace: '',
                assoccertchangeno: '',
                assoccertchangedate: '',
                companyaddr: '',
                phoneno: '',
                faxno: '',
                companycapital: '',
                taxpayerno: '',
                taxpayerreqdate: '',
                vatcollectorno: '',
                vatcollectordate: '',
                firstattorneyname: '',
                secondattorneyname: '',
                thirdattorneyname: '',
                firstposition: '',
                secondposition: '',
                thirdposition: '',
                domicileno: '',
                domicileundername: '',
                domicileissuedate: '',
                domicileexpiredate: '',
                tradinglicenseno: '',
                tradinglicensetype: '',
                tradinglicenseissueplace: '',
                tradinglicenseissuedate: '',
                tradinglicenseexpiredate: '',
                ministryapprno: '',
                ministryapprdate: '',
                regcertno: '',
                regcertdate: '',
                regcertexpiredate: '',
                notaryname: '',
                notaryrepresentative: '',
                notarypermitno: '',
                notarypermitdate: '',
                notaryaddr: '',
                notarycorrtaddr: '',
                notarydomicile: '',
                revisionnotaryname: '',
                revisionnotaryrepresentative: '',
                revisionnotarypermitno: '',
                revisionnotarypermitdate: '',
                revisionnotaryaddr: '',
                revisionnotarycorrtaddr: '',
                revisionnotarydomicile: '',
                attorneyletterno: '',
                attorneyletterissuedate: '',
                attorneylettereffectivedate: '',
                companybankname1: '',
                companybankaccountno1: '',
                companybankdetail1: '',
                companybankname2: '',
                companybankaccountno2: '',
                companybankdetail2: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                name: '',
                rowid: 0
                    }
            ,
            PI_customerid: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMContactPersonnel2', 
                    ColumnDB: 'ContactID', 
                    InitialWhere: "", 
                    ParamWhere: '',
                    OrderBy: 'FullName'  
                        }, 
                cValidate :'', 
                cName: 'customerid', 
                cLabel: 'Contact ID', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 1, 
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
                cMasterUrl: '' ,
                cDisplayColumn: 'ContactID,Name' ,
            }, 
            PI_ministryapprno: { 
                cValidate :'max:40', 
                cName: 'ministryapprno', 
                cLabel: 'Ministry Appr No', 
                cLabelSize: 4, 
                cOrder: 31, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_owneridno: { 
                cValidate :'max:20', 
                cName: 'owneridno', 
                cLabel: 'Owner ID', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_ministryapprdate: { 
                cValidate :'max:40', 
                cName: 'ministryapprdate', 
                cLabel: 'Ministry Appr Date', 
                cLabelSize: 4, 
                cOrder: 32, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_ownername: { 
                cValidate :'max:40', 
                cName: 'ownername', 
                cLabel: 'Owner Name', 
                cLabelSize: 4, 
                cOrder: 3, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_regcertno: { 
                cValidate :'max:40', 
                cName: 'regcertno', 
                cLabel: 'Reg Cert No', 
                cLabelSize: 4, 
                cOrder: 33, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_assoccertno: { 
                cValidate :'max:40', 
                cName: 'assoccertno', 
                cLabel: 'Assoc.Cert.No', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_regcertdate: { 
                cValidate :'max:40', 
                cName: 'regcertdate', 
                cLabel: 'Reg Cert Date', 
                cLabelSize: 4, 
                cOrder: 34, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_assoccertdate: { 
                cValidate :'max:40', 
                cName: 'assoccertdate', 
                cLabel: 'Assoc.Cert Date', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_regcertexpiredate: { 
                cValidate :'max:40', 
                cName: 'regcertexpiredate', 
                cLabel: 'Reg Cert Expire Date', 
                cLabelSize: 4, 
                cOrder: 35, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_assoccertissueplace: { 
                cValidate :'max:40', 
                cName: 'assoccertissueplace', 
                cLabel: 'Assoc Cert Issue In', 
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
            PI_notaryrepresentative: { 
                cValidate :'max:40', 
                cName: 'notaryrepresentative', 
                cLabel: 'Notary Repr', 
                cLabelSize: 4, 
                cOrder: 36, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_assoccertchangeno: { 
                cValidate :'max:40', 
                cName: 'assoccertchangeno', 
                cLabel: 'Assoc Cert Chg No', 
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
            PI_notaryname: { 
                cValidate :'max:40', 
                cName: 'notaryname', 
                cLabel: 'Notary Name', 
                cLabelSize: 4, 
                cOrder: 37, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_assoccertchangedate: { 
                cValidate :'max:40', 
                cName: 'assoccertchangedate', 
                cLabel: 'Assoc Cert Chg Date', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_notarypermitno: { 
                cValidate :'max:40', 
                cName: 'notarypermitno', 
                cLabel: 'Notary Permit No', 
                cLabelSize: 4, 
                cOrder: 38, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_companyaddr: { 
                cValidate :'max:40', 
                cName: 'companyaddr', 
                cLabel: 'Comp Address', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_notarypermitdate: { 
                cValidate :'max:40', 
                cName: 'notarypermitdate', 
                cLabel: 'Notary Permit Date', 
                cLabelSize: 4, 
                cOrder: 39, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_phoneno: { 
                cValidate :'max:40', 
                cName: 'phoneno', 
                cLabel: 'Phone No', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_notaryaddr: { 
                cValidate :'max:40', 
                cName: 'notaryaddr', 
                cLabel: 'Notary Addr', 
                cLabelSize: 4, 
                cOrder: 40, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_faxno: { 
                cValidate :'max:40', 
                cName: 'faxno', 
                cLabel: 'Fax No', 
                cLabelSize: 4, 
                cOrder: 11, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_notarycorrtaddr: { 
                cValidate :'max:40', 
                cName: 'notarycorrtaddr', 
                cLabel: 'Notary Corr Addr', 
                cLabelSize: 4, 
                cOrder: 41, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_companycapital: { 
                cValidate :'max:40', 
                cName: 'companycapital', 
                cLabel: 'Capital', 
                cLabelSize: 4, 
                cOrder: 12, 
                cKey: false, 
                cType: 'numeric',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_notarydomicile: { 
                cValidate :'max:40', 
                cName: 'notarydomicile', 
                cLabel: 'Notary Domicile', 
                cLabelSize: 4, 
                cOrder: 42, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxpayerno: { 
                cValidate :'max:40', 
                cName: 'taxpayerno', 
                cLabel: 'Tax Payer No', 
                cLabelSize: 4, 
                cOrder: 13, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_revisionnotaryname: { 
                cValidate :'max:40', 
                cName: 'revisionnotaryname', 
                cLabel: 'Rev Notary Name', 
                cLabelSize: 4, 
                cOrder: 43, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxpayerreqdate: { 
                cValidate :'max:40', 
                cName: 'taxpayerreqdate', 
                cLabel: 'Tax Payer Reg. Date', 
                cLabelSize: 4, 
                cOrder: 14, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_revisionnotaryrepresentative: { 
                cValidate :'max:40', 
                cName: 'revisionnotaryrepresentative', 
                cLabel: 'Rev Notary Representative', 
                cLabelSize: 4, 
                cOrder: 44, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_vatcollectorno: { 
                cValidate :'max:40', 
                cName: 'vatcollectorno', 
                cLabel: 'VAT Reg No', 
                cLabelSize: 4, 
                cOrder: 15, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_revisionnotarypermitno: { 
                cValidate :'max:40', 
                cName: 'revisionnotarypermitno', 
                cLabel: 'Rev Notary Permit No', 
                cLabelSize: 4, 
                cOrder: 45, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_vatcollectordate: { 
                cValidate :'max:40', 
                cName: 'vatcollectordate', 
                cLabel: 'VAT Reg Date', 
                cLabelSize: 4, 
                cOrder: 16, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_revisionnotarypermitdate: { 
                cValidate :'max:40', 
                cName: 'revisionnotarypermitdate', 
                cLabel: 'Rev Notary Permit Date', 
                cLabelSize: 4, 
                cOrder: 46, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_firstattorneyname: { 
                cValidate :'max:40', 
                cName: 'firstattorneyname', 
                cLabel: 'First Attorney', 
                cLabelSize: 4, 
                cOrder: 17, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_revisionnotaryaddr: { 
                cValidate :'max:40', 
                cName: 'revisionnotaryaddr', 
                cLabel: 'Rev Notary Addr', 
                cLabelSize: 4, 
                cOrder: 47, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_firstposition: { 
                cValidate :'max:40', 
                cName: 'firstposition', 
                cLabel: 'Position', 
                cLabelSize: 4, 
                cOrder: 18, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_revisionnotarycorrtaddr: { 
                cValidate :'max:40', 
                cName: 'revisionnotarycorrtaddr', 
                cLabel: 'Rev Notary Corr Addr', 
                cLabelSize: 4, 
                cOrder: 48, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_secondattorneyname: { 
                cValidate :'max:40', 
                cName: 'secondattorneyname', 
                cLabel: 'Second Attorney', 
                cLabelSize: 4, 
                cOrder: 19, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_revisionnotarydomicile: { 
                cValidate :'max:40', 
                cName: 'revisionnotarydomicile', 
                cLabel: 'Rev Notary Domicile', 
                cLabelSize: 4, 
                cOrder: 49, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_secondposition: { 
                cValidate :'max:40', 
                cName: 'secondposition', 
                cLabel: 'Position', 
                cLabelSize: 4, 
                cOrder: 20, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_attorneyletterno: { 
                cValidate :'max:40', 
                cName: 'attorneyletterno', 
                cLabel: 'Attorney Letter No', 
                cLabelSize: 4, 
                cOrder: 50, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_thirdattorneyname: { 
                cValidate :'max:40', 
                cName: 'thirdattorneyname', 
                cLabel: 'Third Attorney', 
                cLabelSize: 4, 
                cOrder: 21, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_attorneyletterissuedate: { 
                cValidate :'max:40', 
                cName: 'attorneyletterissuedate', 
                cLabel: 'Attorney Issue Date', 
                cLabelSize: 4, 
                cOrder: 51, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_thirdposition: { 
                cValidate :'max:40', 
                cName: 'thirdposition', 
                cLabel: 'Position', 
                cLabelSize: 4, 
                cOrder: 22, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_attorneylettereffectivedate: { 
                cValidate :'max:40', 
                cName: 'attorneylettereffectivedate', 
                cLabel: 'Attorney effective', 
                cLabelSize: 4, 
                cOrder: 52, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_domicileno: { 
                cValidate :'max:40', 
                cName: 'domicileno', 
                cLabel: 'Domicile No', 
                cLabelSize: 4, 
                cOrder: 23, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_companybankname1: { 
                cValidate :'max:40', 
                cName: 'companybankname1', 
                cLabel: 'Company Bank', 
                cLabelSize: 4, 
                cOrder: 53, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_domicileundername: { 
                cValidate :'max:40', 
                cName: 'domicileundername', 
                cLabel: 'Domicile Name', 
                cLabelSize: 4, 
                cOrder: 24, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_companybankaccountno2: { 
                cValidate :'max:40', 
                cName: 'companybankaccountno2', 
                cLabel: 'Bank Account No', 
                cLabelSize: 4, 
                cOrder: 54, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_domicileissuedate: { 
                cValidate :'max:40', 
                cName: 'domicileissuedate', 
                cLabel: 'Domicile Issue Date', 
                cLabelSize: 4, 
                cOrder: 25, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_companybankdetail2: { 
                cValidate :'max:40', 
                cName: 'companybankdetail2', 
                cLabel: 'Bank Detail', 
                cLabelSize: 4, 
                cOrder: 55, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_domicileexpiredate: { 
                cValidate :'max:40', 
                cName: 'domicileexpiredate', 
                cLabel: 'Domicile Exp Date', 
                cLabelSize: 4, 
                cOrder: 26, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_companybankname2: { 
                cValidate :'max:40', 
                cName: 'companybankname2', 
                cLabel: 'Company Bank II', 
                cLabelSize: 4, 
                cOrder: 56, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_tradinglicenseno: { 
                cValidate :'max:40', 
                cName: 'tradinglicenseno', 
                cLabel: 'Trading License No', 
                cLabelSize: 4, 
                cOrder: 27, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_companybankaccountno2: { 
                cValidate :'max:40', 
                cName: 'companybankaccountno2', 
                cLabel: 'Bank Account No II', 
                cLabelSize: 4, 
                cOrder: 57, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_tradinglicensetype: { 
                cValidate :'max:40', 
                cName: 'tradinglicensetype', 
                cLabel: 'Tranding License Type', 
                cLabelSize: 4, 
                cOrder: 28, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_companybankdetail2: { 
                cValidate :'max:40', 
                cName: 'companybankdetail2', 
                cLabel: 'Bank Detail II', 
                cLabelSize: 4, 
                cOrder: 58, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_tradinglicenseissueplace: { 
                cValidate :'max:40', 
                cName: 'tradinglicenseissueplace', 
                cLabel: 'Trading License Issue', 
                cLabelSize: 4, 
                cOrder: 29, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_tradinglicenseissuedate: { 
                cValidate :'max:40', 
                cName: 'tradinglicenseissuedate', 
                cLabel: 'Trading License Date', 
                cLabelSize: 4, 
                cOrder: 59, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_tradinglicenseexpiredate: { 
                cValidate :'max:40', 
                cName: 'tradinglicenseexpiredate', 
                cLabel: 'Trading License Expire', 
                cLabelSize: 4, 
                cOrder: 30, 
                cKey: false, 
                cVisible:  true, 
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
        OncustomeridChange (data) {
          console.log(data)
        this.$nextTick(() => {
            this.M_CM_ContactLegalDocument.customerid = data.id
            this.M_CM_ContactLegalDocument.customeridLabel = data.label
            this.M_CM_ContactLegalDocument.ownername = data.FullName
            if (this.inputStatus != "VIEW") {
//{customerid}
            }
        })
        this.$forceUpdate()
        },
        OnministryapprnoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{ministryapprno}
            }
        })
        this.$forceUpdate()
        },
        OnowneridnoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{owneridno}
            }
        })
        this.$forceUpdate()
        },
        OnministryapprdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{ministryapprdate}
            }
        })
        this.$forceUpdate()
        },
        OnownernameChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{ownername}
            }
        })
        this.$forceUpdate()
        },
        OnregcertnoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{regcertno}
            }
        })
        this.$forceUpdate()
        },
        OnassoccertnoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{assoccertno}
            }
        })
        this.$forceUpdate()
        },
        OnregcertdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{regcertdate}
            }
        })
        this.$forceUpdate()
        },
        OnassoccertdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{assoccertdate}
            }
        })
        this.$forceUpdate()
        },
        OnregcertexpiredateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{regcertexpiredate}
            }
        })
        this.$forceUpdate()
        },
        OnassoccertissueplaceChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{assoccertissueplace}
            }
        })
        this.$forceUpdate()
        },
        OnnotaryrepresentativeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{notaryrepresentative}
            }
        })
        this.$forceUpdate()
        },
        OnassoccertchangenoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{assoccertchangeno}
            }
        })
        this.$forceUpdate()
        },
        OnnotarynameChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{notaryname}
            }
        })
        this.$forceUpdate()
        },
        OnassoccertchangedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{assoccertchangedate}
            }
        })
        this.$forceUpdate()
        },
        OnnotarypermitnoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{notarypermitno}
            }
        })
        this.$forceUpdate()
        },
        OncompanyaddrChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{companyaddr}
            }
        })
        this.$forceUpdate()
        },
        OnnotarypermitdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{notarypermitdate}
            }
        })
        this.$forceUpdate()
        },
        OnphonenoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{phoneno}
            }
        })
        this.$forceUpdate()
        },
        OnnotaryaddrChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{notaryaddr}
            }
        })
        this.$forceUpdate()
        },
        OnfaxnoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{faxno}
            }
        })
        this.$forceUpdate()
        },
        OnnotarycorrtaddrChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{notarycorrtaddr}
            }
        })
        this.$forceUpdate()
        },
        OncompanycapitalChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{companycapital}
            }
        })
        this.$forceUpdate()
        },
        OnnotarydomicileChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{notarydomicile}
            }
        })
        this.$forceUpdate()
        },
        OntaxpayernoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{taxpayerno}
            }
        })
        this.$forceUpdate()
        },
        OnrevisionnotarynameChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{revisionnotaryname}
            }
        })
        this.$forceUpdate()
        },
        OntaxpayerreqdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{taxpayerreqdate}
            }
        })
        this.$forceUpdate()
        },
        OnrevisionnotaryrepresentativeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{revisionnotaryrepresentative}
            }
        })
        this.$forceUpdate()
        },
        OnvatcollectornoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{vatcollectorno}
            }
        })
        this.$forceUpdate()
        },
        OnrevisionnotarypermitnoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{revisionnotarypermitno}
            }
        })
        this.$forceUpdate()
        },
        OnvatcollectordateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{vatcollectordate}
            }
        })
        this.$forceUpdate()
        },
        OnrevisionnotarypermitdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{revisionnotarypermitdate}
            }
        })
        this.$forceUpdate()
        },
        OnfirstattorneynameChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{firstattorneyname}
            }
        })
        this.$forceUpdate()
        },
        OnrevisionnotaryaddrChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{revisionnotaryaddr}
            }
        })
        this.$forceUpdate()
        },
        OnfirstpositionChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{firstposition}
            }
        })
        this.$forceUpdate()
        },
        OnrevisionnotarycorrtaddrChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{revisionnotarycorrtaddr}
            }
        })
        this.$forceUpdate()
        },
        OnsecondattorneynameChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{secondattorneyname}
            }
        })
        this.$forceUpdate()
        },
        OnrevisionnotarydomicileChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{revisionnotarydomicile}
            }
        })
        this.$forceUpdate()
        },
        OnsecondpositionChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{secondposition}
            }
        })
        this.$forceUpdate()
        },
        OnattorneyletternoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{attorneyletterno}
            }
        })
        this.$forceUpdate()
        },
        OnthirdattorneynameChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{thirdattorneyname}
            }
        })
        this.$forceUpdate()
        },
        OnattorneyletterissuedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{attorneyletterissuedate}
            }
        })
        this.$forceUpdate()
        },
        OnthirdpositionChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{thirdposition}
            }
        })
        this.$forceUpdate()
        },
        OnattorneylettereffectivedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{attorneylettereffectivedate}
            }
        })
        this.$forceUpdate()
        },
        OndomicilenoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{domicileno}
            }
        })
        this.$forceUpdate()
        },
        Oncompanybankname1Change (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{companybankname1}
            }
        })
        this.$forceUpdate()
        },
        OndomicileundernameChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{domicileundername}
            }
        })
        this.$forceUpdate()
        },
        Oncompanybankaccountno2Change (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{companybankaccountno2}
            }
        })
        this.$forceUpdate()
        },
        OndomicileissuedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{domicileissuedate}
            }
        })
        this.$forceUpdate()
        },
        Oncompanybankdetail2Change (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{companybankdetail2}
            }
        })
        this.$forceUpdate()
        },
        OndomicileexpiredateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{domicileexpiredate}
            }
        })
        this.$forceUpdate()
        },
        Oncompanybankname2Change (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{companybankname2}
            }
        })
        this.$forceUpdate()
        },
        OntradinglicensenoChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{tradinglicenseno}
            }
        })
        this.$forceUpdate()
        },
        Oncompanybankaccountno2Change (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{companybankaccountno2}
            }
        })
        this.$forceUpdate()
        },
        OntradinglicensetypeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{tradinglicensetype}
            }
        })
        this.$forceUpdate()
        },
        Oncompanybankdetail2Change (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{companybankdetail2}
            }
        })
        this.$forceUpdate()
        },
        OntradinglicenseissueplaceChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{tradinglicenseissueplace}
            }
        })
        this.$forceUpdate()
        },
        OntradinglicenseissuedateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{tradinglicenseissuedate}
            }
        })
        this.$forceUpdate()
        },
        OntradinglicenseexpiredateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{tradinglicenseexpiredate}
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
          console.log(this.M_CM_ContactLegalDocument)
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                CustomerID: this.M_CM_ContactLegalDocument.customerid == '' || this.M_CM_ContactLegalDocument.customerid == null ? 'NULL' : this.M_CM_ContactLegalDocument.customerid ,
                OwnerIDNo: this.M_CM_ContactLegalDocument.owneridno == '' || this.M_CM_ContactLegalDocument.owneridno == null ? 'NULL' : this.M_CM_ContactLegalDocument.owneridno,
                OwnerName: this.M_CM_ContactLegalDocument.ownername,
                AssocCertNo: this.M_CM_ContactLegalDocument.assoccertno == '' || this.M_CM_ContactLegalDocument.assoccertno == null ? 'NULL' : this.M_CM_ContactLegalDocument.assoccertno,
                AssocCertDate: this.M_CM_ContactLegalDocument.assoccertdate == '' || this.M_CM_ContactLegalDocument.assoccertdate == null ? 'NULL' : this.M_CM_ContactLegalDocument.assoccertdate ,
                AssocCertIssuePlace: this.M_CM_ContactLegalDocument.assoccertissueplace == '' || this.M_CM_ContactLegalDocument.assoccertissueplace == null ? 'NULL' : this.M_CM_ContactLegalDocument.assoccertissueplace,
                AssocCertChangeNo: this.M_CM_ContactLegalDocument.assoccertchangeno == '' || this.M_CM_ContactLegalDocument.assoccertchangeno == null ? 'NULL' : this.M_CM_ContactLegalDocument.assoccertchangeno,
                AssocCertChangeDate: this.M_CM_ContactLegalDocument.assoccertchangedate == '' || this.M_CM_ContactLegalDocument.assoccertchangedate == null ? 'NULL' : this.M_CM_ContactLegalDocument.assoccertchangedate ,
                CompanyAddr: this.M_CM_ContactLegalDocument.companyaddr == '' || this.M_CM_ContactLegalDocument.companyaddr == null ? 'NULL' : this.M_CM_ContactLegalDocument.companyaddr,
                PhoneNo: this.M_CM_ContactLegalDocument.phoneno == '' || this.M_CM_ContactLegalDocument.phoneno == null ? 'NULL' : this.M_CM_ContactLegalDocument.phoneno,
                FaxNo: this.M_CM_ContactLegalDocument.faxno == '' || this.M_CM_ContactLegalDocument.faxno == null ? 'NULL' : this.M_CM_ContactLegalDocument.faxno,
                CompanyCapital: this.M_CM_ContactLegalDocument.companycapital == '' || this.M_CM_ContactLegalDocument.companycapital == null ? 0 : this.M_CM_ContactLegalDocument.companycapital,
                TaxPayerNo: this.M_CM_ContactLegalDocument.taxpayerno == '' || this.M_CM_ContactLegalDocument.taxpayerno == null ? 'NULL' : this.M_CM_ContactLegalDocument.taxpayerno,
                TaxPayerReqDate: this.M_CM_ContactLegalDocument.taxpayerreqdate == '' || this.M_CM_ContactLegalDocument.taxpayerreqdate == null ? 'NULL' : this.M_CM_ContactLegalDocument.taxpayerreqdate ,
                VATCollectorNo: this.M_CM_ContactLegalDocument.vatcollectorno == '' || this.M_CM_ContactLegalDocument.vatcollectorno == null ? 'NULL' : this.M_CM_ContactLegalDocument.vatcollectorno,
                VATCollectorDate: this.M_CM_ContactLegalDocument.vatcollectordate == '' || this.M_CM_ContactLegalDocument.vatcollectordate == null ? 'NULL' : this.M_CM_ContactLegalDocument.vatcollectordate ,
                FirstAttorneyName: this.M_CM_ContactLegalDocument.firstattorneyname == '' || this.M_CM_ContactLegalDocument.firstattorneyname == null ? 'NULL' : this.M_CM_ContactLegalDocument.firstattorneyname,
                SecondAttorneyName: this.M_CM_ContactLegalDocument.secondattorneyname == '' || this.M_CM_ContactLegalDocument.secondattorneyname == null ? 'NULL' : this.M_CM_ContactLegalDocument.secondattorneyname,
                ThirdAttorneyName: this.M_CM_ContactLegalDocument.thirdattorneyname == '' || this.M_CM_ContactLegalDocument.thirdattorneyname == null ? 'NULL' : this.M_CM_ContactLegalDocument.thirdattorneyname,
                FirstPosition: this.M_CM_ContactLegalDocument.firstposition == '' || this.M_CM_ContactLegalDocument.firstposition == null ? 'NULL' : this.M_CM_ContactLegalDocument.firstposition,
                SecondPosition: this.M_CM_ContactLegalDocument.secondposition == '' || this.M_CM_ContactLegalDocument.secondposition == null ? 'NULL' : this.M_CM_ContactLegalDocument.secondposition,
                ThirdPosition: this.M_CM_ContactLegalDocument.thirdposition == '' || this.M_CM_ContactLegalDocument.thirdposition == null ? 'NULL' : this.M_CM_ContactLegalDocument.thirdposition,
                DomicileNo: this.M_CM_ContactLegalDocument.domicileno == '' || this.M_CM_ContactLegalDocument.domicileno == null ? 'NULL' : this.M_CM_ContactLegalDocument.domicileno,
                DomicileUnderName: this.M_CM_ContactLegalDocument.domicileundername == '' || this.M_CM_ContactLegalDocument.domicileundername == null ? 'NULL' : this.M_CM_ContactLegalDocument.domicileundername,
                DomicileIssueDate: this.M_CM_ContactLegalDocument.domicileissuedate == '' || this.M_CM_ContactLegalDocument.domicileissuedate == null ? 'NULL' : this.M_CM_ContactLegalDocument.domicileissuedate ,
                DomicileExpireDate: this.M_CM_ContactLegalDocument.domicileexpiredate == '' || this.M_CM_ContactLegalDocument.domicileexpiredate == null ? 'NULL' : this.M_CM_ContactLegalDocument.domicileexpiredate ,
                TradingLicenseNo: this.M_CM_ContactLegalDocument.tradinglicenseno == '' || this.M_CM_ContactLegalDocument.tradinglicenseno == null ? 'NULL' : this.M_CM_ContactLegalDocument.tradinglicenseno,
                TradingLicenseType: this.M_CM_ContactLegalDocument.tradinglicensetype == '' || this.M_CM_ContactLegalDocument.tradinglicensetype == null ? 'NULL' : this.M_CM_ContactLegalDocument.tradinglicensetype,
                TradingLicenseIssuePlace: this.M_CM_ContactLegalDocument.tradinglicenseissueplace == '' || this.M_CM_ContactLegalDocument.tradinglicenseissueplace == null ? 'NULL' : this.M_CM_ContactLegalDocument.tradinglicenseissueplace,
                TradingLicenseIssueDate: this.M_CM_ContactLegalDocument.tradinglicenseissuedate == '' || this.M_CM_ContactLegalDocument.tradinglicenseissuedate == null ? 'NULL' : this.M_CM_ContactLegalDocument.tradinglicenseissuedate ,
                TradingLicenseExpireDate: this.M_CM_ContactLegalDocument.tradinglicenseexpiredate == '' || this.M_CM_ContactLegalDocument.tradinglicenseexpiredate == null ? 'NULL' : this.M_CM_ContactLegalDocument.tradinglicenseexpiredate ,
                MinistryApprNo: this.M_CM_ContactLegalDocument.ministryapprno == '' || this.M_CM_ContactLegalDocument.ministryapprno == null ? 'NULL' : this.M_CM_ContactLegalDocument.ministryapprno,
                MinistryApprDate: this.M_CM_ContactLegalDocument.ministryapprdate == '' || this.M_CM_ContactLegalDocument.ministryapprdate == null ? 'NULL' : this.M_CM_ContactLegalDocument.ministryapprdate ,
                RegCertNo: this.M_CM_ContactLegalDocument.regcertno == '' || this.M_CM_ContactLegalDocument.regcertno == null ? 'NULL' : this.M_CM_ContactLegalDocument.regcertno,
                RegCertDate: this.M_CM_ContactLegalDocument.regcertdate == '' || this.M_CM_ContactLegalDocument.regcertdate == null ? 'NULL' : this.M_CM_ContactLegalDocument.regcertdate ,
                RegCertExpireDate: this.M_CM_ContactLegalDocument.regcertexpiredate == '' || this.M_CM_ContactLegalDocument.regcertexpiredate == null ? 'NULL' : this.M_CM_ContactLegalDocument.regcertexpiredate ,
                NotaryName: this.M_CM_ContactLegalDocument.notaryname == '' || this.M_CM_ContactLegalDocument.notaryname == null ? 'NULL' : this.M_CM_ContactLegalDocument.notaryname,
                NotaryRepresentative: this.M_CM_ContactLegalDocument.notaryrepresentative == '' || this.M_CM_ContactLegalDocument.notaryrepresentative == null ? 'NULL' : this.M_CM_ContactLegalDocument.notaryrepresentative,
                NotaryPermitNo: this.M_CM_ContactLegalDocument.notarypermitno == '' || this.M_CM_ContactLegalDocument.notarypermitno == null ? 'NULL' : this.M_CM_ContactLegalDocument.notarypermitno,
                NotaryPermitDate: this.M_CM_ContactLegalDocument.notarypermitdate == '' || this.M_CM_ContactLegalDocument.notarypermitdate == null ? 'NULL' : this.M_CM_ContactLegalDocument.notarypermitdate ,
                NotaryAddr: this.M_CM_ContactLegalDocument.notaryaddr == '' || this.M_CM_ContactLegalDocument.notaryaddr == null ? 'NULL' : this.M_CM_ContactLegalDocument.notaryaddr,
                NotaryCorrtAddr: this.M_CM_ContactLegalDocument.notarycorrtaddr == '' || this.M_CM_ContactLegalDocument.notarycorrtaddr == null ? 'NULL' : this.M_CM_ContactLegalDocument.notarycorrtaddr,
                NotaryDomicile: this.M_CM_ContactLegalDocument.notarydomicile == '' || this.M_CM_ContactLegalDocument.notarydomicile == null ? 'NULL' : this.M_CM_ContactLegalDocument.notarydomicile,
                RevisionNotaryName: this.M_CM_ContactLegalDocument.revisionnotaryname == '' || this.M_CM_ContactLegalDocument.revisionnotaryname == null ? 'NULL'  : this.M_CM_ContactLegalDocument.revisionnotaryname,
                RevisionNotaryRepresentative: this.M_CM_ContactLegalDocument.revisionnotaryrepresentative == '' || this.M_CM_ContactLegalDocument.revisionnotaryrepresentative == null ? 'NULL' : this.M_CM_ContactLegalDocument.revisionnotaryrepresentative,
                RevisionNotaryPermitNo: this.M_CM_ContactLegalDocument.revisionnotarypermitno == '' || this.M_CM_ContactLegalDocument.revisionnotarypermitno == null ? 'NULL' : this.M_CM_ContactLegalDocument.revisionnotarypermitno,
                RevisionNotaryPermitDate: this.M_CM_ContactLegalDocument.revisionnotarypermitdate == '' || this.M_CM_ContactLegalDocument.revisionnotarypermitdate == null ? 'NULL' : this.M_CM_ContactLegalDocument.revisionnotarypermitdate ,
                RevisionNotaryAddr: this.M_CM_ContactLegalDocument.revisionnotaryaddr == '' || this.M_CM_ContactLegalDocument.revisionnotaryaddr == null ? 'NULL' : this.M_CM_ContactLegalDocument.revisionnotaryaddr,
                RevisionNotaryCorrtAddr: this.M_CM_ContactLegalDocument.revisionnotarycorrtaddr == '' || this.M_CM_ContactLegalDocument.revisionnotarycorrtaddr == null ? 'NULL' : this.M_CM_ContactLegalDocument.revisionnotarycorrtaddr,
                RevisionNotaryDomicile: this.M_CM_ContactLegalDocument.revisionnotarydomicile == '' || this.M_CM_ContactLegalDocument.revisionnotarydomicile == null ? 'NULL' : this.M_CM_ContactLegalDocument.revisionnotarydomicile,
                AttorneyLetterNo: this.M_CM_ContactLegalDocument.attorneyletterno == '' || this.M_CM_ContactLegalDocument.attorneyletterno == null ? 'NULL' : this.M_CM_ContactLegalDocument.attorneyletterno,
                AttorneyLetterIssueDate: this.M_CM_ContactLegalDocument.attorneyletterissuedate == '' || this.M_CM_ContactLegalDocument.attorneyletterissuedate == null ? 'NULL' : this.M_CM_ContactLegalDocument.attorneyletterissuedate ,
                AttorneyLetterEffectiveDate: this.M_CM_ContactLegalDocument.attorneylettereffectivedate == '' || this.M_CM_ContactLegalDocument.attorneylettereffectivedate == null ? 'NULL' : this.M_CM_ContactLegalDocument.attorneylettereffectivedate ,
                CompanyBankName1: this.M_CM_ContactLegalDocument.companybankname1 == '' || this.M_CM_ContactLegalDocument.companybankname1 == null ? 'NULL' : this.M_CM_ContactLegalDocument.companybankname1,
                CompanyBankAccountNo1: this.M_CM_ContactLegalDocument.companybankaccountno2 == '' || this.M_CM_ContactLegalDocument.companybankaccountno2 == null ? 'NULL' : this.M_CM_ContactLegalDocument.companybankaccountno2,
                CompanyBankDetail1: this.M_CM_ContactLegalDocument.companybankdetail2 == '' || this.M_CM_ContactLegalDocument.companybankdetail2 == null ? 'NULL' : this.M_CM_ContactLegalDocument.companybankdetail2,
                CompanyBankName2: this.M_CM_ContactLegalDocument.companybankname2 == '' || this.M_CM_ContactLegalDocument.companybankname2 == null ? 'NULL' : this.M_CM_ContactLegalDocument.companybankname2,
                CompanyBankAccountNo2: this.M_CM_ContactLegalDocument.companybankaccountno2 == '' || this.M_CM_ContactLegalDocument.companybankaccountno2 == null ? 'NULL' : this.M_CM_ContactLegalDocument.companybankaccountno2,
                CompanyBankDetail2: this.M_CM_ContactLegalDocument.companybankdetail2 == '' || this.M_CM_ContactLegalDocument.companybankdetail2 == null ? 'NULL' : this.M_CM_ContactLegalDocument.companybankdetail2,
                UserInput: this.getDataUser().UserId                 
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
              console.log(response)
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })

        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                CustomerID: this.M_CM_ContactLegalDocument.customerid == '' || this.M_CM_ContactLegalDocument.customerid == null ? 'NULL' : this.M_CM_ContactLegalDocument.customerid ,
                OwnerIDNo: this.M_CM_ContactLegalDocument.owneridno,
                OwnerName: this.M_CM_ContactLegalDocument.ownername,
                AssocCertNo: this.M_CM_ContactLegalDocument.assoccertno,
                AssocCertDate: this.M_CM_ContactLegalDocument.assoccertdate == '' || this.M_CM_ContactLegalDocument.assoccertdate == null ? 'NULL' : this.M_CM_ContactLegalDocument.assoccertdate ,
                AssocCertIssuePlace: this.M_CM_ContactLegalDocument.assoccertissueplace,
                AssocCertChangeNo: this.M_CM_ContactLegalDocument.assoccertchangeno,
                AssocCertChangeDate: this.M_CM_ContactLegalDocument.assoccertchangedate == '' || this.M_CM_ContactLegalDocument.assoccertchangedate == null ? 'NULL' : this.M_CM_ContactLegalDocument.assoccertchangedate ,
                CompanyAddr: this.M_CM_ContactLegalDocument.companyaddr,
                PhoneNo: this.M_CM_ContactLegalDocument.phoneno,
                FaxNo: this.M_CM_ContactLegalDocument.faxno,
                CompanyCapital: this.M_CM_ContactLegalDocument.companycapital,
                TaxPayerNo: this.M_CM_ContactLegalDocument.taxpayerno,
                TaxPayerReqDate: this.M_CM_ContactLegalDocument.taxpayerreqdate == '' || this.M_CM_ContactLegalDocument.taxpayerreqdate == null ? 'NULL' : this.M_CM_ContactLegalDocument.taxpayerreqdate ,
                VATCollectorNo: this.M_CM_ContactLegalDocument.vatcollectorno,
                VATCollectorDate: this.M_CM_ContactLegalDocument.vatcollectordate == '' || this.M_CM_ContactLegalDocument.vatcollectordate == null ? 'NULL' : this.M_CM_ContactLegalDocument.vatcollectordate ,
                FirstAttorneyName: this.M_CM_ContactLegalDocument.firstattorneyname,
                SecondAttorneyName: this.M_CM_ContactLegalDocument.secondattorneyname,
                ThirdAttorneyName: this.M_CM_ContactLegalDocument.thirdattorneyname,
                FirstPosition: this.M_CM_ContactLegalDocument.firstposition,
                SecondPosition: this.M_CM_ContactLegalDocument.secondposition,
                ThirdPosition: this.M_CM_ContactLegalDocument.thirdposition,
                DomicileNo: this.M_CM_ContactLegalDocument.domicileno,
                DomicileUnderName: this.M_CM_ContactLegalDocument.domicileundername,
                DomicileIssueDate: this.M_CM_ContactLegalDocument.domicileissuedate == '' || this.M_CM_ContactLegalDocument.domicileissuedate == null ? 'NULL' : this.M_CM_ContactLegalDocument.domicileissuedate ,
                DomicileExpireDate: this.M_CM_ContactLegalDocument.domicileexpiredate == '' || this.M_CM_ContactLegalDocument.domicileexpiredate == null ? 'NULL' : this.M_CM_ContactLegalDocument.domicileexpiredate ,
                TradingLicenseNo: this.M_CM_ContactLegalDocument.tradinglicenseno,
                TradingLicenseType: this.M_CM_ContactLegalDocument.tradinglicensetype,
                TradingLicenseIssuePlace: this.M_CM_ContactLegalDocument.tradinglicenseissueplace,
                TradingLicenseIssueDate: this.M_CM_ContactLegalDocument.tradinglicenseissuedate == '' || this.M_CM_ContactLegalDocument.tradinglicenseissuedate == null ? 'NULL' : this.M_CM_ContactLegalDocument.tradinglicenseissuedate ,
                TradingLicenseExpireDate: this.M_CM_ContactLegalDocument.tradinglicenseexpiredate == '' || this.M_CM_ContactLegalDocument.tradinglicenseexpiredate == null ? 'NULL' : this.M_CM_ContactLegalDocument.tradinglicenseexpiredate ,
                MinistryApprNo: this.M_CM_ContactLegalDocument.ministryapprno,
                MinistryApprDate: this.M_CM_ContactLegalDocument.ministryapprdate == '' || this.M_CM_ContactLegalDocument.ministryapprdate == null ? 'NULL' : this.M_CM_ContactLegalDocument.ministryapprdate ,
                RegCertNo: this.M_CM_ContactLegalDocument.regcertno,
                RegCertDate: this.M_CM_ContactLegalDocument.regcertdate == '' || this.M_CM_ContactLegalDocument.regcertdate == null ? 'NULL' : this.M_CM_ContactLegalDocument.regcertdate ,
                RegCertExpireDate: this.M_CM_ContactLegalDocument.regcertexpiredate == '' || this.M_CM_ContactLegalDocument.regcertexpiredate == null ? 'NULL' : this.M_CM_ContactLegalDocument.regcertexpiredate ,
                NotaryName: this.M_CM_ContactLegalDocument.notaryname,
                NotaryRepresentative: this.M_CM_ContactLegalDocument.notaryrepresentative,
                NotaryPermitNo: this.M_CM_ContactLegalDocument.notarypermitno,
                NotaryPermitDate: this.M_CM_ContactLegalDocument.notarypermitdate == '' || this.M_CM_ContactLegalDocument.notarypermitdate == null ? 'NULL' : this.M_CM_ContactLegalDocument.notarypermitdate ,
                NotaryAddr: this.M_CM_ContactLegalDocument.notaryaddr,
                NotaryCorrtAddr: this.M_CM_ContactLegalDocument.notarycorrtaddr,
                NotaryDomicile: this.M_CM_ContactLegalDocument.notarydomicile,
                RevisionNotaryName: this.M_CM_ContactLegalDocument.revisionnotaryname,
                RevisionNotaryRepresentative: this.M_CM_ContactLegalDocument.revisionnotaryrepresentative,
                RevisionNotaryPermitNo: this.M_CM_ContactLegalDocument.revisionnotarypermitno,
                RevisionNotaryPermitDate: this.M_CM_ContactLegalDocument.revisionnotarypermitdate == '' || this.M_CM_ContactLegalDocument.revisionnotarypermitdate == null ? 'NULL' : this.M_CM_ContactLegalDocument.revisionnotarypermitdate ,
                RevisionNotaryAddr: this.M_CM_ContactLegalDocument.revisionnotaryaddr,
                RevisionNotaryCorrtAddr: this.M_CM_ContactLegalDocument.revisionnotarycorrtaddr,
                RevisionNotaryDomicile: this.M_CM_ContactLegalDocument.revisionnotarydomicile,
                AttorneyLetterNo: this.M_CM_ContactLegalDocument.attorneyletterno,
                AttorneyLetterIssueDate: this.M_CM_ContactLegalDocument.attorneyletterissuedate == '' || this.M_CM_ContactLegalDocument.attorneyletterissuedate == null ? 'NULL' : this.M_CM_ContactLegalDocument.attorneyletterissuedate ,
                AttorneyLetterEffectiveDate: this.M_CM_ContactLegalDocument.attorneylettereffectivedate == '' || this.M_CM_ContactLegalDocument.attorneylettereffectivedate == null ? 'NULL' : this.M_CM_ContactLegalDocument.attorneylettereffectivedate ,
                CompanyBankName1: this.M_CM_ContactLegalDocument.companybankname1,
                CompanyBankAccountNo1: this.M_CM_ContactLegalDocument.companybankaccountno2,
                CompanyBankDetail1: this.M_CM_ContactLegalDocument.companybankdetail2,
                CompanyBankName2: this.M_CM_ContactLegalDocument.companybankname2,
                CompanyBankAccountNo2: this.M_CM_ContactLegalDocument.companybankaccountno2,
                CompanyBankDetail2: this.M_CM_ContactLegalDocument.companybankdetail2,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_CM_ContactLegalDocument.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_CM_ContactLegalDocument = {
                customerid: '',
                owneridno: '',
                ownername: '',
                assoccertno: '',
                assoccertdate: '',
                assoccertissueplace: '',
                assoccertchangeno: '',
                assoccertchangedate: '',
                companyaddr: '',
                phoneno: '',
                faxno: '',
                companycapital: '',
                taxpayerno: '',
                taxpayerreqdate: '',
                vatcollectorno: '',
                vatcollectordate: '',
                firstattorneyname: '',
                secondattorneyname: '',
                thirdattorneyname: '',
                firstposition: '',
                secondposition: '',
                thirdposition: '',
                domicileno: '',
                domicileundername: '',
                domicileissuedate: '',
                domicileexpiredate: '',
                tradinglicenseno: '',
                tradinglicensetype: '',
                tradinglicenseissueplace: '',
                tradinglicenseissuedate: '',
                tradinglicenseexpiredate: '',
                ministryapprno: '',
                ministryapprdate: '',
                regcertno: '',
                regcertdate: '',
                regcertexpiredate: '',
                notaryname: '',
                notaryrepresentative: '',
                notarypermitno: '',
                notarypermitdate: '',
                notaryaddr: '',
                notarycorrtaddr: '',
                notarydomicile: '',
                revisionnotaryname: '',
                revisionnotaryrepresentative: '',
                revisionnotarypermitno: '',
                revisionnotarypermitdate: '',
                revisionnotaryaddr: '',
                revisionnotarycorrtaddr: '',
                revisionnotarydomicile: '',
                attorneyletterno: '',
                attorneyletterissuedate: '',
                attorneylettereffectivedate: '',
                companybankname1: '',
                companybankaccountno1: '',
                companybankdetail1: '',
                companybankname2: '',
                companybankaccountno2: '',
                companybankdetail2: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                timeinput: '',
                timeedit: '',
                lastupdatestamp: 0,
                name: '',
                rowid: 0
                    }
            		
		},
        M_New(){
          this.$refs.ref_customerid.focus()
        },
        M_Edit(){
          this.$refs.ref_owneridno.focus()
        },
        M_Delete(dt){       

            var data = this.FormToABSList().getRowSelected()  
			      var dataDelete = []

			
            data.forEach((value) => {	
              dataDelete.push({
                      CustomerID: value.CustomerID,
                      LastUpdateStamp: value.LastUpdateStamp,
                      _Message_: ""
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
,                customerid: record.CustomerID
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_CM_ContactLegalDocument = {
                customerid: data.customerid,
                owneridno: data.owneridno,
                ownername: data.ownername,
                assoccertno: data.assoccertno,
                assoccertdate: data.assoccertdate,
                assoccertissueplace: data.assoccertissueplace,
                assoccertchangeno: data.assoccertchangeno,
                assoccertchangedate: data.assoccertchangedate,
                companyaddr: data.companyaddr,
                phoneno: data.phoneno,
                faxno: data.faxno,
                companycapital: this.isCurrency(data.companycapital, this.decimal),
                taxpayerno: data.taxpayerno,
                taxpayerreqdate: data.taxpayerreqdate,
                vatcollectorno: data.vatcollectorno,
                vatcollectordate: data.vatcollectordate,
                firstattorneyname: data.firstattorneyname,
                secondattorneyname: data.secondattorneyname,
                thirdattorneyname: data.thirdattorneyname,
                firstposition: data.firstposition,
                secondposition: data.secondposition,
                thirdposition: data.thirdposition,
                domicileno: data.domicileno,
                domicileundername: data.domicileundername,
                domicileissuedate: data.domicileissuedate,
                domicileexpiredate: data.domicileexpiredate,
                tradinglicenseno: data.tradinglicenseno,
                tradinglicensetype: data.tradinglicensetype,
                tradinglicenseissueplace: data.tradinglicenseissueplace,
                tradinglicenseissuedate: data.tradinglicenseissuedate,
                tradinglicenseexpiredate: data.tradinglicenseexpiredate,
                ministryapprno: data.ministryapprno,
                ministryapprdate: data.ministryapprdate,
                regcertno: data.regcertno,
                regcertdate: data.regcertdate,
                regcertexpiredate: data.regcertexpiredate,
                notaryname: data.notaryname,
                notaryrepresentative: data.notaryrepresentative,
                notarypermitno: data.notarypermitno,
                notarypermitdate: data.notarypermitdate,
                notaryaddr: data.notaryaddr,
                notarycorrtaddr: data.notarycorrtaddr,
                notarydomicile: data.notarydomicile,
                revisionnotaryname: data.revisionnotaryname,
                revisionnotaryrepresentative: data.revisionnotaryrepresentative,
                revisionnotarypermitno: data.revisionnotarypermitno,
                revisionnotarypermitdate: data.revisionnotarypermitdate,
                revisionnotaryaddr: data.revisionnotaryaddr,
                revisionnotarycorrtaddr: data.revisionnotarycorrtaddr,
                revisionnotarydomicile: data.revisionnotarydomicile,
                attorneyletterno: data.attorneyletterno,
                attorneyletterissuedate: data.attorneyletterissuedate,
                attorneylettereffectivedate: data.attorneylettereffectivedate,
                companybankname1: data.companybankname1,
                companybankaccountno1: data.companybankaccountno1,
                companybankdetail1: data.companybankdetail1,
                companybankname2: data.companybankname2,
                companybankaccountno2: data.companybankaccountno2,
                companybankdetail2: data.companybankdetail2,
                userinput: data.userinput,
                useredit: data.useredit,
                timeinput: data.timeinput,
                timeedit: data.timeedit,
                lastupdatestamp: record.LastUpdateStamp,
                name: data.name,
                rowid: data.rowid
                    }
                 
                 this.M_CM_ContactLegalDocument.customeridLabel = this.M_CM_ContactLegalDocument.customerid != null ? data.customerid + this.separator + data.name :'' 

         

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

