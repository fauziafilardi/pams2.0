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
           tabPath1:'views/CM/CM_SIR4Checked/PageLevel_1'        
      }
    }
  },
  beforeCreate(){
    
  },
  beforeMount(){
    
  }
}
</script>
