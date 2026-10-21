
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import "dotenv/config"

const PORT = process.env.PORT || 8081;

const app = express();

app.get('/', (req,res) => {
    res.send("Hello world");
})

app.get('/health',(_req,res) => {
    res.send({status : "ok"});
})

app.listen(PORT, () => {
    console.log(`server is runing on port ${PORT}`);
})