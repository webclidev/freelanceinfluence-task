<template>
  <main class="task-create">
    <h1 class="page-title">Task Create view</h1>

    <form class="login-form" @submit.prevent="createTask">
      <label class="label">
        Title:
        <input v-model="task.title" class="text-input" type="text" />
      </label>

      <label class="label">
        Description:
        <input v-model="task.description" class="text-input" type="text" />
      </label>

      <label class="label">
        Budget:
        <input v-model="task.budget.value" class="text-input" type="number" min="0" />
      </label>

      <label class="label">
        Platforms:
        <select v-model="task.platforms" multiple class="text-input text-input-select">
          <option v-for="(platform, index) in availablePlatforms" :key="index" :value="platform">{{ platform }}</option>
        </select>
      </label>

      <button class="button">Create</button>
    </form>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useCreateTask from '@/components/createTask/createTask'

export default defineComponent({
  name: 'TaskCreate',
  setup() {
    const { task, createTask } = useCreateTask()
    const availablePlatforms = task.platforms

    return {
      task,
      createTask,
      availablePlatforms,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/views/TaskCreate';
</style>
