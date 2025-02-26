import { ObjectId } from 'mongodb'
import { UserVerifyStatus } from '../../constants/enums'

interface UserType {
  _id?: ObjectId
  name: string
  email: string
  date_of_birth?: Date
  password: string
  created_at?: Date
  updated_at?: Date
  forgot_password_token?: string
  verify?: UserVerifyStatus
  location?: string
  avatar?: string
  cover_photo?: string
  code?: string
  code_expired?: Date
}

export default class User {
  _id?: ObjectId
  name: string
  email: string
  date_of_birth: Date
  password: string
  created_at: Date
  updated_at: Date
  forgot_password_token: string // jwt hoặc '' nếu đã xác thực email
  verify: UserVerifyStatus
  location: string // optional
  avatar: string // optional
  cover_photo: string // optional
  code: string
  code_expired: Date

  constructor(user: UserType) {
    const date = new Date()
    this._id = user._id
    this.name = user.name || ''
    this.email = user.email
    this.date_of_birth = user.date_of_birth || date
    this.password = user.password
    this.created_at = user.created_at || date
    this.updated_at = user.updated_at || date
    this.forgot_password_token = user.forgot_password_token || ''
    this.verify = user.verify || UserVerifyStatus.Unverified
    this.location = user.location || ''
    this.avatar = user.avatar || ''
    this.cover_photo = user.cover_photo || ''
    this.code = user.code || ''
    this.code_expired = user.code_expired || date
  }
}
