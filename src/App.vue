<template>
  <div id="apps">
    <el-input v-model="input">input</el-input>
    <div class="name">wuwkaiasnad</div>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
// import {useStore} form "
export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const input = ref('sadsd');
    onMounted((val) => {
      console.log(111);
    });
    return {
      input
    };
  }
});
</script>

<style lang="scss" scoped>
/deep/ .el-input {
  font-size: 10px;
  // color: red !important;
  .el-input__inner {
    color: red;
  }
}
#app,
#apps {
  height: 100%;
  width: 100%;
}
.name {
  font-size: 40px;
  color: red;
}
</style>
<style>
html,
body {
  height: 100%;
  width: 100%;
}
</style>
