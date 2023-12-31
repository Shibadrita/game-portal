import { Router } from "express"
import { body, header } from "express-validator"
import { getGameScoresHandler, addPlayHandler } from "../controllers/play.js"
import { isAuthenticated } from "../middlewares/auth.js"

const playRouter = Router()

playRouter.get('/:id',
    header('authorization').notEmpty(),
    isAuthenticated,
    getGameScoresHandler
)

playRouter.post('/',
    body('gameId').notEmpty(),
    body('userId').notEmpty(),
    body('score').notEmpty(),
    header('authorization').notEmpty(),
    isAuthenticated,
    addPlayHandler
)

export default playRouter