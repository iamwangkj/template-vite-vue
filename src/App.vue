<template>
  <div class="app">
    <button @click="generate">生成</button>
    <div ref="img1">
      <Info />
    </div>
    <div ref="img2">
      <Lightspot />
    </div>
    <!-- 以下是预览图片 -->
    <div class="preview">
      <h1>以下是预览图片</h1>
      <a :href="imgUrl1" download="1" class="part-img-wrapper"><img :src="imgUrl1" /></a>
      <a :href="imgUrl2" download="2" class="part-img-wrapper"><img :src="imgUrl2" /></a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import html2canvas from 'html2canvas'
import Info from './components/Info.vue'
import Lightspot from './components/Lightspot.vue'

export default defineComponent({
  name: 'App',
  components: {
    Info,
    Lightspot
  },
  data () {
    return {
      imgUrl1: '',
      imgUrl2: ''
    }
  },
  mounted () {
  },
  methods: {
    generate () {
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
  /* background: linear-gradient(to right, pink, white); */
}

.section {
  padding: 0 10px 20px;
}
.section-title {
  font-size: 20px;
}

.preview {
  background-color: blue;
}

.part-img-wrapper {
  margin-bottom: 10px;
  background-color: #000;
}
</style>
