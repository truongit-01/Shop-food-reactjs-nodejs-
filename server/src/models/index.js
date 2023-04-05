const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../configs/ConnectDb')


const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./UserModel')(sequelize, DataTypes)
db.roles = require('./RoleModel')(sequelize, DataTypes)
db.user_details = require('./UserDetailModel')(sequelize, DataTypes)

db.sequelize.sync({ force: false })


// Relation User
db.roles.hasMany(db.users, {
    foreignKey: 'role_id',
    as: 'user'
});

db.users.belongsTo(db.roles, {
    foreignKey: 'role_id',
    as: 'role'
});

db.users.hasOne(db.user_details, {
    foreignKey: 'user_id',
    as: 'user_detail',
    onDelete: 'cascade',
});

db.user_details.belongsTo(db.users, {
    foreignKey: 'user_id',
    as: 'user_detail'
});


module.exports = db;

