import { SortDirection } from 'mongodb'

import { Sort } from 'mongodb'
import databaseService from '~/services/database.services'
class MenuItemRepo {
  private menuItems = databaseService.menuItems
  async findAll({ limit, sort, page }: { limit: number; sort: string; page: number }) {
    const skip = (page - 1) * limit
    const sortBy: Sort = sort === 'ctime' ? { _id: -1 as SortDirection } : { _id: 1 as SortDirection }

    // const projection: Record<string, 1 | 0> = {}
    // select.forEach((field) => {
    //   projection[field] = 1
    // })

    return await this.menuItems.find().sort(sortBy).skip(skip).limit(limit).toArray()
  }
}

export const menuItemRepository = new MenuItemRepo()
