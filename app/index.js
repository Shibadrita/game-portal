import express from "express"
import dotenv from "dotenv"
import sequelize from "../database/config.js"
import authRouter from "../routers/authRouter.js"
import userRouter from "../routers/userRouter.js"

dotenv.config()
const app = express()

sequelize.authenticate()
    .then(() => console.log('database connected'))
    .catch(err => console.error('database connection failed', err))

app.use(express.json())
app.use('/', authRouter)
app.use('/users', userRouter)

app.listen((process.env.PORT, () => console.log("server in on")))