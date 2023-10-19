import { Router } from "express"
import { body, header } from "express-validator"
import { addGameHandler, getGameHandler } from "../controllers/game.js"
import { isAuthenticated } from "../middlewares/auth.js"

const gameRouter = Router()

gameRouter.get('/:slug',
    header('authorization').notEmpty(),
    isAuthenticated,
    getGameHandler
)

gameRouter.post('/',
    body('name').notEmpty(),
    body('instructions').notEmpty(),
    header('authorization').notEmpty(),
    isAuthenticated,
    addGameHandler
)

export default gameRouter