import sequelize from "../database/config.js"
import User from "../models/User.js"
import catchAsync from "../errors/async.js"

export const findOneUser = catchAsync(async (req, res) => {
    const { id } = req.params
    await sequelize.sync()
    const user = await User.findOne({ where: { id } })
    if (!user) throw new Error('User not found!')
    res.status(200).json({
        success: true,
        message: 'User successfully fetched',
        data: { user }
    })
})

export const findAllUsers = catchAsync(async (req, res) => {
    await sequelize.sync()
    const users = await User.findAll()
    res.status(200).json({
        success: true,
        message: 'User successfully fetched',
        data: { users }
    })
})