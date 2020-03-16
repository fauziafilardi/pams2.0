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
        tabPath1: 'views/AR/AR_InvoiceDepositVuex/PageLevel_1',
        // tabPath2: 'views/CM/CM_CurrencyMaster/PageLevel_2',
        // tabPath3: 'views/CM/CM_CurrencyMaster/PageLevel_3',
      }
    }
  }
}
</script>