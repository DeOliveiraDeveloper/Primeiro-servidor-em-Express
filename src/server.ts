import express from 'express';

const server  = express();

server.get('/', (req, res) => {
    return res.send("Primeiro servidor express")
})

server.listen(80)