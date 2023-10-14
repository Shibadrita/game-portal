import { Router } from "express"
import { body, header } from "express-validator"
import { addGameHandler } from "../controllers/game.js"
import { isAuthenticated } from "../middlewares/auth.js"

const gameRouter = Router()

gameRouter.get('/',
    header('authentication').notEmpty(),

)

gameRouter.post('/',
    body('name').notEmpty(),
    body('instructions').notEmpty(),
    header('authentication').notEmpty(),
    isAuthenticated,
    addGameHandler
)

export default gameRouter