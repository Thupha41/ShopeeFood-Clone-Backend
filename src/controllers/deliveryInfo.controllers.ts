import { NextFunction, Request, Response } from 'express'
import deliveryInfoService from '~/services/deliveryInfo.services'
import { DELIVERY_INFO_MESSAGES } from '~/constants/messages'
import { UpsertDeliveryInfoReqBody } from '~/models/requests/deliveryInfo.requests'
import { ParamsDictionary } from 'express-serve-static-core'
import { TokenPayload } from '~/models/requests/users.requests'
export const createDeliveryInfo = async (
  req: Request<ParamsDictionary, any, UpsertDeliveryInfoReqBody>,
  res: Response,
  next: NextFunction
) => {
  const user = req.decoded_authorization as TokenPayload
  const user_id = user.user_id
  const result = await deliveryInfoService.createDeliveryInfo(user_id.toString(), req.body)
  res.json({
    message: DELIVERY_INFO_MESSAGES.CREATE_DELIVERY_INFO_SUCCESS,
    result
  })
  return
}

export const updateDeliveryInfo = async (
  req: Request<ParamsDictionary, any, UpsertDeliveryInfoReqBody>,
  res: Response,
  next: NextFunction
) => {
  const user = req.decoded_authorization as TokenPayload
  const user_id = user.user_id
  const result = await deliveryInfoService.updateDeliveryInfo(user_id.toString(), req.params.delivery_id, req.body)
  res.json({
    message: DELIVERY_INFO_MESSAGES.UPDATE_DELIVERY_INFO_SUCCESS,
    result
  })
  return
}

export const getAllDeliveryInfoByUserId = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.decoded_authorization as TokenPayload
  const user_id = user.user_id
  const result = await deliveryInfoService.getAllDeliveryInfoByUserId(user_id.toString())
  res.json({
    message: DELIVERY_INFO_MESSAGES.GET_ALL_DELIVERY_INFO_SUCCESS,
    result
  })
  return
}

export const getAllDeliveryInfo = async (req: Request, res: Response, next: NextFunction) => {
  const result = await deliveryInfoService.getAllDeliveryInfo(req.query)
  res.json({
    message: DELIVERY_INFO_MESSAGES.GET_ALL_DELIVERY_INFO_SUCCESS,
    result
  })
}
export const deleteDeliveryInfo = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.decoded_authorization as TokenPayload
  const user_id = user.user_id
  const result = await deliveryInfoService.deleteDeliveryInfo(user_id.toString(), req.params.delivery_id)
  res.json({
    message: DELIVERY_INFO_MESSAGES.DELETE_DELIVERY_INFO_SUCCESS,
    result
  })
  return
}
