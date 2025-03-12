import { Double } from 'mongodb'

export interface UpsertRestaurantReqBody {
  is_default: any
  name: string
  phone: string
  address: string
  email: string
  rating: Double
  image: string
  isActive: boolean
}
