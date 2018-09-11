var router = require("express").Router();
var bcrypt = require('bcryptjs');
var User = require("../models/user");
var jwt = require("jsonwebtoken");
var constants = require("../config/constants");
router.post('/', (req, res) => {
    User.findOne({username:req.body.user.username}).then((user) => {
        if(user) {
            bcrypt.compare(req.body.user.pwd, user.passhash, (err, matches) => {
                if(matches) {
                    var sessionToken = jwt.sign({username:user.username}, constants.JWT_SECRET, {expiresIn: '60m', algorithm: 'HS256' });
                    res.json({
                        user: user,
                        message: "Successfully Authenticated",
                        sessionToken: sessionToken
                    });
                }
                else {
                    res.json({
                        user: {},
                        message: "Failed to authenticate",
                        sessionToken: ''
                    });
                }
            })
        }
        else {
            res.json({
                user: {},
                message: "Invalid Username",
                sessionToken: ''
            });
        }
    }, (err) => {
        res.json({
            user: {},
            message: "Failed to authenticate",
            sessionToken: ''
        });
    });

});
module.exports = router;