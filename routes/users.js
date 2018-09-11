var router = require("express").Router();
var bcrypt = require('bcryptjs');
var User = require("../models/user");
var jwt = require("jsonwebtoken");
var constants = require("../config/constants");

router.post("/", (req, res) => {
    User.findOne({username: req.body.user.username}).then((existingUser)=> {
        if(existingUser) {
            res.json({
                message: "User already exists",
                user: existingUser
            });
        }
        var user = new User({
            username: req.body.user.username,
            email: req.body.user.email,
            passhash: bcrypt.hashSync(req.body.user.pwd, 10)
        }); 
    
        user.save().then((newUser) => {
            var sessionToken = jwt.sign({username:newUser.username}, constants.JWT_SECRET, {expiresIn: '60m', algorithm: 'HS256' });
            res.json({
                user: newUser,
                message: "Success",
                sessionToken: sessionToken
            })
        }, (err) => {
            res.status(500).send(err.message);
        });

    });
});

module.exports = router;