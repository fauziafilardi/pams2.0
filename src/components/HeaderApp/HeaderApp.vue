<template>
  <div>
    <!-- <b-modal id="modallg" size="lg" title="Change SubPortFolio">
      <b-container fluid>
        <b-row class="mb-1 text-center">
        </b-row>
      </b-container>
      <div slot="modal-footer" class="w-100">
      </div>
    </b-modal> -->
    <div
      class="header--top"
      id="header--top"
      :class="{ 'header--dark': classHeader }"
      :style="{ paddingLeft: paddingHeader }"
    >
      <div class="pull--left">
        <router-link :to="'/'">
          <div class="header--top__tagline">
            PAMS APP
          </div>
        </router-link>
      </div>
      <div class="pull--right">
        <div class="header--top__info-subportfolio notranslate">
          {{label}} 
          <!-- | {{language}} -->
        </div>
        <div
          class="header--top__profile-menu"
          @click="dropdownMenuHeaderTop = !dropdownMenuHeaderTop"
          v-click-outside="closeHeader"
        >
          <div class="avatar">
            <div class="image">              
              <img :src="require('@/assets/avatar.png')" alt="">
            </div>
          </div>
          <div class="information">
            <div class="username notranslate" title="EPRO">
              <!-- Epro User -->
              <!-- {{version}} -->
              {{Username}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="dropdown-profile"
      v-if="dropdownMenuHeaderTop"
    >
      <div class="dropdown-profile__list-menu">
        <div @click="showChangeSubportfolio()" class="list">
          <div class="title">
            <span>Change Sub Portfolio</span>
          </div>
          <div class="icon">
            <i class="icon-list"></i>
          </div>
        </div>
        <div v-b-modal.modal-language class="list">
          <div class="title">
            <span>Change Language</span>
          </div>
          <div class="icon">
            <i class="icon-film"></i>
          </div>
        </div>
        <div class="list">
          <div class="title">
            <span>Change Password</span>
          </div>
          <div class="icon">
            <i class="icon-key"></i>
          </div>
        </div>
        <div class="list">
          <div class="title">
            <span>My Profile</span>
          </div>
          <div class="icon">
            <i class="icon-user"></i>
          </div>
        </div>
        <div @click="signOut" class="list">
          <div class="title">
            <span>Sign Out</span>
          </div>
          <div class="icon">
            <i class="icon-logout"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL CHANGE SUB PORTFLIO -->
    <b-modal
      id="modal-center"
      :hide-footer="true"
      :hide-header-close="true"
      ref="modalSubPortfolio"
      centered
      class="modal-customize-abs"
    >
       <b-container class="bv-example-row">
        <b-row>
          <b-col sm="12">
            <div class="modal-customize-abs__modal-header">
              <div class="modal-customize-abs__modal-header--title">
                Change Subportfolio
              </div>
              <div
                class="modal-customize-abs__modal-header--icon"
                @click="$refs.modalSubPortfolio.hide()"
              >
                <i class="icon-close"></i>
              </div>
            </div>
            <div class="modal-customize-abs__modal-body">
              <treeselect
                :multiple="false"
                :options="options"
                :clearable="false"
                placeholder="Select SubPortFolio"
                v-model="value"
              />
              <br>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
    <!-- /.MODAL CHANGE SUB PORTFLIO -->

    <!-- MODAL CHANGE LANGUAGE -->
    <b-modal
      id="modal-language"
      :hide-footer="true"
      :hide-header-close="true"
      ref="modalChangeLanguage"
      centered
      class="modal-customize-abs"
    >
      <b-container class="bv-example-row">
        <b-row>
          <b-col sm="12">
            <div class="modal-customize-abs__modal-header">
              <div class="modal-customize-abs__modal-header--title">
                Change Language
              </div>
              <div
                class="modal-customize-abs__modal-header--icon"
                @click="$refs.modalChangeLanguage.hide()"
              >
                <i class="icon-close"></i>
              </div>
            </div>
            <div class="modal-customize-abs__modal-body">
              <div id="google_translate_element"></div>
              <!-- <ul class="box-languages">
                <li
                  v-for="(lang, index) in languages"
                  :key="index"
                  @click="handleChangeLang(lang.alias)"
                >
                  {{ lang.name }}
                </li>
              </ul> -->
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-modal>
    <!-- /.MODAL CHANGE LANGUAGE -->

    <simplert :useRadius="true"
              :useIcon="true"
              ref="simplert">
    </simplert>
  </div>
</template>

<script>

export default {
  mounted () {
    // cek if user login or not
    if (this.getDataUser() === undefined) {
      this.$router.replace({
        path: '/sign-in'
      })
      return
    }
    this.$i18n.locale = this.getDataUser().Language
    this.getAliasLanguage()
    
    this.getSubportfolio()
    this.value = this.getDataUser().SubPortfolioCd
    this.label = this.getDataUser().label
    this.Username =  this.getDataUser().Username
  },
  data () {
    return {
      language: null,
      classHeader: false,
      languages: [
        {
          name: 'Indonesia',
          alias: 'id'
        },
        {
          name: 'English',
          alias: 'en'
        }
      ],
      dropdownMenuHeaderTop: false,
      // options: [{
      //           id: 'fruits',
      //           label: 'Fruits'
      //           }],
      options: [],
      value: null,
      statusValue: false,
      label: '',
      Username: ''
    }
  },
  computed: {
    paddingHeader () {
      return this.$store.getters.paddingHeader
    }
  },
  watch: {
    value: function (newData, oldData) {
      if (oldData === null) {
        return
      }
      if (this.statusValue) {
        this.statusValue = false
        return
      }

      if (newData != undefined) {
        this.changeSubPortFolio(newData, oldData)
      } else {
        this.statusValue = true
        this.value = oldData
        this.$forceUpdate()
      }
    },
    $route (to, from) {
      if (this.$route.path === '/') {
        this.classHeader = true
      } else {
        this.classHeader = false
      }
    }
  },
  methods: {
    showChangeSubportfolio () {
      // this.statusValue = true
      this.value = this.getDataUser().SubPortfolioCd
      this.$refs.modalSubPortfolio.show()
    },
    getAliasLanguage () {
      var lang = this.getDataUser().Language
      var data = this.languages.filter(function(data) {
        return data.alias == lang
      })
      this.language = data[0].name
    },
    handleChangeLang (lang) {
      // set language to localStorage
      var lsDataUser = localStorage.lsDataUser

      lsDataUser = JSON.parse(lsDataUser)
      lsDataUser.Language = lang

      lsDataUser = JSON.stringify(lsDataUser)
      localStorage.lsDataUser = lsDataUser

      this.getAliasLanguage()
      
      this.$i18n.locale = lang
      this.$refs.modalChangeLanguage.hide()
      location.reload()
      // this.dropdownMenuHeaderTop = !this.dropdownMenuHeaderTop
    },
    getSubportfolio () {
      var param = {
        UserId: this.getDataUser().UserId
      }
      this.postEncode(this.getUrlSubportfolio(), param)
        .then((response) => {
          if (response == null) return
          this.options = response.Data
        })
    },
    changeSubPortFolio (subPortFolio, oldData) {
      this.$swal({
        title: 'Confirmation',
        text: 'Are you sure want to change subportfolio ?',
        // text: 'Are you sure want to change subportfolio to ' + subPortFolio + ' ?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        if (result.value) {
          var param = {
            UserId: this.getDataUser().UserId,
            SubPortfolioCd: this.value
          }
          this.postEncode(this.getUrlChangeSubportfolio(), param)
            .then((response) => {
              if (response == null) return

              var data = response.Data
              var dataUser = data.DataUser[0]

              var favoriteMenu = JSON.stringify(data.FavoriteMenu)
              var menu = JSON.stringify(data.Menu)

              // const session = {
              //   sessionId: data.Session_Id,
              //   sessionIdle: data.Idle
              // }
              // set language hardcode
              dataUser.Language = 'en'
              localStorage.lsDataUser = JSON.stringify(dataUser)

              localStorage.lsFavoriteMenu = favoriteMenu
              localStorage.lsMenu = menu
              this.$parent.$children[1].$children[2].changeFavMenu(favoriteMenu)
              this.label = this.getDataUser().label
              // localStorage.lsSession = JSON.stringify(session)
              this.$router.push('/')
              this.$refs.modalSubPortfolio.hide()
            })
          // this.dropdownMenuHeaderTop = !this.dropdownMenuHeaderTop
        } else {
          this.statusValue = true
          this.value = oldData
        }
      })
    },
    showError (title, message) {
      // Use sweetalert2
      this.$swal(title, message, 'error')
    },
    signOut () {
      this.closeBigMenu()
      let confirmFn = function () {
        var param =
        {
          UserLog: this.getDataUser().UserId
        }
        this.postEncode(this.getUrlLogout(), param)
          .then((response) => {
            if (response == null) return
            // this.options = response.Data
            this.doClearLocalStorage()

            // push user to sign-in
            this.$router.replace({
              path: '/sign-in'
            })
            // this.dropdownMenuHeaderTop = !this.dropdownMenuHeaderTop
          })
      }
      let obj = {
        title: 'Close System',
        message: 'If you close the system, all processes will be stopped',
        type: 'info',
        useConfirmBtn: true,
        onConfirm: confirmFn
      }
      this.$refs.simplert.openSimplert(obj)
    },
    // closeHeader () {
    //   alert('woi')
    // }
    closeHeader () {
      // alert('woi')
      this.dropdownMenuHeaderTop = false
    }
  },
  // events: {
  //   // nameOfCustomEventToCall: function (event) {
  //   //   // do something - probably hide the dropdown menu / modal etc.
  //   // }
  //   closeHeader () {
  //     // this.dropdownMenuHeaderTop = !this.dropdownMenuHeaderTop
  //     alert('wio')
  //   }
  // }
  directives: {
    'click-outside': {
      bind: function(el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== 'function') {
        	const compName = vNode.context.name
          let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
          if (compName) { warn += `Found in component '${compName}'` }
          
          console.warn(warn)
        }
        // Define Handler and cache it on the element
        const bubble = binding.modifiers.bubble
        const handler = (e) => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
          	binding.value(e)
          }
        }
        el.__vueClickOutside__ = handler

        // add Event Listeners
        document.addEventListener('click', handler)
			},
      
      unbind: function(el, binding) {
        // Remove Event Listeners
        document.removeEventListener('click', el.__vueClickOutside__)
        el.__vueClickOutside__ = null

      }
    }
  }
}
</script>
<style>
  /* .goog-te-banner-frame .skiptranslate {
    display: none !important;
  } */
  .goog-te-banner-frame {
    display: none !important;
  }
  body {
    top: 0px !important;
  }
</style>

