<template>
  <Info />
  <Lightspot />
  <Info />
  <Info />
  <Info />
  <Info />
  <Info />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Info from './components/Info.vue'
import Lightspot from './components/Lightspot.vue'

export default defineComponent({
  name: 'App',
  components: {
    Info,
    Lightspot
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background: linear-gradient(to right, pink, white);
}

.section {
  padding: 0 10px 20px;
}
.section-title {
  font-size: 20px;
}
</style>
