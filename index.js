require("dotenv").config()
// require impotratant modules
const express = require('express');
const bodyParser = require('body-parser');
//require routes
const postsRouter= require('./routes/posts');
const tagsRouter= require('./routes/tags');
const messageRouter = require('./routes/messages');
const usersRouter= require('./routes/users');
const categoriesRouter= require('./routes/categories');
//create our application
const app = express();
const port = process.env.PORT||5001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const db=require("./config/database");
app.get('/', (req, res) => {
    res.send("hallo use the api for get information");
});
// register our routes
// all of our routes will be prefixed with /api/v1/
app.use('/api/v1/', postsRouter);
app.use('/api/v1/', usersRouter);
app.use('/api/v1/', tagsRouter);
app.use('/api/v1/', messageRouter);

app.use('/api/v1/', categoriesRouter);// /api/v1/categories
db.authenticate().then(()=>{
        console.log('Connection has been established successfully.');

}).catch(err =>{
        console.error('Unable to connect to the database:', error);
});



app.listen(port, () => {
    console.log(`Listening on port http://127.0.0.1:${port}`)
});