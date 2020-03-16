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
           tabPath1:'views/TN/TN_PropertyFloorPlan/PageLevel_1',
           tabPath2:'views/TN/TN_PropertyFloorPlan/PageLevel_2',
           tabPath3:'views/TN/TN_PropertyFloorPlan/PageLevel_3'                
      }
    }
  },
  beforeCreate(){
    
  },
  beforeMount(){
    
  }
}
</script>
