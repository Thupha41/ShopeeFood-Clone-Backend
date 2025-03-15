import { ParamSchema, checkSchema } from 'express-validator'
import HTTP_STATUS from '~/constants/httpStatus'
import { MENU_ITEM_MESSAGES } from '~/constants/messages'
import { ErrorWithStatus } from '~/models/Errors'
import databaseService from '~/services/database.services'
import { ObjectId } from 'mongodb'
import { validate } from '~/utils/validation'

const menuItemIdSchema: ParamSchema = {
  custom: {
    options: async (value: string, { req }) => {
      if (!ObjectId.isValid(value)) {
        throw new ErrorWithStatus({
          message: MENU_ITEM_MESSAGES.INVALID_MENU_ITEM_ID,
          status: HTTP_STATUS.NOT_FOUND
        })
      }
      const menuItem = await databaseService.menuItems.findOne({
        _id: new ObjectId(value)
      })

      if (menuItem === null) {
        throw new ErrorWithStatus({
          message: MENU_ITEM_MESSAGES.MENU_ITEM_NOT_FOUND,
          status: HTTP_STATUS.NOT_FOUND
        })
      }
    }
  }
}

export const menuItemValidator = validate(
  checkSchema({
    // options: Array<IOptions>
    menu_id: {
      notEmpty: {
        errorMessage: MENU_ITEM_MESSAGES.MENU_ID_IS_REQUIRED
      },
      isString: {
        errorMessage: MENU_ITEM_MESSAGES.INVALID_MENU_ID
      }
    },
    title: {
      notEmpty: {
        errorMessage: MENU_ITEM_MESSAGES.TITLE_IS_REQUIRED
      },
      isString: {
        errorMessage: MENU_ITEM_MESSAGES.TITLE_MUST_BE_A_STRING
      }
    },
    basePrice: {
      notEmpty: {
        errorMessage: MENU_ITEM_MESSAGES.BASE_PRICE_IS_REQUIRED
      },
      isNumeric: {
        errorMessage: MENU_ITEM_MESSAGES.BASE_PRICE_MUST_BE_A_NUMBER
      }
    },
    image: {
      // notEmpty: {
      //   errorMessage: MENU_ITEM_MESSAGES.IMAGE_IS_REQUIRED
      // },
      isString: {
        errorMessage: MENU_ITEM_MESSAGES.IMAGE_MUST_BE_A_STRING
      }
    },
    options: {
      isArray: {
        errorMessage: MENU_ITEM_MESSAGES.OPTIONS_MUST_BE_AN_ARRAY
      }
    }
  })
)

export const isMenuItemExist = validate(
  checkSchema(
    {
      menu_item_id: menuItemIdSchema
    },
    ['params']
  )
)
