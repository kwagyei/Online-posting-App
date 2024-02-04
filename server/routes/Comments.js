const express = require('express');
const router = express.Router();
const { Comments } = require("../models");

router.get("/:postId", async(req, res) => {

    const postId = req.params.postId;
    const listofPostComments = await Comments.findAll({ where: { PostId: postId, } }); //this is a sequelize function
    res.json(listofPostComments);

});

router.post("/", async(req, res) => {

    const comment = req.body;
    await Comments.create(comment); // this is also a seqeulize function
    res.json(comment);

})



module.exports = router