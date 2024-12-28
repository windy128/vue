import { createRouter, createWebHistory } from 'vue-router'
import AdminView from '../views/admin/AdminView.vue'
import LoginView from '../views/admin/LoginView.vue'

const routes = [
    {
        path: '/admin/login',
        component: LoginView
    },
    {
        path: '/admin',
        component: AdminView,
        children: [
            {
                path: 'users',
                component: () => import('../views/admin/UsersView.vue')
            },
            {
                path: 'admins',
                component: () => import('../views/admin/AdminsView.vue')
            },
            {
                path: 'pets',
                component: () => import('../views/admin/PetsView.vue')
            },
            {
                path: 'adopts',
                component: () => import('../views/admin/AdoptsView.vue')
            },
            {
                path: 'comments',
                component: () => import('../views/admin/CommentsView.vue')
            },
            {
                path: 'profile',
                component: () => import('../views/admin/ProfileView.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 