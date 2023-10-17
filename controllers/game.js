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

export const getGameHandler = catchAsync(async (req, res) => {
    const { slug } = req.params
    const gameName = slug.split('-')
    for (let i = 0; i < gameName.length; i++)gameName[i] = gameName[i][0].toUpperCase() + gameName[i].substring(1)
    const refinedName = gameName.join(' ')
    await sequelize.sync()
    const game = await Game.findOne({ where: { name: refinedName } })
    res.status(200).json({
        success: true,
        message: 'Game retrieved',
        data: { game }
    })
})