<template>
  <div style="width: 100%; height: 100vh; background-color: darkcyan; overflow: hidden">
    <div style="width: 400px; margin: 150px auto">
      <div style="color: white; font-size: 30px; text-align: center; padding: 30px">欢迎注册</div>
      <el-form ref="form" :model="form" size="default" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="用户名" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" show-password placeholder="密码" />
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.confirm" show-password placeholder="确认密码" />
        </el-form-item>
        <el-form-item>
          <el-button style="width: 100%" type="primary" @click="register">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";

export default {
  name: "Register",
  data() {
    return {
      form: {},
      rules: {
        username: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    register() {
      if (this.form.password !== this.form.confirm)  {
        this.$message({
          type: "error",
          message: "两次密码不一致"
        })
        return
      }
      request.post("/user/register", this.form).then(res => {
        if (res.code === '0') {
          this.$message({
            type: "success",
            message: "注册成功"
          })
          this.$router.push("/login")  // 注册成功后跳转
        } else {
          this.$message({
            type: "error",
            message: res.msg
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>