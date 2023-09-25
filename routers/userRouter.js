import { Router } from "express"
import { header } from "express-validator"
import { findOneUserHandler, findAllUsersHandler } from "../controllers/user"

const userRouter = Router()

userRouter.get('/:id',
    header('Authentication').notEmpty(),
    findOneUserHandler
)

userRouter.get('/',
    header('Authentication').notEmpty(),
    findAllUsersHandler
)

export default userRouter