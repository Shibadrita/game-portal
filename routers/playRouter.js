import { Router } from "express"
import { body, header } from "express-validator"
import { addPlayHandler } from "../controllers/play"

const playRouter = Router()

playRouter.post('/',
    body('gameId').notEmpty(),
    body('userId').notEmpty(),
    body('score').notEmpty(),
    header('Authentication').notEmpty(),
    addPlayHandler
)

export default playRouter