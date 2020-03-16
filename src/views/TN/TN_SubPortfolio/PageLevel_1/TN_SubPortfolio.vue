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
                                        <ABSinputTextVuex :prop="PI_subportfoliocd" v-model="M_TN_SubPortfolio.subportfoliocd"  ref="ref_subportfoliocd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_taxaddress1" v-model="M_TN_SubPortfolio.taxaddress1"  ref="ref_taxaddress1"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_name" v-model="M_TN_SubPortfolio.name"  ref="ref_name"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_taxaddress2" v-model="M_TN_SubPortfolio.taxaddress2"  ref="ref_taxaddress2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnsubportfolioclasscdChange" :prop="PI_subportfolioclasscd" :value="M_TN_SubPortfolio.subportfolioclasscd" :label="M_TN_SubPortfolio.subportfolioclasscdLabel" ref="ref_subportfolioclasscd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_taxaddress3" v-model="M_TN_SubPortfolio.taxaddress3"  ref="ref_taxaddress3"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputDateVuex @input="OnsubportfoliostartChange" :prop="PI_subportfoliostart" v-model="M_TN_SubPortfolio.subportfoliostart"  ref="ref_subportfoliostart" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_taxaddress4" v-model="M_TN_SubPortfolio.taxaddress4"  ref="ref_taxaddress4"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_TN_SubPortfolio.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_taxzipcode" v-model="M_TN_SubPortfolio.taxzipcode"  ref="ref_taxzipcode"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_address1" v-model="M_TN_SubPortfolio.address1"  ref="ref_address1"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OntaxcitycdChange" :prop="PI_taxcitycd" :value="M_TN_SubPortfolio.taxcitycd" :label="M_TN_SubPortfolio.taxcitycdLabel" ref="ref_taxcitycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_address2" v-model="M_TN_SubPortfolio.address2"  ref="ref_address2"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_taxregistrationno" v-model="M_TN_SubPortfolio.taxregistrationno"  ref="ref_taxregistrationno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_address3" v-model="M_TN_SubPortfolio.address3"  ref="ref_address3"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputDateVuex @input="OntaxregistrationdateChange" :prop="PI_taxregistrationdate" v-model="M_TN_SubPortfolio.taxregistrationdate"  ref="ref_taxregistrationdate" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_address4" v-model="M_TN_SubPortfolio.address4"  ref="ref_address4"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_taxreferenceno" v-model="M_TN_SubPortfolio.taxreferenceno"  ref="ref_taxreferenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_addresszipcode" v-model="M_TN_SubPortfolio.zipcode"  ref="ref_addresszipcode"/>
                                      </b-col>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnholdvatChange" :prop="PI_holdvat" v-model="M_TN_SubPortfolio.holdvat"  ref="ref_holdvat" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OncitycdChange" :prop="PI_citycd" :value="M_TN_SubPortfolio.citycd" :label="M_TN_SubPortfolio.citycdLabel" ref="ref_citycd"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnholdwithholdingChange" :prop="PI_holdwithholding" v-model="M_TN_SubPortfolio.holdwithholding"  ref="ref_holdwithholding" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_phoneno" v-model="M_TN_SubPortfolio.phoneno"  ref="ref_phoneno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnstandardtaxrunningcdChange" :prop="PI_standardtaxrunningcd" :value="M_TN_SubPortfolio.standardtaxrunningcd" :label="M_TN_SubPortfolio.standardtaxrunningcdLabel" ref="ref_standardtaxrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_faxno" v-model="M_TN_SubPortfolio.faxno"  ref="ref_faxno"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OncommontaxrunningcdChange" :prop="PI_commontaxrunningcd" :value="M_TN_SubPortfolio.commontaxrunningcd" :label="M_TN_SubPortfolio.commontaxrunningcdLabel" ref="ref_commontaxrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_website" v-model="M_TN_SubPortfolio.website"  ref="ref_website"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnarwithholdingtaxrunningcdChange" :prop="PI_arwithholdingtaxrunningcd" :value="M_TN_SubPortfolio.arwithholdingtaxrunningcd" :label="M_TN_SubPortfolio.arwithholdingtaxrunningcdLabel" ref="ref_arwithholdingtaxrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_TN_SubPortfolio.remarks"  ref="ref_remarks" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSInputSelectList @change="OnapvatdeductionrunningcdChange" :prop="PI_apvatdeductionrunningcd" :value="M_TN_SubPortfolio.apvatdeductionrunningcd" :label="M_TN_SubPortfolio.apvatdeductionrunningcdLabel" ref="ref_apvatdeductionrunningcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OnapwithholdingdeductionrunningcdChange" :prop="PI_apwithholdingdeductionrunningcd" :value="M_TN_SubPortfolio.apwithholdingdeductionrunningcd" :label="M_TN_SubPortfolio.apwithholdingdeductionrunningcdLabel" ref="ref_apwithholdingdeductionrunningcd"/>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSFileUpload :prop="PI_referencefilename" @fileName="getFileName" 
                                                                        v-model="M_TN_SubPortfolio.referencefilename" 
                                                                        :file="M_TN_SubPortfolio.picturefilename" 
                                                                        :image="M_TN_SubPortfolio.referencefilename"
                                                                         ref="ref_referencefilename" />
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
		cInsertKey:'id=PhoneNo,label=PhoneNo',
		FormType: "List",
		Module:"TN",
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

            M_TN_SubPortfolio :{
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                name: '',
                subportfolioclasscd: '',
                subportfoliogroupcd: '',
                subportfoliostart: '',
                referenceno: '',
                address1: '',
                address2: '',
                address3: '',
                address4: '',
                citycd: '',
                zipcode: '',
                phoneno: '',
                faxno: '',
                website: '',
                email: '',
                internalcontactid: '',
                timeedit: '',
                taxaddress1: '',
                taxaddress2: '',
                taxaddress3: '',
                taxaddress4: '',
                taxcitycd: '',
                taxzipcode: '',
                taxregistrationno: '',
                taxregistrationdate: '',
                taxreferenceno: '',
                standardtaxrunningcd: '',
                commontaxrunningcd: '',
                arwithholdingtaxrunningcd: '',
                apvatdeductionrunningcd: '',
                apwithholdingdeductionrunningcd: '',
                defaultvatchargesassignment: '',
                holdvat: '',
                holdwithholding: '',
                remarks: '',
                onebillmaster: '',
                picturefilename: '',
                referencefilename: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                subportfolioclassdescs: '',
                citydescs: '',
                taxcitydescs: '',
                standardtaxrunningcddescs: '',
                commontaxrunningcddescs: '',
                arwithholdingtaxrunningcddescs: '',
                apwithholdingdeductionrunningcddescs: '',
                apvatdeductionrunningcddescs: '',
                subportfoliogroupcddescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_subportfoliocd: { 
                cValidate :'required|max:3', 
                cName: 'subportfoliocd', 
                cLabel: 'SubPortfolio Code', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxaddress1: { 
                cValidate :'max:50', 
                cName: 'taxaddress1', 
                cLabel: 'Tax Reg Address', 
                cLabelSize: 4, 
                cOrder: 18, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_name: { 
                cValidate :'required|max:50', 
                cName: 'name', 
                cLabel: 'Name', 
                cLabelSize: 4, 
                cOrder: 2, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxaddress2: { 
                cValidate :'max:50', 
                cName: 'taxaddress2', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 19, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_subportfolioclasscd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMSubPortfolioClass'    , 
                    ColumnDB: 'SubPortFolioClassCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'subportfolioclasscd', 
                cLabel: 'SubPortfolio Class', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 3, 
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
                cMasterUrl: 'CM/CM_SubPortfolioClass' ,
                cDisplayColumn: 'SubPortFolioClassCd,Descs' ,
            }, 
            PI_taxaddress3: { 
                cValidate :'max:50', 
                cName: 'taxaddress3', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 20, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_subportfoliostart: { 
                cValidate :'required', 
                cName: 'subportfoliostart', 
                cLabel: 'Start Operation', 
                cLabelSize: 4, 
                cOrder: 4, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxaddress4: {
                cValidate :'max:50', 
                cName: 'taxaddress4', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 21, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_referenceno: { 
                cValidate :'max:20', 
                cName: 'referenceno', 
                cLabel: 'Reference No', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxzipcode: { 
                cValidate :'max:10', 
                cName: 'taxzipcode', 
                cLabel: 'Zip Code', 
                cLabelSize: 4, 
                cOrder: 22, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_address1: { 
                cValidate :'required|max:50', 
                cName: 'address1', 
                cLabel: 'Address', 
                cLabelSize: 4, 
                cOrder: 6, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxcitycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCity'    , 
                    ColumnDB: 'CityCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'taxcitycd', 
                cLabel: 'City', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 23, 
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
                cMasterUrl: 'CM/CM_CountryCity' ,
                cDisplayColumn: 'CityCd,Descs' ,
            }, 
            PI_address2: { 
                cValidate :'max:50', 
                cName: 'address2', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 7, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxregistrationno: { 
                cValidate :'max:50', 
                cName: 'taxregistrationno', 
                cLabel: 'Tax Reg No', 
                cLabelSize: 4, 
                cOrder: 24, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_address3: { 
                cValidate :'max:50', 
                cName: 'address3', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxregistrationdate: { 
                cValidate :'', 
                cName: 'taxregistrationdate', 
                cLabel: 'Tax Reg Date', 
                cLabelSize: 4, 
                cOrder: 25, 
                cKey: true, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_address4: { 
                cValidate :'max:50', 
                cName: 'address4', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 9, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxreferenceno: { 
                cValidate :'max:50', 
                cName: 'taxreferenceno', 
                cLabel: 'Tax Ref No', 
                cLabelSize: 4, 
                cOrder: 26, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_addresszipcode: {
                cValidate :'max:10', 
                cName: 'zipcode', 
                cLabel: 'Zip Code', 
                cLabelSize: 4, 
                cOrder: 10, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            },
            PI_holdvat: { 
                cValidate :'', 
                cName: 'holdvat', 
                cId: 'rdbholdvat', 
                cRadioOptions: [{ text: 'Yes', value: 'M' }, { text: 'No', value: 'C' }], 
                cRadioDefaultOption: '', 
                cLabel:'Hold VAT', 
                cLabelSize: 4, 
                cOrder: 27, 
                cProtect: true, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_citycd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMCity'    , 
                    ColumnDB: 'CityCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'required', 
                cName: 'citycd', 
                cLabel: 'City', 
                cKey: true, 
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
                cMasterUrl: 'CM/CM_CountryCity' ,
                cDisplayColumn: 'CityCd,CountryCd,Descs' ,
            }, 
            PI_holdwithholding: { 
                cValidate :'', 
                cName: 'holdwithholding', 
                cId: 'rdbholdwithholding', 
                cRadioOptions: [{ text: 'Yes', value: 'M' }, { text: 'No', value: 'C' }], 
                cRadioDefaultOption: '', 
                cLabel:'Hold Withholding ', 
                cLabelSize: 4, 
                cOrder: 28, 
                cProtect: true, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_phoneno: { 
                cValidate :'max:30', 
                cName: 'phoneno', 
                cLabel: 'Telephone', 
                cLabelSize: 4, 
                cOrder: 12, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_standardtaxrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'standardtaxrunningcd', 
                cLabel: 'Standard Tax RC', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 29, 
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
                cMasterUrl: 'CM/CM_RunningCd' ,
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_faxno: { 
                cValidate :'max:30', 
                cName: 'faxno', 
                cLabel: 'Fax', 
                cLabelSize: 4, 
                cOrder: 13, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_commontaxrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'commontaxrunningcd', 
                cLabel: 'Common Tax RC', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 30, 
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
                cMasterUrl: 'CM/CM_RunningCd' ,
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_website: { 
                cValidate :'max:30', 
                cName: 'website', 
                cLabel: 'Website', 
                cLabelSize: 4, 
                cOrder: 14, 
                cKey: true, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_arwithholdingtaxrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'arwithholdingtaxrunningcd', 
                cLabel: 'AR WithHolding Tax RC', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 31, 
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
                cMasterUrl: 'CM/CM_RunningCd' ,
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:15, 
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
            PI_apvatdeductionrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'apvatdeductionrunningcd', 
                cLabel: 'AP VAT Deduction RC', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 31, 
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
                cMasterUrl: 'CM/CM_RunningCd' ,
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_apwithholdingdeductionrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'apwithholdingdeductionrunningcd', 
                cLabel: 'AP WithHolding Deduction RC', 
                cKey: true, 
                cLabelSize: 4, 
                cOrder: 16, 
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
                cMasterUrl: 'CM/CM_RunningCd' ,
                cDisplayColumn: 'RunningCd,Descs' ,
            }, 
            PI_referencefilename: { 
                cValidate :'', 
                cName:'referencefilename', 
                cLabel: 'Picture File', 
                cSubPortfolio:this.getDataUser().SubPortfolioCd,
                cPath:"Picture/SubPortfolio",
                cLabelSize: 4, 
                cOrder:17, 
                cKey:true,
                cProtect:true,
                cVisible: true, 
                cModule: 'TN', 
                cPlaceholder: 'Choose a file...', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true 
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
        OnsubportfolioclasscdChange (data) {
        this.$nextTick(() => {
            this.M_TN_SubPortfolio.subportfolioclasscd = data.id
            this.M_TN_SubPortfolio.subportfolioclasscdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{subportfolioclasscd}
            }
        })
        this.$forceUpdate()
        },
        OnsubportfoliostartChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{subportfoliostart}
            }
        })
        this.$forceUpdate()
        },
        OntaxcitycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_SubPortfolio.taxcitycd = data.id
            this.M_TN_SubPortfolio.taxcitycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{taxcitycd}
            }
        })
        this.$forceUpdate()
        },
        OntaxregistrationdateChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{taxregistrationdate}
            }
        })
        this.$forceUpdate()
        },
        OnholdvatChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{holdvat}
            }
        })
        this.$forceUpdate()
        },
        OncitycdChange (data) {
        this.$nextTick(() => {
            this.M_TN_SubPortfolio.citycd = data.id
            this.M_TN_SubPortfolio.citycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{citycd}
            }
        })
        this.$forceUpdate()
        },
        OnholdwithholdingChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{holdwithholding}
            }
        })
        this.$forceUpdate()
        },
        OnstandardtaxrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_SubPortfolio.standardtaxrunningcd = data.id
            this.M_TN_SubPortfolio.standardtaxrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{standardtaxrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OncommontaxrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_SubPortfolio.commontaxrunningcd = data.id
            this.M_TN_SubPortfolio.commontaxrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{commontaxrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OnarwithholdingtaxrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_SubPortfolio.arwithholdingtaxrunningcd = data.id
            this.M_TN_SubPortfolio.arwithholdingtaxrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{arwithholdingtaxrunningcd}
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
        OnapvatdeductionrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_SubPortfolio.apvatdeductionrunningcd = data.id
            this.M_TN_SubPortfolio.apvatdeductionrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{apvatdeductionrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OnapwithholdingdeductionrunningcdChange (data) {
        this.$nextTick(() => {
            this.M_TN_SubPortfolio.apwithholdingdeductionrunningcd = data.id
            this.M_TN_SubPortfolio.apwithholdingdeductionrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{apwithholdingdeductionrunningcd}
            }
        })
        this.$forceUpdate()
        },
        getFileName(fileName) {
         this.TN_SubPortfolio.picturefilename = fileName 
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
        M_Post(dt){
        },
        M_Insert() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.M_TN_SubPortfolio.subportfoliocd,
                Name: this.M_TN_SubPortfolio.name,
                SubPortfolioClassCd: this.M_TN_SubPortfolio.subportfolioclasscd == '' || this.M_TN_SubPortfolio.subportfolioclasscd == null ? 'NULL' : this.M_TN_SubPortfolio.subportfolioclasscd ,
                SubPortfolioGroupCd: this.M_TN_SubPortfolio.subportfoliogroupcd,
                SubPortfolioStart: this.M_TN_SubPortfolio.subportfoliostart == '' || this.M_TN_SubPortfolio.subportfoliostart == null ? 'NULL' : this.M_TN_SubPortfolio.subportfoliostart ,
                ReferenceNo: this.M_TN_SubPortfolio.referenceno,
                Address1: this.M_TN_SubPortfolio.address1,
                Address2: this.M_TN_SubPortfolio.address2,
                Address3: this.M_TN_SubPortfolio.address3,
                Address4: this.M_TN_SubPortfolio.address4,
                CityCd: this.M_TN_SubPortfolio.citycd == '' || this.M_TN_SubPortfolio.citycd == null ? 'NULL' : this.M_TN_SubPortfolio.citycd ,
                ZipCode: this.M_TN_SubPortfolio.zipcode,
                PhoneNo: this.M_TN_SubPortfolio.phoneno,
                FaxNo: this.M_TN_SubPortfolio.faxno,
                Website: this.M_TN_SubPortfolio.website,
                Email: this.M_TN_SubPortfolio.email,
                InternalContactID: this.M_TN_SubPortfolio.internalcontactid,
                TaxAddress1: this.M_TN_SubPortfolio.taxaddress1,
                TaxAddress2: this.M_TN_SubPortfolio.taxaddress2,
                TaxAddress3: this.M_TN_SubPortfolio.taxaddress3,
                TaxAddress4: this.M_TN_SubPortfolio.taxaddress4,
                TaxCityCd: this.M_TN_SubPortfolio.taxcitycd == '' || this.M_TN_SubPortfolio.taxcitycd == null ? 'NULL' : this.M_TN_SubPortfolio.taxcitycd ,
                TaxZipCode: this.M_TN_SubPortfolio.taxzipcode,
                TaxRegistrationNo: this.M_TN_SubPortfolio.taxregistrationno,
                TaxRegistrationDate: this.M_TN_SubPortfolio.taxregistrationdate == '' || this.M_TN_SubPortfolio.taxregistrationdate == null ? 'NULL' : this.M_TN_SubPortfolio.taxregistrationdate ,
                TaxReferenceNo: this.M_TN_SubPortfolio.taxreferenceno,
                StandardTaxRunningCd: this.M_TN_SubPortfolio.standardtaxrunningcd == '' || this.M_TN_SubPortfolio.standardtaxrunningcd == null ? 'NULL' : this.M_TN_SubPortfolio.standardtaxrunningcd ,
                CommonTaxRunningCd: this.M_TN_SubPortfolio.commontaxrunningcd == '' || this.M_TN_SubPortfolio.commontaxrunningcd == null ? 'NULL' : this.M_TN_SubPortfolio.commontaxrunningcd ,
                ARWithholdingTaxRunningCd: this.M_TN_SubPortfolio.arwithholdingtaxrunningcd == '' || this.M_TN_SubPortfolio.arwithholdingtaxrunningcd == null ? 'NULL' : this.M_TN_SubPortfolio.arwithholdingtaxrunningcd ,
                APVATDeductionRunningCd: this.M_TN_SubPortfolio.apvatdeductionrunningcd == '' || this.M_TN_SubPortfolio.apvatdeductionrunningcd == null ? 'NULL' : this.M_TN_SubPortfolio.apvatdeductionrunningcd ,
                APWithholdingDeductionRunningCd: this.M_TN_SubPortfolio.apwithholdingdeductionrunningcd == '' || this.M_TN_SubPortfolio.apwithholdingdeductionrunningcd == null ? 'NULL' : this.M_TN_SubPortfolio.apwithholdingdeductionrunningcd ,
                DefaultVATChargesAssignment: this.M_TN_SubPortfolio.defaultvatchargesassignment,
                HoldVAT: this.APFieldHelper.HOLD_VAT_WITHHOLDING_YES,
                HoldWithholding: this.APFieldHelper.HOLD_VAT_WITHHOLDING_YES,
                Remarks: this.M_TN_SubPortfolio.remarks,
                PictureFileName: this.M_TN_SubPortfolio.picturefilename,
                ReferenceFileName: this.M_TN_SubPortfolio.referencefilename,
                UserInput: this.getDataUser().UserId ,
                OneBillMaster: this.M_TN_SubPortfolio.onebillmaster                
            }

            this.postJSON(this.getUrlInsert(), param)
            .then((response) => {
                if(response == null) return

				//kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultInsert(response.Message)
					
				
            })
        },
        M_Update() {
            var param = {			
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder,
                SubPortfolioCd: this.M_TN_SubPortfolio.subportfoliocd,
                Name: this.M_TN_SubPortfolio.name,
                SubPortfolioClassCd: this.M_TN_SubPortfolio.subportfolioclasscd == '' || this.M_TN_SubPortfolio.subportfolioclasscd == null ? 'NULL' : this.M_TN_SubPortfolio.subportfolioclasscd ,
                SubPortfolioGroupCd: this.M_TN_SubPortfolio.subportfoliogroupcd,
                SubPortfolioStart: this.M_TN_SubPortfolio.subportfoliostart == '' || this.M_TN_SubPortfolio.subportfoliostart == null ? 'NULL' : this.M_TN_SubPortfolio.subportfoliostart ,
                ReferenceNo: this.M_TN_SubPortfolio.referenceno,
                Address1: this.M_TN_SubPortfolio.address1,
                Address2: this.M_TN_SubPortfolio.address2,
                Address3: this.M_TN_SubPortfolio.address3,
                Address4: this.M_TN_SubPortfolio.address4,
                CityCd: this.M_TN_SubPortfolio.citycd == '' || this.M_TN_SubPortfolio.citycd == null ? 'NULL' : this.M_TN_SubPortfolio.citycd ,
                ZipCode: this.M_TN_SubPortfolio.zipcode,
                PhoneNo: this.M_TN_SubPortfolio.phoneno,
                FaxNo: this.M_TN_SubPortfolio.faxno,
                Website: this.M_TN_SubPortfolio.website,
                Email: this.M_TN_SubPortfolio.email,
                InternalContactID: this.M_TN_SubPortfolio.internalcontactid,
                TaxAddress1: this.M_TN_SubPortfolio.taxaddress1,
                TaxAddress2: this.M_TN_SubPortfolio.taxaddress2,
                TaxAddress3: this.M_TN_SubPortfolio.taxaddress3,
                TaxAddress4: this.M_TN_SubPortfolio.taxaddress4,
                TaxCityCd: this.M_TN_SubPortfolio.taxcitycd == '' || this.M_TN_SubPortfolio.taxcitycd == null ? 'NULL' : this.M_TN_SubPortfolio.taxcitycd ,
                TaxZipCode: this.M_TN_SubPortfolio.taxzipcode,
                TaxRegistrationNo: this.M_TN_SubPortfolio.taxregistrationno,
                TaxRegistrationDate: this.M_TN_SubPortfolio.taxregistrationdate == '' || this.M_TN_SubPortfolio.taxregistrationdate == null ? 'NULL' : this.M_TN_SubPortfolio.taxregistrationdate ,
                TaxReferenceNo: this.M_TN_SubPortfolio.taxreferenceno,
                StandardTaxRunningCd: this.M_TN_SubPortfolio.standardtaxrunningcd == '' || this.M_TN_SubPortfolio.standardtaxrunningcd == null ? 'NULL' : this.M_TN_SubPortfolio.standardtaxrunningcd ,
                CommonTaxRunningCd: this.M_TN_SubPortfolio.commontaxrunningcd == '' || this.M_TN_SubPortfolio.commontaxrunningcd == null ? 'NULL' : this.M_TN_SubPortfolio.commontaxrunningcd ,
                ARWithholdingTaxRunningCd: this.M_TN_SubPortfolio.arwithholdingtaxrunningcd == '' || this.M_TN_SubPortfolio.arwithholdingtaxrunningcd == null ? 'NULL' : this.M_TN_SubPortfolio.arwithholdingtaxrunningcd ,
                APVATDeductionRunningCd: this.M_TN_SubPortfolio.apvatdeductionrunningcd == '' || this.M_TN_SubPortfolio.apvatdeductionrunningcd == null ? 'NULL' : this.M_TN_SubPortfolio.apvatdeductionrunningcd ,
                APWithholdingDeductionRunningCd: this.M_TN_SubPortfolio.apwithholdingdeductionrunningcd == '' || this.M_TN_SubPortfolio.apwithholdingdeductionrunningcd == null ? 'NULL' : this.M_TN_SubPortfolio.apwithholdingdeductionrunningcd ,
                DefaultVATChargesAssignment: this.M_TN_SubPortfolio.defaultvatchargesassignment,
                HoldVAT: this.APFieldHelper.HOLD_VAT_WITHHOLDING_YES,
                HoldWithholding: this.APFieldHelper.HOLD_VAT_WITHHOLDING_YES,
                Remarks: this.M_TN_SubPortfolio.remarks,
                PictureFileName: this.M_TN_SubPortfolio.picturefilename,
                ReferenceFileName: this.M_TN_SubPortfolio.referencefilename,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_TN_SubPortfolio.lastupdatestamp,
                OneBillMaster: this.M_TN_SubPortfolio.onebillmaster                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_TN_SubPortfolio = {
                subportfoliocd: this.getDataUser().SubPortfolioCd,
                name: '',
                subportfolioclasscd: '',
                subportfoliogroupcd: '',
                subportfoliostart: '',
                referenceno: '',
                address1: '',
                address2: '',
                address3: '',
                address4: '',
                citycd: '',
                zipcode: '',
                phoneno: '',
                faxno: '',
                website: '',
                email: '',
                internalcontactid: '',
                timeedit: '',
                taxaddress1: '',
                taxaddress2: '',
                taxaddress3: '',
                taxaddress4: '',
                taxcitycd: '',
                taxzipcode: '',
                taxregistrationno: '',
                taxregistrationdate: '',
                taxreferenceno: '',
                standardtaxrunningcd: '',
                commontaxrunningcd: '',
                arwithholdingtaxrunningcd: '',
                apvatdeductionrunningcd: '',
                apwithholdingdeductionrunningcd: '',
                defaultvatchargesassignment: '',
                holdvat: '',
                holdwithholding: '',
                remarks: '',
                onebillmaster: '',
                picturefilename: '',
                referencefilename: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                subportfolioclassdescs: '',
                citydescs: '',
                taxcitydescs: '',
                standardtaxrunningcddescs: '',
                commontaxrunningcddescs: '',
                arwithholdingtaxrunningcddescs: '',
                apwithholdingdeductionrunningcddescs: '',
                apvatdeductionrunningcddescs: '',
                subportfoliogroupcddescs: '',
                lastupdatestamp: 0,
                rowid: 0
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
                      SubPortfolioCd: value.SubPortfolioCd,
                      LastUpdateStamp: value.LastUpdateStamp,
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

                  this.$parent.resultDelete()
              })      
        },        
        getDataBy (record) {
            var param = {
                OptionSeq: this.getOptionSeq().OptionSeq,
                LineNo: this.$parent.data.PageOrder
,                subportfoliocd: record.SubPortfolioCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_TN_SubPortfolio = {
                subportfoliocd: data.subportfoliocd,
                name: data.name,
                subportfolioclasscd: data.subportfolioclasscd,
                subportfoliogroupcd: data.subportfoliogroupcd,
                subportfoliostart: data.subportfoliostart,
                referenceno: data.referenceno,
                address1: data.address1,
                address2: data.address2,
                address3: data.address3,
                address4: data.address4,
                citycd: data.citycd,
                zipcode: data.zipcode,
                phoneno: data.phoneno,
                faxno: data.faxno,
                website: data.website,
                email: data.email,
                internalcontactid: data.internalcontactid,
                timeedit: data.timeedit,
                taxaddress1: data.taxaddress1,
                taxaddress2: data.taxaddress2,
                taxaddress3: data.taxaddress3,
                taxaddress4: data.taxaddress4,
                taxcitycd: data.taxcitycd,
                taxzipcode: data.taxzipcode,
                taxregistrationno: data.taxregistrationno,
                taxregistrationdate: data.taxregistrationdate,
                taxreferenceno: data.taxreferenceno,
                standardtaxrunningcd: data.standardtaxrunningcd,
                commontaxrunningcd: data.commontaxrunningcd,
                arwithholdingtaxrunningcd: data.arwithholdingtaxrunningcd,
                apvatdeductionrunningcd: data.apvatdeductionrunningcd,
                apwithholdingdeductionrunningcd: data.apwithholdingdeductionrunningcd,
                defaultvatchargesassignment: data.defaultvatchargesassignment,
                holdvat: data.holdvat,
                holdwithholding: data.holdwithholding,
                remarks: data.remarks,
                onebillmaster: data.onebillmaster,
                picturefilename: data.picturefilename,
                referencefilename: data.referencefilename,
                userinput: data.userinput,
                useredit: data.useredit,
                subportfolioclassdescs: data.subportfolioclassdescs,
                citydescs: data.citydescs,
                taxcitydescs: data.taxcitydescs,
                standardtaxrunningcddescs: data.standardtaxrunningcddescs,
                commontaxrunningcddescs: data.commontaxrunningcddescs,
                arwithholdingtaxrunningcddescs: data.arwithholdingtaxrunningcddescs,
                apwithholdingdeductionrunningcddescs: data.apwithholdingdeductionrunningcddescs,
                apvatdeductionrunningcddescs: data.apvatdeductionrunningcddescs,
                subportfoliogroupcddescs: data.subportfoliogroupcddescs,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: this.isCurrency(data.rowid, this.decimal)
                    }
                 

                this.M_TN_SubPortfolio.subportfolioclasscdLabel = this.M_TN_SubPortfolio.subportfolioclasscd != null && this.M_TN_SubPortfolio.subportfolioclasscd != '' ? data.subportfolioclasscd + this.separator + data.subportfoliogroupcddescs :'' 
                this.M_TN_SubPortfolio.taxcitycdLabel = this.M_TN_SubPortfolio.taxcitycd != null && this.M_TN_SubPortfolio.taxcitycd != '' ? data.taxcitycd + this.separator + data.taxcitydescs :'' 
                this.M_TN_SubPortfolio.citycdLabel = this.M_TN_SubPortfolio.citycd != null && this.M_TN_SubPortfolio.citycd != '' ? data.citycd + this.separator + data.citydescs :'' 
                this.M_TN_SubPortfolio.standardtaxrunningcdLabel = this.M_TN_SubPortfolio.standardtaxrunningcd != null && this.M_TN_SubPortfolio.standardtaxrunningcd != '' ? data.standardtaxrunningcd + this.separator + data.standardtaxrunningcd :'' 
                this.M_TN_SubPortfolio.commontaxrunningcdLabel = this.M_TN_SubPortfolio.commontaxrunningcd != null && this.M_TN_SubPortfolio.commontaxrunningcd != '' ? data.commontaxrunningcd + this.separator + data.commontaxrunningcddescs :'' 
                this.M_TN_SubPortfolio.arwithholdingtaxrunningcdLabel = this.M_TN_SubPortfolio.arwithholdingtaxrunningcd != null && this.M_TN_SubPortfolio.arwithholdingtaxrunningcd != '' ? data.arwithholdingtaxrunningcd + this.separator + data.arwithholdingtaxrunningcddescs :'' 
                this.M_TN_SubPortfolio.apvatdeductionrunningcdLabel = this.M_TN_SubPortfolio.apvatdeductionrunningcd != null && this.M_TN_SubPortfolio.apvatdeductionrunningcd != '' ? data.apvatdeductionrunningcd + this.separator + data.apvatdeductionrunningcddescs :'' 
                this.M_TN_SubPortfolio.apwithholdingdeductionrunningcdLabel = this.M_TN_SubPortfolio.apwithholdingdeductionrunningcd != null && this.M_TN_SubPortfolio.apwithholdingdeductionrunningcd != '' ? data.apwithholdingdeductionrunningcd + this.separator + data.apwithholdingdeductionrunningcddescs :'' 
         

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

