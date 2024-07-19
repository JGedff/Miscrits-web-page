import { Router } from 'express'
import { elementumsController } from '../controllers'

const router = Router()

router.get('/', elementumsController.all)
router.get('/:element', elementumsController.show)

export const elementumsRouter = router
