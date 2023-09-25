import { Router } from "express"
import { body, header } from "express-validator"
import { addGameHandler } from "../controllers/game"

const gameRouter = Router()

gameRouter.post('/',
    body('name').notEmpty(),
    body('instructions').notEmpty(),
    header('Authentication').notEmpty(),
    addGameHandler
)

export default gameRouter