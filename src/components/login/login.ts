import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import useUserAuthentificationController from '@/controllers/useUserAuthentificationController'
import { UserToLogin } from '@/types/user.model'
import useTaskController from '@/controllers/useTaskController'

export default function useLogin() {
  const auth = useUserAuthentificationController()
  const router = useRouter()
  const task = useTaskController()

  const user = reactive<UserToLogin>({
    email: '',
    password: '',
    rememberMe: false,
  })

  const clear = () => {
    user.email = ''
    user.password = ''
    user.rememberMe = false
  }

  const validate = (user: UserToLogin) => {
    return user.password.length >= 6 && user.email
  }

  const login = () => {
    if (validate(user)) {
      auth
        .login(user)
        .then(() => {
          router.push({ name: 'Dashboard' })
          task.getMyTasks()
        })
        .catch(() => {
          clear()
        })
    }
  }

  return {
    user,
    login,
    clear,
  }
}
