import { Router } from "express"
import { body, header } from "express-validator"
import { signupHandler, signinHandler, signoutHandler } from "../controllers/auth.js"

const authRouter = Router()

authRouter.post('/signup',
    body('email').notEmpty().isEmail(),
    body('password').notEmpty().isStrongPassword({ minLength: 6 }),
    signupHandler
)

authRouter.post('/signin',
    body('email').notEmpty().isEmail(),
    body('password').notEmpty().isStrongPassword({ minLength: 6 }),
    signinHandler
)

authRouter.post('/signout',
    header('Authentication').notEmpty(),
    signoutHandler
)

export default authRouter