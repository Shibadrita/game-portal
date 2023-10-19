import sequelize from "../database/config.js"
import Play from "../models/Play.js"
import Game from "../models/Game.js"
import User from "../models/User.js"
import catchAsync from "../errors/async.js"

export const getGameScoresHandler = catchAsync(async (req, res) => {
    const { id } = req.params
    await sequelize.sync()
    const plays = await Play.findAll({ where: { userId: id } })
    res.status(200).json({
        success: true,
        message: 'Play record successfully retrieved',
        data: { plays }
    })
})

export const addPlayHandler = catchAsync(async (req, res) => {
    const { gameId, userId, score } = req.body
    await sequelize.sync()
    const game = await Game.findOne({ where: { id: gameId } })
    if (!game) throw new Error('Invalid game encountered')
    const user = await User.findOne({ where: { id: userId } })
    if (!user) throw new Error('Invalid user encountered')
    const play = await Play.findOne({ where: { gameId, userId } })
    if (play) {
        play.score += score
        await play.save()
    } else {
        await Play.create({ gameId, userId, score })
    }
    res.status(201).json({
        success: true,
        message: 'Play record successfully added'
    })
})