import { ObjectId } from 'mongodb'
import { IOptions } from '../requests/menuItems.request'

interface MenuItemType {
  _id?: ObjectId
  menu_id?: ObjectId
  title?: string
  basePrice?: number
  image?: string
  options?: Array<IOptions>
  created_at?: Date
  updated_at?: Date
}

export default class MenuItem {
  _id?: ObjectId
  menu_id?: ObjectId
  title?: string
  basePrice?: number
  image?: string
  options?: Array<IOptions>
  created_at?: Date
  updated_at?: Date
  constructor({ _id, menu_id, title, basePrice, image, options, created_at, updated_at }: MenuItemType) {
    this._id = _id
    this.menu_id = menu_id
    this.title = title
    this.basePrice = basePrice
    this.image = image
    this.options = options
    this.created_at = created_at || new Date()
    this.updated_at = updated_at || new Date()
  }
}
