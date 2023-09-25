import { DataTypes, UUIDV4 } from "sequelize"
import sequelize from "../database/config.js"

const Game = sequelize.define('games', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    instructions: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

sequelize.sync()
    .then(() => console.log('games table created'))
    .catch(err => console.error('failed to create games table', err))

export default Game