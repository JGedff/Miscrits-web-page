import { Router } from 'express'
import { locationsController } from '../controllers'

const router = Router()

router.get('/', locationsController.all)
router.get('/:location', locationsController.show)

export const locationsRouter = router
