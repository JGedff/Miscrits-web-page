import { type Request, type Response } from 'express'
import { Npc } from '../models'

const all = (req: Request, res: Response): void => {
  Npc.find({})
    .then((npcs: any[]) => {
      res.statusCode = 200
      res.render('npcs', { npcs: true, arrayNpcs: npcs })
    })
    .catch((err: any) => {
      console.log(err)
      res.statusCode = 404
      res.render('errors/notFound', { npcs: true })
    })
}

const show = (req: Request, res: Response): void => {
  Npc.findById(req.params.npc)
    .then((npc: any) => {
      console.log(npc)
      if (npc != null) {
        res.statusCode = 200
        res.render('npcs/show', { npcs: true, npc })
      } else {
        res.statusCode = 404
        res.render('npcs/show', { npcs: true, npc })
      }
    })
    .catch((err: any) => {
      console.log(err)
      res.statusCode = 404
      res.render('errors/notFound', { npcs: true })
    })
}

export const npcsController = {
  all,
  show
}
