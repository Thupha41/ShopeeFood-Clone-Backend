import { ParamSchema, checkSchema } from 'express-validator'
import HTTP_STATUS from '~/constants/httpStatus'
import { MENUS_MESSAGES } from '~/constants/messages'
import { ErrorWithStatus } from '~/models/Errors'
import databaseService from '~/services/database.services'
import { ObjectId } from 'mongodb'
import { validate } from '~/utils/validation'

const menuIdSchema: ParamSchema = {
  custom: {
    options: async (value: string, { req }) => {
      if (!ObjectId.isValid(value)) {
        throw new ErrorWithStatus({
          message: MENUS_MESSAGES.INVALID_MENU_ID,
          status: HTTP_STATUS.NOT_FOUND
        })
      }
      const menu = await databaseService.menus.findOne({
        _id: new ObjectId(value)
      })

      if (menu === null) {
        throw new ErrorWithStatus({
          message: MENUS_MESSAGES.MENU_NOT_FOUND,
          status: HTTP_STATUS.NOT_FOUND
        })
      }
    }
  }
}

export const menuValidator = validate(
  checkSchema({
    restaurant_id: {
      isString: {
        errorMessage: MENUS_MESSAGES.INVALID_RESTAURANT_ID
      },
      notEmpty: {
        errorMessage: MENUS_MESSAGES.RESTAURANT_ID_IS_REQUIRED
      }
    },
    title: {
      notEmpty: {
        errorMessage: MENUS_MESSAGES.TITLE_IS_REQUIRED
      },
      isString: {
        errorMessage: MENUS_MESSAGES.TITLE_MUST_BE_A_STRING
      }
    }
  })
)

export const updateMenuValidator = validate(
  checkSchema({
    title: {
      notEmpty: {
        errorMessage: MENUS_MESSAGES.TITLE_IS_REQUIRED
      },
      isString: {
        errorMessage: MENUS_MESSAGES.TITLE_MUST_BE_A_STRING
      }
    }
  })
)
export const isMenuExist = validate(
  checkSchema(
    {
      menu_id: menuIdSchema
    },
    ['params']
  )
)
