<template>
  <div id="sidebar-app">
    <div class="sidebar-app" :style="{ width: widthSidebar}" style="z-index:1">
      <div class="sidebar-app__hide-text-labels" @click="offText" v-if="textMenu">
        <i class="icon-arrow-left"></i>
      </div>
      <div class="sidebar-app__hide-text-labels" @click="onText" v-else>
        <i class="icon-arrow-right"></i>
      </div>
      <sidebar-fixed></sidebar-fixed>
      <sidebar-title></sidebar-title>
      <sidebar-menu></sidebar-menu>
      <div class="sidebar-app__divider-favorite">
        <hr />
      </div>
      <div class="sidebar-app__box-menu-fixed">
        <div class="list-menus" @click="signOut">
          <div class="icon">
            <i class="icon-logout"></i>
          </div>
          <div class="text" v-if="textMenu">
            <span>Sign Out</span>
          </div>
        </div>
      </div>

      <simplert :useRadius="true" :useIcon="true" ref="simplert1"></simplert>
    </div>
  </div>
</template>

<script>
import SidebarFixed from "@/components/SidebarApp/SidebarFixed/SidebarFixed";
import SidebarTitle from "@/components/SidebarApp/SidebarTitle/SidebarTitle";
import SidebarMenu from "@/components/SidebarApp/SidebarMenu/SidebarMenu";

export default {
  components: {
    SidebarMenu,
    SidebarTitle,
    SidebarFixed
  },
  computed: {
    widthSidebar() {
      return this.$store.getters.widthSidebar;
    },
    textMenu() {
      return this.$store.getters.textMenu;
    }
  },
  methods: {
    onText() {
      this.$store.dispatch("handlePaddingHeader", "225px");
      this.$store.dispatch("handlePaddingLeftContent", "230px");
      this.$store.dispatch("handleWidthSidebar", "230px");
      this.$store.dispatch("handleWidthRightbar", "0px");
      this.$store.dispatch("handleTextMenu", true);
    },
    offText() {
      this.$store.dispatch("handlePaddingHeader", "50px");
      this.$store.dispatch("handlePaddingLeftContent", "55px");
      this.$store.dispatch("handleWidthSidebar", "55px");
      this.$store.dispatch("handleWidthRightbar", "0px");
      this.$store.dispatch("handleTextMenu", false);
    },
    signOut() {
      this.closeBigMenu();
      let confirmFn = function() {
        var param = {
          UserLog: this.getDataUser().UserId
        };
        this.postEncode(this.getUrlLogout(), param).then(response => {
          if (response == null) return;
          // this.options = response.Data
          this.doClearLocalStorage();

          // push user to sign-in
          this.$router.replace({
            path: "/sign-in"
          });
          // this.dropdownMenuHeaderTop = !this.dropdownMenuHeaderTop
        });
      };
      let obj = {
        title: "Close System",
        message: "If you close the system, all processes will be stopped",
        type: "info",
        useConfirmBtn: true,
        onConfirm: confirmFn
      };
      this.$refs.simplert1.openSimplert(obj);
    }
  }
};
</script>
