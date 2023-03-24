<template>
  <div class="phone-box">
    <el-form class="login-form" :rules="phone_rules" :model="account">
      <el-form-item label="手机号" prop="tel">
        <el-input v-model="account.tel" />
      </el-form-item>
      <el-form-item label="验证码" prop="code" type="password">
        <div class="get-code">
          <el-input v-model="account.code" type="password" />
          <el-button type="primary" class="get-code-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, defineExpose } from 'vue'
import { phone_rules } from '../config/login-config'
const account = reactive({
  tel: '',
  code: ''
})
const LoginPhone = () => {
  console.log('手机号登录')
}
defineExpose({
  LoginPhone
})
</script>

<style lang="less" scoped>
.get-code {
  display: flex;
}
.get-code-btn {
  margin-left: 10px;
  font-size: 12px;
}
.login-form {
  width: 300px;
}
</style>
