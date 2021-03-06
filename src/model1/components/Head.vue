<template>
  <div class="section head">
    <div class="title-cn">{{title}}</div>
    <div class="sku"></div>
    <div class="circle circle1">{{text1}}</div>
    <div class="circle circle2">{{text2}}</div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '花芯'
    },
    text1: {
      type: String,
      default: '灵动'
    },
    text2: {
      type: String,
      default: '闪耀'
    }
  },
  setup (props) {},
  data () {
    return {

    }
  }
})
</script>

<style scoped>
.head {
  width: 750px;
  height: 905px;
  background: url('../assets/bg-head.jpg') center/cover no-repeat;
  position: relative;
}

.title-cn {
  /* background: linear-gradient(to right, #fadcca, #e78162); */
  color: #c97861;
  font-size: 42px;
  text-align: center;
  position: relative;
  top: 190px;
}

.sku {
  width: 500px;
  height: 500px;
  background: url('../imgs/d0.png') center bottom/cover no-repeat;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  top: 200px;
}

.circle {
  background: url('../assets/icon-circle.png') center/cover no-repeat;
  color: #e78162;
  text-align: center;
}

.circle1 {
  width: 168px;
  height: 155px;
  line-height: 155px;
  color: #e78162;
  font-size: 40px;
  position: absolute;
  left: 20px;
  top: 438px;
}

.circle2 {
  width: 116px;
  height: 116px;
  line-height: 116px;
  background: url('../assets/icon-circle.png') center/cover no-repeat;
  font-size: 36px;
  position: absolute;
  left: 540px;
  top: 580px;
}
</style>
