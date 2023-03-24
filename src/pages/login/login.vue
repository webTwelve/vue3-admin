<template>
  <div class="login">
    <div class="login-title">后台管理系统</div>
    <el-tabs type="border-card" class="demo-tabs" v-model="loginType">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon style="margin-right: 8px"><Avatar /></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon style="margin-right: 8px"><calendar /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone ref="phoneRef" />
      </el-tab-pane>
      <el-tab-pane name="wechat">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon style="margin-right: 8px"><calendar /></el-icon>
            <span>微信登录</span>
          </span>
        </template>
        微信登录
      </el-tab-pane>
      <div class="account-control">
        <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
        <el-link type="primary">忘记密码</el-link>
      </div>
      <el-button type="primary" class="login-btn" @click="handleLoginClick"
        >立即登录</el-button
      >
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import LoginAccount from './components/login-account.vue'
import LoginPhone from './components/login-phone.vue'
import { ref } from 'vue'
let isKeepPassword = ref(false)
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const phoneRef = ref<InstanceType<typeof LoginPhone>>()
const loginType = ref('account')
const handleLoginClick = () => {
  if (loginType.value == 'account') {
    accountRef.value?.LoginAccount()
  } else {
    phoneRef.value?.LoginPhone()
  }
}
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  background: url('@/assets/images/banner.webp');
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 14vh;
  box-sizing: border-box;
  .login-title {
    font-size: 40px;
    font-weight: 600;
  }
  .account-control {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
.custom-tabs-label {
  display: flex;
  align-items: center;
  justify-content: center;
}

.demo-tabs {
  margin-top: 20px;
}
</style>
