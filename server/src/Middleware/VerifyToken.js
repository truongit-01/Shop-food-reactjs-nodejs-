const jwt = require("jsonwebtoken");
const db = require("../models/index")

const verifyToken = (token) => {
    console.log(token, 'token')
    if (!token) {
        throw new Error("Invalid token!");
    }

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        // console.log(decoded, 'decoded') { iat: 1680533726, exp: 1680535526 }
        return decoded;
    } catch (err) {
        throw new Error("Token is not valid!");
    }
}

const authRole = (role_name) => async (req, res, next) => {
    try {
        const decoded = await verifyToken(
            req.headers["authorization"].split(" ")[1]
        );
        console.log(decoded, 'decoded')

        /* tìm model role có id role khớp với admin hay không */
        const role = await db.roles.findByPk(+decoded.role_id);

        /* kiểm tra  */
        if (role.role_name !== role_name) {
            throw new Error(`Admin mới có quyền truy cập!`);
        }
        req.user = decoded;
        next();

    } catch (err) {
        console.log(err);
        return res.status(401).json({ message: err.message });
    }
};

/*  */
const authAdmin = authRole("admin")

module.exports = {
    verifyToken,
    authAdmin,
}