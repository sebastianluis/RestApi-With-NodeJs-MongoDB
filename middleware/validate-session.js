var jwt = require("jsonwebtoken");
var user = require("../models/user");
var constants = require("../config/constants");
module.exports = (req, res, next) => {
    var sessionToken = req.headers.authorization;
    if (!req.body.user && sessionToken) {
        //verify jwt
        jwt.verify(sessionToken, constants.JWT_SECRET, (err, decodedId) => {
            if (decodedId) {
                //verify user
                user.findOne({ username: decodedId.username }).then((user) => {
                    req['user'] = user;
                    next();
                },
                    (err) => {
                        res.status(401).send("Not Authorized!"+ decodedId.username)
                    }
                );
            }
            else {
                res.status(401).send("Not Authorized!"+ decodedId.username)
            }
        });
    }
    else {
        next();
    }
}