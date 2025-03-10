import { ObjectId } from 'mongodb'

interface DeliveryInfoType {
  _id?: ObjectId
  province_city: string
  district: string
  ward: string
  street: string
  is_default: boolean
  user_id: ObjectId
}
export default class DeliveryInfo {
  _id?: ObjectId
  province_city: string
  district: string
  ward: string
  street: string
  is_default: boolean
  user_id: ObjectId
  constructor({ _id, province_city, district, ward, street, is_default, user_id }: DeliveryInfoType) {
    this._id = _id
    this.province_city = province_city
    this.district = district
    this.ward = ward
    this.street = street
    this.is_default = is_default
    this.user_id = user_id
  }
}
