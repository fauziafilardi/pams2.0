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
          //  tabPath1:'views/GL/GL_CurrencyRate/PageLevel_1', 
          tabPath1:'views/GL/GL_CurrencyRate/PageLevel_1',
          tabPath2:'views/GL/GL_CurrencyRate/PageLevel_2'        
      }
    }
  },
  beforeCreate(){
    
  },
  beforeMount(){
    
  }
}
</script>
