module.exports = (sequelize, DataTypes) => {
    const User_detail = sequelize.define("userDetails", {
        user_detail_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        full_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.ENUM('male', 'female', 'other')
        },
        numberPhone: {
            type: DataTypes.STRING
        },
        national: {
            type: DataTypes.STRING
        },
        address: {
            type: DataTypes.STRING
        },
        phone_number: {
            type: DataTypes.STRING
        },
        avatar_url: {
            type: DataTypes.STRING
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.NOW
        },
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: sequelize.NOW
        }
    })

    return User_detail;
}