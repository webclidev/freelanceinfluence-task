import api from '@/services/api'
import useUserStore from '@/store/user'
import { UserPublicInfo } from '@/types/user.model'

const { setMyProfile } = useUserStore()

const getMyProfile = async () => {
  return await api.get<UserPublicInfo>('users/me').then((response) => {
    setMyProfile(response.data)
    return response
  })
}

export default function useUserController() {
  return {
    getMyProfile,
  }
}
