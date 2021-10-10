<template>
  <div class="home-contain names">
    <el-container>
      <el-header>
        <div class="name">wuweinishizuibangde</div>
        <img src="~@/assets/logo.png" alt />
        <div>wwcattle</div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            :collapse="isCollapse"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-sub-menu index="1">
              <template #title>
                <i class="el-icon-location"></i>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group>
                <template #title>
                  <span>Group One</span>
                </template>
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>
                  <span>item four</span>
                </template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <template #title>Navigator Two</template>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <template #title>Navigator Three</template>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <template #title>Navigator Four</template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
export default {
  name: 'App'
};
</script>
<style scoped lang="scss">
.home-contain {
  height: 100%;
  .el-container {
    height: 100%;
    .el-header {
      background: #999;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      img {
        height: 60px;
      }
    }
    .el-aside {
      background: #409eff;
    }
  }
}
</style>
