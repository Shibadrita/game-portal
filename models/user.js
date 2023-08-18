import { DataTypes } from "sequelize"
import sequelize from "../database/config.js"

const User = sequelize.define('User', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false
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

export default User