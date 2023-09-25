import { DataTypes, UUIDV4 } from "sequelize"
import sequelize from "../database/config.js"
import User from "./User.js"
import Game from "./Game.js"

const Play = sequelize.define('plays', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    gameId: {
        type: DataTypes.UUID,
        references: {
            model: 'games',
            key: 'id'
        }
    },
    userId: {
        type: DataTypes.UUID,
        references: {
            model: 'users',
            key: 'id'
        }
    },
    score: {
        type: DataTypes.INTEGER
    }
})

User.hasMany(Play)
Game.hasMany(Play)

sequelize.sync()
    .then(() => console.log('plays table created'))
    .catch(err => console.error('failed to create plays table', err))

export default Play