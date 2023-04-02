const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../configs/ConnectDb')


const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./UserModel')(sequelize, DataTypes)
db.roles = require('./RoleModel')(sequelize, DataTypes)
db.userDetails = require('./UserDetailModel')(sequelize, DataTypes)

db.sequelize.sync({ force: false })


// Relation User
db.roles.hasMany(db.users, {
    foreignKey: 'role_id',
    as: 'users'
});

db.users.belongsTo(db.roles, {
    foreignKey: 'role_id',
    as: 'roles'
});

db.users.hasOne(db.userDetails, {
    foreignKey: 'user_id',
    as: 'users'
});

db.userDetails.belongsTo(db.users, {
    foreignKey: 'user_id',
    as: 'userDetails'
});


module.exports = db;

