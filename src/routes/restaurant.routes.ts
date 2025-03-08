import { Router } from 'express'
import {
  createRestaurant,
  updateRestaurant,
  getAllRestaurant,
  deleteRestaurant,
  getAllRestaurantByUserId
} from '~/controllers/restaurant.controllers'
import { accessTokenValidator } from '~/middlewares/users.middlewares'
import { restaurantValidator, isRestaurantExist } from '~/middlewares/restaurant.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'
const restaurantRouter = Router()

restaurantRouter.use(accessTokenValidator)
/**
 * Description: Create a new restaurant
 * Path: /
 * method: POST
 * Body: {name: string, phone: string, address: string, email: string, rating: Double, image: string, isActive: boolean}
 */
restaurantRouter.post('/', restaurantValidator, wrapRequestHandler(createRestaurant))
/**
 * Description: Update a restaurant
 * Path: /:restaurant_id
 * method: PUT
 * Body: {name: string, phone: string, address: string, email: string, rating: Double, image: string, isActive: boolean}
 */
restaurantRouter.put(
  '/:restaurant_id',
  isRestaurantExist,
  restaurantValidator,
  wrapRequestHandler(updateRestaurant)
)
/**
 * Description: Get all restaurant
 * Path: /
 * method: GET
 */
restaurantRouter.get('/all', wrapRequestHandler(getAllRestaurant))
/**
 * Description: Get all restaurant by user id
 * Path: /:user_id
 * method: GET
 */
restaurantRouter.get('/', wrapRequestHandler(getAllRestaurantByUserId))
/**
 * Description: Delete a restaurant
 * Path: /:delivery_id
 * method: DELETE
 */
restaurantRouter.delete('/:delivery_id', isRestaurantExist, wrapRequestHandler(deleteRestaurant))

export default restaurantRouter