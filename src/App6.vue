<template functional>
  <!-- <div v-on="listeners"> -->
  <div v-on="data.on">
    {{ props }} <br>
    {{ data }} <br>
    {{ children }} <br>
    {{ slots().default }} <br>
    <!-- {{ listeners }} -->
    {{ injections }}
  </div>
</template>

<script>
export default {
  functional: true,
  inject: ['pmsg'],
  data () {
    return {

    }
  },
  render (h, context) {
    console.log(context)
    return h('div', 'test')
  }
}
</script>
