export const USERS_MESSAGES = {
  VALIDATION_ERROR: 'Validation error',
  NAME_IS_REQUIRED: 'Name is required',
  NAME_MUST_BE_A_STRING: 'Name must be a string',
  NAME_LENGTH_MUST_BE_FROM_1_TO_100: 'Name length must be from 1 to 100',
  EMAIL_ALREADY_EXISTS: 'Email already exists',
  EMAIL_IS_REQUIRED: 'Email is required',
  EMAIL_IS_INVALID: 'Email is invalid',
  EMAIL_OR_PASSWORD_IS_INCORRECT: 'Email or password is incorrect',
  PASSWORD_IS_REQUIRED: 'Password is required',
  PASSWORD_MUST_BE_A_STRING: 'Password must be a string',
  PASSWORD_LENGTH_MUST_BE_FROM_8_TO_50: 'Password length must be from 8 to 50',
  PASSWORD_MUST_BE_STRONG:
    'Password must be 6-50 characters long and contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol',
  CONFIRM_PASSWORD_IS_REQUIRED: 'Confirm password is required',
  CONFIRM_PASSWORD_MUST_BE_A_STRING: 'Confirm password must be a string',
  CONFIRM_PASSWORD_LENGTH_MUST_BE_FROM_8_TO_50: 'Confirm password length must be from 8 to 50',
  CONFIRM_PASSWORD_MUST_BE_STRONG:
    'Confirm password must be 6-50 characters long and contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol',
  CONFIRM_PASSWORD_MUST_BE_THE_SAME_AS_PASSWORD: 'Confirm password must be the same as password',
  DATE_OF_BIRTH_MUST_BE_ISO8601: 'Date of birth must be ISO8601',
  LOGIN_SUCCESS: 'Login success',
  REGISTER_SUCCESS: 'Register success',
  ACCESS_TOKEN_IS_REQUIRED: 'Access token is required',
  REFRESH_TOKEN_IS_REQUIRED: 'Refresh token is required',
  REFRESH_TOKEN_IS_INVALID: 'Refresh token is invalid',
  USED_REFRESH_TOKEN_OR_NOT_EXIST: 'Used refresh token or not exist',
  LOGOUT_SUCCESS: 'Logout success',
  EMAIL_VERIFY_TOKEN_IS_REQUIRED: 'Email verify token is required',
  USER_NOT_FOUND: 'User not found',
  EMAIL_ALREADY_VERIFIED_BEFORE: 'Email already verified before',
  EMAIL_VERIFY_SUCCESS: 'Email verify success',
  INVALID_CODE: 'Invalid code',
  RESEND_VERIFY_EMAIL_SUCCESS: 'Resend verify email success',
  CHECK_EMAIL_TO_RESET_PASSWORD: 'Check email to reset password',
  FORGOT_PASSWORD_TOKEN_IS_REQUIRED: 'Forgot password token is required',
  VERIFY_FORGOT_PASSWORD_SUCCESS: 'Verify forgot password success',
  INVALID_FORGOT_PASSWORD_TOKEN: 'Invalid forgot password token',
  RESET_PASSWORD_SUCCESS: 'Reset password success',
  GET_ME_SUCCESS: 'Get my profile success',
  USER_NOT_VERIFIED: 'User not verified',
  BIO_MUST_BE_STRING: 'Bio must be a string',
  BIO_LENGTH: 'Bio length must be from 1 to 200',
  LOCATION_MUST_BE_STRING: 'Location must be a string',
  LOCATION_LENGTH: 'Location length must be from 1 to 200',
  WEBSITE_MUST_BE_STRING: 'Website must be a string',
  WEBSITE_LENGTH: 'Website length must be from 1 to 200',
  USERNAME_MUST_BE_STRING: 'Username must be a string',
  USERNAME_INVALID:
    'Username must be 4-15 characters long and contain only letters, numbers, underscores, not only numbers',
  IMAGE_URL_MUST_BE_STRING: 'Avatar must be a string',
  IMAGE_URL_LENGTH: 'Avatar length must be from 1 to 200',
  UPDATE_ME_SUCCESS: 'Update my profile success',
  GET_PROFILE_SUCCESS: 'Get profile success',
  FOLLOW_SUCCESS: 'Follow success',
  INVALID_USER_ID: 'Invalid user id',
  FOLLOWED: 'Followed',
  ALREADY_UNFOLLOWED: 'Already unfollowed',
  UNFOLLOW_SUCCESS: 'Unfollow success',
  USERNAME_EXISTED: 'Username existed',
  OLD_PASSWORD_NOT_MATCH: 'Old password not match',
  CHANGE_PASSWORD_SUCCESS: 'Change password success',
  GMAIL_NOT_VERIFIED: 'Gmail not verified',
  UPLOAD_SUCCESS: 'Upload success',
  REFRESH_TOKEN_SUCCESS: 'Refresh token success',
  GET_VIDEO_STATUS_SUCCESS: 'Get video status success'
} as const

export const TWEETS_MESSAGES = {
  INVALID_TYPE: 'Invalid type',
  INVALID_AUDIENCE: 'Invalid audience',
  PARENT_ID_MUST_BE_A_VALID_TWEET_ID: 'Parent id must be a valid tweet id',
  PARENT_ID_MUST_BE_NULL: 'Parent id must be null',
  CONTENT_MUST_BE_A_NON_EMPTY_STRING: 'Content must be a non-empty string',
  CONTENT_MUST_BE_EMPTY_STRING: 'Content must be empty string',
  HASHTAGS_MUST_BE_AN_ARRAY_OF_STRING: 'Hashtags must be an array of string',
  MENTIONS_MUST_BE_AN_ARRAY_OF_USER_ID: 'Mentions must be an array of user id',
  MEDIAS_MUST_BE_AN_ARRAY_OF_MEDIA_OBJECT: 'Medias must be an array of media object',
  INVALID_TWEET_ID: 'Invalid tweet id',
  TWEET_NOT_FOUND: 'Tweet not found',
  TWEET_IS_NOT_PUBLIC: 'Tweet is not public'
} as const

export const BOOKMARK_MESSAGES = {
  BOOKMARK_SUCCESSFULLY: 'Bookmark successfully',
  UNBOOKMARK_SUCCESSFULLY: 'Unbookmark successfully'
}

export const LIKE_MESSAGES = {
  LIKE_SUCCESSFULLY: 'Like successfully',
  UNLIKE_SUCCESSFULLY: 'Unlike successfully'
}

export const RESTAURANT_MESSAGES = {
  CREATE_RESTAURANT_SUCCESS: 'Create restaurant successfully',
  UPDATE_RESTAURANT_SUCCESS: 'Update restaurant successfully',
  GET_ALL_RESTAURANT_SUCCESS: 'Get all restaurant successfully',
  DELETE_RESTAURANT_SUCCESS: 'Delete restaurant successfully',
  INVALID_RESTAURANT_ID: 'Invalid restaurant ID',
  RESTAURANT_NOT_FOUND: 'Restaurant not found',
  NAME_IS_REQUIRED: 'Name is required',
  NAME_MUST_BE_A_STRING: 'Name must be a string',
  PHONE_IS_REQUIRED: 'Phone is required',
  PHONE_MUST_BE_A_STRING: 'Phone must be a string',
  ADDRESS_IS_REQUIRED: 'Address is required',
  ADDRESS_MUST_BE_A_STRING: 'Address must be a string',
  EMAIL_IS_REQUIRED: 'Email is required',
  EMAIL_MUST_BE_A_STRING: 'Email must be a string',
  RATING_MUST_BE_A_FLOAT: 'Rating must be a float (or double)',
  IMAGE_MUST_BE_A_STRING: 'Image must be a string',
  ISACTIVE_MUST_BE_A_BOOLEAN: 'isActive must be a boolean'
} as const
export const DELIVERY_INFO_MESSAGES = {
  PROVINCE_CITY_IS_REQUIRED: 'Province city is required',
  PROVINCE_CITY_MUST_BE_A_STRING: 'Province city must be a string',
  DISTRICT_IS_REQUIRED: 'District is required',
  DISTRICT_MUST_BE_A_STRING: 'District must be a string',
  WARD_IS_REQUIRED: 'Ward is required',
  WARD_MUST_BE_A_STRING: 'Ward must be a string',
  STREET_IS_REQUIRED: 'Street is required',
  STREET_MUST_BE_A_STRING: 'Street must be a string',
  IS_DEFAULT_MUST_BE_A_BOOLEAN: 'Is default must be a boolean',
  DELIVERY_INFO_IS_REQUIRED: 'Delivery info is required',
  DELIVERY_INFO_NOT_FOUND: 'Delivery info not found',
  INVALID_DELIVERY_INFO_ID: 'Invalid delivery info id',
  USER_ALREADY_HAVE_DEFAULT_DELIVERY_INFO: 'User already have default delivery info',
  CREATE_DELIVERY_INFO_SUCCESS: 'Create delivery info successfully',
  UPDATE_DELIVERY_INFO_SUCCESS: 'Update delivery info successfully',
  GET_ALL_DELIVERY_INFO_SUCCESS: 'Get all delivery info successfully',
  DELETE_DELIVERY_INFO_SUCCESS: 'Delete delivery info successfully'
}

export const MENUS_MESSAGES = {
  CREATE_MENU_SUCCESS: 'Create menu successfully',
  UPDATE_MENU_SUCCESS: 'Update menu successfully',
  GET_ALL_MENU_SUCCESS: 'Get all menu successfully',
  DELETE_MENU_SUCCESS: 'Delete menu successfully',
  MENU_NOT_FOUND: 'Menu not found',
  INVALID_MENU_ID: 'Invalid menu id',
  RESTAURANT_ID_IS_REQUIRED: 'Restaurant id is required',
  INVALID_RESTAURANT_ID: 'Invalid restaurant id',
  TITLE_IS_REQUIRED: 'Title is required',
  TITLE_MUST_BE_A_STRING: 'Title must be a string'
} as const

export const MENU_ITEM_MESSAGES = {
  CREATE_MENU_ITEM_SUCCESS: 'Create menu item successfully',
  UPDATE_MENU_ITEM_SUCCESS: 'Update menu item successfully',
  GET_ALL_MENU_ITEM_SUCCESS: 'Get all menu item successfully',
  DELETE_MENU_ITEM_SUCCESS: 'Delete menu item successfully',
  INVALID_MENU_ITEM_ID: 'Invalid menu item ID',
  MENU_ITEM_NOT_FOUND: 'Menu item not found',
  MENU_ID_IS_REQUIRED: 'Menu ID is required',
  INVALID_MENU_ID: 'Invalid menu ID',
  TITLE_IS_REQUIRED: 'Title is required',
  TITLE_MUST_BE_A_STRING: 'Title must be a string',
  BASE_PRICE_IS_REQUIRED: 'Base price is required',
  BASE_PRICE_MUST_BE_A_NUMBER: 'Base price must be a number',
  IMAGE_MUST_BE_A_STRING: 'Image must be a string (URL)',
  OPTIONS_MUST_BE_AN_ARRAY: 'Options must be an array'
}
