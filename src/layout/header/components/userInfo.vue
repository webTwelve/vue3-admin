<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <div class="avatar-wrap">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <div class="userName">{{ userName }}</div>
      </div>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>退出登录</el-dropdown-item>
        <el-dropdown-item>系统管理</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import useCommonStore from '@/store/common'
import { computed } from 'vue'
const commonStore = useCommonStore()
const userName = computed(() => commonStore.userInfo.name)
</script>

<style lang="less" scoped>
.el-dropdown-link {
  display: flex;
  align-items: center;
  .avatar-wrap {
    display: flex;
    align-items: center;
    cursor: pointer;
    .userName {
      margin-left: 10px;
    }
  }
}
</style>
