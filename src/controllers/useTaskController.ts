import api from '@/services/api'
import { CreateTask } from '@/types/task.model'
import useTaskStore from '@/store/task'
import { UserTaskInfo, Task } from '@/types/task.model'
const { setMyTasks, getMyTasks: allTasks } = useTaskStore()
const limit = 5

const createTask = async (task: CreateTask) => {
  return await api.post<Task>('tasks', task).then((response) => {
    const newCount: number = (allTasks.value?.count ?? 0) + 1
    const newTasks: Array<Task> = Array.from(allTasks.value?.tasks ?? [])
    newTasks.unshift(response.data)

    const newTask: UserTaskInfo = {
      count: newCount,
      tasks: newTasks.slice(0, limit),
    }

    setMyTasks(newTask)
    return response
  })
}

const getMyTasks = async () => {
  return await api.get(`tasks/my?limit=${limit}`).then((response) => {
    setMyTasks(response.data)
    return response
  })
}

export default function useTaskController() {
  return {
    createTask,
    getMyTasks,
  }
}
