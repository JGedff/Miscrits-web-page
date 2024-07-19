import { type Request, type Response } from 'express'

const main = (req: Request, res: Response): void => {
  res.render('info', { inicio: true })
}

const other = (req: Request, res: Response): void => {
  res.statusCode = 404
  res.render('errors/notFound')
}

export const mainController = {
  main,
  other
}
