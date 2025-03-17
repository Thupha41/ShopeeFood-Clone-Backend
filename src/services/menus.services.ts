import { removeNull } from '~/utils'
import databaseService from './database.services'
import { UpsertMenuReqBody } from '~/models/requests/menus.requests'
import { ObjectId } from 'mongodb'
import { ErrorWithStatus } from '~/models/Errors'
import { menuRepository } from '~/models/repositories/menus.repo'
import { USERS_MESSAGES, MENUS_MESSAGES, RESTAURANT_MESSAGES } from '~/constants/messages'
class MenuService {
  async createMenu(user_id: string, { restaurant_id, title }: UpsertMenuReqBody) {
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
    //find restaurant
    const restaurant = await databaseService.restaurants.findOne({
      _id: new ObjectId(restaurant_id)
    })
    if (!restaurant) {
      throw new ErrorWithStatus({
        message: RESTAURANT_MESSAGES.RESTAURANT_NOT_FOUND,
        status: 404
      })
    }
    const menu = await databaseService.menus.insertOne({
      restaurant_id: new ObjectId(restaurant_id),
      title,
      created_at: new Date(),
      updated_at: new Date()
    })
    return {
      _id: menu.insertedId,
      restaurant_id,
      title
    }
  }

  async updateMenu(user_id: string, menu_id: string, updateBody: UpsertMenuReqBody) {
    updateBody = removeNull(updateBody) as UpsertMenuReqBody
    const user = await databaseService.users.findOne({
      _id: new ObjectId(user_id)
    })
    if (!user) {
      throw new ErrorWithStatus({
        message: USERS_MESSAGES.USER_NOT_FOUND,
        status: 404
      })
    }
    if (updateBody.restaurant_id) {
      const restaurant = await databaseService.restaurants.findOne({
        _id: new ObjectId(updateBody.restaurant_id)
      })
      if (!restaurant) {
        throw new ErrorWithStatus({
          message: RESTAURANT_MESSAGES.RESTAURANT_NOT_FOUND,
          status: 404
        })
      }
    }
    const menu = await databaseService.menus.updateOne(
      { _id: new ObjectId(menu_id) },
      {
        $set: {
          restaurant_id: new ObjectId(updateBody.restaurant_id),
          title: updateBody.title
        }
      }
    )
    return menu
  }

  async getAllMenu({ limit = 50, sort = 'ctime', page = 1 }) {
    const menus = await menuRepository.findAll({ limit, sort, page })
    return menus
  }

  async deleteMenu(user_id: string, menu_id: string) {
    const user = await databaseService.users.findOne({
      _id: new ObjectId(user_id)
    })
    if (!user) {
      throw new ErrorWithStatus({
        message: USERS_MESSAGES.USER_NOT_FOUND,
        status: 404
      })
    }
    const menu = await databaseService.menus.deleteOne({
      _id: new ObjectId(menu_id)
    })
    return menu
  }
}

export default new MenuService()
