require('dotenv').config();

const express = require('express');
const massive = require('massive');
const session = require('express-session');
const auth = require('./controller/authController');
// const post = require('./controller/postController');

const {SESSION_SECRET, SERVER_PORT, CONNECTION_STRING} = process.env

const app = express();

app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie:{
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then( db => {
    app.set('db', db)
    console.log('Hey! What are you doin in ma swap!')
}).catch (err => console.log(err))

//Auth Endpoints
app.post('/auth/register', auth.register);
app.post('/auth/login', auth.login);
app.post('/auth/logout', auth.logout);
app.get('/api/user', auth.getUser);

app.listen(SERVER_PORT, ()=>console.log(`Welcome to port ${SERVER_PORT} such a perfect port`))