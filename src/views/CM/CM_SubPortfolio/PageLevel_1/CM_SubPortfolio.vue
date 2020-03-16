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
                                <b-col md="6" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_subportfoliocd" v-model="M_CM_SubPortfolio.subportfoliocd"  ref="ref_subportfoliocd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_name" v-model="M_CM_SubPortfolio.name"  ref="ref_name"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OnsubportfolioclasscdChange" :prop="PI_subportfolioclasscd" :value="M_CM_SubPortfolio.subportfolioclasscd" :label="M_CM_SubPortfolio.subportfolioclasscdLabel" ref="ref_subportfolioclasscd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OnsubportfoliogroupcdChange" :prop="PI_subportfoliogroupcd" :value="M_CM_SubPortfolio.subportfoliogroupcd" :label="M_CM_SubPortfolio.subportfoliogroupcdLabel" ref="ref_subportfoliogroupcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputDateVuex @input="OnsubportfoliostartChange" :prop="PI_subportfoliostart" v-model="M_CM_SubPortfolio.subportfoliostart"  ref="ref_subportfoliostart" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_referenceno" v-model="M_CM_SubPortfolio.referenceno"  ref="ref_referenceno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex @input="Onaddress1Change" :prop="PI_address1" v-model="M_CM_SubPortfolio.address1"  ref="ref_address1"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_address2" v-model="M_CM_SubPortfolio.address2"  ref="ref_address2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_address3" v-model="M_CM_SubPortfolio.address3"  ref="ref_address3"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_address4" v-model="M_CM_SubPortfolio.address4"  ref="ref_address4"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_zipcode" v-model="M_CM_SubPortfolio.zipcode"  ref="ref_zipcode"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OncitycdChange" :prop="PI_citycd" :value="M_CM_SubPortfolio.citycd" :label="M_CM_SubPortfolio.citycdLabel" ref="ref_citycd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_phoneno" v-model="M_CM_SubPortfolio.phoneno"  ref="ref_phoneno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_faxno" v-model="M_CM_SubPortfolio.faxno"  ref="ref_faxno"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col md="12">
                                        <ABSinputTextVuex :prop="PI_website" v-model="M_CM_SubPortfolio.website"  ref="ref_website"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSinputTextVuex :prop="PI_email" v-model="M_CM_SubPortfolio.email"  ref="ref_email"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSInputSelectList @change="OninternalcontactidChange" :prop="PI_internalcontactid" :value="M_CM_SubPortfolio.internalcontactid" :label="M_CM_SubPortfolio.internalcontactidLabel" ref="ref_internalcontactid"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="12">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_CM_SubPortfolio.remarks"  ref="ref_remarks" />
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                <b-col md="6" id="col-right"> <!-- table open right -->
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_taxaddress1" v-model="M_CM_SubPortfolio.taxaddress1"  ref="ref_taxaddress1"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_taxaddress2" v-model="M_CM_SubPortfolio.taxaddress2"  ref="ref_taxaddress2"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_taxaddress3" v-model="M_CM_SubPortfolio.taxaddress3"  ref="ref_taxaddress3"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_taxaddress4" v-model="M_CM_SubPortfolio.taxaddress4"  ref="ref_taxaddress4"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_taxzipcode" v-model="M_CM_SubPortfolio.taxzipcode"  ref="ref_taxzipcode"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSInputSelectList @change="OntaxcitycdChange" :prop="PI_taxcitycd" :value="M_CM_SubPortfolio.taxcitycd" :label="M_CM_SubPortfolio.taxcitycdLabel" ref="ref_taxcitycd"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_taxregistrationno" v-model="M_CM_SubPortfolio.taxregistrationno"  ref="ref_taxregistrationno"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputDateVuex @input="OntaxregistrationdateChange" :prop="PI_taxregistrationdate" v-model="M_CM_SubPortfolio.taxregistrationdate"  ref="ref_taxregistrationdate" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputTextVuex :prop="PI_taxreferenceno" v-model="M_CM_SubPortfolio.taxreferenceno"  ref="ref_taxreferenceno"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputRadioButtonVuex @input="OnholdvatChange" :prop="PI_holdvat" v-model="M_CM_SubPortfolio.holdvat"  ref="ref_holdvat" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputRadioButtonVuex @input="OnholdwithholdingChange" :prop="PI_holdwithholding" v-model="M_CM_SubPortfolio.holdwithholding"  ref="ref_holdwithholding" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSInputSelectList @change="OnstandardtaxrunningcdChange" :prop="PI_standardtaxrunningcd" :value="M_CM_SubPortfolio.standardtaxrunningcd" :label="M_CM_SubPortfolio.standardtaxrunningcdLabel" ref="ref_standardtaxrunningcd"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSInputSelectList @change="OncommontaxrunningcdChange" :prop="PI_commontaxrunningcd" :value="M_CM_SubPortfolio.commontaxrunningcd" :label="M_CM_SubPortfolio.commontaxrunningcdLabel" ref="ref_commontaxrunningcd"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSInputSelectList @change="OnarwithholdingtaxrunningcdChange" :prop="PI_arwithholdingtaxrunningcd" :value="M_CM_SubPortfolio.arwithholdingtaxrunningcd" :label="M_CM_SubPortfolio.arwithholdingtaxrunningcdLabel" ref="ref_arwithholdingtaxrunningcd"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSInputSelectList @change="OnapvatdeductionrunningcdChange" :prop="PI_apvatdeductionrunningcd" :value="M_CM_SubPortfolio.apvatdeductionrunningcd" :label="M_CM_SubPortfolio.apvatdeductionrunningcdLabel" ref="ref_apvatdeductionrunningcd"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSInputSelectList @change="OnapwithholdingdeductionrunningcdChange" :prop="PI_apwithholdingdeductionrunningcd" :value="M_CM_SubPortfolio.apwithholdingdeductionrunningcd" :label="M_CM_SubPortfolio.apwithholdingdeductionrunningcdLabel" ref="ref_apwithholdingdeductionrunningcd"/>
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputRadioButtonVuex @input="OndefaultvatchargesassignmentChange" :prop="PI_defaultvatchargesassignment" v-model="M_CM_SubPortfolio.defaultvatchargesassignment"  ref="ref_defaultvatchargesassignment" />
                                    </b-col>
                                  </b-row>
                                  <b-row>
                                    <b-col md="12">
                                      <ABSinputRadioButtonVuex @input="OnonebillmasterChange" :prop="PI_onebillmaster" v-model="M_CM_SubPortfolio.onebillmaster"  ref="ref_onebillmaster" />
                                    </b-col>
                                  </b-row>
                                </b-col> <!--- table close right -->
                                <div class="div-collapse">
                                    <span class="master-span-form">
                                        Picture
                                    </span>
                                </div>
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSFileUpload :prop="PI_referencefilename" @fileName="getFileName"
                                                                        @response ="getResponse"
                                                                        v-model="M_CM_SubPortfolio.referencefilename" 
                                                                        :file="M_CM_SubPortfolio.picturefilename" 
                                                                        :image="M_CM_SubPortfolio.referencefilename"
                                                                         ref="ref_referencefilename" />
                                      </b-col>
                                      <b-col  md="6">
                                        <!-- <ABSFileUpload :prop="PI_MapFileName" @fileName="getMapName" 
                                                                        v-model="M_CM_SubPortfolio.mapfilename" 
                                                                        :file="M_CM_SubPortfolio.picturefilename" 
                                                                        :image="M_CM_SubPortfolio.mapfilename"
                                                                         ref="ref_mapfilename" /> -->
                                        <ABSFileUpload :prop="PI_referencefilename2" @fileName="getMapName"
                                                                        @response ="getResponse2"
                                                                        v-model="M_CM_SubPortfolio.mapfilename" 
                                                                        :file="M_CM_SubPortfolio.mapfilename" 
                                                                        :image="M_CM_SubPortfolio.mapfilename"
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
		cInsertKey:'',
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

            M_CM_SubPortfolio :{
                subportfoliocd: '',
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
                defaultvatchargesassignment: 'D',
                holdvat: 'C',
                holdwithholding: 'M',
                remarks: '',
                onebillmaster: 'N',
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
                rowid: 0,
                urlpicturemap:'',
                mapfilename:'',
                referencefilename2:'',
                picturefilename2:''
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
                cOrder: 20, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_name: { 
                cValidate :'required|max:60', 
                cName: 'name', 
                cLabel: 'Name', 
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
            PI_taxaddress2: { 
                cValidate :'max:50', 
                cName: 'taxaddress2', 
                cLabel: '', 
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
                cKey: false, 
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
                cOrder: 22, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_subportfoliogroupcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMSUbPortfolioGroup'    , 
                    ColumnDB: 'SubPortfolioGroupCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'subportfoliogroupcd', 
                cLabel: 'SubPortfolio Holding Group', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 4, 
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
                cDisplayColumn: 'SubPortfolioGroupCd,Descs' ,
            }, 
            PI_taxaddress4: { 
                cValidate :'max:50', 
                cName: 'taxaddress4', 
                cLabel: '', 
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
            PI_subportfoliostart: { 
                cValidate :'', 
                cName: 'subportfoliostart', 
                cLabel: 'Start Operation', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cVisible:  true, 
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
                cOrder: 24, 
                cKey: false, 
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
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 25, 
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
            PI_taxregistrationno: { 
                cValidate :'', 
                cName: 'taxregistrationno', 
                cLabel: 'Tax Reg No', 
                cLabelSize: 4, 
                cOrder: 26, 
                cKey: false, 
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
                cOrder: 6, 
                cKey: false, 
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
                cOrder: 7, 
                cKey: false, 
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
                cOrder: 27, 
                cKey: false, 
                cVisible:  true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_address2: { 
                cValidate :'max:50', 
                cName: 'address2', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 8, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_taxreferenceno: { 
                cValidate :'', 
                cName: 'taxreferenceno', 
                cLabel: 'Tax Ref No', 
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
            PI_holdvat: { 
                cValidate :'', 
                cName: 'holdvat', 
                cId: 'rdbholdvat', 
                cRadioOptions: [{ text: 'Yes', value: 'M' }, { text: 'No', value: 'C' }], 
                cRadioDefaultOption: '', 
                cLabel:'Hold VAT', 
                cLabelSize: 4, 
                cOrder: 29, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_address3: { 
                cValidate :'max:50', 
                cName: 'address3', 
                cLabel: '', 
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
            PI_holdwithholding: { 
                cValidate :'', 
                cName: 'holdwithholding', 
                cId: 'rdbholdwithholding', 
                cRadioOptions: [{ text: 'Yes', value: 'M' }, { text: 'No', value: 'C' }], 
                cRadioDefaultOption: '', 
                cLabel:'Hold Withholding', 
                cLabelSize: 4, 
                cOrder: 30, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_address4: { 
                cValidate :'max:50', 
                cName: 'address4', 
                cLabel: '', 
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
            PI_zipcode: { 
                cValidate :'max:10', 
                cName: 'zipcode', 
                cLabel: ' Zip Code', 
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
                cMasterUrl: 'CM/CM_CountryCity' ,
                cDisplayColumn: 'CityCd,CountryCd,Descs' ,
            }, 
            PI_standardtaxrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere:  "(ModuleCd is null OR ModuleCd = 'CM')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'standardtaxrunningcd', 
                cLabel: 'Standard Tax RC', 
                cKey: false, 
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
            PI_commontaxrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere:  "(ModuleCd is null OR ModuleCd = 'CM')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'commontaxrunningcd', 
                cLabel: 'Common Tax RC', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 32, 
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
            PI_phoneno: { 
                cValidate :'max:30', 
                cName: 'phoneno', 
                cLabel: 'Telephone', 
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
            PI_arwithholdingtaxrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere:  "(ModuleCd is null OR ModuleCd = 'CM')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'arwithholdingtaxrunningcd', 
                cLabel: 'AR WithHolding Tax RC', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 33, 
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
                cOrder: 14, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_apvatdeductionrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere:  "(ModuleCd is null OR ModuleCd = 'CM')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'apvatdeductionrunningcd', 
                cLabel: 'AP VAT Deduction RC', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 34, 
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
                cValidate :'max:60', 
                cName: 'website', 
                cLabel: 'Website', 
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
            PI_email: { 
                cValidate :'max:60', 
                cName: 'email', 
                cLabel: 'Email', 
                cLabelSize: 4, 
                cOrder: 16, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_apwithholdingdeductionrunningcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMRunningCode'    , 
                    ColumnDB: 'RunningCd'   , 
                    InitialWhere:  "(ModuleCd is null OR ModuleCd = 'CM')"   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'apwithholdingdeductionrunningcd', 
                cLabel: 'AP WithHolding Deduction RC', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 35, 
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
            PI_internalcontactid: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupCMContact'    , 
                    ColumnDB: 'ContactId'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'internalcontactid', 
                cLabel: 'Internal Contact', 
                cKey: false, 
                cLabelSize: 4, 
                cOrder: 17, 
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
                cMasterUrl: 'CM/CM_Contact' ,
                cDisplayColumn: 'ContactId,Name' ,
            }, 
            PI_defaultvatchargesassignment: { 
                cValidate :'', 
                cName: 'defaultvatchargesassignment', 
                cId: 'rdbdefaultvatchargesassignment', 
                cRadioOptions: [{ text: 'Split', value: 'S' },{ text: 'Combine', value: 'C' },{ text: 'Default System', value: 'D' },], 
                cRadioDefaultOption: 'D', 
                cLabel:'Default VAT Charges Assignment', 
                cLabelSize: 4, 
                cOrder: 36, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:18, 
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
            PI_onebillmaster: { 
                cValidate :'', 
                cName: 'onebillmaster', 
                cId: 'rdbonebillmaster', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: 'N', 
                cLabel:'One Bill Master', 
                cLabelSize: 4, 
                cOrder: 37, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            // PI_referencefilename: { 
            //     cValidate :'', 
            //     cName:'referencefilename', 
            //     cLabel: 'Picture File', 
            //     cLabelSize: 4, 
            //     cOrder:0, 
            //     cVisible: true, 
            //     cModule: 'CM', 
            //     cPlaceholder: 'Choose a file...', 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cVisible: true  
            // }, 
            PI_referencefilename: { 
                cValidate :'', 
                cName:'referencefilename', 
                cLabel: 'Picture File Name', 
                cSubPortfolio:this.getDataUser().SubPortfolioCd,
                cPath:"Picture/SubPortfolio",
                cLabelSize: 4, 
                cOrder:19, 
                cVisible: true, 
                cProtect: false,
                cModule: 'CM', 
                cPlaceholder: 'Choose a file...', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            }, 
            PI_referencefilename2: { 
                cValidate :'', 
                cName:'mapfilename', 
                cLabel: 'Map File Name', 
                cSubPortfolio:this.getDataUser().SubPortfolioCd,
                cPath:"SaveLocation/SubPortfolio/"+this.getDataUser().SubPortfolioCd+"/FloorPlan",
                cLabelSize: 4, 
                cOrder:38, 
                cVisible: true, 
                cProtect: false,
                cModule: 'CM', 
                cPlaceholder: 'Choose a Map...', 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cVisible: true,
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex
            },
            // PI_mapfilename: { 
            //     cValidate :'', 
            //     cName:'referencefilename', 
            //     cLabel: 'Picture File Namex', 
            //     cSubPortfolio:this.getDataUser().SubPortfolioCd,
            //     // cPath:"SaveLocation/SubPortfolio/"+this.getDataUser().SubPortfolioCd+"/FloorPlan",
            //     cLabelSize: 4, 
            //     cOrder:0, 
            //     cVisible: true, 
            //     cModule: 'CM', 
            //     cPlaceholder: 'Choose a file...', 
            //     cPageLevel: this.PageLevel, 
            //     cTabIndex: this.TabIndex, 
            //     cVisible: true 
            // }, 
           

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
      getResponse (response) {

      },
      getResponse2 (response) {

      },
        OnsubportfolioclasscdChange (data) {
        if (this.M_CM_SubPortfolio.subportfolioclasscd == data.id) return
        this.$nextTick(() => {
            this.M_CM_SubPortfolio.subportfolioclasscd = data.id
            this.M_CM_SubPortfolio.subportfolioclasscdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{subportfolioclasscd}
            }
        })
        this.$forceUpdate()
        },
        OnsubportfoliogroupcdChange (data) {
        if (this.M_CM_SubPortfolio.subportfoliogroupcd == data.id) return
        this.$nextTick(() => {
            this.M_CM_SubPortfolio.subportfoliogroupcd = data.id
            this.M_CM_SubPortfolio.subportfoliogroupcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{subportfoliogroupcd}
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
        if (this.M_CM_SubPortfolio.taxcitycd == data.id) return
        this.$nextTick(() => {
            this.M_CM_SubPortfolio.taxcitycd = data.id
            this.M_CM_SubPortfolio.taxcitycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{taxcitycd}
            }
        })
        this.$forceUpdate()
        },
        Onaddress1Change (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
        if (this.M_CM_SubPortfolio.citycd == 'TT')
             { this.M_CM_SubPortfolio.address1 = 'rumah kita' }

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
        OnholdwithholdingChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{holdwithholding}
            }
        })
        this.$forceUpdate()
        },
        OncitycdChange (data) {
        if (this.M_CM_SubPortfolio.citycd == data.id) return
        this.$nextTick(() => {
            this.M_CM_SubPortfolio.citycd = data.id
            this.M_CM_SubPortfolio.citycdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{citycd}
            }
        })
        this.$forceUpdate()
        },
        OnstandardtaxrunningcdChange (data) {
        if (this.M_CM_SubPortfolio.standardtaxrunningcd == data.id) return
        this.$nextTick(() => {
            this.M_CM_SubPortfolio.standardtaxrunningcd = data.id
            this.M_CM_SubPortfolio.standardtaxrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{standardtaxrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OncommontaxrunningcdChange (data) {
        if (this.M_CM_SubPortfolio.commontaxrunningcd == data.id) return
        this.$nextTick(() => {
            this.M_CM_SubPortfolio.commontaxrunningcd = data.id
            this.M_CM_SubPortfolio.commontaxrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{commontaxrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OnarwithholdingtaxrunningcdChange (data) {
        if (this.M_CM_SubPortfolio.arwithholdingtaxrunningcd == data.id) return
        this.$nextTick(() => {
            this.M_CM_SubPortfolio.arwithholdingtaxrunningcd = data.id
            this.M_CM_SubPortfolio.arwithholdingtaxrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{arwithholdingtaxrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OnapvatdeductionrunningcdChange (data) {
        if (this.M_CM_SubPortfolio.apvatdeductionrunningcd == data.id) return
        this.$nextTick(() => {
            this.M_CM_SubPortfolio.apvatdeductionrunningcd = data.id
            this.M_CM_SubPortfolio.apvatdeductionrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{apvatdeductionrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OnapwithholdingdeductionrunningcdChange (data) {
        if (this.M_CM_SubPortfolio.apwithholdingdeductionrunningcd == data.id) return
        this.$nextTick(() => {
            this.M_CM_SubPortfolio.apwithholdingdeductionrunningcd = data.id
            this.M_CM_SubPortfolio.apwithholdingdeductionrunningcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{apwithholdingdeductionrunningcd}
            }
        })
        this.$forceUpdate()
        },
        OninternalcontactidChange (data) {
        if (this.M_CM_SubPortfolio.internalcontactid == data.id) return
        this.$nextTick(() => {
            this.M_CM_SubPortfolio.internalcontactid = data.id
            this.M_CM_SubPortfolio.internalcontactidLabel = data.label
            if (this.inputStatus != "VIEW") {
//{internalcontactid}
            }
        })
        this.$forceUpdate()
        },
        OndefaultvatchargesassignmentChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{defaultvatchargesassignment}
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
        OnonebillmasterChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{onebillmaster}
            }
        })
        this.$forceUpdate()
        },
	
		setToolbarButton () {
          //  this.getToolbar().statusFunction[2].disabled = true
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
                SubPortfolioCd: this.M_CM_SubPortfolio.subportfoliocd,
                Name: this.M_CM_SubPortfolio.name,
                SubPortfolioClassCd: this.M_CM_SubPortfolio.subportfolioclasscd == '' || this.M_CM_SubPortfolio.subportfolioclasscd == null ? '' : this.M_CM_SubPortfolio.subportfolioclasscd ,
                SubPortfolioGroupCd: this.M_CM_SubPortfolio.subportfoliogroupcd == '' || this.M_CM_SubPortfolio.subportfoliogroupcd == null ? '' : this.M_CM_SubPortfolio.subportfoliogroupcd ,
                SubPortfolioStart: this.M_CM_SubPortfolio.subportfoliostart == '' || this.M_CM_SubPortfolio.subportfoliostart == null ? 'NULL' : this.M_CM_SubPortfolio.subportfoliostart ,
                ReferenceNo: this.M_CM_SubPortfolio.referenceno,
                Address1: this.M_CM_SubPortfolio.address1,
                Address2: this.M_CM_SubPortfolio.address2,
                Address3: this.M_CM_SubPortfolio.address3,
                Address4: this.M_CM_SubPortfolio.address4,
                CityCd: this.M_CM_SubPortfolio.citycd == '' || this.M_CM_SubPortfolio.citycd == null ? 'NULL' : this.M_CM_SubPortfolio.citycd ,
                ZipCode: this.M_CM_SubPortfolio.zipcode,
                PhoneNo: this.M_CM_SubPortfolio.phoneno,
                FaxNo: this.M_CM_SubPortfolio.faxno,
                Website: this.M_CM_SubPortfolio.website,
                Email: this.M_CM_SubPortfolio.email,
                InternalContactID: this.M_CM_SubPortfolio.internalcontactid == '' || this.M_CM_SubPortfolio.internalcontactid == null ? 'NULL' : this.M_CM_SubPortfolio.internalcontactid ,
                TaxAddress1: this.M_CM_SubPortfolio.taxaddress1,
                TaxAddress2: this.M_CM_SubPortfolio.taxaddress2,
                TaxAddress3: this.M_CM_SubPortfolio.taxaddress3,
                TaxAddress4: this.M_CM_SubPortfolio.taxaddress4,
                TaxCityCd: this.M_CM_SubPortfolio.taxcitycd == '' || this.M_CM_SubPortfolio.taxcitycd == null ? 'NULL' : this.M_CM_SubPortfolio.taxcitycd ,
                TaxZipCode: this.M_CM_SubPortfolio.taxzipcode,
                TaxRegistrationNo: this.M_CM_SubPortfolio.taxregistrationno,
                TaxRegistrationDate: this.M_CM_SubPortfolio.taxregistrationdate == '' || this.M_CM_SubPortfolio.taxregistrationdate == null ? 'NULL' : this.M_CM_SubPortfolio.taxregistrationdate ,
                TaxReferenceNo: this.M_CM_SubPortfolio.taxreferenceno,
                StandardTaxRunningCd: this.M_CM_SubPortfolio.standardtaxrunningcd == '' || this.M_CM_SubPortfolio.standardtaxrunningcd == null ? 'NULL' : this.M_CM_SubPortfolio.standardtaxrunningcd ,
                CommonTaxRunningCd: this.M_CM_SubPortfolio.commontaxrunningcd == '' || this.M_CM_SubPortfolio.commontaxrunningcd == null ? 'NULL' : this.M_CM_SubPortfolio.commontaxrunningcd ,
                ARWithholdingTaxRunningCd: this.M_CM_SubPortfolio.arwithholdingtaxrunningcd == '' || this.M_CM_SubPortfolio.arwithholdingtaxrunningcd == null ? 'NULL' : this.M_CM_SubPortfolio.arwithholdingtaxrunningcd ,
                APVATDeductionRunningCd: this.M_CM_SubPortfolio.apvatdeductionrunningcd == '' || this.M_CM_SubPortfolio.apvatdeductionrunningcd == null ? 'NULL' : this.M_CM_SubPortfolio.apvatdeductionrunningcd ,
                APWithholdingDeductionRunningCd: this.M_CM_SubPortfolio.apwithholdingdeductionrunningcd == '' || this.M_CM_SubPortfolio.apwithholdingdeductionrunningcd == null ? 'NULL' : this.M_CM_SubPortfolio.apwithholdingdeductionrunningcd ,
                DefaultVATChargesAssignment: this.M_CM_SubPortfolio.defaultvatchargesassignment,
                HoldVAT: this.M_CM_SubPortfolio.holdvat,
                HoldWithholding: this.M_CM_SubPortfolio.holdwithholding,
                Remarks: this.M_CM_SubPortfolio.remarks,
                PictureFileName: this.M_CM_SubPortfolio.picturefilename,
                ReferenceFileName: this.M_CM_SubPortfolio.referencefilename,
                UrlPictureMap: this.PI_referencefilename2.cPath,
                MapFileName: this.M_CM_SubPortfolio.mapfilename,
                UserInput: this.getDataUser().UserId ,
                OneBillMaster: this.M_CM_SubPortfolio.onebillmaster                
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
                SubPortfolioCd: this.M_CM_SubPortfolio.subportfoliocd,
                Name: this.M_CM_SubPortfolio.name,
                SubPortfolioClassCd: this.M_CM_SubPortfolio.subportfolioclasscd == '' || this.M_CM_SubPortfolio.subportfolioclasscd == null ? '' : this.M_CM_SubPortfolio.subportfolioclasscd ,
                SubPortfolioGroupCd: this.M_CM_SubPortfolio.subportfoliogroupcd == '' || this.M_CM_SubPortfolio.subportfoliogroupcd == null ? '' : this.M_CM_SubPortfolio.subportfoliogroupcd ,
                SubPortfolioStart: this.M_CM_SubPortfolio.subportfoliostart == '' || this.M_CM_SubPortfolio.subportfoliostart == null ? 'NULL' : this.M_CM_SubPortfolio.subportfoliostart ,
                ReferenceNo: this.M_CM_SubPortfolio.referenceno,
                Address1: this.M_CM_SubPortfolio.address1,
                Address2: this.M_CM_SubPortfolio.address2,
                Address3: this.M_CM_SubPortfolio.address3,
                Address4: this.M_CM_SubPortfolio.address4,
                CityCd: this.M_CM_SubPortfolio.citycd == '' || this.M_CM_SubPortfolio.citycd == null ? 'NULL' : this.M_CM_SubPortfolio.citycd ,
                ZipCode: this.M_CM_SubPortfolio.zipcode,
                PhoneNo: this.M_CM_SubPortfolio.phoneno,
                FaxNo: this.M_CM_SubPortfolio.faxno,
                Website: this.M_CM_SubPortfolio.website,
                Email: this.M_CM_SubPortfolio.email,
                InternalContactID: this.M_CM_SubPortfolio.internalcontactid == '' || this.M_CM_SubPortfolio.internalcontactid == null ? 'NULL' : this.M_CM_SubPortfolio.internalcontactid ,
                TaxAddress1: this.M_CM_SubPortfolio.taxaddress1,
                TaxAddress2: this.M_CM_SubPortfolio.taxaddress2,
                TaxAddress3: this.M_CM_SubPortfolio.taxaddress3,
                TaxAddress4: this.M_CM_SubPortfolio.taxaddress4,
                TaxCityCd: this.M_CM_SubPortfolio.taxcitycd == '' || this.M_CM_SubPortfolio.taxcitycd == null ? 'NULL' : this.M_CM_SubPortfolio.taxcitycd ,
                TaxZipCode: this.M_CM_SubPortfolio.taxzipcode,
                TaxRegistrationNo: this.M_CM_SubPortfolio.taxregistrationno,
                TaxRegistrationDate: this.M_CM_SubPortfolio.taxregistrationdate == '' || this.M_CM_SubPortfolio.taxregistrationdate == null ? 'NULL' : this.M_CM_SubPortfolio.taxregistrationdate ,
                TaxReferenceNo: this.M_CM_SubPortfolio.taxreferenceno,
                StandardTaxRunningCd: this.M_CM_SubPortfolio.standardtaxrunningcd == '' || this.M_CM_SubPortfolio.standardtaxrunningcd == null ? 'NULL' : this.M_CM_SubPortfolio.standardtaxrunningcd ,
                CommonTaxRunningCd: this.M_CM_SubPortfolio.commontaxrunningcd == '' || this.M_CM_SubPortfolio.commontaxrunningcd == null ? 'NULL' : this.M_CM_SubPortfolio.commontaxrunningcd ,
                ARWithholdingTaxRunningCd: this.M_CM_SubPortfolio.arwithholdingtaxrunningcd == '' || this.M_CM_SubPortfolio.arwithholdingtaxrunningcd == null ? 'NULL' : this.M_CM_SubPortfolio.arwithholdingtaxrunningcd ,
                APVATDeductionRunningCd: this.M_CM_SubPortfolio.apvatdeductionrunningcd == '' || this.M_CM_SubPortfolio.apvatdeductionrunningcd == null ? 'NULL' : this.M_CM_SubPortfolio.apvatdeductionrunningcd ,
                APWithholdingDeductionRunningCd: this.M_CM_SubPortfolio.apwithholdingdeductionrunningcd == '' || this.M_CM_SubPortfolio.apwithholdingdeductionrunningcd == null ? 'NULL' : this.M_CM_SubPortfolio.apwithholdingdeductionrunningcd ,
                DefaultVATChargesAssignment: this.M_CM_SubPortfolio.defaultvatchargesassignment,
                HoldVAT: this.M_CM_SubPortfolio.holdvat,
                HoldWithholding: this.M_CM_SubPortfolio.holdwithholding,
                Remarks: this.M_CM_SubPortfolio.remarks,
                PictureFileName: this.M_CM_SubPortfolio.picturefilename,
                ReferenceFileName: this.M_CM_SubPortfolio.referencefilename,
                UrlPictureMap: this.PI_referencefilename2.cPath,
                MapFileName: this.M_CM_SubPortfolio.mapfilename,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_CM_SubPortfolio.lastupdatestamp,
                OneBillMaster: this.M_CM_SubPortfolio.onebillmaster                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })

        },
		M_ClearForm(){
            this.M_CM_SubPortfolio = {
                subportfoliocd: '',//this.getDataUser().SubPortfolioCd,
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
                defaultvatchargesassignment: 'D',
                holdvat: 'C',
                holdwithholding: 'M',
                remarks: '',
                onebillmaster: 'N',
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
                rowid: 0,
                urlpicturemap:'',
                mapfilename:'',
                referencefilename2:'',
                picturefilename2:''
                    }
            		
		},
        M_New(){
          this.$refs.ref_subportfoliocd.focus()
			
        },
        M_Edit(){
          this.$refs.ref_name.focus()
        },
        M_Delete(dt){       

          var data = this.FormToABSList().getRowSelected()  
          var dataDelete = []

          
          data.forEach((value) => {
            dataDelete.push({
              SubPortfolioCd: value.SubPortfolioCd,
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
,                subportfoliocd: record.SubPortfolioCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
                // console.log(data)
this.M_CM_SubPortfolio = {
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
                rowid: data.rowid,
                urlpicturemap: data.urlpicturemap,
                mapfilename: data.mapfilename
                    }
                 

                this.M_CM_SubPortfolio.subportfolioclasscdLabel = this.M_CM_SubPortfolio.subportfolioclasscd != null ? data.subportfolioclasscd + this.separator + data.subportfolioclassdescs :'' 
                this.M_CM_SubPortfolio.subportfoliogroupcdLabel = this.M_CM_SubPortfolio.subportfoliogroupcd != null ? data.subportfoliogroupcd + this.separator + data.subportfoliogroupcddescs :'' 
                this.M_CM_SubPortfolio.taxcitycdLabel = this.M_CM_SubPortfolio.taxcitycd != null ? data.taxcitycd + this.separator + data.citydescs :'' 
                this.M_CM_SubPortfolio.citycdLabel = this.M_CM_SubPortfolio.citycd != null ? data.citycd + this.separator + data.citydescs :'' 
                this.M_CM_SubPortfolio.standardtaxrunningcdLabel = this.M_CM_SubPortfolio.standardtaxrunningcd != null ? data.standardtaxrunningcd + this.separator + data.standardtaxrunningcddescs :'' 
                this.M_CM_SubPortfolio.commontaxrunningcdLabel = this.M_CM_SubPortfolio.commontaxrunningcd != null ? data.commontaxrunningcd + this.separator + data.commontaxrunningcddescs  :'' 
                this.M_CM_SubPortfolio.arwithholdingtaxrunningcdLabel = this.M_CM_SubPortfolio.arwithholdingtaxrunningcd != null ? data.arwithholdingtaxrunningcd + this.separator + data.arwithholdingtaxrunningcddescs :'' 
                this.M_CM_SubPortfolio.apvatdeductionrunningcdLabel = this.M_CM_SubPortfolio.apvatdeductionrunningcd != null ? data.apvatdeductionrunningcd + this.separator + data.apvatdeductionrunningcddescs :'' 
                this.M_CM_SubPortfolio.apwithholdingdeductionrunningcdLabel = this.M_CM_SubPortfolio.apwithholdingdeductionrunningcd != null ? data.apwithholdingdeductionrunningcd + this.separator + data.apwithholdingdeductionrunningcddescs :'' 
                this.M_CM_SubPortfolio.internalcontactidLabel = this.M_CM_SubPortfolio.internalcontactid != null ? data.internalcontactid :'' 
         

                this.IEBy.Input = data.userinput
                this.IEBy.Edit = data.useredit

            })
        }
        ,getFileName(fileName) {
         this.M_CM_SubPortfolio.picturefilename = fileName 
        }
        ,getMapName(fileName) {
         this.M_CM_SubPortfolio.mapfilename = fileName 
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

