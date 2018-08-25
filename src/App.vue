<template>
  <div>
    <ui-switch
      v-model="value2"
      active-color="#13ce66"
      inactive-color="#ff4949"
      @change="handlerChange"
    />
  </div>
</template>
<script>
// import uiSwitch from '@/Switch.vue'
import '../dist/simpleUI.css'
import { uiSwitch } from '../dist/simpleUI.js'
export default {
  components: {
    uiSwitch
  },
  data () {
    return {
      value2: true
    }
  },
  methods: {
    handlerChange () {
      console.log('handlerChange')
    }
  }
}
</script>
