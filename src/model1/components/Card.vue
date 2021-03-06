<template>
  <div class="card">
    <img :src="img6" alt="图片错误" />
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import img6 from `../imgs/d6.jpg`

const vm = defineComponent({
  props: {
    filename: String
  },
  setup (props) {},
  data () {
    return {
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
  margin: 20px auto;
  img {
    width: 100%;
  }
}
</style>
