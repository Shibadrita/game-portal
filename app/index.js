import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import sequelize from "../database/config.js"
import authRouter from "../routers/authRouter.js"
import userRouter from "../routers/userRouter.js"
import gameRouter from "../routers/gameRouter.js"
import playRouter from "../routers/playRouter.js"

dotenv.config()
const app = express()

sequelize.authenticate()
    .then(() => console.log('database connected'))
    .catch(err => console.error('database connection failed', err))

app.use(cors())
app.use(express.json())

app.use('/', authRouter)
app.use('/users', userRouter)
app.use('/games', gameRouter)
app.use('/plays', playRouter)

app.listen(process.env.PORT, () => console.log("server in on"))