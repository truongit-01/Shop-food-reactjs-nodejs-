const { Sequelize } = require("sequelize");
const db = require('../configs/Database');
// const sequelize = new Sequelize('mysql://root:@localhost:3306/shop_food');

const { DataTypes } = Sequelize;


const CategoryFood = db.define('CategoryFood', {
    categoryId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cateName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cateImage: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true
});

const Foods = db.define('foods', {
    FoodId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    FoodName: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    cateId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    // refresh_token: {
    //     type: DataTypes.STRING
    // },
}, {
    freezeTableName: true
});


// Liên kết mô hình Food với mô hình Category thông qua khóa ngoại
// Khi liên kết kiểu này thì sài với finkPk
// Foods.belongsTo(CategoryFood, {
//     foreignKey: 'cateId',
//     targetKey: 'categoryId'
// });
// CategoryFood.hasMany(Foods);


// sequelize.sync();
// sequelize.query('CREATE TABLE IF NOT EXISTS Foods (id INTEGER PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL)');

module.exports = {
    CategoryFood,
    Foods,
}