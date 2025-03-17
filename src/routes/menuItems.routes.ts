import { Router } from 'express'
import { createMenuItem, updateMenuItem, getAllMenuItem, deleteMenuItem } from '~/controllers/menuItems.controllers'
import { accessTokenValidator } from '~/middlewares/users.middlewares'
import { menuItemValidator, isMenuItemExist } from '~/middlewares/menuItems.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'
const menuItemRouter = Router()

menuItemRouter.use(accessTokenValidator)
/**
 * Description: Create a new menu item
 * Path: /
 * method: POST
 * Body: {menu_id: string, title: string, basePrice: number, image: string, options: Array<IOptions>}
 */
menuItemRouter.post('/', menuItemValidator, wrapRequestHandler(createMenuItem))
/**
 * Description: Update a menu item
 * Path: /:menu_item_id
 * method: PUT
 * Body: {menu_id: string, title: string, basePrice: number, image: string, options: Array<IOptions>}
 */
menuItemRouter.put('/:menu_item_id', isMenuItemExist, menuItemValidator, wrapRequestHandler(updateMenuItem))
/**
 * Description: Get all menu item
 * Path: /
 * method: GET
 */
menuItemRouter.get('/all', wrapRequestHandler(getAllMenuItem))

/**
 * Description: Delete a menu item
 * Path: /:menu_item_id
 * method: DELETE
 */
menuItemRouter.delete('/:menu_item_id', isMenuItemExist, wrapRequestHandler(deleteMenuItem))

export default menuItemRouter
