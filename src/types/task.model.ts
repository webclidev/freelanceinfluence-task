import { CurrencyValue } from './money.model'
import { Platform } from './platform.model'
import { SimpleAccessFile, UserStatePublicInfo } from './user.model'

export interface CreateTask {
  title: string
  description: string
  budget: CurrencyValue
  platforms: Array<Platform>
  filesIds: Array<string>
}

export interface UserTaskInfo {
  count: number
  tasks: Array<Task>
}

export interface Task {
  id: string
  addedTime: string
  title: string
  description: string
  budget: CurrencyValue
  proposalCount: number
  platforms: Array<string>
  proposalAlreadySent: boolean
  addedByMe: boolean
  hasContractCreated: boolean
  hasContractAccepted: boolean
  files: Array<SimpleAccessFile>
  marketerInfo: UserStatePublicInfo
  metaImage: SimpleAccessFile
}

export type MyTasksQueryParams = {
  limit: number
}
