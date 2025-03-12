import { NextFunction, Request, Response } from 'express'
import menuService from '~/services/menus.services'
import { DELIVERY_INFO_MESSAGES, MENUS_MESSAGES } from '~/constants/messages'
import { UpsertMenuReqBody } from '~/models/requests/menus.requests'
import { ParamsDictionary } from 'express-serve-static-core'
import { TokenPayload } from '~/models/requests/users.requests'
export const createMenu = async (
  req: Request<ParamsDictionary, any, UpsertMenuReqBody>,
  res: Response,
  next: NextFunction
) => {
  const user = req.decoded_authorization as TokenPayload
  const user_id = user.user_id
  const result = await menuService.createMenu(user_id.toString(), req.body)
  res.json({
    message: MENUS_MESSAGES.CREATE_MENU_SUCCESS,
    result
  })
  return
}

export const updateMenu = async (
  req: Request<ParamsDictionary, any, UpsertMenuReqBody>,
  res: Response,
  next: NextFunction
) => {
  const user = req.decoded_authorization as TokenPayload
  const user_id = user.user_id
  const result = await menuService.updateMenu(user_id.toString(), req.params.menu_id, req.body)
  res.json({
    message: MENUS_MESSAGES.UPDATE_MENU_SUCCESS,
    result
  })
  return
}

export const getAllMenu = async (req: Request, res: Response, next: NextFunction) => {
  const result = await menuService.getAllMenu(req.query)
  res.json({
    message: MENUS_MESSAGES.GET_ALL_MENU_SUCCESS,
    result
  })
  return
}

export const deleteMenu = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.decoded_authorization as TokenPayload
  const user_id = user.user_id
  const result = await menuService.deleteMenu(user_id.toString(), req.params.menu_id)
  res.json({
    message: MENUS_MESSAGES.DELETE_MENU_SUCCESS,
    result
  })
  return
}
export const deleteDeliveryInfo = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.decoded_authorization as TokenPayload
  const user_id = user.user_id
  const result = await menuService.deleteMenu(user_id.toString(), req.params.menu_id)
  res.json({
    message: MENUS_MESSAGES.DELETE_MENU_SUCCESS,
    result
  })
  return
}
