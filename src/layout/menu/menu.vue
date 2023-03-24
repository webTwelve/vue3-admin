<template>
  <div class="menu">
    <div class="logo">
      <img class="img" src="@/assets/images/logo.svg" alt="" />
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
      :collapse="true"
      background-color="#e7f7ff"
    >
      <el-menu-item
        index="1"
        @click="handleMenuClick({ url: '/main/analysis' })"
      >
        <el-icon><location /></el-icon>
        <template #title>Navigator One</template>
      </el-menu-item>
      <el-menu-item
        index="2"
        @click="handleMenuClick({ url: '/main/product' })"
      >
        <el-icon><Position /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" @click="handleMenuClick({ url: '/main/story' })">
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4" @click="handleMenuClick({ url: '/main/system' })">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import router from '@/router'

const handleMenuClick = (item: any) => {
  router.push(item.url)
}
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath, 1)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="less" scoped>
.menu {
  height: 100%;
  background-color: #e7f7ff;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
      white-space: nowrap;
    }
  }
}
</style>
