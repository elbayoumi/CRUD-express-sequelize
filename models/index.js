const Sequelize =  require('sequelize');
const db= require('../config/database');
const CategoryModel = require('./Category');
const UserModel = require('./User');
const PostModel = require('./Post');
const TagModel = require('./Tag');
const MessageModel= require('./Message');
//CreateModel
const Category =CategoryModel(db,Sequelize);
const User =UserModel(db,Sequelize);
const Tag =TagModel(db,Sequelize);
const Post =PostModel(db,Sequelize);
const Message=MessageModel(db,Sequelize);
const PostTag =db.define("post_tag")
const UserMessage= db.define("user_message");
//Generate Tables in database 
// force if tables already exist dont do anything else create them
db.sync({force:false}).then(()=>{
    console.log("Tables created in database");

})

module.exports={
    Category,
    User,
    Tag,
    Post,
    Message
};
// define relationships
// category and Post (one -> many)
Category.hasMany(Post, {as:"articles"});
Post.belongsTo(Category);
// user and post(one -> many)
User.hasMany(Post);
Post.belongsTo(User);
// Post and tag (many -> many)
Post.belongsToMany(User,{through:PostTag});
User.belongsToMany(Post,{through:PostTag});
// Message and user (many -> one)
User.belongsToMany(Message,{through:UserMessage});
Message.belongsToMany(User,{through:UserMessage});