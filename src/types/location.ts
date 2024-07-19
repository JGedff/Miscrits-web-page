import { type AreaType } from './area'
import { type KingodmType } from './kingdom'

export interface LocationType {
  doc: string
  name: string
  image: string
  kingdom: KingodmType
  areas: AreaType[]
}
