const { DataTypes, Model } = require("sequelize");
const sequelize = require("../sequelize");
const User = require("./user");

const Profile = sequelize.define(
    'Profile',
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
        bio: {
            type: DataTypes.TEXT,
            allowNull: false,
        }

    },

    {
        freezeTableName: false,
        timestamps: true,
    }
);

Profile.belongsTo(User, {
    onDelete: 'Cascade',
});

module.exports = Profile;