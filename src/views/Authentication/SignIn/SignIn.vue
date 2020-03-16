<template>
  <div class="abs-login">
    <!-- <div class="abs-login__box-position-left">
      <div class="box-information">
        <div class="box-information__logo">
          <img :src="require('@/assets/login.png')" alt="">
        </div>
        <div class="box-information__title">
          login users - pams app
        </div>
        <div class="box-information__subtitle">
          Please insert your Username or Password
        </div>
        <div class="box-information__copyright">
          &copy; Copyright 2018 - PT. Absolute Connection
        </div>
      </div>
      <div class="bullet"></div>
    </div> -->
    <!-- <div> -->
      <div class="abs-login__box-position-right">
        <div class="box-layer-form">        
          <div class="box-login-form">
            <div style="text-align:center; padding-bottom:40px;">
              <!-- <div>
                <img src="@/assets/company_logo.jpg" style="width:115px;">
                PAMS
              </div> -->
              <div style="color:white; font-size:30px; font-weight: bold;">
                PAMS
              </div>          
            </div>
            <b-form @submit.prevent="onSubmit">
              <div class="form-label-group">
                <!-- <label for="inputUsername">Username</label> -->
                <input
                  v-model="userName"
                  type="text"
                  id="inputUsername"
                  class="form-control input-field" 
                  style="color:white !important;"
                  placeholder="Username"
                  autofocus
                  autocomplete="off"
                >
              </div>
              <div class="form-label-group">
                <!-- <label for="inputPassword">Password</label> -->
                <input
                  v-model="passWord"
                  type="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="Password"
                  autocomplete="off"
                >
              </div>
              <div class="checkbox mb-3">
                <label style="color:white !important;">
                  <input type="checkbox" v-model="rememberMe"> Remember me
                </label>
              </div>
              <button class="btn btn-big btn-block" type="submit">
                Login
              </button>
            </b-form>
          </div>
        </div>
      </div>
      <ABSLoader />
    </div>
  <!-- </div> -->
</template>

<script>
import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'
Vue.use(VueSweetalert2)

export default {
  data() {
    return {
      userName: null,
      passWord: null,
      rememberMe: false
    }
  },
  mounted() {
    // clear cookies
    // document.cookie = ""
    // jika dia mau sign-in sedangkan datanya masih ada di localStorage maka push ke dashboard
    if (this.getDataUser() != undefined) {
      this.$router.replace({
        path: '/'
      })
    } else {
      var cookies = document.cookie.split(';')
      if (cookies == "") {
        return
      }
      for (var i = 0; i < cookies.length; i++) {

        var x = cookies[i].split('=')
        
        if (x[0].trim() == 'username') {
          this.userName = x[1]
        } else if (x[0].trim() == 'password') {
          this.passWord = x[1]
        }
      }
      if (this.userName != null || this.passWord != null) {
        this.rememberMe = true
      }
    }
  },
  methods: {
    showAlert(title, message, icon) {
      // icon alert=>warning, error, success, info
      this.$swal(title, message, icon);
    },
    onSubmit () {
      this.$store.commit('setStatusLoader', true)
        var querystring = require("querystring");
          axios
          .post(
            this.getUrlLogin(),
            querystring.stringify({
                UserLog: this.userName,
                PassLog: this.passWord
              }),
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "application/json"
              }
            }
          )
          .then(response => {
            this.$store.commit('setStatusLoader', false)
            // response from API
            var responses = response.data;
            // console.log(responses);

            var error = responses.Error;
            var message = responses.Message;

            
            if (error) {
              this.showAlert('Warning', message, 'warning')
            } else {
              var data = responses.Data
              var dataUser = data.DataUser[0]

              document.cookie = 'googtrans=/en/' + dataUser.DefaultLanguage

              if (this.rememberMe) {
                var dataCookie = "username=" + this.userName// + '; path=/sign-in' + ''
                document.cookie = dataCookie

                dataCookie = "password=" + this.passWord// + '; path=/sign-in' + ''
                document.cookie = dataCookie
              }
              
              var favoriteMenu = JSON.stringify(data.FavoriteMenu)
              var menu = JSON.stringify(data.Menu)

              const session = {
                sessionId: data.Session_Id,
                sessionIdle: data.Idle
              }

              // set language hardcode
              dataUser.Language = 'en'

              localStorage.lsDataUser = JSON.stringify(dataUser)

              localStorage.lsFavoriteMenu = favoriteMenu
              localStorage.lsMenu = menu

              localStorage.lsSession = JSON.stringify(session)

              this.$router.push('/')
              location.reload()
            }
          })
          .catch(err => {
            // console.log(err)
            this.$store.commit('setStatusLoader', false)
          })
    }
  }
}
</script>

<style scoped>
.btn-login {
  background-color: #55B3FF;
  color: #ffffff;
}
.vue-treeselect__control {
  border-radius: 0px;
}
::placeholder {
  color: white !important;  
}
</style>
