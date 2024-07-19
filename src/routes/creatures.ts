import { Router } from 'express'
import { creaturesController } from '../controllers'

const router = Router()

router.get('/', creaturesController.all)
router.get('/:creature', creaturesController.show)

export const creaturesRouter = router
