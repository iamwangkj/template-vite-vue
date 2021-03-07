<template>
  <div>
    <!-- d1 -->
    <img src="./imgs/d1.jpg" alt="" class="part">
    <!-- d2 -->
    <div class="part">
      <div class="d d2"></div>
      <div class="text" style="margin-right:10px;">
        <div class="title">手工微镶嵌</div>
        <div class="desc">做工精致，素雅清丽，琳琅幻彩，璀璨炫目。</div>
      </div>
    </div>
    <!-- d3 -->
    <div class="part">
      <div class="text" style="margin-left:10px;">
        <div class="title">925银打造</div>
        <div class="desc">925银比普通银拥有更佳的硬度，不易氧化，不易过敏。</div>
      </div>
      <div class="d d3"></div>
    </div>
    <div class="part d d4"></div>
    <img src="./imgs/d5.jpg" alt="" class="part">
    <img src="./imgs/d6.jpg" alt="" class="part">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
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

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  font-size: 24px;
  // text-shadow: 2px 2px 1px #d6d6d6;
  /* background-color: #fefdf8; */
}

.part {
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.text {
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    color: #4c4c4c;
    font-size: 34px;
    font-weight: bold;
    font-style: italic;
    text-align: center;
    border-bottom: 6px solid #464e57;
    margin-bottom: 50px;

  }
  .desc {
    color: #999;
    font-size: 24px;
    // text-shadow: 2px 2px 1px #d6d6d6;
  }
}

.d {
  height: 550px;
}
.d1 {
  width: 100%;
  background: url('./imgs/d1.jpg') center/cover no-repeat;
}

.d2 {
  width: 450px;
  background: url('./imgs/d2.jpg') center/cover no-repeat;
}

.d3 {
  width: 450px;
  background: url('./imgs/d3.jpg') center/cover no-repeat;
}

.d4 {
  width: 100%;
  background: url('./imgs/d4.jpg') center/cover no-repeat;
}

img {
  width: 100%;
}

</style>
