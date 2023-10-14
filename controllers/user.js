import sequelize from "../database/config.js"
import User from "../models/User.js"
import catchAsync from "../errors/async.js"

export const findOneUserHandler = catchAsync(async (req, res) => {
    const { id } = req.params
    console.log(id)
    await sequelize.sync()
    const user = await User.findOne({ where: { id } })
    if (!user) throw new Error('User not found!')
    res.status(200).json({
        success: true,
        message: 'User successfully fetched',
        data: { user }
    })
})

export const findAllUsersHandler = catchAsync(async (req, res) => {
    await sequelize.sync()
    const users = await User.findAll()
    res.status(200).json({
        success: true,
        message: 'User successfully fetched',
        data: { users }
    })
})