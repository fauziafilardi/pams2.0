<template>
  <span>
    <b-button v-show="!disabled"
              size="sm"
              @click="clicked"
              :disabled="disabled"
              v-shortkey="shortKey"
              @shortkey="doShortkey"
              :class="classButton"
              :style="styleButton">
              <font-awesome-icon :icon="icon" :class="classIcon" />
              {{text}}
    </b-button>
    
    <b-button v-show="disabled"
              size="sm"
              @click="clicked"
              :disabled="disabled"
              class="btnList__btnDisabled"
              :style="styleButton">
              <font-awesome-icon :icon="icon" :class="classIcon" />
              {{text}}
    </b-button>
  </span>
</template>

<script>

export default {
  props: {
    // prop: {
      disabled: Boolean,
      text: String,
      icon: String,
      classIcon: String,
      classButton: String,
      shortKey: {type: Array, default: null},
      styleButton: String
    // }
  },
  data() {
    return {
    }
  },
  methods: {
      clicked () {
        this.$emit('click')
      },
      doShortkey () {
        this.$emit('shortKey')
      }
  },
}
</script>