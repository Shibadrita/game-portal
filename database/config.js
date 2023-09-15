import { Sequelize } from "sequelize"
import dotenv from "dotenv"

dotenv.config()

const sequelize = new Sequelize(
    'online_game_portal',
    'root',
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: 'mysql'
    }
)

export default sequelize