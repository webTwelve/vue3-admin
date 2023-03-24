<template>
  <div class="header">
    <div class="header-info">
      <div class="header-left">
        <div class="fold"></div>
      </div>
      <UserInfo />
    </div>
  </div>
</template>

<script lang="ts" setup>
import UserInfo from './components/userInfo.vue'
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  .fold {
    display: flex;
    align-items: center;
  }
  .header-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header-left {
    display: flex;
    align-items: center;
  }
}
</style>
