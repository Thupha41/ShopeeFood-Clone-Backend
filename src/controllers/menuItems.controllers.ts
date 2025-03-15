import { NextFunction, Request, Response } from 'express'
import menuItemService from '~/services/menuItem.services'
import { MENU_ITEM_MESSAGES } from '~/constants/messages'
import { UpsertMenuItemReqBody } from '~/models/requests/menuItems.request'
import { ParamsDictionary } from 'express-serve-static-core'
import { TokenPayload } from '~/models/requests/users.requests'

export const createMenuItem = async (
  req: Request<ParamsDictionary, any, UpsertMenuItemReqBody>,
  res: Response,
  next: NextFunction
) => {
  const user = req.decoded_authorization as TokenPayload
  const user_id = user.user_id
  const result = await menuItemService.createMenuItem(user_id.toString(), req.body)
  res.json({
    message: MENU_ITEM_MESSAGES.CREATE_MENU_ITEM_SUCCESS,
    result
  })
  return
}

export const updateMenuItem = async (
  req: Request<ParamsDictionary, any, UpsertMenuItemReqBody>,
  res: Response,
  next: NextFunction
) => {
  const user = req.decoded_authorization as TokenPayload
  const user_id = user.user_id
  const result = await menuItemService.updateMenuItem(user_id.toString(), req.params.delivery_id, req.body)
  res.json({
    message: MENU_ITEM_MESSAGES.UPDATE_MENU_ITEM_SUCCESS,
    result
  })
  return
}

// export const getAllMenuItemByUserId = async (req: Request, res: Response, next: NextFunction) => {
//   const user = req.decoded_authorization as TokenPayload
//   const user_id = user.user_id
//   const result = await menuItemService.getAllMenuItemByUserId(user_id.toString())
//   res.json({
//     message: DELIVERY_INFO_MESSAGES.GET_ALL_DELIVERY_INFO_SUCCESS,
//     result
//   })
//   return
// }

export const getAllMenuItem = async (req: Request, res: Response, next: NextFunction) => {
  const result = await menuItemService.getAllMenuItem(req.query)
  res.json({
    message: MENU_ITEM_MESSAGES.GET_ALL_MENU_ITEM_SUCCESS,
    result
  })
}

export const deleteMenuItem = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.decoded_authorization as TokenPayload
  const user_id = user.user_id
  const result = await menuItemService.deleteMenuItem(user_id.toString(), req.params.delivery_id)
  res.json({
    message: MENU_ITEM_MESSAGES.DELETE_MENU_ITEM_SUCCESS,
    result
  })
  return
}
