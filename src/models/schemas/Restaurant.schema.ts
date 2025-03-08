import { Double, ObjectId } from 'mongodb'

interface RestaurantType {
  _id?: ObjectId
  name: string
  phone: string
  address: string
  email: string
  rating: Double
  image: string
  isActive: boolean
  created_at?: Date
  updated_at?: Date
}

export default class Restaurant {
  _id?: ObjectId
  name: string
  phone: string
  address: string
  email: string
  rating: Double
  image: string
  isActive: boolean
  created_at: Date
  updated_at: Date

  constructor(restaurant: RestaurantType) {
    const date = new Date()
    this._id = restaurant._id
    this.name = restaurant.name || ''
    this.phone = restaurant.phone
    this.address = restaurant.address
    this.email = restaurant.email
    this.rating = restaurant.rating
    this.image = restaurant.image
    this.isActive = restaurant.isActive || true
    this.created_at = restaurant.created_at || date
    this.updated_at = restaurant.updated_at || date
  }
}
