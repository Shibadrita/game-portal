import sequelize from "../database/config.js"
import Game from "../models/Game.js"
import catchAsync from "../errors/async.js"

export const addGameHandler = catchAsync(async (req, res) => {
    const { name, instructions } = req.body
    await sequelize.sync()
    const { id } = await Game.create({ name, instructions })
    res.status(201).json({
        success: true,
        message: 'Game successfully added',
        data: { id }
    })
})