const express = require('express');
const jwt = require('jsonwebtoken');
require('./db');
const User = require('./model/user');
const Blog = require('./model/blog');

const app = express();

const PORT = 8080;

// app listening on

// implementation of jwt
// route authentication
// create login route using jwt
app.post('users/login', (req,res) => {
    const user = new User(req.body);
    jwt.sign({user:user},'secret_key',{expiresIn:'24h'},(err,token)=> {
        res.json({
            token:token
        })
    })
    try{

        await user.save();
        res.send(user);
        



    }catch(err){
        res.status(400).send(err);

    }
});

// not taking from the model
// not checking with the data base it is simple sending some post as json
app.post('/users/blog' , verifyToken , (req,res)=> {
    jwt.verify(req.token , 'secret_key',(err,data)=> {
        if(err){
            res.sendStatus(403);
        }else{
            res.json({
                message:'Post Created!',
                data
            })
        }

    })
})




// Token 
// authorizateion : Bearer <access_token>

function verifyToken(req,res,next){

    const bearerHeader = req.headers['authorization'];

    // checking bearer is undefined or not

    if(typeof bearerHeader !== 'undefined' ){
        const bearer = bearerHeader.split('');

        //get token
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next(); // middleware
    }else{
        res.sendStatus(403);
    }
}


app.listen(PORT , () => {
    console.log(`Server is listening on ${PORT}`)
})