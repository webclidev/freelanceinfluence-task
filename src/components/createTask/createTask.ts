import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import useTaskController from '@/controllers/useTaskController'
import { CreateTask } from '@/types/task.model'
import { Currency } from '@/types/money.model'

export default function useCreateTask() {
  const task = useTaskController()
  const router = useRouter()

  const taskPayload = reactive<CreateTask>({
    title: '',
    description: '',
    budget: {
      value: 0,
      currency: Currency.USD,
    },
    platforms: ['INSTAGRAM', 'FACEBOOK', 'TWITTER', 'LINKEDIN'],
    filesIds: [],
  })

  const validate = (task: CreateTask) => {
    return task.title.trim().length && task.description.trim().length && task.budget.value > 0 && task.platforms.length
  }

  const createTask = () => {
    if (validate(taskPayload)) {
      task.createTask(taskPayload).then(() => {
        router.push({ name: 'Dashboard' })
      })
    }
  }

  return {
    task: taskPayload,
    createTask,
  }
}
