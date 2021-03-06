<template>
  <div>
    <Info name="樱花" texture="" />
    <Card />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Info from './components/Info.vue'
import Card from './components/Card.vue'

export default defineComponent({
  name: 'App',
  components: {
    Card,
    Info
  },
  data () {
    return {}
  },
  mounted () {
  },
  methods: {
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
  font-size: 24px;
  text-shadow: 2px 2px 1px #d6d6d6;
  /* background-color: #fefdf8; */
}

</style>
