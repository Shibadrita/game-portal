import sequelize from "../database/config.js"
import User from "../models/User.js"
import catchAsync from "../errors/async.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const signupHandler = catchAsync(async (req, res) => {
    const { email, password } = req.body
    await sequelize.sync()
    const user = await User.findOne({ where: { email } })
    if (user) throw new Error('You are already registered')
    const hashed = await bcrypt.hash(password, 10)
    const { id } = await User.create({ email, password: hashed })
    const token = jwt.sign({ id }, process.env.TOKENSECRET)
    res.status(201).json({
        success: true,
        message: 'You signed up successfully',
        data: { token }
    })
})

export const signinHandler = catchAsync(async () => {
    const { email, password } = req.body
    await sequelize.sync()
    const user = await User.findOne({ where: { email } })
    if (!user) throw new Error('You are not registered')
    const { id, password: savedPw } = user
    if (!bcrypt.compare(password, savedPw)) throw new Error('Password is incorrect')
    const token = jwt.sign({ id }, process.env.TOKENSECRET)
    res.status(200).json({
        success: true,
        message: 'You signed in successfully',
        data: { token }
    })
})

export const signoutHandler = catchAsync(() => {

})