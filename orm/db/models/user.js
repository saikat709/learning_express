const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.NUMBER,
            autoIncrement: true,
            primaryKey: true,
        },

        email: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

    },
    
    {
        freezeTableName: false,
        timestamps: true,
    }
);