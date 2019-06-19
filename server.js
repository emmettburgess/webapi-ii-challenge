const express = require('express');

const postRouter = require('./data/postrouter.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`
    <h1>API Server</h1>
    `
    )
})

server.use('/api/posts', postRouter)