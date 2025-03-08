import { NextFunction, Request, Response } from 'express'
import restaurantService from '~/services/restaurant.services'
import { RESTAURANT_MESSAGES } from '~/constants/messages'
import { UpsertRestaurantReqBody } from '~/models/requests/restaurant.requests'
import { ParamsDictionary } from 'express-serve-static-core'
import { TokenPayload } from '~/models/requests/users.requests'
export const createRestaurant = async (
  req: Request<ParamsDictionary, any, UpsertRestaurantReqBody>,
  res: Response,
  next: NextFunction
) => {
  const user = req.decoded_authorization as TokenPayload
  const user_id = user.user_id
  const result = await restaurantService.createRestaurant(user_id.toString(), req.body)
  res.json({
    message: RESTAURANT_MESSAGES.CREATE_RESTAURANT_SUCCESS,
    result
  })
  return
}

export const updateRestaurant = async (
  req: Request<ParamsDictionary, any, UpsertRestaurantReqBody>,
  res: Response,
  next: NextFunction
) => {
  const user = req.decoded_authorization as TokenPayload
  const user_id = user.user_id
  const result = await restaurantService.updateRestaurant(user_id.toString(), req.params.delivery_id, req.body)
  res.json({
    message: RESTAURANT_MESSAGES.UPDATE_RESTAURANT_SUCCESS,
    result
  })
  return
}

export const getAllRestaurantByUserId = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.decoded_authorization as TokenPayload
  const user_id = user.user_id
  const result = await restaurantService.getAllRestaurantByUserId(user_id.toString())
  res.json({
    message: RESTAURANT_MESSAGES.GET_ALL_RESTAURANT_SUCCESS,
    result
  })
  return
}

export const getAllRestaurant = async (req: Request, res: Response, next: NextFunction) => {
  const result = await restaurantService.getAllRestaurant(req.query)
  res.json({
    message: RESTAURANT_MESSAGES.GET_ALL_RESTAURANT_SUCCESS,
    result
  })
}
export const deleteRestaurant = async (req: Request, res: Response, next: NextFunction) => {
  const user = req.decoded_authorization as TokenPayload
  const user_id = user.user_id
  const result = await restaurantService.deleteRestaurant(user_id.toString(), req.params.delivery_id)
  res.json({
    message: RESTAURANT_MESSAGES.DELETE_RESTAURANT_SUCCESS,
    result
  })
  return
}