import { type Request, type Response } from 'express'
import { Elementum } from '../models'

const all = (req: Request, res: Response): void => {
  Elementum.find({})
    .populate('element')
    .populate('location')
    .then((elementums: any[]) => {
      res.statusCode = 200
      res.render('elementums', { elements: true, elementums })
    })
    .catch((err: any) => {
      console.log(err)
      res.statusCode = 404
      res.render('errors/notFound', { elements: true })
    })
}

const show = (req: Request, res: Response): void => {
  Elementum.findById(req.params.element)
    .populate('element')
    .populate('location')
    .then((element: any) => {
      console.log(element)
      if (element != null) {
        res.statusCode = 200
        res.render('elementums/show', { elements: true, element })
      } else {
        res.statusCode = 404
        res.render('elementums/show', { elements: true, element })
      }
    })
    .catch((err: any) => {
      console.log(err)
      res.statusCode = 404
      res.render('errors/notFound', { elements: true })
    })
}

export const elementumsController = {
  all,
  show
}
