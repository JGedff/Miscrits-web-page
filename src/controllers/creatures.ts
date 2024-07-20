import { type Request, type Response } from 'express'
import { Creature } from '../models'
import { type MiscritType } from '../types'
import { getCreatureInfo } from '../utils'

const all = (req: Request, res: Response): void => {
  Creature.find({})
    .populate('element')
    .populate('location')
    .then((miscrits: any[]) => {
      res.statusCode = 200
      res.render('creatures', { creatures: true, miscrits })
    })
    .catch((err: any) => {
      console.log(err)
      res.statusCode = 404
      res.render('errors/notFound', { creatures: true })
    })
}

const show = (req: Request, res: Response): void => {
  Creature.findById(req.params.creature)
    .populate('element')
    .populate('location')
    .then((miscrit: any) => {
      console.log(miscrit)
      if (miscrit != null) {
        res.statusCode = 200

        const miscritInfo: MiscritType = getCreatureInfo(miscrit)

        res.render('creatures/show', { creatures: true, miscrit: miscritInfo })
      } else {
        res.statusCode = 404
        res.render('creatures/show', { creatures: true, miscrit })
      }
    })
    .catch((err: any) => {
      console.log(err)
      res.statusCode = 404
      res.render('creatures/show', { creatures: true, miscrit: null })
    })
}

export const creaturesController = {
  all,
  show
}
