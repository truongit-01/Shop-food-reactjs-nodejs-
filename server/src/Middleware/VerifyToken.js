const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (authHeader) {
        const token = authHeader.split(" ")[1];

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            // console.log("user", user)
            if (err) {
                return res.status(403).json("Token is not valid!");
            }

            req.user = user;
            next()
        });

    } else {
        res.status(401).json("You are not authenticated!");
    }

    // const token = authHeader && authHeader.split(' ')[1];

    // if (token == null) return res.sendStatus(401);
    // jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    //     // if (err) return res.sendStatus(403);
    //     console.log(err)
    //     if (err) return res.status(403).json("có lỗi");
    //     req.email = decoded.email;
    //     next();
    // })
}

module.exports = {
    verifyToken,
}