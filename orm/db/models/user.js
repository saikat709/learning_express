const { DataTypes, Model } = require("sequelize");
const sequelize = require("../sequelize");
const Profile = require("./profile");

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

User.hasOne( Profile, {});

module.exports = User;


// class based
class User1 extends Model{
    static async tatalCount(){
        return (await this.findAll()).length;
    }

}
User1.init(
    {
        abc: DataTypes.BIGINT,   // table columns 
    },
    {
        sequelize: sequelize
    }
)