import { Router } from 'express'
import { npcsController } from '../controllers'

const router = Router()

router.get('/', npcsController.all)
router.get('/:npc', npcsController.show)

export const npcsRouter = router
