// const { Sequelize } = require("sequelize");
// const db = require('../configs/Database');
// const { Role } = require("./RoleModel");

// const { DataTypes } = Sequelize;

// const User = db.define('users', {
//     user_id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name: {
//         type: DataTypes.STRING
//     },
//     email: {
//         type: DataTypes.STRING
//     },
//     password: {
//         type: DataTypes.STRING
//     },
//     refresh_token: {
//         type: DataTypes.STRING
//     },
//     role_id: {
//         type: DataTypes.INTEGER
//     },
// }, {
//     freezeTableName: true
// });

// // tạo bảng user_detail
// const UserDetail = db.define('userDetail', {
//     user_detail_id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     full_name: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     gender: {
//         type: DataTypes.ENUM('male', 'female', 'other')
//     },
//     numberPhone: {
//         type: DataTypes.STRING
//     },
//     national: {
//         type: DataTypes.STRING
//     },
//     address: {
//         type: DataTypes.STRING
//     },
//     phone_number: {
//         type: DataTypes.STRING
//     },
//     avatar_url: {
//         type: DataTypes.STRING
//     },
//     created_at: {
//         type: DataTypes.DATE,
//         defaultValue: Sequelize.NOW
//     },
//     updated_at: {
//         type: DataTypes.DATE,
//         defaultValue: Sequelize.NOW
//     }
// });


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
//     as: 'users'
// });


// Liên kết mô hình Food với mô hình Category thông qua khóa ngoại
// Khi liên kết kiểu này thì sài với finkPk
// User.hasOne(UserDetail, {
//     foreignKey: 'user_id',
// });

// UserDetail.belongsTo(User, {
//     foreignKey: 'user_id',
//     as: "userDetail",
// });

// User.belongsTo(Role, {
//     foreignKey: 'role_id',
//     as: "roles",
//     through: Role
// });


// module.exports = {
//     User,
//     UserDetail
// }


module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("users", {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        refresh_token: {
            type: DataTypes.STRING
        },
    }, {
        freezeTableName: true
    }
    )

    return User;
}