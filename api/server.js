const express = require('express');
const server = express();

const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/users-router');
const ordersRouter = require('./orders/orders-router');


server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);
server.use('/api/orders', ordersRouter);


server.use('*', (req,res)=> {
    res.status(404).json({message:'not found'})
})

module.exports = server;