import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    'online_game_portal',
    'root',
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: 'mysql'
    }
)

sequelize.authenticate()
    .then(() => console.log('database connected'))
    .catch(() => console.log('database connection failed'))

export default sequelize