const express = require('express');
const  { connectDB } = require("./configs/ConnectDb");
const configViewEngine = require('./configs/viewsEngine'); // sử dụng configviewEngine
require('dotenv').config(); // sử dụng dotenv
const cookieParser = require("cookie-parser");
// const { User, UserDetail } = require("./models/UserModel");
// const { Foods, CategoryFood} = require("./models/ProductFoodModel");
// const { Products } = require('./models/ProductModel');
// const { Role } = require('./models/RoleModel.js');
const db = require("./models/index")

const app = express(); // khởi tạo app từ express
const port = process.env.PORT; // sử dụng PORT ở file .env

var cors = require('cors') // cho phép sử dụng port
app.use(cors()) // Use thư viện cors để có thể gọi api từ bên front

/*  */
const initApiUser = require("./routes/UserRoutes");
const initApiProductFood = require("./routes/ProductFoodRoutes");
const initProduct = require('./routes/ProductRoutes.js');


/// kết nối DB
// async function connectDBs() {
//     try {
//         await connectDB();
//         console.log("connect Db thành công!");
//         // await User.sync(); 
//         // await Role.sync();
//         // await CategoryFood.sync(); 
//         // await Foods.sync(); 
//         // await Products.sync();
//         // await UserDetail.sync();
//     } catch (error) {
//         console.error("có lỗi", error)
//     }
// }
// connectDBs()
connectDB()

app.use(express.json()); // use express json (khi post lên), dòng này phải nằm trên router
app.use(cookieParser()); // 
 

configViewEngine(app); // set up view engine (chính là express)

/* router */
initApiUser(app);
initApiProductFood(app);
initProduct(app);

/* static Images Folder */
app.use('Images', express.static('./Images'));



// lắng nghe port
app.listen(port, () => {
    console.log(`Lắng nge port ở http://localhost:${port}`)
})