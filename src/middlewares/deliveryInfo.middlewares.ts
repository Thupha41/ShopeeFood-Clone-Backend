import { ParamSchema, checkSchema } from 'express-validator'
import HTTP_STATUS from '~/constants/httpStatus'
import { DELIVERY_INFO_MESSAGES, USERS_MESSAGES } from '~/constants/messages'
import { ErrorWithStatus } from '~/models/Errors'
import databaseService from '~/services/database.services'
import { ObjectId } from 'mongodb'
import { validate } from '~/utils/validation'

const deliveryIdSchema: ParamSchema = {
  custom: {
    options: async (value: string, { req }) => {
      if (!ObjectId.isValid(value)) {
        throw new ErrorWithStatus({
          message: DELIVERY_INFO_MESSAGES.INVALID_DELIVERY_INFO_ID,
          status: HTTP_STATUS.NOT_FOUND
        })
      }
      const deliveryInfo = await databaseService.deliveryInfos.findOne({
        _id: new ObjectId(value)
      })

      if (deliveryInfo === null) {
        throw new ErrorWithStatus({
          message: DELIVERY_INFO_MESSAGES.DELIVERY_INFO_NOT_FOUND,
          status: HTTP_STATUS.NOT_FOUND
        })
      }
    }
  }
}

export const deliveryInfoValidator = validate(
  checkSchema({
    province_city: {
      notEmpty: {
        errorMessage: DELIVERY_INFO_MESSAGES.PROVINCE_CITY_IS_REQUIRED
      },
      isString: {
        errorMessage: DELIVERY_INFO_MESSAGES.PROVINCE_CITY_MUST_BE_A_STRING
      }
    },
    district: {
      notEmpty: {
        errorMessage: DELIVERY_INFO_MESSAGES.DISTRICT_IS_REQUIRED
      },
      isString: {
        errorMessage: DELIVERY_INFO_MESSAGES.DISTRICT_MUST_BE_A_STRING
      }
    },
    ward: {
      notEmpty: {
        errorMessage: DELIVERY_INFO_MESSAGES.WARD_IS_REQUIRED
      },
      isString: {
        errorMessage: DELIVERY_INFO_MESSAGES.WARD_MUST_BE_A_STRING
      }
    },
    street: {
      notEmpty: {
        errorMessage: DELIVERY_INFO_MESSAGES.STREET_IS_REQUIRED
      },
      isString: {
        errorMessage: DELIVERY_INFO_MESSAGES.STREET_MUST_BE_A_STRING
      }
    },
    is_default: {
      isBoolean: {
        errorMessage: DELIVERY_INFO_MESSAGES.IS_DEFAULT_MUST_BE_A_BOOLEAN
      }
    }
  })
)

export const isDeliveryInfoExist = validate(
  checkSchema(
    {
      delivery_id: deliveryIdSchema
    },
    ['params']
  )
)
