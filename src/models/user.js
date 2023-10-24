const { DataTypes } = require("sequelize");
const sequelize = require("../database/sqlite");

const User = sequelize.define("User", {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
    },
});

module.exports = User;
