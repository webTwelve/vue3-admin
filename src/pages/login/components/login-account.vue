<template>
  <div class="account-box">
    <el-form
      class="login-form"
      :rules="account_rules"
      :model="account"
      ref="formElRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, defineExpose } from 'vue'
import { account_rules } from '../config/login-config'
import { ElForm } from 'element-plus'
import useCommonStore from '@/store/common'
const account = reactive({
  name: '',
  password: ''
})
const formElRef = ref<InstanceType<typeof ElForm>>()
const commonStore = useCommonStore()
const LoginAccount = () => {
  formElRef.value?.validate((valid) => {
    if (valid) {
      commonStore.accountLoginAction(account)
    }
  })
}
defineExpose({
  LoginAccount
})
</script>

<style lang="less" scoped>
.login-form {
  width: 300px;
}
</style>
