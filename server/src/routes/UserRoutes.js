const express = require('express') // use library express 
const UserController = require('../controller/UserController');
const { verifyToken } = require('../Middleware/VerifyToken');
const { refreshToken } = require('../controller/RefreshToken');


let router = express.Router();

const initUserRoutes = (app) => {
    router.get('/users', verifyToken, UserController.getUsers);
    router.post('/users', UserController.postRegister);
    router.post('/login', UserController.postLogin);
    router.delete('/users/:userId',  verifyToken, UserController.deleteUserById);
    // router.update('/users/:userId', verifyToken, UserController.)
    router.get('/usersAdmin',  verifyToken, UserController.getUsersAdmin);
    // router.delete('/refresh',  );
    router.get('/token', refreshToken);





    // router.get('/token', refreshToken);
    router.get('/cookies', (req, res) => {
        // Xem toàn bộ cookie
        // res.send(req.cookies);

        const users =  {
            name: 'truong'
        }

        res.cookie('user', users);
        // res.send('<h3>Đã thêm thông tin user vào cookie</h3>');
        res.json(users)
    });




    return app.use('/api/v1/', router)
}

module.exports = initUserRoutes;