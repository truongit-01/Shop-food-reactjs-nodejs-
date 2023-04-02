// const { Sequelize } = require("sequelize");
// const db = require('../configs/Database');
// const { User } = require("./UserModel");

// const { DataTypes } = Sequelize;

// // tạo bảng user_detail
// const Role = db.define('roles', {
//     role_id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name: {
//         type: DataTypes.STRING
//     },
// });

// // Liên kết mô hình Food với mô hình Category thông qua khóa ngoại
// // Khi liên kết kiểu này thì sài với finkPk
// Role.hasMany(User, {
//     foreignKey: 'role_id',
//     as: 'users',
//     through: ActorMovies
// });

// module.exports = {
//     Role,
// }

module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define("roles", {
        role_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        role_name: {
            type: DataTypes.STRING
        },
    })

    return Role;
}