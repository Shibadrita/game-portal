import sequelize from "../database/config.js"
import User from "../models/User.js"
import catchAsync from "../errors/async.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const signupHandler = catchAsync(async (req, res) => {
    const { email, password } = req.body
    console.log(req.body)
    await sequelize.sync()
    const hashed = await bcrypt.hash(password, 10)
    await User.create({ email, password: hashed })
    const { id } = await User.findOne({ email })
    const token = jwt.sign({ id }, process.env.TOKENSECRET)
    res.status(201).json({
        success: true,
        message: 'User signed up successfully',
        data: { token }
    })
})

export const signinHandler = catchAsync(async () => {
    const { email, password } = req.body
    await sequelize.sync()
    const user = await User.findOne({ email })
    if (!user) {
        throw new Error('User does not exist')
    }
    const { id, password: savedPw } = user
    if (!bcrypt.compare(password, savedPw)) {
        throw new Error('Password is incorrect')
    }
    const token = jwt.sign({ id }, process.env.TOKENSECRET)
    res.status(200).json({
        success: true,
        message: 'User signed in successfully',
        data: { token }
    })
})

export const signoutHandler = catchAsync(() => {

})