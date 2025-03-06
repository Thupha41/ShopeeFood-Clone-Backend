import { Router } from 'express'
import {
  createDeliveryInfo,
  updateDeliveryInfo,
  getAllDeliveryInfo,
  deleteDeliveryInfo,
  getAllDeliveryInfoByUserId
} from '~/controllers/deliveryInfo.controllers'
import { accessTokenValidator } from '~/middlewares/users.middlewares'
import { deliveryInfoValidator, isDeliveryInfoExist } from '~/middlewares/deliveryInfo.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'
const deliveryInfoRouter = Router()

deliveryInfoRouter.use(accessTokenValidator)
/**
 * Description: Create a new delivery info
 * Path: /
 * method: POST
 * Body: {province_city: string, district: string, ward: string, street: string, is_default: boolean}
 */
deliveryInfoRouter.post('/', deliveryInfoValidator, wrapRequestHandler(createDeliveryInfo))
/**
 * Description: Update a delivery info
 * Path: /:delivery_id
 * method: PUT
 * Body: {province_city: string, district: string, ward: string, street: string, is_default: boolean}
 */
deliveryInfoRouter.put(
  '/:delivery_id',
  isDeliveryInfoExist,
  deliveryInfoValidator,
  wrapRequestHandler(updateDeliveryInfo)
)
/**
 * Description: Get all delivery info
 * Path: /
 * method: GET
 */
deliveryInfoRouter.get('/all', wrapRequestHandler(getAllDeliveryInfo))
/**
 * Description: Get all delivery info by user id
 * Path: /:user_id
 * method: GET
 */
deliveryInfoRouter.get('/', wrapRequestHandler(getAllDeliveryInfoByUserId))
/**
 * Description: Delete a delivery info
 * Path: /:delivery_id
 * method: DELETE
 */
deliveryInfoRouter.delete('/:delivery_id', isDeliveryInfoExist, wrapRequestHandler(deleteDeliveryInfo))

export default deliveryInfoRouter
