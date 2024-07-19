import { type MiscritType, type SkillType } from '../types'

export const getCreatureInfo = (miscrit: any): MiscritType => {
  const miscritInfo: MiscritType = {
    doc: miscrit.doc,
    name: miscrit.name,
    image: miscrit.image,
    description: miscrit.description,
    rarity: miscrit.rarity,
    element: miscrit.element,
    location: miscrit.location,
    stats: miscrit.stats,
    skills: []
  }

  miscrit.skills.forEach((skill: SkillType) => {
    const skillInfo = {
      Nombre: skill.Nombre,
      Poder: skill.Poder,
      Precision: skill.Precision,
      Objetivo: skill.Objetivo,
      Efecto: skill.Efecto,
      Elemento: skill.Elemento,
      Nivel: skill.Nivel
    }

    miscritInfo.skills.push(skillInfo)
  })

  return miscritInfo
}
