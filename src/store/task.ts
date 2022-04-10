import { computed, Ref, ref } from 'vue'
import { UserTaskInfo } from '@/types/task.model'

const myTasks: Ref<UserTaskInfo | null> = ref(null)

export default function useTaskStore() {
  const getMyTasks = computed(() => myTasks.value)
  const setMyTasks = (data: UserTaskInfo | null) => {
    myTasks.value = data
  }

  const reset = () => {
    setMyTasks(null)
  }

  return {
    getMyTasks,
    setMyTasks,
    reset,
  }
}
