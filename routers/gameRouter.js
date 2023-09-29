import { Router } from "express"
import { body, header } from "express-validator"
import { addGameHandler } from "../controllers/game.js"
import { isAuthenticated } from "../middlewares/auth.js"

const gameRouter = Router()

gameRouter.post('/',
    body('name').notEmpty(),
    body('instructions').notEmpty(),
    header('Authentication').notEmpty(),
    isAuthenticated,
    addGameHandler
)

export default gameRouter