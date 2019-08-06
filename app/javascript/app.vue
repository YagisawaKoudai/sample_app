<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Index from './src/components/index.vue';

export default {
  components: {
    Index
  },
  data: function () {
    return {
      message: "Hello Vue!"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
