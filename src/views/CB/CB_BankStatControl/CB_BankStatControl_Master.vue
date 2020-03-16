<template>
  <div class="height--full">
    <ABSMasterPageVuex2 :prop="property" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      property: {
        tabPath1:'views/CB/CB_BankStatControl/PageLevel_1',
        tabPath2:'views/CB/CB_BankStatControl/PageLevel_2'
      }
    }
  },
  beforeCreate(){
    
  },
  beforeMount(){
    
  }
}
</script>
