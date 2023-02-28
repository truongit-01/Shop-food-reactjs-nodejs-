const express = require('express');
const db = require("./configs/Database.js");
const configViewEngine = require('./configs/viewsEngine'); // sử dụng configviewEngine
require('dotenv').config(); // sử dụng dotenv
const cookieParser = require("cookie-parser");
// const { Users } = require("./models/UserModel");


const app = express(); // khởi tạo app từ express
const port = process.env.PORT; // sử dụng PORT ở file .env

var cors = require('cors') // cho phép sử dụng port
app.use(cors()) // Use thư viện cors để có thể gọi api từ bên front

/*  */
const initApiUser = require("./routes/UserRoutes");

/// kết nối DB
async function connectDB() {
    try {
        await db.authenticate();
        console.log("connect Db thành công!");

        // await Users.sync(); /* query create model */
    } catch (error) {
        console.error("có lỗi", error)
    }
}
connectDB()

app.use(express.json()); // use express json (khi post lên), dòng này phải nằm trên router
app.use(cookieParser()); // 
configViewEngine(app); // set up view engine (chính là express)

/* router */
initApiUser(app)



// lắng nghe port
app.listen(port, () => {
    console.log(`Lắng nge port ở http://localhost:${port}`)
})