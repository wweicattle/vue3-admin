<template>
  <div>{{ $store.state.name }}</div>
  <el-button type="primary">nishuode</el-button>
  <el-upload
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    multiple
    :limit="3"
    :on-exceed="handleExceed"
    :file-list="fileList"
  >
    <el-button size="small" type="primary">点击上传</el-button>
    <template #tip>
      <div class="el-upload__tip">只能上传 jpg/png 文件，且不超过 500kb</div>
    </template>
  </el-upload>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
const aaaa = 'this is test demo';
const asss = 33;
const asssasasasasasas = 32;
import { defineComponent } from 'vue';
const as = 3243;
console.log(323);
const a = 2020;
import HelloWorld from './components/HelloWorld.vue';
import { useStore } from 'vuex';
let asa: string;
asa = '32';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      fileList: [
        {
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },
        {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ]
    };
  },
  methods: {
    handleRemove() {
      // console.log(file, fileList);
    },
    handlePreview() {
      // console.log(file);
    },

  },
  created() {
    console.log(21);
    let f = useStore('name');
    console.log(f);
  }
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
