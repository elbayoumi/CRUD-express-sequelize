
const express = require('express');
const router = express.Router();
const {Category,Post}=require('../models');


router.route('/categories').get((req,res) => {
    Category.findAll().then((category) => {
        res.json(category);
    })
})
.post((req,res) => {
    let body = req.body;
    Category.create(body).then((category) => {
        res.json(category);
    })
    .catch((err) => {  
        res.status(403).json({
            message:`your request failed because ${body.title} is exist in database`,
            "error message": err.message,

        });
    })
})

// find postss belongs to  a specific Category

router.route('/categories/:categoryid/posts').get((req,res) => {
    Category.findAll({
        where:{id:req.params.categoryid},
        include:[
            {model:Post, as:"articles"}
        ]
    })
    .then(result => {res.json(result)});
})

module.exports=router
