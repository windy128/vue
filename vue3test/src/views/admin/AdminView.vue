<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 菜单数据
const menus = ref([
  {
    id: 1,
    name: '用户信息',
    path: '/admin/users',
    icon: 'fa fa-flash fa-fw'
  },
  {
    id: 2, 
    name: '管理员信息',
    path: '/admin/admins',
    icon: 'fa fa-flash fa-fw'
  },
  {
    id: 3,
    name: '宠物管理',
    path: '/admin/pets',
    icon: 'fa fa-sitemap fa-fw'
  },
  {
    id: 4,
    name: '领养管理',
    path: '/admin/adopts',
    icon: 'fa fa-sitemap fa-fw'
  },
  {
    id: 5,
    name: '评论管理',
    path: '/admin/comments',
    icon: 'fa fa-sitemap fa-fw'
  }
])

// 显示用户信息
const showUserInfo = () => {
  router.push('/admin/profile')
}

// 退出登录
const logout = async () => {
  try {
    // 调用退出登录接口
    await fetch('/api/admin/logout')
    router.push('/admin/login')
  } catch (error) {
    console.error('退出失败:', error)
  }
}
</script>

<template>
  <div id="wrapper">
    <!-- 导航栏部分 -->
    <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
      <div class="navbar-header">
        <a class="navbar-brand" href="">宠物领养管理系统</a>
      </div>
      
      <!-- 顶部导航栏 -->
      <ul class="nav navbar-top-links navbar-right">
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">
            <i class="fa fa-user fa-fw"></i>
            <i class="fa fa-caret-down"></i>
          </a>
          <ul class="dropdown-menu dropdown-user">
            <li>
              <a href="#" @click.prevent="showUserInfo">
                <i class="fa fa-user fa-fw"></i>个人信息
              </a>
            </li>
            <li>
              <a href="#" @click.prevent="logout">
                <i class="fa fa-sign-out fa-fw"></i>退出登录
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>

    <!-- 左侧导航栏 -->
    <div class="navbar-default sidebar" role="navigation">
      <div class="sidebar-nav navbar-collapse">
        <ul class="nav" id="side-menu">
          <li v-for="menu in menus" :key="menu.id">
            <router-link :to="menu.path">
              <i :class="menu.icon"></i> {{ menu.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- 页面内容 -->
    <div id="page-wrapper">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.navbar-brand {
  color: #fff;
}

.sidebar {
  margin-top: 51px;
}

#page-wrapper {
  padding: 15px;
  min-height: 568px;
  background-color: #fff;
}

@media(min-width:768px) {
  #page-wrapper {
    position: inherit;
    margin: 0 0 0 250px;
    padding: 0 30px;
    border-left: 1px solid #e7e7e7;
  }
}
</style> 