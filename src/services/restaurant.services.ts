import Restaurant from '~/models/schemas/Restaurant.schema'
// import { removeNull } from '~/utils'
import databaseService from './database.services'
import { UpsertRestaurantReqBody } from '~/models/requests/restaurant.requests'
import { ObjectId } from 'mongodb'
import { ErrorWithStatus } from '~/models/Errors'
import { USERS_MESSAGES } from '~/constants/messages'
import { restaurantRepository } from '~/models/repositories/restaurant.repo'

class RestaurantService {
  async createRestaurant(
    user_id: string,
    { name, phone, address, email, rating, image, isActive }: UpsertRestaurantReqBody
  ) {
    const user = await databaseService.users.findOne({
      _id: new ObjectId(user_id)
    })
    console.log('>>> check user', user)
    if (!user) {
      throw new ErrorWithStatus({
        message: USERS_MESSAGES.USER_NOT_FOUND,
        status: 404
      })
    }

    const restaurant = await databaseService.restaurants.insertOne({
      name,
      phone,
      address,
      email,
      rating,
      image,
      isActive,
      created_at: new Date(),
      updated_at: new Date()
    })

    return {
      _id: restaurant.insertedId,
      name,
      phone,
      address,
      email,
      rating,
      image,
      isActive
    }
  }

  async updateRestaurant(user_id: string, delivery_id: string, updateBody: UpsertRestaurantReqBody) {
    // updateBody = removeNull(updateBody) as UpsertRestaurantReqBody
    const user = await databaseService.users.findOne({
      _id: new ObjectId(user_id)
    })
    if (!user) {
      throw new ErrorWithStatus({
        message: USERS_MESSAGES.USER_NOT_FOUND,
        status: 404
      })
    }
    const deliveryDefault = await databaseService.restaurants.findOne({
      user_id: new ObjectId(user_id),
      is_default: true
    })
    const restaurant = await databaseService.restaurants.updateOne(
      { _id: new ObjectId(delivery_id), user_id: new ObjectId(user_id) },
      { $set: updateBody }
    )
    return restaurant
  }

  async getAllRestaurantByUserId(user_id: string) {
    const user = await databaseService.users.findOne({
      _id: new ObjectId(user_id)
    })
    if (!user) {
      throw new ErrorWithStatus({
        message: USERS_MESSAGES.USER_NOT_FOUND,
        status: 404
      })
    }
    const restaurants = await databaseService.restaurants
      .find({
        user_id: new ObjectId(user_id)
      })
      .toArray()
    return restaurants
  }

  async getAllRestaurant({ limit = 50, sort = 'ctime', page = 1 }) {
    const restaurants = await restaurantRepository.findAll({ limit, sort, page })
    return restaurants
  }

  async deleteRestaurant(user_id: string, delivery_id: string) {
    const user = await databaseService.users.findOne({
      _id: new ObjectId(user_id)
    })
    if (!user) {
      throw new ErrorWithStatus({
        message: USERS_MESSAGES.USER_NOT_FOUND,
        status: 404
      })
    }
    const restaurant = await databaseService.restaurants.deleteOne({
      _id: new ObjectId(delivery_id),
      user_id: new ObjectId(user_id)
    })
    return restaurant
  }
}

export default new RestaurantService()