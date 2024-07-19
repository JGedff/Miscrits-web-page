import { Router } from 'express'
import { mainController } from '../controllers'

const router = Router()

router.get('/', mainController.main)
router.get('*', mainController.other)

export const mainRouter = router
