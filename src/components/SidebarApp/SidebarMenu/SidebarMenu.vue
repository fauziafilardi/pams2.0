<template>
  <!-- <span> -->
    <div class="sidebar-app__box-menu">
      <div class="list-menus" v-for="(fm, index) in favoriteMenus" :key="index" @click="doCallMenu(fm)">
        <div class="icon">
          <i class="icon-star"></i>
        </div>
        <div class="text" v-if="textMenu">
          <span>{{fm.TextMenu}}</span>
        </div>
      </div>
      <!-- <div v-for="i in 400" :key="i" class="list-menus">
        <div class="icon">
          <i class="icon-star"></i>
        </div>
        <div class="text">
          <span>Module Access Entry</span>
          <span v-if="i === 400">{{ i }}</span>
        </div>
      </div> -->
    </div>
  <!-- </span> -->
</template>

<script>
export default {
  computed: {
    textMenu () {
      return this.$store.getters.textMenu
    }
  },
  data() {
    return {
      favoriteMenus: []
    }
  },
  created: function() {
    // this.favoriteMenus = JSON.parse(localStorage.lsFavoriteMenu)
    this.favoriteMenus = this.getFavoriteMenu()
  },
  methods: {
    doCallMenu: function(menu) {
      // localStorage.setItem('lsOptionSeq', JSON.stringify(menu))
      this.$router.push(menu.menu_url)
      this.closeBigMenu()
      // this.$store.commit('setByPassCancel', false)
      this.$store.commit('setIsPost', false)
      this.$store.commit('setSearch1', '')
      this.$store.commit('setSearch2', '')
      this.$store.commit('setSearch3', '')
      this.$store.commit('setPsMenu', menu)
      // this.$store.commit('setStatusLoader', true)
    },
    changeFavMenu (data) {
      this.favoriteMenus = JSON.parse(data)
    }
  }
}
</script>
