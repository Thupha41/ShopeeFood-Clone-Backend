import { ParamSchema, checkSchema } from 'express-validator'
import HTTP_STATUS from '~/constants/httpStatus'
import { RESTAURANT_MESSAGES } from '~/constants/messages'
import { ErrorWithStatus } from '~/models/Errors'
import databaseService from '~/services/database.services'
import { ObjectId } from 'mongodb'
import { validate } from '~/utils/validation'

const restaurantIdSchema: ParamSchema = {
  custom: {
    options: async (value: string, { req }) => {
      if (!ObjectId.isValid(value)) {
        throw new ErrorWithStatus({
          message: RESTAURANT_MESSAGES.INVALID_RESTAURANT_ID,
          status: HTTP_STATUS.NOT_FOUND
        })
      }
      const restaurant = await databaseService.restaurants.findOne({
        _id: new ObjectId(value)
      })

      if (restaurant === null) {
        throw new ErrorWithStatus({
          message: RESTAURANT_MESSAGES.RESTAURANT_NOT_FOUND,
          status: HTTP_STATUS.NOT_FOUND
        })
      }
    }
  }
}

export const restaurantValidator = validate(
  checkSchema({
    name: {
      notEmpty: {
        errorMessage: RESTAURANT_MESSAGES.NAME_IS_REQUIRED
      },
      isString: {
        errorMessage: RESTAURANT_MESSAGES.NAME_MUST_BE_A_STRING
      }
    },
    phone: {
      notEmpty: {
        errorMessage: RESTAURANT_MESSAGES.PHONE_IS_REQUIRED
      },
      isString: {
        errorMessage: RESTAURANT_MESSAGES.PHONE_MUST_BE_A_STRING
      }
    },
    address: {
      notEmpty: {
        errorMessage: RESTAURANT_MESSAGES.ADDRESS_IS_REQUIRED
      },
      isString: {
        errorMessage: RESTAURANT_MESSAGES.ADDRESS_MUST_BE_A_STRING
      }
    },
    email: {
      notEmpty: {
        errorMessage: RESTAURANT_MESSAGES.EMAIL_IS_REQUIRED
      },
      isString: {
        errorMessage: RESTAURANT_MESSAGES.EMAIL_MUST_BE_A_STRING
      }
    },
    rating: {
      isFloat: {
        errorMessage: RESTAURANT_MESSAGES.RATING_MUST_BE_A_FLOAT
      }
    },
    image: {
      isString: {
        errorMessage: RESTAURANT_MESSAGES.IMAGE_MUST_BE_A_STRING
      }
    },
    isActive: {
      isBoolean: {
        errorMessage: RESTAURANT_MESSAGES.ISACTIVE_MUST_BE_A_BOOLEAN
      }
    }
  })
)

export const isRestaurantExist = validate(
  checkSchema(
    {
      restaurant_id: restaurantIdSchema
    },
    ['params']
  )
)
