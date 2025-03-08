import _ from 'lodash'

export const removeNull = (object: any) => {
  return _.omitBy(object, _.isNil)
}
