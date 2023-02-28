const { Sequelize } = require("sequelize");
const db = require('../configs/Database');

const { DataTypes } = Sequelize;

const Users = db.define('users', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    sex: {
        type: DataTypes.INTEGER
    },
    numberPhone: {
        type: DataTypes.STRING
    },
    national: {
        type: DataTypes.STRING
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    refresh_token: {
        type: DataTypes.STRING
    },
}, {
    freezeTableName: true
});

module.exports = {
    Users,
}