import { computed, Ref, ref } from 'vue'
import { UserTaskInfo, Task } from '@/types/task.model'

const myTasks: Ref<UserTaskInfo | null> = ref(null)

export default function useTaskStore() {
  const getMyTasks = computed(() => myTasks.value)
  const setMyTasks = (data: UserTaskInfo | null) => {
    myTasks.value = data
  }
  const updateMyTasks = (data: Task) => {
    const newCount: number = (getMyTasks.value?.count ?? 0) + 1
    const newTasks: Array<Task> = Array.from(getMyTasks.value?.tasks ?? [])
    newTasks.unshift(data)

    const newTask: UserTaskInfo = {
      count: newCount,
      tasks: newTasks.slice(0, 5),
    }

    setMyTasks(newTask)
  }

  const reset = () => {
    setMyTasks(null)
  }

  return {
    getMyTasks,
    setMyTasks,
    updateMyTasks,
    reset,
  }
}
