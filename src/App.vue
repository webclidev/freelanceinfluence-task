<template>
  <AppNav />

  <router-view />
</template>

<script lang="ts">
import { defineComponent, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import useAuthStore from '@/store/auth'
import useResetStore from './store/reset'
import AppNav from './components/layout/AppNav.vue'
import useUserController from '@/controllers/useUserController'
import useTaskController from '@/controllers/useTaskController'

export default defineComponent({
  name: 'App',
  components: { AppNav },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const user = useUserController()
    const task = useTaskController()
    const { isAuthenticated } = useAuthStore()
    const { reset } = useResetStore()

    if (!isAuthenticated.value && router.currentRoute.value.meta?.requiresAuth) {
      router.push('/login')
    }

    onMounted(async () => {
      await router.isReady()
      if (isAuthenticated.value && route.path !== '/') {
        user.getMyProfile()
        task.getMyTasks({ limit: 5 })
      }
    })

    watch(isAuthenticated, (c) => {
      if (!c) {
        if (router.currentRoute.value.meta?.requiresAuth) {
          router.push('/login')
        }
        reset()
      }
    })

    return {
      isAuthenticated,
    }
  },
})
</script>

<style lang="scss">
@import '@/assets/styles/reset';
@import '@/assets/styles/main';
</style>
