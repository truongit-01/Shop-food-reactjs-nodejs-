const { Users } = require('../models/UserModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// get user (admin)
let getUsers = async (req, res) => {
    try {
        const users = await Users.findAll({
            attributes: ['id', 'name', 'email']
        });
        res.json(users);
    } catch (error) {
        console.log("err", error)
    }
}

/* User register */
const postRegister = async (req, res) => {
    console.log("ok")
    const { name, email, password, comfirmPass, sex, numberPhone, national } = req.body;
    console.log('name:', name, 'password:', password, 'comfirmPass:', comfirmPass, 'sex', sex, 'numberPhone', numberPhone, 'national', national)
    if (password !== comfirmPass) return res.status(400).json({ msg: "Password và comfirm Password không khớp!" });

    /* check email and phoneNumber exists */
    const userExists = await Users.findOne({
        where: {
            email: email,
        },
    });
    const phoneExists = await Users.findOne({
        where: {
            numberPhone: numberPhone,
        },
    });


    if (userExists) {
        return res.status(400).json({ msg: "Email đã tồn tại!" });
    } else if (phoneExists) {
        return res.status(400).json({ msg: "Số điện thoai này đã được đăng ký!" });
    } else {
        /* create user */
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        try {
            await Users.create({
                name: name,
                email: email,
                password: hashPassword,
                sex: sex,
                numberPhone: numberPhone,
                national: national,
            });

            res.json({ msg: "Register thành công!" })
        } catch (error) {
            console.log("err", error);
        }
    }
}

/* User Login */
const postLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, message: "User must have name!" });
    } else if (!password) {
        return res.status(400).json({ success: false, message: "Product must have Password!" });
    }

    try {
        const user = await Users.findOne({
            where: {
                email: email,
            }
        });

        /* check password */
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json({ msg: "password ko đúng!" });

        /* Generate an access token */
        const userId = user.id;
        const isAdmin = user.isAdmin;
        const Email = user.email;
        const name = user.name;

        /* mã hoá dữ liệu bằng jwt */
        const accessToken = jwt.sign({ id: userId, isAdmin: isAdmin }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1m' /* 15m */
        });

        /*  */
        const refreshToken = jwt.sign({ id: userId, isAdmin: isAdmin }, process.env.REFRESH_TOKEN_SECRET);

        res.json({
            email: Email,
            isAdmin: isAdmin,
            name: name,
            accessToken
        })

    } catch (error) {
        console.log(error)
        res.status(404).json({ msg: "email ko đúng!" });
    }
}

const deleteUserById = async (req, res) => {
    const paramIdUser = req.params.userId

    if (req.user.id == req.params.userId || req.user.isAdmin) {
        const userDetete = await Users.destroy({
            where: {
                id: paramIdUser
            }
        });
        res.status(200).json("User has been deleted.");
    } else {
        res.status(403).json("You are not allowed to delete this user! ");
    }
}

const getUsersAdmin = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const users = await Users.findAll({
                attributes: ['id', 'name', 'email']
            });
            res.json(users);
        } catch (error) {
            console.log("err", error)
        }
        // res.status(200).json("Get User Sussces!");
    } else {
        res.status(403).json("You are not allowed to get users! ")
    }
}

/* Logout */
const Logout = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(204);

    const user = await Users.findAll({
        where: {
            refresh_token: refreshToken
        }
    });

    if (!user[0]) return res.sendStatus(204);

    const userId = user[0].id;
    await Users.update({ refresh_token: null }, {
        where: {
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}

module.exports = {
    getUsers,
    postRegister,
    postLogin,
    deleteUserById,
    getUsersAdmin,
    Logout
}