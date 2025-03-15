import { UpsertMenuItemReqBody } from "~/models/requests/menuItems.request"
import databaseService from "./database.services"
import { ObjectId } from "mongodb"
import { USERS_MESSAGES, MENUS_MESSAGES } from "~/constants/messages"
import { ErrorWithStatus } from "~/models/Errors"
import { removeNull } from "~/utils"
import { menuItemRepository } from "~/models/repositories/menuItem.repo"

class MenuItemService {
  async createMenuItem(
    user_id: string, 
    { menu_id, title, basePrice, image, options }: UpsertMenuItemReqBody
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
    //find menu
    const menu = await databaseService.menus.findOne({
      _id: new ObjectId(menu_id)
    })
    if (!menu) {
      throw new ErrorWithStatus({
        message: MENUS_MESSAGES.MENU_NOT_FOUND,
        status: 404
      })
    }
    const menuItem = await databaseService.menuItems.insertOne({
      menu_id: new ObjectId(menu_id),
      title,
      basePrice,
      image,
      options,
      created_at: new Date(),
      updated_at: new Date(),
    })
    return {
      _id: menuItem.insertedId,
      menu_id,
      title,
      basePrice,
      image,
      options
    }
  }

  async updateMenuItem(user_id: string, menu_item_id: string, updateBody: UpsertMenuItemReqBody) {
    updateBody = removeNull(updateBody) as UpsertMenuItemReqBody
    const user = await databaseService.users.findOne({
      _id: new ObjectId(user_id)
    })
    if (!user) {
      throw new ErrorWithStatus({
        message: USERS_MESSAGES.USER_NOT_FOUND,
        status: 404
      })
    }
    const menuItem = await databaseService.menuItems.updateOne({ _id: new ObjectId(menu_item_id) }, { updateBody })
    return menuItem
  }

  async getAllMenuItem({ limit = 50, sort = 'ctime', page = 1 }) {
    const menuItems = await menuItemRepository.findAll({ limit, sort, page })
    return menuItems
  }

  async deleteMenuItem(user_id: string, menu_item_id: string) {
    const user = await databaseService.users.findOne({
      _id: new ObjectId(user_id)
    })
    if (!user) {
      throw new ErrorWithStatus({
        message: USERS_MESSAGES.USER_NOT_FOUND,
        status: 404
      })
    }
    const menuItem = await databaseService.menuItems.deleteOne({
      _id: new ObjectId(menu_item_id),
    })
    return menuItem
  }
}

export default new MenuItemService()