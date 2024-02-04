const express = require('express');
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt")




router.post("/", async(req, res) => {

    const { username, password } = req.body;

    const user = await Users.findOne({ where: { username: username } });
    if (!user) {

        bcrypt.hash(password, 10).then((hash) => {
            Users.create({
                username: username,
                password: hash
            });

            res.json("SUCCESS")

        });
    } else { res.json("username already exists") }

});

router.post("/login", async(req, res) => {

    const { username, password } = req.body;

    const user = await Users.findOne({ where: { username: username } });

    if (!user) {

        res.json("user Doesnt Exist");

    } else {

        bcrypt.compare(password, user.password).then((match) => {

            if (!match) {

                res.json("Wrong Password");

            } else { res.json("Logged in") }


        })

    }




})

module.exports = router