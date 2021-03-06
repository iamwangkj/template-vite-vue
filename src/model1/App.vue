<template>
  <Head title="鱼生有你" />
  <Info />
  <Show />
  <Card />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Head from './components/Head.vue'
import Info from './components/Info.vue'
import Show from './components/Show.vue'
import Card from './components/Card.vue'

export default defineComponent({
  name: 'App',
  components: {
    Card,
    Head,
    Info,
    Show
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
  background-color: #fefdf8;
}

.section {
  padding-bottom: 20px;
}

</style>
