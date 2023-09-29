import sequelize from "../database/config.js"
import User from "../models/User.js"
import jwt from "jsonwebtoken"
import catchAsync from "../errors/async.js"

export const isAuthenticated = catchAsync(async (req, res, next) => {
    const { Authentication } = req.headers
    const token = Authentication.split(' ')[1]
    const { id } = jwt.verify(token, process.env.TOKENSECRET)
    await sequelize.sync()
    const user = await User.findOne({ where: { id } })
    if (!user) throw new Error('You are not authenticated')
    next()
})