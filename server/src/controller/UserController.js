const { Users } = require('../models/UserModel');
const db = require('../models/index')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



/*  create User (admin) */
const postCreateUser = async (req, res) => {
    const { name, email, password, comfirmPass, role_id } = req.body;
    if (!name || !email || !password || !comfirmPass || !role_id) {
        return res.status(400).json({ message: "Vui lòng nhập đầy đủ thông tin!" });
    }

    if (password !== comfirmPass) return res.status(400).json({ message: "Mật khẩu và nhập lại Password không khớp!" });

    /* check email and phoneNumber exists */
    const userExists = await db.users.findOne({
        where: {
            email: email,
        },
    });

    if (userExists) {
        return res.status(400).json({ message: "Email này đã được sử dụng!" });
    } else {
        /* create user */
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        try {
            await db.users.create({
                name: name,
                email: email,
                password: hashPassword,
                role_id: role_id,
            });

            res.json({ message: "Tạo tài khoản thành công!" })
        } catch (error) {
            console.log("err", error);
        }
    }
}

/* User Login */
const postLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        return res.status(400).json({ success: false, message: "Vui lòng nhập email!" });
    } else if (!password) {
        return res.status(400).json({ success: false, message: "Vui lòng nhập mật khẩu!" });
    }

    try {
        const user = await db.users.findOne({
            where: {
                email: email,
            }
        });

        /* check password */
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(400).json({ message: "password ko đúng!" });

        /* Generate an access token */
        const userId = user.id;
        const isAdmin = user.isAdmin;
        const Email = user.email;
        const name = user.name;

        /* mã hoá dữ liệu bằng jwt */
        const accessToken = jwt.sign({ id: userId, isAdmin: isAdmin }, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '30m' /* 15m */
        });

        /*  */
        const refreshToken = jwt.sign({ id: userId, isAdmin: isAdmin }, process.env.REFRESH_TOKEN_SECRET);

        res.json({
            email: Email,
            isAdmin: isAdmin,
            name: name,
            accessToken,
        })

    } catch (error) {
        console.log(error)
        res.status(404).json({ message: "email ko đúng!" });
    }
}


// get user (admin)
let getUsers = async (req, res) => {
    const IdQuery = req.query.id;

    try {
        let user = null;
        if (IdQuery === 'ALL') {
            user = await db.users.findAll({
                attributes: ['user_id', 'name', 'email']
            });
            res.json(user);
        } else {
            user = await db.users.findByPk(id, {
                include: [
                    {
                        model: db.userDetails,
                        attributes: [
                            "full_name",
                        ],
                        as: "userDetails",
                    },
                ],
                raw: true,
                nest: true,
            });
        }

        if (!user) {
            res.status(404).json({ message: "Không tìm thất user!" });
        } else {
            if (user) delete user.password;
            res.status(200).json({
                code: 0,
                message: "Get user completed",
                data: user,
            });
        }

    } catch (error) {
        console.log("Lỗi server", error);
        res.status(500).json({ message: "Server error" });
    };
}


/* User register */
const postRegister = async (req, res) => {
    const { name, email, password, comfirmPass } = req.body;
    if (!name || !email || !password || !comfirmPass) {
        return res.status(400).json({ message: "Vui lòng nhập đầy đủ thông tin!" });
    }

    if (password !== comfirmPass) return res.status(400).json({ msg: "Password và comfirm Password không khớp!" });

    /* check email and phoneNumber exists */
    const userExists = await db.users.findOne({
        where: {
            email: email,
        },
    });

    if (userExists) {
        return res.status(400).json({ msg: "Email đã tồn tại!" });
    } else {
        /* create user */
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        try {
            await db.users.create({
                name: name,
                email: email,
                password: hashPassword,
                role_id: 2
            });

            return res.json({ msg: "Register thành công!" })
        } catch (error) {
            console.log("err", error);
        }
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
    postCreateUser,
    getUsers,
    postRegister,
    postLogin,
    deleteUserById,
    getUsersAdmin,
    Logout,
}