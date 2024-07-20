import { type Request, type Response } from 'express'
import { Kingdom, Location } from '../models'

const all = (req: Request, res: Response): void => {
  Kingdom.find({})
    .populate('locations')
    .then((kingdoms: any[]) => {
      res.statusCode = 200
      res.render('locations', { locations: true, kingdoms })
    })
    .catch((err: any) => {
      console.log(err)
      res.statusCode = 404
      res.render('errors/notFound', { locations: true })
    })
}

const show = (req: Request, res: Response): void => {
  Location.findById(req.params.location)
    .populate({
      path: 'areas',
      populate: {
        path: 'miscrits',
        model: 'Creature'
      }
    })
    .then((location: any) => {
      if (location != null) {
        res.statusCode = 200
        res.render('locations/show', { locations: true, location })
      } else {
        res.statusCode = 404
        res.render('locations/show', { locations: true, location })
      }
    })
    .catch((err: any) => {
      console.log(err)
      res.statusCode = 404
      res.render('locations/show', { locations: true, location: null })
    })
}

export const locationsController = {
  all,
  show
}
