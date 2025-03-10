import { Router } from 'express'
import { createMenu, updateMenu, getAllMenu, deleteMenu } from '~/controllers/menus.controllers'
import { accessTokenValidator } from '~/middlewares/users.middlewares'
import { menuValidator, isMenuExist, updateMenuValidator } from '~/middlewares/menus.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'
const menuRouter = Router()

menuRouter.use(accessTokenValidator)
/**
 * Description: Create a new menu
 * Path: /
 * method: POST
 * Body: {restaurant_id: string, title: string}
 */
menuRouter.post('/', menuValidator, wrapRequestHandler(createMenu))
/**
 * Description: Update a menu
 * Path: /:menu_id
 * method: PUT
 * Body: {title: string}
 */
menuRouter.put('/:menu_id', isMenuExist, updateMenuValidator, wrapRequestHandler(updateMenu))
/**
 * Description: Get all menu
 * Path: /
 * method: GET
 */
menuRouter.get('/all', wrapRequestHandler(getAllMenu))

/**
 * Description: Delete a menu
 * Path: /:menu_id
 * method: DELETE
 */
menuRouter.delete('/:menu_id', isMenuExist, wrapRequestHandler(deleteMenu))

export default menuRouter
