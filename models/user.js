import { DataTypes, UUIDV4 } from "sequelize"
import sequelize from "../database/config.js"

const User = sequelize.define('users', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        get() {
            return this.getDataValue('email').split('@')[0]
        },
        set(value) {
            throw new Error(`'username' is virtual property and cannot be set to ${value}`)
        }
    },
    firstname: {
        type: DataTypes.STRING,
    },
    lastname: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.INTEGER,
    },
    reputation: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    won: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    lost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
})

sequelize.sync()
    .then(() => console.log('users table created'))
    .catch(err => console.error('failed to create users table', err))

export default User