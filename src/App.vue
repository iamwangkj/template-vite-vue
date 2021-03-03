<template>
  <div class="app">
    <button @click="generate">生成</button>

    <div ref="img0">
      <Head />
    </div>
    <div ref="img1">
      <Info />
    </div>
    <div ref="img2">
      <Lightspot />
    </div>
    <!-- 以下是预览图片 -->
    <div class="preview">
      <h1>以下是预览图片</h1>
      <a :href="imgUrl0" download="0" class="part-img-wrapper"><img :src="imgUrl0" /></a>
      <a :href="imgUrl1" download="1" class="part-img-wrapper"><img :src="imgUrl1" /></a>
      <a :href="imgUrl2" download="2" class="part-img-wrapper"><img :src="imgUrl2" /></a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import html2canvas from 'html2canvas'
import Head from './components/Head.vue'
import Info from './components/Info.vue'
import Lightspot from './components/Lightspot.vue'

export default defineComponent({
  name: 'App',
  components: {
    Head,
    Info,
    Lightspot
  },
  data () {
    return {
      imgUrl0: '',
      imgUrl1: '',
      imgUrl2: ''
    }
  },
  mounted () {
  },
  methods: {
    generate () {
      html2canvas(this.$refs.img0).then((canvas) => {
        const base64Str = canvas.toDataURL('image/jpeg')
        this.imgUrl0 = base64Str
      })

      html2canvas(this.$refs.img1).then((canvas) => {
        const base64Str = canvas.toDataURL('image/jpeg')
        this.imgUrl1 = base64Str
      })

      html2canvas(this.$refs.img2).then((canvas) => {
        const base64Str = canvas.toDataURL('image/jpeg')
        this.imgUrl2 = base64Str
      })
    }
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
  /* background: linear-gradient(to right, pink, white); */
}

.section {
  box-sizing: border-box;
  padding: 0 10px 20px;
}
.section-title {
  /* font-size: 20px; */
}

.preview {
  background-color: blue;
}

.part-img-wrapper {
  margin-bottom: 10px;
  background-color: #000;
}
</style>
