import { type ElementType } from './element'
import { type LocationType } from './location'

export interface SkillType {
  Nombre: string
  Poder: number
  Precision: string
  Objetivo: string
  Efecto: string
  Elemento: string
  Nivel: number
}

export interface MiscritType {
  doc: string
  name: string
  image: string
  description: string
  rarity: string
  element: ElementType
  location: LocationType
  stats: string
  skills: SkillType[]
}
