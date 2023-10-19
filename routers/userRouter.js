import { Router } from "express"
import { header } from "express-validator"
import { findOneUserHandler, findAllUsersHandler } from "../controllers/user.js"
import { isAuthenticated } from "../middlewares/auth.js"

const userRouter = Router()

userRouter.get('/:id',
    header('authorization').notEmpty(),
    isAuthenticated,
    findOneUserHandler
)

userRouter.get('/',
    header('authorization').notEmpty(),
    isAuthenticated,
    findAllUsersHandler
)

export default userRouter