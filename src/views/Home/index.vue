<template>
  <div class="loginContain name">
    <div class></div>
    <div class="user-contain">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="用户名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="loadbtn" size="small"
            >登录</el-button
          >
        </el-form-item>
      </el-form>

      <!-- <div>
        用户名：
        <input type="text" ref="input" />
      </div>
      <div>
        密码：
        <input type="text" />
      </div>
      <el-button @click="loadbtn">登录</el-button>-->
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted ,computed} from 'vue';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'App',
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const loadbtn: any = function () {
      console.log(store);
      // let gg = store.dispatch('Login/loginBtn').then((da) => {
      //   let { data } = da;
      //   router.push('/about');
      // });
    };
    console.log(store.state);
    // const a=computed(val=>store.state.login.token)
    // console.log(a.value)
    return {
      loadbtn
    };
  }
});
</script>

<script lang="ts" setup></script>
<style lang="scss">
body,
html {
  height: 100%;
  width: 100%;
}
.user-contain {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0;
  right: 0;
  height: 200px;
  width: 400px; // width: 300px;
  span {
    display: inline-block;
    // width: 300px;
  }
}
</style>
