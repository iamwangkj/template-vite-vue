<template>
  <div>
    <div class="card">
      <img :src="img1" alt="图片错误" />
    </div>
    <div class="section card">
      <img :src="img2" alt="图片错误" />
    </div>
    <div class="section card">
      <img :src="img3" alt="图片错误" />
    </div>
    <div class="section card">
      <img :src="img4" alt="图片错误" />
    </div>
    <div class="section card">
      <img :src="img5" alt="图片错误" />
    </div>
    <div class="section card">
      <img :src="img6" alt="图片错误" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import img1 from '../imgs/d1.jpg'
import img2 from '../imgs/d2.jpg'
import img3 from '../imgs/d3.jpg'
import img4 from '../imgs/d4.jpg'
import img5 from '../imgs/d5.jpg'
import img6 from '../imgs/d6.jpg'

const vm = defineComponent({
  props: {
    filename: String
  },
  setup (props) {},
  data () {
    return {
      img1,
      img2,
      img3,
      img4,
      img5,
      img6
    }
  }
})

export default vm
</script>

<style scoped lang="scss">
.card {
  box-sizing: border-box;
  width: 100%;
  max-width: 700px;
  min-height: 10px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 5px 5px 10px #999;
  margin: 0 auto 30px auto;
  img {
    width: 100%;
  }
}
</style>
