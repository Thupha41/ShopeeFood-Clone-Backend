export interface IOptions {
  title: string
  description: string
  additionalPrice: number
}

export interface UpsertMenuItemReqBody {
  menu_id: string
  title: string
  basePrice: number
  image: string
  options: Array<IOptions>
}
