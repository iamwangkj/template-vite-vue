<template>
  <div class="section head">
    <div class="title-cn">花芯</div>
    <div class="sku"></div>
    <div class="circle1">灵动</div>
    <div class="circle2">闪耀</div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  props: {},
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
  /* background: linear-gradient(to right, #733c2f, #e78162); */
  color: #c97861;
  font-size: 42px;
  text-align: center;
  position: relative;
  top: 190px;
}

.sku {
  width: 626px;
  height: 626px;
  background: url('../assets/sku1.png') center/contain no-repeat;
  margin: 0 auto;
  padding-top: 100px;
}

.circle1 {
  width: 168px;
  height: 155px;
  background: url('../assets/icon-circle.png') center/cover no-repeat;
  line-height: 155px;
  color: #e78162;
  text-align: center;
  font-size: 40px;
  position: absolute;
  left: 10px;
  top: 438px;
}

.circle2 {
  width: 116px;
  height: 116px;
  line-height: 116px;
  background: url('../assets/icon-circle.png') center/cover no-repeat;
  color: #e78162;
  text-align: center;
  font-size: 36px;
  position: absolute;
  left: 540px;
  top: 580px;
}
</style>
