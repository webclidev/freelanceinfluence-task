<template>
  <main class="dashboard">
    <h1 class="page-title">Dashboard view</h1>

    <p>{{ getMyProfile }}</p>

    <h1 class="page-title">My Tasks</h1>
    <p>{{ getMyTasks }}</p>
  </main>
</template>

<script lang="ts">
import useUserStore from '@/store/user'
import useTaskStore from '@/store/task'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Dashboard',
  setup() {
    const { getMyProfile } = useUserStore()
    const { getMyTasks } = useTaskStore()

    return {
      getMyProfile,
      getMyTasks,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/views/Dashboard';
</style>
