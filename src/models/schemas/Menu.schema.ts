import { ObjectId } from 'mongodb'

interface IMenuType {
  _id?: ObjectId
  restaurant_id: ObjectId
  title: string
  created_at?: Date
  updated_at?: Date
}
export default class Menu {
  _id?: ObjectId
  restaurant_id: ObjectId
  title: string
  created_at: Date
  updated_at: Date
  constructor({ _id, restaurant_id, title, created_at, updated_at }: IMenuType) {
    this._id = _id
    this.restaurant_id = restaurant_id
    this.title = title
    this.created_at = created_at || new Date()
    this.updated_at = updated_at || new Date()
  }
}
