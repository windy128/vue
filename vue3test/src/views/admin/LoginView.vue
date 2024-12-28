<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const errorMsg = ref('')

const handleLogin = async () => {
  try {
    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
    })
    
    if (response.ok) {
      router.push('/admin')
    } else {
      const data = await response.json()
      errorMsg.value = data.message || '登录失败'
    }
  } catch (error) {
    console.error('登录失败:', error)
    errorMsg.value = '登录失败，请稍后重试'
  }
}
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <h2>宠物领养管理系统</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <input
            type="text"
            v-model="username"
            class="form-control"
            placeholder="用户名"
            required
          >
        </div>
        <div class="form-group">
          <input
            type="password"
            v-model="password"
            class="form-control"
            placeholder="密码"
            required
          >
        </div>
        <div v-if="errorMsg" class="alert alert-danger">
          {{ errorMsg }}
        </div>
        <button type="submit" class="btn btn-primary btn-block">登录</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
}

.login-box {
  width: 100%;
  max-width: 400px;
  padding: 30px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-box h2 {
  text-align: center;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}
</style> 