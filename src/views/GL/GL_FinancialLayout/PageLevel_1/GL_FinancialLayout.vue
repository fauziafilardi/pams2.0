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
                                        <ABSinputTextVuex :prop="PI_financiallayoutcd" v-model="M_GL_FinancialLayout.financiallayoutcd"  ref="ref_financiallayoutcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs1" v-model="M_GL_FinancialLayout.descs1"  ref="ref_descs1"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_descs2" v-model="M_GL_FinancialLayout.descs2"  ref="ref_descs2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSInputSelectList @change="OntablerowcdChange" :prop="PI_tablerowcd" :value="M_GL_FinancialLayout.tablerowcd" :label="M_GL_FinancialLayout.tablerowcdLabel" ref="ref_tablerowcd"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnbracketnegativeChange" :prop="PI_bracketnegative" v-model="M_GL_FinancialLayout.bracketnegative"  ref="ref_bracketnegative" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnaccountdescsChange" :prop="PI_accountdescs" v-model="M_GL_FinancialLayout.accountdescs"  ref="ref_accountdescs" />
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputRadioButtonVuex @input="OnsuppresszeroChange" :prop="PI_suppresszero" v-model="M_GL_FinancialLayout.suppresszero"  ref="ref_suppresszero" />
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputRadioButtonVuex @input="OnsuppressaccountChange" :prop="PI_suppressaccount" v-model="M_GL_FinancialLayout.suppressaccount"  ref="ref_suppressaccount" />
                                      </b-col>
                                    </b-row>
                                <b-col md="12" id="col-left"> <!-- table open -->
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_column1descs2" v-model="M_GL_FinancialLayout.column1descs2"  ref="ref_column1descs2"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column1ledgersource" v-model="M_GL_FinancialLayout.column1ledgersource"  ref="ref_column1ledgersource"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputRadioButtonVuex @input="Oncolumn1trxamtChange" :prop="PI_column1trxamt" v-model="M_GL_FinancialLayout.column1trxamt"  ref="ref_column1trxamt" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column1descs1" v-model="M_GL_FinancialLayout.column1descs1"  ref="ref_column1descs1"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column1descs2" v-model="M_GL_FinancialLayout.column1descs2"  ref="ref_column1descs2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_column2descs2" v-model="M_GL_FinancialLayout.column2descs2"  ref="ref_column2descs2"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column2ledgersource" v-model="M_GL_FinancialLayout.column2ledgersource"  ref="ref_column2ledgersource"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputRadioButtonVuex @input="Oncolumn2trxamtChange" :prop="PI_column2trxamt" v-model="M_GL_FinancialLayout.column2trxamt"  ref="ref_column2trxamt" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column2descs1" v-model="M_GL_FinancialLayout.column2descs1"  ref="ref_column2descs1"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column2descs2" v-model="M_GL_FinancialLayout.column2descs2"  ref="ref_column2descs2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_column3descs2" v-model="M_GL_FinancialLayout.column3descs2"  ref="ref_column3descs2"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column3ledgersource" v-model="M_GL_FinancialLayout.column3ledgersource"  ref="ref_column3ledgersource"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputRadioButtonVuex @input="Oncolumn3trxamtChange" :prop="PI_column3trxamt" v-model="M_GL_FinancialLayout.column3trxamt"  ref="ref_column3trxamt" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column3descs1" v-model="M_GL_FinancialLayout.column3descs1"  ref="ref_column3descs1"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column3descs2" v-model="M_GL_FinancialLayout.column3descs2"  ref="ref_column3descs2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_column4descs2" v-model="M_GL_FinancialLayout.column4descs2"  ref="ref_column4descs2"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column4ledgersource" v-model="M_GL_FinancialLayout.column4ledgersource"  ref="ref_column4ledgersource"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputRadioButtonVuex @input="Oncolumn4trxamtChange" :prop="PI_column4trxamt" v-model="M_GL_FinancialLayout.column4trxamt"  ref="ref_column4trxamt" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column4descs1" v-model="M_GL_FinancialLayout.column4descs1"  ref="ref_column4descs1"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column4descs2" v-model="M_GL_FinancialLayout.column4descs2"  ref="ref_column4descs2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_column5descs2" v-model="M_GL_FinancialLayout.column5descs2"  ref="ref_column5descs2"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column5ledgersource" v-model="M_GL_FinancialLayout.column5ledgersource"  ref="ref_column5ledgersource"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputRadioButtonVuex @input="Oncolumn5trxamtChange" :prop="PI_column5trxamt" v-model="M_GL_FinancialLayout.column5trxamt"  ref="ref_column5trxamt" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column5descs1" v-model="M_GL_FinancialLayout.column5descs1"  ref="ref_column5descs1"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column5descs2" v-model="M_GL_FinancialLayout.column5descs2"  ref="ref_column5descs2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_column6descs2" v-model="M_GL_FinancialLayout.column6descs2"  ref="ref_column6descs2"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column6ledgersource" v-model="M_GL_FinancialLayout.column6ledgersource"  ref="ref_column6ledgersource"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputRadioButtonVuex @input="Oncolumn6trxamtChange" :prop="PI_column6trxamt" v-model="M_GL_FinancialLayout.column6trxamt"  ref="ref_column6trxamt" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column6descs1" v-model="M_GL_FinancialLayout.column6descs1"  ref="ref_column6descs1"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column6descs2" v-model="M_GL_FinancialLayout.column6descs2"  ref="ref_column6descs2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_column7descs2" v-model="M_GL_FinancialLayout.column7descs2"  ref="ref_column7descs2"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column7ledgersource" v-model="M_GL_FinancialLayout.column7ledgersource"  ref="ref_column7ledgersource"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputRadioButtonVuex @input="Oncolumn7trxamtChange" :prop="PI_column7trxamt" v-model="M_GL_FinancialLayout.column7trxamt"  ref="ref_column7trxamt" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column7descs1" v-model="M_GL_FinancialLayout.column7descs1"  ref="ref_column7descs1"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column7descs2" v-model="M_GL_FinancialLayout.column7descs2"  ref="ref_column7descs2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_column8descs2" v-model="M_GL_FinancialLayout.column8descs2"  ref="ref_column8descs2"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column8ledgersource" v-model="M_GL_FinancialLayout.column8ledgersource"  ref="ref_column8ledgersource"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputRadioButtonVuex @input="Oncolumn8trxamtChange" :prop="PI_column8trxamt" v-model="M_GL_FinancialLayout.column8trxamt"  ref="ref_column8trxamt" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column8descs1" v-model="M_GL_FinancialLayout.column8descs1"  ref="ref_column8descs1"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column8descs2" v-model="M_GL_FinancialLayout.column8descs2"  ref="ref_column8descs2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_column9descs2" v-model="M_GL_FinancialLayout.column9descs2"  ref="ref_column9descs2"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column9ledgersource" v-model="M_GL_FinancialLayout.column9ledgersource"  ref="ref_column9ledgersource"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputRadioButtonVuex @input="Oncolumn9trxamtChange" :prop="PI_column9trxamt" v-model="M_GL_FinancialLayout.column9trxamt"  ref="ref_column9trxamt" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column9descs1" v-model="M_GL_FinancialLayout.column9descs1"  ref="ref_column9descs1"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column9descs2" v-model="M_GL_FinancialLayout.column9descs2"  ref="ref_column9descs2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_column10descs2" v-model="M_GL_FinancialLayout.column10descs2"  ref="ref_column10descs2"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column10ledgersource" v-model="M_GL_FinancialLayout.column10ledgersource"  ref="ref_column10ledgersource"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputRadioButtonVuex @input="Oncolumn10trxamtChange" :prop="PI_column10trxamt" v-model="M_GL_FinancialLayout.column10trxamt"  ref="ref_column10trxamt" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column10descs1" v-model="M_GL_FinancialLayout.column10descs1"  ref="ref_column10descs1"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column10descs2" v-model="M_GL_FinancialLayout.column10descs2"  ref="ref_column10descs2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_column11descs2" v-model="M_GL_FinancialLayout.column11descs2"  ref="ref_column11descs2"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column11ledgersource" v-model="M_GL_FinancialLayout.column11ledgersource"  ref="ref_column11ledgersource"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputRadioButtonVuex @input="Oncolumn11trxamtChange" :prop="PI_column11trxamt" v-model="M_GL_FinancialLayout.column11trxamt"  ref="ref_column11trxamt" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column11descs1" v-model="M_GL_FinancialLayout.column11descs1"  ref="ref_column11descs1"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column11descs2" v-model="M_GL_FinancialLayout.column11descs2"  ref="ref_column11descs2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_column12descs2" v-model="M_GL_FinancialLayout.column12descs2"  ref="ref_column12descs2"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column12ledgersource" v-model="M_GL_FinancialLayout.column12ledgersource"  ref="ref_column12ledgersource"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputRadioButtonVuex @input="Oncolumn12trxamtChange" :prop="PI_column12trxamt" v-model="M_GL_FinancialLayout.column12trxamt"  ref="ref_column12trxamt" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column12descs1" v-model="M_GL_FinancialLayout.column12descs1"  ref="ref_column12descs1"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column12descs2" v-model="M_GL_FinancialLayout.column12descs2"  ref="ref_column12descs2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_column13descs2" v-model="M_GL_FinancialLayout.column13descs2"  ref="ref_column13descs2"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column13ledgersource" v-model="M_GL_FinancialLayout.column13ledgersource"  ref="ref_column13ledgersource"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputRadioButtonVuex @input="Oncolumn13trxamtChange" :prop="PI_column13trxamt" v-model="M_GL_FinancialLayout.column13trxamt"  ref="ref_column13trxamt" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column13descs1" v-model="M_GL_FinancialLayout.column13descs1"  ref="ref_column13descs1"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column13descs2" v-model="M_GL_FinancialLayout.column13descs2"  ref="ref_column13descs2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_column14descs2" v-model="M_GL_FinancialLayout.column14descs2"  ref="ref_column14descs2"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column14ledgersource" v-model="M_GL_FinancialLayout.column14ledgersource"  ref="ref_column14ledgersource"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputRadioButtonVuex @input="Oncolumn14trxamtChange" :prop="PI_column14trxamt" v-model="M_GL_FinancialLayout.column14trxamt"  ref="ref_column14trxamt" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column14descs1" v-model="M_GL_FinancialLayout.column14descs1"  ref="ref_column14descs1"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column14descs2" v-model="M_GL_FinancialLayout.column14descs2"  ref="ref_column14descs2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="3">
                                        <ABSinputTextVuex :prop="PI_column15descs2" v-model="M_GL_FinancialLayout.column15descs2"  ref="ref_column15descs2"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column15ledgersource" v-model="M_GL_FinancialLayout.column15ledgersource"  ref="ref_column15ledgersource"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputRadioButtonVuex @input="Oncolumn15trxamtChange" :prop="PI_column15trxamt" v-model="M_GL_FinancialLayout.column15trxamt"  ref="ref_column15trxamt" />
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column15descs1" v-model="M_GL_FinancialLayout.column15descs1"  ref="ref_column15descs1"/>
                                      </b-col>
                                      <b-col md="3">
                                        <ABSinputTextVuex :prop="PI_column15descs2" v-model="M_GL_FinancialLayout.column15descs2"  ref="ref_column15descs2"/>
                                      </b-col>
                                    </b-row>
                                </b-col> <!-- table close -->
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_selection1" v-model="M_GL_FinancialLayout.selection1"  ref="ref_selection1"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_selection2" v-model="M_GL_FinancialLayout.selection2"  ref="ref_selection2"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_selection3" v-model="M_GL_FinancialLayout.selection3"  ref="ref_selection3"/>
                                      </b-col>
                                      <b-col md="6">
                                        <ABSinputTextVuex :prop="PI_selection4" v-model="M_GL_FinancialLayout.selection4"  ref="ref_selection4"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSinputTextVuex :prop="PI_selection5" v-model="M_GL_FinancialLayout.selection5"  ref="ref_selection5"/>
                                      </b-col>
                                    </b-row>
                                    <b-row>
                                      <b-col  md="6">
                                        <ABSTextAreaVuex @input="OnremarksChange" :prop="PI_remarks" v-model="M_GL_FinancialLayout.remarks"  ref="ref_remarks" />
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
		Module:"GL",
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

            M_GL_FinancialLayout :{
                financiallayoutcd: '',
                descs1: '',
                descs2: '',
                tablerowcd: '',
                suppressaccount: '',
                bracketnegative: '',
                accountdescs: '',
                suppresszero: '',
                column1: '',
                column1ledgersource: '',
                column1trxamt: '',
                column1descs1: '',
                column1descs2: '',
                column2: '',
                column2ledgersource: '',
                column2trxamt: '',
                column2descs1: '',
                column2descs2: '',
                column3: '',
                column3ledgersource: '',
                column3trxamt: '',
                column3descs1: '',
                column3descs2: '',
                column4: '',
                column4ledgersource: '',
                column4trxamt: '',
                column4descs1: '',
                column4descs2: '',
                column5: '',
                column5ledgersource: '',
                column5trxamt: '',
                column5descs1: '',
                column5descs2: '',
                column6: '',
                column6ledgersource: '',
                column6trxamt: '',
                column6descs1: '',
                column6descs2: '',
                column7: '',
                column7ledgersource: '',
                column7trxamt: '',
                column7descs1: '',
                column7descs2: '',
                column8: '',
                column8ledgersource: '',
                column8trxamt: '',
                column8descs1: '',
                column8descs2: '',
                column9: '',
                column9ledgersource: '',
                column9trxamt: '',
                column9descs1: '',
                column9descs2: '',
                column10: '',
                column10ledgersource: '',
                column10trxamt: '',
                column10descs1: '',
                column10descs2: '',
                column11: '',
                column11ledgersource: '',
                column11trxamt: '',
                column11descs1: '',
                column11descs2: '',
                column12: '',
                column12ledgersource: '',
                column12trxamt: '',
                column12descs1: '',
                column12descs2: '',
                column13: '',
                column13ledgersource: '',
                column13trxamt: '',
                column13descs1: '',
                column13descs2: '',
                column14: '',
                column14ledgersource: '',
                column14trxamt: '',
                column14descs1: '',
                column14descs2: '',
                column15: '',
                column15ledgersource: '',
                column15trxamt: '',
                column15descs1: '',
                column15descs2: '',
                selection1: '',
                selection2: '',
                selection3: '',
                selection4: '',
                selection5: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                rowdescs: '',
                lastupdatestamp: 0,
                rowid: 0
                    }
            ,
            PI_financiallayoutcd: { 
                cValidate :'required|max:8', 
                cName: 'financiallayoutcd', 
                cLabel: 'Layout Code', 
                cLabelSize: 4, 
                cOrder: 1, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_descs1: { 
                cValidate :'required|max:60', 
                cName: 'descs1', 
                cLabel: 'Description 1 ', 
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
            PI_descs2: { 
                cValidate :'', 
                cName: 'descs2', 
                cLabel: 'Description 2', 
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
            PI_tablerowcd: { 
                dataLookUp: { 
                    LookUpCd: 'GetLookupGLTableRow'    , 
                    ColumnDB: 'TableRowCd'   , 
                    InitialWhere: ""   , 
                    ParamWhere: ''  
                        }, 
                cValidate :'', 
                cName: 'tablerowcd', 
                cLabel: 'Row ', 
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
                cMasterUrl: 'GL/GL_ReportGeneratorRow' ,
                cDisplayColumn: 'TableRowCd,Descs' ,
            }, 
            PI_bracketnegative: { 
                cValidate :'', 
                cName: 'bracketnegative', 
                cId: 'rdbbracketnegative', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Bracket Negative', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_accountdescs: { 
                cValidate :'', 
                cName: 'accountdescs', 
                cId: 'rdbaccountdescs', 
                cRadioOptions: [{ text: '1', value: '1' },{ text: '2', value: '2' },], 
                cRadioDefaultOption: '', 
                cLabel:'Account Description', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_suppresszero: { 
                cValidate :'', 
                cName: 'suppresszero', 
                cId: 'rdbsuppresszero', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Suppress Zero', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_suppressaccount: { 
                cValidate :'', 
                cName: 'suppressaccount', 
                cId: 'rdbsuppressaccount', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'Suppress Account Code', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column1descs2: { 
                cValidate :'', 
                cName: 'column1descs2', 
                cLabel: '1', 
                cLabelSize: 4, 
                cOrder: 5, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column1ledgersource: { 
                cValidate :'', 
                cName: 'column1ledgersource', 
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
            PI_column1trxamt: { 
                cValidate :'', 
                cName: 'column1trxamt', 
                cId: 'rdbcolumn1trxamt', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column1descs1: { 
                cValidate :'', 
                cName: 'column1descs1', 
                cLabel: '', 
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
            PI_column1descs2: { 
                cValidate :'', 
                cName: 'column1descs2', 
                cLabel: '', 
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
            PI_column2descs2: { 
                cValidate :'', 
                cName: 'column2descs2', 
                cLabel: '2', 
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
            PI_column2ledgersource: { 
                cValidate :'', 
                cName: 'column2ledgersource', 
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
            PI_column2trxamt: { 
                cValidate :'', 
                cName: 'column2trxamt', 
                cId: 'rdbcolumn2trxamt', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column2descs1: { 
                cValidate :'', 
                cName: 'column2descs1', 
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
            PI_column2descs2: { 
                cValidate :'', 
                cName: 'column2descs2', 
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
            PI_column3descs2: { 
                cValidate :'', 
                cName: 'column3descs2', 
                cLabel: '3', 
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
            PI_column3ledgersource: { 
                cValidate :'', 
                cName: 'column3ledgersource', 
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
            PI_column3trxamt: { 
                cValidate :'', 
                cName: 'column3trxamt', 
                cId: 'rdbcolumn3trxamt', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column3descs1: { 
                cValidate :'', 
                cName: 'column3descs1', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 12, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column3descs2: { 
                cValidate :'', 
                cName: 'column3descs2', 
                cLabel: '', 
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
            PI_column4descs2: { 
                cValidate :'', 
                cName: 'column4descs2', 
                cLabel: '4', 
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
            PI_column4ledgersource: { 
                cValidate :'', 
                cName: 'column4ledgersource', 
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
            PI_column4trxamt: { 
                cValidate :'', 
                cName: 'column4trxamt', 
                cId: 'rdbcolumn4trxamt', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column4descs1: { 
                cValidate :'', 
                cName: 'column4descs1', 
                cLabel: '', 
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
            PI_column4descs2: { 
                cValidate :'', 
                cName: 'column4descs2', 
                cLabel: '', 
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
            PI_column5descs2: { 
                cValidate :'', 
                cName: 'column5descs2', 
                cLabel: '5', 
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
            PI_column5ledgersource: { 
                cValidate :'', 
                cName: 'column5ledgersource', 
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
            PI_column5trxamt: { 
                cValidate :'', 
                cName: 'column5trxamt', 
                cId: 'rdbcolumn5trxamt', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column5descs1: { 
                cValidate :'', 
                cName: 'column5descs1', 
                cLabel: '', 
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
            PI_column5descs2: { 
                cValidate :'', 
                cName: 'column5descs2', 
                cLabel: '', 
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
            PI_column6descs2: { 
                cValidate :'', 
                cName: 'column6descs2', 
                cLabel: '6', 
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
            PI_column6ledgersource: { 
                cValidate :'', 
                cName: 'column6ledgersource', 
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
            PI_column6trxamt: { 
                cValidate :'', 
                cName: 'column6trxamt', 
                cId: 'rdbcolumn6trxamt', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column6descs1: { 
                cValidate :'', 
                cName: 'column6descs1', 
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
            PI_column6descs2: { 
                cValidate :'', 
                cName: 'column6descs2', 
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
            PI_column7descs2: { 
                cValidate :'', 
                cName: 'column7descs2', 
                cLabel: '7', 
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
            PI_column7ledgersource: { 
                cValidate :'', 
                cName: 'column7ledgersource', 
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
            PI_column7trxamt: { 
                cValidate :'', 
                cName: 'column7trxamt', 
                cId: 'rdbcolumn7trxamt', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column7descs1: { 
                cValidate :'', 
                cName: 'column7descs1', 
                cLabel: '', 
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
            PI_column7descs2: { 
                cValidate :'', 
                cName: 'column7descs2', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 25, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column8descs2: { 
                cValidate :'', 
                cName: 'column8descs2', 
                cLabel: '8', 
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
            PI_column8ledgersource: { 
                cValidate :'', 
                cName: 'column8ledgersource', 
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
            PI_column8trxamt: { 
                cValidate :'', 
                cName: 'column8trxamt', 
                cId: 'rdbcolumn8trxamt', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column8descs1: { 
                cValidate :'', 
                cName: 'column8descs1', 
                cLabel: '', 
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
            PI_column8descs2: { 
                cValidate :'', 
                cName: 'column8descs2', 
                cLabel: '', 
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
            PI_column9descs2: { 
                cValidate :'', 
                cName: 'column9descs2', 
                cLabel: '9', 
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
            PI_column9ledgersource: { 
                cValidate :'', 
                cName: 'column9ledgersource', 
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
            PI_column9trxamt: { 
                cValidate :'', 
                cName: 'column9trxamt', 
                cId: 'rdbcolumn9trxamt', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column9descs1: { 
                cValidate :'', 
                cName: 'column9descs1', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 30, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column9descs2: { 
                cValidate :'', 
                cName: 'column9descs2', 
                cLabel: '', 
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
            PI_column10descs2: { 
                cValidate :'', 
                cName: 'column10descs2', 
                cLabel: '10', 
                cLabelSize: 4, 
                cOrder: 32, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column10ledgersource: { 
                cValidate :'', 
                cName: 'column10ledgersource', 
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
            PI_column10trxamt: { 
                cValidate :'', 
                cName: 'column10trxamt', 
                cId: 'rdbcolumn10trxamt', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column10descs1: { 
                cValidate :'', 
                cName: 'column10descs1', 
                cLabel: '', 
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
            PI_column10descs2: { 
                cValidate :'', 
                cName: 'column10descs2', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 34, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column11descs2: { 
                cValidate :'', 
                cName: 'column11descs2', 
                cLabel: '11', 
                cLabelSize: 4, 
                cOrder: 35, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column11ledgersource: { 
                cValidate :'', 
                cName: 'column11ledgersource', 
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
            PI_column11trxamt: { 
                cValidate :'', 
                cName: 'column11trxamt', 
                cId: 'rdbcolumn11trxamt', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column11descs1: { 
                cValidate :'', 
                cName: 'column11descs1', 
                cLabel: '', 
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
            PI_column11descs2: { 
                cValidate :'', 
                cName: 'column11descs2', 
                cLabel: '', 
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
            PI_column12descs2: { 
                cValidate :'', 
                cName: 'column12descs2', 
                cLabel: '12', 
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
            PI_column12ledgersource: { 
                cValidate :'', 
                cName: 'column12ledgersource', 
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
            PI_column12trxamt: { 
                cValidate :'', 
                cName: 'column12trxamt', 
                cId: 'rdbcolumn12trxamt', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column12descs1: { 
                cValidate :'', 
                cName: 'column12descs1', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 39, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column12descs2: { 
                cValidate :'', 
                cName: 'column12descs2', 
                cLabel: '', 
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
            PI_column13descs2: { 
                cValidate :'', 
                cName: 'column13descs2', 
                cLabel: '13', 
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
            PI_column13ledgersource: { 
                cValidate :'', 
                cName: 'column13ledgersource', 
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
            PI_column13trxamt: { 
                cValidate :'', 
                cName: 'column13trxamt', 
                cId: 'rdbcolumn13trxamt', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column13descs1: { 
                cValidate :'', 
                cName: 'column13descs1', 
                cLabel: '', 
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
            PI_column13descs2: { 
                cValidate :'', 
                cName: 'column13descs2', 
                cLabel: '', 
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
            PI_column14descs2: { 
                cValidate :'', 
                cName: 'column14descs2', 
                cLabel: '14', 
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
            PI_column14ledgersource: { 
                cValidate :'', 
                cName: 'column14ledgersource', 
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
            PI_column14trxamt: { 
                cValidate :'', 
                cName: 'column14trxamt', 
                cId: 'rdbcolumn14trxamt', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column14descs1: { 
                cValidate :'', 
                cName: 'column14descs1', 
                cLabel: '', 
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
            PI_column14descs2: { 
                cValidate :'', 
                cName: 'column14descs2', 
                cLabel: '', 
                cLabelSize: 4, 
                cOrder: 46, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column15descs2: { 
                cValidate :'', 
                cName: 'column15descs2', 
                cLabel: '15', 
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
            PI_column15ledgersource: { 
                cValidate :'', 
                cName: 'column15ledgersource', 
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
            PI_column15trxamt: { 
                cValidate :'', 
                cName: 'column15trxamt', 
                cId: 'rdbcolumn15trxamt', 
                cRadioOptions: [{ text: 'Yes', value: 'Y' },{ text: 'No', value: 'N' },], 
                cRadioDefaultOption: '', 
                cLabel:'', 
                cLabelSize: 4, 
                cOrder: 0, 
                cProtect: false, 
                cVisible:  true, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_column15descs1: { 
                cValidate :'', 
                cName: 'column15descs1', 
                cLabel: '', 
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
            PI_column15descs2: { 
                cValidate :'', 
                cName: 'column15descs2', 
                cLabel: '', 
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
            PI_selection1: { 
                cValidate :'', 
                cName: 'selection1', 
                cLabel: 'Selection 1', 
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
            PI_selection2: { 
                cValidate :'', 
                cName: 'selection2', 
                cLabel: 'Selection 2', 
                cLabelSize: 4, 
                cOrder: 51, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_selection3: { 
                cValidate :'', 
                cName: 'selection3', 
                cLabel: 'Selection 3', 
                cLabelSize: 4, 
                cOrder: 52, 
                cKey: false, 
                cType: 'text',
                cVisible: true, 
                cProtect: false, 
                cPageLevel: this.PageLevel, 
                cTabIndex: this.TabIndex, 
                cParentForm: 'FormScope_' + this.PageLevel + '_' + this.TabIndex 
            }, 
            PI_selection4: { 
                cValidate :'', 
                cName: 'selection4', 
                cLabel: 'Selection 4', 
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
            PI_selection5: { 
                cValidate :'', 
                cName: 'selection5', 
                cLabel: 'Selection 5', 
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
            PI_remarks: { 
                cValidate :'', 
                cName:'remarks', 
                cLabel:'Remarks', 
                cLabelSize: 4, 
                cOrder:55, 
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
    },
	DataRow(){
		return this.$store.getters.GetPage1Data
	}
  },
    methods: {		
        OntablerowcdChange (data) {
        this.$nextTick(() => {
            this.M_GL_FinancialLayout.tablerowcd = data.id
            this.M_GL_FinancialLayout.tablerowcdLabel = data.label
            if (this.inputStatus != "VIEW") {
//{tablerowcd}
            }
        })
        this.$forceUpdate()
        },
        OnbracketnegativeChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{bracketnegative}
            }
        })
        this.$forceUpdate()
        },
        OnaccountdescsChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{accountdescs}
            }
        })
        this.$forceUpdate()
        },
        OnsuppresszeroChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{suppresszero}
            }
        })
        this.$forceUpdate()
        },
        OnsuppressaccountChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{suppressaccount}
            }
        })
        this.$forceUpdate()
        },
        Oncolumn1trxamtChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{column1trxamt}
            }
        })
        this.$forceUpdate()
        },
        Oncolumn2trxamtChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{column2trxamt}
            }
        })
        this.$forceUpdate()
        },
        Oncolumn3trxamtChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{column3trxamt}
            }
        })
        this.$forceUpdate()
        },
        Oncolumn4trxamtChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{column4trxamt}
            }
        })
        this.$forceUpdate()
        },
        Oncolumn5trxamtChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{column5trxamt}
            }
        })
        this.$forceUpdate()
        },
        Oncolumn6trxamtChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{column6trxamt}
            }
        })
        this.$forceUpdate()
        },
        Oncolumn7trxamtChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{column7trxamt}
            }
        })
        this.$forceUpdate()
        },
        Oncolumn8trxamtChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{column8trxamt}
            }
        })
        this.$forceUpdate()
        },
        Oncolumn9trxamtChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{column9trxamt}
            }
        })
        this.$forceUpdate()
        },
        Oncolumn10trxamtChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{column10trxamt}
            }
        })
        this.$forceUpdate()
        },
        Oncolumn11trxamtChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{column11trxamt}
            }
        })
        this.$forceUpdate()
        },
        Oncolumn12trxamtChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{column12trxamt}
            }
        })
        this.$forceUpdate()
        },
        Oncolumn13trxamtChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{column13trxamt}
            }
        })
        this.$forceUpdate()
        },
        Oncolumn14trxamtChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{column14trxamt}
            }
        })
        this.$forceUpdate()
        },
        Oncolumn15trxamtChange (data) {
        this.$nextTick(() => {
            if (this.inputStatus != "VIEW") {
//{column15trxamt}
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
                FinancialLayoutCd: this.M_GL_FinancialLayout.financiallayoutcd,
                Descs1: this.M_GL_FinancialLayout.descs1,
                Descs2: this.M_GL_FinancialLayout.descs2,
                TableRowCd: this.M_GL_FinancialLayout.tablerowcd == '' || this.M_GL_FinancialLayout.tablerowcd == null ? 'NULL' : this.M_GL_FinancialLayout.tablerowcd ,
                SuppressAccount: this.M_GL_FinancialLayout.suppressaccount,
                BracketNegative: this.M_GL_FinancialLayout.bracketnegative,
                AccountDescs: this.M_GL_FinancialLayout.accountdescs,
                SuppressZero: this.M_GL_FinancialLayout.suppresszero,
                Column1: this.M_GL_FinancialLayout.column1descs2,
                Column1LedgerSource: this.M_GL_FinancialLayout.column1ledgersource,
                Column1TrxAmt: this.M_GL_FinancialLayout.column1trxamt,
                Column1Descs1: this.M_GL_FinancialLayout.column1descs2,
                Column1Descs2: this.M_GL_FinancialLayout.column1descs2,
                Column2: this.M_GL_FinancialLayout.column2descs2,
                Column2LedgerSource: this.M_GL_FinancialLayout.column2ledgersource,
                Column2TrxAmt: this.M_GL_FinancialLayout.column2trxamt,
                Column2Descs1: this.M_GL_FinancialLayout.column2descs2,
                Column2Descs2: this.M_GL_FinancialLayout.column2descs2,
                Column3: this.M_GL_FinancialLayout.column3descs2,
                Column3LedgerSource: this.M_GL_FinancialLayout.column3ledgersource,
                Column3TrxAmt: this.M_GL_FinancialLayout.column3trxamt,
                Column3Descs1: this.M_GL_FinancialLayout.column3descs2,
                Column3Descs2: this.M_GL_FinancialLayout.column3descs2,
                Column4: this.M_GL_FinancialLayout.column4descs2,
                Column4LedgerSource: this.M_GL_FinancialLayout.column4ledgersource,
                Column4TrxAmt: this.M_GL_FinancialLayout.column4trxamt,
                Column4Descs1: this.M_GL_FinancialLayout.column4descs2,
                Column4Descs2: this.M_GL_FinancialLayout.column4descs2,
                Column5: this.M_GL_FinancialLayout.column5descs2,
                Column5LedgerSource: this.M_GL_FinancialLayout.column5ledgersource,
                Column5TrxAmt: this.M_GL_FinancialLayout.column5trxamt,
                Column5Descs1: this.M_GL_FinancialLayout.column5descs2,
                Column5Descs2: this.M_GL_FinancialLayout.column5descs2,
                Column6: this.M_GL_FinancialLayout.column6descs2,
                Column6LedgerSource: this.M_GL_FinancialLayout.column6ledgersource,
                Column6TrxAmt: this.M_GL_FinancialLayout.column6trxamt,
                Column6Descs1: this.M_GL_FinancialLayout.column6descs2,
                Column6Descs2: this.M_GL_FinancialLayout.column6descs2,
                Column7: this.M_GL_FinancialLayout.column7descs2,
                Column7LedgerSource: this.M_GL_FinancialLayout.column7ledgersource,
                Column7TrxAmt: this.M_GL_FinancialLayout.column7trxamt,
                Column7Descs1: this.M_GL_FinancialLayout.column7descs2,
                Column7Descs2: this.M_GL_FinancialLayout.column7descs2,
                Column8: this.M_GL_FinancialLayout.column8descs2,
                Column8LedgerSource: this.M_GL_FinancialLayout.column8ledgersource,
                Column8TrxAmt: this.M_GL_FinancialLayout.column8trxamt,
                Column8Descs1: this.M_GL_FinancialLayout.column8descs2,
                Column8Descs2: this.M_GL_FinancialLayout.column8descs2,
                Column9: this.M_GL_FinancialLayout.column9descs2,
                Column9LedgerSource: this.M_GL_FinancialLayout.column9ledgersource,
                Column9TrxAmt: this.M_GL_FinancialLayout.column9trxamt,
                Column9Descs1: this.M_GL_FinancialLayout.column9descs2,
                Column9Descs2: this.M_GL_FinancialLayout.column9descs2,
                Column10: this.M_GL_FinancialLayout.column1descs2,
                Column10LedgerSource: this.M_GL_FinancialLayout.column1ledgersource,
                Column10TrxAmt: this.M_GL_FinancialLayout.column1trxamt,
                Column10Descs1: this.M_GL_FinancialLayout.column1descs2,
                Column10Descs2: this.M_GL_FinancialLayout.column1descs2,
                Column11: this.M_GL_FinancialLayout.column1descs2,
                Column11LedgerSource: this.M_GL_FinancialLayout.column1ledgersource,
                Column11TrxAmt: this.M_GL_FinancialLayout.column1trxamt,
                Column11Descs1: this.M_GL_FinancialLayout.column1descs2,
                Column11Descs2: this.M_GL_FinancialLayout.column1descs2,
                Column12: this.M_GL_FinancialLayout.column1descs2,
                Column12LedgerSource: this.M_GL_FinancialLayout.column1ledgersource,
                Column12TrxAmt: this.M_GL_FinancialLayout.column1trxamt,
                Column12Descs1: this.M_GL_FinancialLayout.column1descs2,
                Column12Descs2: this.M_GL_FinancialLayout.column1descs2,
                Column13: this.M_GL_FinancialLayout.column1descs2,
                Column13LedgerSource: this.M_GL_FinancialLayout.column1ledgersource,
                Column13TrxAmt: this.M_GL_FinancialLayout.column1trxamt,
                Column13Descs1: this.M_GL_FinancialLayout.column1descs2,
                Column13Descs2: this.M_GL_FinancialLayout.column1descs2,
                Column14: this.M_GL_FinancialLayout.column1descs2,
                Column14LedgerSource: this.M_GL_FinancialLayout.column1ledgersource,
                Column14TrxAmt: this.M_GL_FinancialLayout.column1trxamt,
                Column14Descs1: this.M_GL_FinancialLayout.column1descs2,
                Column14Descs2: this.M_GL_FinancialLayout.column1descs2,
                Column15: this.M_GL_FinancialLayout.column1descs2,
                Column15LedgerSource: this.M_GL_FinancialLayout.column1ledgersource,
                Column15TrxAmt: this.M_GL_FinancialLayout.column1trxamt,
                Column15Descs1: this.M_GL_FinancialLayout.column1descs2,
                Column15Descs2: this.M_GL_FinancialLayout.column1descs2,
                Selection1: this.M_GL_FinancialLayout.selection1,
                Selection2: this.M_GL_FinancialLayout.selection2,
                Selection3: this.M_GL_FinancialLayout.selection3,
                Selection4: this.M_GL_FinancialLayout.selection4,
                Selection5: this.M_GL_FinancialLayout.selection5,
                Remarks: this.M_GL_FinancialLayout.remarks,
                UserInput: this.getDataUser().UserId                 
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
                FinancialLayoutCd: this.M_GL_FinancialLayout.financiallayoutcd,
                Descs1: this.M_GL_FinancialLayout.descs1,
                Descs2: this.M_GL_FinancialLayout.descs2,
                TableRowCd: this.M_GL_FinancialLayout.tablerowcd == '' || this.M_GL_FinancialLayout.tablerowcd == null ? 'NULL' : this.M_GL_FinancialLayout.tablerowcd ,
                SuppressAccount: this.M_GL_FinancialLayout.suppressaccount,
                BracketNegative: this.M_GL_FinancialLayout.bracketnegative,
                AccountDescs: this.M_GL_FinancialLayout.accountdescs,
                SuppressZero: this.M_GL_FinancialLayout.suppresszero,
                Column1: this.M_GL_FinancialLayout.column1descs2,
                Column1LedgerSource: this.M_GL_FinancialLayout.column1ledgersource,
                Column1TrxAmt: this.M_GL_FinancialLayout.column1trxamt,
                Column1Descs1: this.M_GL_FinancialLayout.column1descs2,
                Column1Descs2: this.M_GL_FinancialLayout.column1descs2,
                Column2: this.M_GL_FinancialLayout.column2descs2,
                Column2LedgerSource: this.M_GL_FinancialLayout.column2ledgersource,
                Column2TrxAmt: this.M_GL_FinancialLayout.column2trxamt,
                Column2Descs1: this.M_GL_FinancialLayout.column2descs2,
                Column2Descs2: this.M_GL_FinancialLayout.column2descs2,
                Column3: this.M_GL_FinancialLayout.column3descs2,
                Column3LedgerSource: this.M_GL_FinancialLayout.column3ledgersource,
                Column3TrxAmt: this.M_GL_FinancialLayout.column3trxamt,
                Column3Descs1: this.M_GL_FinancialLayout.column3descs2,
                Column3Descs2: this.M_GL_FinancialLayout.column3descs2,
                Column4: this.M_GL_FinancialLayout.column4descs2,
                Column4LedgerSource: this.M_GL_FinancialLayout.column4ledgersource,
                Column4TrxAmt: this.M_GL_FinancialLayout.column4trxamt,
                Column4Descs1: this.M_GL_FinancialLayout.column4descs2,
                Column4Descs2: this.M_GL_FinancialLayout.column4descs2,
                Column5: this.M_GL_FinancialLayout.column5descs2,
                Column5LedgerSource: this.M_GL_FinancialLayout.column5ledgersource,
                Column5TrxAmt: this.M_GL_FinancialLayout.column5trxamt,
                Column5Descs1: this.M_GL_FinancialLayout.column5descs2,
                Column5Descs2: this.M_GL_FinancialLayout.column5descs2,
                Column6: this.M_GL_FinancialLayout.column6descs2,
                Column6LedgerSource: this.M_GL_FinancialLayout.column6ledgersource,
                Column6TrxAmt: this.M_GL_FinancialLayout.column6trxamt,
                Column6Descs1: this.M_GL_FinancialLayout.column6descs2,
                Column6Descs2: this.M_GL_FinancialLayout.column6descs2,
                Column7: this.M_GL_FinancialLayout.column7descs2,
                Column7LedgerSource: this.M_GL_FinancialLayout.column7ledgersource,
                Column7TrxAmt: this.M_GL_FinancialLayout.column7trxamt,
                Column7Descs1: this.M_GL_FinancialLayout.column7descs2,
                Column7Descs2: this.M_GL_FinancialLayout.column7descs2,
                Column8: this.M_GL_FinancialLayout.column8descs2,
                Column8LedgerSource: this.M_GL_FinancialLayout.column8ledgersource,
                Column8TrxAmt: this.M_GL_FinancialLayout.column8trxamt,
                Column8Descs1: this.M_GL_FinancialLayout.column8descs2,
                Column8Descs2: this.M_GL_FinancialLayout.column8descs2,
                Column9: this.M_GL_FinancialLayout.column9descs2,
                Column9LedgerSource: this.M_GL_FinancialLayout.column9ledgersource,
                Column9TrxAmt: this.M_GL_FinancialLayout.column9trxamt,
                Column9Descs1: this.M_GL_FinancialLayout.column9descs2,
                Column9Descs2: this.M_GL_FinancialLayout.column9descs2,
                Column10: this.M_GL_FinancialLayout.column1descs2,
                Column10LedgerSource: this.M_GL_FinancialLayout.column1ledgersource,
                Column10TrxAmt: this.M_GL_FinancialLayout.column1trxamt,
                Column10Descs1: this.M_GL_FinancialLayout.column1descs2,
                Column10Descs2: this.M_GL_FinancialLayout.column1descs2,
                Column11: this.M_GL_FinancialLayout.column1descs2,
                Column11LedgerSource: this.M_GL_FinancialLayout.column1ledgersource,
                Column11TrxAmt: this.M_GL_FinancialLayout.column1trxamt,
                Column11Descs1: this.M_GL_FinancialLayout.column1descs2,
                Column11Descs2: this.M_GL_FinancialLayout.column1descs2,
                Column12: this.M_GL_FinancialLayout.column1descs2,
                Column12LedgerSource: this.M_GL_FinancialLayout.column1ledgersource,
                Column12TrxAmt: this.M_GL_FinancialLayout.column1trxamt,
                Column12Descs1: this.M_GL_FinancialLayout.column1descs2,
                Column12Descs2: this.M_GL_FinancialLayout.column1descs2,
                Column13: this.M_GL_FinancialLayout.column1descs2,
                Column13LedgerSource: this.M_GL_FinancialLayout.column1ledgersource,
                Column13TrxAmt: this.M_GL_FinancialLayout.column1trxamt,
                Column13Descs1: this.M_GL_FinancialLayout.column1descs2,
                Column13Descs2: this.M_GL_FinancialLayout.column1descs2,
                Column14: this.M_GL_FinancialLayout.column1descs2,
                Column14LedgerSource: this.M_GL_FinancialLayout.column1ledgersource,
                Column14TrxAmt: this.M_GL_FinancialLayout.column1trxamt,
                Column14Descs1: this.M_GL_FinancialLayout.column1descs2,
                Column14Descs2: this.M_GL_FinancialLayout.column1descs2,
                Column15: this.M_GL_FinancialLayout.column1descs2,
                Column15LedgerSource: this.M_GL_FinancialLayout.column1ledgersource,
                Column15TrxAmt: this.M_GL_FinancialLayout.column1trxamt,
                Column15Descs1: this.M_GL_FinancialLayout.column1descs2,
                Column15Descs2: this.M_GL_FinancialLayout.column1descs2,
                Selection1: this.M_GL_FinancialLayout.selection1,
                Selection2: this.M_GL_FinancialLayout.selection2,
                Selection3: this.M_GL_FinancialLayout.selection3,
                Selection4: this.M_GL_FinancialLayout.selection4,
                Selection5: this.M_GL_FinancialLayout.selection5,
                Remarks: this.M_GL_FinancialLayout.remarks,
                UserEdit: this.getDataUser().UserId ,
                LastUpdateStamp: this.M_GL_FinancialLayout.lastupdatestamp                
            }

            this.postJSON(this.getUrlUpdate(), param)
            .then((response) => {
                if(response == null) return

                //kalo ada hit api lagi,tolong script dibawah ini dipindahkan di dalam then'a ,setelah itu hapus comment ini
                this.$parent.resultUpdate(response.Message)
				
            })
        },
		M_ClearForm(){
            this.M_GL_FinancialLayout = {
                financiallayoutcd: '',
                descs1: '',
                descs2: '',
                tablerowcd: '',
                suppressaccount: '',
                bracketnegative: '',
                accountdescs: '',
                suppresszero: '',
                column1: '',
                column1ledgersource: '',
                column1trxamt: '',
                column1descs1: '',
                column1descs2: '',
                column2: '',
                column2ledgersource: '',
                column2trxamt: '',
                column2descs1: '',
                column2descs2: '',
                column3: '',
                column3ledgersource: '',
                column3trxamt: '',
                column3descs1: '',
                column3descs2: '',
                column4: '',
                column4ledgersource: '',
                column4trxamt: '',
                column4descs1: '',
                column4descs2: '',
                column5: '',
                column5ledgersource: '',
                column5trxamt: '',
                column5descs1: '',
                column5descs2: '',
                column6: '',
                column6ledgersource: '',
                column6trxamt: '',
                column6descs1: '',
                column6descs2: '',
                column7: '',
                column7ledgersource: '',
                column7trxamt: '',
                column7descs1: '',
                column7descs2: '',
                column8: '',
                column8ledgersource: '',
                column8trxamt: '',
                column8descs1: '',
                column8descs2: '',
                column9: '',
                column9ledgersource: '',
                column9trxamt: '',
                column9descs1: '',
                column9descs2: '',
                column10: '',
                column10ledgersource: '',
                column10trxamt: '',
                column10descs1: '',
                column10descs2: '',
                column11: '',
                column11ledgersource: '',
                column11trxamt: '',
                column11descs1: '',
                column11descs2: '',
                column12: '',
                column12ledgersource: '',
                column12trxamt: '',
                column12descs1: '',
                column12descs2: '',
                column13: '',
                column13ledgersource: '',
                column13trxamt: '',
                column13descs1: '',
                column13descs2: '',
                column14: '',
                column14ledgersource: '',
                column14trxamt: '',
                column14descs1: '',
                column14descs2: '',
                column15: '',
                column15ledgersource: '',
                column15trxamt: '',
                column15descs1: '',
                column15descs2: '',
                selection1: '',
                selection2: '',
                selection3: '',
                selection4: '',
                selection5: '',
                remarks: '',
                userinput: '',
                useredit: this.getDataUser().UserId,
                rowdescs: '',
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
                        FinancialLayoutCd: value.FinancialLayoutCd,
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
,                financiallayoutcd: record.FinancialLayoutCd
            }

            this.postEncode( this.getUrlById(), param )
            .then(response => {
                // response from API
                if(response == null) return
                
                var data = response.Data[0]
this.M_GL_FinancialLayout = {
                financiallayoutcd: data.financiallayoutcd,
                descs1: data.descs1,
                descs2: data.descs2,
                tablerowcd: data.tablerowcd,
                suppressaccount: data.suppressaccount,
                bracketnegative: data.bracketnegative,
                accountdescs: data.accountdescs,
                suppresszero: data.suppresszero,
                column1: data.column1,
                column1ledgersource: data.column1ledgersource,
                column1trxamt: data.column1trxamt,
                column1descs1: data.column1descs1,
                column1descs2: data.column1descs2,
                column2: data.column2,
                column2ledgersource: data.column2ledgersource,
                column2trxamt: data.column2trxamt,
                column2descs1: data.column2descs1,
                column2descs2: data.column2descs2,
                column3: data.column3,
                column3ledgersource: data.column3ledgersource,
                column3trxamt: data.column3trxamt,
                column3descs1: data.column3descs1,
                column3descs2: data.column3descs2,
                column4: data.column4,
                column4ledgersource: data.column4ledgersource,
                column4trxamt: data.column4trxamt,
                column4descs1: data.column4descs1,
                column4descs2: data.column4descs2,
                column5: data.column5,
                column5ledgersource: data.column5ledgersource,
                column5trxamt: data.column5trxamt,
                column5descs1: data.column5descs1,
                column5descs2: data.column5descs2,
                column6: data.column6,
                column6ledgersource: data.column6ledgersource,
                column6trxamt: data.column6trxamt,
                column6descs1: data.column6descs1,
                column6descs2: data.column6descs2,
                column7: data.column7,
                column7ledgersource: data.column7ledgersource,
                column7trxamt: data.column7trxamt,
                column7descs1: data.column7descs1,
                column7descs2: data.column7descs2,
                column8: data.column8,
                column8ledgersource: data.column8ledgersource,
                column8trxamt: data.column8trxamt,
                column8descs1: data.column8descs1,
                column8descs2: data.column8descs2,
                column9: data.column9,
                column9ledgersource: data.column9ledgersource,
                column9trxamt: data.column9trxamt,
                column9descs1: data.column9descs1,
                column9descs2: data.column9descs2,
                column10: data.column10,
                column10ledgersource: data.column10ledgersource,
                column10trxamt: data.column10trxamt,
                column10descs1: data.column10descs1,
                column10descs2: data.column10descs2,
                column11: data.column11,
                column11ledgersource: data.column11ledgersource,
                column11trxamt: data.column11trxamt,
                column11descs1: data.column11descs1,
                column11descs2: data.column11descs2,
                column12: data.column12,
                column12ledgersource: data.column12ledgersource,
                column12trxamt: data.column12trxamt,
                column12descs1: data.column12descs1,
                column12descs2: data.column12descs2,
                column13: data.column13,
                column13ledgersource: data.column13ledgersource,
                column13trxamt: data.column13trxamt,
                column13descs1: data.column13descs1,
                column13descs2: data.column13descs2,
                column14: data.column14,
                column14ledgersource: data.column14ledgersource,
                column14trxamt: data.column14trxamt,
                column14descs1: data.column14descs1,
                column14descs2: data.column14descs2,
                column15: data.column15,
                column15ledgersource: data.column15ledgersource,
                column15trxamt: data.column15trxamt,
                column15descs1: data.column15descs1,
                column15descs2: data.column15descs2,
                selection1: data.selection1,
                selection2: data.selection2,
                selection3: data.selection3,
                selection4: data.selection4,
                selection5: data.selection5,
                remarks: data.remarks,
                userinput: data.userinput,
                useredit: data.useredit,
                rowdescs: data.rowdescs,
                lastupdatestamp: record.LastUpdateStamp,
                rowid: data.rowid
                    }
                 

                this.M_GL_FinancialLayout.tablerowcdLabel = this.M_GL_FinancialLayout.tablerowcd != null ? data.tablerowcd + this.separator + data.rowdescs :'' 
         

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

