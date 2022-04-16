import api, { paramsToQueryString } from '@/services/api'
import { CreateTask, UserTaskInfo } from '@/types/task.model'
import useTaskStore from '@/store/task'
import { Task } from '@/types/task.model'
import { MyTasksQueryParams } from '@/types/task.model'
const { setMyTasks, updateMyTasks } = useTaskStore()

const createTask = async (task: CreateTask) => {
  return await api.post<Task>('tasks', task).then((response) => {
    updateMyTasks(response.data)
    return response
  })
}

const getMyTasks = async (params: MyTasksQueryParams) => {
  return await api.get<UserTaskInfo>(`tasks/my${paramsToQueryString(params)}`).then((response) => {
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
