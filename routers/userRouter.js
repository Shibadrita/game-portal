import { Router } from "express"
import { header } from "express-validator"
import { findOneUser, findAllUsers } from "../controllers/user"

const userRouter = Router()

userRouter.get('/:id',
    header('Authentication').notEmpty(),
    findOneUser
)

userRouter.get('/',
    header('Authentication').notEmpty(),
    findAllUsers
)

export default userRouter