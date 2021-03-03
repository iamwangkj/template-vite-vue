<template>
  <div class="section">
    <div class="section-title">产品参数</div>
    <div class="div">品牌：FASUM（花芯）</div>
    <div class="div">品名：项链</div>
    <div class="div">材质：S925银+猫眼石</div>
    <div class="div">链长：40cm+5cm（调节）</div>
    <div class="div">包装：标准包装、送礼包装</div>
    <!-- <img class="img" :src="img1" alt="" /> -->
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import img1 from '../assets/chicun1.png'

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
      img1: img1
    }
  }
})
</script>

<style scoped>
</style>
