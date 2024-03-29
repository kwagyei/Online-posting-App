const express = require('express');
const router = express.Router();
const { Posts } = require("../models");

router.get("/", async(req, res) => {
    const listofPosts = await Posts.findAll(); //this is a sequelize function
    res.json(listofPosts);

});

router.get("/:id", async(req, res) => {

    const itemId = req.params.id;
    const clickedPost = await Posts.findByPk(itemId);
    res.json(clickedPost);

});


router.post("/", async(req, res) => {

    const post = req.body;
    await Posts.create(post); // this is also a seqeulize function
    res.json(post);

})

module.exports = router