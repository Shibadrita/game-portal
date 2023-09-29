import sequelize from "../database/config.js"
import Play from "../models/Play.js"
import catchAsync from "../errors/async.js"

export const addPlayHandler = catchAsync(async (req, res) => {
    const { gameId, userId, score } = req.body
    await sequelize.sync()
    const { id } = await Play.create({ gameId, userId, score })
    res.status(201).json({
        success: true,
        message: 'Play record successfully added',
        data: { id }
    })
})