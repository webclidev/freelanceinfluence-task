import useAuthStore from './auth'
import useUserStore from './user'
import useTaskStore from './task'

export default function useResetStore() {
  const auth = useAuthStore()
  const user = useUserStore()
  const task = useTaskStore()

  const reset = () => {
    auth.reset()
    user.reset()
    task.reset()
  }

  return { reset }
}
