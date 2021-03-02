<template>
  <div class="section">
    <div class="section-title">亮点</div>

    <img class="img" :src="img1" alt="" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import light1 from '../assets/chicun1.png'

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup (props) {
    console.log('传入新的参数setup=', props)
    const count = ref(0)
    return { count }
  },
  data () {
    return {
      light1
    }
  }
})
</script>

<style scoped>
.img {
  width: 100%;
}
</style>
