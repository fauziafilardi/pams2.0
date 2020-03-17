// import './plugins/axios'
import axios from 'axios'

export default {
  data() {
    return {
      version: 'v: 0.0.1',
      // ini ga boleh
      // dev yanto
      // url: 'http://localhost/PAMSAPI/PAMS.API/',
      // http://localhost/PAMSAPI/Help

      // local fauzi
      // url: 'http://localhost/PAMSAPI/PAMS.API/',
      // url: 'http://36.91.141.98:8181/PAMSAPI/PAMS.API',

      // local akmal
      // url: 'http://localhost:5151/PAMS.API/',

      // udah hasil publish
      // url: 'http://192.168.6.98/PAMSPUBLISH/PAMS.api/',

      // local yanto
      // url: 'http://192.168.6.98/PAMSAPI/PAMS.API/',
      // urlReportTemplate: 'http://192.168.6.98/ReportPams/',

      // // dev PMO
      // url: 'http://192.168.6.9/PAMSAPI/PAMS.API/',
      url: 'http://36.91.141.98:8999/PAMS.API/',

      // //url Report
      urlReportTemplate: 'http://192.168.6.9/ReportPams/',
      // urlReportTemplate: 'http://localhost/PAMSREPORT/',
      // public PMO
      // url: 'http://36.91.141.98:8181/PAMSAPI/PAMS.API/',      
      //url report public
      // urlReportTemplate: 'http://36.91.141.98:8181/ReportPams/',

      segmentDelete: 'DynamicAPI/Delete',
      segmentInsert: 'DynamicAPI/Insert',
      // segmentInsert: 'DynamicAPI/InsertWithT',
      segmentUpdate: 'DynamicAPI/Update',
      // segmentUpdate: 'DynamicAPI/UpdateWithT',

      segmentGetList: 'DynamicAPI/GetList',
      segmentGetGrid: 'DynamicAPI/GetGrid',
      segmentGetDataList: 'DynamicAPI/GetDataList',

      // old
      // segmentGetLookUp: 'DynamicAPI/GetLookUp',
      segmentGetDBConnection: 'Function/GetDBConnection',

      // new table
      segmentGetLookUp: 'LookUp/GetData',

      // ini untuk lookup modal
      segmentGetLookUpList: 'LookUp/GetList',
      segmentGetLookUpDataBy: 'LookUp/GetDataBy',

      segmentGetById: 'DynamicAPI/GetById',
      segmentGetById2: 'DynamicAPI/GetById2',
      segmentGetMenuById: 'Menu/GetMenuBy',

      segmentGetPropertyInput: 'Menu/GetPropertyMenuBy',
      segmentGetGroupPermission: 'Menu/GetGroupPermision',
      segmentGetGroupPermisionModule: 'Menu/GetGroupPermisionModule',
      segmentGetGroupPermisionEvent: 'Menu/GetGroupPermisionEvent',
      segmentGetGroupPermisionOption: 'Menu/GetGroupPermisionOption',

      segmentGetUploadFile: 'File/UploadFile',
      segmentGetTokenExport: 'File/GetTokenExport',
      segmentExportExcel: 'File/ExportFileList?fileName={segmentFileName}&Key={segmentKey}',
      segmentExportEfaktur: 'File/ExporEfaktur?Oid={segmentOid}&Delimiter={segmentDelimeter}&Filter={segmentFilter}',
      segmentExportEfakturTrans: 'File/ExporEfakturLawanTransaksi?Oid={segmentOid}&Delimiter={segmentDelimeter}&Filter={segmentFilter}',
      segmentReportGenerator: 'ReportGenerator/DownloadFile?fileName=',

      segmentGetTokenExportReckon: 'Reckon/GetTokenExport',

      segmentImportEFaktur: 'AReFaktur/PostEFaktur',
      segmentImportVirtualAccount: 'CBVirualAccount/ImportExcel',
      segmentPostVirtualAccount: 'CBVirualAccount/PostVitualAcct',
      segmentExportVirtualAccount: "CBVirualAccount/ExportExcel?SubPortfolioCd={SubPortfolioCd}&TrxTypeGroup={TrxTypeGroup}&UserId={UserId}&DebtorCdFrom={DebtorCdFrom}&DebtorCdTo={DebtorCdTo}&DebitNoFrom={DebitNoFrom}&DebitNoTo={DebitNoTo}&DebitDateFrom={DebitDateFrom}&DebitDateTo={DebitDateTo}",

      segmentGetImportCSV: 'File/ImportCSV',

      segmentLogin: 'Auth/Login',
      segmentLogout: 'Auth/Logout',

      segmentChangeSubportfolio: 'Beranda/ChangeSubportfolio',
      segmentGetSubportfolio: 'Beranda/GetSubportfolio',
      segmentInsertSubportfolio: 'FP_SubPortfolio/Insert',
      segmentDeleteSubportfolio: 'FP_SubPortfolio/Delete',
      segmentGetLookUpSubportfolio: 'FP_SubPortfolio/GetLookUp',

      segmentSaveGroupSecuritySetting: 'GroupPermission/SaveSecuritySetting',
      segmentSaveGroupSecuritySettingUser: 'UserPermission/SaveSecuritySetting',

      segmentDefineColumn: 'DefineColumn/Insert',

      segmentNewDeleteMulti: 'DynamicAPIMulti/NewDelete',
      segmentDeleteMulti: 'DynamicAPIMulti/Delete',
      segmentInsertMulti: 'DynamicAPIMulti/Insert',
      segmentUpdateMulti: 'DynamicAPIMulti/Update',
      segmentProsesDataPostMulti: 'DynamicAPIMulti/ProsesDataPostMulti',

      segmentPostMulti: 'DynamicAPIMulti/Post',
      segmentDeleteFavorite: 'UserFavorite/Delete',
      segmentInsertFavorite: 'UserFavorite/Insert',

      segmentTab: 'TabOption/GetTab',
      segmentTab2: 'TabOption/GetTab2',

      segmentUrlSetOptionSelected: 'SortMenu/SetSortMenu',

      segmentInsert2: 'DynamicAPI/Insert2',
      segmentInsert3: 'DynamicAPI/Insert3',
      segmentInsert4: 'DynamicAPI/Insert4',
      segmentInsert5: 'DynamicAPI/Insert5',

      segmentUpdate2: 'DynamicAPI/Update2',
      segmentUpdate3: 'DynamicAPI/Update3',
      segmentUpdate4: 'DynamicAPI/Update4',
      segmentUpdate5: 'DynamicAPI/Update5',

      segmentDeleteMulti2: 'DynamicAPIMulti/Delete2',
      segmentDeleteMulti3: 'DynamicAPIMulti/Delete3',
      segmentDeleteMulti4: 'DynamicAPIMulti/Delete4',
      segmentDeleteMulti5: 'DynamicAPIMulti/Delete5',

      segmentGetById2Obj: 'DynamicAPI/GetById2Obj',

      segmentGetPageInfoByOption: 'Menu/GetPageInfoByOption',

      // T Analysis
      segmentTadd: 'TAnalysis/GetTAnalysisAdd',
      segmentTedit: 'TAnalysis/GetTAnalysisEdit',
      segmentTlookup: 'TAnalysis/GetAnalysisLookup',

      segmentTViewFromTo: 'TAnalysis/GetAnalysisFilter',
      segmentTFilterExecutor: 'TAnalysis/GetAnalysisFilterExecutor',

      segmentSubportfolioCheckbox: 'CMCommon/GetListSubPortfolioChekBox',

      segmentSetSubportfolioCheckbox: 'CMCommon/SetListSubPortfolioChekBox',

      segmentGetParamHTML: 'Reports/GetParamHTML',

      segmentGetParameterHTML: 'Reports/GetParameterHTML',

      segmentSaveParamTemp: 'Reports/SaveParamTemp',

      segmentConditionForReportPath: 'Reports/GetRptPath',

      segmentGenerateReport: 'ReportGenerator/Generate',

      segmentGenerateReportExecutor: 'ReportGenerator/SaveExecutor',

      segmentGenerateReportExecutorDaily: 'ReportGenerator/SaveExecutorDaily',

      segmentGenerateReportDaily: 'ReportGenerator/GenerateDaily',

      segmentGenerateReportTemplate: 'ReportsTemplate?oid={OptionSeq}&ParamWhere={Param}&rs:Command=Render&rs:ClearSession=true&rc:Toolbar=false',
      segmentReportBlankPage: 'BlankPage',

      segmentAnalysisGL_TransactionType: 'TAnalysis/GetAnalysisTable',

      segmentTenancyFileUpload: 'Tenancy/UploadFile',

      segmentUpdateCoordinateProperty: 'FloorPlan/UpdateCoordinateProperty',
      segmentUpdateCoordinateZone: 'FloorPlan/UpdateCoordinateZone',
      segmentUpdateCoordinateFloorPlan: 'FloorPlan/UpdateCoordinateFloorPlan',
      segmentUpdateCoordinateUnit: 'FloorPlan/UpdateCoordinateUnit',

      segmentGetCoordinateProperty: 'FloorPlan/GetCoordinateProperty',
      segmentGetCoordinateZone: 'FloorPlan/GetCoordinateZone',
      segmentGetCoordinateFloorPlan: 'FloorPlan/GetCoordinateFloorPlan',
      segmentGetCoordinateUnit: 'FloorPlan/GetCoordinateUnit',

      segmentGetColumnList: 'MailMerge/GetColumnList',
      segmentGetViewReport: 'MailMerge/GetViewReport',
      segmentGetIdMailMerge: 'MailMerge/GetIdMailMerge',
      segmentGetExportMailMerge: 'MailMerge/ExportFile?SubPortfolioCd={SubPortfolioCd}&MailMergeCd={MailMergeCd}&FromNo={FromNo}&FormatFile={FormatFile}&Id={Id}',

      segmentAlertGetList: 'Alert/GetList',

      segmentLedgerAnalysisExecutor: 'LedgerAnalysis/SaveExecutor',

      queryString: require('querystring'),
      // content type
      urlEncoded: 'application/x-www-form-urlencoded',
      json: 'application/json',
      formData: 'multipart/form-data'
    }
  },
  mounted() {
    // this.postEncode(this.getUrlLookup, )
    // alert('test')
  },
  methods: {
    getUrlDBConnection() {
      return this.url + this.segmentGetDBConnection
    },
    getUrlInsert() {
      return this.url + this.segmentInsert
    },

    getUrlInsert2() {
      return this.url + this.segmentInsert2
    },

    getUrlInsert3() {
      return this.url + this.segmentInsert3
    },

    getUrlInsert4() {
      return this.url + this.segmentInsert4
    },

    getUrlInsert5() {
      return this.url + this.segmentInsert5
    },

    getUrlUpdate() {
      return this.url + this.segmentUpdate
    },

    getUrlUpdate2() {
      return this.url + this.segmentUpdate2
    },

    getUrlUpdate3() {
      return this.url + this.segmentUpdate3
    },

    getUrlUpdate4() {
      return this.url + this.segmentUpdate4
    },

    getUrlUpdate5() {
      return this.url + this.segmentUpdate5
    },

    getUrlGetById2Obj() {
      return this.url + this.segmentGetById2Obj
    },

    getUrlDelete() {
      return this.url + this.segmentDelete
    },

    getUrlList() {
      return this.url + this.segmentGetList
    },

    getUrlGrid() {
      return this.url + this.segmentGetGrid
    },

    getUrlDataList() {
      return this.url + this.segmentGetDataList
    },

    getUrlLookup() {
      return this.url + this.segmentGetLookUp
    },

    getUrlLookupList() {
      return this.url + this.segmentGetLookUpList
    },

    getUrlLookupByData() {
      return this.url + this.segmentGetLookUpDataBy
    },

    getUrlById() {
      return this.url + this.segmentGetById
    },

    getUrlById2() {
      return this.url + this.segmentGetById2
    },

    getUrlGetMenuBy() {
      return this.url + this.segmentGetMenuById
    },

    getUrlGetPropery() {
      return this.url + this.segmentGetPropertyInput
    },

    getUrlGetGroupPermission() {
      return this.url + this.segmentGetGroupPermission
    },

    getUrlGetGroupPermisionModule() {
      return this.url + this.segmentGetGroupPermisionModule
    },

    getUrlGetGroupPermisionEvent() {
      return this.url + this.segmentGetGroupPermisionEvent
    },

    getUrlGetGroupPermisionOption() {
      return this.url + this.segmentGetGroupPermisionOption
    },

    getUrlUploadFile() {
      return this.url + this.segmentGetUploadFile
    },

    getUrlImportCSV() {
      return this.url + this.segmentGetImportCSV
    },

    getUrlGetTokenExport() {
      return this.url + this.segmentGetTokenExport
    },
    getUrlGetTokenExportReckon() {
      return this.url + this.segmentGetTokenExportReckon
    },
    getUrlExportExcel() {
      return this.url + this.segmentExportExcel
    },

    getUrlExportEfaktur() {
      return this.url + this.segmentExportEfaktur
    },
    getUrlExportEfakturTrans() {
      return this.url + this.segmentExportEfakturTrans
    },
    getUrlExportVirutalAccount() {
      return this.url + this.segmentExportVirtualAccount
    },
    getUrlImportEFaktur() {
      return this.url + this.segmentImportEFaktur
    },
    getUrlImportVirtualAccount() {
      return this.url + this.segmentImportVirtualAccount
    },

    getUrlPostVirtualAccount() {
      return this.url + this.segmentPostVirtualAccount
    },

    getUrlReportGenerator() {
      return this.url + this.segmentReportGenerator
    },

    getUrlLogin() {
      return this.url + this.segmentLogin
    },

    getUrlLogout() {
      return this.url + this.segmentLogout
    },

    getUrlChangeSubportfolio() {
      return this.url + this.segmentChangeSubportfolio
    },

    getUrlSaveSecuritySetting() {
      return this.url + this.segmentSaveGroupSecuritySetting
    },

    getUrlSaveSecuritySettingUser() {
      return this.url + this.segmentSaveGroupSecuritySettingUser
    },

    getUrlSubportfolio() {
      return this.url + this.segmentGetSubportfolio
    },

    getUrlInsertSubportfolio() {
      return this.url + this.segmentInsertSubportfolio
    },

    getUrlDeleteSubportfolio() {
      return this.url + this.segmentDeleteSubportfolio
    },

    getUrlLookUpSubportfolio() {
      return this.url + this.segmentGetLookUpSubportfolio
    },

    getUrlDefineColumn() {
      return this.url + this.segmentDefineColumn
    },

    getUrlNewDeleteMulti() {
      return this.url + this.segmentNewDeleteMulti
    },

    getUrlDeleteMulti() {
      return this.url + this.segmentDeleteMulti
    },

    getUrlDeleteMulti2() {
      return this.url + this.segmentDeleteMulti2
    },

    getUrlDeleteMulti3() {
      return this.url + this.segmentDeleteMulti3
    },

    getUrlDeleteMulti4() {
      return this.url + this.segmentDeleteMulti4
    },

    getUrlDeleteMulti5() {
      return this.url + this.segmentDeleteMulti5
    },

    getPageInfoByOption() {
      return this.url + this.segmentGetPageInfoByOption
    },

    getUrlPostMulti() {
      return this.url + this.segmentPostMulti
    },

    getUrlInsertMulti() {
      return this.url + this.segmentInsertMulti
    },

    getUrlUpdateMulti() {
      return this.url + this.segmentUpdateMulti
    },

    getUrlDeleteFavorite() {
      return this.url + this.segmentDeleteFavorite
    },
    getUrlProsesDataPostMulti() {
      return this.url + this.segmentProsesDataPostMulti
    },
    getUrlInsertFavorite() {
      return this.url + this.segmentInsertFavorite
    },

    getUrlTab() {
      return this.url + this.segmentTab
    },

    getUrlTab2() {
      return this.url + this.segmentTab2
    },

    getUrlTanalysisAdd() {
      return this.url + this.segmentTadd
    },

    getUrlTanalysisEdit() {
      return this.url + this.segmentTedit
    },

    getUrlTanalysisLookup() {
      return this.url + this.segmentTlookup
    },

    getUrlTViewFromTo() {
      return this.url + this.segmentTViewFromTo
    },

    getUrlTFilterExecutor() {
      return this.url + this.segmentTFilterExecutor
    },

    getUrlSubportfolioCheckbox() {
      return this.url + this.segmentSubportfolioCheckbox
    },

    getUrlSetSubportfolioCheckbox() {
      return this.url + this.segmentSetSubportfolioCheckbox
    },

    getUrlParamHTML() {
      return this.url + this.segmentGetParamHTML
    },

    getUrlParameterHTML() {
      return this.url + this.segmentGetParameterHTML
      // return 'http://192.168.6.98/PAMSAPI/PAMS.api/' + this.segmentGetParameterHTML
    },

    getUrlSaveParamTemp() {
      return this.url + this.segmentSaveParamTemp
    },

    getUrlConditionForReportPath() {
      return this.url + this.segmentConditionForReportPath
    },

    getUrlSetOptionSelected() {
      return this.url + this.segmentUrlSetOptionSelected
    },
    getUrlGenerateReport() {
      return this.url + this.segmentGenerateReport
    },
    getUrlGenerateReportDaily() {
      return this.url + this.segmentGenerateReportDaily
    },

    getUrlGenerateReportTemplate() {
      return this.urlReportTemplate + this.segmentGenerateReportTemplate
    },
    getUrlReportBlankPage() {
      return this.urlReportTemplate + this.segmentReportBlankPage
    },

    getUrlAnalysisGL_TransactionType() {
      return this.url + this.segmentAnalysisGL_TransactionType
    },
    getUrlGenerateReportExecutor() {
      return this.url + this.segmentGenerateReportExecutor
    },
    getUrlLedgerAnalysisExecutor() {
      return this.url + this.segmentLedgerAnalysisExecutor
    },
    getUrlGenerateReportExecutorDaily() {
      return this.url + this.segmentGenerateReportExecutorDaily
    },

    getUrlTenancyFileUpload() {
      return this.url + this.segmentTenancyFileUpload
    },

    getUrlUpdateCoordinateProperty() {
      return this.url + this.segmentUpdateCoordinateProperty
    },

    getUrlUpdateCoordinateZone() {
      return this.url + this.segmentUpdateCoordinateZone
    },

    getUrlUpdateCoordinateFloorPlan() {
      return this.url + this.segmentUpdateCoordinateFloorPlan
    },

    getUrlGetCoordinateProperty() {
      return this.url + this.segmentGetCoordinateProperty
    },

    getUrlGetCoordinateUnit() {
      return this.url + this.segmentGetCoordinateUnit
    },

    getUrlGetCoordinateZone() {
      return this.url + this.segmentGetCoordinateZone
    },

    getUrlGetCoordinateFloorPlan() {
      return this.url + this.segmentGetCoordinateFloorPlan
    },

    getUrlGetColumnList() {
      return this.url + this.segmentGetColumnList
    },

    getUrlGetViewReport() {
      return this.url + this.segmentGetViewReport
    },

    getUrlGetIdMailMerge() {
      return this.url + this.segmentGetIdMailMerge
    },

    getUrlGetExportMailMerge() {
      return this.url + this.segmentGetExportMailMerge
    },

    getUrlAlertGetList() {
      return this.url + this.segmentAlertGetList
    },

    GenerateReportTemplate(OptionSeq, Param) {
      var url = this.getUrlGenerateReportTemplate()
      url = url.replace('{OptionSeq}', OptionSeq).replace('{Param}', Param)
      return url
    },

    getExportMailMerge(SubPortfolioCd, MailMergeCd, FromNo, FormatFile, Id) {
      var url = this.getUrlGetExportMailMerge()
      url = url.replace('{SubPortfolioCd}', SubPortfolioCd).replace('{MailMergeCd}', MailMergeCd).replace('{FromNo}', FromNo).replace('{FormatFile}', FormatFile).replace('{Id}', Id)
      return url
    },

    checkResponseCode(message) {
      if (String(message) === 'Error: Request failed with status code 401') {
        this.doClearLocalStorage()
        this.$router.replace({
          path: '/sign-in'
        })
      } else {
        this.alertError(message)
      }

      if (String(message) === 'Error: Request failed with status code 404') {}
    },

    postEncode(fullUrl, param) {
      // set param for vuex to post data T
      if (fullUrl === this.getUrlById()) {
        this.$store.commit('setParamGetDataBy', param)
      }

      // set data from pop up (window) to parent(master)
      if (fullUrl === this.getUrlInsert() && this.getIsPopup()) {
        this.$store.commit('setParamInsertPopup', param)
      }

      // loader off when lookup and click add button toolbar
      if (fullUrl === this.getUrlLookup() || fullUrl === this.getUrlTanalysisAdd() || fullUrl === this.getUrlSaveParamTemp()) {} else {
        this.$store.commit('setStatusLoader', true)
      }
      return axios
        .post(
          fullUrl,
          this.queryString.stringify(param), {
            headers: {
              'Content-Type': this.urlEncoded,
              // 'Content-Type': this.json,
              Accept: this.json,
              // Session_Id: this.getSession().sessionId
              Token: fullUrl === this.getUrlLogin() ? '' : this.getSession().sessionId
            }
          }
        )
        .then(response => {
          let responses = response.data
          // if (fullUrl == this.getUrlTanalysisEdit()) console.log(responses)

          let error = responses.Error
          let message = responses.Message
          // this.error = true

          // this.$store.commit('setStatusLoader', false)
          if (fullUrl === this.getUrlLookup() || fullUrl === this.getUrlTanalysisAdd() || fullUrl === this.getUrlSaveParamTemp()) {} else {
            // setTimeout(() => {
            // this.$store.commit('setStatusLoader', false)
            // }, 1000);
            if (fullUrl === this.getUrlList() && this.$store.getters.getLevel === 1) {
              setTimeout(() => {
                this.$store.commit('setStatusLoader', false)
              }, 1000);
            } else {
              this.$store.commit('setStatusLoader', false)
            }
          }
          if (error) {
            this.alertError(message)
            return null
          }
          if (fullUrl === this.getUrlById()) {
            this.$store.commit('SetPage' + this.$store.getters.getLevel + 'GetDataBy', responses.Data[0])
          }
          return responses
        })
        .catch(err => {
          this.$store.commit('setStatusError', true)
          this.checkResponseCode(err)
          // this.$store.commit('setStatusLoader', false)
          if (fullUrl === this.getUrlLookup() || fullUrl === this.getUrlTanalysisAdd() || fullUrl === this.getUrlSaveParamTemp()) {} else {
            this.$store.commit('setStatusLoader', false)
          }
          return null
        })
    },

    postJSON(fullUrl, param) {
      if (fullUrl === this.getUrlInsert() || fullUrl === this.getUrlUpdate()) {
        param['DataT'] = this.$store.getters.getDataT
      }

      // set data from pop up (window) to parent(master)
      if (fullUrl === this.getUrlInsert() && this.getIsPopup()) {
        this.$store.commit('setParamInsertPopup', param)
      }

      this.$store.commit('setStatusLoader', true)
      return axios
        .post(
          fullUrl,
          param, {
            headers: {
              'Content-Type': this.json,
              Accept: this.json,
              // Session_Id: this.getSession().sessionId
              Token: this.getSession().sessionId
            }
          }
        )
        .then(response => {
          let responses = response.data
          // console.log(responses)

          let error = responses.Error
          let message = responses.Message
          // this.error = true

          this.$store.commit('setStatusLoader', false)
          if (error) {
            this.alertError(message)
            return null
          }
          return responses
        })
        .catch(err => {
          this.checkResponseCode(err)
          this.$store.commit('setStatusLoader', false)
          return null
        })
    },

    // postJSONMulti (fullUrl, param) {
    //   return axios
    //     .post(
    //       fullUrl,
    //       param,
    //       {
    //         headers: {
    //           'Content-Type': this.json,
    //           Accept: this.json,
    //           // Session_Id: this.getSession().sessionId
    //           Token: this.getSession().sessionId
    //         }
    //       }
    //     )
    //     .then(response => {
    //       return response.data
    //     })
    //     .catch(err => {
    //       this.checkResponseCode(err)
    //       return null
    //     })
    // },
    postJSONMulti(fullUrl, param) {
      this.$store.commit('setStatusLoader', true)
      return axios
        .post(
          fullUrl,
          param, {
            headers: {
              'Content-Type': this.json,
              Accept: this.json,
              // Session_Id: this.getSession().sessionId
              Token: this.getSession().sessionId
            }
          }
        )
        .then(response => {
          console.log(response)
          console.log('url', fullUrl)
          let responses = response.data

          let error = responses.Error

          this.$store.commit('setStatusLoader', false)
          // if (error) {

          var html = ''
          html += '<div style="overflow: auto;height: 325px;"><table border=1 style="font-size: 12px;font-weight: normal;width: 100%;">'
          html += '<thead><tr>'
          if (fullUrl === this.getUrlProsesDataPostMulti()) {
            if (responses.Data === null) {
              if (error) {
                this.alertError(responses.Message)
                return null
              } else {
                return responses
              }
            }
          } else if (fullUrl === this.getUrlPostMulti() || fullUrl === this.getUrlNewDeleteMulti() || fullUrl === this.getUrlUpdateMulti()) { // POST MULTI OR new multi delete
            if (responses.Data === null) {
              if (error) {
                this.alertError(responses.Message)
                return null
              } else {
                this.alertSuccess('Posting Data Successfully')
                return responses
              }
            } else {
              if (responses.Data.length > 0) {
                // html += '<th> Status </th> <th> Description </th>'
                html += '<th> No </th> <th> Status </th> <th> Message </th>'
                html += '</tr></thead><tbody>'
                // console.log(responses.Data)
                var loop = 0
                responses.Data.forEach(val => {
                  // console.log(val.No)
                  // console.log(val.Error)
                  // console.log(val.Message)
                  // console.log(val.Data.OutputMessage)

                  var keys = Object.keys(param.Data[0])
                  var key = ''
                  var KeyOutput = ''
                  let message = ''
                  for (var j = 0; j < keys.length; j++) {

                    if (keys[j].includes('_Output')) {
                      // key = keys[j].replace('_Output', '')
                      KeyOutput = keys[j].replace('_Output', '')
                      // break
                    } else if (keys[j].includes('_Message_')) {
                      // console.log(param.Data[j]._Message_)
                      message = param.Data[loop]._Message_ == '' ? '' : param.Data[loop]._Message_ + ', '
                      key = keys[j].replace('_', '')
                      key = key.replace('_', '')
                      // break
                    }

                  }

                  var msg = ''
                  if (val.Error === true) {
                    msg = val.Message
                  } else {
                    key = KeyOutput !== '' ? KeyOutput : key
                    msg = val.Data[key]
                  }

                  var sts = val.Error
                  if (sts) {
                    sts = 'Error'
                    html += '<tr style="text-align: left;padding-left: 5px;padding-right: 5px;">'
                    html += '<td style="padding-left: 5px;padding-right: 5px;">' + val.No + '</td>'
                    html += '<td style="color:red; padding-left: 5px;padding-right: 5px;">' + sts + '</td>'
                    // html += '<td style="padding-left: 5px;padding-right: 5px;">' + message + msg + '</td>'
                    html += '<td style="padding-left: 5px;padding-right: 5px;">' + msg + '</td>'
                    html += '</tr>'
                  } else {
                    sts = 'Success'

                    html += '<tr style="text-align: left;">'
                    html += '<td style="padding-left: 5px;padding-right: 5px;">' + val.No + '</td>'
                    html += '<td style="padding-left: 5px;padding-right: 5px;">' + sts + '</td>'
                    if (fullUrl === this.getUrlNewDeleteMulti()) {
                      html += '<td style="padding-left: 5px;padding-right: 5px;">' + message + msg + ' Deleted Successfully' + '</td>'
                    } else if (fullUrl === this.getUrlPostMulti()) {
                      html += '<td style="padding-left: 5px;padding-right: 5px;">' + msg + ' Posting Successfully' + '</td>'
                      // html += '<td style="padding-left: 5px;padding-right: 5px;">' + msg + ' Posting Successfully' + '</td>'
                    } else if (fullUrl === this.getUrlUpdateMulti()) {
                      html += '<td style="padding-left: 5px;padding-right: 5px;">' + message + msg + ' Update Successfully' + '</td>'
                    }

                    html += '</tr>'
                  }
                  loop++
                })
                html += '</tbody></table>'
                // console.log(html)
                this.alertWithHtml('Information', 'info', html)
                // return null
              }
              // return responses
            }
          } else if (fullUrl === this.getUrlDeleteMulti()) { // delete multi
            console.log(responses)
            if (responses.Data === null) {
              if (error) {
                this.alertError(responses.Message)
                return null
              } else {
                // this.alertSuccess("Deleting Data Successfully")
                return responses
              }
            } else {
              // alert('tetot')
              if (responses.Data.length > 0) {
                html += '<th> Data </th> <th> Error Message </th>'
                html += '</tr></thead><tbody>'
                responses.Data.forEach(val => {
                  html += '<tr>'
                  html += '<td> ' + val.Data + ' </td> <td> ' + val.ErrorMsg + ' </td>'
                  html += '</tr>'
                })

                html += '</tbody></table>'
                this.alertWithHtml('Error', 'error', html)

                return null
              }
            }
          } else if (fullUrl === this.getUrlUpdateMulti()) { // delete multi
            if (responses.Data === null) {
              if (error) {
                this.alertError(responses.Message)
                return null
              } else {
                // this.alertSuccess("Deleting Data Successfully")
                return responses
              }
            } else {
              // alert()
              var err = []
              if (responses.Data.length > 0) {
                html += '<th> Data </th> <th> Error Message </th>'
                html += '</tr></thead><tbody>'
                responses.Data.forEach(val => {
                  if (val.Error) {
                    err.push(val.Error)
                    html += '<tr>'
                    html += '<td> ' + JSON.stringify(val.Data) + ' </td> <td> ' + val.Message + ' </td>'
                    html += '</tr>'
                  }
                })

                html += '</tbody></table></div>'

                if (err.indexOf(true) < 0) {
                  return responses
                } else {
                  this.alertWithHtml('Error', 'error', html)
                  return null
                }
              }
            }
          } else {
            if (error) {
              return null
            }
          }
          // html += '</tbody></table>'

          // this.alertWithHtml('Error', 'error', html)
          // return null
          // }
          return responses
        })
        .catch(err => {
          this.checkResponseCode(err)
          this.$store.commit('setStatusLoader', false)
          return null
        })
    },

    postURLSearchParams(fullUrl, param) {
      this.$store.commit('setStatusLoader', true)
      return axios
        .post(
          fullUrl,
          param, {
            headers: {
              'Content-Type': this.urlEncoded,
              Accept: this.json,
              // Session_Id: this.getSession().sessionId
              Token: this.getSession().sessionId
            }
          }
        )
        .then(response => {
          let responses = response.data
          // console.log(responses)

          let error = responses.Error
          let message = responses.Message
          // this.error = true

          this.$store.commit('setStatusLoader', false)
          if (error) {
            this.alertError(message)
            return null
          }
          return responses
        })
        .catch(err => {
          this.checkResponseCode(err)
          this.$store.commit('setStatusLoader', false)
          return null
        })
    },

    getFileExcel(fileName, key) {
      var url = this.getUrlExportExcel()
      url = url.replace('{segmentFileName}', fileName).replace('{segmentKey}', key)
      return url
    },

    getFileEFaktur(Oid, Delimeter, Filter) {
      var url = this.getUrlExportEfaktur()
      url = url.replace('{segmentOid}', Oid).replace('{segmentDelimeter}', Delimeter).replace('{segmentFilter}', Filter)
      return url
    },
    getFileEFakturLawanTrans(Oid, Delimeter, Filter) {
      var url = this.getUrlExportEfakturTrans()
      url = url.replace('{segmentOid}', Oid).replace('{segmentDelimeter}', Delimeter).replace('{segmentFilter}', Filter)
      return url
    },
    getExportVirutalAccount(SubPortfolioCd, TrxTypeGroup, UserId, DebtorCdFrom, DebtorCdTo, DebitNoFrom, DebitNoTo, DebitDateFrom, DebitDateTo) {
      var url = this.getUrlExportVirutalAccount()
      url = url.replace('{SubPortfolioCd}', SubPortfolioCd).replace('{TrxTypeGroup}', TrxTypeGroup).replace('{UserId}', UserId).replace('{DebtorCdFrom}', DebtorCdFrom).replace('{DebtorCdTo}', DebtorCdTo).replace('{DebitNoFrom}', DebitNoFrom).replace('{DebitNoTo}', DebitNoTo).replace('{DebitDateFrom}', DebitDateFrom).replace('{DebitDateTo}', DebitDateTo)
      return url
    },
    getReportGenerator(fileName) {
      var url = this.getUrlReportGenerator() + fileName
      window.location.href = url
    },

    getHTTP(fullUrl) {
      this.$store.commit('setStatusLoader', true)
      return axios
        .get(fullUrl)
        .then(response => {
          let responses = response.data
          // console.log(responses)

          let error = responses.Error
          let message = responses.Message
          // this.error = true

          this.$store.commit('setStatusLoader', false)
          if (error) {
            this.alertError(message)
            return null
          }
          return responses
        })
        .catch(err => {
          this.checkResponseCode(err)
          this.$store.commit('setStatusLoader', false)
          return null
        })
    },

    serializeArrayUrlEncoded(form) {
      var field = []
      var l = []
      const searchParams = new URLSearchParams()
      if (typeof form === 'object' && form.nodeName === 'FORM') {
        var len = form.elements.length
        for (var i = 0; i < len; i++) {
          field = form.elements[i]
          if (field.name && !field.disabled && field.type !== 'file' && field.type !== 'reset' && field.type !== 'submit' && field.type !== 'button') {
            if (field.type === 'select-multiple') {
              l = form.elements[i].options.length
              for (var j = 0; j < l; j++) {
                if (field.options[j].selected) {
                  searchParams.append(field.name, field.options[j].value)
                }
              }
            } else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
              searchParams.append(field.name, field.value)
            }
          }
        }
      }
      return searchParams
    }
  }
}